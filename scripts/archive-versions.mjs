// Publishes earlier versions of this site, straight from git history, under
// public/museum/<year>/ before `astro dev` and `astro build` (npm runs it as
// predev and prebuild), so they work in both. That folder is git-ignored: the
// files are read from the commit that was live at the time, never committed.
//
// Versions come either from this repository's own history or from the separate
// repositories the older sites lived in. Those are cloned (history only, no
// working files) into the git-ignored .archive-sources/ folder the first time.
// They are private: locally your own GitHub login is used, and in the deploy
// workflow a read-only token from the ARCHIVE_TOKEN repository secret (sent as
// a header, so it never appears in a URL or the logs). A repository that can't
// be reached is skipped with a warning, so a build without access still
// succeeds, just without that version.
//
// Each page gets a small bar linking back to the current site, is kept out of
// search engines, and has its root-absolute paths (favicons) made relative so
// it works from a subfolder.
//
// To add a version: add it below and give it an entry in
// src/components/Archive.astro. In CI the checkout needs the full history
// (fetch-depth: 0) for the versions from this repository.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const github = (name) => `https://github.com/LuukNoverraz/${name}.git`;

const versions = [
  // from this repository's history
  { year: '2023', commit: 'ab8ad59', skip: ['CNAME', 'LICENSE', '.gitattributes'] },
  // yourMokum was a separate project hosted next to the site; nothing linked to it.
  // downloadable/ held two old CVs.
  { year: '2022', commit: '251d614', skip: ['yourMokum/', 'CNAME', 'downloadable/'] },
  // from their own repositories
  { year: '2021', repo: github('portfolio-4'), commit: 'HEAD', skip: ['CNAME', '.gitattributes'] },
  { year: '2020', repo: github('luuknoverraz-portfolio'), commit: 'HEAD', skip: ['.gitattributes'] },
  { year: '2019', repo: github('portfolio-3'), commit: 'HEAD', skip: ['.gitattributes'] },
  { year: '2018', repo: github('portfolio-2'), commit: 'HEAD', skip: ['CNAME'] },
  { year: '2017', repo: github('portfolio-1'), commit: 'HEAD', skip: ['CNAME'] },
];

const run = (args) => execFileSync('git', args, { maxBuffer: 512 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });

// git arguments that read from the right repository, cloning it first if needed
const source = (repo) => {
  if (!repo) return [];
  const dir = join('.archive-sources', repo.split('/').pop());
  if (!existsSync(dir)) {
    mkdirSync('.archive-sources', { recursive: true });
    const token = process.env.ARCHIVE_TOKEN;
    const auth = token
      ? ['-c', `http.https://github.com/.extraheader=AUTHORIZATION: basic ${Buffer.from(`x-access-token:${token}`).toString('base64')}`]
      : [];
    execFileSync('git', [...auth, 'clone', '--quiet', '--bare', repo, dir], {
      stdio: ['ignore', 'ignore', 'pipe'],
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
    });
  }
  return ['--git-dir', dir];
};

const bar = (year) => `
<!-- added when archived: a way back to the current site -->
<div role="note" style="all:initial;position:fixed;z-index:2147483647;inset:auto 0 0 0;display:flex;flex-wrap:wrap;gap:.25rem 1rem;justify-content:center;align-items:center;padding:.6rem 1rem;background:#efede8;color:#161214;font:14px/1.4 Georgia,'Times New Roman',serif;letter-spacing:.04em;box-shadow:0 -1px 0 rgb(22 18 20/.15)">
  <span style="all:unset">Archived version of this site, ${year}</span>
  <a href="/museum/" onclick="if(document.referrer.indexOf(location.origin+'/')===0&&document.referrer.indexOf('/museum/')>0){location.href=document.referrer;return false}" style="all:unset;color:#ce2a29;text-decoration:underline;text-underline-offset:.2em;cursor:pointer">Back to the current site</a>
</div>
`;

const fixHtml = (html, year) =>
  html
    // favicons and the like pointed at the site root; make them relative
    .replace(/\b(href|src)="\/(?!\/)/g, '$1="')
    // keep old copies out of search results
    .replace(/<head([^>]*)>/i, `<head$1>\n    <meta name="robots" content="noindex">`)
    .replace(/<\/body>/i, `${bar(year)}</body>`);

let total = 0;
for (const { year, repo, commit, skip } of versions) {
  const root = join('public', 'museum', year);
  rmSync(root, { recursive: true, force: true });

  let from;
  let files;
  try {
    from = source(repo);
    files = run([...from, 'ls-tree', '-r', '-z', '--name-only', commit])
      .toString()
      .split('\0')
      .filter((f) => f && !skip.some((s) => f === s || f.startsWith(s)) && !f.endsWith('.DS_Store'));
  } catch (err) {
    console.warn(`archive: skipped ${year} (${repo ?? commit}): ${String(err.stderr || err.message).trim().split('\n')[0]}`);
    continue;
  }

  for (const file of files) {
    let data = run([...from, 'cat-file', 'blob', `${commit}:${file}`]);
    if (file.endsWith('.html')) data = Buffer.from(fixHtml(data.toString('utf8'), year), 'utf8');
    const out = join(root, file);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, data);
    total += data.length;
  }
  console.log(`archive: ${year} (${repo ? repo.split('/').pop().replace('.git', '') : commit}) -> ${root}/, ${files.length} files`);
}
console.log(`archive: ${(total / 1048576).toFixed(1)} MB in total`);

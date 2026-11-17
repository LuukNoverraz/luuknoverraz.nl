// Publishes earlier versions of this site, straight from git history, under
// dist/archive/<year>/ after `astro build`. Nothing is copied into the repository:
// the files are read from the commit that was live at the time.
//
// Each page gets a small bar linking back to the current site, is kept out of
// search engines, and has its root-absolute paths (favicons) made relative so
// it works from a subfolder.
//
// To add a version: add its year and commit below (and an entry in
// src/components/Archive.astro). In CI the checkout needs the full history
// (fetch-depth: 0).

import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const versions = [
  // yourMokum was a separate project hosted next to the site; nothing linked to it.
  { year: '2022', commit: '251d614', skip: ['yourMokum/', 'CNAME', 'downloadable/'] },
  { year: '2023', commit: 'ab8ad59', skip: ['CNAME', 'LICENSE', '.gitattributes'] },
];

const git = (...args) => execFileSync('git', args, { maxBuffer: 512 * 1024 * 1024 });

const bar = (year) => `
<!-- added when archived: a way back to the current site -->
<div role="note" style="all:initial;position:fixed;z-index:2147483647;inset:auto 0 0 0;display:flex;flex-wrap:wrap;gap:.25rem 1rem;justify-content:center;align-items:center;padding:.6rem 1rem;background:#efede8;color:#161214;font:14px/1.4 Georgia,'Times New Roman',serif;letter-spacing:.04em;box-shadow:0 -1px 0 rgb(22 18 20/.15)">
  <span style="all:unset">Archived version of this site, ${year}</span>
  <a href="/archive/" onclick="if(document.referrer.indexOf(location.origin+'/')===0&&document.referrer.indexOf('/archive/')>0){location.href=document.referrer;return false}" style="all:unset;color:#ce2a29;text-decoration:underline;text-underline-offset:.2em;cursor:pointer">Back to the current site</a>
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
for (const { year, commit, skip } of versions) {
  const files = git('ls-tree', '-r', '-z', '--name-only', commit)
    .toString()
    .split('\0')
    .filter((f) => f && !skip.some((s) => f === s || f.startsWith(s)) && !f.endsWith('.DS_Store'));

  for (const file of files) {
    let data = git('cat-file', 'blob', `${commit}:${file}`);
    if (file.endsWith('.html')) data = Buffer.from(fixHtml(data.toString('utf8'), year), 'utf8');
    const out = join('dist', 'archive', year, file);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, data);
    total += data.length;
  }
  console.log(`archive: ${year} (${commit}) -> dist/archive/${year}/, ${files.length} files`);
}
console.log(`archive: ${(total / 1048576).toFixed(1)} MB in total`);

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
// Each version is shown in a frame page with a bar linking back; its own pages are kept out of
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
  {
    year: '2017',
    repo: github('portfolio-1'),
    commit: 'HEAD',
    skip: ['CNAME'],
    // Small repairs, nothing redesigned:
    repair: (file, text) =>
      !file.startsWith('css/')
        ? text
        : text
            // the header image and background were hot-linked through services that
            // no longer exist; the same images are in the repository itself
            .replace("url('http://bit.do/luukheaderNL')", "url('../images/Header.png')")
            .replace("url('http://bit.do/luukheaderEN')", "url('../images/HeaderEN.png')")
            .replace("url('https://j.gifs.com/mQRPZO.gif')", "url('../images/nature bw.gif')") +
          // the big "Welkom!" heading hangs over the flags and the menu, so clicks
          // never reached them; let them through
          '\n/* museum repair: let clicks through the heading to the menu */\nheader h1 { pointer-events: none; }\n',
  },
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

// The old site itself goes in <year>/site/ and is left as it was, apart from the
// fixes below. <year>/index.html is a frame: a slim bar in today's style with a
// way back, and the old site filling the rest of the screen underneath, so the
// two never overlap or fight over clicks.

const fixHtml = (html) =>
  html
    // favicons and the like pointed at the site root; make them relative
    .replace(/\b(href|src)="\/(?!\/)/g, '$1="')
    // keep old copies out of search results
    // (the pattern must not match <header>)
    .replace(/<head(\s[^>]*)?>/i, `<head$1>\n    <meta name="robots" content="noindex">`)
    // links to other sites leave the frame instead of opening inside it
    .replace(
      /<\/body>/i,
      `<script>document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(a&&a.origin!==location.origin&&!a.target)a.target='_top'},true)</script>\n</body>`,
    );

// The bar's words in each language of the site, and where each language's museum is.
const labels = {
  nl: ['Portfoliomuseum', 'Terug', '/museum/'],
  en: ['Portfolio museum', 'Back', '/en/museum/'],
  de: ['Portfolio-Museum', 'Zurück', '/de/museum/'],
  fr: ['Musée du portfolio', 'Retour', '/fr/museum/'],
  es: ['Museo del portfolio', 'Volver', '/es/museum/'],
  ja: ['ポートフォリオ博物館', '戻る', '/ja/museum/'],
  zh: ['作品集博物馆', '返回', '/zh/museum/'],
};

const frame = (year) => `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Portfolio museum: ${year}</title>
<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg">
<style>
@font-face { font-family: mincho; src: url(/fonts/ShipporiMincho-Medium.woff2) format('woff2'); font-display: swap; }
html, body { margin: 0; height: 100%; background: #efede8; color: #161214; }
body { display: grid; grid-template-rows: auto minmax(0, 1fr); }
header {
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 1rem;
  padding: 0.65rem clamp(1rem, 4vw, 3rem); border-bottom: 1px solid #d6d2cb;
  font: 15px/1.4 mincho, 'Hiragino Mincho ProN', 'Yu Mincho', Georgia, serif; letter-spacing: 0.08em;
}
a { color: inherit; text-decoration: none; justify-self: start; }
a:hover, a:focus-visible { color: #ce2a29; }
a:focus-visible { outline: 2px solid #ce2a29; outline-offset: 3px; }
.year { color: #ce2a29; }
iframe { display: block; width: 100%; height: 100%; border: 0; background: #fff; }
@media (prefers-reduced-motion: no-preference) {
  a { transition: color 0.15s ease; }
  iframe { animation: fade-in 0.4s ease-out; }
  @keyframes fade-in { from { opacity: 0; } }
}
</style>
</head>
<body>
<header>
  <a id="back" href="/museum/"><span aria-hidden="true">←</span> <span id="back-label">Terug</span></a>
  <span><span id="title">Portfoliomuseum</span> · <span class="year">${year}</span></span>
</header>
<iframe src="site/" title="Luuk Noverraz, ${year}"></iframe>
<script>
(function () {
  var labels = ${JSON.stringify(labels)};
  // the language of the museum page you came from, else the one you chose before, else your browser's
  var lang, back;
  try {
    var ref = document.referrer ? new URL(document.referrer) : null;
    if (ref && ref.origin === location.origin) {
      var m = ref.pathname.match(/^\\/(?:([a-z]{2})\\/)?museum\\/$/);
      if (m) { lang = m[1] || 'nl'; back = ref.pathname; }
    }
  } catch (e) {}
  if (!lang) { try { lang = localStorage.getItem('lang'); } catch (e) {} }
  if (!labels[lang]) {
    var prefs = navigator.languages || [navigator.language];
    for (var i = 0; i < prefs.length && !labels[lang]; i++) lang = String(prefs[i]).slice(0, 2).toLowerCase();
  }
  if (!labels[lang]) lang = 'nl';
  var l = labels[lang];
  document.documentElement.lang = lang;
  document.getElementById('title').textContent = l[0];
  document.getElementById('back-label').textContent = l[1];
  document.getElementById('back').href = back || l[2];
  document.title = l[0] + ': ${year}';
})();
</script>
</body>
</html>
`;

let total = 0;
for (const { year, repo, commit, skip, repair } of versions) {
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
    if (file.endsWith('.html')) data = Buffer.from(fixHtml(data.toString('utf8')), 'utf8');
    if (repair && /\.(html|css|js)$/.test(file)) data = Buffer.from(repair(file, data.toString('utf8')), 'utf8');
    const out = join(root, 'site', file);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, data);
    total += data.length;
  }
  writeFileSync(join(root, 'index.html'), frame(year));
  console.log(`archive: ${year} (${repo ? repo.split('/').pop().replace('.git', '') : commit}) -> ${root}/, ${files.length} files`);
}
console.log(`archive: ${(total / 1048576).toFixed(1)} MB in total`);

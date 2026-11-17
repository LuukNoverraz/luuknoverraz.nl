// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The archived sites in public/archive/<year>/ use folder addresses like
// /archive/2023/ or ../projects. GitHub Pages redirects a folder to its slashed
// address and serves its index.html; the dev server doesn't, so this does the
// same while developing. It is put in front of Astro's own handling (which would
// answer a missing trailing slash with a 404) once Astro has set that up.
/** @type {import('connect').NextHandleFunction} */
const archiveFolderHandler = (req, res, next) => {
  const [path, query] = (req.url ?? '').split('?');
  if (!/^\/archive\/\d{4}(\/|$)/.test(path) || /\.[a-z0-9]+$/i.test(path)) return next();
  if (!path.endsWith('/')) {
    res.writeHead(301, { Location: `${path}/${query ? `?${query}` : ''}` });
    return res.end();
  }
  req.url = `${path}index.html${query ? `?${query}` : ''}`;
  next();
};
const archiveFolders = {
  name: 'archive-folders',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          plugins: [
            {
              name: 'archive-folders',
              apply: 'serve',
              // the returned function runs after Astro's, so this ends up first
              configureServer: (server) => () => {
                server.middlewares.stack.unshift({ route: '', handle: archiveFolderHandler });
              },
            },
          ],
        },
      });
    },
  },
};

export default defineConfig({
  site: 'https://luuknoverraz.nl',
  trailingSlash: 'always',
  integrations: [
    // Lists every page for search engines; the per-page <link rel="alternate">
    // tags carry the NL/EN pairing.
    sitemap({ filter: (page) => !page.includes('/404') }),
    archiveFolders,
  ],
  build: {
    // Inline the (small) stylesheet into each page: one less render-blocking request.
    inlineStylesheets: 'always',
  },
  // No Astro toolbar over the page while developing.
  devToolbar: { enabled: false },
  // Emits a strict Content-Security-Policy <meta> tag with hashes for every inline script/style.
  security: {
    csp: true,
  },
});

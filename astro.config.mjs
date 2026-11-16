// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luuknoverraz.nl',
  trailingSlash: 'always',
  integrations: [
    // Lists every page for search engines; the per-page <link rel="alternate">
    // tags carry the NL/EN pairing.
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
  build: {
    // Inline the (small) stylesheet into each page: one less render-blocking request.
    inlineStylesheets: 'always',
  },
  // Emits a strict Content-Security-Policy <meta> tag with hashes for every inline script/style.
  security: {
    csp: true,
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luuknoverraz.nl',
  trailingSlash: 'always',
  build: {
    // Inline the (small) stylesheet into each page: one less render-blocking request.
    inlineStylesheets: 'always',
  },
  // Emits a strict Content-Security-Policy <meta> tag with hashes for every inline script/style.
  security: {
    csp: true,
  },
});

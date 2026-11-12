# luuknoverraz.nl

Personal portfolio of Luuk Noverraz. Static site built with [Astro](https://astro.build): it outputs plain HTML and CSS with about 1 KB of JavaScript, and has no runtime framework.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

Requires Node 22.23.4 or newer.

## Where things live

| What | Where |
| --- | --- |
| All text (NL + EN), experience, education, skills | `src/content.ts` |
| Project images, posters, alt texts | `src/projects.ts`, `src/assets/` |
| Page markup | `src/components/Page.astro`, `src/layouts/Base.astro` |
| Styles | `src/styles/global.css` |
| Fonts, icons, video loops, favicons | `public/` |

Routes: `/` (NL), `/en/`, and one page per project (`/barbasim/`, `/en/barbasim/`, …), all generated from the same content file.

## Adding or changing media

- **Images** go in `src/assets/`. Astro converts them to AVIF/WebP at the right sizes at build time.
- **Video loops** go in `public/videos/`, as a `.webm` and an `.mp4` of the same clip. Keep them short, silent and small:

  ```sh
  ffmpeg -i in.mov -t 15 -an -vf "scale=1280:-2,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 out.webm
  ffmpeg -i in.mov -t 15 -an -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart out.mp4
  ```

  Then grab the first frame as the poster and save it to `src/assets/posters/`:

  ```sh
  ffmpeg -i out.mp4 -frames:v 1 poster.png
  ```

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. In the repo, **Settings → Pages → Source** must be set to **GitHub Actions**. The workflow also rebuilds on 1 January and 1 October so the © year and study year stay current.

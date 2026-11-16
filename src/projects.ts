import type { ImageMetadata } from 'astro';
import type { Lang, ProjectSlug } from './content';
import everestHalfFull from './assets/posters/everest-half-full.jpg';
import yourHonorWtf from './assets/posters/your-honor-wtf.png';
import gnosticDeathExperience from './assets/posters/gnostic-death-experience.png';
import sheepKeep from './assets/posters/sheep-keep.png';

interface ProjectMedia {
  poster: ImageMetadata;
  /** Base name of an optional loop in /public/videos (.webm + .mp4), played over the poster. */
  video?: string;
  /** One optional image per paragraph, same order as the paragraphs in content.ts. */
  images: ({ src: ImageMetadata; alt: Record<Lang, string> } | null)[];
}

// One entry per slug in content.ts. Import images from ./assets and list them here.
export const media: Record<ProjectSlug, ProjectMedia> = {
  'everest-half-full': { poster: everestHalfFull, images: [] },
  'your-honor-wtf': { poster: yourHonorWtf, images: [] },
  'gnostic-death-experience': { poster: gnosticDeathExperience, images: [] },
  'sheep-keep': { poster: sheepKeep, images: [] },
};

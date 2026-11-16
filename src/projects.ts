import type { ImageMetadata } from 'astro';
import type { Lang, ProjectSlug } from './content';

interface ProjectMedia {
  poster: ImageMetadata;
  /** Base name of the loop in /public/videos (.webm + .mp4). */
  video: string;
  /** One optional image per paragraph, same order as the paragraphs in content.ts. */
  images: ({ src: ImageMetadata; alt: Record<Lang, string> } | null)[];
}

// One entry per slug in content.ts. Import images from ./assets and list them here.
export const media: Record<ProjectSlug, ProjectMedia> = {};

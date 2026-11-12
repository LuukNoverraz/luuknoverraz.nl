import type { ImageMetadata } from 'astro';
import type { Lang, ProjectSlug } from './content';

import b1 from './assets/images/barbasim/image1.png';
import b2 from './assets/images/barbasim/image2.png';
import b3 from './assets/images/barbasim/image3.png';
import b4 from './assets/images/barbasim/image4.png';
import b5 from './assets/images/barbasim/image5.png';
import d0 from './assets/images/destreng/image0.png';
import d1 from './assets/images/destreng/image1.png';
import d2 from './assets/images/destreng/image2.png';
import d3 from './assets/images/destreng/image3.png';
import posterBarbasim from './assets/posters/barbasim.png';
import posterDestreng from './assets/posters/destreng.png';
import posterMagmaroni from './assets/posters/magmaroni.png';

interface ProjectMedia {
  poster: ImageMetadata;
  /** Base name of the loop in /public/videos (.webm + .mp4). */
  video: string;
  /** One optional image per paragraph, same order as the paragraphs in content.ts. */
  images: ({ src: ImageMetadata; alt: Record<Lang, string> } | null)[];
}

export const media: Record<ProjectSlug, ProjectMedia> = {
  barbasim: {
    poster: posterBarbasim,
    video: 'barbasim',
    images: [
      { src: b1, alt: { nl: 'Het eerste ontwerp van de beestjes: blokvormige wezens met ogen', en: 'The first design of the creatures: blocky creatures with eyes' } },
      { src: b2, alt: { nl: 'Schetsen voor beestjes in 2D', en: 'Sketches of 2D creatures' } },
      { src: b3, alt: { nl: 'Eerste 3D-model: een blokje met benen', en: 'First 3D model: a block with legs' } },
      { src: b4, alt: { nl: 'Eerste willekeurige 3D-wereld (oneindig) naast een willekeurig 3D-eiland', en: 'First random 3D world (infinite) next to a random 3D island' } },
      { src: b5, alt: { nl: 'De eerste willekeurig gegenereerde Barba op het eiland', en: 'The first randomly generated Barba on the island' } },
      null,
    ],
  },
  'de-streng': {
    poster: posterDestreng,
    video: 'destreng',
    images: [
      { src: d0, alt: { nl: 'De oude website van De Streng', en: 'The old De Streng website' } },
      { src: d1, alt: { nl: 'Het oude logo naast het nieuwe kleurenpalet en logo-varianten', en: 'The old logo next to the new colour palette and logo variants' } },
      { src: d2, alt: { nl: 'Ontwerp van de nieuwe homepage van De Streng', en: 'Design of the new De Streng homepage' } },
      { src: d3, alt: { nl: 'Ontwerp van de secties Ververij en Onze webwinkels', en: 'Design of the dye works and web shops sections' } },
    ],
  },
  magmaroni: {
    poster: posterMagmaroni,
    video: 'magmaroni',
    images: [null],
  },
};

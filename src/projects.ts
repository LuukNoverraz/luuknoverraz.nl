import type { ImageMetadata } from 'astro';
import type { Lang, ProjectSlug } from './content';
import everestHalfFull from './assets/posters/everest-half-full.jpg';
import yourHonorWtf from './assets/posters/your-honor-wtf.png';
import gnosticDeathExperience from './assets/posters/gnostic-death-experience.png';
import sheepKeep from './assets/posters/sheep-keep.png';
import ehfValley from './assets/images/everest-half-full/valley.jpg';
import ehfSummitNight from './assets/images/everest-half-full/summit-night.jpg';
import ehfBaseCamp from './assets/images/everest-half-full/base-camp.jpg';
import yhVerdictCaveman from './assets/images/your-honor-wtf/verdict-caveman.jpg';
import yhAccusation from './assets/images/your-honor-wtf/accusation.jpg';
import yhVerdictPirate from './assets/images/your-honor-wtf/verdict-pirate.jpg';
import yhSelectCharacters from './assets/images/your-honor-wtf/select-characters.jpg';
import gdePillar from './assets/images/gnostic-death-experience/pillar.jpg';
import gdeFloatingBlocks from './assets/images/gnostic-death-experience/floating-blocks.jpg';
import gdeEye from './assets/images/gnostic-death-experience/eye.jpg';
import skMeadow from './assets/images/sheep-keep/meadow.jpg';
import skShip from './assets/images/sheep-keep/ship.jpg';
import skVolcano from './assets/images/sheep-keep/volcano.jpg';
import tHfcycts from './assets/thumbs/hfcycts.jpg';
import tHeroOfLight from './assets/thumbs/hero-of-light.jpg';
import tInvasiveProcedure from './assets/thumbs/invasive-procedure.jpg';
import tPostItPrison from './assets/thumbs/post-it-prison.jpg';
import tScpAtHome from './assets/thumbs/scp-at-home.jpg';
import tDicetective from './assets/thumbs/dicetective.jpg';
import tNightStrollAmbush from './assets/thumbs/night-stroll-ambush.jpg';
import tZerotrace from './assets/thumbs/zerotrace.jpg';
import tBarbasim from './assets/thumbs/barbasim.jpg';
import tSumoShooters from './assets/thumbs/sumo-shooters.jpg';

interface ProjectMedia {
  /** Cover, shown in the list on the home page. */
  poster: ImageMetadata;
  /** Large image at the top of the project's page; the poster is used when left out. */
  hero?: ImageMetadata;
  /** Base name of an optional loop in /public/videos (.webm + .mp4), played over the poster. */
  video?: string;
  /** One optional image per paragraph, same order as the paragraphs in content.ts. */
  images: ({ src: ImageMetadata; alt: Record<Lang, string> } | null)[];
}

// One entry per slug in content.ts. Import images from ./assets and list them here.
export const media: Record<ProjectSlug, ProjectMedia> = {
  'everest-half-full': {
    poster: everestHalfFull,
    images: [
      {
        src: ehfValley,
        alt: {
          nl: 'Een gehandschoende hand houdt een vol glas water vast in een groen dal, met besneeuwde bergen in de verte.',
          en: 'A gloved hand holds a full glass of water in a green valley, with snowy mountains in the distance.',
        },
      },
      {
        src: ehfSummitNight,
        alt: {
          nl: 'Het glas water bij nacht, hoog boven een zee van bergtoppen onder een sterrenhemel.',
          en: 'The glass of water at night, high above a sea of peaks under a starry sky.',
        },
      },
      {
        src: ehfBaseCamp,
        alt: {
          nl: 'Het glas water op een rotsige vlakte bij twee tenten van Base Camp, tussen besneeuwde hellingen.',
          en: 'The glass of water on a rocky plain near two Base Camp tents, between snowy slopes.',
        },
      },
    ],
  },
  'your-honor-wtf': {
    poster: yourHonorWtf,
    hero: yhVerdictCaveman,
    images: [
      {
        src: yhAccusation,
        alt: {
          nl: 'Een speler typt een aanklacht tegen een andere speler terwijl de tijd loopt.',
          en: 'A player types an accusation against another player while the timer runs.',
        },
      },
      {
        src: yhVerdictPirate,
        alt: {
          nl: 'Een rechter met piratenhoed doet in piratentaal uitspraak tussen de twee spelers.',
          en: 'A judge in a pirate hat delivers a verdict in pirate speak between the two players.',
        },
      },
      {
        src: yhSelectCharacters,
        alt: {
          nl: 'Het keuzescherm waar vijf spelers elk een personage kiezen.',
          en: 'The selection screen where five players each pick a character.',
        },
      },
    ],
  },
  'gnostic-death-experience': {
    poster: gnosticDeathExperience,
    hero: gdeEye,
    images: [
      {
        src: gdePillar,
        alt: {
          nl: 'Een witte pilaar en donkere blokken boven een witte vlakte, met zwevende ogen op de achtergrond.',
          en: 'A white pillar and dark blocks above a white plain, with floating eyes in the background.',
        },
      },
      {
        src: gdeFloatingBlocks,
        alt: {
          nl: 'Blokken die los in het zwart zweven, gezien vanuit de speler, met de timer bovenin.',
          en: 'Blocks floating loose in the dark, seen from the player, with the timer at the top.',
        },
      },
    ],
  },
  'sheep-keep': {
    poster: sheepKeep,
    hero: skShip,
    images: [
      {
        src: skMeadow,
        alt: {
          nl: 'De herder en twee schapen bij een hut in een donker heuvellandschap, met de teller van geredde schapen.',
          en: 'The shepherd and two sheep by a hut in a dark, hilly landscape, with the count of rescued sheep.',
        },
      },
      {
        src: skVolcano,
        alt: {
          nl: 'De vulkaan barst uit boven de heuvels.',
          en: 'The volcano erupts above the hills.',
        },
      },
    ],
  },
};

// Small covers for the earlier games, keyed by the last part of each game's itch.io link.
export const earlierThumbs: Record<string, ImageMetadata> = {
  'hfcycts': tHfcycts,
  'hero-of-light': tHeroOfLight,
  'invasive-procedure': tInvasiveProcedure,
  'post-it-prison': tPostItPrison,
  'scp-at-home': tScpAtHome,
  'dicetective': tDicetective,
  'night-stroll-ambush': tNightStrollAmbush,
  'zerotrace': tZerotrace,
  'barbasim': tBarbasim,
  'sumo-shooters': tSumoShooters,
};

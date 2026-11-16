// All site copy lives here, once per language. Pages are generated from this at build time,
// so there is no client-side translation and both languages are real, indexable URLs.

export type Lang = 'nl' | 'en';
export const langs: Lang[] = ['nl', 'en'];

/** URL prefix per language. Dutch stays at the root so existing links keep working. */
export const base = (lang: Lang) => (lang === 'nl' ? '/' : '/en/');

// Projects shown under the card, in this order. To add one: add its slug here, its
// copy under `projects` (both languages) and its media in projects.ts.
export const projectSlugs: readonly string[] = [
  'your-honor-wtf',
  'gnostic-death-experience',
  'sheep-keep',
];
export type ProjectSlug = string;

// Year in the footer, worked out at build time (the deploy workflow rebuilds
// the site every 1 January so it stays current).
export const year = new Date().getFullYear();

interface Entry {
  title: string;
  org: string;
  date: string;
  description?: string;
}

interface ProjectCopy {
  slogan: string;
  duration: string;
  /** What I did on it. */
  role: string;
  tools: string;
  /** Where it can be played. */
  link: string;
  /** Paragraphs; may contain trusted inline HTML (<i>, <a>, <q>). */
  paragraphs: string[];
}

interface Copy {
  htmlLang: string;
  meta: { title: string; description: string; locale: string };
  nav: { skip: string };
  role: string;
  location: string;
  social: { mail: string; linkedin: string; github: string };
  back: string;
  projectLabels: { date: string; role: string; tools: string; link: string };
  projects: Record<ProjectSlug, ProjectCopy & { name: string }>;
  education: { title: string; schools: Entry[] };
  footer: { source: string };
  notFound: { title: string; text: string; home: string };
  /** Business card on the home page, and the section below it. */
  card: { mail: string };
  work: { title: string; view: string; play: string };
}

export const copy: Record<Lang, Copy> = {
  nl: {
    htmlLang: 'nl',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – student filosofie, gameontwikkelaar en webontwikkelaar uit Amsterdam.',
      locale: 'nl_NL',
    },
    nav: { skip: 'Naar inhoud' },
    role: 'Student filosofie / Gameontwikkelaar / Webontwikkelaar',
    location: 'Anno 2004, Amsterdam',
    social: { mail: 'Stuur een e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Terug',
    projectLabels: { date: 'Periode', role: 'Rol', tools: 'Tools', link: 'Spelen' },
    projects: {
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'Een rechtbank-partygame waarin de rechters AI zijn',
        duration: 'juli – augustus 2025',
        role: 'Solo: ontwerp, code, art en assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Twee spelers staan tegenover elkaar in de rechtbank: de een klaagt aan, de ander verdedigt, en maximaal vier anderen vormen de jury. De aanklachten zijn verzonnen, zoals het stelen van de maan of het beledigen van een gans. Daarna doet een AI-rechter uitspraak. Er zijn tien rechters met elk een eigen karakter, van een holbewoner tot een baby.',
          'Ik heb het hele spel zelf gemaakt, inclusief alle art en assets, voor de Player2 AI NPC Jam in de zomer van 2025. Het werd vijfde van de 46 inzendingen en won $500. De jury noemde het <q lang="en">a great way to settle arguments IRL</q>.',
          'Het is bedoeld voor twee tot zes spelers in één kamer en draait in de browser en op Windows en Linux. Om te spelen heb je de Player2-app nodig.',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: 'Firstperson-parkour om uit de reïncarnatiecyclus te ontsnappen',
        duration: 'mei 2024 · 4 dagen',
        role: 'Solo: spel, art, assets en muziek',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'Je bent dood en het licht komt je halen. Ren, buk en dash naar de uitgang voordat het je inhaalt en je terugstuurt voor een volgend leven. Het is een firstperson-parkourgame, gemaakt om te speedrunnen, in een low-poly stijl uit het PlayStation-tijdperk.',
          'Ik heb het in vier dagen gemaakt voor SpeedJam #5, in mijn eentje, inclusief alle art, de 3D-assets en de muziek. Ik werk nu aan een remake voor het web en Discord.',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: 'Red je schapen voordat de lava komt',
        duration: 'mei 2024 · 2 dagen',
        role: 'Art, 3D-modellen en gamelogica, samen met homhom',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'Je bent Jörgen, een IJslandse schaapherder. Je past op je schapen zoals op elke andere dag, tot de grond begint te rommelen. Red zo veel mogelijk schapen voordat je huis onder de lava verdwijnt.',
          'Gemaakt in twee dagen met homhom voor Micro Jam 013, met als thema lava en als regel dat de tijd beperkt is. Ik maakte de artwork en de 3D-modellen, en een groot deel van de gamelogica schreven we samen. Gebouwd in Godot, met poëzie van Plutbios.',
        ],
      },
    },
    education: {
      title: 'Opleidingen',
      schools: [
        { title: 'Filosofie (Bachelor)', org: 'Universiteit van Amsterdam', date: '2025 - heden' },
        {
          title: 'Creative Media and Game Technologies - Game Design (Bachelor)',
          org: 'Breda University of Applied Sciences',
          date: '2024 - 2025',
        },
        {
          title: 'Communication and Multimedia Design (Bachelor)',
          org: 'Hogeschool van Amsterdam',
          date: '2022 - 2023',
          description: 'Propedeuse in 2023 cum laude behaald.',
        },
      ],
    },
    footer: { source: 'Broncode van deze site op GitHub' },
    notFound: {
      title: 'Pagina niet gevonden',
      text: 'Deze pagina bestaat niet (meer). Misschien is de link verouderd of staat er een typefout in.',
      home: 'Terug naar de homepage',
    },
    card: { mail: 'E-mail.' },
    work: { title: 'Werk', view: 'Lees meer', play: 'Speel' },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – philosophy student, game developer and web developer from Amsterdam.',
      locale: 'en_GB',
    },
    nav: { skip: 'Skip to content' },
    role: 'Philosophy student / Game developer / Web developer',
    location: 'Est. 2004, Amsterdam',
    social: { mail: 'Send an email', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Back',
    projectLabels: { date: 'Period', role: 'Role', tools: 'Tools', link: 'Play' },
    projects: {
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'A courtroom party game where the judges are AI',
        duration: 'July – August 2025',
        role: 'Solo: design, code, art and assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Two players face each other in court: one accuses, the other defends, and up to four more sit in the jury. The charges are made up, such as stealing the moon or insulting a goose. An AI judge then hands down the verdict. There are ten judges, each with a character of their own, from a caveman to a baby.',
          'I made the whole game myself, including all the art and assets, for the Player2 AI NPC Jam in the summer of 2025. It finished fifth out of 46 entries and won $500. The judges called it <q>a great way to settle arguments IRL</q>.',
          'It is meant for two to six players in one room and runs in the browser and on Windows and Linux. You need the Player2 app to play.',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: 'First-person parkour out of the reincarnation cycle',
        duration: 'May 2024 · 4 days',
        role: 'Solo: game, art, assets and music',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'You have died and the light is coming for you. Sprint, crouch and dash your way out before it catches up and sends you back for another life. It is a first-person parkour game built for speedrunning, in a low-poly style from the PlayStation era.',
          'I made it in four days for SpeedJam #5, on my own, including all the art, the 3D assets and the music. I am now working on a remake for the web and Discord.',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: 'Save your sheep before the lava comes',
        duration: 'May 2024 · 2 days',
        role: 'Art, 3D models and game logic, together with homhom',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'You are Jörgen, an Icelandic shepherd, tending your sheep like any other day when the ground starts to rumble. Rescue as many sheep as you can before your home disappears under the lava.',
          'Made in two days with homhom for Micro Jam 013, where the theme was lava and the rule was that time is limited. I made the artwork and the 3D models, and we wrote much of the game logic together. Built in Godot, with poetry by Plutbios.',
        ],
      },
    },
    education: {
      title: 'Education',
      schools: [
        { title: 'Philosophy (Bachelor)', org: 'University of Amsterdam', date: '2025 - Present' },
        {
          title: 'Creative Media and Game Technologies - Game Design (Bachelor)',
          org: 'Breda University of Applied Sciences',
          date: '2024 - 2025',
        },
        {
          title: 'Communication and Multimedia Design (Bachelor)',
          org: 'Amsterdam University of Applied Sciences',
          date: '2022 - 2023',
          description: 'Obtained a propaedeutic diploma cum laude in 2023.',
        },
      ],
    },
    footer: { source: 'Source code of this site on GitHub' },
    notFound: {
      title: 'Page not found',
      text: "This page doesn't exist (any more). The link may be outdated or contain a typo.",
      home: 'Back to the homepage',
    },
    card: { mail: 'E-mail.' },
    work: { title: 'Work', view: 'Read more', play: 'Play' },
  },
};

export const social = {
  mail: 'mailto:luuknoverraz@gmail.com',
  email: 'luuknoverraz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luuknoverraz/',
  github: 'https://github.com/LuukNoverraz',
  source: 'https://github.com/LuukNoverraz/luuknoverraz.nl',
  itch: 'https://noverraz.itch.io/',
};

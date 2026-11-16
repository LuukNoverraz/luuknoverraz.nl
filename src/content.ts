// All site copy lives here, once per language. Pages are generated from this at build time,
// so there is no client-side translation and both languages are real, indexable URLs.

export type Lang = 'nl' | 'en';
export const langs: Lang[] = ['nl', 'en'];

/** URL prefix per language. Dutch stays at the root so existing links keep working. */
export const base = (lang: Lang) => (lang === 'nl' ? '/' : '/en/');

// Projects shown under the card. Empty for now: the old work was cleared out for the
// redesign. Add a slug here, its copy under `projects` (both languages) and its media
// in projects.ts, and the Work section and the project's page appear.
export const projectSlugs: readonly string[] = [];
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
  tools: string;
  link: string;
  /** Paragraphs; may contain trusted inline HTML (<i>, <a>). */
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
  projectLabels: { date: string; tools: string; link: string };
  projects: Record<ProjectSlug, ProjectCopy & { name: string }>;
  education: { title: string; schools: Entry[] };
  footer: { source: string };
  notFound: { title: string; text: string; home: string };
  /** Business card on the home page, and the section below it. */
  card: { mail: string };
  work: { title: string; view: string };
}

export const copy: Record<Lang, Copy> = {
  nl: {
    htmlLang: 'nl',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – filosoof, gamedeveloper en webdeveloper uit Amsterdam.',
      locale: 'nl_NL',
    },
    nav: { skip: 'Naar inhoud' },
    role: 'Filosoof / Gamedeveloper / Webdeveloper',
    location: 'Amsterdam',
    social: { mail: 'Stuur een e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Terug',
    projectLabels: { date: 'Periode', tools: 'Tools', link: 'Link' },
    projects: {},
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
    work: { title: 'Werk', view: 'Bekijk project' },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – philosopher, game developer and web developer from Amsterdam.',
      locale: 'en_GB',
    },
    nav: { skip: 'Skip to content' },
    role: 'Philosopher / Game developer / Web developer',
    location: 'Amsterdam',
    social: { mail: 'Send an email', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Back',
    projectLabels: { date: 'Period', tools: 'Tools', link: 'Link' },
    projects: {},
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
    work: { title: 'Work', view: 'View project' },
  },
};

export const social = {
  mail: 'mailto:luuknoverraz@gmail.com',
  email: 'luuknoverraz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luuknoverraz/',
  github: 'https://github.com/LuukNoverraz',
  source: 'https://github.com/LuukNoverraz/luuknoverraz.nl',
  itch: 'https://luuknoverraz.itch.io',
};

// All site copy lives here, once per language. Pages are generated from this at build time,
// so there is no client-side translation and both languages are real, indexable URLs.

export type Lang = 'nl' | 'en';
export const langs: Lang[] = ['nl', 'en'];

/** URL prefix per language. Dutch stays at the root so existing links keep working. */
export const base = (lang: Lang) => (lang === 'nl' ? '/' : '/en/');

export const projectSlugs = ['barbasim', 'de-streng', 'magmaroni'] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

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
  nav: { index: string; about: string; label: string; skip: string };
  role: string;
  subtitle: string;
  location: string;
  social: { mail: string; linkedin: string; github: string };
  back: string;
  projectLabels: { date: string; tools: string; link: string };
  projects: Record<ProjectSlug, ProjectCopy & { name: string }>;
  about: { title: string; text: string; contact: string };
  experience: { title: string; work: string; education: string; jobs: Entry[]; schools: Entry[] };
  skills: { title: string; tools: string; languages: string; codeLanguages: string; spoken: [string, string][] };
  footer: { source: string };
  notFound: { title: string; text: string; home: string };
}

export const copy: Record<Lang, Copy> = {
  nl: {
    htmlLang: 'nl',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – game developer, front-end developer en video editor uit Amsterdam. Met een passie voor creativiteit ontwerp en ontwikkel ik games, websites en videocontent.',
      locale: 'nl_NL',
    },
    nav: { index: 'Index', about: 'Over mij', label: 'Hoofdmenu', skip: 'Naar inhoud' },
    role: 'Game developer / Front-end developer / Video editor',
    subtitle: 'Met een passie voor creativiteit ontwerp en ontwikkel ik games, websites en videocontent.',
    location: 'Amsterdam',
    social: { mail: 'Stuur een e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Terug',
    projectLabels: { date: 'Periode', tools: 'Tools', link: 'Link' },
    projects: {
      barbasim: {
        name: 'Barbasim',
        slogan: 'Ik bouw digitale werelden en verhalen',
        duration: '2020 (4 weken)',
        tools: 'Unity Engine, C#',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim is een \'creature simulation\' die ik in 2020 met de Unity engine heb gemaakt. Er wordt een willekeurig eiland gegenereerd waar kleine "Barba" wezentjes met elkaar interacteren. Elke Barba heeft unieke statistieken en een eigen naam. Je kunt het eiland vanuit verschillende hoeken bekijken en Barba\'s volgen.',
          'In mijn ontwerpproces ben ik door veel verschillende ideeën geïtereerd. Oorspronkelijk was ik van plan een isometrisch perspectief toe te passen. Daarbij zouden de beestjes blokkig zijn en in vaste stappen bewegen. Echter wilde ik meer dynamiek toevoegen, dus ging ik verder nadenken. Zo heb ik een paar 2D-concepten geschetst.',
          'Echter besloot ik het hierna in 3D uit te voeren, omdat ik dan makkelijk veel wezens zou kunnen produceren door enkele aanpassingen aan de mesh te maken, wat bij een sprite lastiger zou zijn. Het eerste ontwerp dat ik in 3D heb gemaakt was een blokje met benen. Alleen concludeerde ik dat dieren bestaan uit zachte vormen en niet scherp en rechthoekig zijn. Daarom heb ik de wezens later in het proces herontworpen.',
          'Hierna heb ik mij gefocust op het maken van de wereld. Oorspronkelijk ging ik voor een oneindige wereld, maar ik realiseerde dat in een oneindige wereld je minder gehecht zou raken aan de wezens. Daarom besloot ik toch te gaan voor het maken van een eiland bij de simulatie, zodat je de specifieke dieren op het eiland zou kunnen herkennen.',
          'Ik schreef vervolgens een generator om om de wezens, die ik Barba\'s besloot te noemen, te maken met elk een andere kleur, lengte en naam. Daarvoor heb ik ook zelf een naam generator geschreven. Ik zorgde ervoor dat er aan het begin van het spel een paar honderd Barba’s werden geboren, elk met andere statistieken. Naast kleur, lengte en naam voegde ik ook sterkte, vriendelijkheid en snelheid toe. Uiteindelijk zorgde ik ervoor dat de Barba’s ook voort konden planten en zo kinderen konden krijgen met de statistieken van hun ouders en dood konden gaan door te verdrinken of door in een gevecht te raken.',
          'Zo heb ik uiteindelijk een spel gemaakt waar ik nog steeds trots op ben. <i>Barbasim</i> is te downloaden op <a href="https://luuknoverraz.itch.io/barbasim" target="_blank" rel="noopener">Itch.io</a>.',
        ],
      },
      'de-streng': {
        name: 'De Streng',
        slogan: 'Ik maak user-friendly web-ervaringen',
        duration: '2023 (4 weken)',
        tools: 'HTML, CSS, JavaScript',
        link: 'http://destreng.com/',
        paragraphs: [
          'Ik heb voor bedrijf <i>De Streng</i> een one-page website ontworpen en gemaakt. Dit bedrijf had een verouderde site die toe was aan een verfrissing. Op basis van de voorgaande site heb ik eerst de merkidentiteit van het bedrijf herontworpen naar een moderner en simplistischer beeld. In overleg met de opdrachtgever heb ik besloten een one-page website te maken, vooral vanwege ruimtebesparing en een meer prettige user experience.',
          'Eerst heb ik de site ontworpen, voor zowel desktop als mobiel formaat. Na enkele besprekingen met de opdrachtgever ben ik enkele iteraties doorgegaan. Hierna ben ik begonnen met het bouwen van de website in HTML/CSS.',
          'Hoewel de site in principe statisch is, zijn er enkele dynamische elementen op de pagina waarvoor ik JavaScript heb ingezet. Daarnaast heb ik erop gelet dat de code van de site netjes en semantisch correct is. Na enkele weken was de site gereed en in zowel Nederlands als Engels beschikbaar. De site is responsive en werkt dus op desktop, tablet en mobiel.',
          'Uiteindelijk ben ik erg tevreden met hoe de site is geworden en dat was de opdrachtgever gelukkig ook. Het was erg leerzaam om het volledige proces, van ontwerp tot ontwikkeling, in dienst van deze klant uit te kunnen voeren.',
        ],
      },
      magmaroni: {
        name: 'Magmaroni',
        slogan: 'Ik deel kennis en humor via video’s',
        duration: '2023 - heden',
        tools: 'Adobe Premiere Pro',
        link: 'https://www.youtube.com/@magmaroni',
        paragraphs: [
          'Ik maak al jaren video\'s met Adobe Premiere Pro. Op mijn YouTube-kanaal Magmaroni deel ik mijn game-ontwikkelingsreis en -proces.',
        ],
      },
    },
    about: {
      title: 'Over mij',
      text: 'Momenteel studeer ik Filosofie aan de Universiteit van Amsterdam. Daarvoor studeerde ik Game Design in Breda en Communication & Multimedia Design in Amsterdam. Met een oog voor zowel gebruikers als opdrachtgevers zoek ik creatieve oplossingen tot unieke design challenges. Ik let op de kleinste details en ben altijd leergierig. Ik beschouw mijn begrip van zowel ontwerp als technologie als mijn kracht en hoop deze overlap in te kunnen zetten om bij te kunnen dragen aan een betere wereld.',
      contact: 'Als je geïnteresseerd bent in mijn werk of wilt samenwerken, aarzel dan niet om contact met me op te nemen via',
    },
    experience: {
      title: 'Ervaring',
      work: 'Werkervaring',
      education: 'Opleidingen',
      jobs: [
        {
          title: 'Webontwikkelaar',
          org: 'De Streng',
          date: 'Februari 2022 - heden',
          description:
            'Bezig met het beheren van een webshop in Shopify, inclusief het maken van aanpassingen in Liquid en CSS. Bovendien een responsive one-page website ontworpen en ontwikkeld.',
        },
        {
          title: 'Webontwikkelaar',
          org: 'Coolfinity',
          date: 'Augustus 2020 - september 2021',
          description: 'Gewerkt aan het verbeteren van het ontwerp van de website van Coolfinity en ontwikkeld met Wix.',
        },
        { title: 'Stagiair Grafisch Ontwerp', org: '310k', date: 'November 2018' },
      ],
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
    skills: {
      title: 'Vaardigheden',
      tools: 'Tools',
      languages: 'Talen',
      codeLanguages: 'Programmeertalen',
      spoken: [
        ['Nederlands', 'Moedertaal'],
        ['Engels', 'Professionele vaardigheid'],
      ],
    },
    footer: { source: 'Broncode van deze site op GitHub' },
    notFound: {
      title: 'Pagina niet gevonden',
      text: 'Deze pagina bestaat niet (meer). Misschien is de link verouderd of staat er een typefout in.',
      home: 'Terug naar de homepage',
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – game developer, front-end developer and video editor from Amsterdam. With a passion for creativity, I design and develop games, websites and video content.',
      locale: 'en_GB',
    },
    nav: { index: 'Index', about: 'About me', label: 'Main menu', skip: 'Skip to content' },
    role: 'Game developer / Front-end developer / Video editor',
    subtitle: 'With a passion for creativity, I design and develop games, websites and video content.',
    location: 'Amsterdam',
    social: { mail: 'Send an email', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Back',
    projectLabels: { date: 'Period', tools: 'Tools', link: 'Link' },
    projects: {
      barbasim: {
        name: 'Barbasim',
        slogan: 'I build digital worlds and stories',
        duration: '2020 (4 weeks)',
        tools: 'Unity Engine, C#',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim is a \'creature simulation\' that I created in 2020 with the Unity engine. A random island is generated where little "Barba" creatures interact with each other. Each Barba has unique statistics and its own name. You can view the island from different angles and follow Barba\'s.',
          'In my design process I iterated through many different ideas. Originally I planned to use an isometric perspective. The creatures would be blocky and move in fixed steps. However, I wanted to add more dynamics, so I started thinking further. So I sketched a few 2D concepts.',
          'However, I decided to do it in 3D next, because I could easily produce many creatures by making some adjustments to the mesh, which would be more difficult with a sprite. The first design I made in 3D was a block with legs. Only I concluded that animals consist of soft shapes and are not sharp and rectangular. So I redesigned the creatures later in the process.',
          'After this I focused on making the world. Originally I was going for an infinite world, but I realized that in an infinite world you would become less attached to the creatures. That\'s why I decided to create an island for the simulation, so that you could recognize the specific animals on the island.',
          'I then wrote a generator to create the creatures, which I decided to call Barba\'s, each with a different color, size, and name. I also wrote a name generator myself for that. I made sure to have a few hundred Barba\'s born at the start of the game, each with different stats. In addition to color, height and name, I also added strength, friendliness and speed. Ultimately, I made it so that the Barba\'s could also reproduce, having children with their parents\' stats and dying by drowning or getting into a fight.',
          'In the end, I created a game that I am still proud of. <i>Barbasim</i> can be downloaded from <a href="https://luuknoverraz.itch.io/barbasim" target="_blank" rel="noopener">Itch.io</a>.',
        ],
      },
      'de-streng': {
        name: 'De Streng',
        slogan: 'I make user-friendly web experiences',
        duration: '2023 (4 weeks)',
        tools: 'HTML, CSS, JavaScript',
        link: 'http://destreng.com/',
        paragraphs: [
          'I designed and created a one-page website for company <i>De Streng</i>. This company had an outdated site that was in need of a refresh. Based on the previous site, I first redesigned the company\'s brand identity into a more modern and simplistic image. In consultation with the client, I decided to create a one-page website, mainly because of space savings and a more pleasant user experience.',
          'First I designed the site for both desktop and mobile formats. After some discussions with the client, I went through a few iterations. After this I started building the website in HTML/CSS.',
          'Although the site is basically static, there are some dynamic elements on the page for which I deployed JavaScript. In addition, I have ensured that the site\'s code is neat and semantically correct. After a few weeks the site was ready and available in both Dutch and English. The site is responsive and therefore works on desktop, tablet and mobile.',
          'Ultimately, I am very satisfied with how the site turned out and fortunately so was the client. It was very educational to be able to carry out the entire process, from design to development, at the service of this customer.',
        ],
      },
      magmaroni: {
        name: 'Magmaroni',
        slogan: 'I share knowledge and humor through videos',
        duration: '2023 - present',
        tools: 'Adobe Premiere Pro',
        link: 'https://www.youtube.com/@magmaroni',
        paragraphs: [
          'I have been making videos with Adobe Premiere Pro for years. On my YouTube channel Magmaroni I share my game development journey and process.',
        ],
      },
    },
    about: {
      title: 'About me',
      text: "I'm currently studying Philosophy at the University of Amsterdam. Before that I studied Game Design in Breda and Communication & Multimedia Design in Amsterdam. With an eye for both users and clients, I look for creative solutions to unique design challenges. I pay attention to the smallest details and am always eager to learn. I consider my understanding of both design and technology to be my strength and hope to use this overlap to contribute to a better world.",
      contact: "If you are interested in my work or would like to collaborate, please don't hesitate to contact me at",
    },
    experience: {
      title: 'Experience',
      work: 'Work experience',
      education: 'Education',
      jobs: [
        {
          title: 'Web Developer',
          org: 'De Streng',
          date: 'February 2022 - Present',
          description:
            'Managing an online store in Shopify, including making adjustments in Liquid and CSS. Furthermore, I designed and developed a responsive one-page website.',
        },
        {
          title: 'Web Developer',
          org: 'Coolfinity',
          date: 'August 2020 - September 2021',
          description: "Worked on improving the design of Coolfinity's website and developed it with Wix.",
        },
        { title: 'Graphic Design Intern', org: '310k', date: 'November 2018' },
      ],
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
    skills: {
      title: 'Skills',
      tools: 'Tools',
      languages: 'Languages',
      codeLanguages: 'Programming languages',
      spoken: [
        ['Dutch', 'Native language'],
        ['English', 'Full professional fluency'],
      ],
    },
    footer: { source: 'Source code of this site on GitHub' },
    notFound: {
      title: 'Page not found',
      text: "This page doesn't exist (any more). The link may be outdated or contain a typo.",
      home: 'Back to the homepage',
    },
  },
};

/** Tools and programming languages (icon file in /public/icons, label). Same in both languages. */
export const tools: [string, string][] = [
  ['unity', 'Unity'],
  ['godot', 'Godot'],
  ['blender', 'Blender'],
  ['git', 'Git'],
  ['adobe_illustrator', 'Adobe Illustrator'],
  ['adobe_premiere_pro', 'Adobe Premiere Pro'],
  ['adobe_xd', 'Adobe XD'],
  ['wordpress', 'Wordpress'],
  ['wix', 'Wix'],
  ['shopify', 'Shopify'],
];

export const codeLanguages: [string, string][] = [
  ['html', 'HTML'],
  ['css', 'CSS'],
  ['javascript', 'JavaScript'],
  ['python', 'Python'],
  ['csharp', 'C#'],
  ['react', 'React'],
];

export const social = {
  mail: 'mailto:luuknoverraz@gmail.com',
  email: 'luuknoverraz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luuknoverraz/',
  github: 'https://github.com/LuukNoverraz',
  source: 'https://github.com/LuukNoverraz/luuknoverraz.nl',
  youtube: 'https://www.youtube.com/@magmaroni',
  itch: 'https://luuknoverraz.itch.io',
};

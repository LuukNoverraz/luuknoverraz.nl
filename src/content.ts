// All site copy lives here, once per language. Pages are generated from this at build time,
// so there is no client-side translation and both languages are real, indexable URLs.

export type Lang = 'nl' | 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh';
export const langs: Lang[] = ['nl', 'en', 'de', 'es', 'fr', 'ja', 'zh'];
/** Written by me, and always shown in the top bar. */
export const mainLangs: Lang[] = ['nl', 'en'];
/** AI-translated from the two above; offered in the globe menu. */
export const moreLangs: Lang[] = ['de', 'es', 'fr', 'ja', 'zh'];
/** Each language's name, in that language. */
export const langNames: Record<Lang, string> = {
  nl: 'Nederlands',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
  zh: '简体中文',
};

/** URL prefix per language. Dutch stays at the root so existing links keep working. */
export const base = (lang: Lang) => (lang === 'nl' ? '/' : `/${lang}/`);

// Projects shown under the card, in this order. To add one: add its slug here, its
// copy under `projects` (both languages) and its media in projects.ts.
export const projectSlugs: readonly string[] = [
  'everest-half-full',
  'your-honor-wtf',
  'gnostic-death-experience',
  'sheep-keep',
];
export type ProjectSlug = string;

/** Copy for a project page in this language, or the English copy while it isn't translated yet. */
export const projectCopy = (lang: Lang, slug: ProjectSlug) => {
  const own = copy[lang].projects[slug];
  return own ? { p: own, lang } : { p: copy.en.projects[slug], lang: 'en' as Lang };
};

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
  /** Where it can be played; left out while a game isn't public yet. */
  link?: string;
  /** Paragraphs; may contain trusted inline HTML (<i>, <a>, <q>). */
  paragraphs: string[];
}

interface Copy {
  htmlLang: string;
  meta: { title: string; description: string; locale: string };
  nav: { skip: string; moreLanguages: string };
  /** Shown in the footer of AI-translated languages. */
  translationNote?: string;
  role: string;
  location: string;
  locationLabel: string;
  social: { mail: string; linkedin: string; github: string };
  back: string;
  projectLabels: { date: string; role: string; tools: string; link: string };
  /** Mark after each of those labels on a project page; a full stop when left out. */
  labelSuffix?: string;
  projects: Record<ProjectSlug, ProjectCopy & { name: string }>;
  education: { title: string; schools: Entry[] };
  footer: { source: string };
  notFound: { title: string; text: string; home: string };
  /** Business card on the home page, and the section below it. */
  card: { mail: string };
  work: { title: string; view: string; play: string };
  /** The image viewer on project pages. */
  viewer: { open: string; close: string };
  /** Earlier versions of this site, behind the year in the footer. */
  archive: {
    title: string;
    intro: string;
    link: string;
    code: string;
    /** Opens the old version itself. */
    visit: string;
    editions: Record<string, string>;
  };
  /** Heading of the older games behind the "more" toggle; the games are in `earlierGames`. */
  earlier: { title: string };
  /** About me, between Work and Education. Empty paragraphs show placeholder lines. */
  about: { title: string; paragraphs: string[] };
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
    nav: { skip: 'Naar inhoud', moreLanguages: 'Meer talen' },
    role: 'Student filosofie / Gameontwikkelaar / Webontwikkelaar',
    location: 'Anno 2004, Amsterdam',
    locationLabel: 'Locatie',
    social: { mail: 'Stuur een e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Terug',
    projectLabels: { date: 'Periode', role: 'Rol', tools: 'Tools', link: 'Spelen' },
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'Draag een glas water de Mount Everest op',
        duration: 'september 2026 – heden · in ontwikkeling',
        role: 'Solo-ontwikkelaar',
        tools: 'Godot 4',
        paragraphs: [
          'Eén berg, één glas water, en zo veel mogelijk daarvan over als je boven bent. Everest Half Full is een firstperson-klimgame over iets onnodigs naar een onredelijke plek brengen.',
          'Het moeilijke is bewegen. Een gehaaste stap, een harde landing of een windvlaag over een open graat, en het water gaat over de rand. Bijvullen kan niet, en wat gemorst is blijft gemorst. Een leeg glas beëindigt je poging niet; de vraag is hoeveel je meeneemt naar boven.',
          'De vorm van de berg is gebaseerd op hoogtegegevens van het Everest-gebied, in een bewust eenvoudige low-poly stijl met bewegende luchten en water dat op elke stap reageert. Er is geen gemarkeerde route: vanaf Base Camp zoek je zelf je weg omhoog.',
          'Het is mijn grootste game tot nu toe. Ik maak hem in mijn eentje in Godot 4, voor pc, en bereid hem nu voor op een gesloten playtest. Er is nog geen releasedatum.',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'Een rechtbank-partygame waarin de rechters AI zijn',
        duration: 'juli – augustus 2025',
        role: 'Solo: ontwerp, art en assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Twee spelers staan tegenover elkaar in de rechtbank: de een klaagt aan, de ander verdedigt, en maximaal vier anderen vormen de jury. De aanklachten zijn verzonnen, zoals het stelen van de maan of het beledigen van een gans. Daarna doet een AI-rechter uitspraak. Er zijn tien rechters met elk een eigen karakter, van een holbewoner tot een baby.',
          'Ik heb het hele spel zelf gemaakt, inclusief alle art en assets, voor de <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> in de zomer van 2025. Het werd vijfde van de 46 inzendingen en won $500. De jury noemde het <q lang="en">a great way to settle arguments IRL</q>.',
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
          'Ik heb het in vier dagen gemaakt voor <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a>, in mijn eentje, inclusief alle art, de 3D-assets en de muziek. Ik werk nu aan een remake voor het web en Discord.',
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
          'Gemaakt in twee dagen met <a href="https://homhom.itch.io/">homhom</a> voor <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a>, met als thema lava en als regel dat de tijd beperkt is. Ik maakte de artwork en de 3D-modellen, en een groot deel van de gamelogica schreven we samen. Gebouwd in Godot, met poëzie van Plutbios.',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: 'Een game over traplopen, in vijf uur gemaakt',
        duration: '2024 · 5 uur',
        role: 'Solo, inclusief de soundtrack',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          'How Fast Can You Climb the Stairs? is een game over traplopen. Elke tree is een reeks tekens die je moet typen, en je komt maar zo snel boven als je ze kunt typen.',
          'Ik maakte hem in vijf uur voor <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a>, inclusief een eigen soundtrack van drie nummers: How Fast Can You Climb The Stairs?, You Gots To Type, Son en You Done Did Type, Son. De poëzie is van Plutbios.',
          'Mijn persoonlijk record is 1,67 seconde, en voor zover ik weet is dat ook het wereldrecord.',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: 'Een platformer waarin je de profetie van de Hero of Light vervult',
        duration: 'januari 2024 · 3 dagen',
        role: 'Art en programmeren, samen met homhom',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          'Al lang voorspeld in mythen en legendes: de Hero of Light zal ooit het gewone volk bevrijden van de magische duivels die hun land onderdrukken. Jij bent die held. Gewapend met wat onconventionele wapens ruim je de dreigingen op en ontwijk je al het andere dat op je afkomt.',
          '<a href="https://homhom.itch.io/">homhom</a> en ik maakten hem voor <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a>, met als thema magie en als beperking “light is the way”. Ik maakte de art en deelde het programmeerwerk; homhom deed daarnaast het leveldesign.',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: 'Je wordt wakker en merkt dat er iets ontbreekt',
        duration: 'oktober 2023',
        role: 'Art en programmeren, samen met homhom en Plutbios',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          'Je wordt wakker en merkt dat er iets ontbreekt…',
          '<a href="https://homhom.itch.io/">homhom</a> en ik maakten hem voor <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a>, samen met Plutbios, die het verhaal schreef en meewerkte aan het leveldesign. Ik maakte de art en deelde het programmeerwerk met homhom, die ook levels ontwierp.',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: 'Een baan als cipier in een gevangenis vol post-its',
        duration: 'juni 2023 · 6 dagen',
        role: 'Solo',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'Welkom in de Post-it Prison, waar een paar sluwe criminelen op de een of andere manier in post-its zijn veranderd en op de muur zijn geplakt. Nogal onethisch. Het is ook je eerste werkdag, en de gevangenis kampt met een flink personeelstekort.',
          'Begin bij de computer en ren dan naar de gevangene die je nodig heeft, voordat je harten op zijn. Het doel is het zo lang mogelijk vol te houden.',
          'Ik maakte hem in mijn eentje in zes dagen voor <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a>.',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'Een korte horrorgame in de wereld van de SCP Foundation',
        duration: 'april 2023 · 1 week',
        role: 'Solo',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'Je bent een D-klasse-gevangene in een complex van de SCP Foundation en moet midden in een beveiligingsincident je weg naar buiten vinden. Er zijn drie eindes, en onderweg genoeg schrikmomenten.',
          'Ik maakte hem in mijn eentje in een week, met de modellen gemaakt in Blender en het geluid bewerkt in Audacity.',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'Een komische detective-visual novel met dobbelstenen in de hoofdrol',
        duration: 'juli 2022 · 48 uur',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          'Erop of eronder in dit gewaagde detectivedrama. Je speelt de dobbelsteendetective van wereldklasse, en wanneer het noodlot toeslaat, is er een mysterie geboren. Op weg naar de oplossing ontmoet je veel gezichten: de zes op een dobbelsteen, wel te verstaan.',
          'Ik maakte hem in 48 uur voor de <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a>, met als thema “roll of the dice”. Het is een komedie in pixel art die je met één knop speelt, en hij duurt ongeveer een halfuur.',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: 'Breek de pijlen die op je afkomen en loop door',
        duration: 'augustus 2021 · 3 dagen',
        role: 'Solo, met muziek van Jurre de Vries',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          'Je maakt een fijne avondwandeling wanneer bandieten ineens op je beginnen te schieten. In plaats van terug te vechten breek je hun pijlen terwijl ze naar beneden komen, en loop je door. Let op waar de pijlen de lucht in worden geschoten om te weten waar ze landen; hoe hoger je score, hoe moeilijker het wordt.',
          'Ik maakte hem voor <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a>, met als thema “break” en als beperking dat de speler pacifist is. De achtergrondmuziek is van <a href="https://jurredevries.me/">Jurre de Vries</a>. Haal een score van 50 voor een leuke verrassing.',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: 'Een stealth-prototype waarin je langs je vijanden moet sluipen',
        duration: '2021 · prototype',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          'Een stealthgame waarin je ongezien langs je vijanden moet komen: bukken om laag te blijven en dubbeltikken om naar voren te dashen. Het bleef een prototype, een test van hoe sluipen en bewegen moeten voelen.',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'Een simulatie van wezentjes op een willekeurig gegenereerd eiland',
        duration: 'december 2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim is een simulatie waarin kleine wezentjes, Barba’s, leven en met elkaar omgaan op een willekeurig gegenereerd eiland. Elke Barba heeft een eigen naam en eigen eigenschappen.',
          'Je kunt het eiland vanuit verschillende hoeken bekijken en afzonderlijke Barba’s volgen. De broncode staat op <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a>.',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'Een mobiele game voor twee spelers die biljart met sumo mixt',
        duration: '2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          'Twee spelers delen één telefoon en schieten hun sumoballen als bij biljart op elkaar af. Wie de ander als eerste vijf keer van het speelveld stoot, wint.',
          'Power-upkristallen op het veld geven je tijdelijk een voordeel, er zijn meerdere arena’s om in te vechten, en je kiest je eigen kleuren. De game draait op Android en Windows.',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: 'Een game over voedsel verzamelen als jager-verzamelaar',
        duration: '2019',
        role: 'Samen met Jochem Baas, Midas Scheffers en Berk Yildirim',
        tools: 'Unity',
        paragraphs: [
          'Besyes is een game die ik samen met <a href="http://www.jochembaas.nl/">Jochem Baas</a>, <a href="https://midasscheffers.github.io/">Midas Scheffers</a> en <a href="https://github.com/BerkYildirimm">Berk Yildirim</a> maakte. Je speelt een verzamelaar die rondstruint op zoek naar eten. We maakten hem in opdracht van IJsfontein.',
          'De broncode staat op <a href="https://github.com/jochem33/BeverBesjes">GitHub</a>.',
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
    viewer: { open: 'Afbeelding vergroten', close: 'Sluiten' },
    archive: {
      title: 'Portfoliomuseum',
      intro: 'Deze site bestaat sinds 2017 en is sindsdien zeven keer opnieuw gebouwd. Dit zijn alle versies van mijn portfolio. Niet alle versies zijn ooit afgemaakt, maar samen laten ze wel mijn vooruitgang en ontwikkeling als programmeur en ontwerper zien.',
      link: 'Portfoliomuseum',
      code: 'Code op GitHub',
      visit: 'Bekijk deze versie',
      editions: {
        2026: 'Een visitekaartje, in zeven talen.',
        2023: 'Een witte balk met mijn gezicht als logo, en game developer, front-end developer en video editor in vette hoofdletters.',
        2022: 'Donkerblauw, een grote naam in zware hoofdletters en een LN-logo.',
        2021: 'Donker, met het LN-logo, een menubalk in geel, blauw en roze en een Over mij die ik op mijn zeventiende schreef.',
        2020: 'Paarse golven, een foto in een cirkel en een grote pijl naar beneden.',
        2019: 'Een groot LN-logo, met links naar de CoderClass en de roboticaclub van school.',
        2018: 'LuukCC: roze, met een korte introductie over de CoderClass en de roboticaclub.',
        2017: 'Welkom!: mijn eerste site, op mijn dertiende gemaakt in de CoderClass.',
      },
    },
    earlier: {
      title: 'Eerdere games',
    },
    about: {
      title: 'Over mij',
      paragraphs: [
        'Ik ben Luuk, game- en webontwikkelaar en student filosofie aan de UvA. Ik wil begrijpen hoe systemen en ervaringen werken: daarom bouw ik gamewerelden en schrijf ik over onderwerpen als republikanisme, economische afhankelijkheid en kunstmatige intelligentie.',
        'Mijn games maak ik van begin tot eind zelf, van het ontwerp en de techniek tot de graphics, 3D-modellen en zelfs de muziek. Zelf boulder ik graag, en dat inspireerde me bij <a href="%base%everest-half-full/">Everest Half Full</a>, mijn grootste game tot nu toe: je draagt een glas water de Mount Everest op en probeert boven zo veel mogelijk over te hebben.',
        'Ik sta open voor samenwerkingen aan games, freelance webprojecten en stages. Stuur gerust een <a href="mailto:luuknoverraz@gmail.com">mail</a>, ook als je gewoon wilt praten over games of filosofie.',
      ],
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – philosophy student, game developer and web developer from Amsterdam.',
      locale: 'en_GB',
    },
    nav: { skip: 'Skip to content', moreLanguages: 'More languages' },
    role: 'Philosophy student / Game developer / Web developer',
    location: 'Est. 2004, Amsterdam',
    locationLabel: 'Location',
    social: { mail: 'Send an email', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Back',
    projectLabels: { date: 'Period', role: 'Role', tools: 'Tools', link: 'Play' },
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'Carry a glass of water up Mount Everest',
        duration: 'September 2026 – present · in development',
        role: 'Solo developer',
        tools: 'Godot 4',
        paragraphs: [
          'One mountain, one glass of water, and as much of it left at the top as you can manage. Everest Half Full is a first-person climbing game about taking something unnecessary somewhere unreasonable.',
          'The hard part is moving. A hurried step, a rough landing or a gust across an exposed ridge sends water over the rim. There are no refills, and what spills stays spilled. An empty glass does not end the attempt; the question is how much you bring with you.',
          'The shape of the mountain draws on elevation data from the Everest region, in a deliberately simple low-poly style with moving skies and water that responds to every step. There is no marked route: from Base Camp you find your own way up.',
          'It is my largest game so far. I am building it on my own in Godot 4, for PC, and preparing it for a closed playtest. There is no release date yet.',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'A courtroom party game where the judges are AI',
        duration: 'July – August 2025',
        role: 'Solo: design, art and assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Two players face each other in court: one accuses, the other defends, and up to four more sit in the jury. The charges are made up, such as stealing the moon or insulting a goose. An AI judge then hands down the verdict. There are ten judges, each with a character of their own, from a caveman to a baby.',
          'I made the whole game myself, including all the art and assets, for the <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> in the summer of 2025. It finished fifth out of 46 entries and won $500. The judges called it <q>a great way to settle arguments IRL</q>.',
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
          'I made it in four days for <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a>, on my own, including all the art, the 3D assets and the music. I am now working on a remake for the web and Discord.',
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
          'Made in two days with <a href="https://homhom.itch.io/">homhom</a> for <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a>, where the theme was lava and the rule was that time is limited. I made the artwork and the 3D models, and we wrote much of the game logic together. Built in Godot, with poetry by Plutbios.',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: 'A game about climbing stairs, made in five hours',
        duration: '2024 · 5 hours',
        role: 'Solo, including the soundtrack',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          'How Fast Can You Climb the Stairs? is a game about climbing stairs. Every step is a string of characters you have to type, and you only get up as fast as you can type them.',
          'I made it in five hours for <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a>, including an original soundtrack of three tracks: How Fast Can You Climb The Stairs?, You Gots To Type, Son and You Done Did Type, Son. The poetry is by Plutbios.',
          'My personal best is 1.67 seconds, which as far as I know is also the world record.',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: 'A platformer about fulfilling the prophecy of the Hero of Light',
        duration: 'January 2024 · 3 days',
        role: 'Art and programming, together with homhom',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          'Long foretold in myths and legends, the Hero of Light is said to one day free the common folk from the fiends of magic that oppress their land. You are that hero: armed with some unconventional weaponry, you clear away the threats and dodge everything else that comes your way.',
          '<a href="https://homhom.itch.io/">homhom</a> and I made it for <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a>, where the theme was magic and the limitation was “light is the way”. I made the art and shared the programming; homhom also did the level design.',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: 'You wake up to find something’s missing',
        duration: 'October 2023',
        role: 'Art and programming, together with homhom and Plutbios',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          'You wake up to find something’s missing…',
          '<a href="https://homhom.itch.io/">homhom</a> and I made it for <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a>, together with Plutbios, who wrote the story and worked on the level design. I made the art and shared the programming with homhom, who also designed levels.',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: 'A prison guard job where the inmates are post-it notes',
        duration: 'June 2023 · 6 days',
        role: 'Solo',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'Welcome to the Post-it Prison, where some devious criminals have somehow been turned into post-it notes and stuck to the wall. It’s quite unethical. It’s also your first day on the job, and the prison is badly understaffed.',
          'Start at the computer, then run to whichever inmate needs you before you run out of hearts. The aim is to keep it up for as long as you can.',
          'I made it on my own in six days for <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a>.',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'A short horror game set in the world of the SCP Foundation',
        duration: 'April 2023 · 1 week',
        role: 'Solo',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'You are a D-class inmate in an SCP Foundation facility, and in the middle of a security incident you have to find your way out. There are three endings, and plenty of scares along the way.',
          'I made it on my own in one week, with the models made in Blender and the sound edited in Audacity.',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'A comedy detective visual novel with dice in the leading roles',
        duration: 'July 2022 · 48 hours',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          'It’s do or die in this dicey detective drama. You play the world-class dice detective, and when tragedy strikes, a mystery is born. On your way to solving it you meet many faces: the six on a die, that is.',
          'I made it in 48 hours for the <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a>, where the theme was “roll of the dice”. It is a pixel-art comedy that you play with a single button, and it takes about half an hour.',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: 'Break the arrows flying at you and keep walking',
        duration: 'August 2021 · 3 days',
        role: 'Solo, with music by Jurre de Vries',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          'You were taking a nice walk at night when bandits suddenly start shooting at you. Rather than fighting back, you break their arrows as they come down and keep moving. Watch where the arrows are fired into the sky to know where they will land; the game gets harder as your score climbs.',
          'I made it for <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a>, where the theme was “break” and the limitation was that the player is a pacifist. The background music is by <a href="https://jurredevries.me/">Jurre de Vries</a>. Get your score to 50 to see something neat.',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: 'A stealth prototype about slipping past your enemies',
        duration: '2021 · prototype',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          'A stealth game in which you have to get past your enemies unseen, crouching to stay low and double-tapping to dash forward. It stayed a prototype: a test of how sneaking and moving should feel.',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'A simulation of little creatures on a randomly generated island',
        duration: 'December 2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim is a simulation in which little creatures called Barbas live and interact on a randomly generated island. Every Barba has its own name and its own stats.',
          'You can look at the island from different angles and follow individual Barbas around. The source code is on <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a>.',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'A two-player mobile game that mixes billiards with sumo',
        duration: '2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          'Two players share one phone and launch their sumo balls at each other, billiards-style. The first to knock the other off the stage five times wins.',
          'Power-up crystals appear on the field for a temporary edge, there are several stages to fight on, and you can pick your colours. It runs on Android and Windows.',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: 'A game about scavenging for food as a hunter-gatherer',
        duration: '2019',
        role: 'Together with Jochem Baas, Midas Scheffers and Berk Yildirim',
        tools: 'Unity',
        paragraphs: [
          'Besyes is a game I made together with <a href="http://www.jochembaas.nl/">Jochem Baas</a>, <a href="https://midasscheffers.github.io/">Midas Scheffers</a> and <a href="https://github.com/BerkYildirimm">Berk Yildirim</a>. The game revolves around scavenging as a gatherer, and was made as an assignment from IJsfontein.',
          'You can view the source code on <a href="https://github.com/jochem33/BeverBesjes">GitHub</a>.',
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
    viewer: { open: 'Enlarge image', close: 'Close' },
    archive: {
      title: 'Portfolio museum',
      intro: 'This site has been around since 2017 and has been rebuilt seven times since. These are all the iterations of my portfolio. While some of them were never finished, they do show my progress and development as a coder and designer.',
      link: 'Portfolio museum',
      code: 'Code on GitHub',
      visit: 'Visit this version',
      editions: {
        2026: 'A business card, in seven languages.',
        2023: 'A white bar with my face as the logo, and game developer, front-end developer and video editor in bold capitals.',
        2022: 'Dark blue, a big name in heavy capitals, and an LN logo.',
        2021: 'Dark, with the LN logo, a menu bar in yellow, blue and pink, and an About me I wrote at seventeen.',
        2020: 'Purple waves, a photo in a circle and a big arrow pointing down.',
        2019: 'A big LN logo, with links to the CoderClass and the robotics club at school.',
        2018: 'LuukCC: pink, with a short introduction about the CoderClass and the robotics club.',
        2017: 'Welkom!: my first site, made at thirteen in the CoderClass.',
      },
    },
    earlier: {
      title: 'Earlier games',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'I’m Luuk, a game and web developer and a philosophy student at the University of Amsterdam. I want to understand how systems and experiences work: that’s why I build game worlds and write about topics such as republicanism, economic dependence and artificial intelligence.',
        'I make my games myself from start to finish, from the design and the technical side to the graphics, 3D models and even the music. I love bouldering, and it inspired <a href="%base%everest-half-full/">Everest Half Full</a>, my biggest game so far: you carry a glass of water up Mount Everest and try to have as much of it left at the top as you can.',
        'I’m open to collaborations on games, freelance web projects and internships. Feel free to send me an <a href="mailto:luuknoverraz@gmail.com">email</a>, even if you just want to talk about games or philosophy.',
      ],
    },
  },
  // German. AI-translated from the English; keep it in step when that changes.
  de: {
    htmlLang: 'de',
    meta: {
      title: 'Luuk Noverraz',
      description: 'Luuk Noverraz – Philosophiestudent, Spieleentwickler und Webentwickler aus Amsterdam.',
      locale: 'de_DE',
    },
    nav: { skip: 'Zum Inhalt springen', moreLanguages: 'Weitere Sprachen' },
    translationNote: 'Diese Seite wurde von einer KI übersetzt und kann Fehler enthalten.',
    role: 'Philosophiestudent / Spieleentwickler / Webentwickler',
    location: 'Gegr. 2004, Amsterdam',
    locationLabel: 'Ort',
    social: { mail: 'E-Mail senden', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Zurück',
    projectLabels: { date: 'Zeitraum', role: 'Rolle', tools: 'Werkzeuge', link: 'Spielen' },
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'Trag ein Glas Wasser auf den Mount Everest',
        duration: 'September 2026 – heute · in Entwicklung',
        role: 'Solo-Entwickler',
        tools: 'Godot 4',
        paragraphs: [
          'Ein Berg, ein Glas Wasser, und oben so viel davon übrig wie möglich. Everest Half Full ist ein Kletterspiel in der Ich-Perspektive darüber, etwas Unnötiges an einen unvernünftigen Ort zu bringen.',
          'Das Schwierige ist die Bewegung. Ein hastiger Schritt, eine harte Landung oder eine Böe auf einem ungeschützten Grat, und das Wasser schwappt über den Rand. Nachfüllen gibt es nicht, und was verschüttet ist, bleibt verschüttet. Ein leeres Glas beendet den Versuch nicht; die Frage ist, wie viel du mit nach oben bringst.',
          'Die Form des Berges beruht auf Höhendaten der Everest-Region, in einem bewusst schlichten Low-Poly-Stil mit bewegtem Himmel und Wasser, das auf jeden Schritt reagiert. Eine markierte Route gibt es nicht: Vom Basislager aus suchst du dir deinen eigenen Weg nach oben.',
          'Es ist mein bisher größtes Spiel. Ich entwickle es allein in Godot 4, für den PC, und bereite es gerade auf einen geschlossenen Playtest vor. Ein Veröffentlichungsdatum gibt es noch nicht.',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'Ein Gerichtssaal-Partyspiel, in dem die Richter KIs sind',
        duration: 'Juli – August 2025',
        role: 'Solo: Design, Grafik und Assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Zwei Spieler stehen sich vor Gericht gegenüber: Einer klagt an, der andere verteidigt, und bis zu vier weitere bilden die Jury. Die Anklagen sind frei erfunden, etwa den Mond gestohlen oder eine Gans beleidigt zu haben. Danach fällt ein KI-Richter das Urteil. Es gibt zehn Richter, jeder mit eigenem Charakter, vom Höhlenmenschen bis zum Baby.',
          'Ich habe das ganze Spiel selbst gemacht, einschließlich aller Grafiken und Assets, für den <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> im Sommer 2025. Es wurde Fünfter von 46 Einreichungen und gewann 500 Dollar. Die Jury nannte es <q lang="en">a great way to settle arguments IRL</q>.',
          'Es ist für zwei bis sechs Spieler in einem Raum gedacht und läuft im Browser sowie unter Windows und Linux. Zum Spielen brauchst du die Player2-App.',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: 'First-Person-Parkour aus dem Kreislauf der Wiedergeburt',
        duration: 'Mai 2024 · 4 Tage',
        role: 'Solo: Spiel, Grafik, Assets und Musik',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'Du bist gestorben, und das Licht kommt dich holen. Sprinte, ducke dich und dashe hinaus, bevor es dich einholt und für ein weiteres Leben zurückschickt. Es ist ein First-Person-Parkourspiel, gebaut fürs Speedrunning, in einem Low-Poly-Stil der PlayStation-Ära.',
          'Ich habe es in vier Tagen für den <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a> gemacht, allein, einschließlich aller Grafiken, der 3D-Assets und der Musik. Derzeit arbeite ich an einem Remake für das Web und Discord.',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: 'Rette deine Schafe, bevor die Lava kommt',
        duration: 'Mai 2024 · 2 Tage',
        role: 'Grafik, 3D-Modelle und Spiellogik, zusammen mit homhom',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'Du bist Jörgen, ein isländischer Schäfer. Du hütest deine Schafe wie an jedem anderen Tag, als der Boden zu grollen beginnt. Rette so viele Schafe wie möglich, bevor dein Zuhause unter der Lava verschwindet.',
          'Entstanden in zwei Tagen mit <a href="https://homhom.itch.io/">homhom</a> für den <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a>, mit dem Thema Lava und der Vorgabe, dass die Zeit begrenzt ist. Ich habe die Grafiken und die 3D-Modelle gemacht, und einen großen Teil der Spiellogik haben wir gemeinsam geschrieben. Gebaut in Godot, mit Gedichten von Plutbios.',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: 'Ein Spiel übers Treppensteigen, in fünf Stunden gemacht',
        duration: '2024 · 5 Stunden',
        role: 'Solo, einschließlich des Soundtracks',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          'How Fast Can You Climb the Stairs? ist ein Spiel übers Treppensteigen. Jede Stufe ist eine Zeichenfolge, die du tippen musst, und du kommst nur so schnell nach oben, wie du tippen kannst.',
          'Ich habe es in fünf Stunden für <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a> gemacht, einschließlich eines eigenen Soundtracks mit drei Stücken: How Fast Can You Climb The Stairs?, You Gots To Type, Son und You Done Did Type, Son. Die Gedichte stammen von Plutbios.',
          'Meine persönliche Bestzeit liegt bei 1,67 Sekunden, und soweit ich weiß, ist das auch der Weltrekord.',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: 'Ein Plattformer, in dem du die Prophezeiung des Hero of Light erfüllst',
        duration: 'Januar 2024 · 3 Tage',
        role: 'Grafik und Programmierung, zusammen mit homhom',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          'Seit Langem in Mythen und Legenden vorhergesagt, soll der Hero of Light eines Tages das einfache Volk von den magischen Unholden befreien, die sein Land unterdrücken. Du bist dieser Held: Mit recht unkonventionellen Waffen räumst du die Gefahren aus dem Weg und weichst allem anderen aus, was auf dich zukommt.',
          '<a href="https://homhom.itch.io/">homhom</a> und ich haben es für den <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a> gemacht; das Thema war Magie, die Vorgabe „light is the way“. Ich habe die Grafik gemacht und mir die Programmierung geteilt; homhom hat außerdem das Leveldesign übernommen.',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: 'Du wachst auf und merkst, dass etwas fehlt',
        duration: 'Oktober 2023',
        role: 'Grafik und Programmierung, zusammen mit homhom und Plutbios',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          'Du wachst auf und merkst, dass etwas fehlt…',
          '<a href="https://homhom.itch.io/">homhom</a> und ich haben es für <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a> gemacht, zusammen mit Plutbios, der die Geschichte geschrieben und am Leveldesign mitgearbeitet hat. Ich habe die Grafik gemacht und mir die Programmierung mit homhom geteilt, der auch Levels entworfen hat.',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: 'Ein Job als Wärter, und die Häftlinge sind Post-its',
        duration: 'Juni 2023 · 6 Tage',
        role: 'Solo',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'Willkommen im Post-it Prison, wo ein paar hinterhältige Verbrecher irgendwie in Post-its verwandelt und an die Wand geklebt wurden. Ziemlich unethisch. Außerdem ist heute dein erster Arbeitstag, und das Gefängnis ist stark unterbesetzt.',
          'Fang am Computer an und lauf dann zu dem Häftling, der dich gerade braucht, bevor dir die Herzen ausgehen. Ziel ist es, so lange wie möglich durchzuhalten.',
          'Ich habe es allein in sechs Tagen für <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a> gemacht.',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'Ein kurzes Horrorspiel in der Welt der SCP Foundation',
        duration: 'April 2023 · 1 Woche',
        role: 'Solo',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'Du bist ein Häftling der Klasse D in einer Einrichtung der SCP Foundation und musst mitten in einem Sicherheitsvorfall deinen Weg nach draußen finden. Es gibt drei Enden und unterwegs reichlich Schreckmomente.',
          'Ich habe es allein in einer Woche gemacht, die Modelle in Blender und den Ton in Audacity.',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'Eine komödiantische Detektiv-Visual-Novel mit Würfeln in den Hauptrollen',
        duration: 'Juli 2022 · 48 Stunden',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          'Alles oder nichts in diesem gewagten Detektivdrama. Du spielst den Würfeldetektiv von Weltrang, und als das Unglück zuschlägt, ist ein Rätsel geboren. Auf dem Weg zur Lösung begegnest du vielen Gesichtern: den sechs eines Würfels, versteht sich.',
          'Ich habe es in 48 Stunden für den <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a> gemacht; das Thema war „roll of the dice“. Es ist eine Pixel-Art-Komödie, die man mit einer einzigen Taste spielt, und sie dauert etwa eine halbe Stunde.',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: 'Zerbrich die Pfeile, die auf dich zufliegen, und geh weiter',
        duration: 'August 2021 · 3 Tage',
        role: 'Solo, mit Musik von Jurre de Vries',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          'Du machst gerade einen schönen Nachtspaziergang, als plötzlich Banditen auf dich schießen. Statt zurückzuschlagen, zerbrichst du ihre Pfeile im Herabfallen und gehst weiter. Achte darauf, wo die Pfeile in den Himmel geschossen werden, dann weißt du, wo sie landen; je höher deine Punktzahl, desto schwerer wird es.',
          'Ich habe es für den <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a> gemacht; das Thema war „break“, die Vorgabe, dass der Spieler Pazifist ist. Die Hintergrundmusik stammt von <a href="https://jurredevries.me/">Jurre de Vries</a>. Erreiche 50 Punkte, dann wartet eine kleine Überraschung.',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: 'Ein Stealth-Prototyp, in dem du an deinen Gegnern vorbeischleichst',
        duration: '2021 · Prototyp',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          'Ein Stealth-Spiel, in dem du ungesehen an deinen Gegnern vorbeikommen musst: Du duckst dich, um unten zu bleiben, und tippst doppelt, um nach vorn zu sprinten. Es blieb ein Prototyp, ein Test dafür, wie sich Schleichen und Bewegen anfühlen sollen.',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'Eine Simulation kleiner Wesen auf einer zufällig generierten Insel',
        duration: 'Dezember 2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim ist eine Simulation, in der kleine Wesen namens Barbas auf einer zufällig generierten Insel leben und miteinander umgehen. Jedes Barba hat einen eigenen Namen und eigene Werte.',
          'Du kannst die Insel aus verschiedenen Blickwinkeln betrachten und einzelnen Barbas folgen. Der Quellcode ist auf <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a>.',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'Ein Handyspiel für zwei, das Billard mit Sumo mischt',
        duration: '2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          'Zwei Spieler teilen sich ein Handy und schießen ihre Sumo-Kugeln wie beim Billard aufeinander. Wer den anderen zuerst fünfmal aus der Arena stößt, gewinnt.',
          'Power-up-Kristalle auf dem Spielfeld verschaffen dir einen kurzen Vorteil, es gibt mehrere Arenen, und du kannst deine Farben wählen. Das Spiel läuft auf Android und Windows.',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: 'Ein Spiel übers Nahrungsammeln als Jäger und Sammler',
        duration: '2019',
        role: 'Zusammen mit Jochem Baas, Midas Scheffers und Berk Yildirim',
        tools: 'Unity',
        paragraphs: [
          'Besyes ist ein Spiel, das ich zusammen mit <a href="http://www.jochembaas.nl/">Jochem Baas</a>, <a href="https://midasscheffers.github.io/">Midas Scheffers</a> und <a href="https://github.com/BerkYildirimm">Berk Yildirim</a> gemacht habe. Du spielst einen Sammler, der auf Nahrungssuche umherstreift. Entstanden ist es im Auftrag von IJsfontein.',
          'Den Quellcode findest du auf <a href="https://github.com/jochem33/BeverBesjes">GitHub</a>.',
        ],
      },
    },
    education: {
      title: 'Ausbildung',
      schools: [
        { title: 'Philosophie (Bachelor)', org: 'Universität von Amsterdam', date: '2025 - heute' },
        {
          title: 'Creative Media and Game Technologies - Game Design (Bachelor)',
          org: 'Breda University of Applied Sciences',
          date: '2024 - 2025',
        },
        {
          title: 'Communication and Multimedia Design (Bachelor)',
          org: 'Hochschule von Amsterdam',
          date: '2022 - 2023',
          description: 'Propädeutikum 2023 mit Auszeichnung (cum laude) abgeschlossen.',
        },
      ],
    },
    footer: { source: 'Quellcode dieser Website auf GitHub' },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Diese Seite gibt es nicht (mehr). Vielleicht ist der Link veraltet oder enthält einen Tippfehler.',
      home: 'Zurück zur Startseite',
    },
    card: { mail: 'E-Mail.' },
    work: { title: 'Arbeiten', view: 'Mehr lesen', play: 'Spielen' },
    viewer: { open: 'Bild vergrößern', close: 'Schließen' },
    archive: {
      title: 'Portfolio-Museum',
      intro: 'Diese Website gibt es seit 2017, und seitdem habe ich sie sieben Mal neu gebaut. Das sind alle Versionen meines Portfolios. Manche davon wurden nie fertig, aber sie zeigen meinen Fortschritt und meine Entwicklung als Programmierer und Designer.',
      link: 'Portfolio-Museum',
      code: 'Code auf GitHub',
      visit: 'Diese Version ansehen',
      editions: {
        2026: 'Eine Visitenkarte, in sieben Sprachen.',
        2023: 'Ein weißer Balken mit meinem Gesicht als Logo, dazu Game Developer, Front-end Developer und Video Editor in fetten Großbuchstaben.',
        2022: 'Dunkelblau, ein großer Name in schweren Großbuchstaben und ein LN-Logo.',
        2021: 'Dunkel, mit dem LN-Logo, einer Menüleiste in Gelb, Blau und Rosa und einem Über mich, das ich mit siebzehn geschrieben habe.',
        2020: 'Lila Wellen, ein Foto in einem Kreis und ein großer Pfeil nach unten.',
        2019: 'Ein großes LN-Logo mit Links zur CoderClass und zum Robotikclub meiner Schule.',
        2018: 'LuukCC: rosa, mit einer kurzen Vorstellung der CoderClass und des Robotikclubs.',
        2017: 'Welkom!: meine erste Website, mit dreizehn in der CoderClass gemacht.',
      },
    },
    earlier: {
      title: 'Frühere Spiele',
    },
    about: {
      title: 'Über mich',
      paragraphs: [
        'Ich bin Luuk, Spiele- und Webentwickler und Philosophiestudent an der Universität von Amsterdam. Ich will verstehen, wie Systeme und Erfahrungen funktionieren: Deshalb baue ich Spielwelten und schreibe über Themen wie Republikanismus, wirtschaftliche Abhängigkeit und künstliche Intelligenz.',
        'Meine Spiele mache ich von Anfang bis Ende selbst, vom Design und der Technik über die Grafik und die 3D-Modelle bis hin zur Musik. Ich bouldere selbst gern, und das hat mich zu <a href="%base%everest-half-full/">Everest Half Full</a> inspiriert, meinem bisher größten Spiel: Du trägst ein Glas Wasser auf den Mount Everest und versuchst, oben so viel wie möglich davon übrig zu haben.',
        'Ich bin offen für Zusammenarbeit an Spielen, freiberufliche Webprojekte und Praktika. Schreib mir gern eine <a href="mailto:luuknoverraz@gmail.com">E-Mail</a>, auch wenn du dich einfach über Spiele oder Philosophie unterhalten möchtest.',
      ],
    },
  },

  // French. AI-translated from the English; keep it in step when that changes.
  fr: {
    htmlLang: 'fr',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – étudiant en philosophie, développeur de jeux et développeur web à Amsterdam.',
      locale: 'fr_FR',
    },
    nav: { skip: 'Aller au contenu', moreLanguages: 'Autres langues' },
    translationNote: 'Cette page a été traduite par une IA et peut contenir des erreurs.',
    role: 'Étudiant en philosophie / Développeur de jeux et web',
    location: 'Fondé en 2004, Amsterdam',
    locationLabel: 'Lieu',
    social: { mail: 'Envoyer un e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Retour',
    projectLabels: { date: 'Période', role: 'Rôle', tools: 'Outils', link: 'Jouer' },
    labelSuffix: '\u202f:', // French sets a thin space before a colon
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'Porter un verre d’eau au sommet de l’Everest',
        duration: 'septembre 2026 – aujourd’hui · en développement',
        role: 'Développeur solo',
        tools: 'Godot 4',
        paragraphs: [
          'Une montagne, un verre d’eau et, une fois en haut, le plus d’eau possible encore dedans. Everest Half Full est un jeu d’escalade à la première personne où l’on emmène quelque chose d’inutile dans un endroit déraisonnable.',
          'Le difficile, c’est de bouger. Un pas trop pressé, une réception brutale ou une rafale sur une arête exposée, et l’eau passe par-dessus le bord. Impossible de remplir le verre, et ce qui est renversé le reste. Un verre vide ne met pas fin à la tentative ; la question est de savoir combien vous en apportez jusqu’en haut.',
          'La forme de la montagne s’appuie sur les données d’altitude de la région de l’Everest, dans un style low-poly volontairement simple, avec des ciels en mouvement et une eau qui réagit à chaque pas. Aucun itinéraire n’est balisé : depuis le camp de base, à vous de trouver votre chemin.',
          'C’est mon plus grand jeu à ce jour. Je le développe seul avec Godot 4, pour PC, et je le prépare actuellement pour un test fermé. Il n’y a pas encore de date de sortie.',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'Un jeu de tribunal entre amis où les juges sont des IA',
        duration: 'juillet – août 2025',
        role: 'Solo : design, graphismes et assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Deux joueurs s’affrontent au tribunal : l’un accuse, l’autre défend, et jusqu’à quatre autres forment le jury. Les chefs d’accusation sont inventés, comme avoir volé la lune ou insulté une oie. Un juge IA rend ensuite son verdict. Il y a dix juges, chacun avec son caractère, de l’homme des cavernes au bébé.',
          'J’ai réalisé tout le jeu moi-même, graphismes et assets compris, pour la <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> à l’été 2025. Il a terminé cinquième sur 46 participants et a remporté 500 dollars. Le jury l’a décrit ainsi : <q lang="en">a great way to settle arguments IRL</q>.',
          'Il est prévu pour deux à six joueurs dans la même pièce et fonctionne dans le navigateur ainsi que sous Windows et Linux. Il faut l’application Player2 pour jouer.',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: 'Du parkour à la première personne pour sortir du cycle des réincarnations',
        duration: 'mai 2024 · 4 jours',
        role: 'Solo : jeu, graphismes, assets et musique',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'Vous êtes mort, et la lumière vient vous chercher. Courez, accroupissez-vous et foncez vers la sortie avant qu’elle ne vous rattrape et ne vous renvoie pour une autre vie. C’est un jeu de parkour à la première personne conçu pour le speedrun, dans un style low-poly de l’époque PlayStation.',
          'Je l’ai réalisé en quatre jours pour la <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a>, seul, y compris tous les graphismes, les assets 3D et la musique. Je travaille actuellement sur un remake pour le web et Discord.',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: 'Sauvez vos moutons avant l’arrivée de la lave',
        duration: 'mai 2024 · 2 jours',
        role: 'Graphismes, modèles 3D et logique de jeu, avec homhom',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'Vous êtes Jörgen, un berger islandais. Vous gardez vos moutons comme n’importe quel autre jour, quand le sol se met à gronder. Sauvez autant de moutons que possible avant que votre maison ne disparaisse sous la lave.',
          'Réalisé en deux jours avec <a href="https://homhom.itch.io/">homhom</a> pour la <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a>, dont le thème était la lave et la contrainte un temps limité. J’ai fait les illustrations et les modèles 3D, et nous avons écrit ensemble une grande partie de la logique de jeu. Conçu avec Godot, avec des poèmes de Plutbios.',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: 'Un jeu où l’on monte des escaliers, fait en cinq heures',
        duration: '2024 · 5 heures',
        role: 'Solo, bande-son comprise',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          'How Fast Can You Climb the Stairs? est un jeu où l’on monte des escaliers. Chaque marche est une suite de caractères à taper, et vous ne montez qu’aussi vite que vous tapez.',
          'Je l’ai fait en cinq heures pour <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a>, avec une bande-son originale de trois morceaux : How Fast Can You Climb The Stairs?, You Gots To Type, Son et You Done Did Type, Son. Les poèmes sont de Plutbios.',
          'Mon record personnel est de 1,67 seconde, ce qui est aussi, à ma connaissance, le record du monde.',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: 'Un jeu de plateforme où vous accomplissez la prophétie du Hero of Light',
        duration: 'janvier 2024 · 3 jours',
        role: 'Graphismes et programmation, avec homhom',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          'Annoncé depuis longtemps par les mythes et les légendes, le Hero of Light doit un jour libérer le peuple des démons magiques qui oppriment son pays. Ce héros, c’est vous : armé de quelques armes peu conventionnelles, vous éliminez les menaces et esquivez tout ce qui vient vers vous.',
          '<a href="https://homhom.itch.io/">homhom</a> et moi l’avons fait pour la <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a>, dont le thème était la magie et la contrainte « light is the way ». J’ai fait les graphismes et partagé la programmation ; homhom s’est aussi occupé du level design.',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: 'Vous vous réveillez et il vous manque quelque chose',
        duration: 'octobre 2023',
        role: 'Graphismes et programmation, avec homhom et Plutbios',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          'Vous vous réveillez et il vous manque quelque chose…',
          '<a href="https://homhom.itch.io/">homhom</a> et moi l’avons fait pour <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a>, avec Plutbios, qui a écrit l’histoire et participé au level design. J’ai fait les graphismes et partagé la programmation avec homhom, qui a aussi conçu des niveaux.',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: 'Un poste de gardien dans une prison où les détenus sont des Post-it',
        duration: 'juin 2023 · 6 jours',
        role: 'Solo',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'Bienvenue à la Post-it Prison, où de redoutables criminels ont été, on ne sait comment, transformés en Post-it et collés au mur. C’est assez peu éthique. C’est aussi votre premier jour de travail, et la prison manque cruellement de personnel.',
          'Commencez par l’ordinateur, puis courez vers le détenu qui a besoin de vous avant d’avoir perdu tous vos cœurs. Le but est de tenir le plus longtemps possible.',
          'Je l’ai fait seul en six jours pour <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a>.',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'Un court jeu d’horreur dans l’univers de la Fondation SCP',
        duration: 'avril 2023 · 1 semaine',
        role: 'Solo',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'Vous êtes un détenu de classe D dans un site de la Fondation SCP et, en plein incident de sécurité, vous devez trouver la sortie. Il y a trois fins, et pas mal de frayeurs en chemin.',
          'Je l’ai fait seul en une semaine, avec des modèles créés dans Blender et un son monté dans Audacity.',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'Un visual novel policier et comique avec des dés dans les rôles principaux',
        duration: 'juillet 2022 · 48 heures',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          'Ça passe ou ça casse dans ce drame policier à haut risque. Vous incarnez le détective-dé de renommée mondiale et, quand le drame frappe, un mystère est né. En chemin vers la solution, vous croiserez bien des faces : les six d’un dé, bien sûr.',
          'Je l’ai fait en 48 heures pour la <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a>, dont le thème était « roll of the dice ». C’est une comédie en pixel art qui se joue avec un seul bouton et dure environ une demi-heure.',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: 'Brisez les flèches qui volent vers vous et continuez à marcher',
        duration: 'août 2021 · 3 jours',
        role: 'Solo, musique de Jurre de Vries',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          'Vous faisiez une agréable promenade nocturne quand des bandits se mettent soudain à vous tirer dessus. Au lieu de riposter, vous brisez leurs flèches pendant leur chute et continuez votre chemin. Regardez où les flèches sont tirées dans le ciel pour savoir où elles tomberont ; plus votre score monte, plus le jeu devient difficile.',
          'Je l’ai fait pour la <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a>, dont le thème était « break » et la contrainte que le joueur soit pacifiste. La musique de fond est de <a href="https://jurredevries.me/">Jurre de Vries</a>. Atteignez un score de 50 pour découvrir une petite surprise.',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: 'Un prototype d’infiltration où il faut se faufiler entre les ennemis',
        duration: '2021 · prototype',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          'Un jeu d’infiltration où il faut passer devant ses ennemis sans être vu, en s’accroupissant pour rester bas et en appuyant deux fois pour foncer vers l’avant. Il est resté à l’état de prototype : un essai pour trouver la bonne sensation de déplacement et d’infiltration.',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'Une simulation de petites créatures sur une île générée aléatoirement',
        duration: 'décembre 2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim est une simulation dans laquelle de petites créatures, les Barbas, vivent et interagissent sur une île générée aléatoirement. Chaque Barba a son propre nom et ses propres caractéristiques.',
          'Vous pouvez observer l’île sous différents angles et suivre chaque Barba individuellement. Le code source est disponible sur <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a>.',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'Un jeu mobile à deux qui mélange billard et sumo',
        duration: '2020',
        role: 'Solo',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          'Deux joueurs partagent un même téléphone et se lancent leurs boules de sumo dessus, façon billard. Le premier à éjecter l’autre de l’arène cinq fois gagne.',
          'Des cristaux bonus apparaissent sur le terrain pour un avantage temporaire, il y a plusieurs arènes et vous pouvez choisir vos couleurs. Le jeu tourne sur Android et Windows.',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: 'Un jeu où l’on cherche de quoi manger en chasseur-cueilleur',
        duration: '2019',
        role: 'Avec Jochem Baas, Midas Scheffers et Berk Yildirim',
        tools: 'Unity',
        paragraphs: [
          'Besyes est un jeu que j’ai fait avec <a href="http://www.jochembaas.nl/">Jochem Baas</a>, <a href="https://midasscheffers.github.io/">Midas Scheffers</a> et <a href="https://github.com/BerkYildirimm">Berk Yildirim</a>. On y incarne un cueilleur qui fouille les environs pour trouver de quoi manger. Il a été réalisé à la demande d’IJsfontein.',
          'Le code source est sur <a href="https://github.com/jochem33/BeverBesjes">GitHub</a>.',
        ],
      },
    },
    education: {
      title: 'Formation',
      schools: [
        { title: 'Philosophie (licence)', org: 'Université d’Amsterdam', date: '2025 - aujourd’hui' },
        {
          title: 'Creative Media and Game Technologies - Game Design (licence)',
          org: 'Breda University of Applied Sciences',
          date: '2024 - 2025',
        },
        {
          title: 'Communication and Multimedia Design (licence)',
          org: 'Haute école d’Amsterdam',
          date: '2022 - 2023',
          description: 'Propédeutique obtenue en 2023 avec mention (cum laude).',
        },
      ],
    },
    footer: { source: 'Code source de ce site sur GitHub' },
    notFound: {
      title: 'Page introuvable',
      text: 'Cette page n’existe pas (ou plus). Le lien est peut-être obsolète ou contient une faute de frappe.',
      home: 'Retour à l’accueil',
    },
    card: { mail: 'E-mail.' },
    work: { title: 'Travaux', view: 'En savoir plus', play: 'Jouer' },
    viewer: { open: 'Agrandir l’image', close: 'Fermer' },
    archive: {
      title: 'Musée du portfolio',
      intro: 'Ce site existe depuis 2017 et a été reconstruit sept fois depuis. Voici toutes les versions de mon portfolio. Certaines n’ont jamais été terminées, mais elles montrent bien mes progrès et mon évolution en tant que développeur et designer.',
      link: 'Musée du portfolio',
      code: 'Code sur GitHub',
      visit: 'Voir cette version',
      editions: {
        2026: 'Une carte de visite, en sept langues.',
        2023: 'Une barre blanche avec mon visage en logo, et game developer, front-end developer et video editor en grosses capitales.',
        2022: 'Du bleu nuit, un grand nom en capitales épaisses et un logo LN.',
        2021: 'Sombre, avec le logo LN, une barre de menu jaune, bleue et rose, et un À propos écrit à dix-sept ans.',
        2020: 'Des vagues violettes, une photo dans un cercle et une grande flèche vers le bas.',
        2019: 'Un grand logo LN, avec des liens vers la CoderClass et le club de robotique de mon lycée.',
        2018: 'LuukCC : rose, avec une courte présentation de la CoderClass et du club de robotique.',
        2017: 'Welkom! : mon premier site, fait à treize ans dans la CoderClass.',
      },
    },
    earlier: {
      title: 'Jeux précédents',
    },
    about: {
      title: 'À propos de moi',
      paragraphs: [
        'Je suis Luuk, développeur de jeux et de sites web, et étudiant en philosophie à l’Université d’Amsterdam. Je veux comprendre comment fonctionnent les systèmes et les expériences : c’est pourquoi je construis des mondes de jeu et j’écris sur des sujets comme le républicanisme, la dépendance économique et l’intelligence artificielle.',
        'Je réalise mes jeux moi-même du début à la fin, de la conception et de la technique aux graphismes, en passant par les modèles 3D et même la musique. J’adore faire de l’escalade de bloc, et c’est ce qui m’a inspiré pour <a href="%base%everest-half-full/">Everest Half Full</a>, mon plus grand jeu à ce jour : vous portez un verre d’eau jusqu’au sommet de l’Everest en essayant d’en garder le plus possible.',
        'Je suis ouvert aux collaborations sur des jeux, aux projets web en freelance et aux stages. N’hésitez pas à m’envoyer un <a href="mailto:luuknoverraz@gmail.com">e-mail</a>, même si vous voulez simplement parler de jeux ou de philosophie.',
      ],
    },
  },

  // Spanish. AI-translated from the English; keep it in step when that changes.
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Luuk Noverraz',
      description:
        'Luuk Noverraz – estudiante de filosofía, desarrollador de videojuegos y desarrollador web de Ámsterdam.',
      locale: 'es_ES',
    },
    nav: { skip: 'Saltar al contenido', moreLanguages: 'Más idiomas' },
    translationNote: 'Esta página ha sido traducida por una IA y puede contener errores.',
    role: 'Estudiante de filosofía / Desarrollador de juegos y web',
    location: 'Desde 2004, Ámsterdam',
    locationLabel: 'Lugar',
    social: { mail: 'Enviar un correo', linkedin: 'LinkedIn', github: 'GitHub' },
    back: 'Volver',
    projectLabels: { date: 'Periodo', role: 'Rol', tools: 'Herramientas', link: 'Jugar' },
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'Sube un vaso de agua al Everest',
        duration: 'septiembre de 2026 – actualidad · en desarrollo',
        role: 'Desarrollador en solitario',
        tools: 'Godot 4',
        paragraphs: [
          'Una montaña, un vaso de agua y, al llegar arriba, la mayor cantidad posible todavía dentro. Everest Half Full es un juego de escalada en primera persona sobre llevar algo innecesario a un lugar poco razonable.',
          'Lo difícil es moverse. Un paso apresurado, un aterrizaje brusco o una ráfaga en una cresta expuesta hacen que el agua se salga por el borde. No se puede rellenar, y lo derramado, derramado está. Un vaso vacío no termina el intento; la cuestión es cuánta agua consigues llevar contigo.',
          'La forma de la montaña se basa en datos de elevación de la región del Everest, con un estilo low-poly deliberadamente sencillo, cielos en movimiento y un agua que responde a cada paso. No hay ruta marcada: desde el campo base, el camino hacia arriba lo buscas tú.',
          'Es mi juego más grande hasta la fecha. Lo desarrollo yo solo en Godot 4, para PC, y ahora lo estoy preparando para una prueba cerrada. Todavía no hay fecha de lanzamiento.',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: 'Un juego de fiesta en un tribunal donde los jueces son IA',
        duration: 'julio – agosto de 2025',
        role: 'En solitario: diseño, arte y recursos',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Dos jugadores se enfrentan en el tribunal: uno acusa, el otro defiende, y hasta cuatro más forman el jurado. Los cargos son inventados, como haber robado la luna o insultado a un ganso. Después, un juez de IA dicta sentencia. Hay diez jueces, cada uno con su carácter, desde un cavernícola hasta un bebé.',
          'Hice todo el juego yo solo, incluidos el arte y los recursos, para la <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> del verano de 2025. Quedó quinto entre 46 participantes y ganó 500 dólares. El jurado lo describió como <q lang="en">a great way to settle arguments IRL</q>.',
          'Está pensado para entre dos y seis jugadores en la misma habitación y funciona en el navegador, en Windows y en Linux. Para jugar hace falta la aplicación Player2.',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: 'Parkour en primera persona para salir del ciclo de la reencarnación',
        duration: 'mayo de 2024 · 4 días',
        role: 'En solitario: juego, arte, recursos y música',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'Has muerto y la luz viene a por ti. Corre, agáchate y lánzate hacia la salida antes de que te alcance y te mande de vuelta a otra vida. Es un juego de parkour en primera persona pensado para el speedrun, con un estilo low-poly de la era PlayStation.',
          'Lo hice en cuatro días para la <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a>, yo solo, incluidos todo el arte, los recursos 3D y la música. Ahora estoy trabajando en un remake para web y Discord.',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: 'Salva a tus ovejas antes de que llegue la lava',
        duration: 'mayo de 2024 · 2 días',
        role: 'Arte, modelos 3D y lógica del juego, junto con homhom',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'Eres Jörgen, un pastor islandés. Estás cuidando de tus ovejas como cualquier otro día cuando el suelo empieza a retumbar. Rescata a tantas ovejas como puedas antes de que tu hogar desaparezca bajo la lava.',
          'Hecho en dos días con <a href="https://homhom.itch.io/">homhom</a> para la <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a>, cuyo tema era la lava y cuya condición era que el tiempo fuese limitado. Yo me encargué de las ilustraciones y los modelos 3D, y buena parte de la lógica del juego la escribimos juntos. Creado con Godot, con poesía de Plutbios.',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: 'Un juego sobre subir escaleras, hecho en cinco horas',
        duration: '2024 · 5 horas',
        role: 'En solitario, banda sonora incluida',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          'How Fast Can You Climb the Stairs? es un juego sobre subir escaleras. Cada escalón es una serie de caracteres que tienes que teclear, y solo subes tan rápido como seas capaz de teclearlos.',
          'Lo hice en cinco horas para <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a>, con una banda sonora original de tres temas: How Fast Can You Climb The Stairs?, You Gots To Type, Son y You Done Did Type, Son. La poesía es de Plutbios.',
          'Mi mejor marca personal es de 1,67 segundos, que, hasta donde sé, también es el récord mundial.',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: 'Un juego de plataformas en el que cumples la profecía del Hero of Light',
        duration: 'enero de 2024 · 3 días',
        role: 'Arte y programación, junto con homhom',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          'Anunciado desde hace mucho en mitos y leyendas, se dice que el Hero of Light liberará algún día al pueblo de los demonios mágicos que oprimen su tierra. Ese héroe eres tú: con un armamento poco convencional, acabas con las amenazas y esquivas todo lo demás que se te viene encima.',
          '<a href="https://homhom.itch.io/">homhom</a> y yo lo hicimos para la <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a>, cuyo tema era la magia y cuya limitación era «light is the way». Yo hice el arte y compartimos la programación; homhom también se encargó del diseño de niveles.',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: 'Te despiertas y notas que te falta algo',
        duration: 'octubre de 2023',
        role: 'Arte y programación, junto con homhom y Plutbios',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          'Te despiertas y notas que te falta algo…',
          '<a href="https://homhom.itch.io/">homhom</a> y yo lo hicimos para <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a>, junto con Plutbios, que escribió la historia y trabajó en el diseño de niveles. Yo hice el arte y compartí la programación con homhom, que también diseñó niveles.',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: 'Un trabajo de guardia en una prisión donde los presos son pósits',
        duration: 'junio de 2023 · 6 días',
        role: 'En solitario',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'Bienvenido a la Post-it Prison, donde unos criminales muy astutos se han convertido, no se sabe cómo, en pósits pegados a la pared. Es bastante poco ético. Además es tu primer día de trabajo, y la prisión anda muy escasa de personal.',
          'Empieza en el ordenador y luego corre hacia el preso que te necesite antes de quedarte sin corazones. El objetivo es aguantar todo lo que puedas.',
          'Lo hice yo solo en seis días para <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a>.',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'Un juego corto de terror ambientado en el mundo de la Fundación SCP',
        duration: 'abril de 2023 · 1 semana',
        role: 'En solitario',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'Eres un recluso de clase D en unas instalaciones de la Fundación SCP y, en plena brecha de seguridad, tienes que encontrar la salida. Hay tres finales y sustos de sobra por el camino.',
          'Lo hice yo solo en una semana, con los modelos hechos en Blender y el sonido editado en Audacity.',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'Una novela visual de detectives y comedia con dados como protagonistas',
        duration: 'julio de 2022 · 48 horas',
        role: 'En solitario',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          'Todo o nada en este arriesgado drama de detectives. Eres el detective de dados más famoso del mundo y, cuando ocurre la tragedia, nace un misterio. Por el camino conocerás muchas caras: las seis de un dado, claro.',
          'Lo hice en 48 horas para la <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a>, cuyo tema era «roll of the dice». Es una comedia en pixel art que se juega con un solo botón y dura una media hora.',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: 'Rompe las flechas que vuelan hacia ti y sigue caminando',
        duration: 'agosto de 2021 · 3 días',
        role: 'En solitario, con música de Jurre de Vries',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          'Estabas dando un agradable paseo nocturno cuando, de repente, unos bandidos empiezan a dispararte. En lugar de contraatacar, rompes sus flechas mientras caen y sigues avanzando. Fíjate en dónde se disparan las flechas hacia el cielo para saber dónde caerán; el juego se vuelve más difícil a medida que sube tu puntuación.',
          'Lo hice para la <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a>, cuyo tema era «break» y cuya limitación era que el jugador fuese pacifista. La música de fondo es de <a href="https://jurredevries.me/">Jurre de Vries</a>. Llega a 50 puntos para ver una pequeña sorpresa.',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: 'Un prototipo de sigilo en el que tienes que escabullirte entre los enemigos',
        duration: '2021 · prototipo',
        role: 'En solitario',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          'Un juego de sigilo en el que tienes que pasar junto a tus enemigos sin que te vean, agachándote para no llamar la atención y pulsando dos veces para lanzarte hacia delante. Se quedó en prototipo: una prueba de cómo debían sentirse el sigilo y el movimiento.',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'Una simulación de pequeñas criaturas en una isla generada al azar',
        duration: 'diciembre de 2020',
        role: 'En solitario',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          'Barbasim es una simulación en la que unas pequeñas criaturas llamadas Barbas viven e interactúan en una isla generada al azar. Cada Barba tiene su propio nombre y sus propias estadísticas.',
          'Puedes ver la isla desde distintos ángulos y seguir a cada Barba. El código fuente está en <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a>.',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'Un juego para móvil de dos jugadores que mezcla billar y sumo',
        duration: '2020',
        role: 'En solitario',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          'Dos jugadores comparten un mismo móvil y se lanzan sus bolas de sumo al estilo del billar. Gana quien saque primero al otro del escenario cinco veces.',
          'En el campo aparecen cristales potenciadores que dan una ventaja temporal, hay varios escenarios en los que luchar y puedes elegir tus colores. Funciona en Android y Windows.',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: 'Un juego sobre buscar comida como cazador-recolector',
        duration: '2019',
        role: 'Junto con Jochem Baas, Midas Scheffers y Berk Yildirim',
        tools: 'Unity',
        paragraphs: [
          'Besyes es un juego que hice junto con <a href="http://www.jochembaas.nl/">Jochem Baas</a>, <a href="https://midasscheffers.github.io/">Midas Scheffers</a> y <a href="https://github.com/BerkYildirimm">Berk Yildirim</a>. Encarnas a un recolector que busca comida por los alrededores. Lo hicimos por encargo de IJsfontein.',
          'El código fuente está en <a href="https://github.com/jochem33/BeverBesjes">GitHub</a>.',
        ],
      },
    },
    education: {
      title: 'Formación',
      schools: [
        { title: 'Filosofía (grado)', org: 'Universidad de Ámsterdam', date: '2025 - actualidad' },
        {
          title: 'Creative Media and Game Technologies - Game Design (grado)',
          org: 'Breda University of Applied Sciences',
          date: '2024 - 2025',
        },
        {
          title: 'Communication and Multimedia Design (grado)',
          org: 'Universidad de Ciencias Aplicadas de Ámsterdam',
          date: '2022 - 2023',
          description: 'Propedéutico obtenido en 2023 con mención cum laude.',
        },
      ],
    },
    footer: { source: 'Código fuente de este sitio en GitHub' },
    notFound: {
      title: 'Página no encontrada',
      text: 'Esta página no existe (o ya no existe). Puede que el enlace esté desactualizado o tenga un error.',
      home: 'Volver al inicio',
    },
    card: { mail: 'E-mail.' },
    work: { title: 'Trabajos', view: 'Leer más', play: 'Jugar' },
    viewer: { open: 'Ampliar imagen', close: 'Cerrar' },
    archive: {
      title: 'Museo del portfolio',
      intro: 'Este sitio existe desde 2017 y se ha rehecho siete veces desde entonces. Estas son todas las versiones de mi portfolio. Algunas nunca llegaron a terminarse, pero sí muestran mi progreso y mi evolución como programador y diseñador.',
      link: 'Museo del portfolio',
      code: 'Código en GitHub',
      visit: 'Ver esta versión',
      editions: {
        2026: 'Una tarjeta de visita, en siete idiomas.',
        2023: 'Una barra blanca con mi cara como logo, y game developer, front-end developer y video editor en mayúsculas gruesas.',
        2022: 'Azul oscuro, un nombre grande en mayúsculas gruesas y un logo LN.',
        2021: 'Oscuro, con el logo LN, una barra de menú en amarillo, azul y rosa, y un Sobre mí que escribí con diecisiete años.',
        2020: 'Olas moradas, una foto en un círculo y una gran flecha hacia abajo.',
        2019: 'Un gran logo LN, con enlaces a la CoderClass y al club de robótica del instituto.',
        2018: 'LuukCC: rosa, con una breve presentación de la CoderClass y del club de robótica.',
        2017: 'Welkom!: mi primer sitio, hecho con trece años en la CoderClass.',
      },
    },
    earlier: {
      title: 'Juegos anteriores',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy Luuk, desarrollador de videojuegos y web y estudiante de filosofía en la Universidad de Ámsterdam. Quiero entender cómo funcionan los sistemas y las experiencias: por eso construyo mundos de juego y escribo sobre temas como el republicanismo, la dependencia económica y la inteligencia artificial.',
        'Hago mis juegos yo mismo de principio a fin, desde el diseño y la parte técnica hasta los gráficos, los modelos 3D e incluso la música. Me encanta hacer boulder, y eso me inspiró para <a href="%base%everest-half-full/">Everest Half Full</a>, mi juego más grande hasta la fecha: llevas un vaso de agua hasta la cima del Everest e intentas que te quede la mayor cantidad posible.',
        'Estoy abierto a colaboraciones en juegos, proyectos web freelance y prácticas. No dudes en escribirme un <a href="mailto:luuknoverraz@gmail.com">correo</a>, aunque solo quieras hablar de juegos o de filosofía.',
      ],
    },
  },

  // Japanese. AI-translated from the English; keep it in step when that changes.
  ja: {
    htmlLang: 'ja',
    meta: {
      title: 'Luuk Noverraz',
      description: 'Luuk Noverraz – アムステルダムを拠点とする哲学専攻の学生、ゲーム開発者、ウェブ開発者。',
      locale: 'ja_JP',
    },
    nav: { skip: '本文へスキップ', moreLanguages: '他の言語' },
    translationNote: 'このページは AI による翻訳で、誤りを含む場合があります。',
    role: '哲学専攻 / ゲーム開発 / ウェブ開発',
    location: '2004年創業、アムステルダム',
    locationLabel: '所在地',
    social: { mail: 'メールを送る', linkedin: 'LinkedIn', github: 'GitHub' },
    back: '戻る',
    projectLabels: { date: '期間', role: '担当', tools: 'ツール', link: 'プレイ' },
    labelSuffix: '：',
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: 'コップ一杯の水を持ってエベレストに登る',
        duration: '2026年9月 – 現在 · 開発中',
        role: 'ソロ開発',
        tools: 'Godot 4',
        paragraphs: [
          '山がひとつ、水が一杯。頂上にどれだけ残せるか。『Everest Half Full』は、必要のないものを理不尽な場所まで運ぶ、一人称視点の登山ゲームです。',
          '難しいのは動くことです。急いだ一歩、荒い着地、吹きさらしの尾根を抜ける突風。どれも水を縁からこぼしてしまいます。注ぎ足しはできず、こぼれた水は戻りません。コップが空になっても挑戦は終わりません。問われるのは、どれだけ持って上がれるかです。',
          '山の形はエベレスト周辺の標高データをもとにしています。あえてシンプルにしたローポリの世界に、移ろう空と、一歩ごとに揺れる水。決められたルートはなく、ベースキャンプから自分で道を探して登ります。',
          'これまでで最も大きな作品です。Godot 4 を使ってひとりで開発しており、PC 向けに、現在クローズドのプレイテストに向けて準備を進めています。発売日は未定です。',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: '裁判官が AI の法廷パーティーゲーム',
        duration: '2025年7月 – 8月',
        role: 'ソロ：デザイン、アート、アセット',
        tools: 'Godot、Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          '2人のプレイヤーが法廷で向き合います。1人が訴え、もう1人が弁護し、最大4人が陪審員になります。罪状は「月を盗んだ」「ガチョウを侮辱した」など、すべてでっち上げ。最後に AI の裁判官が判決を下します。裁判官は原始人から赤ちゃんまで、個性の違う10人です。',
          'アートとアセットを含め、ゲーム全体をひとりで制作しました。2025年夏の <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> への応募作で、46作品中5位となり、賞金500ドルを獲得しました。審査員のコメントは <q lang="en">a great way to settle arguments IRL</q> でした。',
          '同じ部屋に集まった2〜6人で遊ぶゲームで、ブラウザのほか Windows と Linux で動作します。プレイには Player2 アプリが必要です。',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: '輪廻から抜け出す一人称パルクール',
        duration: '2024年5月 · 4日間',
        role: 'ソロ：ゲーム、アート、アセット、音楽',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          'あなたは死に、光が迎えに来ます。走り、しゃがみ、ダッシュして、追いつかれて次の人生へ送り返される前に脱出しましょう。PlayStation 時代を思わせるローポリの、スピードラン向け一人称パルクールゲームです。',
          '<a href="https://itch.io/jam/speedjam5">SpeedJam #5</a> のために4日間で、アート、3D アセット、音楽まですべてひとりで作りました。現在はウェブと Discord 向けのリメイクを制作しています。',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: '溶岩が来る前に羊を救い出せ',
        duration: '2024年5月 · 2日間',
        role: 'アート、3D モデル、ゲームロジック（homhom と共同）',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          'あなたはアイスランドの羊飼い、Jörgen。いつものように羊の世話をしていると、地面が鳴り始めます。家が溶岩にのみ込まれる前に、できるだけ多くの羊を救い出しましょう。',
          '<a href="https://homhom.itch.io/">homhom</a> と2日間で、<a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a> のために作りました。テーマは「溶岩」、条件は「時間制限があること」。私はアートワークと 3D モデルを担当し、ゲームロジックの多くは2人で書きました。Godot 製で、詩は Plutbios によるものです。',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: '階段をのぼるゲーム。5時間で制作',
        duration: '2024年 · 5時間',
        role: 'ソロ（サウンドトラックも担当）',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          '『How Fast Can You Climb the Stairs?』は階段をのぼるゲームです。一段ごとに表示される文字列をタイプし、タイプが速いほど速くのぼれます。',
          '<a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a> のために5時間で制作しました。オリジナルのサウンドトラック3曲（How Fast Can You Climb The Stairs?、You Gots To Type, Son、You Done Did Type, Son）も自作です。詩は Plutbios によるものです。',
          '自己ベストは1.67秒で、知る限りではこれが世界記録でもあります。',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: '「光の勇者」の予言を果たすプラットフォーマー',
        duration: '2024年1月 · 3日間',
        role: 'アートとプログラム（homhom と共同）',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          '神話や伝説で古くから語られてきた「光の勇者」は、いつの日か、魔物に虐げられた人々を解放するといわれています。その勇者があなたです。少し変わった武器で脅威を退け、迫りくる攻撃をかわしながら進みましょう。',
          '<a href="https://homhom.itch.io/">homhom</a> と2人で <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a> のために制作しました。テーマは「魔法」、条件は「light is the way」。私はアートを担当し、プログラムは2人で分担しました。レベルデザインは homhom です。',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: '目を覚ますと、何かが足りない',
        duration: '2023年10月',
        role: 'アートとプログラム（homhom、Plutbios と共同）',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          '目を覚ますと、何かが足りない……',
          '<a href="https://homhom.itch.io/">homhom</a> と2人で、Plutbios とともに <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a> のために制作しました。Plutbios はストーリーとレベルデザインを担当。私はアートを担当し、プログラムを homhom と分担しました。homhom はレベルデザインも手がけています。',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: '囚人がみんな付箋の刑務所で働く看守',
        duration: '2023年6月 · 6日間',
        role: 'ソロ',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          'ようこそ、Post-it Prison へ。ここでは悪名高い犯罪者たちが、なぜか付箋に変えられて壁に貼られています。倫理的にはかなり問題です。しかも今日はあなたの初出勤で、刑務所はひどい人手不足です。',
          'まずはコンピューターから始め、ハートがなくなる前に、助けを求める囚人のもとへ走りましょう。目標は、できるだけ長く持ちこたえることです。',
          '<a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a> のために、6日間でひとりで制作しました。',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: 'SCP 財団の世界を舞台にした短編ホラー',
        duration: '2023年4月 · 1週間',
        role: 'ソロ',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          'あなたは SCP 財団の施設に収容された D クラス職員。セキュリティ事案のさなか、出口を探さなければなりません。エンディングは3種類、道中には恐怖がたっぷり待っています。',
          '1週間でひとりで制作しました。モデルは Blender、サウンドは Audacity で作っています。',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: 'サイコロたちが主役のコメディ探偵ビジュアルノベル',
        duration: '2022年7月 · 48時間',
        role: 'ソロ',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          '一か八かのサイコロ探偵ドラマ。あなたは世界的なサイコロ探偵となり、悲劇が起きたとき、ひとつの謎が生まれます。真相に迫るまでに、たくさんの「顔」と出会うことに。もちろん、サイコロの6つの面のことです。',
          '<a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a> のために48時間で制作しました。テーマは「roll of the dice」。ボタンひとつで遊べるピクセルアートのコメディで、プレイ時間は約30分です。',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: '飛んでくる矢を砕きながら、歩き続けよう',
        duration: '2021年8月 · 3日間',
        role: 'ソロ（音楽は Jurre de Vries）',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          '夜の散歩を楽しんでいたら、突然、盗賊たちが矢を放ってきました。反撃するのではなく、落ちてくる矢を砕いて進み続けましょう。矢が空に放たれる位置を見れば、どこに落ちてくるかがわかります。スコアが上がるほど難しくなります。',
          '<a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a> のために制作しました。テーマは「break」、条件は「プレイヤーは平和主義者」。BGM は <a href="https://jurredevries.me/">Jurre de Vries</a> によるものです。スコア50を達成すると、ちょっとしたお楽しみがあります。',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: '敵の目をかいくぐって進むステルスのプロトタイプ',
        duration: '2021年 · プロトタイプ',
        role: 'ソロ',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          '敵に見つからずに通り抜けるステルスゲームです。しゃがんで身を低くし、ダブルタップで前方にダッシュします。忍び足や移動の手ざわりを確かめるための、プロトタイプのままの作品です。',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: 'ランダム生成された島で暮らす小さな生き物たちのシミュレーション',
        duration: '2020年12月',
        role: 'ソロ',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          '『Barbasim』は、Barba と呼ばれる小さな生き物たちが、ランダムに生成された島で暮らし、互いに関わり合うシミュレーションです。どの Barba にも、それぞれの名前と能力値があります。',
          '島をさまざまな角度から眺めたり、1匹の Barba を追いかけたりできます。ソースコードは <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a> で公開しています。',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: 'ビリヤードと相撲を混ぜた、2人用のモバイルゲーム',
        duration: '2020年',
        role: 'ソロ',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          '2人で1台のスマートフォンを使い、ビリヤードのように相撲の玉をぶつけ合います。先に相手を5回場外へ押し出したほうの勝ちです。',
          'フィールドに現れるパワーアップクリスタルで一時的に有利になれるほか、複数のステージで戦え、色も自由に選べます。Android と Windows で動作します。',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: '狩猟採集民として食べ物を探し集めるゲーム',
        duration: '2019',
        role: 'Jochem Baas、Midas Scheffers、Berk Yildirim と共同',
        tools: 'Unity',
        paragraphs: [
          'Besyes は <a href="http://www.jochembaas.nl/">Jochem Baas</a>、<a href="https://midasscheffers.github.io/">Midas Scheffers</a>、<a href="https://github.com/BerkYildirimm">Berk Yildirim</a> と一緒に作ったゲームです。採集民となって、食べ物を探し集めて回ります。IJsfontein からの課題として制作しました。',
          'ソースコードは <a href="https://github.com/jochem33/BeverBesjes">GitHub</a> で公開しています。',
        ],
      },
    },
    education: {
      title: '学歴',
      schools: [
        { title: '哲学（学士課程）', org: 'アムステルダム大学', date: '2025 - 現在' },
        {
          title: 'クリエイティブメディア＆ゲームテクノロジー - ゲームデザイン（学士課程）',
          org: 'ブレダ応用科学大学',
          date: '2024 - 2025',
        },
        {
          title: 'コミュニケーション＆マルチメディアデザイン（学士課程）',
          org: 'アムステルダム応用科学大学',
          date: '2022 - 2023',
          description: '2023年、1年次修了証（プロペデューズ）を優等（cum laude）で取得。',
        },
      ],
    },
    footer: { source: 'このサイトのソースコード（GitHub）' },
    notFound: {
      title: 'ページが見つかりません',
      text: 'このページは存在しないか、すでに削除されています。リンクが古いか、URL に誤りがあるかもしれません。',
      home: 'ホームに戻る',
    },
    card: { mail: 'E-mail.' },
    work: { title: '作品', view: '詳しく見る', play: 'プレイ' },
    viewer: { open: '画像を拡大', close: '閉じる' },
    archive: {
      title: 'ポートフォリオ博物館',
      intro: 'このサイトは2017年に始まり、これまでに7回作り直してきました。ここにあるのは私のポートフォリオのすべてのバージョンです。完成しなかったものもありますが、プログラマー・デザイナーとしての成長の記録になっています。',
      link: 'ポートフォリオ博物館',
      code: 'GitHub のコード',
      visit: 'このバージョンを見る',
      editions: {
        2026: '名刺のデザインで、7つの言語に対応。',
        2023: '白いバーに自分の顔のロゴ、太い大文字で「game developer / front-end developer / video editor」。',
        2022: 'ダークブルーの背景に、太い大文字の大きな名前と LN のロゴ。',
        2021: 'ダークな背景に LN のロゴ、黄・青・ピンクのメニューバー、17歳のときに書いた自己紹介。',
        2020: '紫の波、円の中の写真、下向きの大きな矢印。',
        2019: '大きな LN のロゴと、CoderClass や学校のロボット部へのリンク。',
        2018: 'LuukCC：ピンクの背景に、CoderClass とロボット部の短い紹介。',
        2017: 'Welkom!：13歳のときに CoderClass で作った、初めてのサイト。',
      },
    },
    earlier: {
      title: '過去のゲーム',
    },
    about: {
      title: '自己紹介',
      paragraphs: [
        'Luuk です。ゲーム・ウェブ開発者で、アムステルダム大学で哲学を学んでいます。システムや経験がどのように成り立っているのかを理解したくて、ゲームの世界をつくり、共和主義や経済的依存、人工知能といったテーマについて文章を書いています。',
        'ゲームは設計や技術面からグラフィック、3D モデル、音楽まで、最初から最後まで自分でつくっています。ボルダリングが好きで、それが『<a href="%base%everest-half-full/">Everest Half Full</a>』のヒントにもなりました。これまでで最大の作品で、コップ一杯の水を持ってエベレストに登り、頂上でできるだけ多く残すことを目指すゲームです。',
        'ゲームの共同制作、フリーランスのウェブ案件、インターンシップのお話を歓迎しています。ゲームや哲学についてただ話したいだけでも、お気軽に<a href="mailto:luuknoverraz@gmail.com">メール</a>をください。',
      ],
    },
  },

  // Simplified Chinese. AI-translated from the English; keep it in step when that changes.
  zh: {
    htmlLang: 'zh-Hans',
    meta: {
      title: 'Luuk Noverraz',
      description: 'Luuk Noverraz——来自阿姆斯特丹的哲学系学生、游戏开发者和网页开发者。',
      locale: 'zh_CN',
    },
    nav: { skip: '跳到正文', moreLanguages: '更多语言' },
    translationNote: '本页面由 AI 翻译，可能存在错误。',
    role: '哲学系学生 / 游戏开发者 / 网页开发者',
    location: '始于 2004，阿姆斯特丹',
    locationLabel: '所在地',
    social: { mail: '发送电子邮件', linkedin: 'LinkedIn', github: 'GitHub' },
    back: '返回',
    projectLabels: { date: '时间', role: '职责', tools: '工具', link: '试玩' },
    labelSuffix: '：',
    projects: {
      'everest-half-full': {
        name: 'Everest Half Full',
        slogan: '端着一杯水登上珠穆朗玛峰',
        duration: '2026 年 9 月至今 · 开发中',
        role: '独立开发',
        tools: 'Godot 4',
        paragraphs: [
          '一座山，一杯水，登顶时能剩多少算多少。《Everest Half Full》是一款第一人称登山游戏，讲的是把一件没必要的东西带到一个不讲道理的地方。',
          '难的是移动。一步迈得太急、一次落地太重，或是裸露山脊上的一阵风，都会让水洒出杯沿。中途没有续杯，洒了就是洒了。杯子空了，这次挑战也不会结束；问题只在于你能带上去多少。',
          '山体的形状取自珠峰地区的高程数据，画面是刻意保持简洁的低多边形风格，配上流动的天空和会随每一步晃动的水。没有标记好的路线：从大本营出发，你得自己找路上山。',
          '这是我迄今为止规模最大的游戏。我一个人用 Godot 4 开发，面向 PC 平台，目前正在为封闭测试做准备。发售日期尚未确定。',
        ],
      },
      'your-honor-wtf': {
        name: 'Your Honor, WTF?!',
        slogan: '一款由 AI 当法官的法庭派对游戏',
        duration: '2025 年 7 月至 8 月',
        role: '独立完成：设计、美术与素材',
        tools: 'Godot、Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          '两名玩家在法庭上对峙：一人指控，一人辩护，另外最多四人组成陪审团。罪名都是编出来的，比如偷走月亮，或者侮辱了一只鹅。随后由 AI 法官宣判。法官共有十位，性格各不相同，从原始人到婴儿都有。',
          '整款游戏由我一人完成，包括全部美术和素材，是为 2025 年夏天的 <a href="https://itch.io/jam/ai-npc-jam">Player2 AI NPC Jam</a> 制作的。它在 46 件参赛作品中获得第五名，赢得 500 美元奖金。评委的评价是：<q lang="en">a great way to settle arguments IRL</q>。',
          '游戏适合两到六人同处一室游玩，可在浏览器、Windows 和 Linux 上运行。游玩需要安装 Player2 应用。',
        ],
      },
      'gnostic-death-experience': {
        name: 'Gnostic Death Experience',
        slogan: '逃出轮回的第一人称跑酷',
        duration: '2024 年 5 月 · 4 天',
        role: '独立完成：游戏、美术、素材与音乐',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/gnostic-death-experience',
        paragraphs: [
          '你已经死了，而那道光正朝你而来。奔跑、下蹲、冲刺，赶在它追上你、把你送回去再过一世之前逃出去。这是一款为速通而生的第一人称跑酷游戏，采用 PlayStation 时代的低多边形风格。',
          '我为 <a href="https://itch.io/jam/speedjam5">SpeedJam #5</a> 用四天独自做完了它，包括全部美术、3D 素材和音乐。目前我正在制作面向网页和 Discord 的重制版。',
        ],
      },
      'sheep-keep': {
        name: 'Sheep Keep',
        slogan: '赶在岩浆到来之前救出你的羊',
        duration: '2024 年 5 月 · 2 天',
        role: '美术、3D 模型与游戏逻辑，与 homhom 合作',
        tools: 'Godot',
        link: 'https://homhom.itch.io/sheep-keep',
        paragraphs: [
          '你是 Jörgen，一位冰岛牧羊人。这天你像往常一样照看羊群，大地却突然开始隆隆作响。在家园被岩浆吞没之前，尽可能多地救出你的羊。',
          '这是我和 <a href="https://homhom.itch.io/">homhom</a> 为 <a href="https://itch.io/jam/micro-jam-013">Micro Jam 013</a> 用两天做出来的，主题是“岩浆”，附加规则是“时间有限”。我负责美术和 3D 模型，游戏逻辑的大部分由我们一起编写。使用 Godot 制作，诗歌出自 Plutbios。',
        ],
      },
      // Earlier games
      'how-fast-can-you-climb-the-stairs': {
        name: 'How Fast Can You Climb the Stairs?',
        slogan: '一款关于爬楼梯的游戏，五小时做完',
        duration: '2024 年 · 5 小时',
        role: '独立完成，包括配乐',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hfcycts',
        paragraphs: [
          '《How Fast Can You Climb the Stairs?》是一款关于爬楼梯的游戏。每一级台阶都是一串需要你打出来的字符，你打得多快，就爬得多快。',
          '我为 <a href="https://itch.io/jam/the-weirdcore-jam">The Weirdcore Jam</a> 用五个小时做了这款游戏，还包括三首原创配乐：How Fast Can You Climb The Stairs?、You Gots To Type, Son 和 You Done Did Type, Son。诗歌出自 Plutbios。',
          '我的个人最好成绩是 1.67 秒，据我所知，这也是世界纪录。',
        ],
      },
      'hero-of-light': {
        name: 'Hero of Light',
        slogan: '一款平台跳跃游戏，去实现“光之英雄”的预言',
        duration: '2024 年 1 月 · 3 天',
        role: '美术与程序，与 homhom 合作',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/hero-of-light',
        paragraphs: [
          '神话和传说早已预言，光之英雄终有一天会把百姓从压迫这片土地的魔物手中解救出来。你就是那位英雄：拿着一些不太寻常的武器，清除威胁，躲开迎面而来的一切。',
          '我和 <a href="https://homhom.itch.io/">homhom</a> 为 <a href="https://itch.io/jam/mini-jam-150-magic">Mini Jam 150</a> 做了这款游戏，主题是“魔法”，限制条件是“light is the way”。我负责美术，并和 homhom 分担了程序；关卡设计也由 homhom 完成。',
        ],
      },
      'invasive-procedure': {
        name: 'Invasive Procedure',
        slogan: '你醒来，发现少了点什么',
        duration: '2023 年 10 月',
        role: '美术与程序，与 homhom 和 Plutbios 合作',
        tools: 'Godot',
        link: 'https://homhom.itch.io/invasive-procedure',
        paragraphs: [
          '你醒来，发现少了点什么……',
          '我和 <a href="https://homhom.itch.io/">homhom</a> 与 Plutbios 一起为 <a href="https://ludumdare.com/schedule/54/">Ludum Dare 54</a> 做了这款游戏，Plutbios 负责故事并参与了关卡设计。我负责美术，并和 homhom 分担了程序，homhom 也设计了关卡。',
        ],
      },
      'post-it-prison': {
        name: 'Post-it Prison',
        slogan: '在一座囚犯全是便利贴的监狱里当狱警',
        duration: '2023 年 6 月 · 6 天',
        role: '独立完成',
        tools: 'Godot',
        link: 'https://noverraz.itch.io/post-it-prison',
        paragraphs: [
          '欢迎来到 Post-it Prison。这里有几个狡猾的罪犯，不知怎么被变成了便利贴，贴在墙上。这相当不人道。今天也是你上班的第一天，而监狱严重缺人手。',
          '先从电脑开始，然后在红心耗尽之前，跑到需要你的囚犯那里。目标是尽可能坚持得久一些。',
          '我为 <a href="https://itch.io/jam/a-highly-uproductive-game-jam">A highly unproductive game jam</a> 独自用六天做完了它。',
        ],
      },
      'scp-at-home': {
        name: 'scp at home',
        slogan: '一款以 SCP 基金会世界为背景的短篇恐怖游戏',
        duration: '2023 年 4 月 · 1 周',
        role: '独立完成',
        tools: 'Godot, Blender, Audacity',
        link: 'https://noverraz.itch.io/scp-at-home',
        paragraphs: [
          '你是 SCP 基金会设施里的一名 D 级人员，要在一场安保事故中找到出去的路。游戏有三种结局，一路上还有不少惊吓。',
          '我一个人用一周做完了它，模型在 Blender 中制作，声音在 Audacity 中剪辑。',
        ],
      },
      'dicetective': {
        name: 'Dicetective',
        slogan: '一部由骰子担纲主演的喜剧侦探视觉小说',
        duration: '2022 年 7 月 · 48 小时',
        role: '独立完成',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/dicetective',
        paragraphs: [
          '这是一场孤注一掷的骰子侦探剧。你扮演世界级的骰子侦探，悲剧发生之时，一个谜团也随之诞生。在破案的路上，你会遇到许多“面孔”：当然，指的是骰子的六个面。',
          '我为 <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a> 用 48 小时做完了它，主题是“roll of the dice”。这是一部只用一个按键就能玩的像素风喜剧，流程大约半小时。',
        ],
      },
      'night-stroll-ambush': {
        name: 'Night Stroll Ambush',
        slogan: '击碎朝你飞来的箭，继续往前走',
        duration: '2021 年 8 月 · 3 天',
        role: '独立完成，音乐由 Jurre de Vries 创作',
        tools: 'Unity, Affinity Designer, Audacity',
        link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
        paragraphs: [
          '你正在夜里愉快地散步，突然遭到一群强盗放箭袭击。你不还手，而是在箭落下时把它们击碎，然后继续前进。留意箭射向天空的位置，就能知道它们会落在哪里；分数越高，游戏就越难。',
          '我为 <a href="https://itch.io/jam/mini-jam-87-break">Mini Jam 87</a> 做了这款游戏，主题是“break”，限制条件是玩家必须是和平主义者。背景音乐由 <a href="https://jurredevries.me/">Jurre de Vries</a> 创作。分数达到 50，会看到一个小惊喜。',
        ],
      },
      'zerotrace': {
        name: 'Zerotrace',
        slogan: '一个潜行原型，目标是悄悄绕过敌人',
        duration: '2021 年 · 原型',
        role: '独立完成',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/zerotrace',
        paragraphs: [
          '一款潜行游戏，你要在不被发现的情况下绕过敌人：下蹲压低身形，双击按键向前冲刺。它一直停留在原型阶段，用来试验潜行和移动应该是什么手感。',
        ],
      },
      'barbasim': {
        name: 'Barbasim',
        slogan: '在随机生成的小岛上模拟一群小生物的生活',
        duration: '2020 年 12 月',
        role: '独立完成',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/barbasim',
        paragraphs: [
          '《Barbasim》是一款模拟游戏，名叫 Barba 的小生物在一座随机生成的小岛上生活、彼此互动。每只 Barba 都有自己的名字和属性。',
          '你可以从不同角度观察小岛，也可以跟随某一只 Barba。源代码发布在 <a href="https://github.com/LuukNoverraz/Barbasim">GitHub</a> 上。',
        ],
      },
      'sumo-shooters': {
        name: 'Sumo Shooters',
        slogan: '一款把台球和相扑混在一起的双人手机游戏',
        duration: '2020 年',
        role: '独立完成',
        tools: 'Unity',
        link: 'https://luuknoverraz.itch.io/sumo-shooters',
        paragraphs: [
          '两名玩家共用一部手机，像打台球一样把自己的相扑球朝对方撞去。先把对方撞出场地五次的人获胜。',
          '场上会出现强化水晶，带来短暂的优势；游戏有多个场地可以对战，还能自选颜色。支持 Android 和 Windows。',
        ],
      },
      'besyes': {
        name: 'Besyes',
        slogan: '一款扮演狩猎采集者搜寻食物的游戏',
        duration: '2019',
        role: '与 Jochem Baas、Midas Scheffers、Berk Yildirim 合作',
        tools: 'Unity',
        paragraphs: [
          'Besyes 是我和 <a href="http://www.jochembaas.nl/">Jochem Baas</a>、<a href="https://midasscheffers.github.io/">Midas Scheffers</a>、<a href="https://github.com/BerkYildirimm">Berk Yildirim</a> 一起做的游戏。你扮演一名采集者，四处搜寻食物。这是应 IJsfontein 的委托而做的。',
          '源代码在 <a href="https://github.com/jochem33/BeverBesjes">GitHub</a> 上。',
        ],
      },
    },
    education: {
      title: '教育经历',
      schools: [
        { title: '哲学（学士）', org: '阿姆斯特丹大学', date: '2025 - 至今' },
        {
          title: '创意媒体与游戏技术 - 游戏设计（学士）',
          org: '布雷达应用科学大学',
          date: '2024 - 2025',
        },
        {
          title: '传播与多媒体设计（学士）',
          org: '阿姆斯特丹应用科学大学',
          date: '2022 - 2023',
          description: '2023 年以优等成绩（cum laude）取得第一学年文凭（propedeuse）。',
        },
      ],
    },
    footer: { source: '本网站的源代码（GitHub）' },
    notFound: {
      title: '页面未找到',
      text: '此页面不存在（或已不存在）。链接可能已过期，或地址有误。',
      home: '返回首页',
    },
    card: { mail: 'E-mail.' },
    work: { title: '作品', view: '了解更多', play: '试玩' },
    viewer: { open: '放大图片', close: '关闭' },
    archive: {
      title: '作品集博物馆',
      intro: '这个网站从 2017 年开始，之后重做了七次。这里是我作品集的所有版本。其中有些从未完成，但它们记录了我作为程序员和设计师的进步与成长。',
      link: '作品集博物馆',
      code: 'GitHub 上的代码',
      visit: '查看这个版本',
      editions: {
        2026: '一张名片，支持七种语言。',
        2023: '白色顶栏，用我的脸做标志，粗体大写写着 game developer / front-end developer / video editor。',
        2022: '深蓝色背景，粗重大写的大名字，还有一个 LN 标志。',
        2021: '深色背景，LN 标志，黄、蓝、粉三色的菜单栏，还有一段我十七岁时写的自我介绍。',
        2020: '紫色波浪，圆形里的照片，还有一个向下的大箭头。',
        2019: '一个大大的 LN 标志，链接到 CoderClass 和学校的机器人社团。',
        2018: 'LuukCC：粉色背景，简短介绍了 CoderClass 和机器人社团。',
        2017: 'Welkom!：我的第一个网站，十三岁时在 CoderClass 做的。',
      },
    },
    earlier: {
      title: '早期游戏',
    },
    about: {
      title: '关于我',
      paragraphs: [
        '我是 Luuk，游戏和网页开发者，也是阿姆斯特丹大学的哲学系学生。我想弄明白系统和体验是如何运作的，所以我搭建游戏世界，也撰写关于共和主义、经济依附和人工智能等主题的文章。',
        '我的游戏从头到尾都由我自己完成，从设计和技术到画面、3D 模型，甚至音乐。我自己很喜欢抱石，它也给了我制作《<a href="%base%everest-half-full/">Everest Half Full</a>》的灵感。这是我迄今为止规模最大的游戏：你要端着一杯水登上珠穆朗玛峰，尽量让水在山顶时还剩得多一些。',
        '我欢迎游戏合作、自由职业的网页项目和实习机会。即使只是想聊聊游戏或哲学，也欢迎给我发<a href="mailto:luuknoverraz@gmail.com">邮件</a>。',
      ],
    },
  },
};

// Older games, newest first, shown as a compact list behind a toggle under the projects.
// Each line of facts reads: year · engine · game jam (linked).
interface EarlierGame {
  /** Address of its own page, e.g. /dicetective/. */
  slug: string;
  name: string;
  link: string;
  year: number;
  engine: string;
  jam?: { name: string; url: string };
  text: Record<Lang, string>;
}

export const earlierGames: EarlierGame[] = [
  {
    slug: 'how-fast-can-you-climb-the-stairs',
    name: 'How Fast Can You Climb the Stairs?',
    link: 'https://noverraz.itch.io/hfcycts',
    year: 2024,
    engine: 'Godot',
    jam: { name: 'The Weirdcore Jam', url: 'https://itch.io/jam/the-weirdcore-jam' },
    text: {
      nl: 'Een game over traplopen, in vijf uur gemaakt.',
      en: 'A game about climbing stairs, made in five hours.',
      es: 'Un juego sobre subir escaleras, hecho en cinco horas.',
      ja: '階段をのぼるゲーム。5時間で制作。',
      de: 'Ein Spiel übers Treppensteigen, in fünf Stunden gemacht.',
      fr: 'Un jeu où l’on monte des escaliers, fait en cinq heures.',
      zh: '一款关于爬楼梯的游戏，五小时做完。',
    },
  },
  {
    slug: 'hero-of-light',
    name: 'Hero of Light',
    link: 'https://noverraz.itch.io/hero-of-light',
    year: 2024,
    engine: 'Godot',
    jam: { name: 'Mini Jam 150: Magic', url: 'https://itch.io/jam/mini-jam-150-magic' },
    text: {
      nl: 'Een platformer waarin je de profetie van de Hero of Light vervult.',
      en: 'A platformer about fulfilling the prophecy of the Hero of Light.',
      es: 'Un juego de plataformas en el que cumples la profecía del Hero of Light.',
      ja: '「光の勇者」の予言を果たすプラットフォーマー。',
      de: 'Ein Plattformer, in dem du die Prophezeiung des Hero of Light erfüllst.',
      fr: 'Un jeu de plateforme où vous accomplissez la prophétie du Hero of Light.',
      zh: '一款平台跳跃游戏，去实现“光之英雄”的预言。',
    },
  },
  {
    slug: 'invasive-procedure',
    name: 'Invasive Procedure',
    link: 'https://homhom.itch.io/invasive-procedure',
    year: 2023,
    engine: 'Godot',
    jam: { name: 'Ludum Dare 54', url: 'https://ludumdare.com/schedule/54/' },
    text: {
      nl: 'Je wordt wakker en merkt dat er iets ontbreekt…',
      en: 'You wake up to find something’s missing…',
      es: 'Te despiertas y notas que te falta algo…',
      ja: '目を覚ますと、何かが足りない……',
      de: 'Du wachst auf und merkst, dass etwas fehlt…',
      fr: 'Vous vous réveillez et il vous manque quelque chose…',
      zh: '你醒来，发现少了点什么……',
    },
  },
  {
    slug: 'post-it-prison',
    name: 'Post-it Prison',
    link: 'https://noverraz.itch.io/post-it-prison',
    year: 2023,
    engine: 'Godot',
    jam: { name: 'A highly unproductive game jam', url: 'https://itch.io/jam/a-highly-uproductive-game-jam' },
    text: {
      nl: 'Je eerste dag als bewaker in een gevangenis waar de gevangenen post-its zijn.',
      en: 'Your first day as a guard in a prison where the inmates are post-it notes.',
      es: 'Tu primer día como guardia en una prisión donde los presos son pósits.',
      ja: '囚人がみんな付箋という刑務所で、看守として迎える初日。',
      de: 'Dein erster Tag als Wärter in einem Gefängnis, dessen Insassen Post-its sind.',
      fr: 'Votre premier jour comme gardien dans une prison dont les détenus sont des Post-it.',
      zh: '你第一天上班，在一座囚犯全是便利贴的监狱里当狱警。',
    },
  },
  {
    slug: 'scp-at-home',
    name: 'scp at home',
    link: 'https://noverraz.itch.io/scp-at-home',
    year: 2023,
    engine: 'Godot',
    text: {
      nl: 'Een korte horrorgame in de wereld van de SCP Foundation, in één week gemaakt.',
      en: 'A short horror game set in the world of the SCP Foundation, made in one week.',
      es: 'Un juego corto de terror ambientado en el mundo de la Fundación SCP, hecho en una semana.',
      ja: 'SCP 財団の世界を舞台にした短編ホラー。1週間で制作。',
      de: 'Ein kurzes Horrorspiel in der Welt der SCP Foundation, in einer Woche gemacht.',
      fr: 'Un court jeu d’horreur dans l’univers de la Fondation SCP, fait en une semaine.',
      zh: '一款以 SCP 基金会世界为背景的短篇恐怖游戏，一周做完。',
    },
  },
  {
    slug: 'dicetective',
    name: 'Dicetective',
    link: 'https://luuknoverraz.itch.io/dicetective',
    year: 2022,
    engine: 'Unity',
    jam: { name: 'GMTK Game Jam 2022', url: 'https://itch.io/jam/gmtk-jam-2022' },
    text: {
      nl: 'Een komische detective-visual novel met dobbelstenen in de hoofdrol.',
      en: 'A comedy detective visual novel with dice in the leading roles.',
      es: 'Una novela visual de detectives y comedia con dados como protagonistas.',
      ja: 'サイコロたちが主役のコメディ探偵ビジュアルノベル。',
      de: 'Eine komödiantische Detektiv-Visual-Novel mit Würfeln in den Hauptrollen.',
      fr: 'Un visual novel policier et comique avec des dés dans les rôles principaux.',
      zh: '一部由骰子担纲主演的喜剧侦探视觉小说。',
    },
  },
  {
    slug: 'night-stroll-ambush',
    name: 'Night Stroll Ambush',
    link: 'https://luuknoverraz.itch.io/night-stroll-ambush',
    year: 2021,
    engine: 'Unity',
    jam: { name: 'Mini Jam 87: Break', url: 'https://itch.io/jam/mini-jam-87-break' },
    text: {
      nl: 'Breek de pijlen die op je afkomen en loop door.',
      en: 'Break the arrows flying at you and keep walking.',
      es: 'Rompe las flechas que vuelan hacia ti y sigue caminando.',
      ja: '飛んでくる矢を砕きながら、歩き続けよう。',
      de: 'Zerbrich die Pfeile, die auf dich zufliegen, und geh weiter.',
      fr: 'Brisez les flèches qui volent vers vous et continuez à marcher.',
      zh: '击碎朝你飞来的箭，继续往前走。',
    },
  },
  {
    slug: 'zerotrace',
    name: 'Zerotrace',
    link: 'https://luuknoverraz.itch.io/zerotrace',
    year: 2021,
    engine: 'Unity',
    text: {
      nl: 'Een stealth-prototype waarin je langs je vijanden moet sluipen.',
      en: 'A stealth prototype about slipping past your enemies.',
      es: 'Un prototipo de sigilo en el que tienes que escabullirte entre los enemigos.',
      ja: '敵の目をかいくぐって進むステルスゲームのプロトタイプ。',
      de: 'Ein Stealth-Prototyp, in dem du an deinen Gegnern vorbeischleichst.',
      fr: 'Un prototype d’infiltration où il faut se faufiler entre les ennemis.',
      zh: '一个潜行原型，目标是悄悄绕过敌人。',
    },
  },
  {
    slug: 'barbasim',
    name: 'Barbasim',
    link: 'https://luuknoverraz.itch.io/barbasim',
    year: 2020,
    engine: 'Unity',
    text: {
      nl: 'Een simulatie van wezentjes op een willekeurig gegenereerd eiland.',
      en: 'A simulation of little creatures on a randomly generated island.',
      es: 'Una simulación de pequeñas criaturas en una isla generada al azar.',
      ja: 'ランダム生成された島で暮らす小さな生き物たちのシミュレーション。',
      de: 'Eine Simulation kleiner Wesen auf einer zufällig generierten Insel.',
      fr: 'Une simulation de petites créatures sur une île générée aléatoirement.',
      zh: '在随机生成的小岛上模拟一群小生物的生活。',
    },
  },
  {
    slug: 'sumo-shooters',
    name: 'Sumo Shooters',
    link: 'https://luuknoverraz.itch.io/sumo-shooters',
    year: 2020,
    engine: 'Unity',
    text: {
      nl: 'Een mobiele game voor twee spelers die biljart met sumo mixt.',
      en: 'A two-player mobile game that mixes billiards with sumo.',
      es: 'Un juego para móvil de dos jugadores que mezcla billar y sumo.',
      ja: 'ビリヤードと相撲を混ぜた、2人用のモバイルゲーム。',
      de: 'Ein Handyspiel für zwei, das Billard mit Sumo mischt.',
      fr: 'Un jeu mobile à deux qui mélange billard et sumo.',
      zh: '一款把台球和相扑混在一起的双人手机游戏。',
    },
  },
  {
    slug: 'besyes',
    name: 'Besyes',
    link: 'https://github.com/jochem33/BeverBesjes',
    year: 2019,
    engine: 'Unity',
    text: {
      nl: 'Een game over voedsel verzamelen als jager-verzamelaar, in opdracht van IJsfontein.',
      en: 'A game about scavenging for food as a hunter-gatherer, made for IJsfontein.',
      es: 'Un juego sobre buscar comida como cazador-recolector, hecho para IJsfontein.',
      ja: '狩猟採集民として食べ物を探し集めるゲーム。IJsfontein のために制作。',
      de: 'Ein Spiel übers Nahrungsammeln als Jäger und Sammler, im Auftrag von IJsfontein.',
      fr: 'Un jeu où l’on cherche de quoi manger en chasseur-cueilleur, fait pour IJsfontein.',
      zh: '一款扮演狩猎采集者搜寻食物的游戏，为 IJsfontein 制作。',
    },
  },
];

export const social = {
  mail: 'mailto:luuknoverraz@gmail.com',
  email: 'luuknoverraz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luuknoverraz/',
  github: 'https://github.com/LuukNoverraz',
  source: 'https://github.com/LuukNoverraz/luuknoverraz.nl',
  itch: 'https://noverraz.itch.io/',
};

/** Every page under /<slug>/: the four featured projects and the earlier games. */
export const allProjectSlugs: readonly string[] = [...projectSlugs, ...earlierGames.map((g) => g.slug)];

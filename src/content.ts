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
  /** Heading of the older games behind the "more" toggle; the games are in `earlierGames`. */
  earlier: { title: string };
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
    earlier: {
      title: 'Eerdere games',
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
    earlier: {
      title: 'Earlier games',
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
        role: 'Solo: Design, Code, Grafik und Assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Zwei Spieler stehen sich vor Gericht gegenüber: Einer klagt an, der andere verteidigt, und bis zu vier weitere bilden die Jury. Die Anklagen sind frei erfunden, etwa den Mond gestohlen oder eine Gans beleidigt zu haben. Danach fällt ein KI-Richter das Urteil. Es gibt zehn Richter, jeder mit eigenem Charakter, vom Höhlenmenschen bis zum Baby.',
          'Ich habe das ganze Spiel selbst gemacht, einschließlich aller Grafiken und Assets, für den Player2 AI NPC Jam im Sommer 2025. Es wurde Fünfter von 46 Einreichungen und gewann 500 Dollar. Die Jury nannte es <q lang="en">a great way to settle arguments IRL</q>.',
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
          'Ich habe es in vier Tagen für den SpeedJam #5 gemacht, allein, einschließlich aller Grafiken, der 3D-Assets und der Musik. Derzeit arbeite ich an einem Remake für das Web und Discord.',
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
          'Entstanden in zwei Tagen mit homhom für den Micro Jam 013, mit dem Thema Lava und der Vorgabe, dass die Zeit begrenzt ist. Ich habe die Grafiken und die 3D-Modelle gemacht, und einen großen Teil der Spiellogik haben wir gemeinsam geschrieben. Gebaut in Godot, mit Gedichten von Plutbios.',
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
    earlier: {
      title: 'Frühere Spiele',
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
        role: 'Solo : design, code, graphismes et assets',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Deux joueurs s’affrontent au tribunal : l’un accuse, l’autre défend, et jusqu’à quatre autres forment le jury. Les chefs d’accusation sont inventés, comme avoir volé la lune ou insulté une oie. Un juge IA rend ensuite son verdict. Il y a dix juges, chacun avec son caractère, de l’homme des cavernes au bébé.',
          'J’ai réalisé tout le jeu moi-même, graphismes et assets compris, pour la Player2 AI NPC Jam à l’été 2025. Il a terminé cinquième sur 46 participants et a remporté 500 dollars. Le jury l’a décrit ainsi : <q lang="en">a great way to settle arguments IRL</q>.',
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
          'Je l’ai réalisé en quatre jours pour la SpeedJam #5, seul, y compris tous les graphismes, les assets 3D et la musique. Je travaille actuellement sur un remake pour le web et Discord.',
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
          'Réalisé en deux jours avec homhom pour la Micro Jam 013, dont le thème était la lave et la contrainte un temps limité. J’ai fait les illustrations et les modèles 3D, et nous avons écrit ensemble une grande partie de la logique de jeu. Conçu avec Godot, avec des poèmes de Plutbios.',
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
    earlier: {
      title: 'Jeux précédents',
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
        role: 'En solitario: diseño, código, arte y recursos',
        tools: 'Godot, Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          'Dos jugadores se enfrentan en el tribunal: uno acusa, el otro defiende, y hasta cuatro más forman el jurado. Los cargos son inventados, como haber robado la luna o insultado a un ganso. Después, un juez de IA dicta sentencia. Hay diez jueces, cada uno con su carácter, desde un cavernícola hasta un bebé.',
          'Hice todo el juego yo solo, incluidos el arte y los recursos, para la Player2 AI NPC Jam del verano de 2025. Quedó quinto entre 46 participantes y ganó 500 dólares. El jurado lo describió como <q lang="en">a great way to settle arguments IRL</q>.',
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
          'Lo hice en cuatro días para la SpeedJam #5, yo solo, incluidos todo el arte, los recursos 3D y la música. Ahora estoy trabajando en un remake para web y Discord.',
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
          'Hecho en dos días con homhom para la Micro Jam 013, cuyo tema era la lava y cuya condición era que el tiempo fuese limitado. Yo me encargué de las ilustraciones y los modelos 3D, y buena parte de la lógica del juego la escribimos juntos. Creado con Godot, con poesía de Plutbios.',
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
    earlier: {
      title: 'Juegos anteriores',
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
        role: 'ソロ：デザイン、プログラム、アート、アセット',
        tools: 'Godot、Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          '2人のプレイヤーが法廷で向き合います。1人が訴え、もう1人が弁護し、最大4人が陪審員になります。罪状は「月を盗んだ」「ガチョウを侮辱した」など、すべてでっち上げ。最後に AI の裁判官が判決を下します。裁判官は原始人から赤ちゃんまで、個性の違う10人です。',
          'アートとアセットを含め、ゲーム全体をひとりで制作しました。2025年夏の Player2 AI NPC Jam への応募作で、46作品中5位となり、賞金500ドルを獲得しました。審査員のコメントは <q lang="en">a great way to settle arguments IRL</q> でした。',
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
          'SpeedJam #5 のために4日間で、アート、3D アセット、音楽まですべてひとりで作りました。現在はウェブと Discord 向けのリメイクを制作しています。',
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
          'homhom と2日間で、Micro Jam 013 のために作りました。テーマは「溶岩」、条件は「時間制限があること」。私はアートワークと 3D モデルを担当し、ゲームロジックの多くは2人で書きました。Godot 製で、詩は Plutbios によるものです。',
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
    earlier: {
      title: '過去のゲーム',
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
        role: '独立完成：设计、程序、美术与素材',
        tools: 'Godot、Player2 API',
        link: 'https://noverraz.itch.io/your-honor-wtf',
        paragraphs: [
          '两名玩家在法庭上对峙：一人指控，一人辩护，另外最多四人组成陪审团。罪名都是编出来的，比如偷走月亮，或者侮辱了一只鹅。随后由 AI 法官宣判。法官共有十位，性格各不相同，从原始人到婴儿都有。',
          '整款游戏由我一人完成，包括全部美术和素材，是为 2025 年夏天的 Player2 AI NPC Jam 制作的。它在 46 件参赛作品中获得第五名，赢得 500 美元奖金。评委的评价是：<q lang="en">a great way to settle arguments IRL</q>。',
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
          '我为 SpeedJam #5 用四天独自做完了它，包括全部美术、3D 素材和音乐。目前我正在制作面向网页和 Discord 的重制版。',
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
          '这是我和 homhom 为 Micro Jam 013 用两天做出来的，主题是“岩浆”，附加规则是“时间有限”。我负责美术和 3D 模型，游戏逻辑的大部分由我们一起编写。使用 Godot 制作，诗歌出自 Plutbios。',
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
    earlier: {
      title: '早期游戏',
    },
  },
};

// Older games, newest first, shown as a compact list behind a toggle under the projects.
// Each line of facts reads: year · engine · game jam (linked).
interface EarlierGame {
  name: string;
  link: string;
  year: number;
  engine: string;
  jam?: { name: string; url: string };
  text: Record<Lang, string>;
}

export const earlierGames: EarlierGame[] = [
  {
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
];

export const social = {
  mail: 'mailto:luuknoverraz@gmail.com',
  email: 'luuknoverraz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luuknoverraz/',
  github: 'https://github.com/LuukNoverraz',
  source: 'https://github.com/LuukNoverraz/luuknoverraz.nl',
  itch: 'https://noverraz.itch.io/',
};

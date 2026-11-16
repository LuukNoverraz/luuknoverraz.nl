// All site copy lives here, once per language. Pages are generated from this at build time,
// so there is no client-side translation and both languages are real, indexable URLs.

export type Lang = 'nl' | 'en' | 'zh';
export const langs: Lang[] = ['nl', 'en', 'zh'];
/** Written by me, and always shown in the top bar. */
export const mainLangs: Lang[] = ['nl', 'en'];
/** AI-translated from the two above; offered in the globe menu. */
export const moreLangs: Lang[] = ['zh'];
/** Each language's name, in that language. */
export const langNames: Record<Lang, string> = { nl: 'Nederlands', en: 'English', zh: '简体中文' };

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

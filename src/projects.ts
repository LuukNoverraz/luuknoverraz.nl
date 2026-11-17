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
import tBesyes from './assets/thumbs/besyes.jpg';

// Earlier games
import eHowFastCanYouClimbTheStairsCover from './assets/earlier/how-fast-can-you-climb-the-stairs/cover.jpg';
import eHowFastCanYouClimbTheStairs2 from './assets/earlier/how-fast-can-you-climb-the-stairs/2.jpg';
import eHowFastCanYouClimbTheStairs1 from './assets/earlier/how-fast-can-you-climb-the-stairs/1.jpg';
import eHeroOfLightCover from './assets/earlier/hero-of-light/cover.jpg';
import eInvasiveProcedureCover from './assets/earlier/invasive-procedure/cover.jpg';
import ePostItPrisonCover from './assets/earlier/post-it-prison/cover.jpg';
import ePostItPrison1 from './assets/earlier/post-it-prison/1.jpg';
import ePostItPrison2 from './assets/earlier/post-it-prison/2.jpg';
import ePostItPrison3 from './assets/earlier/post-it-prison/3.jpg';
import eScpAtHomeCover from './assets/earlier/scp-at-home/cover.jpg';
import eScpAtHome1 from './assets/earlier/scp-at-home/1.jpg';
import eScpAtHome2 from './assets/earlier/scp-at-home/2.jpg';
import eScpAtHome4 from './assets/earlier/scp-at-home/4.jpg';
import eDicetectiveCover from './assets/earlier/dicetective/cover.jpg';
import eDicetective2 from './assets/earlier/dicetective/2.jpg';
import eDicetective1 from './assets/earlier/dicetective/1.jpg';
import eNightStrollAmbushCover from './assets/earlier/night-stroll-ambush/cover.jpg';
import eNightStrollAmbush2 from './assets/earlier/night-stroll-ambush/2.jpg';
import eNightStrollAmbush3 from './assets/earlier/night-stroll-ambush/3.jpg';
import eZerotraceCover from './assets/earlier/zerotrace/cover.jpg';
import eZerotrace1 from './assets/earlier/zerotrace/1.jpg';
import eZerotrace2 from './assets/earlier/zerotrace/2.jpg';
import eBarbasimCover from './assets/earlier/barbasim/cover.jpg';
import eBarbasim2 from './assets/earlier/barbasim/2.jpg';
import eBarbasim1 from './assets/earlier/barbasim/1.jpg';
import eBarbasim3 from './assets/earlier/barbasim/3.jpg';
import eSumoShootersCover from './assets/earlier/sumo-shooters/cover.jpg';
import eSumoShooters1 from './assets/earlier/sumo-shooters/1.jpg';
import eSumoShooters3 from './assets/earlier/sumo-shooters/3.jpg';
import eBesyesCover from './assets/earlier/besyes/cover.jpg';

interface ProjectMedia {
  /** Cover, shown in the list on the home page. */
  poster: ImageMetadata;
  /** Large image at the top of the project's page; the poster is used when left out. */
  hero?: ImageMetadata;
  /** Base name of an optional loop in /public/videos (.webm + .mp4), played over the poster. */
  video?: string;
  /** One optional image per paragraph, same order as the paragraphs in content.ts. */
  images: ({ src: ImageMetadata; alt: { en: string } & Partial<Record<Lang, string>> } | null)[];
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
          es: 'Una mano enguantada sostiene un vaso lleno de agua en un valle verde, con montañas nevadas a lo lejos.',
          ja: '緑の谷で、手袋をした手が水のいっぱい入ったコップを持っている。遠くに雪山が見える。',
          de: 'Eine behandschuhte Hand hält ein volles Glas Wasser in einem grünen Tal, in der Ferne verschneite Berge.',
          fr: 'Une main gantée tient un verre d’eau plein dans une vallée verte, avec des montagnes enneigées au loin.',
          zh: '一只戴着手套的手在绿色山谷中端着一满杯水，远处是雪山。',
        },
      },
      {
        src: ehfSummitNight,
        alt: {
          nl: 'Het glas water bij nacht, hoog boven een zee van bergtoppen onder een sterrenhemel.',
          en: 'The glass of water at night, high above a sea of peaks under a starry sky.',
          es: 'El vaso de agua de noche, muy por encima de un mar de cumbres bajo un cielo estrellado.',
          ja: '夜、星空の下に連なる峰々のはるか上で持たれた水のコップ。',
          de: 'Das Glas Wasser bei Nacht, hoch über einem Meer von Gipfeln unter dem Sternenhimmel.',
          fr: 'Le verre d’eau de nuit, très haut au-dessus d’une mer de sommets sous un ciel étoilé.',
          zh: '夜色中的那杯水，高悬于星空下的群峰之上。',
        },
      },
      {
        src: ehfBaseCamp,
        alt: {
          nl: 'Het glas water op een rotsige vlakte bij twee tenten van Base Camp, tussen besneeuwde hellingen.',
          en: 'The glass of water on a rocky plain near two Base Camp tents, between snowy slopes.',
          es: 'El vaso de agua en una llanura rocosa junto a dos tiendas del campo base, entre laderas nevadas.',
          ja: '雪の斜面に囲まれた岩場、ベースキャンプの2張りのテントの近くにある水のコップ。',
          de: 'Das Glas Wasser auf einer felsigen Ebene bei zwei Zelten des Basislagers, zwischen verschneiten Hängen.',
          fr: 'Le verre d’eau sur un plateau rocheux près de deux tentes du camp de base, entre des pentes enneigées.',
          zh: '那杯水在大本营两顶帐篷附近的碎石平地上，四周是积雪的山坡。',
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
          es: 'Un jugador escribe una acusación contra otro jugador mientras corre el tiempo.',
          ja: 'タイマーが進む中、プレイヤーが別のプレイヤーへの告発文を入力している。',
          de: 'Ein Spieler tippt eine Anklage gegen einen anderen Spieler, während die Zeit läuft.',
          fr: 'Un joueur tape une accusation contre un autre joueur pendant que le chrono tourne.',
          zh: '一名玩家在倒计时中输入对另一名玩家的指控。',
        },
      },
      {
        src: yhVerdictPirate,
        alt: {
          nl: 'Een rechter met piratenhoed doet in piratentaal uitspraak tussen de twee spelers.',
          en: 'A judge in a pirate hat delivers a verdict in pirate speak between the two players.',
          es: 'Un juez con sombrero pirata dicta sentencia en jerga pirata entre los dos jugadores.',
          ja: '海賊帽をかぶった裁判官が、2人のプレイヤーの間で海賊口調の判決を言い渡している。',
          de: 'Ein Richter mit Piratenhut verkündet zwischen den beiden Spielern ein Urteil in Piratensprache.',
          fr: 'Un juge coiffé d’un chapeau de pirate rend son verdict en parler pirate entre les deux joueurs.',
          zh: '一位戴海盗帽的法官在两名玩家之间用海盗腔宣读判决。',
        },
      },
      {
        src: yhSelectCharacters,
        alt: {
          nl: 'Het keuzescherm waar vijf spelers elk een personage kiezen.',
          en: 'The selection screen where five players each pick a character.',
          es: 'La pantalla de selección donde cinco jugadores eligen cada uno un personaje.',
          ja: '5人のプレイヤーがそれぞれキャラクターを選ぶ選択画面。',
          de: 'Der Auswahlbildschirm, auf dem fünf Spieler je eine Figur wählen.',
          fr: 'L’écran de sélection où cinq joueurs choisissent chacun un personnage.',
          zh: '五名玩家各自挑选角色的选择界面。',
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
          es: 'Un pilar blanco y bloques oscuros sobre una llanura blanca, con ojos flotando al fondo.',
          ja: '白い平原の上に立つ白い柱と暗いブロック。背景には目玉が浮かんでいる。',
          de: 'Eine weiße Säule und dunkle Blöcke über einer weißen Ebene, im Hintergrund schwebende Augen.',
          fr: 'Un pilier blanc et des blocs sombres au-dessus d’une plaine blanche, avec des yeux flottants à l’arrière-plan.',
          zh: '白色平原上方的一根白色立柱和几块深色方块，背景中漂浮着眼球。',
        },
      },
      {
        src: gdeFloatingBlocks,
        alt: {
          nl: 'Blokken die los in het zwart zweven, gezien vanuit de speler, met de timer bovenin.',
          en: 'Blocks floating loose in the dark, seen from the player, with the timer at the top.',
          es: 'Bloques flotando sueltos en la oscuridad, vistos desde el jugador, con el cronómetro arriba.',
          ja: 'プレイヤー視点で見た、暗闇に浮かぶブロック。上部にタイマーがある。',
          de: 'Blöcke, die frei im Dunkeln schweben, aus Sicht des Spielers, oben der Timer.',
          fr: 'Des blocs flottant dans le noir, vus par le joueur, avec le chrono en haut.',
          zh: '从玩家视角看到的悬浮在黑暗中的方块，顶部是计时器。',
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
          es: 'El pastor y dos ovejas junto a una cabaña en un paisaje oscuro de colinas, con el contador de ovejas rescatadas.',
          ja: '暗い丘陵地の小屋のそばにいる羊飼いと2匹の羊。救出した羊の数が表示されている。',
          de: 'Der Schäfer und zwei Schafe an einer Hütte in einer dunklen Hügellandschaft, dazu der Zähler der geretteten Schafe.',
          fr: 'Le berger et deux moutons près d’une cabane dans un paysage sombre et vallonné, avec le compteur de moutons sauvés.',
          zh: '牧羊人和两只羊站在昏暗丘陵间的小屋旁，画面上有已救出羊只的计数。',
        },
      },
      {
        src: skVolcano,
        alt: {
          nl: 'De vulkaan barst uit boven de heuvels.',
          en: 'The volcano erupts above the hills.',
          es: 'El volcán entra en erupción sobre las colinas.',
          ja: '丘の上で噴火する火山。',
          de: 'Der Vulkan bricht über den Hügeln aus.',
          fr: 'Le volcan entre en éruption au-dessus des collines.',
          zh: '火山在群山之上喷发。',
        },
      },
    ],
  },
  // Earlier games
  'how-fast-can-you-climb-the-stairs': {
    poster: eHowFastCanYouClimbTheStairsCover,
    hero: eHowFastCanYouClimbTheStairs2,
    images: [
      { src: eHowFastCanYouClimbTheStairs1, alt: {
          en: 'The opening screen: a poem in pink letters over a green field under a blue sky.',
          nl: 'Het openingsscherm: een gedicht in roze letters boven een groen veld onder een blauwe lucht.',
          de: 'Der Startbildschirm: ein Gedicht in rosa Buchstaben über einer grünen Wiese unter blauem Himmel.',
          fr: 'L’écran d’ouverture : un poème en lettres roses au-dessus d’un champ vert sous un ciel bleu.',
          es: 'La pantalla de inicio: un poema en letras rosas sobre un campo verde bajo un cielo azul.',
          ja: 'オープニング画面。青空の下、緑の野原の上にピンク色の文字で詩が書かれている。',
          zh: '开场画面：蓝天下的绿色草地上，用粉色字写着一首诗。',
        },
      },
    ],
  },
  'hero-of-light': {
    poster: eHeroOfLightCover,
    images: [
    ],
  },
  'invasive-procedure': {
    poster: eInvasiveProcedureCover,
    images: [
    ],
  },
  'post-it-prison': {
    poster: ePostItPrisonCover,
    images: [
      { src: ePostItPrison1, alt: {
          en: 'A bare purple room, seen in first person.',
          nl: 'Een kale paarse kamer, in first person gezien.',
          de: 'Ein kahler violetter Raum aus der Ich-Perspektive.',
          fr: 'Une pièce violette et vide, vue à la première personne.',
          es: 'Una habitación morada y vacía, vista en primera persona.',
          ja: '一人称視点で見た、何もない紫の部屋。',
          zh: '第一人称视角下一间空荡荡的紫色房间。',
        },
      },
      { src: ePostItPrison2, alt: {
          en: 'A pale room opening onto a dark corridor with coloured doorways.',
          nl: 'Een lichte kamer die uitkomt op een donkere gang met gekleurde deuropeningen.',
          de: 'Ein heller Raum, der in einen dunklen Gang mit farbigen Türöffnungen führt.',
          fr: 'Une pièce claire donnant sur un couloir sombre aux embrasures colorées.',
          es: 'Una habitación clara que da a un pasillo oscuro con puertas de colores.',
          ja: '色とりどりの出入口が並ぶ暗い廊下へと続く、明るい部屋。',
          zh: '一间浅色房间，通向一条有彩色门洞的昏暗走廊。',
        },
      },
      { src: ePostItPrison3, alt: {
          en: 'A ladder leading up through a hatch in a pale room.',
          nl: 'Een ladder die in een lichte kamer omhoog leidt door een luik.',
          de: 'Eine Leiter, die in einem hellen Raum durch eine Luke nach oben führt.',
          fr: 'Une échelle qui monte à travers une trappe dans une pièce claire.',
          es: 'Una escalera de mano que sube por una trampilla en una habitación clara.',
          ja: '明るい部屋で、ハッチの上へと続くはしご。',
          zh: '浅色房间里，一架梯子穿过舱口通向上方。',
        },
      },
    ],
  },
  'scp-at-home': {
    poster: eScpAtHomeCover,
    hero: eScpAtHome1,
    images: [
      { src: eScpAtHome2, alt: {
          en: 'A dark room with a long table.',
          nl: 'Een donkere kamer met een lange tafel.',
          de: 'Ein dunkler Raum mit einem langen Tisch.',
          fr: 'Une pièce sombre avec une longue table.',
          es: 'Una habitación oscura con una mesa larga.',
          ja: '長いテーブルのある暗い部屋。',
          zh: '一间放着长桌的昏暗房间。',
        },
      },
      { src: eScpAtHome4, alt: {
          en: 'A dark concrete corridor with a doorway at the end.',
          nl: 'Een donkere betonnen gang met aan het eind een deuropening.',
          de: 'Ein dunkler Betongang mit einer Türöffnung am Ende.',
          fr: 'Un couloir sombre en béton avec une porte au bout.',
          es: 'Un pasillo oscuro de hormigón con una puerta al fondo.',
          ja: '突き当たりに出入口がある、暗いコンクリートの廊下。',
          zh: '一条昏暗的水泥走廊，尽头有一个门洞。',
        },
      },
    ],
  },
  'dicetective': {
    poster: eDicetectiveCover,
    hero: eDicetective2,
    images: [
      { src: eDicetective1, alt: {
          en: 'The Dicetective, a die in a hat and coat, entering the scene in pixel art.',
          nl: 'De Dicetective, een dobbelsteen met hoed en jas, komt in pixel art in beeld.',
          de: 'Der Dicetective, ein Würfel mit Hut und Mantel, betritt in Pixel-Art die Szene.',
          fr: 'Le Dicetective, un dé en chapeau et manteau, entre en scène en pixel art.',
          es: 'El Dicetective, un dado con sombrero y abrigo, entra en escena en pixel art.',
          ja: '帽子とコートを身につけたサイコロ、Dicetective が登場するピクセルアートの場面。',
          zh: '像素画面中，戴帽子、穿大衣的骰子侦探 Dicetective 登场。',
        },
      },
    ],
  },
  'night-stroll-ambush': {
    poster: eNightStrollAmbushCover,
    images: [
      { src: eNightStrollAmbush2, alt: {
          en: 'Arrows falling towards a hooded bird walking at night under the stars.',
          nl: 'Pijlen die vallen richting een vogel met capuchon die ’s nachts onder de sterren loopt.',
          de: 'Pfeile fallen auf einen Vogel mit Kapuze zu, der nachts unter den Sternen spazieren geht.',
          fr: 'Des flèches tombent vers un oiseau encapuchonné qui marche de nuit sous les étoiles.',
          es: 'Flechas que caen hacia un pájaro encapuchado que camina de noche bajo las estrellas.',
          ja: '星空の下、夜道を歩くフードの鳥に向かって降ってくる矢。',
          zh: '夜空繁星下，箭矢朝一只戴兜帽、正在散步的鸟落下。',
        },
      },
      { src: eNightStrollAmbush3, alt: {
          en: 'The “You died! Try again” screen.',
          nl: 'Het scherm “You died! Try again”.',
          de: 'Der Bildschirm „You died! Try again“.',
          fr: 'L’écran « You died! Try again ».',
          es: 'La pantalla «You died! Try again».',
          ja: '「You died! Try again」の画面。',
          zh: '“You died! Try again”画面。',
        },
      },
    ],
  },
  'zerotrace': {
    poster: eZerotraceCover,
    hero: eZerotrace1,
    images: [
      { src: eZerotrace2, alt: {
          en: 'A top-down view of a blue level, with enemies patrolling between the walls.',
          nl: 'Een blauw level van bovenaf, met vijanden die tussen de muren patrouilleren.',
          de: 'Ein blaues Level von oben, mit Gegnern, die zwischen den Wänden patrouillieren.',
          fr: 'Un niveau bleu vu du dessus, avec des ennemis qui patrouillent entre les murs.',
          es: 'Un nivel azul visto desde arriba, con enemigos que patrullan entre las paredes.',
          ja: '上から見た青いステージ。壁の間を敵が巡回している。',
          zh: '俯视的蓝色关卡，敌人在墙壁之间巡逻。',
        },
      },
    ],
  },
  'barbasim': {
    poster: eBarbasimCover,
    hero: eBarbasim2,
    images: [
      { src: eBarbasim1, alt: {
          en: 'Coloured, egg-shaped Barbas with name tags on a green hillside.',
          nl: 'Gekleurde, eivormige Barba’s met naamkaartjes op een groene heuvel.',
          de: 'Bunte, eiförmige Barbas mit Namensschildern auf einem grünen Hügel.',
          fr: 'Des Barbas colorés en forme d’œuf, avec leur nom, sur une colline verte.',
          es: 'Barbas de colores con forma de huevo y etiquetas con su nombre en una ladera verde.',
          ja: '緑の丘にいる、名札のついたカラフルな卵形の Barba たち。',
          zh: '绿色山坡上带着名字标签的彩色蛋形 Barba。',
        },
      },
      { src: eBarbasim3, alt: {
          en: 'The coast of the island, with a river and a few Barbas.',
          nl: 'De kust van het eiland, met een rivier en een paar Barba’s.',
          de: 'Die Küste der Insel mit einem Fluss und ein paar Barbas.',
          fr: 'La côte de l’île, avec une rivière et quelques Barbas.',
          es: 'La costa de la isla, con un río y algunos Barbas.',
          ja: '川と数匹の Barba が見える島の海岸。',
          zh: '小岛的海岸，有一条河和几只 Barba。',
        },
      },
    ],
  },
  'sumo-shooters': {
    poster: eSumoShootersCover,
    images: [
      { src: eSumoShooters1, alt: {
          en: 'A green arena on a phone screen, split between the two players at the top and bottom.',
          nl: 'Een groene arena op een telefoonscherm, verdeeld tussen de twee spelers boven en onder.',
          de: 'Eine grüne Arena auf einem Handybildschirm, oben und unten zwischen den beiden Spielern aufgeteilt.',
          fr: 'Une arène verte sur un écran de téléphone, partagée entre les deux joueurs en haut et en bas.',
          es: 'Una arena verde en la pantalla de un móvil, dividida entre los dos jugadores arriba y abajo.',
          ja: 'スマートフォンの画面に映る緑のアリーナ。上下で2人のプレイヤーに分かれている。',
          zh: '手机屏幕上的绿色竞技场，上下分给两名玩家。',
        },
      },
      { src: eSumoShooters3, alt: {
          en: 'A round yellow stage with a target in the middle.',
          nl: 'Een rond geel speelveld met een doelwit in het midden.',
          de: 'Eine runde gelbe Arena mit einer Zielscheibe in der Mitte.',
          fr: 'Une arène ronde et jaune avec une cible au centre.',
          es: 'Un escenario redondo y amarillo con una diana en el centro.',
          ja: '中央に的がある、丸い黄色のステージ。',
          zh: '中间带靶心的圆形黄色场地。',
        },
      },
    ],
  },
  'besyes': {
    poster: eBesyesCover,
    images: [],
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
  // Besyes links to its GitHub repository, not itch.io
  'BeverBesjes': tBesyes,
};

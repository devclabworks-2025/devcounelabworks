export interface ShowcaseProject {
  id: string;
  title: string;
  year: string;
  category: string;
  image1: string;
  image2: string;
  imageWidth: number;
  imageHeight: number;
  href?: string;
}

export interface ProjectDetail {
  slug: string;
  logo?: string;
  title: string;
  category: string;
  year: string;
  headline: string;
  paragraphs: string[];
  slides: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "dialogue",
    title: "EXHIBITION / DIA LO GUE",
    year: "2025",
    category: "EXHIBITION",
    image1: "/assets/images/GV5L96x5EJgkPPmFdep0hIEfvM.jpg",
    image2: "/assets/images/bzRTfHRt4BbBNCSfvzzVqbeMow.png",
    imageWidth: 4032,
    imageHeight: 3024,
    href: "/dialogue",
  },
  {
    id: "piled",
    title: "INTERACTIVE ART INSTALLATION / PILED",
    year: "2025",
    category: "INTERACTIVE ART INSTALLATION",
    image1: "/assets/images/KwhT4M6S9UtXg01u9cb6BCwGX20.png",
    image2: "/assets/images/dB6SAeyaIyjxm1I7PpYkGhLszHQ.png",
    imageWidth: 1536,
    imageHeight: 2048,
    href: "/piled",
  },
  {
    id: "oppo",
    title: "ART INSTALLATION / OPPO",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/assets/images/Zq0ktFD84aXASodSIUWNiyh3Ps.png",
    image2: "/assets/images/7c26vOTXLmqzwH4a97XlMhTZ8og.png",
    imageWidth: 1842,
    imageHeight: 1716,
    href: "/oppo",
  },
  {
    id: "roh",
    title: "ART INSTALLATION / ROH - BAGUS PANDEGA",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/assets/images/DUhFE7TLyTWTkmmc1KO8BHuIjRc.jpg",
    image2: "/assets/images/NSuJqABdJ7vjV5MKtXgX2MFlM.jpg",
    imageWidth: 1536,
    imageHeight: 2048,
    href: "/roh",
  },
  {
    id: "javajazz",
    title: "BRAND ACTIVATION / JAVA JAZZ",
    year: "2025",
    category: "BRAND ACTIVATION",
    image1: "/assets/images/SmOls3H4U8vqU52LRN384EHxCD8.png",
    image2: "/assets/images/CVv6lBHXDukaaWOpoNS5jOU7BQ.png",
    imageWidth: 4032,
    imageHeight: 3024,
    href: "/javajazz",
  },
  {
    id: "senmatcha",
    title: "SEN MATCHA ROBOT / AGAIN COFFEE & SOUND",
    year: "2025",
    category: "ROBOTICS & SOUND",
    image1: "/assets/images/anx1MfkVmpxS3dOGNe37mubKw.jpg",
    image2: "/assets/images/RxuWk8bpc5Wc9PuxsDCd6P1zB6E.png",
    imageWidth: 2252,
    imageHeight: 3033,
    href: "/again",
  },
  {
    id: "wardah",
    title: "BRAND ACTIVATION / WARDAH",
    year: "2025",
    category: "BRAND ACTIVATION",
    image1: "/assets/images/1WAFTqc8oR7lbeUuDx2pxoXcCU.png",
    image2: "/assets/images/OWqB6XZ8DzyUHPXYfgcTWkC5qI.png",
    imageWidth: 1127,
    imageHeight: 758,
    href: "/wardah",
  },
  {
    id: "gaia",
    title: "ART INSTALLATION / GAIA HOTEL",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/assets/images/n1ZaoL09LNWW387NCksVn2tji0.png",
    image2: "/assets/images/fLa2HOhBhH25yPcThcYvn1ptc.png",
    imageWidth: 1536,
    imageHeight: 2048,
    href: "/gaia",
  },
  {
    id: "esplanade",
    title: "ART INSTALLATION / ESPLENADE",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/assets/images/e7XcW0XgR3YG8ZjPihGbkVoxs.png",
    image2: "/assets/images/GRmMTuP3SPt83tQ4tf1mhYNH5c.png",
    imageWidth: 1200,
    imageHeight: 750,
    href: "/esplanade",
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  oppo: {
    slug: "oppo",
    title: "1000+ Lights Controlled by Phone",
    category: "Interactive Brand Experience",
    year: "2022",
    headline: "Interface: ‘Hand-Eye’ Coordination.",
    paragraphs: [
      "Oppo needed to demonstrate the capability of their latest device, so we turned the product into the experience itself.",
      "We built a high-density, 1.000 LED light installation at their Gandaria City store. Syncing the hardware with our custom software, we created a living, breathing 'eye' that reacts to every touch, giving visitors an immediate, tactile sense of the device’s power.",
    ],
    slides: [
      {
        src: "/assets/images/djXSHEggxkhcasYUQwJXrIJmKc.png",
        alt: "Oppo LED Light Installation in Gandaria City",
        width: 648,
        height: 486,
      },
      {
        src: "/assets/images/zdwxSlbAYz32y1SAE5p4R3tCTs.jpeg",
        alt: "Oppo Light Array Detail View",
        width: 1536,
        height: 2048,
      },
      {
        src: "/assets/images/Wo295gI0LDnJwaEMHuzqOVaYo.jpeg",
        alt: "Interactive Phone Control Demonstration",
        width: 1536,
        height: 2048,
      },
    ],
  },
  roh: {
    slug: "roh",
    logo: "/assets/images/projects/roh-logo.png",
    title: "Bagus Pandega Art Installation",
    category: "Interactive Brand Experience",
    year: "2024",
    headline: "The Architecture of Movement",
    paragraphs: [
      "We partnered with artist Bagus Pandega to translate his complex conceptual visions into a tangible art installation, that goes around Jakarta, Singapore, and New York.",
      "From custom firmware for motor-controlled cameras to complex logic systems for light arrays and pneumatic compressors, we engineered the invisible machinery that powers his artistic intent.",
    ],
    slides: [
      {
        src: "/assets/images/projects/roh-1.png",
        alt: "Bagus Pandega Kinetic Installation View",
      },
      {
        src: "/assets/images/projects/roh-2.jpg",
        alt: "ROH installation detail",
      },
    ],
  },
  wardah: {
    slug: "wardah",
    title: "Light Tunnel as Event Beacon",
    category: "Interactive Brand Experience",
    year: "2025",
    headline: "When beauty waltzes through a sea of light.",
    paragraphs: [
      "Collaborating with Wardah, we designed a large-scale, curved LED matrix installation at Senayan City that bridged digital art with human interaction. Drawing crowds in and immersing them in an evolving light landscape.",
      "By turning the audience into the art, we turned the installation into a high-performance engine for organic user-generated content.",
    ],
    slides: [
      {
        src: "/assets/images/projects/wardah-1.png",
        alt: "Wardah Curved LED Matrix Light Tunnel",
      },
      {
        src: "/assets/images/projects/wardah-2.jpg",
        alt: "Immersive Visitor Experience Senayan City",
      },
    ],
  },
  dialogue: {
    slug: "dialogue",
    title: "DIA LO GUE Exhibition",
    category: "Exhibition",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [
      {
        src: "/assets/images/projects/dialogue-1.png",
        alt: "DIA LO GUE exhibition",
      },
      {
        src: "/assets/images/projects/dialogue-2.png",
        alt: "DIA LO GUE exhibition detail",
      },
    ],
  },
  piled: {
    slug: "piled",
    title: "Piled Interactive Art Installation",
    category: "Interactive Art Installation",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [],
  },
  javajazz: {
    slug: "javajazz",
    title: "Java Jazz Brand Activation",
    category: "Brand Activation",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [],
  },
  gaia: {
    slug: "gaia",
    title: "Gaia Hotel Art Installation",
    category: "Art Installation",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [],
  },
  again: {
    slug: "again",
    title: "Sen Matcha Robot / Again Coffee & Sound",
    category: "Robotics & Sound",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [],
  },
  esplanade: {
    slug: "esplanade",
    title: "Esplanade Art Installation",
    category: "Art Installation",
    year: "2025",
    headline: "Project details coming soon",
    paragraphs: [
      "Project copywriting will be added soon.",
      "Additional project details will be added when provided.",
    ],
    slides: [],
  },
  musiumnasional: {
    slug: "musiumnasional",
    title: "30m² Floor Projection Mapping",
    category: "Art Installation",
    year: "2025",
    headline: "The Courtyard: Heritage in Motion",
    paragraphs: [
      "We partnered with the Museum Nasional Indonesia to bridge the gap between history and the modern age.",
      "By installing a 30-square-meter interactive floor projection in the heart of the courtyard, we transformed a static space into a dynamic heartbeat for the museum, signaling a new era, a vibrant intersection of Indonesian history and forward-thinking digital art.",
    ],
    slides: [
      {
        src: "/assets/images/7IbpOb8tFA45MjbwoJgRdpwF9g.png",
        alt: "Museum Nasional Interactive Floor Projection",
        width: 648,
        height: 486,
      },
      {
        src: "/assets/images/2RcikzOr5D02bUbjfKadvsJRRBI.png",
        alt: "Floor Mapping Geometry Detail",
        width: 648,
        height: 486,
      },
      {
        src: "/assets/images/djXSHEggxkhcasYUQwJXrIJmKc.png",
        alt: "Visitor Movement Interactive Feedback",
        width: 648,
        height: 486,
      },
      {
        src: "/assets/images/FmWAZNjQhJDxG4FTArEOJqpi2Xs.png",
        alt: "Courtyard Spatial Integration",
        width: 648,
        height: 486,
      },
    ],
  },
};

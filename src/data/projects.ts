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
  title: string;
  category: string;
  year: string;
  headline: string;
  paragraphs: string[];
  slides: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "dialogue",
    title: "EXHIBITION / DIA LO GUE",
    year: "2025",
    category: "EXHIBITION",
    image1: "/images/GV5L96x5EJgkPPmFdep0hIEfvM.jpg",
    image2: "/images/bzRTfHRt4BbBNCSfvzzVqbeMow.png",
    imageWidth: 4032,
    imageHeight: 3024,
  },
  {
    id: "piled",
    title: "INTERACTIVE ART INSTALLATION / PILED",
    year: "2025",
    category: "INTERACTIVE ART INSTALLATION",
    image1: "/images/KwhT4M6S9UtXg01u9cb6BCwGX20.png",
    image2: "/images/dB6SAeyaIyjxm1I7PpYkGhLszHQ.png",
    imageWidth: 1536,
    imageHeight: 2048,
  },
  {
    id: "oppo",
    title: "ART INSTALLATION / OPPO",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/images/Zq0ktFD84aXASodSIUWNiyh3Ps.png",
    image2: "/images/7c26vOTXLmqzwH4a97XlMhTZ8og.png",
    imageWidth: 1842,
    imageHeight: 1716,
    href: "/oppo",
  },
  {
    id: "roh",
    title: "ART INSTALLATION / ROH - BAGUS PANDEGA",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/images/DUhFE7TLyTWTkmmc1KO8BHuIjRc.jpg",
    image2: "/images/NSuJqABdJ7vjV5MKtXgX2MFlM.jpg",
    imageWidth: 1536,
    imageHeight: 2048,
    href: "/roh",
  },
  {
    id: "javajazz",
    title: "BRAND ACTIVATION / JAVA JAZZ",
    year: "2025",
    category: "BRAND ACTIVATION",
    image1: "/images/SmOls3H4U8vqU52LRN384EHxCD8.png",
    image2: "/images/CVv6lBHXDukaaWOpoNS5jOU7BQ.png",
    imageWidth: 4032,
    imageHeight: 3024,
  },
  {
    id: "senmatcha",
    title: "SEN MATCHA ROBOT / AGAIN COFFEE & SOUND",
    year: "2025",
    category: "ROBOTICS & SOUND",
    image1: "/images/anx1MfkVmpxS3dOGNe37mubKw.jpg",
    image2: "/images/RxuWk8bpc5Wc9PuxsDCd6P1zB6E.png",
    imageWidth: 2252,
    imageHeight: 3033,
  },
  {
    id: "wardah",
    title: "BRAND ACTIVATION / WARDAH",
    year: "2025",
    category: "BRAND ACTIVATION",
    image1: "/images/1WAFTqc8oR7lbeUuDx2pxoXcCU.png",
    image2: "/images/OWqB6XZ8DzyUHPXYfgcTWkC5qI.png",
    imageWidth: 1127,
    imageHeight: 758,
    href: "/wardah",
  },
  {
    id: "gaia",
    title: "ART INSTALLATION / GAIA HOTEL",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/images/n1ZaoL09LNWW387NCksVn2tji0.png",
    image2: "/images/fLa2HOhBhH25yPcThcYvn1ptc.png",
    imageWidth: 1536,
    imageHeight: 2048,
  },
  {
    id: "esplanade",
    title: "ART INSTALLATION / ESPLENADE",
    year: "2025",
    category: "ART INSTALLATION",
    image1: "/images/e7XcW0XgR3YG8ZjPihGbkVoxs.png",
    image2: "/images/GRmMTuP3SPt83tQ4tf1mhYNH5c.png",
    imageWidth: 1200,
    imageHeight: 750,
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
        src: "/images/djXSHEggxkhcasYUQwJXrIJmKc.png",
        alt: "Oppo LED Light Installation in Gandaria City",
        width: 648,
        height: 486,
      },
      {
        src: "/images/zdwxSlbAYz32y1SAE5p4R3tCTs.jpeg",
        alt: "Oppo Light Array Detail View",
        width: 1536,
        height: 2048,
      },
      {
        src: "/images/Wo295gI0LDnJwaEMHuzqOVaYo.jpeg",
        alt: "Interactive Phone Control Demonstration",
        width: 1536,
        height: 2048,
      },
    ],
  },
  roh: {
    slug: "roh",
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
        src: "/images/2RcikzOr5D02bUbjfKadvsJRRBI.png",
        alt: "Bagus Pandega Kinetic Installation View",
        width: 648,
        height: 486,
      },
      {
        src: "/images/sRbYAERO7WAo56nMDwzZf4cYc4w.jpg",
        alt: "Motorized Systems and Logic Units",
        width: 3024,
        height: 4032,
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
        src: "/images/FmWAZNjQhJDxG4FTArEOJqpi2Xs.png",
        alt: "Wardah Curved LED Matrix Light Tunnel",
        width: 648,
        height: 486,
      },
      {
        src: "/images/rzYxuf4IvGhMmAKx3fuB5agZw.jpg",
        alt: "Immersive Visitor Experience Senayan City",
        width: 3024,
        height: 4032,
      },
    ],
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
        src: "/images/7IbpOb8tFA45MjbwoJgRdpwF9g.png",
        alt: "Museum Nasional Interactive Floor Projection",
        width: 648,
        height: 486,
      },
      {
        src: "/images/2RcikzOr5D02bUbjfKadvsJRRBI.png",
        alt: "Floor Mapping Geometry Detail",
        width: 648,
        height: 486,
      },
      {
        src: "/images/djXSHEggxkhcasYUQwJXrIJmKc.png",
        alt: "Visitor Movement Interactive Feedback",
        width: 648,
        height: 486,
      },
      {
        src: "/images/FmWAZNjQhJDxG4FTArEOJqpi2Xs.png",
        alt: "Courtyard Spatial Integration",
        width: 648,
        height: 486,
      },
    ],
  },
};

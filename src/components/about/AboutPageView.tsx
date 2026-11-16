import Image from "next/image";
import CollaborationCTA from "@/components/home/CollaborationCTA";

const ABOUT_IMAGE_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/About/Image-about-1.png";
const PHILOSOPHY_IMAGE_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/About/Image-about2.png";
const PRINCIPLES_BACKGROUND_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/About/Image-about3.png";
const ORIGIN_IMAGE_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/About/Image-about4.png";
const WORLD_MAP_VIDEO_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/About/CLW_WorldMap.webm";
const WORLD_MAP_VIDEO_FALLBACK_URL = "/media/about-world-map.mp4";

const LOCATIONS = [
  "JAKARTA",
  "SINGAPORE",
  "NEW YORK",
  "JAPAN",
  "FRANCE",
  "BANDUNG",
];

const PRINCIPLES = [
  {
    num: "P. 1",
    text: "A space that does not respond to the people inside it is a missed opportunity.",
  },
  {
    num: "P. 2",
    text: "Technology should earn its presence. If it does not add meaning, it adds noise.",
  },
  {
    num: "P. 3",
    text: "The most important work is the work nobody notices — until it’s gone.",
  },
  {
    num: "P. 4",
    text: "Beauty and utility are not a tradeoff. They are the same problem, seen from different angles.",
  },
  {
    num: "P. 5",
    text: "We are not vendors. We are the technological soul of the work we build together.",
  },
];

const LOOP_STEPS = [
  {
    title: "sense",
    text: "Detect the world around us: presence, movement, inputs, pressure.",
  },
  {
    title: "understand",
    text: "Give meaning to signals. Process information in context.",
  },
  {
    title: "respond",
    text: "Return something meaningful to the world.",
  },
  {
    title: "learn",
    text: "Systems improve. Data compounds. Value grows.",
  },
];

type ImageFrameProps = {
  src?: string;
  alt: string;
  className: string;
  imageClassName?: string;
  priority?: boolean;
};

function ImageFrame({
  src,
  alt,
  className,
  imageClassName = "object-cover",
  priority = false,
}: ImageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden border-2 border-[#f60c09] bg-white ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 768px) 100vw, 60vw"
          className={imageClassName}
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} image container`}
          className="absolute inset-0 bg-[#fcfcfc]"
        />
      )}
    </div>
  );
}

function LocationTicker() {
  return (
    <div className="about-ticker-window overflow-hidden" aria-hidden="true">
      <div className="about-ticker-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
          >
            {LOCATIONS.map((location) => (
              <span
                key={`${copy}-${location}`}
                className="whitespace-nowrap font-sans text-[10px] font-semibold tracking-[0.32em] text-[#222222] sm:text-xs"
              >
                [ {location} ]
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">Studio locations: {LOCATIONS.join(", ")}.</p>
    </div>
  );
}

export default function AboutPageView() {
  return (
    <div className="w-full bg-white text-[#090909]">
      <div className="mx-auto max-w-[1160px] px-5 pt-20 sm:px-8 sm:pt-28">
        <section
          aria-label="The meaning of Coune LabWorks"
          className="grid items-center gap-8 md:grid-cols-[minmax(220px,340px)_1fr] md:gap-10"
        >
          <ImageFrame
            src={ABOUT_IMAGE_URL}
            alt="Coune LabWorks wordmark"
            className="mx-auto aspect-[1.48] w-full max-w-[340px]"
            imageClassName="object-contain p-5 sm:p-7"
            priority
          />

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.2fr)] items-center gap-2 sm:gap-4">
            <div className="min-w-0 text-center">
              <h1 className="font-serif text-3xl leading-none sm:text-4xl">co</h1>
              <p className="mt-1 font-serif text-[10px] italic sm:text-xs">
                cooperative
              </p>
              <p className="mt-1 text-[9px] leading-tight text-neutral-500 sm:text-[10px]">
                to work in concert, to act as one with others
              </p>
            </div>
            <span aria-hidden="true" className="font-serif text-sm text-neutral-400">
              +
            </span>
            <div className="min-w-0 text-center">
              <h2 className="font-serif text-3xl leading-none sm:text-4xl">une</h2>
              <p className="mt-1 font-serif text-[10px] italic sm:text-xs">
                one (French)
              </p>
              <p className="mt-1 text-[9px] leading-tight text-neutral-500 sm:text-[10px]">
                a single self, indivisible
              </p>
            </div>
            <span aria-hidden="true" className="font-serif text-sm text-neutral-400">
              =
            </span>
            <div className="min-w-0 text-center">
              <h2 className="font-serif text-3xl leading-none sm:text-4xl">
                coune
              </h2>
              <p className="mt-1 font-serif text-[10px] italic sm:text-xs">
                the cooperative one
              </p>
              <p className="mt-1 text-[9px] leading-tight text-neutral-500 sm:text-[10px]">
                a self that is first whole within itself
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Studio locations" className="mt-16 sm:mt-20">
          <LocationTicker />
          <div className="relative mt-4 aspect-[1.76] w-full overflow-hidden border-2 border-[#f60c09] bg-white">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Animated world map showing Coune LabWorks locations"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src={WORLD_MAP_VIDEO_URL}
                type='video/webm; codecs="vp9"'
              />
              <source src={WORLD_MAP_VIDEO_FALLBACK_URL} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="mt-20 grid items-center gap-8 sm:mt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <ImageFrame
            src={PHILOSOPHY_IMAGE_URL}
            alt="Philosophy collage image"
            className="aspect-[1.6] w-full"
          />
          <div className="max-w-[440px]">
            <h2 className="font-serif text-2xl tracking-[0.2em] sm:text-3xl">
              everything means
              <br />
              something
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-neutral-700 sm:text-sm">
              We believe the world around us is full of data — human presence,
              movement, sound, touch, time. Most technology ignores it. We
              build things that don’t. Every CLW work begins with a question:
              <strong className="mt-2 block text-[#090909]">
                what is this space already sensing, and what should it say back?
              </strong>
            </p>
          </div>
        </section>

        <section
          aria-label="The principles"
          className="relative mt-12 min-h-[500px] overflow-hidden border-2 border-[#f60c09] bg-[#fcfcfc] sm:mt-16 sm:min-h-[620px] lg:min-h-[680px]"
        >
          <Image
            src={PRINCIPLES_BACKGROUND_URL}
            alt="Principles background"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 mx-4 my-6 border-2 border-[#3046ff] bg-white/95 p-4 sm:mx-8 sm:my-8 sm:p-6 md:absolute md:right-[6%] md:top-[9%] md:my-0 md:h-[82%] md:w-[36%] md:max-w-[390px] md:p-5">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-300 pb-2">
              <h2 className="font-sans text-[10px] font-semibold uppercase">
                [THE PRINCIPLES]
              </h2>
              <span aria-hidden="true" className="text-xl font-medium text-[#f60c09]">
                +
              </span>
            </div>
            <div className="grid gap-2">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.num}
                  className="border border-neutral-300 bg-white"
                >
                  <span className="inline-block bg-[#f60c09] px-2 py-0.5 font-sans text-[9px] font-semibold text-white">
                    {principle.num}
                  </span>
                  <p className="px-2 py-1 text-[9px] leading-snug text-neutral-700 sm:text-[10px]">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28 grid items-center gap-10 sm:mt-40 lg:grid-cols-[1fr_0.88fr] lg:gap-16">
          <div className="max-w-[520px]">
            <h2 className="font-serif text-3xl leading-[1.02] tracking-[-0.03em] sm:text-4xl">
              The company became necessary not to start something, but to scale
              something that had already started on its own.
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-neutral-700 sm:text-sm">
              Brands began asking. Institutions came knocking. Artists wanted
              collaborators. When one person was no longer enough, Coune
              LabWorks was born — not as a business, but as a laboratory.
            </p>
          </div>
          <ImageFrame
            src={ORIGIN_IMAGE_URL}
            alt="Studio origin image"
            className="ml-auto aspect-[0.86] w-full max-w-[430px]"
          />
        </section>

        <section className="mt-24 grid items-center gap-0 pb-24 sm:mt-32 lg:grid-cols-[1.25fr_0.78fr]">
          <div className="grid grid-cols-2 gap-6 border border-neutral-300 bg-white px-5 py-8 sm:grid-cols-4 sm:px-8">
            {LOOP_STEPS.map((step) => (
              <div key={step.title} className="text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-3 block h-5 w-5 rounded-full border border-neutral-300"
                />
                <h2 className="font-serif text-xl leading-none sm:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-[9px] leading-tight text-neutral-500 sm:text-[10px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <div className="border border-neutral-300 bg-white p-5 sm:p-7 lg:-ml-px">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-300 pb-2">
              <h2 className="font-sans text-[10px] font-semibold uppercase">
                [THE LOOP]
              </h2>
              <span aria-hidden="true" className="text-xl font-medium text-[#f60c09]">
                +
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-neutral-600 sm:text-xs">
              The loop is CLW’s signature: sense the world, understand its
              context, respond with purpose, and keep improving with every
              project.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8">
        <CollaborationCTA />
      </div>

    </div>
  );
}

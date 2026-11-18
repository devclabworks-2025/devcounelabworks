"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { id: "hermes", src: "/assets/images/clients/hermes.png", alt: "Hermes" },
  { id: "universal", src: "/assets/images/clients/universal.png", alt: "Universal" },
  { id: "google", src: "/assets/images/clients/google.png", alt: "Google" },
  { id: "oppo", src: "/assets/images/clients/oppo.png", alt: "Oppo" },
  { id: "taco", src: "/assets/images/clients/taco.png", alt: "TACO" },
  { id: "iqos", src: "/assets/images/clients/iqos.png", alt: "IQOS" },
  { id: "coca-cola", src: "/assets/images/clients/coca-cola.png", alt: "Coca-Cola" },
  { id: "esplanade", src: "/assets/images/clients/esplanade.png", alt: "Esplanade" },
  { id: "sam", src: "/assets/images/clients/sam.png", alt: "SAM" },
  { id: "swiss-institute", src: "/assets/images/clients/swiss-institute.png", alt: "Swiss Institute" },
  { id: "fondation-martell", src: "/assets/images/clients/fondation-martell.png", alt: "Fondation d'entreprise Martell" },
  { id: "roh", src: "/assets/images/clients/roh.png", alt: "ROH" },
  { id: "dialogue", src: "/assets/images/clients/dialogue.png", alt: "Dia Lo Gue" },
  { id: "lokananta", src: "/assets/images/clients/lokananta.png", alt: "Lokananta" },
  { id: "museum-nasional", src: "/assets/images/clients/museum-nasional-indonesia.png", alt: "Museum Nasional Indonesia" },
  { id: "again", src: "/assets/images/clients/again.png", alt: "Again Coffee and Sound" },
  { id: "wardah", src: "/assets/images/clients/wardah.png", alt: "Wardah" },
  { id: "mld", src: "/assets/images/clients/mld.png", alt: "Djarum Super MLD" },
  { id: "bca", src: "/assets/images/clients/bca.png", alt: "BCA" },
  { id: "telkom", src: "/assets/images/clients/telkom-indonesia.png", alt: "Telkom Indonesia" },
  { id: "gaia", src: "/assets/images/clients/gaia-hotels-resorts.png", alt: "Gaia Hotels and Resorts" },
  { id: "potboy", src: "/assets/images/clients/potboy.png", alt: "Potboy" },
  { id: "wonderlab", src: "/assets/images/clients/wonderlab.png", alt: "Wonderlab" },
  { id: "java-jazz", src: "/assets/images/clients/java-jazz.png", alt: "Java Jazz Festival" },
];

export default function ClientLogos() {
  return (
    <section
      aria-label="Clients and partners"
      className="w-full overflow-hidden border-b border-[#ebebeb] bg-white py-10 sm:py-14"
    >
      <div className="flex flex-col gap-5 sm:gap-7">
        {Array.from({ length: 4 }, (_, rowIndex) =>
          CLIENT_LOGOS.slice(rowIndex * 6, rowIndex * 6 + 6),
        ).map((row, rowIndex) => (
          <div key={rowIndex} className="w-full overflow-hidden">
            <div
              className={`flex w-max whitespace-nowrap will-change-transform ${
                rowIndex % 2 === 0
                  ? "animate-marquee-left"
                  : "animate-marquee-right"
              }`}
            >
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  aria-hidden={copyIndex === 1}
                  className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16"
                >
                  {row.map((logo) => (
                    <div
                      key={logo.id}
                      className="relative h-14 w-44 flex-shrink-0 grayscale contrast-125 transition-opacity hover:opacity-70 sm:h-16 sm:w-52 md:h-20 md:w-64"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 256px"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 48s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 48s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

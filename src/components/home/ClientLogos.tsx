"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { id: "hermes", src: "/images/clients/hermes.png", alt: "Hermes" },
  { id: "universal", src: "/images/clients/universal.png", alt: "Universal" },
  { id: "google", src: "/images/clients/google.png", alt: "Google" },
  { id: "oppo", src: "/images/clients/oppo.png", alt: "Oppo" },
  { id: "taco", src: "/images/clients/taco.png", alt: "TACO" },
  { id: "iqos", src: "/images/clients/iqos.png", alt: "IQOS" },
  { id: "coca-cola", src: "/images/clients/coca-cola.png", alt: "Coca-Cola" },
  { id: "esplanade", src: "/images/clients/esplanade.png", alt: "Esplanade" },
  { id: "sam", src: "/images/clients/sam.png", alt: "SAM" },
  { id: "swiss-institute", src: "/images/clients/swiss-institute.png", alt: "Swiss Institute" },
  { id: "fondation-martell", src: "/images/clients/fondation-martell.png", alt: "Fondation d'entreprise Martell" },
  { id: "roh", src: "/images/clients/roh.png", alt: "ROH" },
  { id: "dialogue", src: "/images/clients/dialogue.png", alt: "Dia Lo Gue" },
  { id: "lokananta", src: "/images/clients/lokananta.png", alt: "Lokananta" },
  { id: "museum-nasional", src: "/images/clients/museum-nasional-indonesia.png", alt: "Museum Nasional Indonesia" },
  { id: "again", src: "/images/clients/again.png", alt: "Again Coffee and Sound" },
  { id: "wardah", src: "/images/clients/wardah.png", alt: "Wardah" },
  { id: "mld", src: "/images/clients/mld.png", alt: "Djarum Super MLD" },
  { id: "bca", src: "/images/clients/bca.png", alt: "BCA" },
  { id: "telkom", src: "/images/clients/telkom-indonesia.png", alt: "Telkom Indonesia" },
  { id: "gaia", src: "/images/clients/gaia-hotels-resorts.png", alt: "Gaia Hotels and Resorts" },
  { id: "potboy", src: "/images/clients/potboy.png", alt: "Potboy" },
  { id: "wonderlab", src: "/images/clients/wonderlab.png", alt: "Wonderlab" },
  { id: "java-jazz", src: "/images/clients/java-jazz.png", alt: "Java Jazz Festival" },
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
                      className="relative h-12 w-36 flex-shrink-0 grayscale contrast-125 transition-opacity hover:opacity-70 sm:h-14 sm:w-44 md:h-16 md:w-52"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
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

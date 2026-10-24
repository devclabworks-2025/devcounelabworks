"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { id: "1", src: "/images/cxFP6qTBJiZm51lNSZ7TAyVoQ4.png", alt: "Client Logo 1" },
  { id: "2", src: "/images/fjF9JnpBHb2fw5HqhCULZo2kcs.png", alt: "Client Logo 2" },
  { id: "3", src: "/images/6AXC78sDLkSEab7R0YdMzVvw.png", alt: "Client Logo 3" },
  { id: "4", src: "/images/f8M5YPpjjUNZiOgbZ224IVvM.png", alt: "Client Logo 4" },
  { id: "5", src: "/images/ZhZGOXivDvGL8mzqvn96MPJT9b0.png", alt: "Client Logo 5" },
  { id: "6", src: "/images/tt3695TuTvvmBwVzmiS2Q5qvfwE.png", alt: "Client Logo 6" },
  { id: "7", src: "/images/xUWZLJVYfw553qTWbaVM2ImILW0.png", alt: "Client Logo 7" },
  { id: "8", src: "/images/szcI9go4rL3o74I2Q5mgW11ng.png", alt: "Client Logo 8" },
  { id: "9", src: "/images/hjlrQQNojjdis2gpsWdHKttoHBY.png", alt: "Client Logo 9" },
  { id: "10", src: "/images/QV1VHOFiu3HhBIFexAvMG4uak0.png", alt: "Client Logo 10" },
  { id: "11", src: "/images/JEW631yJNriB5Ic3TSOSZ1UY.png", alt: "Client Logo 11" },
  { id: "12", src: "/images/MpR7rHS8cjDmshMw3MvPerXgsxk.png", alt: "Client Logo 12" },
  { id: "13", src: "/images/fto7Ky8Gvsv2u3FITBIUqZaTM.png", alt: "Client Logo 13" },
  { id: "14", src: "/images/cvv2YKaXTOoSzFPJJcxQiBLTz8.png", alt: "Client Logo 14" },
];

export default function ClientLogos() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 border-b border-[#ebebeb] overflow-hidden">
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Infinite Scrolling Ticker Track */}
        <div className="flex items-center gap-12 sm:gap-16 animate-marquee whitespace-nowrap will-change-transform">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative w-28 sm:w-36 h-12 sm:h-14 flex-shrink-0 grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black text-white">
      {/* Background Fullscreen Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/CLW_LogoReveal_4-4.mp4" type="video/mp4" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Soft Vignette Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Bottom-Left Typography Lockup */}
      <div className="absolute bottom-10 left-6 sm:bottom-14 sm:left-12 lg:bottom-16 lg:left-16 z-10 flex flex-col items-start gap-1">
        {/* Box 1: counelabworks */}
        <div className="bg-white px-2.5 py-1 inline-flex items-center shadow-md">
          <span className="font-sans font-bold text-[22px] sm:text-[30px] md:text-[34px] tracking-[-0.08em] leading-none text-black">
            counelabworks
          </span>
        </div>

        {/* Box 2: art & */}
        <div className="bg-white px-3 py-1 inline-flex items-center shadow-md">
          <span className="font-sans font-bold text-[22px] sm:text-[30px] md:text-[34px] tracking-[-0.08em] leading-none text-black">
            art &amp;{" "}
          </span>
        </div>

        {/* Box 3: technology */}
        <div className="bg-white px-2.5 py-1 inline-flex items-center shadow-md">
          <span className="font-sans font-bold text-[22px] sm:text-[30px] md:text-[34px] tracking-[-0.08em] leading-none text-black">
            technology
          </span>
        </div>

        {/* Hero Caps Asset */}
        <div className="pt-4 sm:pt-6">
          <div className="relative w-[130px] sm:w-[213px] h-[20px]">
            <Image
              src="/images/QQSH0EFe72FE80s0WBSXXqmkzhI.png"
              alt="Coune LabWorks"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

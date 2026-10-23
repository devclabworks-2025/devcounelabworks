"use client";

import React from "react";
import ScrambleText from "@/components/common/ScrambleText";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-8 border-b border-[#181818]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Brand Typography Banner */}
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
            <ScrambleText text="[ sketch to circuit ]" delay={0.2} />
          </div>

          <h1 className="font-teka text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase font-light">
            Coune LabWorks
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-neutral-300">
              art & technology
            </p>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
              Those with wings shall keep flying. We build interfaces that work different. Every circuit is part art, part engineering, fully intentional.
            </p>
          </div>
        </div>

        {/* Video / Visual Hero Asset */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] rounded-lg overflow-hidden border border-[#222222] bg-[#0c0c0c]">
          <video
            src="/videos/hero-video.mp4"
            poster="/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-300">
            <span>[ SYSTEM: ACTIVE ]</span>
            <span>BANDUNG 40163</span>
          </div>
        </div>
      </div>
    </section>
  );
}

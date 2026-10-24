"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CollaborationCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-white pt-24 pb-0 overflow-hidden border-b border-[#ebebeb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center relative z-10">
        {/* Main Display Headline */}
        <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#090909] tracking-[-0.08em] leading-tight max-w-4xl mx-auto">
          Every great project starts with a conversation.
        </h2>

        {/* Subhead link */}
        <div className="mt-4">
          <Link
            href="/contactus"
            className="font-sans text-base sm:text-xl text-neutral-600 hover:text-[#f60c09] transition-colors"
          >
            Let’s Collaborate
          </Link>
        </div>

        {/* 3D Circular Orb with LETS CREATE text */}
        <div className="mt-12 sm:mt-16 mb-8 relative">
          <Link
            href="/contactus"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105"
            style={{
              background:
                "radial-gradient(64% 66% at 36.9% 29.8%, rgb(255, 255, 255) 0%, rgba(247, 247, 247, 0.8) 37%, rgba(220, 220, 220, 0.95) 100%)",
              boxShadow:
                "0 20px 40px -10px rgba(0,0,0,0.15), inset -8px -8px 12px rgba(0,0,0,0.08), inset 8px 8px 12px rgba(255,255,255,0.9)",
              border: "1px solid rgba(220, 220, 220, 0.8)",
            }}
          >
            {/* Spinning Text / Badge */}
            <div className="flex flex-col items-center justify-center select-none">
              <span className="font-sans font-black text-2xl sm:text-3xl tracking-[-0.08em] text-[#090909] group-hover:text-[#f60c09] transition-colors">
                LETS
              </span>
              <span className="font-sans font-black text-2xl sm:text-3xl tracking-[-0.08em] text-[#090909] group-hover:text-[#f60c09] transition-colors">
                CREATE
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Perspective Floor Grid Image Asset at Bottom */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] mt-[-80px] sm:mt-[-120px] z-0 pointer-events-none">
        <Image
          src="/images/gD9ZwFkBNQJtbffmEmYFFj7zmc.png"
          alt="Perspective Floor Grid"
          fill
          className="object-cover object-top opacity-90"
          sizes="100vw"
        />
        {/* Soft top gradient to blend cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-24" />
      </div>
    </section>
  );
}

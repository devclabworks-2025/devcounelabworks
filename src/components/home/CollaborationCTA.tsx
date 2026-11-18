"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CollaborationCTA() {
  return (
    <section className="relative w-full bg-white pt-24 pb-24 overflow-hidden border-b border-[#ebebeb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center relative z-10">
        {/* Main Display Headline */}
        <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#090909] tracking-[-0.08em] leading-tight max-w-4xl mx-auto">
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

        {/* 3D sphere button */}
        <div className="mt-12 sm:mt-16 mb-8 relative">
          <Link
            href="/contactus"
            aria-label="Let's create — contact us"
            className="cta-sphere group relative flex h-48 w-48 cursor-pointer items-center justify-center rounded-full sm:h-[14.4rem] sm:w-[14.4rem]"
          >
            <span aria-hidden="true" className="cta-sphere__surface" />
            <span aria-hidden="true" className="cta-sphere__orbit">
              <span className="cta-sphere__label">LET’S</span>
              <span className="cta-sphere__label cta-sphere__label--back">
                CREATE
              </span>
            </span>
            <span className="sr-only">Let’s create</span>
          </Link>
        </div>
      </div>

      {/* Perspective Floor Grid Image Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/images/bg-cta.png"
          alt="Perspective Floor Grid"
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
      </div>
    </section>
  );
}

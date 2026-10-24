import React from "react";
import { Metadata } from "next";
import CollaborationCTA from "@/components/home/CollaborationCTA";

export const metadata: Metadata = {
  title: "About — Coune LabWorks",
  description:
    "The cooperative one. Coune LabWorks is a creative technology laboratory blending design, motion, and code into bold responsive environments.",
};

const LOCATIONS = [
  "[BANDUNG]",
  "[JAKARTA]",
  "[SINGAPORE]",
  "[NEW YORK]",
  "[JAPAN]",
  "[FRANCE]",
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
    text: "The most important work is the work nobody notices — until it's gone.",
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

export default function AboutPage() {
  return (
    <div className="relative w-full bg-white text-[#090909] pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20 flex flex-col gap-20 sm:gap-28">
        {/* Section 1: Etymology */}
        <section className="flex flex-col gap-10 border-b border-[#ebebeb] pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ ETYMOLOGY ]
          </span>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center font-sans">
            {/* CO */}
            <div className="p-6 border border-[#e5e5e5] bg-[#fafafa] flex flex-col gap-2">
              <span className="font-teka text-3xl sm:text-4xl text-[#090909]">co</span>
              <span className="text-xs text-neutral-600 font-semibold uppercase tracking-wider">cooperative</span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                to work in concert, to act as one with others
              </p>
            </div>

            <div className="text-center font-teka text-3xl text-neutral-400 hidden md:block">+</div>

            {/* UNE */}
            <div className="p-6 border border-[#e5e5e5] bg-[#fafafa] flex flex-col gap-2">
              <span className="font-teka text-3xl sm:text-4xl text-[#090909]">une</span>
              <span className="text-xs text-neutral-600 font-semibold uppercase tracking-wider">one (french)</span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                a single self, indivisible
              </p>
            </div>

            <div className="text-center font-teka text-3xl text-neutral-400 hidden md:block">=</div>

            {/* COUNE */}
            <div className="p-6 border border-[#111111] bg-white flex flex-col gap-2 shadow-sm">
              <span className="font-teka text-3xl sm:text-4xl text-[#090909]">coune</span>
              <span className="text-xs text-[#090909] font-bold uppercase tracking-wider">the cooperative one</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                a self that is first whole within itself
              </p>
            </div>
          </div>

          {/* Locations Ticker */}
          <div className="flex flex-wrap items-center gap-2 pt-4 font-mono text-xs text-neutral-500">
            {LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1 bg-[#f5f5f5] border border-[#e5e5e5]"
              >
                {loc}
              </span>
            ))}
          </div>
        </section>

        {/* Section 2: Philosophy */}
        <section className="flex flex-col gap-6 border-b border-[#ebebeb] pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ PHILOSOPHY ]
          </span>

          <h2 className="font-teka text-4xl sm:text-6xl text-[#090909] uppercase tracking-tight font-light">
            Everything Means Something
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-neutral-800 max-w-4xl leading-relaxed">
            We believe the world around us is full of data — human presence, movement, sound, touch, time. Most technology ignores it. We build things that don’t.
          </p>

          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Every CLW work begins with a question: what is this space already sensing, and what should it say back?
          </p>
        </section>

        {/* Section 3: Principles */}
        <section className="flex flex-col gap-8 border-b border-[#ebebeb] pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ THE PRINCIPLES ]
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="p-6 border border-[#e5e5e5] bg-[#fafafa] flex flex-col justify-between gap-6"
              >
                <span className="font-mono text-xs text-neutral-400 font-semibold">{p.num}</span>
                <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Origin */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-[#ebebeb] pb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              [ THE ORIGIN ]
            </span>
            <h2 className="font-teka text-3xl sm:text-5xl text-[#090909] uppercase tracking-tight font-light">
              This studio was not founded to be a studio.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <p>
              Coune began as an artist — trained in new media art and creative programming in France, drawn to generative visuals, drawn to installations that behave rather than simply exist. The work found its audience before a company was ever considered.
            </p>
            <p className="font-serif italic text-lg sm:text-xl text-[#090909]">
              The company became necessary not to start something, but to scale something that had already started on its own.
            </p>
            <p>
              Brands began asking. Institutions came knocking. Artists wanted collaborators. And when one person was no longer enough, Coune Labworks was born — not as a business, but as a laboratory. A place for people who are genuinely into the work, the way you get into something when no one is asking you to.
            </p>
          </div>
        </section>

        {/* Section 5: The Loop */}
        <section className="flex flex-col gap-8 border-b border-[#ebebeb] pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ THE LOOP ]
          </span>

          <div className="p-8 sm:p-12 border border-[#e5e5e5] bg-[#fafafa] space-y-6">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#090909] leading-snug">
              Any studio can make a beautiful installation. Any software house can build a POS. What no one else in Indonesia — and very few in SEA — can do is close the full loop:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#e5e5e5] font-sans">
              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="text-neutral-400 block font-mono text-[10px]">01</span>
                <span className="font-bold text-[#090909] text-sm">SENSE</span>
                <p className="text-xs text-neutral-500 mt-1">Sensors, presence, physical data</p>
              </div>
              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="text-neutral-400 block font-mono text-[10px]">02</span>
                <span className="font-bold text-[#090909] text-sm">UNDERSTAND</span>
                <p className="text-xs text-neutral-500 mt-1">Intelligence, context, intent</p>
              </div>
              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="text-neutral-400 block font-mono text-[10px]">03</span>
                <span className="font-bold text-[#090909] text-sm">RESPOND</span>
                <p className="text-xs text-neutral-500 mt-1">Light, motion, tactile beauty</p>
              </div>
              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="text-neutral-400 block font-mono text-[10px]">04</span>
                <span className="font-bold text-[#090909] text-sm">IMPROVE</span>
                <p className="text-xs text-neutral-500 mt-1">Compounding value over time</p>
              </div>
            </div>

            <p className="font-mono text-xs text-neutral-500">
              The loop is CLW’s signature. Protect it. Name it. Live it in every single project.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <CollaborationCTA />
      </div>
    </div>
  );
}

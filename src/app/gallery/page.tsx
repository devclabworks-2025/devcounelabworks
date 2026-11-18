"use client";

import React, { useState } from "react";
import Image from "next/image";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import { GALLERY_ITEMS, GalleryCard } from "@/data/gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryPage() {
  const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCards = Array.from(
    { length: Math.min(3, GALLERY_ITEMS.length) },
    (_, offset) => GALLERY_ITEMS[(activeIndex + offset) % GALLERY_ITEMS.length],
  );

  return (
    <div className="relative w-full bg-white text-[#090909]">
      <section
        aria-labelledby="gallery-title"
        className="relative isolate flex min-h-[580px] flex-col overflow-hidden px-4 pb-14 pt-24 sm:min-h-[600px] sm:pt-28"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 0%, rgba(182, 220, 248, 0.46), transparent 38%), radial-gradient(ellipse at 88% 18%, rgba(216, 236, 250, 0.7), transparent 42%), linear-gradient(180deg, #f8fbff 0%, #ffffff 92%)",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[960px]">
          <header className="text-center">
            <h1
              id="gallery-title"
              className="font-serif text-4xl font-normal lowercase leading-none tracking-[0.12em] sm:text-5xl"
            >
              gallery
            </h1>
            <p className="mt-2 font-serif text-xs text-neutral-400 sm:text-sm">
              Curated past works.
            </p>
          </header>

          <div
            className="relative mx-auto mt-12 flex min-h-[235px] max-w-[920px] items-center justify-center sm:mt-14"
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery projects"
          >
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (index) => (index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
                )
              }
              aria-label="Previous gallery projects"
              className="absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#090909] shadow-sm transition-colors hover:bg-white sm:-left-3"
            >
              <ChevronLeft size={14} aria-hidden="true" />
            </button>

            <div className="flex w-full items-center justify-center gap-[clamp(16px,8vw,64px)] px-8 sm:px-10">
              {visibleCards.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedCard(item)}
                  aria-label={`View ${item.title}`}
                  className={`group w-[clamp(136px,18vw,220px)] shrink-0 overflow-hidden border border-neutral-400/70 bg-white text-left shadow-sm transition-transform hover:-translate-y-1 ${
                    index > 0 ? "hidden sm:block" : ""
                  }`}
                >
                  <span className="relative block aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src={item.thumb}
                      alt=""
                      fill
                      sizes="(max-width: 639px) 136px, (max-width: 1222px) 18vw, 220px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block border-t border-neutral-300 px-2 py-1.5 font-sans">
                    <span className="flex min-h-5 items-start justify-between gap-1">
                      <span className="line-clamp-2 text-[9px] leading-tight tracking-tight text-[#090909] group-hover:text-[#f60c09] sm:text-[10px]">
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-[#f60c09]"
                      />
                    </span>
                    <span className="mt-1 flex items-center justify-between gap-1 border-t border-neutral-200 pt-1 font-mono text-[6px] text-neutral-400 sm:text-[7px]">
                      <span className="truncate">{item.category}</span>
                      <span className="shrink-0">{item.year}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((index) => (index + 1) % GALLERY_ITEMS.length)}
              aria-label="Next gallery projects"
              className="absolute right-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#090909] shadow-sm transition-colors hover:bg-white sm:-right-3"
            >
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Choose gallery slide" className="mt-8 flex justify-center">
            <div className="flex max-w-full flex-wrap items-center justify-center gap-px">
              {GALLERY_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show gallery slide ${index + 1}: ${item.title}`}
                  aria-pressed={activeIndex === index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-[#f60c09]"
                      : "border border-neutral-400 bg-transparent hover:bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          </nav>
        </div>
      </section>

      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border border-[#e5e5e5] rounded overflow-hidden flex flex-col shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#f5f5f5]">
              <Image
                src={selectedCard.main || selectedCard.thumb}
                alt={selectedCard.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-6 font-sans border-t border-[#ebebeb] flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{selectedCard.category}</span>
                <span>{selectedCard.year}</span>
              </div>
              <h2 className="font-teka text-2xl sm:text-3xl text-[#090909] uppercase tracking-tight">
                {selectedCard.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <CollaborationCTA
        headline="They didn’t just see the future, they build it. Now, it’s your move."
        linkText="Start creating today"
        headlineClassName="max-w-[280px] font-serif text-3xl font-normal leading-[1.05] tracking-[-0.03em]"
        linkTextClassName="font-sans text-[10px] text-[#090909] transition-colors hover:text-[#f60c09] sm:text-xs"
        sectionClassName="relative w-full overflow-hidden border-b border-[#ebebeb] bg-white pt-10 pb-8"
        sphereWrapperClassName="relative mt-8 mb-2"
        sphereClassName="cta-sphere group relative flex h-28 w-28 cursor-pointer items-center justify-center rounded-full sm:h-[7.5rem] sm:w-[7.5rem]"
      />
    </div>
  );
}

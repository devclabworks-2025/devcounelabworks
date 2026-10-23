"use client";

import React, { useState } from "react";
import Image from "next/image";
import PixelDitherBg from "@/components/common/PixelDitherBg";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import { GALLERY_ITEMS, GalleryCard } from "@/data/gallery";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);

  return (
    <div className="relative w-full">
      <PixelDitherBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-[#1c1c1c] pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ ARCHIVE ]
          </span>

          <h1 className="font-teka text-5xl sm:text-7xl text-white uppercase tracking-tight font-light">
            Gallery
          </h1>

          <p className="font-serif italic text-2xl text-neutral-300">
            Curated past works.
          </p>
        </div>

        {/* 22-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="group cursor-pointer rounded overflow-hidden border border-[#1f1f1f] bg-[#0c0c0c] hover:border-neutral-500 transition-all flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col gap-1.5 font-mono">
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="truncate pr-2">{item.category}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="text-white text-xs font-semibold tracking-wide group-hover:text-neutral-200 transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedCard && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-neutral-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
                <Image
                  src={selectedCard.main || selectedCard.thumb}
                  alt={selectedCard.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6 font-mono border-t border-[#222222] flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>{selectedCard.category}</span>
                  <span>{selectedCard.year}</span>
                </div>
                <h2 className="font-teka text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {selectedCard.title}
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <CollaborationCTA
          title="They didn't just see the future, they build it."
          subtitle="Now, it's your move."
          buttonText="LETS CREATE"
        />
      </div>
    </div>
  );
}

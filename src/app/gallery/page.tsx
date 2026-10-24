"use client";

import React, { useState } from "react";
import Image from "next/image";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import { GALLERY_ITEMS, GalleryCard } from "@/data/gallery";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);

  return (
    <div className="relative w-full bg-white text-[#090909] pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-[#ebebeb] pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ ARCHIVE ]
          </span>

          <h1 className="font-teka text-5xl sm:text-7xl text-[#090909] uppercase tracking-tight font-light">
            Gallery
          </h1>

          <p className="font-serif italic text-2xl text-neutral-600">
            Curated past works.
          </p>
        </div>

        {/* 22-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="group cursor-pointer overflow-hidden border border-[#e5e5e5] bg-white hover:border-[#090909] transition-all flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col gap-1.5 font-sans">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="truncate pr-2">{item.category}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="text-[#090909] text-xs font-semibold tracking-tight group-hover:text-[#f60c09] transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedCard && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white border border-[#e5e5e5] rounded overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
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

        {/* Closing CTA */}
        <CollaborationCTA />
      </div>
    </div>
  );
}

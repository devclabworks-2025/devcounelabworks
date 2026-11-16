"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CineRevealCarouselProps {
  slides: CarouselSlide[];
}

export default function CineRevealCarousel({ slides }: CineRevealCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 overflow-hidden rounded-lg border border-[#222222] bg-[#0c0c0c] shadow-2xl">
      {/* Visual Canvas Area */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              idx === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 pointer-events-none z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt || `Slide ${idx + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Top Slide Meta Badge */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-[#2a2a2a] font-mono text-[11px] text-neutral-300">
        Slide {currentIndex + 1} of {slides.length}
      </div>

      {/* Controls Overlay */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-neutral-800">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white w-6"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

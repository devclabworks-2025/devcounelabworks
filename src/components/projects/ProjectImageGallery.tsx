"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  src?: string;
  alt: string;
};

interface ProjectImageGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export default function ProjectImageGallery({
  images,
  projectName,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryImages: GalleryImage[] =
    images.length > 0
      ? images
      : [
          { alt: `${projectName} image 1 asset coming soon` },
          { alt: `${projectName} image 2 asset coming soon` },
        ];
  const previous = () =>
    setActiveIndex((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1
    );
  const next = () =>
    setActiveIndex((index) =>
      index === galleryImages.length - 1 ? 0 : index + 1
    );
  const activeImage = galleryImages[activeIndex];

  return (
    <div
      aria-label={`${projectName} project images`}
      className="relative aspect-[1.1] w-full overflow-hidden bg-neutral-100"
    >
      {activeImage.src ? (
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          unoptimized
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 680px"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={activeImage.alt}
          className="absolute inset-0 flex items-center justify-center border border-[#f60c09] bg-[#f7f7f7]"
        >
          <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
            Image {activeIndex + 1}
            <br />
            Asset coming soon
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={previous}
        aria-label="Previous project image"
        className="absolute left-6 top-1/2 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next project image"
        className="absolute right-6 top-1/2 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {galleryImages.map((image, index) => (
          <button
            key={image.src ?? image.alt}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show project image ${index + 1}`}
            aria-current={index === activeIndex}
            className={`size-[9px] rounded-full transition-opacity ${
              index === activeIndex
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

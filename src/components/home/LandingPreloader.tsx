"use client";

import { useEffect, useState } from "react";
import useResponsiveVideoSource from "@/components/home/useResponsiveVideoSource";

const PRELOADER_DURATION_MS = 6000;
const INTRO_VIDEO_DESKTOP_URL = "/assets/videos/CLW_LogoReveal_4-4.mp4";
const INTRO_VIDEO_MOBILE_URL = "/assets/videos/Main_Comp_Phone.mp4";

const SCROLL_KEYS = new Set([
  "Space",
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
]);

export default function LandingPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const introVideoSrc = useResponsiveVideoSource(
    INTRO_VIDEO_DESKTOP_URL,
    INTRO_VIDEO_MOBILE_URL,
  );

  useEffect(() => {
    if (!isVisible) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const preventScrollKeys = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.code)) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", preventScrollKeys, { passive: false });

    const timer = window.setTimeout(
      () => setIsVisible(false),
      PRELOADER_DURATION_MS,
    );

    return () => {
      window.clearTimeout(timer);
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] h-[100dvh] w-full overflow-hidden bg-black"
      aria-hidden="true"
      onWheel={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onTouchMove={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onContextMenu={(event) => event.preventDefault()}
      style={{ touchAction: "none" }}
    >
      {introVideoSrc && (
        <video
          key={introVideoSrc}
          className="h-full w-full object-cover"
          src={introVideoSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          onError={(event) => {
            console.error(
              "Unable to load the landing intro video.",
              event.currentTarget.error,
            );
            setIsVisible(false);
          }}
        />
      )}
    </div>
  );
}

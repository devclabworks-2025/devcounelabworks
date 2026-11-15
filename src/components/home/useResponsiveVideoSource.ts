import { useEffect, useState } from "react";

export default function useResponsiveVideoSource(
  desktopSrc: string,
  mobileSrc: string,
) {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateSource = () => {
      setSrc(mediaQuery.matches ? mobileSrc : desktopSrc);
    };

    updateSource();
    mediaQuery.addEventListener("change", updateSource);

    return () => mediaQuery.removeEventListener("change", updateSource);
  }, [desktopSrc, mobileSrc]);

  return src;
}

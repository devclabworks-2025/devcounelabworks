"use client";

import React, { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  characters?: string;
  speed?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?~";

export default function ScrambleText({
  text,
  className = "",
  characters = DEFAULT_CHARS,
  speed = 40,
  delay = 0,
  as: Component = "span",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let iteration = 0;
          const totalLength = text.length;

          const timeout = setTimeout(() => {
            const interval = setInterval(() => {
              setDisplayText(
                text
                  .split("")
                  .map((letter, index) => {
                    if (letter === " " || letter === "\n") return letter;
                    if (index < iteration) return text[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                  })
                  .join("")
              );

              if (iteration >= totalLength) {
                clearInterval(interval);
              }
              iteration += 1 / 2;
            }, speed);

            return () => clearInterval(interval);
          }, delay * 1000);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text, characters, speed, delay]);

  return React.createElement(
    Component,
    { ref: elementRef, className },
    displayText
  );
}

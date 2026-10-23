"use client";

import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
  innerClassName?: string;
}

export default function RollingText({
  text,
  className = "",
  innerClassName = "",
}: RollingTextProps) {
  return (
    <span className={`inline-block overflow-hidden h-[1.3em] align-top group ${className}`}>
      <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
        <span className={`block h-[1.3em] leading-[1.3em] ${innerClassName}`}>{text}</span>
        <span className={`block h-[1.3em] leading-[1.3em] opacity-80 ${innerClassName}`}>{text}</span>
      </span>
    </span>
  );
}

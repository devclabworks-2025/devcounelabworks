"use client";

import React from "react";

export default function PixelDitherBg() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
}

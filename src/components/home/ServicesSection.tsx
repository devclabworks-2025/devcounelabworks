"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

const PORTFOLIO_URL =
  "https://docs.google.com/presentation/d/e/2PACX-1vTIHbopaXAvpcHNj6a1yTfjRNU68swgAjfye1PTfVg9nd-3hFZCVfef3azOGEc__u1DdfxEzCto2EWT/pub?start=false&loop=false&delayms=60000&slide=id.g1c1457de5f13d530_138";
const MODEL_VIEWER_SCRIPT =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
const MASCOT_MODEL_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/Mainpage/disk%20mascot%2090deg%20transp%203%20(1).glb";
const MODEL_ENVIRONMENT_URL =
  "https://kbolczifieutsqbpnaxi.supabase.co/storage/v1/object/public/CLW%20Asset/Mainpage/white_studio_06_1k.hdr";

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 px-4 sm:px-8 border-b border-[#ebebeb] overflow-hidden">
      <div className="max-w-[1400px] mx-auto min-h-[600px] sm:min-h-[700px] flex flex-col justify-between relative">
        {/* Top Row: Service 1 (Left) & Service 2 (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start z-10">
          {/* Top Left: Interactive Brand Experience */}
          <div className="flex flex-col items-start max-w-sm">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#090909] leading-tight">
              Interactive
              <br />
              Brand Experience
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 mt-3 leading-relaxed">
              Elevate your brand. Stand out from the rest.
            </p>
          </div>

          {/* Top Right: Concept Prototyping */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm md:ml-auto">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#090909] leading-tight">
              Concept
              <br />
              Prototyping
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 mt-3 leading-relaxed">
              Digital vision meets physical precision.
            </p>
          </div>
        </div>

        {/* Center Floating 3D Floppy Disk Mascot & Portfolio Button */}
        <div className="my-12 sm:my-8 flex flex-col items-center justify-center z-10 pointer-events-auto">
          {/* Animated 3D Disk Mascot */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <model-viewer
              src={MASCOT_MODEL_URL}
              alt="Rotating Coune LabWorks disk mascot"
              auto-rotate
              rotation-per-second="60deg"
              camera-controls
              disable-zoom
              disable-tap
              touch-action="none"
              exposure={1.8}
              environment-image={MODEL_ENVIRONMENT_URL}
              shadow-intensity={0}
              tone-mapping="commerce"
              scale="0.3 0.3 0.3"
              field-of-view="16deg"
              camera-target="0m 0m 0m"
              style={{
                width: "100%",
                height: "100%",
                touchAction: "none",
                background: "transparent",
              }}
            />
          </div>

          {/* Open Portfolio Button */}
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-3 px-6 py-2.5 border border-[#111111] bg-white text-[#090909] hover:bg-[#090909] hover:text-white transition-all duration-300 shadow-sm"
          >
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
              o p e n &nbsp; p o r t f o l i o
            </span>
            <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </a>
        </div>

        {/* Bottom Row: Service 3 (Left) & Service 4 (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-end z-10">
          {/* Bottom Left: Art Installation */}
          <div className="flex flex-col items-start max-w-sm">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#090909] leading-tight">
              Art
              <br />
              Installation
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 mt-3 leading-relaxed">
              The manifestation of nuance and wonder.
            </p>
          </div>

          {/* Bottom Right: Software & Hardware Development */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm md:ml-auto">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#090909] leading-tight">
              Software &amp; Hardware
              <br />
              Development
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 mt-3 leading-relaxed">
              From code to circuitry. Navigate and build.
            </p>
          </div>
        </div>
      </div>
      <Script
        src={MODEL_VIEWER_SCRIPT}
        type="module"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onError={() =>
          console.error("Unable to load the model-viewer runtime.")
        }
      />
    </section>
  );
}

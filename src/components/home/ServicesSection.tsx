"use client";

import React from "react";
import Script from "next/script";

const PORTFOLIO_URL =
  "https://docs.google.com/presentation/d/e/2PACX-1vTIHbopaXAvpcHNj6a1yTfjRNU68swgAjfye1PTfVg9nd-3hFZCVfef3azOGEc__u1DdfxEzCto2EWT/pub?start=false&loop=false&delayms=60000&slide=id.g1c1457de5f13d530_138";
const MODEL_VIEWER_SCRIPT =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
const MASCOT_MODEL_URL =
  "/assets/models/disk-mascot.glb";
const MODEL_ENVIRONMENT_URL =
  "/assets/models/studio-environment.hdr";

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 px-4 sm:px-8 border-b border-[#ebebeb] overflow-hidden lg:h-[810px] lg:min-h-[810px] lg:py-0">
      <div className="max-w-[1400px] mx-auto min-h-[600px] sm:min-h-[700px] flex flex-col justify-between relative lg:h-full lg:min-h-0 lg:block">
        {/* Top Row: Service 1 (Left) & Service 2 (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start z-10 lg:absolute lg:inset-x-0 lg:top-[10.5%]">
          {/* Top Left: Interactive Brand Experience */}
          <div className="flex flex-col items-start text-left md:items-end md:text-right max-w-sm lg:-translate-x-[22px]">
            <span className="text-base font-sans font-semibold tracking-normal text-[#222222] mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-sans font-normal text-4xl sm:text-[44px] md:text-[44px] lg:text-[43.5px] tracking-[-0.06em] text-[#222222] leading-[1]">
              Interactive
              <br />
              Brand Experience
            </h3>
            <p className="font-sans text-sm text-neutral-500 mt-3 leading-relaxed">
              Elevate your brand. Stand out from the rest.
            </p>
          </div>

          {/* Top Right: Art Installation */}
          <div className="flex w-full flex-col items-start text-left max-w-sm md:ml-auto lg:translate-x-[29px]">
            <span className="text-base font-sans font-semibold tracking-normal text-[#222222] mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-sans font-normal text-4xl sm:text-[44px] md:text-[44px] lg:text-[43.5px] tracking-[-0.06em] text-[#222222] leading-[1]">
              Art
              <br />
              Installation
            </h3>
            <p className="font-sans text-sm text-neutral-500 mt-3 leading-relaxed">
              The manifestation of nuance and wonder.
            </p>
          </div>
        </div>

        {/* Center Floating 3D Floppy Disk Mascot & Portfolio Button */}
        <div className="my-12 sm:my-8 flex flex-col items-center justify-center z-10 pointer-events-auto lg:absolute lg:inset-0 lg:my-0 lg:block lg:pointer-events-none">
          {/* Animated 3D Disk Mascot */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center lg:absolute lg:left-1/2 lg:top-[19%] lg:h-80 lg:w-80 lg:-translate-x-1/2 lg:pointer-events-auto">
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
            className="portfolio-link mt-4 inline-flex flex-col items-center text-[#222222] lg:absolute lg:left-1/2 lg:top-[77.5%] lg:mt-0 lg:-translate-x-1/2 lg:whitespace-nowrap lg:pointer-events-auto"
          >
            <span className="portfolio-link__label font-serif text-xl sm:text-2xl tracking-[0.225em]">
              o p e n &nbsp; p o r t f o l i o
            </span>
          </a>
        </div>

        {/* Bottom Row: Service 3 (Left) & Service 4 (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-end z-10 lg:absolute lg:inset-x-0 lg:top-[66.3%] lg:items-start lg:pointer-events-none">
          {/* Bottom Left: Concept Prototyping */}
          <div className="flex flex-col items-start text-left md:items-end md:text-right max-w-sm lg:-translate-x-[22px]">
            <span className="text-base font-sans font-semibold tracking-normal text-[#222222] mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-sans font-normal text-4xl sm:text-[44px] md:text-[44px] lg:text-[43.5px] tracking-[-0.06em] text-[#222222] leading-[1]">
              Concept
              <br />
              Prototyping
            </h3>
            <p className="font-sans text-sm text-neutral-500 mt-3 leading-relaxed">
              Digital vision meets physical precision.
            </p>
          </div>

          {/* Bottom Right: Software & Hardware Development */}
          <div className="flex w-full flex-col items-start text-left max-w-sm md:ml-auto lg:translate-x-[29px]">
            <span className="text-base font-sans font-semibold tracking-normal text-[#222222] mb-2">
              [OUR WORK]
            </span>
            <h3 className="font-sans font-normal text-4xl sm:text-[44px] md:text-[44px] lg:text-[43.5px] tracking-[-0.06em] text-[#222222] leading-[1] lg:whitespace-nowrap">
              Software &amp; Hardware
              <br />
              Development
            </h3>
            <p className="font-sans text-sm text-neutral-500 mt-3 leading-relaxed">
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
      <style jsx>{`
        .portfolio-link__label {
          border-bottom: 2px solid transparent;
          transition: border-color 300ms ease;
        }

        .portfolio-link:hover .portfolio-link__label,
        .portfolio-link:focus-visible .portfolio-link__label {
          border-bottom-color: #f60c09;
        }
      `}</style>
    </section>
  );
}

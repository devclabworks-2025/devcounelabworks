"use client";

import React from "react";
import Link from "next/link";
import RollingText from "@/components/common/RollingText";

const SERVICES = [
  {
    number: "01",
    title: "Interactive Brand Experience",
    description: "Elevate your brand. Stand out from the rest.",
    details: "Immersive retail showcases, kinetic flagship installations, and responsive sensory environments that convert passive onlookers into active participants.",
  },
  {
    number: "02",
    title: "Concept Prototyping",
    description: "Digital vision meets physical precision.",
    details: "Rapid iteration across firmware, sensor design, and physical computing to validate unprecedented interactive mechanics before full-scale manufacturing.",
  },
  {
    number: "03",
    title: "Art Installation",
    description: "The manifestation of nuance and wonder.",
    details: "Large-scale sculptural and motorized systems engineered in partnership with world-renowned artists, galleries, museums, and public spaces.",
  },
  {
    number: "04",
    title: "Software & Hardware Development",
    description: "From code to circuitry. Navigate and build.",
    details: "Custom low-level microcontrollers, computer vision, audio-reactive engines, and cloud telemetry woven seamlessly into physical architecture.",
  },
];

export const GOOGLE_PORTFOLIO_URL =
  "https://docs.google.com/presentation/d/e/2PACX-1vTIHbopaXAvpcHNj6a1yTfjRNU68swgAjfye1PTfVg9nd-3hFZCVfef3azOGEc__u1DdfxEzCto2EWT/pub?start=false&loop=false&delayms=60000&slide=id.g1c1457de5f13d530_138";

export default function ServicesSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 border-b border-[#181818] bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#1f1f1f] pb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
              [OUR WORK]
            </span>
            <h2 className="font-teka text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Disciplines & Capabilities
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={GOOGLE_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider rounded transition-colors"
            >
              open portfolio ↗
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((s) => (
            <div
              key={s.number}
              className="p-8 rounded border border-[#1e1e1e] bg-[#080808] hover:border-neutral-500 transition-colors flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-neutral-500">{s.number}</span>
                <h3 className="font-teka text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="font-serif italic text-lg text-neutral-300">
                  {s.description}
                </p>
              </div>

              <p className="font-mono text-xs text-neutral-400 leading-relaxed pt-4 border-t border-[#181818]">
                {s.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

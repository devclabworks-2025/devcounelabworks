import React from "react";
import { ProjectDetail } from "@/data/projects";
import CineRevealCarousel from "./CineRevealCarousel";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailHeroProps {
  project: ProjectDetail;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <article className="w-full pt-10 pb-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Works
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="flex flex-col gap-4 border-b border-[#1c1c1c] pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
            <span className="px-2.5 py-1 rounded bg-[#141414] border border-[#242424] text-neutral-300">
              {project.category}
            </span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-teka text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-light">
            {project.title}
          </h1>
        </div>

        {/* Narrative & Case Study Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-4">
          <div className="lg:col-span-5">
            <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-neutral-200 leading-snug">
              {project.headline}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {project.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Cinema Carousel */}
        <CineRevealCarousel slides={project.slides} />

        {/* Project Specific Collaboration CTA */}
        <CollaborationCTA
          title="We believe in your idea. Start standing out from the rest."
          subtitle="Realize your wild creative side, and start working hand-in-hand with us."
          buttonText="LETS CREATE"
        />
      </div>
    </article>
  );
}

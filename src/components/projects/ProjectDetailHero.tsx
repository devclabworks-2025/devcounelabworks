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
    <article className="w-full bg-white text-[#090909] pt-24 sm:pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 hover:text-[#f60c09] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Works
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="flex flex-col gap-4 border-b border-[#ebebeb] pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
            <span className="px-2.5 py-1 bg-[#f5f5f5] border border-[#e5e5e5] text-neutral-700 uppercase tracking-wider">
              {project.category}
            </span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-teka text-4xl sm:text-6xl md:text-7xl text-[#090909] uppercase tracking-tight font-light">
            {project.title}
          </h1>
        </div>

        {/* Narrative & Case Study Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-4">
          <div className="lg:col-span-5">
            <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#090909] leading-snug">
              {project.headline}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {project.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Cinema Carousel */}
        <CineRevealCarousel slides={project.slides} />

        {/* Project Specific Collaboration CTA */}
        <CollaborationCTA />
      </div>
    </article>
  );
}

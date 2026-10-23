"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "@/data/projects";
import RollingText from "@/components/common/RollingText";

function ProjectCard({ project }: { project: ShowcaseProject }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <div
      className="group relative flex flex-col gap-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Canvas Container */}
      <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-[#0d0d0d] border border-[#202020] transition-colors duration-300 group-hover:border-neutral-500">
        {/* Default Image (Image 1) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={project.image1}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={project.id === "dialogue" || project.id === "piled"}
          />
        </div>

        {/* Hover Image (Image 2) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={project.image2}
            alt={`${project.title} hover state`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Floating Detail Indicator if link exists */}
        {project.href && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-mono tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity">
            EXPLORE ↗
          </div>
        )}
      </div>

      {/* Meta Bar */}
      <div className="flex items-baseline justify-between font-mono text-xs text-neutral-300 pt-1">
        <span className="font-medium tracking-wide group-hover:text-white transition-colors">
          {project.title}
        </span>
        <span className="text-neutral-500 text-[11px] font-mono">
          {project.year}
        </span>
      </div>
    </div>
  );

  if (project.href) {
    return <Link href={project.href}>{cardContent}</Link>;
  }

  return <div>{cardContent}</div>;
}

export default function ProjectGrid() {
  return (
    <section id="work" className="w-full py-20 px-4 sm:px-8 border-b border-[#181818]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f1f] pb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
              [ PORTFOLIO ]
            </span>
            <h2 className="font-teka text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Featured Collaborations
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            Selected works & installations
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

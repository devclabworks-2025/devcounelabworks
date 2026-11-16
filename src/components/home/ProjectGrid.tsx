"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "@/data/projects";

function ProjectCard({ project }: { project: ShowcaseProject }) {
  const [isHovered, setIsHovered] = useState(false);

  const card = (
    <div
      className="group flex flex-col gap-1 w-full cursor-pointer mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        className="relative w-full overflow-hidden bg-[#f0f0f0]"
        style={{ aspectRatio: `${project.imageWidth} / ${project.imageHeight}` }}
      >
        {/* Main Image */}
        <Image
          src={project.image1}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isHovered && project.image2 ? "opacity-0" : "opacity-100"
          }`}
          priority={project.id === "dialogue"}
        />

        {/* Hover Image */}
        {project.image2 && (
          <Image
            src={project.image2}
            alt={`${project.title} detail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

      </div>

      {/* Project Title */}
      <div className="px-1 py-1">
        <h3 className="font-sans font-medium text-[10px] leading-tight tracking-[-0.05em] uppercase text-[#090909] group-hover:text-[#f60c09] transition-colors">
          {project.title}
        </h3>
        <p className="font-sans text-[10px] leading-tight tracking-[-0.05em] text-[#090909]">
          {project.year}
        </p>
      </div>
    </div>
  );

  if (project.href) {
    return <Link href={project.href} className="block w-full">{card}</Link>;
  }

  return card;
}

export default function ProjectGrid() {
  // Stack 1: DIA LO GUE, PILED, OPPO
  const stack1 = SHOWCASE_PROJECTS.filter((p) =>
    ["dialogue", "piled", "oppo"].includes(p.id)
  );

  // Stack 2: ROH, JAVA JAZZ, SEN MATCHA
  const stack2 = SHOWCASE_PROJECTS.filter((p) =>
    ["roh", "javajazz", "senmatcha"].includes(p.id)
  );

  // Stack 3: WARDAH, GAIA, ESPLANADE
  const stack3 = SHOWCASE_PROJECTS.filter((p) =>
    ["wardah", "gaia", "esplanade"].includes(p.id)
  );

  return (
    <section id="work" className="w-full bg-white pt-2 pb-0 px-0 border-b border-[#ebebeb]">
      <div className="w-full">
        {/* 3-Column Asymmetric Grid matching Framer stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
          {/* Column 1 / Stack 1 */}
          <div className="flex flex-col w-full">
            {stack1.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Column 2 / Stack 2 */}
          <div className="flex flex-col w-full">
            {stack2.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Column 3 / Stack 3 */}
          <div className="flex flex-col w-full">
            {stack3.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

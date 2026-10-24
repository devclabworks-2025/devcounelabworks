import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";

export const metadata: Metadata = {
  title: "Museum Nasional — 30m² Floor Projection Mapping",
  description:
    "Interactive courtyard floor projection mapping at Museum Nasional Indonesia by Coune LabWorks.",
};

export default function MuseumNasionalPage() {
  const project = PROJECT_DETAILS.musiumnasional;
  return (
    <div className="relative w-full bg-white">
      <ProjectDetailHero project={project} />
    </div>
  );
}

import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";

export const metadata: Metadata = {
  title: "Wardah — Light Tunnel as Event Beacon",
  description:
    "Curved LED matrix light tunnel interactive installation at Senayan City by Coune LabWorks.",
};

export default function WardahPage() {
  const project = PROJECT_DETAILS.wardah;
  return (
    <div className="relative w-full bg-white">
      <ProjectDetailHero project={project} />
    </div>
  );
}

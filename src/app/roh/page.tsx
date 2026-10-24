import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";

export const metadata: Metadata = {
  title: "ROH — Bagus Pandega Art Installation",
  description:
    "Kinetic art installation collaboration with Bagus Pandega touring Jakarta, Singapore, and New York.",
};

export default function RohPage() {
  const project = PROJECT_DETAILS.roh;
  return (
    <div className="relative w-full bg-white">
      <ProjectDetailHero project={project} />
    </div>
  );
}

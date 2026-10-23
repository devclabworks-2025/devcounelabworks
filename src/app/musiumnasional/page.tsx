import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import PixelDitherBg from "@/components/common/PixelDitherBg";

export const metadata: Metadata = {
  title: "Museum Nasional — 30m² Floor Projection Mapping",
  description:
    "30-square-meter interactive courtyard floor projection installation at Museum Nasional Indonesia by Coune LabWorks.",
};

export default function MusiumNasionalPage() {
  const project = PROJECT_DETAILS.musiumnasional;
  return (
    <div className="relative w-full">
      <PixelDitherBg />
      <ProjectDetailHero project={project} />
    </div>
  );
}

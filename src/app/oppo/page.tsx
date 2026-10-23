import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import PixelDitherBg from "@/components/common/PixelDitherBg";

export const metadata: Metadata = {
  title: "OPPO — 1000+ Lights Controlled by Phone",
  description:
    "High-density 1,000-LED interactive light installation at Gandaria City for OPPO by Coune LabWorks.",
};

export default function OppoPage() {
  const project = PROJECT_DETAILS.oppo;
  return (
    <div className="relative w-full">
      <PixelDitherBg />
      <ProjectDetailHero project={project} />
    </div>
  );
}

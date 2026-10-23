import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import PixelDitherBg from "@/components/common/PixelDitherBg";

export const metadata: Metadata = {
  title: "ROH — Bagus Pandega Art Installation",
  description:
    "Engineering kinetic machinery and electronic control systems across Jakarta, Singapore, and New York for Bagus Pandega by Coune LabWorks.",
};

export default function RohPage() {
  const project = PROJECT_DETAILS.roh;
  return (
    <div className="relative w-full">
      <PixelDitherBg />
      <ProjectDetailHero project={project} />
    </div>
  );
}

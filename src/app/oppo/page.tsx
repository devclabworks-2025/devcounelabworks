import React from "react";
import { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "OPPO — 1000+ Lights Controlled by Phone",
  description:
    "High-density 1,000-LED interactive light installation at Gandaria City for OPPO by Coune LabWorks.",
};

export default function OppoPage() {
  return <ProjectDetailPage project={PROJECT_DETAILS.oppo} brand="OPPO" />;
}

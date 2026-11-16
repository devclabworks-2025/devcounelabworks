import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Esplanade — Art Installation",
};

export default function EsplanadePage() {
  return (
    <ProjectDetailPage
      project={PROJECT_DETAILS.esplanade}
      brand="ESPLANADE"
    />
  );
}

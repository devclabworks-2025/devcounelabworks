import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Gaia Hotel — Art Installation",
};

export default function GaiaPage() {
  return <ProjectDetailPage project={PROJECT_DETAILS.gaia} brand="GAIA" />;
}

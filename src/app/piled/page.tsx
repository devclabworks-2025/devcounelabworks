import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Piled — Interactive Art Installation",
};

export default function PiledPage() {
  return <ProjectDetailPage project={PROJECT_DETAILS.piled} brand="PILED" />;
}

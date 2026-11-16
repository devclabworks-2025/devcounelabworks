import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "DIA LO GUE — Exhibition",
};

export default function DialoguePage() {
  return (
    <ProjectDetailPage project={PROJECT_DETAILS.dialogue} brand="DIA LO GUE" />
  );
}

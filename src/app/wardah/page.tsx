import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Wardah — Light Tunnel as Event Beacon",
  description:
    "Curved LED matrix light tunnel interactive installation at Senayan City by Coune LabWorks.",
};

export default function WardahPage() {
  return (
    <ProjectDetailPage project={PROJECT_DETAILS.wardah} brand="WARDAH" />
  );
}

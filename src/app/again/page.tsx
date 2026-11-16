import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Again Coffee & Sound — Sen Matcha Robot",
};

export default function AgainPage() {
  return <ProjectDetailPage project={PROJECT_DETAILS.again} brand="AGAIN" />;
}

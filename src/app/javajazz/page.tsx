import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Java Jazz — Brand Activation",
};

export default function JavaJazzPage() {
  return (
    <ProjectDetailPage project={PROJECT_DETAILS.javajazz} brand="JAVA JAZZ" />
  );
}

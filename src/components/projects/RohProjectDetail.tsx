import { ProjectDetail } from "@/data/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function RohProjectDetail({
  project,
}: {
  project: ProjectDetail;
}) {
  return <ProjectDetailPage project={project} brand="ROH" />;
}

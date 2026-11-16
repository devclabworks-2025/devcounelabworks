import type { Metadata } from "next";
import { PROJECT_DETAILS } from "@/data/projects";
import RohProjectDetail from "@/components/projects/RohProjectDetail";

export const metadata: Metadata = {
  title: "ROH — Bagus Pandega Art Installation",
  description:
    "Kinetic art installation collaboration with Bagus Pandega touring Jakarta, Singapore, and New York.",
};

export default function RohPage() {
  return <RohProjectDetail project={PROJECT_DETAILS.roh} />;
}

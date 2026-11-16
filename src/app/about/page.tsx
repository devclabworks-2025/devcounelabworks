import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About — Coune LabWorks",
  description:
    "The cooperative one. Coune LabWorks is a creative technology laboratory blending design, motion, and code into bold responsive environments.",
};

export default function AboutPage() {
  return <AboutPageView />;
}

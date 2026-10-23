import React from "react";
import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/home/ProjectGrid";
import ServicesSection from "@/components/home/ServicesSection";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import PixelDitherBg from "@/components/common/PixelDitherBg";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <PixelDitherBg />
      <Hero />
      <ProjectGrid />
      <ServicesSection />
      <CollaborationCTA />
    </div>
  );
}

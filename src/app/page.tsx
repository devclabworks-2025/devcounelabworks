import React from "react";
import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/home/ProjectGrid";
import ClientLogos from "@/components/home/ClientLogos";
import ServicesSection from "@/components/home/ServicesSection";
import CollaborationCTA from "@/components/home/CollaborationCTA";

export default function HomePage() {
  return (
    <div className="relative w-full bg-white">
      <Hero />
      <ProjectGrid />
      <ClientLogos />
      <ServicesSection />
      <CollaborationCTA />
    </div>
  );
}

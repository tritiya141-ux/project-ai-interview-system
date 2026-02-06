import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  FileText,
  Cpu,
  Target,
  Calendar,
  BarChart3,
} from "lucide-react";

const features = [
  {
    Icon: FileText,
    name: "Smart JD Parsing",
    description: "Automatically extracts key requirements, skills, and qualifications from any job description with advanced NLP.",
    className: "md:col-span-2 md:row-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
    ),
  },
  {
    Icon: Cpu,
    name: "Auto-Question Generation",
    description: "AI-powered question creation tailored to the specific role and experience level.",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent" />
    ),
  },
  {
    Icon: Target,
    name: "Role-Specific Analysis",
    description: "Questions tailored to job categories - engineering, design, sales, and more.",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
    ),
  },
  {
    Icon: Calendar,
    name: "Interview Scheduling",
    description: "Plan and organize your hiring pipeline with integrated scheduling.",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent" />
    ),
  },
  {
    Icon: BarChart3,
    name: "Candidate Insights",
    description: "Track and compare responses across candidates with detailed analytics.",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
    ),
  },
];

export function FeatureShowcase() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.12)_0%,_transparent_60%)]" />
      
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight">
                Unleash the Power of{" "}
                <span className="gradient-text">AI Hiring</span>
              </span>
              <span className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Powerful features packed into one seamless experience. Scroll to explore.
              </span>
            </div>
          }
        >
          <BentoGrid className="md:grid-cols-3 md:auto-rows-[180px]">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </ContainerScroll>
      </div>
    </section>
  );
}

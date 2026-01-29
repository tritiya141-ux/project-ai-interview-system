import { motion } from "framer-motion";
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
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
    ),
  },
  {
    Icon: Cpu,
    name: "Auto-Question Generation",
    description: "AI-powered question creation tailored to the specific role, experience level, and industry requirements.",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
    ),
  },
  {
    Icon: Target,
    name: "Role-Specific Analysis",
    description: "Questions tailored to job categories - engineering, design, sales, marketing, and more.",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
    ),
  },
  {
    Icon: Calendar,
    name: "Interview Scheduling",
    description: "Plan and organize your hiring pipeline with integrated scheduling and candidate tracking.",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
    ),
  },
  {
    Icon: BarChart3,
    name: "Candidate Insights",
    description: "Track and compare responses across candidates with detailed analytics and scoring.",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your interview process and find the best candidates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="lg:grid-rows-2">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}

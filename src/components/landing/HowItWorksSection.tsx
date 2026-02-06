import { motion } from "framer-motion";
import { FileText, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Paste Job Description",
    description: "Simply paste your job description into our intelligent parser.",
  },
  {
    icon: Cpu,
    title: "AI Generates Questions",
    description: "Our AI analyzes the JD and creates tailored interview questions.",
  },
  {
    icon: CheckCircle,
    title: "Customize & Export",
    description: "Edit, reorder, and export your perfect question set.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative min-h-screen py-24 px-4 bg-secondary dark:bg-neutral-900 rounded-t-[2.5rem] shadow-2xl">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
            <span className="text-foreground">How It</span>{" "}
            <span className="text-muted-foreground/40">Works.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get interview-ready in three simple steps.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-accent/50" />
              )}

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card dark:bg-neutral-800 border border-border">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
                <step.icon className="relative h-10 w-10 text-primary" />
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

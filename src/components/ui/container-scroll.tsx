"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.4], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <div
      ref={containerRef}
      className="min-h-[120vh] flex flex-col items-center justify-start py-20 md:py-32 relative"
      style={{ perspective: "1200px" }}
    >
      {/* Title Section */}
      <motion.div
        style={{ opacity }}
        className="w-full max-w-5xl mx-auto text-center mb-12 md:mb-16 px-4"
      >
        {titleComponent}
      </motion.div>

      {/* 3D Container */}
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          translateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {/* Glow Effect Behind Container */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 rounded-3xl" />
        </div>

        {/* Main Container with Glass Effect */}
        <div className="relative rounded-3xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Top Bar - Browser-like Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-muted-foreground font-mono">
                hirehand.ai/features
              </div>
            </div>
            <div className="w-16" /> {/* Spacer for symmetry */}
          </div>

          {/* Content Area */}
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

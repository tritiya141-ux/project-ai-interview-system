import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  zIndex: number;
  isLast?: boolean;
}

export function StickySection({ children, className = "", zIndex, isLast = false }: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Scale down and dim when being covered by next section
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.4]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  return (
    <div 
      ref={sectionRef}
      className="sticky top-0 w-full"
      style={{ zIndex }}
    >
      <motion.div
        style={isLast ? {} : { 
          scale, 
          opacity,
          filter: brightness.get() < 1 ? `brightness(${brightness.get()})` : undefined
        }}
        className={`w-full origin-center ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  zIndex: number;
  isLast?: boolean;
}

function useParallaxTransform(value: MotionValue<number>, isLast: boolean) {
  const scale = useTransform(value, [0, 0.5, 1], [1, 1, 0.92]);
  const opacity = useTransform(value, [0, 0.6, 1], [1, 1, 0.4]);
  const y = useTransform(value, [0, 1], [0, -30]);
  
  if (isLast) {
    return { scale: 1, opacity: 1, y: 0 };
  }
  
  return { scale, opacity, y };
}

export function StickySection({ children, className = "", zIndex, isLast = false }: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const transforms = useParallaxTransform(scrollYProgress, isLast);

  return (
    <div 
      ref={sectionRef}
      className="sticky top-0 w-full will-change-transform"
      style={{ zIndex }}
    >
      <motion.div
        style={isLast ? {} : transforms}
        className={`w-full origin-top ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

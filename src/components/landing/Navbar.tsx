import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
          flex items-center justify-between rounded-full border shadow-lg
          ${isScrolled 
            ? "max-w-xl w-full py-2 px-4 md:px-6 bg-background/60 backdrop-blur-xl border-border/20" 
            : "max-w-3xl w-full py-3 px-6 md:px-8 bg-background/30 backdrop-blur-md border-border/10"
          }
        `}
      >
        {/* Left - Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div 
            layout
            className={`flex items-center justify-center rounded-lg gradient-primary ${isScrolled ? "h-7 w-7" : "h-8 w-8"}`}
          >
            <Sparkles className={`text-primary-foreground ${isScrolled ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
          </motion.div>
          <motion.span 
            layout
            className={`font-bold gradient-text hidden sm:block ${isScrolled ? "text-lg" : "text-xl"}`}
          >
            InterviewAI
          </motion.span>
        </Link>

        {/* Center - Navigation Links (Desktop) */}
        <motion.div 
          layout
          className="hidden md:flex items-center gap-6"
        >
          <a 
            href="#features" 
            className={`text-muted-foreground hover:text-foreground transition-colors ${isScrolled ? "text-xs" : "text-sm"}`}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className={`text-muted-foreground hover:text-foreground transition-colors ${isScrolled ? "text-xs" : "text-sm"}`}
          >
            Testimonials
          </a>
          <a 
            href="#how-it-works" 
            className={`text-muted-foreground hover:text-foreground transition-colors ${isScrolled ? "text-xs" : "text-sm"}`}
          >
            How It Works
          </a>
        </motion.div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link to="/login">
            <motion.div layout>
              <Button
                className={`rounded-full gradient-primary text-primary-foreground hover:opacity-90 ${
                  isScrolled ? "px-4 py-1 text-xs h-8" : "px-5 md:px-6 text-sm h-9"
                }`}
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}

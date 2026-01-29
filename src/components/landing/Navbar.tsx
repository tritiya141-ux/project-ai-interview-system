import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 rounded-full bg-card/60 backdrop-blur-xl border border-border/30 shadow-lg">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">InterviewAI</span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login">
            <Button
              className="rounded-full gradient-primary px-6 text-primary-foreground hover:opacity-90"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

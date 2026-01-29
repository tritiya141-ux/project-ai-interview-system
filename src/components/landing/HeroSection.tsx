import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import profileAlex from "@/assets/profile-alex.jpg";
import profileSarah from "@/assets/profile-sarah.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-20 bg-background">
      {/* Central gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-foreground">Connecting Top Talent</span>
              <br />
              <span className="text-foreground">with Leading</span>
              <br />
              <span className="text-foreground">Companies</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Streamline your hiring process. Find the perfect match for your team with our AI-powered platform. Verified skills, proven experience.
            </p>

            {/* Search Bar */}
            <div className="flex items-center gap-0 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for roles, skills, or candidates..."
                  className="h-14 pl-12 pr-4 rounded-l-full rounded-r-none border-r-0 bg-card/80 border-border/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary/50"
                />
              </div>
              <Link to="/login">
                <Button
                  className="h-14 px-6 rounded-l-none rounded-r-full bg-card border border-border/50 border-l-0 text-foreground hover:bg-muted font-semibold tracking-wide text-sm"
                >
                  FIND A DEVELOPER
                </Button>
              </Link>
            </div>

            {/* Trust Section */}
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">
                Trusted by <span className="text-foreground">50k+ users</span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`}
                    />
                  ))}
                </div>
                <span className="text-foreground font-semibold">4.1/5</span>
                <span className="text-muted-foreground">(14k Reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Images with Connecting Line */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center min-h-[500px]"
          >
            {/* Connecting Line SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
              <path
                d="M 200 120 L 200 180 L 260 300 L 200 380"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
              />
            </svg>

            {/* Top Profile - Alex Chen */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="text-right mb-3 self-start -ml-24">
                <p className="text-foreground font-semibold">Alex Chen</p>
                <p className="text-muted-foreground text-sm">Senior Architect</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-md scale-110" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 ring-2 ring-accent/20 ring-offset-4 ring-offset-background">
                  <img
                    src={profileAlex}
                    alt="Alex Chen - Senior Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Profile - Sarah Jenkins */}
            <div className="absolute bottom-8 right-12 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/50 to-primary/50 blur-md scale-110" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-accent/30 ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
                  <img
                    src={profileSarah}
                    alt="Sarah Jenkins - Talent Acquisition Lead"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="text-foreground font-semibold">Sarah Jenkins</p>
                <p className="text-muted-foreground text-sm">Talent Acquisition Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

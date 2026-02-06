import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
}: BentoCardProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="group relative h-full rounded-xl border border-border/50 bg-card p-px overflow-hidden">
        {/* Glowing Effect Layer */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        {/* Card Content */}
        <div className="relative h-full rounded-xl bg-card overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40">
            {background}
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {name}
                </h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
          
          {/* Hover gradient overlay */}
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-transparent" />
        </div>
      </div>
    </div>
  );
}

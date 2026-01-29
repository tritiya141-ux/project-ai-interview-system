import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "glass border border-border/50",
        "transform-gpu transition-all duration-300",
        "hover:border-primary/30 hover:glow-sm hover:scale-[1.02]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
        {background}
      </div>
      <div className="relative z-10 flex flex-col gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/5" />
    </div>
  );
}

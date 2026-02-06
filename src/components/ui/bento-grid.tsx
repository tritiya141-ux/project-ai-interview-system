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
        "grid w-full auto-rows-[180px] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3",
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
        "group relative flex flex-col justify-start overflow-hidden rounded-xl cursor-pointer",
        "bg-card/60 backdrop-blur-sm border border-white/10",
        "transform-gpu transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.25)]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50">
        {background}
      </div>
      <div className="relative z-10 flex flex-col gap-3 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{name}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-transparent" />
    </div>
  );
}

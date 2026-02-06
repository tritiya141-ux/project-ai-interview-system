import { motion } from "framer-motion";

const logos = [
  {
    name: "Microsoft",
    url: "https://res.cloudinary.com/dkgwi1xvx/image/upload/v1770376090/Microsoft_logo__2012.svg_tbmrhj.png",
  },
  {
    name: "Amazon",
    url: "https://res.cloudinary.com/dkgwi1xvx/image/upload/v1770376090/amazon-rebrand-2025_dezeen_2364_col_1-1-removebg-preview_z8ny5y.png",
  },
  {
    name: "Google",
    url: "https://res.cloudinary.com/dkgwi1xvx/image/upload/v1770376090/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.faa49ab5e1fff880-removebg-preview_rabrdp.png",
  },
];

// Repeat logos 6 times for smooth infinite loop
const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 mt-8">
      {/* Trust text */}
      <p className="text-center text-muted-foreground text-sm mb-8 font-display tracking-wider uppercase">
        Trusted by teams at
      </p>
      
      {/* Marquee container with fade edges */}
      <div 
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20,
          }}
        >
          {repeatedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center justify-center w-28 h-16 md:w-32 md:h-20 cursor-pointer"
            >
              {/* Logo Image */}
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-20 group-hover:scale-95 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0" 
              />
              {/* Company Name Reveal */}
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground font-semibold text-sm tracking-wider font-display">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

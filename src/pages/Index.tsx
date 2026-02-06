import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { Footer } from "@/components/landing/Footer";
import { StickySection } from "@/components/landing/StickySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Sticky Stacking Sections */}
        <StickySection zIndex={0}>
          <HeroSection />
        </StickySection>
        
        <StickySection zIndex={10}>
          <FeaturesSection />
        </StickySection>
        
        <StickySection zIndex={20} isLast>
          <TestimonialsSection />
        </StickySection>
        
        {/* Non-sticky sections */}
        <div className="relative z-30">
          <HowItWorksSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MacbookScrollDemo } from "@/components/landing/MacbookScrollDemo";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { Footer } from "@/components/landing/Footer";
import { StickySection } from "@/components/landing/StickySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <StickySection zIndex={0}>
          <HeroSection />
        </StickySection>
        
        {/* Macbook Scroll Feature Showcase */}
        <MacbookScrollDemo />
        
        {/* Testimonials */}
        <StickySection zIndex={20}>
          <TestimonialsSection />
        </StickySection>
        
        {/* How It Works */}
        <StickySection zIndex={30} isLast>
          <HowItWorksSection />
        </StickySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

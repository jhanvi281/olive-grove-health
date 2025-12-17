import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AIChatWidget from "@/components/widgets/AIChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DoctorsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;

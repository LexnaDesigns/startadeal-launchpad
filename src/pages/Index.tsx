import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { BreakthroughSection } from "@/components/BreakthroughSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <VideoSection />
      <BreakthroughSection />
      <HowItWorksSection />
      <SocialProofSection />
      <WhatYouGetSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

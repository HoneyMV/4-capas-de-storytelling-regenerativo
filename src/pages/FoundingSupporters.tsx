import { HeroSection } from "@/components/founding/HeroSection";
import { WhySection } from "@/components/founding/WhySection";
import { DifferentSection } from "@/components/founding/DifferentSection";
import { InvitationSection } from "@/components/founding/InvitationSection";
import { WhatItMeansSection } from "@/components/founding/WhatItMeansSection";
import { TiersSection } from "@/components/founding/TiersSection";
import { FundsSection } from "@/components/founding/FundsSection";
import { WhyNowSection } from "@/components/founding/WhyNowSection";
import { AboutSection } from "@/components/founding/AboutSection";
import { FinalCTASection } from "@/components/founding/FinalCTASection";
import { Footer } from "@/components/founding/Footer";

const FoundingSupporters = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <DifferentSection />
      <InvitationSection />
      <WhatItMeansSection />
      <TiersSection />
      <FundsSection />
      <WhyNowSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default FoundingSupporters;
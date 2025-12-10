import { HeroSection } from "@/components/crowdfunding/HeroSection";
import { WhyDifferentSection } from "@/components/crowdfunding/WhyDifferentSection";
import { ImpactSection } from "@/components/crowdfunding/ImpactSection";
import { CycleMapSection } from "@/components/crowdfunding/CycleMapSection";
import { PaymentOptionsSection } from "@/components/crowdfunding/PaymentOptionsSection";
import { RewardsSection } from "@/components/crowdfunding/RewardsSection";
import { BookExcerptSection } from "@/components/crowdfunding/BookExcerptSection";
import { AuthorSection } from "@/components/crowdfunding/AuthorSection";
import { FinalCTASection } from "@/components/crowdfunding/FinalCTASection";
import { Footer } from "@/components/crowdfunding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyDifferentSection />
      <ImpactSection />
      <CycleMapSection />
      <PaymentOptionsSection />
      <RewardsSection />
      <BookExcerptSection />
      <AuthorSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;

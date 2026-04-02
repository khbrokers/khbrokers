import { launchvectorHeroConfig } from "@/config/launchvector.config";
import { LaunchvectorHero } from "@/components/sections/launchvector/LaunchvectorHero";
import { LaunchvectorComparisonSection } from "@/components/sections/launchvector/LaunchvectorComparisonSection";
import { LaunchvectorStepsSection } from "@/components/sections/launchvector/LaunchvectorStepsSection";
import { LaunchvectorDataSection } from "@/components/sections/launchvector/LaunchvectorDataSection";
import { LaunchvectorTestimonialsSection } from "@/components/sections/launchvector/LaunchvectorTestimonialsSection";
import { LaunchvectorBookCallSection } from "@/components/sections/launchvector/LaunchvectorBookCallSection";
import { LaunchvectorCtaSection } from "@/components/sections/launchvector/LaunchvectorCtaSection";
import { LaunchvectorFaqSection } from "@/components/sections/launchvector/LaunchvectorFaqSection";
import { BuyersTestimonialsSection } from "@/components/sections/buyers/BuyersTestimonialsSection";

export const metadata = {
  title: "LaunchVector vs KH Brokers",
  description: launchvectorHeroConfig.description,
};

export default function LaunchvectorPage() {
  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      <LaunchvectorHero />
      <BuyersTestimonialsSection />
      <LaunchvectorCtaSection />
      <LaunchvectorComparisonSection />
      <LaunchvectorStepsSection />
      <LaunchvectorDataSection />
      <LaunchvectorBookCallSection />
      <LaunchvectorFaqSection />
    </main>
  );
}

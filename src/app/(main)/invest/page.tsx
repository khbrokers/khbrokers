import { investHeroConfig } from "@/config/invest.config";
import { InvestHero } from "@/components/sections/invest/InvestHero";
import { InvestBenefitsSection } from "@/components/sections/invest/InvestBenefitsSection";
import { InvestFaqSection } from "@/components/sections/invest/InvestFaqSection";
import { InvestBookCallSection } from "@/components/sections/invest/InvestBookCallSection";

export const metadata = {
  title: "Invest | Acquire E-commerce Brands | KH Brokers",
  description: `Acquire a fully-vetted e-commerce brand at real market price with 100% ownership. ${investHeroConfig.profitBadge}. Join 300+ smart investors who trust KH Brokers.`,
};

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      <InvestHero statsBelowForm />
      <InvestBenefitsSection />
      <InvestBookCallSection />
      <InvestFaqSection />
    </main>
  );
}

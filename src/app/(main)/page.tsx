import { buyersHeroConfig } from "@/config/buyers.config";
import { BuyersHero } from "@/components/sections/buyers/BuyersHero";
import { BuyersTypewriterSection } from "@/components/sections/buyers/BuyersTypewriterSection";
import { BuyersBrokenSection } from "@/components/sections/buyers/BuyersBrokenSection";
import { BuyersThinkSection } from "@/components/sections/buyers/BuyersThinkSection";
import { BuyersOwnershipSection } from "@/components/sections/buyers/BuyersOwnershipSection";
import { BuyersJourneySection } from "@/components/sections/buyers/BuyersJourneySection";
import { BuyersOverpaySection } from "@/components/sections/buyers/BuyersOverpaySection";
import { BuyersTestimonialsSection } from "@/components/sections/buyers/BuyersTestimonialsSection";
import { BuyersBookCallSection } from "@/components/sections/buyers/BuyersBookCallSection";
import { BuyersFaqSection } from "@/components/sections/buyers/BuyersFaqSection";
import { BuyersCtaSection } from "@/components/sections/buyers/BuyersCtaSection";
import { BuyersNeverSection } from "@/components/sections/buyers/BuyersNeverSection";
import { BuyersDifferenceSection } from "@/components/sections/buyers/BuyersDifferenceSection";

export const metadata = {
  title: "KH Brokers | Buy Verified E-commerce Businesses",
  description: buyersHeroConfig.description,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      <BuyersHero />
      <BuyersTypewriterSection />
      <BuyersBrokenSection />
      <BuyersThinkSection />
      <BuyersNeverSection />
      <BuyersDifferenceSection />
      <BuyersOwnershipSection />
      <BuyersJourneySection />
      <BuyersOverpaySection />
      <BuyersTestimonialsSection />
      <BuyersBookCallSection />
      <BuyersFaqSection />
      <BuyersCtaSection />
    </main>
  );
}

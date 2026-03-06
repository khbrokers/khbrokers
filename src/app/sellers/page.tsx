import { sellersHeroConfig } from "@/config/sellers.config";
import { SellersHero } from "@/components/sections/sellers/SellersHero";
import { SellersTrustedBySection } from "@/components/sections/sellers/SellersTrustedBySection";
import { SellersWhoWeAreSection } from "@/components/sections/sellers/SellersWhoWeAreSection";
import { SellersWhySellSection } from "@/components/sections/sellers/SellersWhySellSection";
import { SellersStructuredApproachSection } from "@/components/sections/sellers/SellersStructuredApproachSection";
import { SellersFoundersSection } from "@/components/sections/sellers/SellersFoundersSection";
import { SellersGetOfferSection } from "@/components/sections/sellers/SellersGetOfferSection";
import { SellersTestimonialsSection } from "@/components/sections/sellers/SellersTestimonialsSection";
import { SellersBookCallSection } from "@/components/sections/sellers/SellersBookCallSection";
import { SellersFaqSection } from "@/components/sections/sellers/SellersFaqSection";
import { SellersCtaSection } from "@/components/sections/sellers/SellersCtaSection";

export const metadata = {
  title: "For Sellers",
  description: sellersHeroConfig.subtitle,
};

export default function SellersPage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4]">
      <SellersHero />
      <SellersTrustedBySection />
      <SellersWhoWeAreSection />
      <SellersWhySellSection />
      <SellersStructuredApproachSection />
      <SellersFoundersSection />
      <SellersGetOfferSection />
      <SellersTestimonialsSection />
      <SellersBookCallSection />
      <SellersFaqSection />
      <SellersCtaSection />
    </main>
  );
}

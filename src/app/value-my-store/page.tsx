import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { ValueMyStoreHero } from "@/components/sections/value-my-store/ValueMyStoreHero";
import { ValueMyStoreForm } from "@/components/sections/value-my-store/ValueMyStoreForm";
import { ValueMyStoreWhySection } from "@/components/sections/value-my-store/ValueMyStoreWhySection";
import { SellersTrustedBySection } from "@/components/sections/sellers/SellersTrustedBySection";
import { SellersFaqSection } from "@/components/sections/sellers/SellersFaqSection";
import { SellersCtaSection } from "@/components/sections/sellers/SellersCtaSection";

export const metadata = {
  title: "Value My Store | Free Cash Valuation",
  description: valueMyStoreConfig.description,
};

export default function ValueMyStorePage() {
  return (
    <main className="min-h-screen">
      {/* Fixed hero - stays in place while content scrolls over it */}
      <ValueMyStoreHero />

      {/* Spacer: pushes scrollable content below viewport initially */}
      <div className="h-screen shrink-0" aria-hidden />

      {/* Scrollable content - overlaps hero as user scrolls */}
      <div
        className="relative z-10 min-h-screen"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 30px, rgba(240,255,250,0.6) 70px, #F0FFFA 120px)",
        }}
      >
        <ValueMyStoreForm />
        <SellersTrustedBySection />
        <ValueMyStoreWhySection />
        <SellersFaqSection />
        <SellersCtaSection />
      </div>
    </main>
  );
}

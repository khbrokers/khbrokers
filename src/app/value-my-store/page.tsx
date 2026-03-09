import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { ValueMyStoreHero } from "@/components/sections/value-my-store/ValueMyStoreHero";
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
    <main className="min-h-screen" style={{ backgroundColor: "#F0FFFA" }}>
      <ValueMyStoreHero />
      <div
        className="relative"
        style={{
          top: "-60px",
          height: "60px",
          zIndex: 10000,
          background: "transparent",
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full"
          style={{
            background: "linear-gradient(to top, #F0FFFA, transparent)",
          }}
        />
      </div>
      <SellersTrustedBySection />
      <ValueMyStoreWhySection />
      <SellersFaqSection />
      <SellersCtaSection />
    </main>
  );
}

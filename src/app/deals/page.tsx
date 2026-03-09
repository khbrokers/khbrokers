import { dealsHeroConfig } from "@/config/deals.config";
import { DealsHero } from "@/components/sections/deals/DealsHero";
import { DealsListing } from "@/components/sections/deals/DealsListing";
import { PrivateDealAccess } from "@/components/sections/deals/PrivateDealAccess";
import { DealsFaqSection } from "@/components/sections/deals/DealsFaqSection";

export const metadata = {
  title: "Available Deals | Verified E-commerce Businesses",
  description: dealsHeroConfig.description,
};

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      <DealsHero />
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
            background: "linear-gradient(to top, #F5EEFD, transparent)",
          }}
        />
      </div>
      <DealsListing />
      <PrivateDealAccess />
      <DealsFaqSection />
    </main>
  );
}

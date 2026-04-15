import { dealsHeroConfig } from "@/config/deals.config";
import { DealsPageClient } from "./DealsPageClient";

export const metadata = {
  title: "Available Deals | Verified E-commerce Businesses",
  description: dealsHeroConfig.description,
};

export default function DealsPage() {
  return <DealsPageClient />;
}

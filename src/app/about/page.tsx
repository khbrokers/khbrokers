import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "About KH Brokers",
  description: "KH Brokers is a private Shopify M&A advisory helping qualified buyers acquire cash-flowing e-commerce brands and motivated sellers exit with confidence.",
};

export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4 text-foreground/70">
          Add your about content here. Config-driven or CMS-backed.
        </p>
      </Container>
    </main>
  );
}

import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "For Sellers",
  description: "Sell your e-commerce business with KH Brokers.",
};

export default function SellersPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <Container>
        <h1 className="text-3xl font-bold text-foreground">For Sellers</h1>
        <p className="mt-4 text-foreground/70">
          Sell your cash-flowing e-commerce business. Placeholder — add your
          sellers landing content.
        </p>
      </Container>
    </main>
  );
}

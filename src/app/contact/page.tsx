import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with KH Brokers to discuss buying or selling a Shopify e-commerce business. Reach our M&A advisory team today.",
};

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-foreground/70">
          Add contact form or details. Integrate with your CRM/email service.
        </p>
      </Container>
    </main>
  );
}

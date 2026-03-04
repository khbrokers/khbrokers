import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contact",
  description: "Get in touch with our team.",
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

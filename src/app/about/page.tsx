import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} and our brokerage solutions.`,
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

import { heroConfig } from "@/config/sections.config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const data = heroConfig.data as { ctaPrimary: string; ctaSecondary: string };

export function HeroSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container as="section">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {heroConfig.title}
          </h1>
          <p className="mt-6 animate-fade-in-up text-lg text-foreground/70 [animation-delay:100ms] [animation-fill-mode:both]">
            {heroConfig.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [&>*]:animate-fade-in-up [&>*]:[animation-delay:200ms] [&>*]:[animation-fill-mode:both]">
            <Button href="/signup" variant="primary" size="lg">
              {data.ctaPrimary}
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              {data.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { pricingConfig } from "@/config/sections.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
}

const plans = (pricingConfig.data?.plans as Plan[]) ?? [];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {pricingConfig.title}
          </h2>
          {pricingConfig.subtitle && (
            <p className="mt-4 text-lg text-foreground/70">
              {pricingConfig.subtitle}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-xl border border-foreground/10 bg-background/50 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {plan.price}
                <span className="text-base font-normal text-foreground/70">
                  {plan.period}
                </span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/70">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button
                href="/signup"
                variant={plan.name === "Pro" ? "primary" : "secondary"}
                size="sm"
                className="mt-6 w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

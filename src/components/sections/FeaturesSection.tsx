import { featuresConfig } from "@/config/sections.config";
import { Container } from "@/components/ui/Container";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const config = featuresConfig[0];
const items = (config?.data?.items as FeatureItem[]) ?? [];

const iconMap: Record<string, string> = {
  chart: "📊",
  layers: "📦",
  shield: "🛡️",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {config?.title}
          </h2>
          {config?.subtitle && (
            <p className="mt-4 text-lg text-foreground/70">{config.subtitle}</p>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-in rounded-xl border border-foreground/10 bg-background/50 p-6 transition-colors hover:border-foreground/20"
              style={{
                animationDelay: `${i * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <span className="text-2xl" role="img" aria-hidden>
                {iconMap[item.icon] ?? "◆"}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig, ctaConfig } from "@/config/nav.config";
import {
  marketplaceNavConfig,
  marketplaceCtaConfig,
} from "@/config/marketplace.config";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const marketplacePaths = ["/buyers", "/sellers"];

export function Header() {
  const pathname = usePathname();
  const isMarketplace = marketplacePaths.some((p) => pathname.startsWith(p));

  if (isMarketplace) {
    const activePath = pathname.startsWith("/sellers")
      ? ("/sellers" as const)
      : ("/buyers" as const);
    return <MarketplaceHeaderContent activePath={activePath} />;
  }

  return <DefaultHeaderContent />;
}

function DefaultHeaderContent() {
  return (
    <header className="relative fixed top-0 left-0 right-0 z-50 animate-slide-in-from-top bg-[#EDEDED] backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-b before:from-white before:to-white/0 before:content-['']">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/hero/logo.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-6">
            {navConfig.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaConfig.href}
              className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {ctaConfig.label}
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

function MarketplaceHeaderContent({
  activePath,
}: {
  activePath: "/buyers" | "/sellers";
}) {
  return (
    <header
      className="relative !fixed top-5 left-0 right-0 z-50 animate-slide-in-from-top"
      style={{ background: "transparent" }}
    >
      <div className="relative mx-auto flex h-16 w-[80%] overflow-hidden rounded-full items-center justify-between px-2 sm:px-4 lg:px-6 bg-[#EDEDED] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:rounded-t-full before:bg-gradient-to-b before:from-white before:to-white/0 before:content-['']">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/hero/logo.png"
            alt={siteConfig.name}
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {marketplaceNavConfig.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[14px] md:text-[16px] font-medium transition-colors",
                item.href === activePath
                  ? "text-zinc-900"
                  : "text-zinc-900/50 hover:text-zinc-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link
            href={marketplaceCtaConfig.signInHref}
            className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-900/50"
          >
            {marketplaceCtaConfig.signInLabel}
          </Link>
          <Link
            href={marketplaceCtaConfig.applyHref}
            className="rounded-full border-2 border-[#f7efff80] bg-[#A363F4] px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9]"
          >
            {marketplaceCtaConfig.applyLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}


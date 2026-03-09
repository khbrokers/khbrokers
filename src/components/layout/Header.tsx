"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getStoredLegalTheme } from "@/components/layout/ThemeTracker";
import { useState, useEffect } from "react";
import { navConfig, ctaConfig } from "@/config/nav.config";
import {
  marketplaceNavConfig,
  marketplaceCtaConfig,
} from "@/config/marketplace.config";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const marketplacePaths = ["/buyers", "/sellers", "/value-my-store", "/deals", "/terms", "/privacy"];

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMarketplace = marketplacePaths.some((p) => pathname.startsWith(p));

  if (isMarketplace) {
    const activePath = pathname.startsWith("/sellers")
      ? ("/sellers" as const)
      : pathname.startsWith("/value-my-store")
        ? ("/value-my-store" as const)
        : pathname.startsWith("/deals")
          ? ("/deals" as const)
          : pathname.startsWith("/terms")
            ? ("/terms" as const)
            : pathname.startsWith("/privacy")
              ? ("/privacy" as const)
              : ("/buyers" as const);
    const paramTheme = searchParams.get("theme");
    const legalTheme =
      activePath === "/terms" || activePath === "/privacy"
        ? paramTheme === "sellers"
          ? "sellers"
          : paramTheme === "buyers"
            ? "buyers"
            : typeof window !== "undefined"
              ? getStoredLegalTheme()
              : "buyers"
        : null;
    return (
      <MarketplaceHeaderContent
        activePath={activePath}
        legalTheme={legalTheme}
      />
    );
  }

  return <DefaultHeaderContent />;
}

function DefaultHeaderContent() {
  return (
    <header className="relative fixed top-0 left-0 right-0 z-50 animate-slide-in-from-top bg-white/80 backdrop-blur-[6px] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-b before:from-white before:to-white/0 before:content-['']">
      <Container>
        <nav className="flex h-12 items-center justify-between md:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/hero/logo.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-7 w-auto md:h-10"
              priority
            />
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            {navConfig.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-foreground/70 transition-colors hover:text-foreground md:text-sm"
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
              className="inline-flex h-8 items-center justify-center rounded-full bg-foreground px-3 text-xs font-medium text-background transition-colors hover:bg-foreground/90 md:h-9 md:px-4 md:text-sm"
            >
              {ctaConfig.label}
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-4 w-4 flex-col justify-center gap-0.5" aria-hidden>
      <span
        className={cn(
          "h-0.5 w-full rounded-full bg-zinc-900 transition-all duration-200",
          open && "translate-y-1 rotate-45"
        )}
      />
      <span
        className={cn(
          "h-0.5 w-full rounded-full bg-zinc-900 transition-all duration-200",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "h-0.5 w-full rounded-full bg-zinc-900 transition-all duration-200",
          open && "-translate-y-1 -rotate-45"
        )}
      />
    </div>
  );
}

const APPLY_BUTTON_BASE =
  "rounded-full border-2 font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors";

const APPLY_BUTTON_SIZES_HERO = "px-3 py-2 text-xs md:px-5 md:py-2.5 md:text-sm";

const MARKETPLACE_THEMES = {
  sellers: {
    logo: "/assets/brand_assets/logo_sellers.png",
    activeBg: "rgba(0, 150, 95, 0.15)",
    activeText: "#007a4d",
    applyButton: {
      desktopClassName: cn(
        "hidden md:block",
        APPLY_BUTTON_BASE,
        APPLY_BUTTON_SIZES_HERO,
        "hover:opacity-90"
      ),
      mobileClassName: cn(
        "flex-1 min-w-0 text-center",
        APPLY_BUTTON_BASE,
        APPLY_BUTTON_SIZES_HERO,
        "hover:opacity-90"
      ),
      style: {
        borderColor: "00965F/40",
        backgroundColor: "#00965F",
      },
    },
  },
  buyers: {
    logo: "/assets/brand_assets/logo.png",
    activeBg: "rgba(163, 106, 246, 0.15)",
    activeText: "#6824BF",
    applyButton: {
      desktopClassName: cn(
        "hidden md:block",
        APPLY_BUTTON_BASE,
        "px-3 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
        "hover:!bg-[#6d28d9]"
      ),
      mobileClassName: cn(
        "flex-1 min-w-0 text-center",
        APPLY_BUTTON_BASE,
        APPLY_BUTTON_SIZES_HERO,
        "hover:!bg-[#6d28d9]"
      ),
      style: {
        borderColor: "rgba(247, 239, 255, 0.5)",
        backgroundColor: "#a36af6",
      },
    },
  },
} as const;

function MarketplaceHeaderContent({
  activePath,
  legalTheme,
}: {
  activePath: "/buyers" | "/sellers" | "/value-my-store" | "/deals" | "/terms" | "/privacy";
  legalTheme?: "buyers" | "sellers" | null;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeKey =
    legalTheme === "sellers"
      ? "sellers"
      : legalTheme === "buyers"
        ? "buyers"
        : activePath === "/value-my-store"
          ? "sellers"
          : activePath === "/deals" || activePath === "/terms" || activePath === "/privacy"
            ? "buyers"
            : activePath.slice(1);
  const theme = MARKETPLACE_THEMES[themeKey as keyof typeof MARKETPLACE_THEMES];

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    checkDesktop();
    handleScroll();
    window.addEventListener("resize", checkDesktop);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="relative !fixed top-5 left-0 right-0 z-50 animate-slide-in-from-top"
      style={{ background: "transparent" }}
    >
      <div
        className={cn(
          "relative mx-auto flex h-12 overflow-hidden rounded-full items-center justify-between px-2 sm:px-3 md:h-16 md:px-4 lg:px-4 bg-white/70 backdrop-blur-[6px] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:rounded-t-full before:bg-gradient-to-b before:from-white before:to-white/0 before:content-['']",
          "transition-[width] duration-300 ease-out"
        )}
        style={{ width: isDesktop && isScrolled ? "65%" : "80%" }}
      >
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative h-7 w-[98px] md:h-10 md:w-[140px]">
            <Image
              src={theme.logo}
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 98px, 140px"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {marketplaceNavConfig.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[14px] md:text-[16px] font-medium transition-colors",
                item.href === activePath
                  ? "text-zinc-900 font-semibold"
                  : "text-zinc-900/50 hover:text-zinc-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-900 transition-colors hover:bg-zinc-200/80 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <HamburgerIcon open={mobileMenuOpen} />
          </button>
          <Link
            href={marketplaceCtaConfig.signInHref}
            className="hidden text-xs font-medium text-zinc-900 transition-colors hover:text-zinc-900/50 md:block md:text-sm"
          >
            {marketplaceCtaConfig.signInLabel}
          </Link>
          <Link
            href={marketplaceCtaConfig.applyHref}
            className={theme.applyButton.desktopClassName}
            style={theme.applyButton.style}
          >
            {marketplaceCtaConfig.applyLabel}
          </Link>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed left-4 right-4 top-20 z-40 flex flex-col gap-1 rounded-2xl border border-zinc-200/80 bg-white/80 backdrop-blur-[6px] p-3 shadow-xl transition-all duration-200 md:hidden",
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {marketplaceNavConfig.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
              item.href !== activePath && "text-zinc-900 hover:bg-zinc-200/60"
            )}
            style={
              item.href === activePath
                ? { backgroundColor: theme.activeBg, color: theme.activeText }
                : undefined
            }
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-2 flex flex-row flex-wrap gap-2 border-t border-zinc-200/60 pt-3">
          <Link
            href={marketplaceCtaConfig.signInHref}
            onClick={() => setMobileMenuOpen(false)}
            className="flex-1 min-w-0 rounded-xl px-4 py-3 text-center text-[14px] font-medium text-zinc-900 transition-colors hover:bg-zinc-200/60"
          >
            {marketplaceCtaConfig.signInLabel}
          </Link>
          
          <Link
            href={marketplaceCtaConfig.applyHref}
            onClick={() => setMobileMenuOpen(false)}
            className={theme.applyButton.mobileClassName}
            style={theme.applyButton.style}
          >
            {marketplaceCtaConfig.applyLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}


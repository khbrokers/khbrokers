"use client";

import Image from "next/image";
import Link from "next/link";
import { footerConfig } from "@/config/footer.config";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { LazyBlock } from "@/components/ui/LazyBlock";

export function Footer() {
  const { branding, columns, social, copyright, legal } = footerConfig;

  return (
    <footer className="relative overflow-hidden bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main content - columns */}
        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
        <div className="relative z-10 grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)_auto] md:gap-8">
          {/* Column 1 - Branding */}
          <div className="stagger-child max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={branding.logo}
                alt={branding.name}
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-900/60 md:text-[18px]">
              {branding.description}
            </p>
          </div>

          {/* Columns 2-4 - Navigation */}
          {columns.map((col) => (
            <div key={col.heading} className="stagger-child">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-zinc-900">
                {col.heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[16px] md:text-[18px] text-zinc-900/60 transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 - Social */}
          <div className="stagger-child flex items-start gap-3">
            {social.map((item) => (
              <Link
                key={item.icon}
                href={item.href}
                aria-label={item.label}
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-[#A363F4]/22 text-[#A363F4] shadow-sm transition-opacity hover:opacity-90"
              >
                {item.icon === "facebook" ? (
                  <FaFacebookF className="h-4 w-4" />
                ) : (
                  <FaYoutube className="h-5 w-5" />
                )}
              </Link>
            ))}
          </div>
        </div>
        </AnimateOnView>

        {/* Footer brand watermark - KH BROKERS text - slides up from bottom */}
        <AnimateOnView animation="slide-up-from-bottom" rootMargin="0px 0px -80px 0px">
        <div className="relative z-0 mt-16 w-screen sm:mt-20 md:mt-28" style={{ marginLeft: "calc(-50vw + 50%)" }}>
          <Image
            src="/assets/footer_brand.png"
            alt=""
            width={1200}
            height={200}
            className="h-auto w-full object-contain"
            aria-hidden
          />
        </div>
        </AnimateOnView>

        {/* Bottom bar - copyright and legal */}
        <LazyBlock>
        <div className="relative z-10 mt-4 flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:pt-8 sm:text-left md:mt-8">
          <p className="text-[16px] md:text-[18px] text-zinc-900/20">{copyright}</p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] md:text-[18px] text-zinc-900/20 transition-colors hover:text-zinc-900/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        </LazyBlock>
      </div>
    </footer>
  );
}

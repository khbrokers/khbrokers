import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { defaultMetadata } from "./metadata";
import { fontVariables } from "@/lib/fonts";
import { ThemeTracker } from "@/components/layout/ThemeTracker";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { WelcomeModal } from "@/components/modals/WelcomeModal";
import { ScrollToHashHandler } from "@/components/ui/ScrollToHashLink";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTMXH7KR');`}</Script>
      <body className="font-sans antialiased"
        style={{
          // Animation tokens - centralized
          "--animate-duration-fast": "150ms",
          "--animate-duration-normal": "300ms",
          "--animate-duration-slow": "500ms",
          "--animate-ease-out": "cubic-bezier(0.33, 1, 0.68, 1)",
        } as React.CSSProperties}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTMXH7KR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeTracker />
        <ScrollToHashHandler />
        <Suspense fallback={null}>
          <ConditionalHeader />
        </Suspense>
        <Suspense fallback={null}>{children}</Suspense>
        <Suspense fallback={null}>
          <ConditionalFooter />
        </Suspense>
        <Suspense fallback={null}>
          <WelcomeModal />
        </Suspense>
      </body>
    </html>
  );
}

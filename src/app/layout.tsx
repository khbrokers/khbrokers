import type { Metadata } from "next";
import { Suspense } from "react";
import { defaultMetadata } from "./metadata";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/config/site.config";
import { ThemeTracker } from "@/components/layout/ThemeTracker";
import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { WelcomeModal } from "@/components/modals/WelcomeModal";
import { ScrollToHashHandler } from "@/components/ui/ScrollToHashLink";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = defaultMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "SiteNavigationElement",
      name: "For Buyers",
      url: `${siteConfig.url}/buyers`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Available Deals",
      url: `${siteConfig.url}/deals`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "For Sellers",
      url: `${siteConfig.url}/sellers`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Value My Store",
      url: `${siteConfig.url}/value-my-store`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "About KH Brokers",
      url: `${siteConfig.url}/about`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTMXH7KR');`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XNLRBTQQ64" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XNLRBTQQ64');`,
          }}
        />
      </head>
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

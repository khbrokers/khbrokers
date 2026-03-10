import type { Metadata } from "next";
import { Suspense } from "react";
import { defaultMetadata } from "./metadata";
import { fontVariables } from "@/lib/fonts";
import { ThemeTracker } from "@/components/layout/ThemeTracker";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { WelcomeModal } from "@/components/modals/WelcomeModal";
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
      <body className="font-sans antialiased"
        style={{
          // Animation tokens - centralized
          "--animate-duration-fast": "150ms",
          "--animate-duration-normal": "300ms",
          "--animate-duration-slow": "500ms",
          "--animate-ease-out": "cubic-bezier(0.33, 1, 0.68, 1)",
        } as React.CSSProperties}
      >
        <ThemeTracker />
        <Suspense fallback={null}>
          <Header />
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

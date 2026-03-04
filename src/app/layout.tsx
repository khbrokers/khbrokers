import type { Metadata } from "next";
import { defaultMetadata } from "./metadata";
import { fontVariables } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
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
        <Header />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}

import Script from "next/script";

const TYPEFORM_EMBED_URL = "https://embed.typeform.com/next/embed.js";

export default function ValueMyStoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Load Typeform script immediately on page land - beforeInteractive only works in root layout, so we use afterInteractive for instant fetch */}
      <Script src={TYPEFORM_EMBED_URL} strategy="afterInteractive" />
      {children}
    </>
  );
}

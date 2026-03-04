"use client";

interface CalInlineEmbedProps {
  calLink: string;
  iframeFallbackUrl?: string;
  className?: string;
}

function buildCalUrl(baseUrl: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("theme", "light");
  url.searchParams.set("layout", "month_view");
  return url.toString();
}

export function CalInlineEmbed({
  calLink,
  iframeFallbackUrl,
  className = "",
}: CalInlineEmbedProps) {
  const baseUrl = iframeFallbackUrl ?? `https://cal.com/${calLink}`;
  const iframeUrl = buildCalUrl(baseUrl);

  return (
    <div
      className={`cal-embed overflow-hidden rounded-lg ${className}`}
      style={{
        width: "100%",
        height: 600,
        maxWidth: "100%",
        contain: "layout",
      }}
    >
      <iframe
        src={iframeUrl}
        title="Book a call"
        className="h-full w-full border-0"
        allow="camera; microphone"
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

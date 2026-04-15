import { siteConfig } from "@/config/site.config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/auth/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

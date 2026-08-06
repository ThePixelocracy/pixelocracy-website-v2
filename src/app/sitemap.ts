import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { pillars } from "@/content/pillars";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pillars.map((pillar) => ({
      url: `${siteConfig.url}/services/${pillar.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

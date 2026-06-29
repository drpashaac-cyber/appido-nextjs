import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const SITE_URL = "https://www.appido.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];

  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: lang === "fa" ? 1.0 : 0.9,
    }))
  );
}
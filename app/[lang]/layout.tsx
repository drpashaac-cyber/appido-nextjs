import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { SupportWidget } from "@/components/SupportWidget";
import { getDictionary } from "@/lib/dictionaries";
import { locales, defaultLocale, getDirection, type Locale } from "@/lib/i18n";

const SITE_URL = "https://www.appido.io";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = `Appido — ${dict.hero.eyebrow}`;
  const description = dict.hero.sub;

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `/${l}`;
  });
  languages["x-default"] = `/${defaultLocale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      siteName: "Appido",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dir = getDirection(lang);

  return (
    <html lang={lang} dir={dir} data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <ThemeScript />
      </head>
      <body>{children}<SupportWidget /></body>
    </html>
  );
}
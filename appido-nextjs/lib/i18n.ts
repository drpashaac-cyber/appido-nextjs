export const locales = ["en", "fa", "ar", "tr", "ru"] as const;
export type Locale = (typeof locales)[number];

// Primary market fallback (matches the preview's detectLang default).
export const defaultLocale: Locale = "fa";

export const rtlLocales: Locale[] = ["fa", "ar"];

export function getDirection(locale: string): "rtl" | "ltr" {
  return rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Language switcher metadata (identical to the preview's LANGS).
export const LANGS: { code: Locale; label: string; name: string; dir: "rtl" | "ltr" }[] = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "fa", label: "FA", name: "فارسی", dir: "rtl" },
  { code: "ar", label: "AR", name: "العربية", dir: "rtl" },
  { code: "tr", label: "TR", name: "Türkçe", dir: "ltr" },
  { code: "ru", label: "RU", name: "Русский", dir: "ltr" },
];

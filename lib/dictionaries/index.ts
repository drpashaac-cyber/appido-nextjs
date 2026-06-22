import type { Locale } from "../i18n";
import type { Dictionary } from "./types";

export type { Dictionary } from "./types";

// Dictionaries are dynamically imported so each locale ships only when needed.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  fa: () => import("./fa").then((m) => m.default),
  ar: () => import("./ar").then((m) => m.default),
  tr: () => import("./tr").then((m) => m.default),
  ru: () => import("./ru").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.fa;
  return load();
}

import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./lib/i18n";

const LOCALE_SET = new Set<string>(locales);

// Coarse country → locale map for first-visit geo detection (Vercel sets x-vercel-ip-country).
const COUNTRY_LOCALE: Record<string, Locale> = {
  IR: "fa",
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  TR: "tr",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
};

function pickLocale(req: NextRequest): Locale {
  // 1) Explicit choice (cookie) wins.
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && LOCALE_SET.has(cookie)) return cookie as Locale;

  // 2) Geo (only present behind Vercel / a proxy that sets the header).
  const country = req.headers.get("x-vercel-ip-country");
  if (country && COUNTRY_LOCALE[country.toUpperCase()]) {
    return COUNTRY_LOCALE[country.toUpperCase()];
  }

  // 3) Accept-Language.
  const accept = req.headers.get("accept-language");
  if (accept) {
    const wanted = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    const match = wanted.find((code) => LOCALE_SET.has(code));
    if (match) return match as Locale;
  }

  // 4) Primary-market fallback.
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Already prefixed with a supported locale → continue.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const res = NextResponse.redirect(url);
  // Persist the resolved locale so subsequent visits are stable.
  res.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // Skip API, Next internals, and any file with an extension.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

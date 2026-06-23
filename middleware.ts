```typescript
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./lib/i18n";

const LOCALE_SET = new Set<string>(locales);

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
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && LOCALE_SET.has(cookie)) return cookie as Locale;

  const country = req.headers.get("x-vercel-ip-country");
  if (country && COUNTRY_LOCALE[country.toUpperCase()]) {
    return COUNTRY_LOCALE[country.toUpperCase()];
  }

  const accept = req.headers.get("accept-language");
  if (accept) {
    const wanted = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    const match = wanted.find((code) => LOCALE_SET.has(code));
    if (match) return match as Locale;
  }

  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ============================================================
  // ۱. ریدایرکت‌های کوتاه (فقط برای راحتی کاربر)
  // ============================================================
  if (pathname === '/os/dash') {
    return NextResponse.redirect(new URL('/os/dashboard', req.url));
  }
  if (pathname === '/owner') {
    return NextResponse.redirect(new URL('/os/owner', req.url));
  }

  // ============================================================
  // ۲. مسیرهای /os را بدون تغییر عبور بده (Rewrite در Vercel انجام میشه)
  // ============================================================
  if (
    pathname === '/os' ||
    pathname === '/os/dashboard' ||
    pathname === '/os/owner' ||
    pathname.startsWith('/os/dashboard/') ||
    pathname.startsWith('/os/owner/')
  ) {
    return NextResponse.next();
  }

  // ============================================================
  // ۳. مدیریت زبان (بقیه مسیرها)
  // ============================================================
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
```
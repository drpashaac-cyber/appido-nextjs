"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LANGS, isLocale, type Locale } from "@/lib/i18n";
import { I } from "./icons";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Click outside closes the menu (same behaviour as the preview).
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function targetPath(code: Locale): string {
    const parts = (pathname || "/").split("/");
    if (parts[1] && isLocale(parts[1])) {
      parts[1] = code;
    } else {
      parts.splice(1, 0, code);
    }
    const next = parts.join("/");
    return next.startsWith("/") ? next || `/${code}` : `/${next}`;
  }

  function go(code: Locale) {
    setOpen(false);
    if (code === current) return;
    // Remember the choice so middleware keeps it on future visits.
    try {
      document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* ignore */
    }
    router.push(targetPath(code));
  }

  const cur = LANGS.find((l) => l.code === current) ?? LANGS[0];

  return (
    <div className="langwrap" ref={ref}>
      <button
        className="langbtn"
        id="langBtn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <I.globe />
        <span>{cur.label}</span>
        <I.chevron />
      </button>
      <div className={`langmenu${open ? " open" : ""}`} id="langMenu">
        {LANGS.map((l) => (
          <button key={l.code} data-lang={l.code} aria-current={l.code === current} onClick={() => go(l.code)}>
            <span>{l.name}</span>
            {l.code === current ? (
              <span className="tick">
                <I.check />
              </span>
            ) : (
              <span style={{ fontSize: "11px", color: "var(--text-2)", fontWeight: 600 }}>{l.label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

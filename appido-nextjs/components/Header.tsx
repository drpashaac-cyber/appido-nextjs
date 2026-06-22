import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <header className="header">
      <div className="wrap nav">
        <div className="logo">Appido</div>
        <nav className="navlinks">
          <a href="#features">{dict.nav.product}</a>
          <a href="#proof">{dict.nav.customers}</a>
          <a href="#pricing">{dict.nav.pricing}</a>
        </nav>
        <div className="nav-right">
          <LanguageSwitcher current={lang} />
          <ThemeToggle />
          <a href="#" className="btn btn-mint btn-sm hide-sm">
            {dict.nav.start}
          </a>
        </div>
      </div>
    </header>
  );
}

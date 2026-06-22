"use client";

import { useEffect, useState } from "react";
import { I } from "./icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  // Starts at "light" on both server and client (no hydration mismatch),
  // then syncs to the real theme that ThemeScript already applied to <html>.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("appido-theme", next);
    } catch {
      /* ignore */
    }
  };

  const Icon = theme === "dark" ? I.sun : I.moon;

  return (
    <button className="iconbtn" id="themeBtn" title="theme" aria-label="Toggle theme" onClick={toggle}>
      <Icon />
    </button>
  );
}

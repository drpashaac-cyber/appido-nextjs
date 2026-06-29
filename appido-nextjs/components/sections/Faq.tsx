"use client";
import { useState } from "react";
import type { FaqItem } from "@/lib/dictionaries/types";

interface FaqProps {
  dict: {
    faq: {
      eyebrow: string;
      title: string;
      items: FaqItem[];
    };
  };
}

export function Faq({ dict }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  const { eyebrow, title, items } = dict.faq;

  return (
    <section id="faq" className="py-24 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3 text-center">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] text-center mb-12">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="text-xl text-[var(--accent)] ml-4">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[var(--fg-muted)] leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
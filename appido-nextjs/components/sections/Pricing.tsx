"use client";

import { useState } from "react";
import { APP_URL } from "../../lib/site";
import { I } from "../icons";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { PublicPlan } from "@/lib/plans";

type Billing = "monthly" | "annual";

function money(cents: number, currency: string): string {
  const v = Math.round(cents / 100);
  return currency === "USD" ? `$${v}` : `${v} ${currency}`;
}

export function Pricing({ dict, lang, plans, trialDays = 14 }: { dict: Dictionary; lang: Locale; plans?: PublicPlan[] | null; trialDays?: number }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const annual = billing === "annual";

  const p = dict.pricing;
  const v = p.value;

  // Live plans (start/pro) drive their tiers from the backend; marketing-only tiers (e.g. Scale)
  // stay from the dictionary. Prices are always live; fa/en features come live, other locales fall back.
  const dictTiers = p.tiers;
  let tiers = dictTiers;
  if (plans && plans.length) {
    const perLabel = dictTiers[0]?.per ?? "/mo";
    const ctaLabel = dictTiers[0]?.cta ?? "";
    const fromPlan = plans.map((pl) => {
      const match = dictTiers.find((tt) => tt.n.toLowerCase() === pl.name.toLowerCase());
      const beFeats = lang === "fa" ? pl.featuresFa : lang === "en" ? pl.featuresEn : null;
      const beDesc = lang === "fa" ? pl.descFa : lang === "en" ? pl.descEn : null;
      return {
        n: pl.name,
        p: money(pl.priceCents, pl.currency),
        pa: pl.annualCents ? money(pl.annualCents / 12, pl.currency) : money(pl.priceCents, pl.currency),
        per: match?.per ?? perLabel,
        d: beDesc || match?.d || "",
        f: beFeats && beFeats.length ? beFeats : match?.f ?? [],
        cta: match?.cta ?? ctaLabel,
        best: pl.popular,
      };
    });
    const liveNames = new Set(plans.map((pl) => pl.name.toLowerCase()));
    const extras = dictTiers.filter((tt) => !liveNames.has(tt.n.toLowerCase()));
    tiers = [...fromPlan, ...extras];
  }

  return (
    <section className="sec wrap center" id="pricing">
      <span className="eyebrow">
        <I.coin />
        {p.eyebrow}
      </span>
      <h2 className="h2">{p.title}</h2>
      <p className="lead">{p.sub.replace(/\b14\b/, String(trialDays))}</p>

      <div className="bill" id="bill">
        <button data-bill="monthly" className={!annual ? "on" : ""} onClick={() => setBilling("monthly")}>
          {p.bill.mo}
        </button>
        <button data-bill="annual" className={annual ? "on" : ""} onClick={() => setBilling("annual")}>
          {p.bill.yr}
          <span className="save">{p.bill.save}</span>
        </button>
      </div>

      <div className="pricegrid" style={{ textAlign: "start" }}>
        {tiers.map((tier, i) => {
          const price = annual ? tier.pa : tier.p;
          const showBilled = annual && tier.per;
          return (
            <div className={`tier${tier.best ? " best" : ""}`} key={i}>
              {tier.best && (
                <span className="best-tag">
                  <I.star />
                  {p.popular}
                </span>
              )}
              <div className="tn">{tier.n}</div>
              <div className="td">{tier.d}</div>
              <div className="tp">
                <span className="amt">{price}</span>
                <span className="per">{tier.per}</span>
              </div>
              <div className="billed">{showBilled ? p.bill.billed : ""}</div>
              <ul className="feat">
                {tier.f.map((x, j) => (
                  <li key={j}>
                    <I.check />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.per ? APP_URL : "#"}
                className={`btn ${tier.best ? "btn-mint" : "btn-ghost"}`}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </div>

      <div className="vstack">
        <span className="eyebrow">
          <I.spark />
          {v.eyebrow}
        </span>
        <h3 className="vstack-title">{v.title}</h3>
        <div className="vstack-rows">
          {v.items.map((it, i) => (
            <div className="vrow" key={i}>
              <span>{it[0]}</span>
              <b>{it[1]}</b>
            </div>
          ))}
        </div>
        <div className="vstack-sep">
          <div className="vrow muted">
            <span>{v.sepLabel}</span>
            <b className="strike">{v.total}</b>
          </div>
          <div className="vrow big">
            <span>{v.priceLabel}</span>
            <b className="price">{v.price}</b>
          </div>
        </div>
        <p className="vstack-note">{v.note}</p>
      </div>

      <div className="guarantee">
        <I.shield />
        {p.guarantee}
      </div>
    </section>
  );
}

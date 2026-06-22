import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: { product: "Product", platform: "Platform", pricing: "Pricing", customers: "Customers", faq: "FAQ", signin: "Sign in", start: "Start free" },
  hero: {
    eyebrow: "AI Revenue Operating System",
    title: "Turn your Telegram into a revenue machine — on autopilot",
    sub: "Appido's AI sales agent qualifies, follows up and closes every lead 24/7 — with a Telegram-native CRM, payments and analytics built in. Stop leaving money in your DMs.",
    cta1: "Start free — 14 days",
    cta2: "Book a demo",
    note: "No credit card · Setup in minutes · Cancel anytime",
    metrics: [
      { v: "2,400+", l: "businesses run on Appido" },
      { v: "$48M+", l: "processed in sales" },
      { v: "+42%", l: "avg. uplift in 90 days" },
    ],
  },
  logos: "Powering revenue teams across CIS, MENA & Europe",
  features: {
    eyebrow: "Capabilities",
    title: "Built around one job: more revenue",
    items: [
      { icon: "Bot", t: "AI Sales Agent", d: "Qualifies, answers objections and closes — 24/7, in 50+ languages.", k: "+42% conversion" },
      { icon: "Inbox", t: "Smart Inbox", d: "Every conversation in one place, prioritised by buying intent.", k: "0 leads dropped" },
      { icon: "Crm", t: "Telegram-native CRM", d: "Contacts, deals and history that update themselves.", k: "1 source of truth" },
      { icon: "Flow", t: "Automation builder", d: "Visual flows for follow-up, renewals and onboarding.", k: "10+ hrs saved/wk" },
      { icon: "Coin", t: "Payments & subscriptions", d: "Global cards, local methods and USDT (TRC20/BEP20). Access granted and revoked automatically.", k: "Less churn" },
      { icon: "Chart", t: "Revenue analytics", d: "See exactly which message, segment and hour drives sales.", k: "Full visibility" },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Operators who stopped leaking revenue",
    cases: [
      { q: "The agent qualifies every lead before I wake up. I just close the warm ones.", n: "Coaching business", r: ["5% → 18% lead-to-sale", "$3.2k → $9.1k / mo"] },
      { q: "Refunds dropped because members actually get answers instantly.", n: "Online course", r: ["−40% refunds", "$2.5k → $8k / mo"] },
      { q: "Churn was killing us. Automated renewals and access fixed it.", n: "Membership community", r: ["churn 50% → 26%", "2.1× LTV"] },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent plans that scale with revenue",
    sub: "Start free for 14 days. No credit card required.",
    bill: { mo: "Monthly", yr: "Yearly", save: "Save 17%", billed: "billed annually" },
    popular: "Most popular",
    tiers: [
      { n: "Start", p: "$79", pa: "$66", per: "/mo", d: "Your automated sales operator.", f: ["Sales & membership bot", "Automatic payment confirmation", "Automatic product delivery", "Channel access management", "Inbox & basic CRM"], cta: "Start free" },
      { n: "Pro", p: "$179", pa: "$149", per: "/mo", d: "Selling, powered by AI.", f: ["24/7 AI sales agent", "AI customer support", "AI marketer", "AI campaign manager & runner", "AI CRM"], cta: "Start free", best: true },
      { n: "Scale", p: "Custom", pa: "Custom", per: "", d: "Built for teams & agencies.", f: ["Volume AI usage · unlimited seats", "API, webhooks & custom integrations", "Dedicated success manager + SSO", "99.9% uptime SLA"], cta: "Talk to sales" },
    ],
    value: {
      eyebrow: "Why Pro pays for itself",
      title: "Pro replaces a whole revenue team",
      items: [["A full-time sales rep", "from $1,500/mo"], ["A customer-support admin", "from $200/mo"], ["A smart CRM", "from $400/mo"]],
      sepLabel: "Hire that separately",
      total: "$2,100+/mo",
      priceLabel: "Get it all with Pro",
      price: "$179/mo",
      note: "…and the AI marketer & campaign manager come included.",
    },
    guarantee: "30-day money-back guarantee on every paid plan.",
  },
  finalCta: {
    title: "Turn your Telegram audience into revenue",
    sub: "Join the operators who replaced five tools with one. Most see payback inside two weeks.",
    cta1: "Start free — 14 days",
    cta2: "Book a demo",
    note: "No credit card · GDPR-aligned · Cancel anytime",
  },
  footer: {
    tagline: "AI Revenue Operating System for Telegram businesses.",
    cols: [
      { h: "Product", l: ["Features", "Pricing", "Security", "FAQ"] },
      { h: "Solutions", l: ["Coaches", "Course creators", "Memberships", "Crypto communities", "Agencies"] },
      { h: "Company", l: ["About", "Blog", "Careers", "Press", "Contact"] },
      { h: "Legal", l: ["Privacy", "Terms", "Security", "GDPR", "Status"] },
    ],
    rights: "All rights reserved.",
  },
};

export default en;

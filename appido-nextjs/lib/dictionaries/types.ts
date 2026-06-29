export interface Metric {
  v: string;
  l: string;
}

export interface Feature {
  icon: string;
  t: string;
  d: string;
  k: string;
}

export interface ProofCase {
  q: string;
  n: string;
  r: string[];
}

export interface Tier {
  n: string;
  p: string;
  pa: string;
  per: string;
  d: string;
  f: string[];
  cta: string;
  best?: boolean;
}

export interface ValueStack {
  eyebrow: string;
  title: string;
  items: [string, string][];
  sepLabel: string;
  total: string;
  priceLabel: string;
  price: string;
  note: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterCol {
  h: string;
  l: string[];
}

export interface Dictionary {
  nav: {
    product: string;
    platform: string;
    pricing: string;
    customers: string;
    faq: string;
    signin: string;
    start: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    note: string;
    metrics: Metric[];
  };
  logos: string;
  features: {
    eyebrow: string;
    title: string;
    items: Feature[];
  };
  proof: {
    eyebrow: string;
    title: string;
    cases: ProofCase[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    sub: string;
    bill: { mo: string; yr: string; save: string; billed: string };
    popular: string;
    tiers: Tier[];
    value: ValueStack;
    guarantee: string;
  };
  finalCta: {
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    cols: FooterCol[];
    rights: string;
  };
}
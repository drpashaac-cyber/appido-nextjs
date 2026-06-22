// Live Appido plan catalog, fetched from the backend so the owner console is the single source
// of truth for pricing. ISR-revalidated, so owner edits surface on the landing automatically.
// Returns null when no backend is configured (the Pricing section then falls back to the dictionary).

export interface PublicPlan {
  key: string;
  name: string;
  descFa: string | null;
  descEn: string | null;
  priceCents: number;
  annualCents: number | null;
  currency: string;
  periodDays: number;
  featuresFa: string[];
  featuresEn: string[];
  popular: boolean;
}

export async function getPlans(): Promise<PublicPlan[] | null> {
  const base = process.env.APPIDO_API_BASE?.replace(/\/$/, "");
  if (!base) return null;
  try {
    const res = await fetch(`${base}/v1/plans`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = (await res.json()) as unknown;
    return Array.isArray(data) ? (data as PublicPlan[]) : null;
  } catch {
    return null;
  }
}

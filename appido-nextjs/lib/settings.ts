// Live platform settings (e.g. free-trial length), fetched from the backend so the owner console is
// the source of truth. ISR-revalidated. Returns null when no backend is configured.

export interface PublicSettings {
  trialDays: number;
}

export async function getSettings(): Promise<PublicSettings | null> {
  const base = process.env.APPIDO_API_BASE?.replace(/\/$/, "");
  if (!base) return null;
  try {
    const res = await fetch(`${base}/v1/settings`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = (await res.json()) as { trialDays?: number };
    return { trialDays: typeof data.trialDays === "number" ? data.trialDays : 14 };
  } catch {
    return null;
  }
}

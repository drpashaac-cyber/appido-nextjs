// Site-level config resolved from environment at build time.
// NEXT_PUBLIC_APP_URL — where the "Get started / Open dashboard" CTAs point (the tenant dashboard).
// APPIDO_API_BASE — backend origin the server-side /api/track route forwards events to.

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://www.appido.io/dashboard";

/** Server-only: resolved event sink. Prefers an explicit CRM webhook, else the backend /api/track. */
export function trackSink(): string | null {
  const explicit = process.env.CRM_WEBHOOK_URL;
  if (explicit) return explicit;
  const apiBase = process.env.APPIDO_API_BASE;
  if (apiBase) return apiBase.replace(/\/$/, "") + "/api/track";
  return null;
}

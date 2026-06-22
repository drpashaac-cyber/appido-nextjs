import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Lightweight event sink. Set CRM_WEBHOOK_URL to forward events to your CRM / n8n / webhook.
export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    // Default sink is the backend's public /api/track; CRM_WEBHOOK_URL overrides it.
    const webhook = process.env.CRM_WEBHOOK_URL
      || (process.env.APPIDO_API_BASE ? process.env.APPIDO_API_BASE.replace(/\/$/, "") + "/api/track" : "");
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...event,
          ts: Date.now(),
          country: req.headers.get("x-vercel-ip-country") ?? null,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Proxies the support widget's question to the backend public advisor (/v1/ai/advisor-public).
// Keeps the backend origin server-side; returns a graceful empty answer if no backend is configured.
export async function POST(req: NextRequest) {
  try {
    const { question, lang } = (await req.json()) as { question?: string; lang?: string };
    const base = process.env.APPIDO_API_BASE?.replace(/\/$/, "");
    if (!base || !question) return NextResponse.json({ answer: "" });
    const res = await fetch(`${base}/v1/ai/advisor-public`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: String(question).slice(0, 1000), lang }),
    });
    if (!res.ok) return NextResponse.json({ answer: "" });
    const data = (await res.json()) as { answer?: string };
    return NextResponse.json({ answer: data.answer ?? "" });
  } catch {
    return NextResponse.json({ answer: "" }, { status: 200 });
  }
}

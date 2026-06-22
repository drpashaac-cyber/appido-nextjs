import { I } from "../icons";
import { APP_URL } from "../../lib/site";
import type { Dictionary } from "@/lib/dictionaries";

export function Hero({ dict, trialDays = 14 }: { dict: Dictionary; trialDays?: number }) {
  const h = dict.hero;
  const cta1 = h.cta1.replace(/\b14\b/, String(trialDays));
  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">
            <I.spark />
            {h.eyebrow}
          </span>
          <h1 className="h1">{h.title}</h1>
          <p className="lead">{h.sub}</p>
          <div className="hero-cta">
            <a href={APP_URL} className="btn btn-mint">
              {cta1}
              <I.arrow />
            </a>
            <a href="#" className="btn btn-ghost">
              {h.cta2}
            </a>
          </div>
          <div className="hero-note">{h.note}</div>
          <div className="hero-metrics">
            {h.metrics.map((m, i) => (
              <div className="metric" key={i}>
                <div className="mv">{m.v}</div>
                <div className="ml">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mock" aria-hidden="true">
          <div className="mock-head">
            <span className="mock-title">Appido · Revenue</span>
            <span className="mock-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
          <div className="mock-stats">
            <div className="mock-stat">
              <div className="v">$9.1k</div>
              <div className="l">MRR</div>
            </div>
            <div className="mock-stat">
              <div className="v">18%</div>
              <div className="l">Conv.</div>
            </div>
            <div className="mock-stat">
              <div className="v">312</div>
              <div className="l">Leads</div>
            </div>
          </div>
          <div className="mock-chart">
            <div className="mock-bar" style={{ height: "38%" }}></div>
            <div className="mock-bar" style={{ height: "52%" }}></div>
            <div className="mock-bar" style={{ height: "44%" }}></div>
            <div className="mock-bar mid" style={{ height: "66%" }}></div>
            <div className="mock-bar" style={{ height: "58%" }}></div>
            <div className="mock-bar hi" style={{ height: "88%" }}></div>
            <div className="mock-bar hi" style={{ height: "100%" }}></div>
          </div>
          <div className="mock-chat">
            <span className="mock-ai">
              <I.bot />
            </span>
            <span className="mock-bubble">
              <b>AI agent</b> — qualified lead, sent payment link, access granted automatically.
            </span>
          </div>
          <span className="mock-badge">
            <I.spark />
            24/7
          </span>
        </div>
      </div>
    </section>
  );
}

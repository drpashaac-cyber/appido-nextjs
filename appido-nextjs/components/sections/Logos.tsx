import { I } from "../icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Logos({ dict }: { dict: Dictionary }) {
  return (
    <section className="logos">
      <div className="wrap">
        <div className="logos-label">{dict.logos}</div>
        <div className="logos-row">
          <span className="logo-chip">
            <I.send />
            Telegram
          </span>
          <span className="logo-chip">
            <I.coin />
            Stripe
          </span>
          <span className="logo-chip">
            <I.coin />
            USDT
          </span>
          <span className="logo-chip">
            <I.flow />
            n8n
          </span>
          <span className="logo-chip">
            <I.crm />
            AmoCRM
          </span>
          <span className="logo-chip">
            <I.chart />
            Bitrix24
          </span>
        </div>
      </div>
    </section>
  );
}

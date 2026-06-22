import { I } from "../icons";
import { APP_URL } from "../../lib/site";
import type { Dictionary } from "@/lib/dictionaries";

export function FinalCta({ dict }: { dict: Dictionary }) {
  const f = dict.finalCta;
  return (
    <section className="wrap">
      <div className="final">
        <h2 className="h2">{f.title}</h2>
        <p className="lead">{f.sub}</p>
        <div className="final-cta">
          <a href={APP_URL} className="btn btn-mint">
            {f.cta1}
            <I.arrow />
          </a>
          <a href="#" className="btn btn-ghost">
            {f.cta2}
          </a>
        </div>
        <div className="final-note">{f.note}</div>
      </div>
    </section>
  );
}

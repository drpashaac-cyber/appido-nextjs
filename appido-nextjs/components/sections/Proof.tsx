import { I } from "../icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Proof({ dict }: { dict: Dictionary }) {
  const p = dict.proof;
  return (
    <section className="sec proof" id="proof">
      <div className="wrap center">
        <span className="eyebrow">
          <I.star />
          {p.eyebrow}
        </span>
        <h2 className="h2">{p.title}</h2>
        <div className="pgrid" style={{ textAlign: "start" }}>
          {p.cases.map((c, i) => (
            <div className="pcard" key={i}>
              <div className="q">{c.q}</div>
              <div className="who">{c.n}</div>
              <div className="res">
                {c.r.map((r, j) => (
                  <span className="pill" key={j}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

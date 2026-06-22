import { I, FI } from "../icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Features({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <section className="sec wrap center" id="features">
      <span className="eyebrow">
        <I.spark />
        {f.eyebrow}
      </span>
      <h2 className="h2">{f.title}</h2>
      <div className="grid3" style={{ textAlign: "start" }}>
        {f.items.map((item, i) => {
          const Ico = FI[item.icon] ?? FI.Bot;
          return (
            <div className="fcard" key={i}>
              <div className="ficon">
                <Ico />
              </div>
              <h3>{item.t}</h3>
              <p>{item.d}</p>
              <span className="fk">
                <I.trend />
                {item.k}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

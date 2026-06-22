import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const f = dict.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="logo">Appido</div>
            <p className="ftag">{f.tagline}</p>
          </div>
          {f.cols.map((col, i) => (
            <div className="fcol" key={i}>
              <h4>{col.h}</h4>
              {col.l.map((link, j) => (
                <a href="#" key={j}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="fbottom">
          <span>© 2026 Appido · appido.io</span>
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}

import { projects } from "@/data/content";
import { Chips } from "./Chip";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionLabel n="03" title="Projects" color="teal" />
        <h2 className="section-title">
          Three projects,
          <br />
          each ending
          <br />
          in <span className="grad">an audit</span>
        </h2>

        <div className="projects">
          {projects.map((p) => (
            <article
              className="proj"
              key={p.title}
              style={{ ["--c" as string]: `var(--${p.color})` }}
            >
              <div className="body">
                <div className="kind">{p.kind}</div>
                <h3>{p.title}</h3>
                <p className="finding">
                  {p.body.map((part, i) =>
                    part.strong ? <b key={i}>{part.strong}</b> : <span key={i}>{part.text}</span>,
                  )}
                </p>
                <div className="tags">
                  <Chips skills={p.skills} />
                </div>
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="figure">
                <div className="metric">
                  {p.metric.map((m) => (
                    <div className="row" key={m.label}>
                      <span className="rl">{m.label}</span>
                      <span className="track">
                        <span
                          className="fill"
                          style={{
                            width: `${m.pct}%`,
                            ...(m.muted ? { background: "#facc15" } : {}),
                          }}
                        />
                      </span>
                      <span className="rv">{m.value}</span>
                    </div>
                  ))}
                  <div className="cap">{p.caption}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

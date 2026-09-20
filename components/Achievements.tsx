import { achievements } from "@/data/content";
import { Chips } from "./Chip";
import { SectionLabel } from "./SectionLabel";

export function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <SectionLabel n="04" title="Achievements" color="amber" />
        <h2 className="section-title">
          Awards, papers
          <br />
          <span className="thin">and talks</span>
        </h2>
        <div className="stack">
          {achievements.map((a) => (
            <div
              className="stack-card"
              key={a.title}
              style={{ ["--c" as string]: `var(--${a.color})` }}
            >
              <h4>{a.title}</h4>
              <p className="sub">{a.sub}</p>
              <Chips skills={a.tags.map((t) => ({ name: t }))} />
              {a.href && (
                <a className="readmore" href={a.href} target="_blank" rel="noopener noreferrer">
                  Read the paper
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

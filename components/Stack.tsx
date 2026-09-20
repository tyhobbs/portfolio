import { stack } from "@/data/content";
import { Chips } from "./Chip";
import { SectionLabel } from "./SectionLabel";

export function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SectionLabel n="02" title="Stack" color="violet" />
        <h2 className="section-title">
          Tools I&apos;ve
          <br />
          <span className="thin">actually</span> shipped with
        </h2>
        <div className="stack">
          {stack.map((card) => (
            <div
              className="stack-card"
              key={card.title}
              style={{ ["--c" as string]: `var(--${card.color})` }}
            >
              <h4>{card.title}</h4>
              <p className="sub">{card.sub}</p>
              <Chips skills={card.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

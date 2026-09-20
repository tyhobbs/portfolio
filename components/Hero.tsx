import { person, stats } from "@/data/content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <h1>
          {person.title[0]}
          <br />
          {person.title[1]}
          <br />
          <span className="grad">{person.title[2]}</span>
        </h1>
        <p className="lead">
          {person.lead}
          <b>{person.leadStrong}</b>
          {person.leadEnd}
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View projects
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label} style={{ ["--c" as string]: `var(--${s.color})` }}>
              <div className="v">{s.value}</div>
              <div className="k">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

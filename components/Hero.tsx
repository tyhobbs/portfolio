import { person, stats } from "@/data/content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <h1 className="name-big">
          {person.firstName}
          <br />
          <span className="grad">{person.lastName}</span>
        </h1>
        <p className="role-line">
          {person.role[0]} <span className="grad">{person.role[1]}</span>
        </p>
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

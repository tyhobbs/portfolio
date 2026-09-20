import { links, person, sections } from "@/data/content";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href={links.github} target="_blank" rel="noopener noreferrer">
          <svg className="gh">
            <use href="#i-github" />
          </svg>
          <span>{person.handle}</span>
        </a>
        <nav className="links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={links.resume}>
          Resume
        </a>
      </div>
    </header>
  );
}

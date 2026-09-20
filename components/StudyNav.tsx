import { links, person } from "@/data/content";

export function StudyNav() {
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
          <a href="/">Home</a>
          <a href="/work">Case studies</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={links.resume}>
          Resume
        </a>
      </div>
    </header>
  );
}

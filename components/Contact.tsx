import { links, person } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

const rows = [
  { label: "Email", value: "tyhobbs612@gmail.com", href: links.email },
  { label: "GitHub", value: "tyhobbs", href: links.github },
  { label: "LinkedIn", value: "tylerhobbs2", href: links.linkedin },
  { label: "Hugging Face", value: "tyhob", href: links.huggingface },
];

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <SectionLabel n="05" title="Contact" color="rose" />
          <h2 className="section-title">
            Let&apos;s talk about
            <br />
            <span className="grad">measurement</span>
          </h2>
          <p>
            Open to ML engineer and applied scientist roles starting 2027. The fastest way to reach
            me is email.
          </p>
        </div>
        <div className="links">
          {rows.map((r) => (
            <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer">
              {r.label} <span>{r.value}</span>
            </a>
          ))}
        </div>
      </div>
      <footer>
        <div className="wrap">
          <span>
            {person.name} — {new Date().getFullYear()}
          </span>
          <span>{person.location}</span>
        </div>
      </footer>
    </section>
  );
}

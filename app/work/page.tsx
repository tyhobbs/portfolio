import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { IconSprite } from "@/components/IconSprite";
import { SectionLabel } from "@/components/SectionLabel";
import { StudyNav } from "@/components/StudyNav";

export const metadata: Metadata = {
  title: "Case studies — Tyler Hobbs",
  description: "Write-ups of three machine learning projects, each ending in an audit.",
};

export default function WorkIndex() {
  return (
    <>
      <IconSprite />
      <StudyNav />
      <section className="hero" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <SectionLabel n="—" title="Case studies" color="teal" />
          <h1 style={{ maxWidth: "14ch" }}>
            The long
            <br />
            <span className="grad">version</span>
          </h1>
          <p className="lead">
            What each project set out to do, what it actually found, and what I&apos;d do
            differently.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tl">
            {caseStudies.map((c) => (
              <a
                className="tl-item study-link"
                key={c.slug}
                href={`/work/${c.slug}`}
                style={{ ["--c" as string]: `var(--${c.color})` }}
              >
                <div className="tl-head">
                  <h3>{c.title}</h3>
                  <div className="org">{c.kind}</div>
                  <div className="when">{c.date}</div>
                </div>
                <div className="tl-body">
                  <p>{c.lede}</p>
                  <span className="readmore">Read the case study</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

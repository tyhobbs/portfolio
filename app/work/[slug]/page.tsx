import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bySlug, caseStudies, type Block } from "@/data/case-studies";
import { IconSprite } from "@/components/IconSprite";
import { StudyNav } from "@/components/StudyNav";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = bySlug(slug);
  if (!study) return {};
  return { title: `${study.title} — Tyler Hobbs`, description: study.lede.slice(0, 160) };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("p" in b) return <p key={i}>{b.p}</p>;
        if ("list" in b)
          return (
            <ul className="findings" key={i}>
              {b.list.map((item, j) => (
                <li key={j}>
                  {item.strong && <b>{item.strong}</b>}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        return (
          <div className="table-scroll" key={i}>
            <table className="data">
              <thead>
                <tr>
                  {b.table.head.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.table.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k} className={k === row.length - 1 ? "n" : undefined}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = bySlug(slug);
  if (!study) notFound();

  const i = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <div style={{ ["--c" as string]: `var(--${study.color})` }}>
      <IconSprite />
      <StudyNav />

      <section className="hero study-head">
        <div className="wrap">
          <div className="kind">{study.kind}</div>
          <h1 style={{ fontSize: "clamp(38px,6.4vw,84px)" }}>{study.title}</h1>
          <p className="lead">{study.lede}</p>
          {study.credits && <p className="credits">{study.credits}</p>}
          <div className="hero-actions">
            {study.links.map((l) => (
              <a className="btn" key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {study.sections.map((s) => (
        <section key={s.h} className="study-section">
          <div className="wrap prose">
            <h2>{s.h}</h2>
            <Blocks blocks={s.blocks} />
          </div>
        </section>
      ))}

      <section className="study-section">
        <div className="wrap next">
          <a className="readmore" href={`/work/${prev.slug}`}>
            ← {prev.title}
          </a>
          <a className="readmore" href={`/work/${next.slug}`}>
            {next.title} →
          </a>
        </div>
      </section>
    </div>
  );
}

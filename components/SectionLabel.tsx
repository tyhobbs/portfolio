export function SectionLabel({ n, title, color }: { n: string; title: string; color: string }) {
  return (
    <div className="label" style={{ ["--c" as string]: `var(--${color})` }}>
      <span className="n">{n}</span>
      <span className="t">{title}</span>
      <span className="rule" />
    </div>
  );
}

import type { Skill } from "@/data/content";

export function Chip({ skill }: { skill: Skill }) {
  const cls = skill.icon ? `chip b-${skill.icon}` : "chip";
  return (
    <span className={cls}>
      {skill.icon && (
        <svg>
          <use href={`#i-${skill.icon}`} />
        </svg>
      )}
      {skill.img && <img src={skill.img} alt="" />}
      {skill.wordmark && <img className="wordmark" src={skill.wordmark} alt={skill.name} />}
      {skill.name}
    </span>
  );
}

export function Chips({ skills }: { skills: Skill[] }) {
  return (
    <div className="chips">
      {skills.map((s) => (
        <Chip key={s.name} skill={s} />
      ))}
    </div>
  );
}

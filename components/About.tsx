"use client";

import { useState } from "react";
import { education, experience, type Entry } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

function Item({ entry }: { entry: Entry }) {
  return (
    <div className="tl-item">
      <div className="tl-head">
        <h3>{entry.title}</h3>
        <div className="org">{entry.org}</div>
        <div className="when">{entry.when}</div>
      </div>
      <div className="tl-body">
        {entry.description && <p>{entry.description}</p>}
      </div>
    </div>
  );
}

export function About() {
  const [mode, setMode] = useState<"experience" | "education">("experience");
  const entries = mode === "experience" ? experience : education;

  return (
    <section id="about">
      <div className="wrap">
        <SectionLabel n="01" title="About" color="accent" />
        <h2 className="section-title">
          From the lab
          <br />
          bench to <span className="grad">model evaluation</span>
        </h2>

        <div className="toggle">
          <button
            className={mode === "experience" ? "on" : ""}
            onClick={() => setMode("experience")}
          >
            Experience
          </button>
          <button
            className={mode === "education" ? "on" : ""}
            onClick={() => setMode("education")}
          >
            Education
          </button>
        </div>

        <div className="tl">
          {entries.map((e) => (
            <Item key={`${e.org}-${e.title}`} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

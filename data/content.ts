// ---------------------------------------------------------------------------
// Everything you'll edit lives in this file.
// ---------------------------------------------------------------------------

export type Skill = {
  name: string;      // also the image alt text
  label?: string;    // shown instead of name, when a wordmark carries the name
  icon?: string;      // a slug in data/icon-sprite.ts
  img?: string;       // a square logo in /public
  wordmark?: string;  // a wide logo in /public, shown instead of a square icon
};

export const person = {
  name: "Tyler Hobbs",
  handle: "tyhobbs",
  title: ["Machine", "Learning", "Engineer"],
  lead:
    "I build models, then check whether their numbers mean what they appear to. " +
    "Four years in proteomics and genomics labs, now finishing an ",
  leadStrong: "M.S. in Data Science at UVA",
  leadEnd: ". My projects tend to end with an audit.",
  location: "Boulder, Colorado",
};

export const links = {
  resume: "/Resume_DS.pdf", // put the PDF in /public and point here, e.g. "/tyler-hobbs-resume.pdf"
  github: "https://github.com/tyhobbs",
  linkedin: "https://www.linkedin.com/in/tylerhobbs2/",
  huggingface: "https://huggingface.co/tyhob",
  email: "mailto:tyhobbs612@gmail.com",
};

export const stats = [
  { value: "Dec 2026", label: "M.S. Data Science, UVA", color: "accent" },
  { value: "4 yrs", label: "Genomics & proteomics labs", color: "violet" },
  { value: "3", label: "Research projects shipped", color: "teal" },
  { value: "1", label: "Award, UVA Ophthalmology", color: "amber" },
];

export type Entry = {
  title: string;
  org: string;
  when: string;
  description?: string;
};

export const experience: Entry[] = [
  {
    title: "Clinical Laboratory Technician II",
    org: "Illumina",
    when: "2026 — Present · Boulder, CO",
    description:
      "Clinical genomics workflows under regulated quality systems, where every reported result has to trace back to a validated measurement.",
  },
  {
    title: "Laboratory Associate II",
    org: "Standard BioTools (formerly SomaLogic)",
    when: "2022 — 2026 · Boulder, CO",
    description:
      "Ran high-throughput proteomics assays and traced sources of run-to-run variation. Where the habit of separating real effects from noise started.",
  },
];

export const education: Entry[] = [
  {
    title: "M.S. Data Science",
    org: "University of Virginia",
    when: "Jan 2025 — Dec 2026",
    description:
      "Capstone in medical image segmentation, with coursework across machine learning, deep learning and statistical inference.",
  },
  {
    title: "B.A. Molecular, Cellular & Developmental Biology",
    org: "University of Colorado Boulder",
    when: "2018 — 2021",
  },
];

export const stack = [
  {
    title: "Languages",
    sub: "What I write day to day.",
    color: "accent",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "mysql" },
      { name: "R", icon: "r" },
      { name: "Bash", icon: "gnubash" },
      { name: "HTML / CSS", icon: "html5" },
    ],
  },
  {
    title: "ML & DL frameworks",
    sub: "What I train models with.",
    color: "violet",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Stable-Baselines3" },
      { name: "FinRL", img: "/finrl.png" },
      { name: "tidymodels", img: "/tidymodels.png" },
    ],
  },
  {
    title: "ML techniques",
    sub: "Methods I've worked in.",
    color: "rose",
    skills: [
      { name: "Reinforcement learning (PPO)" },
      { name: "Transformers" },
      { name: "CNNs" },
      { name: "Semantic segmentation" },
      { name: "LoRA / PEFT" },
      { name: "GRPO" },
      { name: "FinBERT" },
      { name: "Attention mechanisms" },
    ],
  },
  {
    title: "Data & visualisation",
    sub: "Getting it clean, then showing it.",
    color: "teal",
    skills: [
      { name: "pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Plotly / Dash", icon: "plotly" },
      { name: "D3.js", icon: "d3" },
      { name: "Matplotlib", img: "/matplotlib.png" },
      { name: "Power BI", icon: "powerbi" },
      { name: "Tableau", icon: "tableau" },
    ],
  },
  {
    title: "Infrastructure & deployment",
    sub: "Where it runs.",
    color: "amber",
    skills: [
      { name: "Flask", icon: "flask" },
      { name: "Git", icon: "git" },
      { name: "Render", icon: "render" },
      { name: "HPC (SLURM)" },
      { name: "REST APIs" },
      { name: "Gradio", icon: "gradio" },
    ],
  },
  {
    title: "Currently exploring",
    sub: "What I'm learning next.",
    color: "lime",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
    ],
  },
];

export type Project = {
  kind: string;
  title: string;
  color: string;
  body: { text: string; strong?: string }[];
  skills: Skill[];
  links: { label: string; href: string }[];
  metric: { label: string; value: string; pct: number; muted?: boolean }[];
  caption: string;
};

export const projects: Project[] = [
  {
    kind: "LLM fine-tuning",
    title: "LoadBrief",
    color: "violet",
    body: [
      { text: "A LoRA fine-tune of Llama 3 8B that writes structured athlete load-management briefs. It scored " },
      { text: "", strong: "0.960" },
      { text: " on risk classification — then a bag-of-words baseline scored " },
      { text: "", strong: "0.950" },
      { text: ", and the paper became about why." },
    ],
    skills: [
      { name: "Llama 3 8B", icon: "meta" },
      { name: "LoRA" },
      { name: "LLM-as-judge" },
      { name: "Rivanna HPC" },
    ],
    links: [
      { label: "Case study", href: "/work/loadbrief" },
      { label: "Paper", href: "https://github.com/tyhobbs/LoadBrief/blob/main/Loadbrief.pdf" },
      { label: "Code", href: "https://github.com/tyhobbs/LoadBrief" },
      { label: "Model", href: "https://huggingface.co/tyhob/loadbrief" },
      { label: "Dataset", href: "https://huggingface.co/datasets/tyhob/loadbrief-50k" },
    ],
    metric: [
      { label: "Base model", value: "0.000", pct: 1 },
      { label: "TF-IDF baseline", value: "0.950", pct: 95 },
      { label: "LoRA fine-tune", value: "0.960", pct: 96 },
    ],
    caption: "Exact risk-classification accuracy",
  },
  {
    kind: "Computer vision · Award winner",
    title: "Automated glaucoma screening",
    color: "teal",
    body: [
      { text: "Optic disc and cup segmentation across four public datasets. Strong on benchmarks at " },
      { text: "", strong: "0.844" },
      { text: " Dice, it fell to " },
      { text: "", strong: "0.251" },
      { text: " on real UVA clinic images. Hybrid training closed part of the gap." },
    ],
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "U-Net++" },
      { name: "Domain shift" },
      { name: "Gradio", icon: "gradio" },
    ],
    links: [
      { label: "Case study", href: "/work/glaucoma" },
      { label: "Live demo", href: "https://huggingface.co/spaces/tyhob/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy" },
      { label: "Paper", href: "https://github.com/Rjashby1/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy/blob/main/Automated_Glaucoma_Screening_Using_AI_Enhanced_Ophthalmoscopy.pdf" },
      { label: "Code", href: "https://github.com/Rjashby1/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy" },
    ],
    metric: [
      { label: "Public test", value: "0.844", pct: 84 },
      { label: "Clinical, zero-shot", value: "0.251", pct: 25 },
      { label: "Clinical, hybrid", value: "0.330", pct: 33 },
    ],
    caption: "Dice score, public vs. clinical images",
  },
  {
    kind: "Reinforcement learning",
    title: "Deep RL stock trading",
    color: "amber",
    body: [
      { text: "PPO agents with FinBERT news sentiment, deployed to live paper trading. Single-seed backtests looked strong; across " },
      { text: "", strong: "17 runs" },
      { text: " the seed moved Sharpe more than any design choice, and nothing beat buy-and-hold." },
    ],
    skills: [
      { name: "FinRL", img: "/finrl.png" },
      { name: "PPO" },
      { name: "FinBERT" },
      { name: "Massive, formerly Polygon.io", label: "(Polygon.io)", wordmark: "/massive.png" },
      { name: "Multi-seed evaluation" },
    ],
    links: [
      { label: "Case study", href: "/work/finrl" },
      { label: "Paper", href: "https://github.com/tyhobbs/FinRL_Deep_Reinforcement_Learning/blob/main/FinRL_paper.pdf" },
      { label: "Dashboard", href: "https://tyhobbs.github.io/FinRL_Deep_Reinforcement_Learning/" },
      { label: "Code", href: "https://github.com/tyhobbs/FinRL_Deep_Reinforcement_Learning" },
    ],
    metric: [
      { label: "30 stocks", value: "0.68", pct: 32 },
      { label: "35 stocks", value: "1.35", pct: 64 },
      { label: "40 stocks", value: "1.53", pct: 72 },
      { label: "Buy & hold", value: "1.68", pct: 80, muted: true },
    ],
    caption: "Mean test Sharpe by universe size",
  },
];

export const achievements = [
  {
    title: "Most Innovative Analytical Solution",
    sub: "UVA Ophthalmology capstone award, 2026",
    color: "amber",
    tags: ["Award"],
    href: "",
  },
  {
    title: "Label provenance and metric validity in LLM fine-tuning",
    sub: "LoadBrief — how a 0.960 accuracy turned out to be recoverable by a bag-of-words baseline",
    color: "violet",
    tags: ["Paper"],
    href: "https://github.com/tyhobbs/LoadBrief/blob/main/Loadbrief.pdf",
  },
  {
    title: "Automated glaucoma screening using AI-enhanced ophthalmoscopy",
    sub: "Optic disc and cup segmentation, and the public-to-clinical domain gap",
    color: "teal",
    tags: ["Paper"],
    href: "https://github.com/Rjashby1/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy/blob/main/Automated_Glaucoma_Screening_Using_AI_Enhanced_Ophthalmoscopy.pdf",
  },
  {
    title: "Deep reinforcement learning for automated stock trading",
    sub: "PPO with news sentiment, and what multi-seed evaluation did to the result",
    color: "accent",
    tags: ["Paper"],
    href: "https://github.com/tyhobbs/FinRL_Deep_Reinforcement_Learning/blob/main/FinRL_paper.pdf",
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Case studies", href: "/work" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

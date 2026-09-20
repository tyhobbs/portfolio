// ---------------------------------------------------------------------------
// Case study pages. Each one becomes /work/<slug>.
// Add a study here and it appears on /work automatically.
// ---------------------------------------------------------------------------

export type Block =
  | { p: string }
  | { list: { strong?: string; text: string }[] }
  | { table: { head: string[]; rows: string[][] } };

export type Section = { h: string; blocks: Block[] };

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  color: string;
  date: string;
  lede: string;
  credits?: string;
  links: { label: string; href: string }[];
  sections: Section[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loadbrief",
    title: "LoadBrief",
    kind: "LLM fine-tuning",
    color: "violet",
    date: "August 2026",
    lede:
      "LoadBrief turns a free-text athlete monitoring summary — training load, heart-rate variability and wellness scores — into a structured load-management brief written for an athlete, a coach or a sports scientist. The fine-tuned model reached 0.960 exact risk-classification accuracy, up from 0.000 for the untuned base model. Auditing that number became the real project.",
    links: [
      { label: "Paper", href: "https://github.com/tyhobbs/LoadBrief/blob/main/Loadbrief.pdf" },
      { label: "Code", href: "https://github.com/tyhobbs/LoadBrief" },
      { label: "Model", href: "https://huggingface.co/tyhob/loadbrief" },
      { label: "Dataset", href: "https://huggingface.co/datasets/tyhob/loadbrief-50k" },
    ],
    sections: [
      {
        h: "What I built",
        blocks: [
          {
            p: "A rule-based simulator generates the corpus: athlete profiles, monitoring time series, narrative summaries and reference briefs in three audience registers. The model is a LoRA fine-tune of Llama 3 8B Instruct, trained on UVA's Rivanna cluster through eight revisions of the corpus with the same supervised fine-tuning configuration each time. I also explored a GRPO variant, which isn't part of the release.",
          },
          {
            p: "Evaluation combines rule-based metrics, a composite reward and an LLM-as-judge that I calibrated by scoring the ground-truth briefs themselves. A single verification script re-derives every table in the paper from the released artifacts and exits non-zero if any check fails.",
          },
        ],
      },
      {
        h: "What I found",
        blocks: [
          {
            p: "Rule-generated data isn't self-validating, and neither are the metrics used to score models trained on it. Five findings, each measured against the released artifacts:",
          },
          {
            list: [
              {
                strong: "Both labels are constant per scenario.",
                text: " Risk level and overreaching class are written from the scenario definition rather than computed from the sampled signals, so each of the 19 scenarios maps to exactly one value. A TF-IDF classifier recovers the risk label from the narrative at 0.950, within a point of the fine-tune, so the headline accuracy can't be evidence of clinical reasoning.",
              },
              {
                strong: "16.1% of records contradict themselves.",
                text: " 2,412 pair critically suppressed heart-rate variability with a low-risk header, and 4,021 name one overreaching class in the narrative and a different one in the classification section.",
              },
              {
                strong: "Three consistency guards pass every one of those records,",
                text: " each for a different structural reason. Passing all three isn't evidence of consistency.",
              },
              {
                strong: "The composite reward is mis-specified against its own reference data.",
                text: " Its 0.701 ceiling comes from components the ground-truth briefs can't earn, and an untuned model already scores 0.422, leaving a usable range of 0.279.",
              },
              {
                strong: "The overreaching metric can't read 45% of correct answers.",
                text: " What looked like a capability loss across seven revisions was a change in the generator, not the model.",
              },
            ],
          },
        ],
      },
      {
        h: "Why I released it with its defects",
        blocks: [
          {
            p: "Rather than start another fix cycle, which would likely have led to another after it, I released the corpus and model with their defects documented, so the two stay consistent with each other. The repository and dataset card list each defect and how many records it affects.",
          },
          {
            p: "The paper recommends seven inexpensive checks, each of which would have caught a defect this project carried through multiple training cycles: audit whether declared generation targets are reachable, state where labels come from, validate extraction metrics against reference outputs, decompose composite rewards against ground truth, calibrate model-based judges against ground truth, keep a guard's scope independent of the data it inspects, and pair deterministic with model-based evaluation.",
          },
        ],
      },
      {
        h: "Limitations",
        blocks: [
          {
            p: "LoadBrief is a research artifact, not a medical device. The corpus is synthetic, and the released model reproduces its documented defects, so neither should inform decisions about a real person's training or health.",
          },
        ],
      },
    ],
  },
  {
    slug: "glaucoma",
    title: "Automated glaucoma screening",
    kind: "Computer vision · Award winner",
    color: "teal",
    date: "May 2026",
    lede:
      "The vertical cup-to-disc ratio, measured from the optic nerve head, is a key structural marker in glaucoma screening. This capstone, sponsored by UVA Ophthalmology, built a reproducible pipeline that segments the optic disc and cup from retinal fundus images and estimates that ratio, then measured how well a model trained on public data works on real clinic images. It received the Most Innovative Analytical Solution award.",
    credits:
      "Team project with Robert Judson Ashby, Emmanuel Gyamfi and Michael Ieraci. Sponsor: Dr. Arjun Dirghangi. Faculty mentor: Dr. Aiying Zhang.",
    links: [
      {
        label: "Paper",
        href: "https://github.com/Rjashby1/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy/blob/main/Automated_Glaucoma_Screening_Using_AI_Enhanced_Ophthalmoscopy.pdf",
      },
      {
        label: "Code",
        href: "https://github.com/Rjashby1/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy",
      },
      {
        label: "Live demo",
        href: "https://huggingface.co/spaces/tyhob/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy",
      },
      {
        label: "Results dashboard",
        href: "https://rjashby1.github.io/Automated-Glaucoma-Screening-Using-AI-Enhanced-Ophthalmoscopy/",
      },
    ],
    sections: [
      {
        h: "Data",
        blocks: [
          {
            p: "The public data is 3,358 fundus images with disc and cup annotations from four datasets: ORIGA (650), G1020 (1,020), REFUGE (1,200) and PAPILA (488). ORIGA, G1020 and PAPILA use leakage-aware, group-wise 70/15/15 splits, and REFUGE keeps its official partitions.",
          },
          {
            p: "The clinical data is de-identified fundus images from the UVA Department of Ophthalmology, accessed under a data-use agreement with required human-subjects training. Ground truth came from clinically provided annotations, giving 59 mask-ready samples from 20 patient or encounter groups. That data is private and isn't included in the repository.",
          },
        ],
      },
      {
        h: "Approach",
        blocks: [
          {
            p: "We compared U-Net, U-Net++ and DeepLabV3+ under a shared training budget, with images resized to 256 by 256, encoders trained from scratch and a combined Dice and cross-entropy loss. U-Net++ with a ResNet-18 encoder was selected.",
          },
          {
            p: "With the architecture fixed, we varied the data pipeline instead of the model: online augmentation, a synthetic expansion strategy for probing data scaling, and a longer 25-epoch schedule. Extended training gave the clearest public gain, raising held-out mean foreground Dice from 0.818 to 0.842.",
          },
        ],
      },
      {
        h: "Results",
        blocks: [
          {
            table: {
              head: ["Evaluation", "Metric", "Value"],
              rows: [
                ["Public-only model, long training", "Public test mean foreground Dice", "0.842"],
                ["Zero-shot on clinical images", "Patient-weighted Dice", "0.251"],
                ["Hybrid model", "Public test mean foreground Dice", "0.844"],
                ["Hybrid clinical adaptation", "Patient-weighted Dice", "0.265 → 0.330"],
                ["Hybrid clinical adaptation", "Cup-to-disc ratio error reduction", "0.122"],
              ],
            },
          },
          {
            list: [
              {
                strong: "A strong public model dropped sharply on clinical images,",
                text: " from 0.844 Dice to 0.251 — a large domain gap.",
              },
              {
                strong: "Clinical-only fine-tuning didn't improve",
                text: " over zero-shot performance at any fraction of the clinical data.",
              },
              {
                strong: "Hybrid public and clinical training partially closed the gap",
                text: " while preserving public performance.",
              },
            ],
          },
        ],
      },
      {
        h: "Limitations and next steps",
        blocks: [
          {
            p: "The system is exploratory and not clinically deployable. It reports structural measurements — segmentation and cup-to-disc ratio — not a diagnosis. The clinical set is small, and the disc Dice definition isn't yet consistent between public and clinical evaluation.",
          },
          {
            p: "The highest-value next step is a larger, segmentation-ready clinical dataset. Others include ImageNet-pretrained encoders with matched normalisation, and moving from cup-to-disc ratio toward automated DDLS scoring and from still frames toward video ophthalmoscopy.",
          },
        ],
      },
    ],
  },
  {
    slug: "finrl",
    title: "Deep RL stock trading",
    kind: "Reinforcement learning",
    color: "amber",
    date: "June 2026",
    lede:
      "A deep reinforcement learning system for daily stock trading, built on the FinRL framework with PPO agents, VGG and Cross-Stock Transformer feature extractors, and FinBERT sentiment over Polygon news. Single-seed backtests looked strong. Tested across random seeds and stock universes over the full test year, no configuration reliably beat an equal-weight buy-and-hold portfolio.",
    links: [
      { label: "Paper", href: "https://github.com/tyhobbs/FinRL_Deep_Reinforcement_Learning/blob/main/FinRL_paper.pdf" },
      { label: "Code", href: "https://github.com/tyhobbs/FinRL_Deep_Reinforcement_Learning" },
      {
        label: "Results dashboard",
        href: "https://tyhobbs.github.io/FinRL_Deep_Reinforcement_Learning/",
      },
    ],
    sections: [
      {
        h: "What I built",
        blocks: [
          {
            p: "The system trained on daily data from 2020 through 2023 and was tested on 2024. I built it as a one-variable-at-a-time ablation, changing sentiment, data source, architecture, stock universe and starting capital in turn, for 24 models in total. The reward combines a Sharpe term and a sentiment term with drawdown and concentration penalties.",
          },
        ],
      },
      {
        h: "How the evaluation changed",
        blocks: [
          { p: "The project went through three rounds of evaluation, each fixing a weakness in the one before it." },
          {
            list: [
              {
                strong: "Original ablation.",
                text: " One seed per model, with test metrics computed only up to each model's peak portfolio value while buy-and-hold was measured over the full year. That window flatters any strategy by construction, so those comparisons aren't valid out-of-sample results.",
              },
              {
                strong: "Multi-seed architecture check.",
                text: " Three seeds for each of four architectures. Two of the four didn't reproduce their single-seed Sharpe ratios.",
              },
              {
                strong: "Universe-size sweep.",
                text: " 17 runs across five nested universes from 30 to 50 stocks, with every metric computed per run over the full test year. Partway through, I found the numbers I'd recorded were averages rather than per-run results, so I re-evaluated every run.",
              },
            ],
          },
        ],
      },
      {
        h: "Results",
        blocks: [
          {
            table: {
              head: ["Universe", "Runs", "Sharpe, mean ± std", "Buy-and-hold", "Runs above"],
              rows: [
                ["30 stocks", "3", "0.68 ± 0.97", "1.54", "1"],
                ["35 stocks", "5", "1.35 ± 0.82", "1.64", "3"],
                ["40 stocks", "3", "1.53 ± 0.40", "1.68", "1"],
                ["45 stocks", "3", "1.24 ± 0.20", "1.71", "0"],
                ["50 stocks", "3", "1.33 ± 0.35", "1.67", "1"],
              ],
            },
          },
          {
            list: [
              {
                strong: "No universe size beat buy-and-hold on average,",
                text: " and only 6 of 17 runs beat their benchmark.",
              },
              {
                strong: "The random seed was the dominant variable.",
                text: " Seeds within one universe size spanned up to 2.0 Sharpe points, while the means across sizes spanned 0.85.",
              },
              { strong: "Universe size between 30 and 50 stocks was within seed noise.", text: "" },
              {
                strong: "A promising result dissolved.",
                text: " After three seeds, the 35-stock universe averaged 1.89 against a 1.64 benchmark. Two more seeds came in at 0.08 and 0.98, bringing the mean to 1.35.",
              },
            ],
          },
        ],
      },
      {
        h: "Running it live",
        blocks: [
          {
            p: "I deployed the 30-stock model to Alpaca paper trading on March 16, 2026, with daily scheduled execution, intraday stop-loss checks and end-of-day logging. Running it live surfaced problems the backtests didn't. Two sell paths in the trade-execution function each capped sales at the shares held, but together they could sell more than that and open short positions, so I fixed the position bookkeeping and confirmed the broker-side no-shorting setting as a backstop. I also added a 10% per-position cap and made the order scanner re-check live buying power before each order. I shut the deployment down in June 2026, once the multi-seed results showed there was no validated model to run.",
          },
        ],
      },
      {
        h: "What I'd carry forward",
        blocks: [
          {
            list: [
              { text: "Measure the model and the benchmark over the same full window." },
              {
                text: "Use multiple seeds before comparing designs. In a system like this, one seed is a single draw from a wide distribution.",
              },
              { text: "When a result looks promising, add seeds instead of re-running the weak ones." },
              { text: "Record per-run metrics, and keep aggregation separate from recording." },
            ],
          },
        ],
      },
    ],
  },
];

export const bySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

"use client";
import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const heroTags = [
  "ML Models",
  "Computer Vision",
  "NLP",
  "Predictive Analytics",
  "AI Integration",
  "MCP",
];

const subNavLinks = [
  "Overview",
  "Capabilities",
  "Method",
  "Proof",
  "Stack",
  "FAQ",
];

// Sparkline path for the "forecast accuracy" chart card.
const CHART_POINTS = [
  [0, 78],
  [40, 74],
  [80, 76],
  [120, 70],
  [160, 68],
  [200, 66],
  [240, 60],
  [280, 56],
  [320, 50],
  [360, 44],
  [400, 40],
  [440, 30],
  [480, 24],
  [520, 20],
  [560, 12],
  [600, 8],
];
type FaqItem = {
  question: string;
  answer: string;
};
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do we need our own model, or can we build on an API?",
    answer:
      "Usually an API-first build wins: faster to ship, cheaper to run, easier to swap. We reach for custom or fine-tuned models when latency, privacy or unit economics demand it — and we will show you the maths before recommending either.",
  },
  {
    question: "How much data do we need to get started?",
    answer:
      "Less than most teams assume. We can usually get a directional baseline running on a few months of history, then tell you exactly what more data would buy you in accuracy before you invest in collecting it.",
  },
  {
    question: "How long until something is live?",
    answer:
      "A scoped first model is typically in staging inside 3–4 weeks. Full production rollout with monitoring depends on your data plumbing, but most engagements ship something real inside a quarter.",
  },
  {
    question: "What about hallucinations and accuracy?",
    answer:
      "We evaluate against your business metric, not a generic benchmark, and we ship guardrails — retrieval grounding, confidence thresholds, human-in-the-loop review — proportional to the cost of being wrong.",
  },
  {
    question: "Where does our data live, and who can see it?",
    answer:
      "In your infrastructure by default. We work inside your cloud account and access controls rather than shipping data to a third-party platform, and we document exactly what leaves your perimeter, if anything.",
  },
  {
    question: "Who owns the models, the code and the weights?",
    answer:
      "You do. Every repository, trained artifact and fine-tune is delivered under your ownership at the end of the engagement — there is no vendor lock-in built into the contract.",
  },
  {
    question: "What does an AI / ML engagement cost?",
    answer:
      "It scales with scope, but most engagements start with a fixed-price discovery phase so you know the feasibility and the number before committing to the build.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The senior engineer who built it stays on. We monitor drift, retrain on schedule, and treat production incidents the same way we would treat our own — because we are still the ones on call.",
  },
];

function buildLinePath(points: number[][]) {
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
}

function buildAreaPath(points: number[][], baseline: number) {
  const line = buildLinePath(points);
  const [firstX] = points[0];
  const [lastX] = points[points.length - 1];
  return `${line} L${lastX},${baseline} L${firstX},${baseline} Z`;
}

const capabilities = [
  {
    n: "01",
    title: "Demand & sales forecasting",
    body: "Models that ingest history, seasonality and live signals to help teams plan inventory, staffing and spend with confidence.",
  },
  {
    n: "02",
    title: "Computer vision",
    body: "Detection, classification and OCR pipelines that run on the edge or in the cloud — built for messy real-world footage.",
  },
  {
    n: "03",
    title: "NLP & document intelligence",
    body: "Extraction, classification and summarisation across contracts, invoices, tickets and emails — grounded in your corpus.",
  },
  {
    n: "04",
    title: "Predictive analytics",
    body: "Churn, risk and propensity scoring delivered inside the tools your operators already live in.",
  },
  {
    n: "05",
    title: "AI integration & MCP",
    body: "LLM features embedded into your existing product — with Model Context Protocol connecting models to your systems safely.",
  },
  {
    n: "06",
    title: "Model ops & retraining",
    body: "Drift monitoring, evaluation harnesses and scheduled retraining so accuracy survives contact with next quarter.",
  },
];

const methodSteps = [
  {
    n: "01",
    week: "WEEK 0–1",
    title: "Data audit first",
    body: "Before any model talk, we audit what you actually have — coverage, quality, leakage risk. You get an honest feasibility read.",
  },
  {
    n: "02",
    week: "WEEKS 1–3",
    title: "Baseline before deep",
    body: "We ship the simplest model that moves the number, then earn complexity with GPU bills once there's a business case.",
  },
  {
    n: "03",
    week: "WEEKS 3–8",
    title: "Iterate against metrics",
    body: "Weekly evals on the metric you care about — euros, hours, stockouts — not abstract benchmark scores.",
  },
  {
    n: "04",
    week: "WEEK 8+",
    title: "Ship, monitor, retrain",
    body: "Production deployment with drift alarms and a retraining loop. The model keeps learning, so does the team.",
  },
];

const stack = [
  {
    label: "MODELLING",
    tools: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "ONNX"],
  },
  {
    label: "LANGUAGE & RETRIEVAL",
    tools: [
      "Anthropic Claude",
      "OpenAI",
      "Hugging Face",
      "LangChain",
      "Postgres + pgvector",
    ],
  },
  {
    label: "MODEL OPS & CLOUD",
    tools: ["MLflow", "AWS SageMaker"],
  },
];

const pairsWith = [
  {
    title: "Data Engineering & Analytics",
    body: "Pipelines, warehouses and BI that turn raw events into numbers your whole company trusts.",
  },
  {
    title: "AI Agent Development",
    body: "Goal-directed agents that execute multi-step workflows — voice, retrieval and ops — reliably.",
  },
  {
    title: "SaaS App Development",
    body: "Multi-tenant products with billing, RBAC and analytics — built to scale from first user to millions.",
  },
];

export default function AiMlSolutionsPage() {
  const linePath = buildLinePath(CHART_POINTS);
  const areaPath = buildAreaPath(CHART_POINTS, 110);
  const lastPoint = CHART_POINTS[CHART_POINTS.length - 1];
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      id="top"
      className={`${styles.page} min-h-screen bg-[#f4f4fa] text-[#0d0f21]`}
    >
      {/* ============ HERO ============ */}
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 8% 15%, rgba(255,122,89,0.14) 0%, rgba(244,244,250,0) 60%), radial-gradient(45% 55% at 92% 5%, rgba(99,102,241,0.12) 0%, rgba(244,244,250,0) 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-10 sm:px-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-[#ff5a34]">
              HOME
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-[#ff5a34]"
            >
              SERVICES
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#ff5a34]">AI</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#ff5a34]">ML</span>
          </nav>

          <div className="mt-14 grid grid-cols-1 items-start gap-16 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                <span className="h-px w-8 bg-slate-400" />
                DISCIPLINE 01 — OF 14
              </div>

              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight text-[#0d0f21] sm:text-[56px]">
                Production ML,
                <br />
                not{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  science projects.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500">
                Vision, language and prediction models wired into the tools your
                team already uses — shipped to production, measured on business
                outcomes, and maintained by the engineers who built them.
              </p>

              <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">98%</div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    Forecast accuracy shipped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    9+ yrs
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    Production software
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    1 day
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    First reply
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_60px_-25px_rgba(15,15,40,0.25)] backdrop-blur sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-slate-500">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    MODEL-OPS — LIVE
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.1em] text-slate-400">
                    DISCIPLINE 01 / 14
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    FORECAST ACCURACY · PRODUCTION
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-6xl font-semibold tracking-tight sm:text-7xl">
                      98
                    </span>
                    <span className="text-2xl font-semibold text-slate-400">
                      %
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                    <span aria-hidden>▲</span>
                    +1.4 pts this quarter
                  </div>
                </div>

                <div className="mt-6 -mx-2">
                  <svg
                    viewBox="0 0 600 120"
                    className="h-28 w-full"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Forecast accuracy trending upward over the quarter"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ff7a59"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ff7a59"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path d={areaPath} fill="url(#chartFill)" />
                    <path
                      d={linePath}
                      fill="none"
                      stroke="#ff5a34"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx={lastPoint[0]}
                      cy={lastPoint[1]}
                      r="5"
                      fill="#ff5a34"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Drift
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      Within bounds
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      P95 latency
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      212 ms
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Next retrain
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      Sun 02:00
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-6">
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ============ SUB-NAV BAR ============ */}
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            01 — AI / ML SOLUTIONS
          </div>

          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.1em] text-slate-500 md:flex"
          >
            {subNavLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="uppercase transition-colors hover:text-[#0d0f21]"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle dark mode"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-[#0d0f21] transition hover:border-[#ff5a34] hover:text-[#ff5a34]"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
            <a
              href="#book-a-call"
              className="whitespace-nowrap rounded-full bg-[#0d0f21] px-5 py-2.5 text-[11px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-[#1c1f3a]"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>

      {/* ============ THE DISCIPLINE ============ */}
      <section
        id="overview"
        className="relative scroll-mt-20 border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — THE DISCIPLINE
          </div>

          <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
                Most ML initiatives die between notebook and{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  production.
                </span>{" "}
                Ours don&apos;t.
              </h2>

              <dl className="mt-14 divide-y divide-slate-200 border-t border-slate-200">
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    DISCIPLINE
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    01 / 14
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    FOCUS
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    Applied intelligence
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    PROOF
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    98% forecast accuracy shipped
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    ENGAGEMENT
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    Senior-led · Lifetime support
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:pt-2">
              <p className="text-[17px] leading-relaxed text-slate-500">
                The industry is littered with proofs-of-concept that impressed a
                steering committee and never processed a single real
                transaction. The hard part of machine learning was never the
                model — it is the data plumbing, the retraining loop, the
                latency budget, and the dashboard a human actually checks at 8
                a.m.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-500">
                We build the whole thing.{" "}
                <span className="font-semibold text-[#0d0f21]">
                  Every model we ship comes wired into your operations
                </span>{" "}
                — ingesting live data, monitored for drift, and owned by senior
                engineers who stay on after launch. If a heuristic beats a
                neural network for your problem, we will tell you and charge you
                less.
              </p>

              <div className="mt-16">
                <div className="border-t border-slate-200 pb-4 pt-6 text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </div>
                <div className="divide-y divide-slate-200 border-t border-slate-200">
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21]">
                      Forecasting Model
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      98% accuracy
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21]">
                      LeadTrack AI
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      +38% conversion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU GET ============ */}
      <section
        id="capabilities"
        className="relative scroll-mt-20 border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — WHAT YOU GET
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
              Intelligence,{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                applied.
              </span>
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              Six engagements we run most often — each one scoped to a
              measurable business number, not an accuracy score in a slide.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.n} className="bg-white p-7">
                <div className="font-mono text-[11px] font-semibold text-[#ff5a34]">
                  {item.n}
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0d0f21]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE DELIVER ============ */}
      <section
        id="method"
        className="relative scroll-mt-20 border-b border-slate-200 bg-[#eef0f7]"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — HOW WE DELIVER
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
              Boring rigour,{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                exciting
              </span>{" "}
              results.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              The same discipline we apply to all software — adapted for systems
              that learn.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step) => (
              <div key={step.n}>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {step.n}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-500">
                    {step.week}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0d0f21]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROOF, NOT PROMISES ============ */}
      <section
        id="proof"
        className="relative scroll-mt-20 border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — PROOF, NOT PROMISES
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
              We have{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                shipped
              </span>{" "}
              this before.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              A machine-learning forecasting platform we designed, shipped and
              still operate — live, paid for, and earning its keep.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,0.25)] lg:grid-cols-[1.1fr_1fr]">
            {/* Illustration panel */}
            {/* Video Panel */}
            <div className="relative min-h-[320px] overflow-hidden bg-black">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
              >
                <source src="/forecasting-model.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Case study panel */}
            <div className="bg-white p-8 sm:p-10">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                CASE STUDY · AI / ML · SAAS
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#0d0f21]">
                Forecasting Model
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                Ingests historical sales, seasonality and live signals to
                predict demand — so teams plan inventory, staffing and spend
                with confidence instead of guesswork.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    98%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Accuracy
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    -58%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Stockouts
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    -41%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Excess stock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOOLS WE REACH FOR ============ */}
      <section
        id="stack"
        className="relative scroll-mt-20 border-b border-slate-200"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — TOOLS WE REACH FOR
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
              Chosen for the{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                problem,
              </span>{" "}
              not the résumé.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              We are framework-agnostic and outcome-opinionated. The stack bends
              to the problem — never the reverse.
            </p>
          </div>

          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200">
            {stack.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center"
              >
                <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                  {row.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] font-medium text-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAIRS WELL WITH ============ */}
      <section className="relative border-b border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — PAIRS WELL WITH
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
              One team.{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                Zero
              </span>{" "}
              hand-offs.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              Disciplines most often combined with AI / ML — same architecture,
              same engineers, no integration tax.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pairsWith.map((item) => (
              <a
                key={item.title}
                href="#"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-slate-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
                    <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                  </span>
                  <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#ff5a34]">
                    →
                  </span>
                </div>
                <h3 className="mt-6 text-[15px] font-semibold text-[#0d0f21]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.body}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section
        id="faq"
        className="relative scroll-mt-20 border-b border-slate-200"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — FAQ
          </div>
          <h2 className="mt-6 max-w-2xl text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[48px]">
            Questions,{" "}
            <span className="font-serif italic font-normal text-[#ff5a34]">
              answered.
            </span>
          </h2>

          <div className="mt-14">
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 shrink-0 text-[11px] font-semibold tracking-[0.1em] ${
                            isOpen ? "text-[#ff5a34]" : "text-slate-400"
                          }`}
                        >
                          Q.{String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-medium text-[#0d0f21]">
                          {item.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-colors ${
                          isOpen
                            ? "bg-[#ff5a34] text-white"
                            : "border border-slate-300 text-slate-500"
                        }`}
                      >
                        {isOpen ? "\u2715" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 sm:pl-[52px] sm:pr-10">
                        <p className="max-w-2xl text-[15px] leading-relaxed text-slate-500">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section
        id="book-a-call"
        className="relative scroll-mt-20 overflow-hidden bg-[#0b0e22]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(255,90,52,0.18) 0%, rgba(11,14,34,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] px-6 py-28 text-center sm:px-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#ff8c66]">
            LET&apos;S SCOPE IT
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Have data that should be{" "}
            <span className="font-serif italic font-normal text-[#ff8c66]">
              working harder?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us what you are trying to predict, automate or understand. A
            senior ML engineer replies within one business day with an honest
            read on feasibility.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book-a-call"
              className="rounded-full bg-gradient-to-r from-[#ff5a34] to-[#ff7a59] px-7 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[0_15px_30px_-10px_rgba(255,90,52,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Book an intro call →
            </a>
            <a
              href="#proof"
              className="rounded-full border border-white/20 px-7 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-white/90 transition-colors hover:bg-white/10"
            >
              See the work first
            </a>
          </div>
        </div>
      </section>

      {/* back-to-top */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-8 left-8 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0d0f21] shadow-[0_10px_25px_-10px_rgba(15,15,40,0.25)] transition-transform hover:-translate-y-0.5"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const heroTags = [
  "Power BI / Metabase",
  "Predictive Reporting",
  "Automation",
  "Governance",
];

const subNavLinks = [
  "Overview",
  "Capabilities",
  "Method",
  "Proof",
  "Stack",
  "FAQ",
];

// Sparkline path for the "pipelines monitored" chart card.
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
    question:
      "Where do we even start if none of our numbers can be trusted today?",
    answer:
      "The question that matters isn't which platform to buy — it's which number is trustworthy. You get a prioritised map and a fixed-price proposal for the first golden metric — no platform rebuild required upfront.",
  },
  {
    question: "Do we need a data warehouse, or is Postgres enough?",
    answer:
      "For most teams under a few million rows a well-indexed Postgres is plenty. We size the platform to the query patterns you actually run, not the one you might run in three years, and tell you honestly when a warehouse pays for itself.",
  },
  {
    question: "Can you work with our existing BI tool?",
    answer:
      "Yes. We model the warehouse layer to be tool-agnostic, so Power BI, Metabase, Superset or whatever your team already opens every morning keeps working — we just give it numbers it can trust.",
  },
  {
    question: "How do you handle GDPR and data residency?",
    answer:
      "Access control, retention and lineage policies are built in from the first pipeline, not bolted on later. We document exactly what data moves where, and keep everything inside your region and infrastructure by default.",
  },
  {
    question: "How do you stop dashboards from contradicting each other?",
    answer:
      'One golden metric, one definition, one source. Every dashboard reads from the same modelled warehouse layer instead of its own export, so "active customer" means the same thing in finance and in ops.',
  },
  {
    question: "How do you keep warehouse costs from spiralling?",
    answer:
      "We model incrementally and monitor query cost from day one, not after the first surprise invoice. Most teams see us right-size compute rather than grow it, since a clean model needs less brute-force querying.",
  },
  {
    question: "When is real-time streaming worth the complexity over batch?",
    answer:
      "Rarely, at first. We default to reliable batch pipelines and only reach for streaming when a specific decision genuinely needs minute-level freshness — and we'll show you that trade-off before recommending either.",
  },
  {
    question: "Will my team be able to maintain it?",
    answer:
      "That's the point of the boring stack — Postgres, dbt, Airflow, standard SQL. Your team can read it, extend it and hire for it without depending on us, and we document every model and pipeline as we build it.",
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
    title: "Data ingestion & pipelines",
    body: "Reliable ingestion from your apps, SaaS tools and devices — orchestrated, tested and alerting before you notice.",
  },
  {
    n: "02",
    title: "Warehousing & modelling",
    body: "A warehouse modelled around your business entities, with dbt-style transformations your team can read and extend.",
  },
  {
    n: "03",
    title: "BI & dashboards",
    body: "Power BI, Metabase or Superset dashboards that answer the actual question — not forty charts nobody opens.",
  },
  {
    n: "04",
    title: "Predictive reporting",
    body: "Forecasts and anomaly detection layered onto trusted data — the on-ramp to serious ML work.",
  },
  {
    n: "05",
    title: "Automation & reverse ETL",
    body: "Clean data pushed back into your CRM and ops tools, so insight turns into action automatically.",
  },
  {
    n: "06",
    title: "Governance & compliance",
    body: "Access control and lineage policies — GDPR-aware by default, audit-ready by design.",
  },
];

const methodSteps = [
  {
    n: "01",
    week: "WEEK 0–1",
    title: "Map the questions",
    body: "We start with the ten decisions your team makes weekly, then work backwards to the data they need.",
  },
  {
    n: "02",
    week: "WEEKS 1–3",
    title: "One golden metric",
    body: "The first sprint ships a single trusted, automated number — usually revenue or inventory. Trust compounds from there.",
  },
  {
    n: "03",
    week: "WEEKS 3–6",
    title: "Model & document",
    body: 'Entities, definitions and lineage written down so "active customer" means one thing everywhere, forever.',
  },
  {
    n: "04",
    week: "WEEK 6+",
    title: "Operate & extend",
    body: "Monitoring, alerting and a senior team on call. New questions become new models — on the same foundation.",
  },
];

const stack = [
  {
    label: "INGESTION & PIPELINES",
    tools: ["Apache Airflow", "Kafka", "dbt", "Spark"],
  },
  {
    label: "WAREHOUSING",
    tools: ["Postgres", "BigQuery", "Snowflake"],
  },
  {
    label: "BI & GOVERNANCE",
    tools: ["Power BI", "Metabase", "Apache Superset", "Great Expectations"],
  },
];

const pairsWith = [
  {
    title: "AI / ML Solutions",
    body: "Vision, language and prediction models trained to production — measured on outcomes, not demos.",
  },
  {
    title: "ERP & Business Automation",
    body: "Finance, HR, inventory and operations unified into one auditable, live source of truth.",
  },
  {
    title: "DevOps & Cloud (AWS)",
    body: "Cloud foundations that scale without 3 a.m. surprises — CI/CD, security and observability.",
  },
];

export default function DataEngineeringAnalyticsPage() {
  const linePath = buildLinePath(CHART_POINTS);
  const areaPath = buildAreaPath(CHART_POINTS, 110);
  const lastPoint = CHART_POINTS[CHART_POINTS.length - 1];
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      id="top"
      className={`${styles.page} -mt-24 min-h-screen pt-24 bg-[#f4f4fa] text-[#0d0f21] dark:bg-[#0a0b18] dark:text-white`}
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

        <div className="relative mx-auto max-w-[1400px] px-4 pt-8 sm:px-10 sm:pt-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-slate-500 dark:text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-[#ff5a34]">
              HOME
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-[#ff5a34]"
            >
              SERVICES
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-[#ff5a34]">DATA</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 items-start gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" />
                DISCIPLINE 03 — OF 14
              </div>

              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight text-[#0d0f21] dark:text-white sm:text-[56px]">
                One number,
                <br />
                one{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  source of truth.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Pipelines, warehouses and BI that turn raw events into decisions
                — so finance, ops and leadership stop arguing about whose
                spreadsheet is right.
              </p>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-14 sm:gap-6 sm:pt-8">
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    24/7
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                    Pipelines monitored
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    40+
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                    Products shipped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    3+ yrs
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                    Avg client tenure
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    PIPELINE-OPS — LIVE
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.1em] text-slate-400 dark:text-slate-500">
                    DISCIPLINE 03 / 14
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    PIPELINES MONITORED · PRODUCTION
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-6xl font-semibold tracking-tight sm:text-7xl">
                      24/7
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden>▲</span>
                    40+ products shipped
                  </div>
                </div>

                <div className="mt-6 -mx-2">
                  <svg
                    viewBox="0 0 600 120"
                    className="h-28 w-full"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Pipeline reliability trending upward over the quarter"
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

                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                      Freshness
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21] dark:text-white">
                      Live
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                      Client tenure
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21] dark:text-white">
                      3+ yrs
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                      Alerting
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21] dark:text-white">
                      On-call
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10">
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-slate-600 dark:border-white/10 dark:text-slate-300"
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
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:gap-6 sm:px-10 sm:py-5 lg:px-16">
          <div className="flex shrink-0 items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-slate-500 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            03 — DATA ENGINEERING &amp; ANALYTICS
          </div>

          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.1em] text-slate-500 dark:text-slate-400 md:flex"
          >
            {subNavLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="uppercase transition-colors hover:text-[#0d0f21] dark:hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#book-a-call"
              className="whitespace-nowrap rounded-full bg-[#0d0f21] px-4 py-2.5 text-[11px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-[#1c1f3a] dark:bg-white dark:text-[#0d0f21] dark:hover:bg-slate-200 sm:px-5"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>

      {/* ============ THE DISCIPLINE ============ */}
      <section
        id="overview"
        className="relative scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — THE DISCIPLINE
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
                Your data is an asset. Right now it is probably a{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  liability.
                </span>
              </h2>

              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    DISCIPLINE
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21] dark:text-white">
                    03 / 14
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    FOCUS
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21] dark:text-white">
                    Pipelines &amp; BI
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    PROOF
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21] dark:text-white">
                    24/7 pipelines monitored
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    ENGAGEMENT
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21] dark:text-white">
                    Senior-led · Lifetime support
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:pt-2">
              <p className="text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Most companies do not have a data problem — they have a trust
                problem. Numbers live in six tools, three exports and one heroic
                analyst&apos;s laptop. Every meeting starts with a debate about
                whose figure is correct, and every decision ships a week late
                because of it.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                We build the boring, load-bearing layer that fixes this:{" "}
                <span className="font-semibold text-[#0d0f21] dark:text-white">
                  pipelines that do not silently fail, warehouses modelled
                  around how your business actually works, and dashboards people
                  check before their first coffee.
                </span>{" "}
                Governance and access control included — so the right people see
                the right numbers, and auditors stop sweating you.
              </p>

              <div className="mt-12 sm:mt-16">
                <div className="border-t border-slate-200 pb-4 pt-6 text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:border-white/10 dark:text-slate-500">
                  SHIPPED WITH THIS DISCIPLINE
                </div>
                <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21] dark:text-white">
                      Forecasting Model
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      -58% stockouts
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21] dark:text-white">
                      Aviatize
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      3d → 4h audit prep
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
        className="relative scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — WHAT YOU GET
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
              From raw events to{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                decisions.
              </span>
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              The full path — ingestion to insight — engineered as one system
              with one owner.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.n}
                className="bg-white p-6 dark:bg-[#0f1023] sm:p-7"
              >
                <div className="font-mono text-[11px] font-semibold text-[#ff5a34]">
                  {item.n}
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0d0f21] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
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
        className="relative scroll-mt-20 border-b border-slate-200 bg-[#eef0f7] dark:border-white/10 dark:bg-white/[0.03]"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — HOW WE DELIVER
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
              Trust is built{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                incrementally.
              </span>
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              We earn adoption one reliable number at a time — not with a
              six-month big-bang migration.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-slate-300/70 pt-8 dark:border-white/10 sm:mt-16 sm:grid-cols-2 sm:gap-10 sm:pt-10 lg:grid-cols-4">
            {methodSteps.map((step) => (
              <div key={step.n}>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {step.n}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {step.week}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#0d0f21] dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
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
        className="relative scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — PROOF, NOT PROMISES
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
              We have{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                shipped
              </span>{" "}
              this before.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Forecasting only works when the data layer underneath is
              trustworthy. This platform is both — and we built each half.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,0.25)] dark:border-white/10 sm:mt-14 lg:grid-cols-[1.1fr_1fr]">
            {/* Video Panel — kept unchanged per requirements */}
            <div className="relative min-h-[240px] overflow-hidden bg-black sm:min-h-[320px]">
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
            <div className="bg-white p-6 dark:bg-[#0f1023] sm:p-8 lg:p-10">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                CASE STUDY · DATA · 03 / ML
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0d0f21] dark:text-white sm:text-2xl">
                Forecasting Model
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                Live sales, seasonality and operational signals flow through
                engineered pipelines into a forecasting platform teams actually
                plan with — inventory, staffing and spend.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-10 sm:gap-6 sm:pt-8">
                <div>
                  <div className="text-xl font-semibold text-[#0d0f21] dark:text-white sm:text-2xl">
                    98%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
                    Accuracy
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#0d0f21] dark:text-white sm:text-2xl">
                    -58%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
                    Stockouts
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#0d0f21] dark:text-white sm:text-2xl">
                    Live
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
                    Signal ingestion
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
        className="relative scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — TOOLS WE REACH FOR
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
              Chosen for the{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                problem,
              </span>{" "}
              not the résumé.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              A modern, boring, proven stack — chosen so your team can hire for
              it and audit it.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
            {stack.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center"
              >
                <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  {row.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
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
      <section className="relative border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — PAIRS WELL WITH
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-10">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
              One team.{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                Zero
              </span>{" "}
              hand-offs.
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Disciplines most often combined with data systems — same
              architecture, same engineers, no integration tax.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-3">
            {pairsWith.map((item) => (
              <a
                key={item.title}
                href="#"
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-[#0f1023] dark:hover:border-white/20 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10">
                    <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                  </span>
                  <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#ff5a34] dark:text-slate-600">
                    →
                  </span>
                </div>
                <h3 className="mt-6 text-[15px] font-semibold text-[#0d0f21] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.body}
                </p>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="group mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-[#0f1023] dark:hover:border-white/20 sm:p-7"
          >
            <span className="text-[15px] font-semibold text-[#0d0f21] dark:text-white sm:text-base">
              SaaS App Development
            </span>
            <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#ff5a34] dark:text-slate-600">
              →
            </span>
          </a>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section
        id="faq"
        className="relative scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-10 sm:py-20 lg:px-12">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
            — FAQ
          </div>
          <h2 className="mt-6 max-w-2xl text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] dark:text-white sm:text-[48px]">
            Questions,{" "}
            <span className="font-serif italic font-normal text-[#ff5a34]">
              answered.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
            The things buyers of data systems ask us most. Anything else — put
            it in a brief, a senior engineer replies within a business day.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
            <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
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
                            isOpen
                              ? "text-[#ff5a34]"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          Q.{String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-medium text-[#0d0f21] dark:text-white">
                          {item.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-colors ${
                          isOpen
                            ? "bg-[#ff5a34] text-white"
                            : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-400"
                        }`}
                      >
                        {isOpen ? "\u2715" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 sm:pl-[52px] sm:pr-10">
                        <p className="max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#0f1023]">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 dark:text-slate-500">
                ANYTHING WE MISSED?
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Put it in a brief. A senior engineer — not a sales rep — replies
                within one business day.
              </p>
              <a
                href="mailto:sales@codttech.com"
                className="mt-5 block w-full rounded-full bg-[#0d0f21] px-5 py-2.5 text-center text-[11px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-[#1c1f3a] dark:bg-white dark:text-[#0d0f21] dark:hover:bg-slate-200"
              >
                PUT IT IN A BRIEF
              </a>
              <div className="mt-3 text-center text-[12px] text-slate-400 dark:text-slate-500">
                sales@codttech.com
              </div>
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
        <div className="relative mx-auto max-w-[900px] px-4 py-20 text-center sm:px-10 sm:py-28">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#ff8c66]">
            LET&apos;S SCOPE IT
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Tired of arguing about{" "}
            <span className="font-serif italic font-normal text-[#ff8c66]">
              whose number is right?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us which decisions are stuck waiting on data. We reply within
            one business day with an honest read on the fastest path to one
            source of truth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book-a-call"
              className="w-full rounded-full bg-gradient-to-r from-[#ff5a34] to-[#ff7a59] px-7 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[0_15px_30px_-10px_rgba(255,90,52,0.5)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Book an intro call →
            </a>
            <a
              href="#proof"
              className="w-full rounded-full border border-white/20 px-7 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-white/90 transition-colors hover:bg-white/10 sm:w-auto"
            >
              See the work first
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

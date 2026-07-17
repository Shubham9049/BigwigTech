"use client";
import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const heroTags = [
  "Workflow Agents",
  "Voice Agents",
  "RAG",
  "Integrations",
  "Evals & Guardrails",
];

const subNavLinks = [
  "Overview",
  "Capabilities",
  "Method",
  "Proof",
  "Stack",
  "FAQ",
];

// Sparkline path for the "calls run" chart card.
const CHART_POINTS = [
  [0, 92],
  [40, 88],
  [80, 90],
  [120, 84],
  [160, 80],
  [200, 76],
  [240, 70],
  [280, 62],
  [320, 56],
  [360, 48],
  [400, 42],
  [440, 34],
  [480, 26],
  [520, 18],
  [560, 10],
  [600, 6],
];

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do you stop an agent from going off-script?",
    answer:
      "Constrained outputs, allow-listed actions, and behavioural eval suites that run on every prompt or model change. Sensitive actions sit behind approval gates, and every run is logged so you can audit exactly what the agent did and why.",
  },
  {
    question: "Can agents work inside our existing systems?",
    answer:
      "Yes — that's the point. We connect through your existing APIs, CRM, ERP and ticketing tools via MCP, so the agent acts as another operator inside your systems rather than a bolt-on chat window.",
  },
  {
    question: "Voice agents sound robotic. Do yours?",
    answer:
      "Not the ones we ship. We tune latency, turn-taking and interruption handling until callers stop noticing, and we test against real call recordings, not scripted demos.",
  },
  {
    question: "What happens when the agent gets stuck?",
    answer:
      "It fails safe, not silent. Ambiguous cases escalate to a human with full context — transcript, attempted actions and confidence — instead of guessing or looping.",
  },
  {
    question: "How long does an agent take to build?",
    answer:
      "A supervised first version is typically live in 3–4 weeks. We expand autonomy in stages after that, based on measured accuracy rather than a fixed calendar date.",
  },
  {
    question: "Single agent or multi-agent — when do you split it up?",
    answer:
      "We start with a single agent and one clear job description. We only split into multiple agents when a workflow has genuinely independent sub-tasks that benefit from separate context or tools — not by default.",
  },
  {
    question:
      "How do you stop an agent from looping forever or burning the budget?",
    answer:
      "Hard step and token ceilings, timeout policies and cost alarms on every run, plus eval suites that specifically probe for runaway loops before anything reaches production.",
  },
  {
    question: "How do you test an agent before it touches production systems?",
    answer:
      "Against a replay set of real historical cases in a sandboxed copy of your systems, scored on the same business metric it will be judged on in production — before it ever sees a live customer.",
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
    title: "Voice agents",
    body: "Outbound and inbound calling that qualifies, books and routes through natural conversation, with live handoff to humans.",
  },
  {
    n: "02",
    title: "Workflow agents",
    body: "Multi-step processes executed end-to-end: document intake, claims triage, order processing, follow-up sequences.",
  },
  {
    n: "03",
    title: "Retrieval-grounded assistants",
    body: "Support and knowledge agents that answer from your own data — with citations, not improvisation.",
  },
  {
    n: "04",
    title: "Integration services",
    body: "Agents wired into your CRM, ERP and ticketing via APIs and MCP — acting in your systems, not beside them.",
  },
  {
    n: "05",
    title: "Industry-specific copilots",
    body: "Domain agents trained on your playbooks and constraints, from aviation compliance to food-service ops.",
  },
  {
    n: "06",
    title: "Evals & guardrails",
    body: "Behavioral test suites, output constraints and monitoring that keep agents on-script as models and prompts evolve.",
  },
];

const methodSteps = [
  {
    n: "01",
    title: "Define the job",
    body: "One role, clear inputs, measurable output. We write the agent's job description and success metric before any code.",
  },
  {
    n: "02",
    title: "Human in the loop",
    body: "First deployments run supervised — the agent proposes, a human approves. Trust is built on transcripts, not promises.",
  },
  {
    n: "03",
    title: "Measure & harden",
    body: "Eval suites run on every change. We chase down the 2% of runs that fail and engineer them out.",
  },
  {
    n: "04",
    title: "Scale autonomy",
    body: "Approved action classes go autonomous; sensitive ones keep approval gates. Full audit trail at every stage.",
  },
];

const stackTools = [
  "Anthropic Claude",
  "OpenAI",
  "LangGraph",
  "MCP",
  "Twilio",
  "Deepgram",
  "ElevenLabs",
  "Temporal",
  "Redis",
  "Postgres",
  "Braintrust Evals",
];

const pairsWith = [
  {
    title: "AI / ML Solutions",
    body: "Vision, language and prediction models shipped to production — measured on outcomes, not demos.",
  },
  {
    title: "SaaS App Development",
    body: "Multi-tenant platforms with billing, RBAC and analytics — built to scale from first user to millions.",
  },
  {
    title: "Custom Product Development",
    body: "Engineering for the workflows off-the-shelf tools will never fit — owned entirely by you.",
  },
];

export default function AiAgentsPage() {
  const linePath = buildLinePath(CHART_POINTS);
  const areaPath = buildAreaPath(CHART_POINTS, 110);
  const lastPoint = CHART_POINTS[CHART_POINTS.length - 1];
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      id="top"
      className={`${styles.page} -mt-24 min-h-screen pt-24 bg-[#f4f4fa] text-[#0d0f21]`}
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
            <span className="text-[#ff5a34]">AI AGENTS</span>
          </nav>

          <div className="mt-14 grid grid-cols-1 items-start gap-16 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                <span className="h-px w-8 bg-slate-400" />
                DISCIPLINE 02 — OF 14
              </div>

              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight text-[#0d0f21] sm:text-[56px]">
                Agents that finish
                <br />
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  real work.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500">
                Goal-directed AI that executes multi-step workflows — dialling
                leads, processing documents, answering customers — reliably
                enough to put your name on it.
              </p>

              <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    100K+
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    Calls run by our agents
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">
                    &lt;30s
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    First response
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold sm:text-4xl">+38%</div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    Conversion lift
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
                    AGENT-OPS — LIVE
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.1em] text-slate-400">
                    DISCIPLINE 02 / 14
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    CALLS RUN BY OUR AGENTS
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-6xl font-semibold tracking-tight sm:text-7xl">
                      100K
                    </span>
                    <span className="text-2xl font-semibold text-slate-400">
                      +
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                    <span aria-hidden>▲</span>
                    +38% conversion lift
                  </div>
                </div>

                <div className="mt-6 -mx-2">
                  <svg
                    viewBox="0 0 600 120"
                    className="h-28 w-full"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Calls run trending upward over the quarter"
                  >
                    <defs>
                      <linearGradient
                        id="chartFillAgents"
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
                    <path d={areaPath} fill="url(#chartFillAgents)" />
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
                      First response
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      &lt;30s
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Guardrails
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      Evals on
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Coverage
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-[#0d0f21]">
                      24/7
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
            02 — AI AGENTS
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
                The demo is easy. The 10,000th{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  run
                </span>{" "}
                is the product.
              </h2>

              <dl className="mt-14 divide-y divide-slate-200 border-t border-slate-200">
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    DISCIPLINE
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    02 / 14
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    FOCUS
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    Agentic systems
                  </dd>
                </div>
                <div className="flex items-center justify-between py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                    PROOF
                  </dt>
                  <dd className="text-sm font-medium text-[#0d0f21]">
                    100K+ calls run by our agents
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
                Anyone can wire a model to a tool and record a demo. The
                difference between that and a production agent is everything
                that happens when reality pushes back: ambiguous inputs, failed
                API calls, an angry customer, a compliance question. That is the
                part we engineer.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-slate-500">
                <span className="font-semibold text-[#0d0f21]">
                  Our agents ship with guardrails, evaluation suites and full
                  audit trails.
                </span>{" "}
                Every action is logged, every edge case has a fallback, and a
                human can take over mid-task. We have run agents through more
                than a hundred thousand live calls — we know where they break,
                because we have already broken them.
              </p>

              <div className="mt-16">
                <div className="border-t border-slate-200 pb-4 pt-6 text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </div>
                <div className="divide-y divide-slate-200 border-t border-slate-200">
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21]">
                      LeadTrack AI
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      100K+ calls
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-5">
                    <span className="text-[15px] font-semibold text-[#0d0f21]">
                      Forecasting Model
                    </span>
                    <span className="font-mono text-sm font-medium text-[#ff5a34]">
                      98% accuracy
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
              Agents with a{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                job description.
              </span>
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              We build agents around a defined role with measurable output — not
              a chat window bolted onto your product.
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
              Autonomy, earned in{" "}
              <span className="font-serif italic font-normal text-[#ff5a34]">
                stages.
              </span>
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 lg:justify-self-end">
              We expand what an agent may do only as it proves itself — the same
              way you would promote a new hire.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step) => (
              <div key={step.n}>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {step.n}
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
              A multi-tenant agent platform we built and operate —
              auto-dialling, qualifying and routing leads through natural
              conversation.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,0.25)] lg:grid-cols-[1.1fr_1fr]">
            {/* Image panel — replace src with your own case-study asset */}
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
                <source src="/leadtrack-ai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Case study panel */}
            <div className="bg-white p-8 sm:p-10">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">
                CASE STUDY · AI · SAAS
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#0d0f21]">
                Lead Track AI
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                Multi-tenant SaaS that automates lead engagement with AI-powered
                voice agents — auto-dialing prospects, qualifying through
                conversation, and routing high-intent leads to sales with full
                context.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    &lt;30s
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    First call
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    100K+
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Calls run
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0d0f21]">
                    +38%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Conversion
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
              Orchestration, telephony and evaluation tooling chosen for
              reliability under load — not for the logo wall.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-2 border-t border-slate-200 pt-10">
            {stackTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] font-medium text-slate-600"
              >
                {tool}
              </span>
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
              Disciplines most often combined with AI agents — same
              architecture, same engineers, no integration tax.
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
        className="relative scroll-mt-20 border-b border-slate-200 bg-[#eef0f7]"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
            {/* Accordion */}
            <div>
              <div className="divide-y divide-slate-200 border-t border-slate-200">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 bg-white/60 px-6 py-5 text-left first:rounded-t-2xl"
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
                        <div className="bg-white/60 px-6 pb-6 sm:pl-[68px] sm:pr-10">
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

            {/* Sidebar */}
            <div className="lg:pt-1">
              <div className="text-[11px] font-semibold tracking-[0.18em] text-[#ff5a34]">
                — BEFORE YOU ASK
              </div>
              <h2 className="mt-6 text-[36px] font-semibold leading-[1.1] tracking-tight text-[#0d0f21] sm:text-[40px]">
                Questions,{" "}
                <span className="font-serif italic font-normal text-[#ff5a34]">
                  answered.
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                The things buyers of AI agents ask us most. Anything else — put
                it in a brief, a senior engineer replies within one business
                day.
              </p>

              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] text-slate-500">
                  <span aria-hidden className="text-[#ff5a34]">
                    ⚡
                  </span>
                  ANYTHING BIGGER?
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Put it in a brief. A senior engineer — not a sales rep —
                  replies within one business day.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#book-a-call"
                    className="whitespace-nowrap rounded-full bg-[#0d0f21] px-5 py-2.5 text-[11px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-[#1c1f3a]"
                  >
                    Put it in a brief →
                  </a>
                  <a
                    href="mailto:sales@Bigwig.com"
                    className="text-[13px] font-medium text-slate-500 transition-colors hover:text-[#0d0f21]"
                  >
                    sales@Bigwig.com
                  </a>
                </div>
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
        <div className="relative mx-auto max-w-[900px] px-6 py-28 text-center sm:px-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-[#ff8c66]">
            LET&apos;S SCOPE IT
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Have a workflow an agent{" "}
            <span className="font-serif italic font-normal text-[#ff8c66]">
              should own?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Describe the job — qualifying, triaging, answering, processing. We
            will reply within one business day with an honest read on whether an
            agent can actually do it.
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
    </div>
  );
}

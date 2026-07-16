"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const nav = ["Overview", "Capabilities", "Method", "Proof", "Stack", "FAQ"];
const capabilities = [
  [
    "01",
    "Product research",
    "User interviews, workflow shadowing and competitive research — evidence before pixels.",
  ],
  [
    "02",
    "UX architecture & wireframes",
    "Flows, hierarchies and states mapped completely — including the empty, error and edge states demos hide.",
  ],
  [
    "03",
    "Design systems",
    "Token-based component systems your product can grow on for years — not a one-off project.",
  ],
  [
    "04",
    "Hi-fi UI design",
    "Production-grade interface design with craft in the typography, motion and detail users feel but cannot name.",
  ],
  [
    "05",
    "Prototyping & testing",
    "Clickable prototypes in front of real users before engineering money is spent on the wrong idea.",
  ],
  [
    "06",
    "Design-to-code handoff",
    "Tokens, specs and components delivered into the codebase — by colleagues, not over a wall.",
  ],
];
const steps = [
  [
    "01",
    "DISCOVER",
    "Understand the work",
    "We watch real users do the actual job — the workarounds, the swearing, the sticky notes. That is the spec.",
  ],
  [
    "02",
    "STRUCTURE",
    "Structure before surface",
    "Information architecture and flows agreed in low-fi, where changes cost minutes instead of sprints.",
  ],
  [
    "03",
    "CRAFT",
    "Craft the system",
    "Hi-fi design built as a token-based system — every screen makes the next one cheaper.",
  ],
  [
    "04",
    "VERIFY",
    "Test & tighten",
    "Prototype testing with real users, then iteration. Applause is nice; task completion is the metric.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["WORK", ["Figma", "Design Tokens", "Storybook", "Framer"]],
  ["DELIVERY", ["React", "Lottie", "Rive", "Accessibility audits"]],
  ["RESEARCH", ["Zeroheight", "User testing", "Prototypes"]],
];
const related = [
  [
    "Mobile App Development",
    "Native and cross-platform apps with offline-first sync, payments, NFC and push built in.",
  ],
  [
    "Web App Development",
    "Web products engineered for performance, SEO and scale — front end to API.",
  ],
  [
    "SaaS App Development",
    "Multi-tenant platforms with billing, RBAC and analytics — built to scale from user one to millions.",
  ],
];
const faqs = [
  [
    "Can we use your design team with our own developers?",
    "Yes — we deliver systems, tokens and specs your engineers will actually enjoy receiving, plus office hours during implementation. Designs are documented for builders, not just for our designers all day.",
  ],
  [
    "How do you measure design success?",
    "We agree the product metrics upfront: task completion, activation, conversion, time saved, support burden or the right behavioural outcome.",
  ],
  [
    "Do you redesign existing products?",
    "Yes. We begin with research and a product audit, then prioritise the changes that solve the real user and commercial problems.",
  ],
  [
    "What does a design engagement cost?",
    "The scope follows the product surface and research needed. We define clear outcomes and milestones before work begins.",
  ],
  [
    "Will the design system survive in code?",
    "Yes. The system is built with implementation in mind, including tokens, component behaviours and handoff collaboration with engineers.",
  ],
  [
    "Is accessibility included?",
    "Yes. Inclusive patterns, contrast, focus states, content hierarchy and keyboard behaviour are part of the design standard.",
  ],
  [
    "How many users do you need to test with?",
    "A handful of representative users exposes most serious usability failures early. We choose the sample around the decision we need to make.",
  ],
  [
    "Do you do user research, or just visual design?",
    "Research is central to the work. Good visual design is the expression of a clear product understanding, not a substitute for it.",
  ],
];
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[.18em] text-[#ff5a34]">
      — {children}
    </p>
  );
}
function Em({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif font-normal italic text-[#ff5a34]">
      {children}
    </span>
  );
}
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight sm:text-[48px]">
      {children}
    </h2>
  );
}
function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
      {children}
    </div>
  );
}
function Section({
  id,
  label,
  title,
  side,
  children,
  shade = false,
}: {
  id?: string;
  label: string;
  title: React.ReactNode;
  side: string;
  children: React.ReactNode;
  shade?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-slate-200 dark:border-white/10 ${shade ? "bg-[#eef0f7] dark:bg-[#161c2e]" : ""}`}
    >
      <Wrap>
        <Label>{label}</Label>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
          <Heading>{title}</Heading>
          <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
            {side}
          </p>
        </div>
        {children}
      </Wrap>
    </section>
  );
}
function MetricCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          DESIGN-OPS — ACTIVE
        </span>
        <span>DISCIPLINE 12 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        PRODUCTS DESIGNED & SHIPPED
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">40+</strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ 5.0 client rating
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 95 C100 95 180 89 260 84 S390 67 480 48 S550 41 600 25 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 95 C100 95 180 89 260 84 S390 67 480 48 S550 41 600 25"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Handoff", "40+ projects"],
          ["Systems", "Tokenised"],
          ["Validation", "Prototypes first"],
        ].map(([a, b]) => (
          <div key={a}>
            <p className="text-[10px] uppercase tracking-[.12em] text-slate-400">
              {a}
            </p>
            <strong className="mt-1.5 block text-sm">{b}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function UiUxDesignPage() {
  const [open, setOpen] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      id="top"
      className={`${styles.page} min-h-screen bg-[#f4f4fa] text-[#0d0f21] dark:bg-[#0a0b18] dark:text-white`}
    >
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 8% 15%,rgba(255,122,89,.14),transparent 60%),radial-gradient(45% 55% at 92% 5%,rgba(99,102,241,.12),transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 pt-8 sm:px-10 sm:pt-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex gap-2 text-[11px] tracking-[.18em] text-slate-500 dark:text-slate-400"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/services">SERVICES</Link>
            <span>/</span>
            <span className="text-[#ff5a34]">UI / UX</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 12 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Design that ships,
                <br />
                not just <Em>decorates.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Research-led product design from the team that also writes the
                code — flows, systems and interfaces measured by what users do,
                not what stakeholders applaud.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["40+", "Products designed & shipped"],
                  ["5.0", "Client rating"],
                  ["0", "Engineer gaps"],
                ].map(([s, l]) => (
                  <div key={l}>
                    <strong className="text-3xl sm:text-4xl">{s}</strong>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[.1em] text-slate-500 dark:text-slate-400">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-6">
              <MetricCard />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            12 — UI / UX DESIGN
          </span>
          <nav className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex">
            {nav.map((n) => (
              <a
                href={`#${n.toLowerCase()}`}
                key={n}
                className="uppercase hover:text-[#ff5a34]"
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle dark mode"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[.04]"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
            <a
              href="#book-a-call"
              className="rounded-full bg-[#0d0f21] px-4 py-2.5 text-[11px] font-semibold tracking-[.1em] text-white dark:bg-white dark:text-[#0d0f21]"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
      <section
        id="overview"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <Wrap>
          <Label>THE DISCIPLINE</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading>
                Pretty interfaces fail in production every <Em>day.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "12 / 14"],
                  ["Focus", "Research-led product design"],
                  ["Proof", "40+ products designed & shipped"],
                  ["Engagement", "Senior-led · Lifetime support"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-5 py-5">
                    <dt className="text-[11px] tracking-[.14em] text-slate-400">
                      {k.toUpperCase()}
                    </dt>
                    <dd className="text-right text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
              <p>
                The graveyard of software is full of beautiful Figma files:
                flows that demo well and collapse against real data, edge cases
                discovered in week one of engineering, design systems abandoned
                by the second sprint. The gap between design agency and dev shop
                is where products go to die.
              </p>
              <p className="mt-6">
                Our designers sit inside an engineering studio. Every flow is
                designed against real data, real constraints and the engineers
                who will build it —{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  often the same week. What you approve ships without surprise;
                  the people who create it are the people who ship it.
                </strong>
              </p>
            </div>
          </div>
        </Wrap>
      </section>
      <Section
        id="capabilities"
        label="WHAT YOU GET"
        title={
          <>
            Research to <Em>handoff.</Em>
          </>
        }
        side="The full design discipline — from inside the same wall as the engineering that follows it."
      >
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {capabilities.map(([n, t, b]) => (
            <article key={n} className="bg-white p-6 dark:bg-[#1b2236]">
              <span className="font-mono text-[11px] text-[#ff5a34]">{n}</span>
              <h3 className="mt-4 text-[16px] font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {b}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="method"
        label="HOW WE DELIVER"
        title={
          <>
            Evidence, then <Em>craft.</Em>
          </>
        }
        side="Taste matters — but it comes after the research has killed the wrong ideas."
        shade
      >
        <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {steps.map(([n, p, t, b]) => (
            <article key={n}>
              <div className="flex gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                  {n}
                </span>
                <span className="text-[11px] tracking-[.14em] text-slate-500 dark:text-slate-400">
                  {p}
                </span>
              </div>
              <h3 className="mt-4 text-[16px] font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {b}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="proof"
        label="PROOF, NOT PROMISES"
        title={
          <>
            We have <Em>shipped</Em> this before.
          </>
        }
        side="A consumer experience designed and engineered under one roof — research, design, pay, trust."
      >
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,.25)] lg:grid-cols-[1.1fr_1fr] dark:border-white/10">
          <div className="relative min-h-[270px] overflow-hidden bg-[#dbe9d5]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/feeleat-happy-fridge.mp4" type="video/mp4" />
            </video>
          </div>
          <article className="bg-white p-8 dark:bg-[#1b2236] sm:p-10">
            <Label>CASE STUDY · UX · MOBILE</Label>
            <h3 className="mt-4 text-2xl font-semibold">
              FeelEat — Happy Fridge
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              A mobile experience that had to make buying from a fridge feel
              effortless and trustworthy — browse, unlock, pay and find the next
              meal in a way that feels designed, not engineered.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
              {[
                ["$10M+", "Valuation"],
                ["24/7", "Self-service"],
                ["2 taps", "To purchase"],
              ].map(([s, l]) => (
                <div key={l}>
                  <strong className="text-2xl">{s}</strong>
                  <p className="mt-1 text-[10px] uppercase tracking-[.1em] text-slate-400">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>
      <Section
        id="stack"
        label="TOOLS WE REACH FOR"
        title={
          <>
            Chosen for the <Em>problem,</Em> not the résumé.
          </>
        }
        side="Design tooling wired straight into the engineering pipeline — tokens out, components in."
      >
        <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
          {stack.map(([l, ts]) => (
            <div
              key={l}
              className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-center"
            >
              <p className="text-[11px] tracking-[.14em] text-slate-400">{l}</p>
              <div className="flex flex-wrap gap-2">
                {ts.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        label="PAIRS WELL WITH"
        title={
          <>
            One team. <Em>Zero</Em> hand-offs.
          </>
        }
        side="Disciplines most often combined with product design — same architecture, same engineers, no integration tax."
      >
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {related.map(([t, b]) => (
            <Link
              href="/services"
              key={t}
              className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-[#ff5a34] dark:border-white/10 dark:bg-[#1b2236]"
            >
              <div className="flex justify-between">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 dark:bg-[#2c3655]">
                  <i className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                </span>
                <span className="text-slate-300 group-hover:text-[#ff5a34]">
                  →
                </span>
              </div>
              <h3 className="mt-6 text-[15px] font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {b}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <section
        id="faq"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <Label>BEFORE YOU ASK</Label>
              <Heading>
                Questions, <Em>answered.</Em>
              </Heading>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                The things buyers of product design ask us most. Anything else —
                put it in a brief; a senior engineer replies within a business
                day.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-7 dark:border-white/10 dark:bg-[#1b2236]">
              <Label>ANYTHING WE MISSED?</Label>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Put it in a brief. A senior engineer — not a sales rep — replies
                within one business day.
              </p>
              <a
                href="mailto:contact@codttech.com"
                className="mt-7 inline-flex rounded-full bg-[#0d0f21] px-5 py-3 text-[12px] font-semibold text-white dark:bg-white dark:text-[#0d0f21]"
              >
                Put in a brief
              </a>
            </div>
            <div className="lg:col-span-2">
              <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
                {faqs.map(([q, a], i) => {
                  const active = i === open;
                  return (
                    <div key={q}>
                      <button
                        type="button"
                        onClick={() => setOpen(active ? -1 : i)}
                        aria-expanded={active}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span className="flex gap-4">
                          <span
                            className={`text-[11px] tracking-[.1em] ${active ? "text-[#ff5a34]" : "text-slate-400"}`}
                          >
                            Q.{String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[15px] font-medium">{q}</span>
                        </span>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${active ? "bg-[#ff5a34] text-white" : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-300"}`}
                        >
                          {active ? "×" : "+"}
                        </span>
                      </button>
                      {active && (
                        <p className="max-w-3xl pb-6 pl-[52px] text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                          {a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrap>
      </section>
      <section
        id="book-a-call"
        className="scroll-mt-20 overflow-hidden bg-[#0b0e22]"
      >
        <div className="mx-auto max-w-[900px] px-4 py-24 text-center sm:px-10 sm:py-28">
          <Label>LET&apos;S SCOPE IT</Label>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Have a product that deserves <Em>better design?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us what users must do. A research-led product team replies
            within one business day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@codttech.com"
              className="rounded-full bg-gradient-to-r from-[#ff5a34] to-[#ff7a59] px-7 py-3.5 text-[13px] font-semibold text-white"
            >
              Book an intro call →
            </a>
            <a
              href="#proof"
              className="rounded-full border border-white/20 px-7 py-3.5 text-[13px] font-semibold text-white/90"
            >
              See the work first
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

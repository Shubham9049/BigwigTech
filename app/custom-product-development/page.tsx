"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const nav = ["Overview", "Capabilities", "Method", "Proof", "Stack", "FAQ"];
const cards = [
  [
    "01",
    "Discovery & scoping sprint",
    "Turn weeks of maybe-problems into decisions and produce a clickable prototype plus a fixed-price plan.",
  ],
  [
    "02",
    "Bespoke backends",
    "Domain-modelled APIs and data layers built around your entities and rules — not a generic CRUD scaffold.",
  ],
  [
    "03",
    "Workflow engines",
    "Multi-step operational logic — approvals, scheduling, routing — enforced by software instead of memory.",
  ],
  [
    "04",
    "Hardware-adjacent software",
    "Systems that talk to fridges, kiosks, scanners and payment devices, where the physical world matters.",
  ],
  [
    "05",
    "Integrations",
    "Payments, identity, logistics and legacy systems wired in so your custom core plays well with everything else.",
  ],
  [
    "06",
    "Lifetime support",
    "No sunset clause. The architects who designed the system stay involved for as long as it needs to run.",
  ],
];
const steps = [
  [
    "01",
    "WEEK 0–1",
    "Kill ideas cheaply",
    "Discovery sprint pressure-tests the concept against users, economics and physics before engineering begins.",
  ],
  [
    "02",
    "WEEKS 1–2",
    "Prototype the risky part",
    "We build the hardest, most uncertain slice first. If something will not work, you find out in week three, not month nine.",
  ],
  [
    "03",
    "WEEKS 3–8",
    "Productionise",
    "Proven core gets hardened — security, observability, failure modes and documentation.",
  ],
  [
    "04",
    "WEEK 8+",
    "Run & evolve",
    "Live systems get the original team on call — and a roadmap because your product is never finished, only compounding.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["PRODUCT", ["TypeScript", "React", "Next.js", "Node.js"]],
  ["DATA", ["Postgres", "Redis", "Python", "APIs"]],
  ["PLATFORM", ["AWS", "Docker", "Terraform", "Sentry"]],
];
const faqs = [
  [
    "How do we know custom is actually justified?",
    "Often it is not — and we say so in the discovery sprint. Custom earns its cost when the workflow is your competitive edge, when licence maths stops scaling, or when no vendor covers your physical-world constraints.",
  ],
  [
    "What does a typical custom build cost and take?",
    "A discovery sprint produces the scope, milestones and fixed investment for the first useful release. Most meaningful first releases take 8–16 weeks.",
  ],
  [
    "Who owns the IP?",
    "You do. Code, infrastructure, designs and documentation sit in your accounts from the first day.",
  ],
  [
    "Can you maintain a system another agency built?",
    "Yes. We begin with an audit, stabilise the most important risks, then produce a practical roadmap.",
  ],
  [
    "What if our requirements change mid-project?",
    "They will. Weekly demos give us a structured way to trade scope and make evidence-based decisions before change becomes rework.",
  ],
  [
    "Can you work with our existing in-house engineers?",
    "Absolutely. We work as an embedded senior product team and leave clean code, documentation and context behind.",
  ],
  [
    "Fixed-price or time-and-materials?",
    "Discovery and well-defined milestones can be fixed price. Longer product partnerships usually work best as an accountable senior team retainer.",
  ],
  [
    "Will we be locked into your stack and tooling?",
    "No. We use mainstream, documented technologies and deliver everything under your ownership.",
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
function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[40px] font-semibold leading-[1.1] tracking-tight sm:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}

export default function CustomProductDevelopmentPage() {
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
            <span className="text-[#ff5a34]">CUSTOM PRODUCT</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 06 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                For problems no
                <br />
                template <Em>will ever fit.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Bespoke systems engineered around your operation, your
                constraints and your edge — owned entirely by you, supported for
                life.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-14 sm:gap-6 sm:pt-8">
                {[
                  ["$10M+", "Value built"],
                  ["−90%", "Less manual effort"],
                  ["24/7", "Systems operated"],
                ].map(([s, l]) => (
                  <div key={l}>
                    <strong className="text-3xl sm:text-4xl">{s}</strong>
                    <p className="mt-2 text-[11px] uppercase tracking-[.1em] text-slate-500 dark:text-slate-400">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
                <div className="flex justify-between text-[11px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
                  <span>
                    <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    PLATFORM-OPS — LIVE
                  </span>
                  <span>DISCIPLINE 06 / 14</span>
                </div>
                <p className="mt-8 text-[11px] font-semibold tracking-[.14em] text-slate-400">
                  VALIDATED BUILDS · ONE BUILT
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <strong className="text-6xl tracking-tight sm:text-7xl">
                    $10M
                  </strong>
                  <span className="text-sm font-semibold text-emerald-600">
                    ▲ less waste, faster start
                  </span>
                </div>
                <svg
                  className="mt-6 h-28 w-full"
                  viewBox="0 0 600 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 92 C100 90 170 86 250 80 S380 72 460 50 S540 38 600 24 L600 120 L0 120Z"
                    fill="#ff7a59"
                    fillOpacity=".15"
                  />
                  <path
                    d="M0 92 C100 90 170 86 250 80 S380 72 460 50 S540 38 600 24"
                    fill="none"
                    stroke="#ff5a34"
                    strokeWidth="2.5"
                  />
                </svg>
                <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
                  {[
                    ["Discovery", "24 / unlimited"],
                    ["Ownership", "100% yours"],
                    ["Support", "Lifetime"],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <p className="text-[10px] uppercase tracking-[.12em] text-slate-400">
                        {l}
                      </p>
                      <strong className="mt-1.5 block text-sm">{v}</strong>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10">
                  {[
                    "Custom software",
                    "Workflow engines",
                    "Integrations",
                    "Systems",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            06 — CUSTOM PRODUCT DEVELOPMENT
          </span>
          <nav className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex">
            {nav.map((n) => (
              <a href={`#${n.toLowerCase()}`} key={n}>
                {n.toUpperCase()}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 gap-3">
            <button
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
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>THE DISCIPLINE</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading>
                Off-the-shelf got you here. It will not get you <Em>there.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "06 / 14"],
                  ["Focus", "Bespoke systems"],
                  ["Proof", "$10M+ valuation built on our build"],
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
                It makes sense to reach for generic software until it stops
                serving the system your business actually deserves. The
                workarounds multiply, decisions slow down and your competitive
                edge turns into a constraint.
              </p>
              <p className="mt-6">
                We build the second kind. Smart fridges that sell meals at 3
                a.m. Workflow engines that run commercial kitchens.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  Complexity designed for safety. Systems with no template,
                  engineered from first principles.
                </strong>
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["FeelEat — Happy Fridge", "$10M+ valuation"],
                  ["Unified Recipe System", "−90% allergen incidents"],
                ].map(([n, s]) => (
                  <div
                    className="flex justify-between border-b border-slate-200 py-4 text-sm dark:border-white/10"
                    key={n}
                  >
                    <strong className="text-[#0d0f21] dark:text-white">
                      {n}
                    </strong>
                    <span className="font-mono text-[#ff5a34]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="capabilities"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>WHAT YOU GET</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              Engineered from <Em>first principles.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              No themes, no recycled architectures — a system designed around
              how your business wins.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {cards.map(([n, t, b]) => (
              <article key={n} className="bg-white p-6 dark:bg-[#1b2236]">
                <span className="font-mono text-[11px] text-[#ff5a34]">
                  {n}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="method"
        className="scroll-mt-20 border-b border-slate-200 bg-[#eef0f7] dark:border-white/10 dark:bg-[#161c2e]"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>HOW WE DELIVER</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              Invent carefully, ship <Em>deliberately.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Novel systems carry novel risk. Our method spends that risk early,
              where it is cheap.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {steps.map(([n, w, t, b]) => (
              <article key={n}>
                <div className="flex gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {n}
                  </span>
                  <span className="text-[11px] tracking-[.14em] text-slate-500 dark:text-slate-400">
                    {w}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="proof"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>PROOF, NOT PROMISES</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              We have <Em>shipped</Em> this before.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              A smart food retail platform designed to make autonomous meal
              service work safely, at scale — and hold it together.
            </p>
          </div>
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
              <Label>CASE STUDY · CUSTOM · IOT · MOBILE</Label>
              <h3 className="mt-4 text-2xl font-semibold">
                FeelEat — Happy Fridge
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                Sustainable, local meals made convenient: fridges browse menus,
                scan to unlock, pay in-app and receive staff who never dash.
                Autonomous food retail truly works because the software does.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["$10M+", "Valuation"],
                  ["−90%", "Less waste"],
                  ["24/7", "Autonomous"],
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
        </div>
      </section>
      <section
        id="stack"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>TOOLS WE REACH FOR</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              Chosen for the <Em>problem,</Em> not the résumé.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              The technology bends to the system you need, never the other way
              around.
            </p>
          </div>
          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {stack.map(([l, ts]) => (
              <div
                className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-center"
                key={l}
              >
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  {l}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ts.map((t) => (
                    <span
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] text-slate-600 dark:border-white/10 dark:text-slate-300"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>PAIRS WELL WITH</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              One team. <Em>Zero</Em> hand-offs.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Disciplines most often combined with custom products — same
              architecture, same engineers, no integration tax.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              [
                "SaaS App Development",
                "Multi-tenant platforms with billing, RBAC and analytics.",
              ],
              [
                "IoT Solutions",
                "Connected hardware, edge software and cloud platforms.",
              ],
              [
                "ERP & Business Automation",
                "Finance, HR, inventory and operations unified.",
              ],
            ].map(([t, b]) => (
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
        </div>
      </section>
      <section
        id="faq"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-10 sm:py-20">
          <Label>BEFORE YOU ASK</Label>
          <Heading className="mt-6">
            Questions, <Em>answered.</Em>
          </Heading>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
            The things buyers of custom products ask us most. Anything else —
            put it in a brief, a senior engineer replies within a business day.
          </p>
          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map(([q, a], i) => {
              const active = i === open;
              return (
                <div key={q}>
                  <button
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
                    <p className="max-w-2xl pb-6 pl-[52px] text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                      {a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="book-a-call"
        className="scroll-mt-20 overflow-hidden bg-[#0b0e22]"
      >
        <div className="mx-auto max-w-[900px] px-4 py-24 text-center sm:px-10 sm:py-28">
          <Label>LET&apos;S SCOPE IT</Label>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Have a problem nobody <Em>sells software for?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Those are our favourite briefs. Describe the workflow, the
            constraint, the edge — a senior architect replies within one
            business day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sales@codttech.com"
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
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 left-6 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-lg shadow-lg dark:border-white/10 dark:bg-[#1b2236]"
      >
        ↑
      </a>
    </div>
  );
}

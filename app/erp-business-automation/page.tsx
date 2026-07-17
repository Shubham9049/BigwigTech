"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const links = ["Overview", "Capabilities", "Method", "Proof", "Stack", "FAQ"];
const tags = ["ERP", "HR & Payroll", "Inventory", "Invoicing", "Automation"];
const capabilities = [
  [
    "01",
    "HR & payroll",
    "Contracts, attendance, leave and payroll runs — connected to time-tracking with biometric and NFC clock-in.",
  ],
  [
    "02",
    "Inventory & procurement",
    "Live stock levels, reorder automation and supplier workflows that stop gaps between floor and finance.",
  ],
  [
    "03",
    "Accounting & invoicing",
    "Invoices, approvals and reconciliation flowing from real operational data — not month-end archaeology.",
  ],
  [
    "04",
    "Workflow automation",
    "Approvals, escalations and hand-offs triggered by the system — with full audit trails for every action.",
  ],
  [
    "05",
    "Operational dashboards",
    "Live views per role: site leads, finance teams and operators see what matters without chasing spreadsheets.",
  ],
  [
    "06",
    "Integrations",
    "Banks, payment providers, e-commerce and legacy tools wired in so data is entered once and usable everywhere.",
  ],
];
const method = [
  [
    "01",
    "WEEK 0–1",
    "Shadow the operation",
    "We map how work actually flows — including the workarounds — before designing the system that replaces them.",
  ],
  [
    "02",
    "WEEKS 1–3",
    "One module, one win",
    "The most painful process goes first. We ship it in weeks and prove the project’s credibility early.",
  ],
  [
    "03",
    "WEEKS 3–8",
    "Migrate without drama",
    "Parallel runs, reconciliation reports and rollback plans. The old spreadsheets retire when the numbers match.",
  ],
  [
    "04",
    "WEEK 8+",
    "Extend for years",
    "New modules join on the same data spine. Eight years of engagement are a reference case, not an anomaly.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["APPLICATION", ["Node.js", "TypeScript", "React", "Next.js"]],
  ["DATA & INTEGRATION", ["Postgres", "Redis", "REST APIs", "Webhooks"]],
  ["OPERATIONS", ["Docker", "AWS", "Sentry", "Role-based access"]],
];
const faqs = [
  [
    "Why custom ERP instead of SAP, Odoo or NetSuite?",
    "If an off-the-shelf ERP genuinely fits, we say so — it is cheaper and quicker to licence. We build custom systems when your operations are edge-case-heavy, awkward or changing faster than the software allows.",
  ],
  [
    "How disruptive is the rollout?",
    "We launch module by module, alongside the current process. Teams get training, reconciliation and a clear support path before a legacy workflow is retired.",
  ],
  [
    "Can it integrate with our accounting software and banks?",
    "Yes. We design integrations around the tools you already rely on, then establish one clear source of truth for each important record.",
  ],
  [
    "What does a custom ERP cost?",
    "It depends on the operational scope. Discovery gives you a fixed first-module proposal and a roadmap before the build starts.",
  ],
  [
    "How long is the ROI?",
    "Often months, not years: reduced manual entry, faster close, fewer errors and less time spent chasing approval status.",
  ],
  [
    "Can non-technical staff manage it?",
    "That is the point. We build task-focused screens around each role, with simple controls and the training to make adoption stick.",
  ],
  [
    "What about data migration?",
    "We profile, clean and reconcile data before cut-over. Every migration has a validated source, a test run and a rollback plan.",
  ],
  [
    "Why not just use Airtable or Monday?",
    "Those tools can be excellent for simple workflows. They break down when you need connected finance, permissions, auditability and operational truth across the business.",
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

export default function ErpBusinessAutomationPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      id="top"
      className={`${styles.page} -mt-24 min-h-screen pt-24 bg-[#f4f4fa] text-[#0d0f21] dark:bg-[#0a0b18] dark:text-white`}
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
            className="flex gap-2 text-[11px] font-medium tracking-[.18em] text-slate-500 dark:text-slate-400"
            aria-label="Breadcrumb"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/services">SERVICES</Link>
            <span>/</span>
            <span className="text-[#ff5a34]">ERP</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 05 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Retire the
                <br />
                spreadsheet <Em>empire.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Finance, operations, HR and inventory unified into one live,
                auditable system — workflows that enforce themselves, numbers
                that reconcile themselves.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-14 sm:gap-6 sm:pt-8">
                {[
                  ["8 yrs", "Longest ERP engagement"],
                  ["99.5%", "Attendance accuracy"],
                  ["−95%", "Less payroll admin"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <strong className="text-3xl sm:text-4xl">{stat}</strong>
                    <p className="mt-2 text-[11px] uppercase tracking-[.1em] text-slate-500 dark:text-slate-400">
                      {label}
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
                    ERP-OPS — LIVE
                  </span>
                  <span>DISCIPLINE 05 / 14</span>
                </div>
                <p className="mt-8 text-[11px] font-semibold tracking-[.14em] text-slate-400">
                  ATTENDANCE ACCURACY · LIVE
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <strong className="text-6xl tracking-tight sm:text-7xl">
                    99.5
                  </strong>
                  <span className="text-2xl text-slate-400">%</span>
                  <span className="text-sm font-semibold text-emerald-600">
                    ▲ less time fraud
                  </span>
                </div>
                <svg
                  className="mt-6 h-28 w-full"
                  viewBox="0 0 600 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 90 C100 88 180 86 250 80 S390 68 450 52 S530 42 600 26 L600 120 L0 120Z"
                    fill="#ff7a59"
                    fillOpacity=".15"
                  />
                  <path
                    d="M0 90 C100 88 180 86 250 80 S390 68 450 52 S530 42 600 26"
                    fill="none"
                    stroke="#ff5a34"
                    strokeWidth="2.5"
                  />
                </svg>
                <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
                  {[
                    ["Longest run", "8 years"],
                    ["Shift model", "Complete"],
                    ["Hours in", "HR · Fin · Inv"],
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
                  {tags.map((t) => (
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
            05 — ERP & BUSINESS AUTOMATION
          </span>
          <nav className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>
                {l.toUpperCase()}
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
                Your operation runs on tribal knowledge and <Em>forty tabs.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "05 / 14"],
                  ["Focus", "Operations software"],
                  ["Proof", "8 yrs longest ERP engagement"],
                  ["Engagement", "Senior-led · Lifetime support"],
                ].map(([k, v]) => (
                  <div className="flex justify-between gap-5 py-5" key={k}>
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
                Every growing company hits the same wall: the spreadsheet that
                runs payroll, the WhatsApp group that runs procurement, the one
                person who knows how invoicing actually works. It functions —
                until the volume doubles, the auditor calls, or that person
                resigns.
              </p>
              <p className="mt-6">
                We replace it with an ERP shaped around how your business
                actually operates —{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  not a 400-module monolith you bend yourself around.
                </strong>{" "}
                Built module by module, adopted team by team, with your data
                living in one place.
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["ERP Portal", "−82 hrs / week"],
                  ["TapTime", "99.5% accuracy"],
                  ["Employee App", "95% adoption"],
                ].map(([n, s]) => (
                  <div
                    key={n}
                    className="flex justify-between border-b border-slate-200 py-4 text-sm dark:border-white/10"
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
              One system of <Em>record.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              The operational core, module by module — each one replacing a
              spreadsheet, workaround, or a prayer.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {capabilities.map(([n, t, b]) => (
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
              Adoption first, <Em>big-bang never.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              ERP projects fail by decree. Ours land because each module wins
              trust before the next one starts.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {method.map(([n, w, t, b]) => (
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
              A multi-site attendance platform that handles time, payroll, NFC
              and biometric data in real time.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,.25)] lg:grid-cols-[1.1fr_1fr] dark:border-white/10">
            <div className="relative min-h-[270px] overflow-hidden bg-[#c8e5c5]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/feeleat-taptime.mp4" type="video/mp4" />
              </video>
            </div>
            <article className="bg-white p-8 dark:bg-[#1b2236] sm:p-10">
              <Label>CASE STUDY · MOBILE · ERP</Label>
              <h3 className="mt-4 text-2xl font-semibold">TapTime</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                NFC, QR and biometric attendance for multi-site hourly teams —
                feeding payroll and operations data in real time. Fraud-proof,
                no spreadsheets.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["99.5%", "Accuracy"],
                  ["−95%", "Less payroll"],
                  ["Real-time", "ERP sync"],
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
              A boring, proven stack that is safe to grow in and straightforward
              for your future team to own.
            </p>
          </div>
          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {stack.map(([l, tools]) => (
              <div
                key={l}
                className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-center"
              >
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  {l}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
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
              Disciplines most often combined with ERP — same architecture, same
              engineers, no integration tax.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              [
                "Data Engineering & Analytics",
                "Pipelines, warehouses and BI that turn raw events into trustworthy numbers.",
              ],
              [
                "Custom Product Development",
                "Engineering for workflows no off-the-shelf tool will fit — owned entirely by you.",
              ],
              [
                "Mobile App Development",
                "Native and cross-platform apps with offline-first sync, payments, NFC and push.",
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
          <Heading className="mt-6 max-w-2xl">
            Questions, <Em>answered.</Em>
          </Heading>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
            The things buyers of ERP ask us most. Anything else — put it in a
            brief and a senior engineer replies within a business day.
          </p>
          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map(([q, a], i) => {
              const open = i === openIndex;
              return (
                <div key={q}>
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex gap-4">
                      <span
                        className={`text-[11px] tracking-[.1em] ${open ? "text-[#ff5a34]" : "text-slate-400"}`}
                      >
                        Q.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium">{q}</span>
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${open ? "bg-[#ff5a34] text-white" : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-300"}`}
                    >
                      {open ? "×" : "+"}
                    </span>
                  </button>
                  {open && (
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
            Which spreadsheet scares you <Em>the most?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us about the process held together by tabs, exports and one
            indispensable person. We reply within one business day with an
            honest modular roadmap.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sales@Bigwig.com"
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

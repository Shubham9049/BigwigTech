"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const capabilities = [
  [
    "01",
    "Infrastructure as Code",
    "Terraform for every resource — reviewable, reproducible and easy to evolve.",
  ],
  [
    "02",
    "Auto-scaling & cost control",
    "Capacity that follows demand and budgets with clear performance and bill guardrails.",
  ],
  [
    "03",
    "Incident response",
    "Runbooks, on-call escalation and blameless post-mortems for the failures worth learning from.",
  ],
  [
    "04",
    "CI/CD delivery",
    "Safe pipelines, staged releases and rollback paths so shipping never becomes a gamble.",
  ],
  [
    "05",
    "Observability",
    "Logs, metrics and traces arranged around the questions your operators need answered.",
  ],
  [
    "06",
    "Cloud security",
    "Least privilege, audit trails and practical hardening that fits how your team works.",
  ],
];

const phases = [
  [
    "01",
    "AUDIT & MAP",
    "Every resource, dependency and single point of failure documented — including the ones nobody knows exist.",
  ],
  [
    "02",
    "CODIFY THE TRUTH",
    "Existing infrastructure imported to Terraform. From here, change happens by review, not by SSH.",
  ],
  [
    "03",
    "AUTOMATE DELIVERY",
    "CI/CD with tests, staging and rollback. Deploys go from feared events to non-events.",
  ],
  [
    "04",
    "OBSERVE & HARDEN",
    "Dashboards, alerting, load tests and security review — then lifetime operation by the same team.",
  ],
];

const stacks: Array<[string, string[]]> = [
  ["CLOUD", ["AWS", "Azure", "GCP", "Cloudflare"]],
  ["PLATFORM", ["Terraform", "Docker", "Kubernetes / ECS", "GitHub Actions"]],
  ["OBSERVABILITY", ["Grafana", "Prometheus", "Sentry", "Datadog"]],
];

const related = [
  [
    "SaaS App Development",
    "Multi-tenant platforms with billing, RBAC and analytics — built to scale from your first customer.",
  ],
  [
    "Data Engineering & Analytics",
    "Pipelines, warehouses and BI that turn raw events into numbers your whole team trusts.",
  ],
  [
    "Audio & Video Streaming",
    "Live and VOD platforms that survive a viral spike — low latency on every device.",
  ],
];

const faqs = [
  [
    "Will this reduce our AWS bill?",
    "Usually. We first show where cost follows waste, then right-size, schedule and set guardrails. Savings are measured against an agreed baseline.",
  ],
  [
    "Do we still need our own DevOps hire?",
    "You may eventually want one. We leave behind documented infrastructure and work alongside your team so that decision is yours, not a dependency on us.",
  ],
  [
    "How do you handle compliance — GDPR, SOC 2, ISO?",
    "We translate the controls that matter into evidence-producing infrastructure: access boundaries, audit trails, backup policies and documented incident response.",
  ],
  [
    "Do we need Kubernetes?",
    "Not by default. We choose the simplest runtime that meets your reliability and delivery needs, then add complexity only when the workload earns it.",
  ],
  [
    "What about disaster recovery?",
    "We design recovery targets with you, test restores rather than merely taking backups, and document who does what when an incident happens.",
  ],
  [
    "What does good observability actually look like?",
    "A new engineer can tell whether customers are affected, why, and what changed — from a small set of dashboards and actionable alerts.",
  ],
];

function Em({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif font-normal italic text-[#ff5a34]">
      {children}
    </span>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[.18em] text-[#ff5a34]">
      — {children}
    </p>
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
      className={`text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}

function CloudCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          CLOUD-OPS · LIVE
        </span>
        <span>DISCIPLINE 10 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        CUSTOMER SERVICE SLO THIS MONTH
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">
          40<sup className="text-2xl">+</sup>
        </strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ 99.9% SLO kept
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
        aria-label="Service reliability trend"
      >
        <path
          d="M0 95 C110 95 190 92 275 80 S395 67 480 47 S550 40 600 25 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 95 C110 95 190 92 275 80 S395 67 480 47 S550 40 600 25"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Deploys", "Daily"],
          ["Audit span", "3d → 4h"],
          ["Incidents", "24/7"],
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
        {["AWS", "Terraform", "CI/CD", "SRE"].map((x) => (
          <span
            key={x}
            className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DevOpsCloudPage() {
  const [open, setOpen] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      id="top"
      className={`${styles.page} -mt-24 min-h-screen bg-[#f4f4fa] pt-24 text-[#0d0f21] dark:bg-[#0a0b18] dark:text-white`}
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
            <span className="text-[#ff5a34]">DEVOPS</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 10 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Infrastructure without
                <br />
                the <Em>3 a.m. pager.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Cloud foundations engineered for boring nights — automated
                delivery, observability and security that let your product team
                ship daily without holding their breath.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["40+", "Services from zero"],
                  ["Daily", "Deploys, not quarterly"],
                  ["3d → 4h", "Audit / onboarding"],
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
              <CloudCard />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            10 — DEVOPS & CLOUD
          </span>
          <nav className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex">
            {[
              "Overview",
              "Capabilities",
              "Method",
              "Proof",
              "Stack",
              "FAQ",
            ].map((n) => (
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
              className="rounded-full bg-[#0d0f21] px-4 py-2.5 text-[11px] font-semibold tracking-[.1em] text-white dark:bg-white dark:text-[#0d0f21] sm:px-5"
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
                Your infrastructure should be the most <Em>boring</Em> thing you
                own.
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "10 / 14"],
                  ["Focus", "Cloud infrastructure"],
                  ["Proof", "40+ countries served from our infra"],
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
                We make boring on purpose. Everything is code, every deploy
                automated and reversible, every system observable before it
                misbehaves. The platform we operate serves customers in
                forty-plus countries — and the product thing about them is how
                rarely anyone thinks about them.
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["Bizzabo", "SRE · 40+ countries"],
                  ["Aviatize", "AWS · 40+ countries"],
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
      <ServiceSection
        id="capabilities"
        label="WHAT YOU GET"
        title={
          <>
            Engineered for <Em>quiet.</Em>
          </>
        }
        side="The six layers of a production cloud that lets everyone sleep."
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
      </ServiceSection>
      <section
        id="method"
        className="scroll-mt-20 border-b border-slate-200 bg-[#eef0f7] dark:border-white/10 dark:bg-[#161c2e]"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>HOW WE DELIVER</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              Stabilise, automate, <Em>forget.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              A migration path that never bets your uptime on a big-bang
              weekend.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {phases.map(([n, t, b]) => (
              <article key={n}>
                <div className="flex gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {n}
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
              The infrastructure behind an aviation platform trusted in 40+
              countries — where downtime grounds real aircraft.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,.25)] lg:grid-cols-[1.1fr_1fr] dark:border-white/10">
            <div className="min-h-[270px] overflow-hidden bg-[#dbe9d5]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/aviatize.mp4" type="video/mp4" />
              </video>
            </div>
            <article className="bg-white p-8 dark:bg-[#1b2236] sm:p-10">
              <Label>CASE STUDY · SAAS · INFRASTRUCTURE</Label>
              <h3 className="mt-4 text-2xl font-semibold">Aviatize</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                A compliance-critical aviation platform whose audit prep dropped
                from three days to four hours — because the infrastructure
                documents and proves itself.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["3d → 4h", "Audit prep"],
                  ["1,000+", "Deployments"],
                  ["40+", "Countries"],
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
      <ServiceSection
        id="stack"
        label="TOOLS WE REACH FOR"
        title={
          <>
            Chosen for the <Em>problem,</Em> not the résumé.
          </>
        }
        side="AWS-first, automation-everything — the toolchain your next hire already knows."
      >
        <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
          {stacks.map(([l, ts]) => (
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
      </ServiceSection>
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>PAIRS WELL WITH</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              One team. <Em>Zero</Em> hand-offs.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Disciplines most often combined with DevOps & cloud — same
              architecture, same engineers, no integration tax.
            </p>
          </div>
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
        </div>
      </section>
      <section
        id="faq"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-16">
          <div>
            <Label>BEFORE YOU ASK</Label>
            <Heading className="mt-6">
              Questions, <Em>answered.</Em>
            </Heading>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              The things buyers of DevOps & cloud ask us most. Anything else —
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
      </section>
      <section
        id="book-a-call"
        className="scroll-mt-20 overflow-hidden bg-[#0b0e22]"
      >
        <div className="mx-auto max-w-[900px] px-4 py-24 text-center sm:px-10 sm:py-28">
          <Label>LET&apos;S SCOPE IT</Label>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            When did you last deploy <Em>without holding your breath?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us about your stack, your deploy day and your last incident. A
            senior infrastructure engineer replies within one business day with
            an honest read.
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

function ServiceSection({
  id,
  label,
  title,
  side,
  children,
}: {
  id: string;
  label: string;
  title: React.ReactNode;
  side: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
        <Label>{label}</Label>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
          <Heading>{title}</Heading>
          <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
            {side}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

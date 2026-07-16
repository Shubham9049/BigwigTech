"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const subNavLinks = [
  "Overview",
  "Capabilities",
  "Method",
  "Proof",
  "Stack",
  "FAQ",
];
const heroTags = [
  "Multi-tenant",
  "RBAC",
  "Billing",
  "Analytics",
  "Integrations",
];

const capabilities = [
  [
    "01",
    "SaaS MVP sprint",
    "A revenue-ready first version in weeks — scoped ruthlessly to what proves customers will pay.",
  ],
  [
    "02",
    "Multi-tenancy & RBAC",
    "Tenant isolation, roles and permissions engineered into the data layer, not patched on after launch.",
  ],
  [
    "03",
    "Billing & subscriptions",
    "Stripe-powered plans, trials, seat usage, metering and dunning — wired to revenue reporting from day one.",
  ],
  [
    "04",
    "Analytics & AI features",
    "Product analytics for you and useful intelligence for customers, from the first release.",
  ],
  [
    "05",
    "Integrations & automation",
    "Public APIs, webhooks and the third-party connections your customers expect, built as part of the product.",
  ],
  [
    "06",
    "Maintenance & support",
    "A senior team stays on after launch: releases, monitoring and the next feature when you are ready.",
  ],
];

const methodSteps = [
  [
    "01",
    "WEEK 0–1",
    "Discovery & pricing model",
    "We scope the MVP around what customers will pay for — plans, seats, limits — not a feature wishlist.",
  ],
  [
    "02",
    "WEEKS 1–2",
    "Architecture for tenancy",
    "Isolation, billing and permissions designed before the first feature, so foundations survive real growth.",
  ],
  [
    "03",
    "WEEKS 2–8",
    "Demoable increments",
    "Working software every week — wired to real payments and real data, ready to show a prospect.",
  ],
  [
    "04",
    "WEEK 8+",
    "Launch & compound",
    "Production launch with observability and a roadmap rhythm. Features stack on clean foundations.",
  ],
];

const stack: Array<[string, string[]]> = [
  ["PRODUCT & FRONTEND", ["Next.js", "React", "TypeScript", "Tailwind CSS"]],
  ["PLATFORM & DATA", ["Node.js", "Postgres", "Prisma", "Redis"]],
  ["REVENUE & OPERATIONS", ["Stripe", "AWS", "Docker", "Sentry"]],
];

const related = [
  [
    "UI / UX Design",
    "Research-led product design that ships — design systems, handoff and user testing.",
  ],
  [
    "DevOps & Cloud (AWS)",
    "Cloud foundations that scale without 3 a.m. surprises — CI/CD, security and observability.",
  ],
  [
    "AI / ML Solutions",
    "Vision, language and prediction models shipped to production — measured on outcomes, not demos.",
  ],
];

const faqs = [
  [
    "How fast can we get to a sellable MVP?",
    "Typically 8–14 weeks to a version you can charge for, depending on scope. The discovery sprint fixes the must-haves first; the rest becomes a deliberate release plan.",
  ],
  [
    "Single-tenant or multi-tenant?",
    "We choose the simplest architecture that protects each customer and supports your commercial model. Most SaaS products benefit from multi-tenancy from the first release.",
  ],
  [
    "Can you take over an existing SaaS codebase?",
    "Yes. We start with a technical audit, stabilise the highest-risk areas, then build a sensible roadmap with your existing team.",
  ],
  [
    "Who owns the code and the IP?",
    "You do. Repositories, infrastructure and every design and engineering artefact live in your accounts from day one.",
  ],
  [
    "Can you make our SaaS SOC 2 compliant?",
    "We build the access controls, audit trails and operational practices that make compliance achievable, and work alongside your chosen assessor.",
  ],
  [
    "How is SaaS pricing usually structured?",
    "We help turn the value your product creates into a clear model — per seat, usage, tier, transaction or a blended approach.",
  ],
  [
    "How do you handle free trials, dunning and failed payments?",
    "Through a properly configured billing workflow: trial conversion, card updates, retries, cancellation flows and revenue reporting are designed together.",
  ],
  [
    "How do you support enterprise SSO and SCIM provisioning?",
    "When enterprise buyers need it, we add SAML/OIDC SSO, SCIM provisioning, audit logs and the admin controls their security team expects.",
  ],
];

function MetricCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.14em] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          PLATFORM-OPS — LIVE
        </span>
        <span className="text-slate-400">DISCIPLINE 04 / 14</span>
      </div>
      <p className="mt-8 text-[11px] font-semibold tracking-[0.14em] text-slate-400">
        MILESTONE OF ONE PLATFORM
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">1,000+</strong>
        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          ▲ customers in production
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
        role="img"
        aria-label="Customer growth chart"
      >
        <defs>
          <linearGradient id="saasChartFill" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#ff7a59" stopOpacity=".35" />
            <stop offset="1" stopColor="#ff7a59" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 92 C80 90 105 90 165 86 S250 80 310 74 S390 78 450 58 S540 42 600 26 L600 120 L0 120 Z"
          fill="url(#saasChartFill)"
        />
        <path
          d="M0 92 C80 90 105 90 165 86 S250 80 310 74 S390 78 450 58 S540 42 600 26"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Paying teams", "50 / 5"],
          ["Tenancy", "Multi-tenant"],
          ["Billing", "Built-in"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-slate-400">
              {label}
            </p>
            <p className="mt-1.5 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10">
        {heroTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SaasAppDevelopmentPage() {
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
              "radial-gradient(50% 60% at 8% 15%, rgba(255,122,89,.14), transparent 60%), radial-gradient(45% 55% at 92% 5%, rgba(99,102,241,.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 pt-8 sm:px-10 sm:pt-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-[.18em] text-slate-500 dark:text-slate-400"
          >
            <Link href="/" className="hover:text-[#ff5a34]">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#ff5a34]">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#ff5a34]">SAAS</span>
          </nav>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <span className="h-px w-8 bg-slate-400" />
                DISCIPLINE 04 — OF 14
              </div>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                From first user
                <br />
                to{" "}
                <span className="font-serif font-normal italic text-[#ff5a34]">
                  millionth.
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Multi-tenant platforms with billing, roles and analytics baked
                in from day one — software your customers pay for month after
                month, built to never need a rewrite.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-14 sm:gap-6 sm:pt-8">
                {[
                  ["1,000+", "Accounts live"],
                  ["40+", "Countries"],
                  ["5.0", "Avg. product rating"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <strong className="text-3xl sm:text-4xl">{stat}</strong>
                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[.1em] text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-6">
              <MetricCard />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] font-medium tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            04 — SAAS APP DEVELOPMENT
          </span>
          <nav
            aria-label="Section navigation"
            className="hidden gap-8 text-[11px] font-medium tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex"
          >
            {subNavLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="uppercase hover:text-[#ff5a34]"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
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
                {" "}
                The expensive mistake is the <Em>rewrite at 10,000 users.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "04 / 14"],
                  ["Focus", "Multi-tenant platforms"],
                  ["Proof", "1,000+ aircraft on one platform"],
                  ["Engagement", "Senior-led · Lifetime support"],
                ].map(([key, value]) => (
                  <div className="flex justify-between gap-5 py-5" key={key}>
                    <dt className="text-[11px] font-semibold tracking-[.14em] text-slate-400">
                      {key.toUpperCase()}
                    </dt>
                    <dd className="text-right text-sm font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
              <p>
                Most SaaS products are built twice: once quickly to find
                customers, then again painfully when shortcuts start billing
                wrong, leaking data between tenants or collapsing under the
                first enterprise deal.
              </p>
              <p className="mt-6">
                We architect for growth before the first feature lands.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  Multi-tenancy, billing, RBAC and audit logs are foundations,
                  not features
                </strong>{" "}
                — so your platform compounds instead of accruing debt.
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] font-semibold tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["Aviatize", "40+ countries"],
                  ["LeadTrack AI", "20k+ calls"],
                  ["Smart Client Portal", "SSO · RBAC · APIs"],
                ].map(([name, stat]) => (
                  <div
                    key={name}
                    className="flex justify-between border-b border-slate-200 py-4 text-sm dark:border-white/10"
                  >
                    <strong className="text-[#0d0f21] dark:text-white">
                      {name}
                    </strong>
                    <span className="font-mono text-[#ff5a34]">{stat}</span>
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
              A platform, not just an <Em>app.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Everything a commercial SaaS needs to charge money safely from the
              first invoice.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {capabilities.map(([n, title, body]) => (
              <article key={n} className="bg-white p-6 dark:bg-[#1b2236]">
                <span className="font-mono text-[11px] font-semibold text-[#ff5a34]">
                  {n}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {body}
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
              Ship weekly, scale <Em>quietly.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              A delivery rhythm tuned for products that must sell while they are
              being built.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {methodSteps.map(([n, week, title, body]) => (
              <article key={n}>
                <div className="flex gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {n}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
                    {week}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {body}
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
              A full-stack aviation SaaS we engineered — scheduling, compliance,
              logbooks and operations for 40+ countries.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,.25)] lg:grid-cols-[1.1fr_1fr] dark:border-white/10">
            <div className="relative min-h-[270px] overflow-hidden bg-black">
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
              <Label>CASE STUDY · SAAS · WEB</Label>
              <h3 className="mt-4 text-2xl font-semibold">Aviatize</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                A full-stack aviation operations platform for flight schools and
                operators — scheduling, compliance, digital logbooks and ICAO
                testing under one roof.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["3d–4h", "Daily prep"],
                  ["1,000+", "Aircraft"],
                  ["40+", "Countries"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <strong className="text-2xl">{stat}</strong>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.1em] text-slate-400">
                      {label}
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
              A proven, reliable stack — fast to build in, safe to scale on,
              easy for your future team to own.
            </p>
          </div>
          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {stack.map(([label, tools]) => (
              <div
                key={label}
                className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-center"
              >
                <p className="text-[11px] font-semibold tracking-[.14em] text-slate-400">
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                      key={tool}
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
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>PAIRS WELL WITH</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              One team. <Em>Zero</Em> hand-offs.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Disciplines most often combined with SaaS — same architecture,
              same engineers, no integration tax.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {related.map(([title, body]) => (
              <Link
                href="/services"
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-[#ff5a34] dark:border-white/10 dark:bg-[#1b2236]"
              >
                <div className="flex justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 dark:bg-[#2c3655]">
                    <i className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                  </span>
                  <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#ff5a34]">
                    →
                  </span>
                </div>
                <h3 className="mt-6 text-[15px] font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {body}
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
          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map(([question, answer], index) => {
              const open = index === openIndex;
              return (
                <div key={question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex gap-4">
                      <span
                        className={`mt-.5 text-[11px] font-semibold tracking-[.1em] ${open ? "text-[#ff5a34]" : "text-slate-400"}`}
                      >
                        Q.{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium">
                        {question}
                      </span>
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${open ? "bg-[#ff5a34] text-white" : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-300"}`}
                    >
                      {open ? "×" : "+"}
                    </span>
                  </button>
                  {open && (
                    <p className="max-w-2xl pb-6 pl-[52px] pr-2 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400 sm:pr-10">
                      {answer}
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
            Building software customers{" "}
            <span className="font-serif font-normal italic text-[#ff8c66]">
              pay for monthly?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us the idea, the market and the outcome. A senior product
            engineer replies within one business day with the path to revenue.
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

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
    "Brand-ready core",
    "A production-hardened core with isolation, scaling and security under load.",
  ],
  [
    "02",
    "Deep customisation",
    "Deep visual customisation per brand — domains, themes, emails and apps that look born in-house.",
  ],
  [
    "03",
    "Operator consoles",
    "Operator consoles and customer-facing portals configured to your workflows out of the gate.",
  ],
  [
    "04",
    "Roles & analytics",
    "Per-tenant RBAC and dashboards — your operators and each tenant securely see only their world.",
  ],
  [
    "05",
    "Billing per tenant",
    "Plans, usage metering and invoicing wired per brand — revenue infrastructure from day one.",
  ],
  [
    "06",
    "Fast go-to-market",
    "A launch path measured in weeks, with extensions that fit when your product diverges from the base.",
  ],
];
const steps = [
  [
    "01",
    "FIT",
    "Fit assessment",
    "We map your requirements against the platform honestly. If white label is the wrong call, we tell you before you spend.",
  ],
  [
    "02",
    "BRAND",
    "Brand & configure",
    "Your identity, domains, plans and workflows applied to the core — the fastest route from idea to live journey.",
  ],
  [
    "03",
    "EXTEND",
    "Extend the edges",
    "Custom features build on the platform APIs where your product genuinely differs — without breaking the whole journey.",
  ],
  [
    "04",
    "OWN",
    "Own the roadmap",
    "As you grow, the platform evolves with you — same senior team, lifetime support, no sunset clause.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["CORE", ["Next.js", "TypeScript", "Node.js", "Postgres", "Stripe"]],
  ["PLATFORM", ["Redis", "AWS", "Terraform", "Multi-tenant RBAC"]],
  ["DELIVERY", ["Theming engine", "Analytics", "CI/CD"]],
];
const faqs = [
  [
    "How fast can we actually launch?",
    "A well-defined branded launch can move in weeks because the platform core is already proven. The exact timeline comes from the brand, data, integrations and configuration work your product needs.",
  ],
  [
    "What happens when we outgrow the base platform?",
    "The architecture is designed for extension. We add the product-specific capabilities at the edge while keeping the proven operational core stable.",
  ],
  [
    "Who owns the customer data?",
    "You do. Tenant data is isolated, access is governed and your commercial relationship remains entirely yours.",
  ],
  [
    "Will customers know this is white-labelled?",
    "No. Your domain, branding, emails, application surfaces and support workflow are configured around your product.",
  ],
  [
    "How far can we customise beyond colours and logo?",
    "Far beyond it: journeys, roles, plans, permissions, data views, content and integrations can be configured or extended.",
  ],
  [
    "Do we get upgrades and bug fixes from the shared platform?",
    "Yes. The core is operated and maintained as a product, with careful upgrade paths that preserve your tenant customisations.",
  ],
  [
    "Can it be multi-tenant under our own brand?",
    "Yes. That is the point: each of your customers gets an isolated branded world while you operate a scalable platform behind it.",
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
          TENANT-OPS — LIVE
        </span>
        <span>DISCIPLINE 11 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        TIME TO BRANDED LAUNCH
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">Weeks</strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ multi-tenant by architecture
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 95 C110 95 170 88 260 84 S390 67 480 48 S550 40 600 25 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 95 C110 95 170 88 260 84 S390 67 480 48 S550 40 600 25"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Tenants", "100% yours"],
          ["Core", "Battle-tested"],
          ["Branding", "You own it"],
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
export default function WhiteLabelSolutionsPage() {
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
            <span className="text-[#ff5a34]">WHITE LABEL</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 11 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Launch in weeks,
                <br />
                under <Em>your brand.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Battle-tested platforms re-skinned and re-launched as your
                product — multi-tenant, fully brandable, and proven in
                production before your name ever goes on them.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["Weeks", "To branded launch"],
                  ["100%", "Your brand, your customers"],
                  ["Multi-tenant", "By architecture"],
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
            11 — WHITE LABEL SOLUTIONS
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
                Someone already paid for the hard part. <Em>Benefit</Em> from
                that.
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "11 / 14"],
                  ["Focus", "Your brand, our platform"],
                  ["Proof", "Weeks to branded launch"],
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
                White label flips the order: you start from a platform already
                hardened in production and spend your time and budget on the
                surface that sells — your brand, your workflows, your market. We
                re-skin, extend and operate it; your customers only ever see
                you.
              </p>
              <p className="mt-6">
                <strong className="text-[#0d0f21] dark:text-white">
                  The product you launch is yours; the operational risk
                  underneath has already been earned the difficult way.
                </strong>
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                <div className="flex justify-between border-b border-slate-200 py-4 text-sm dark:border-white/10">
                  <strong className="text-[#0d0f21] dark:text-white">
                    Smart Client Portal
                  </strong>
                  <span className="font-mono text-[#ff5a34]">
                    −60% support calls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
      <Section
        id="capabilities"
        label="WHAT YOU GET"
        title={
          <>
            Proven core, <Em>your surface.</Em>
          </>
        }
        side="Everything a branded platform launch needs — already built, already broken in."
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
            Re-brand, extend, <Em>diverge.</Em>
          </>
        }
        side="A staged path from launch speed to product ownership — without rebuilding the foundations."
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
        side="A multi-tenant platform engineered for exactly this — every tenant gets their own branded, isolated world."
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
              <source src="/leadtrack-ai.mp4" type="video/mp4" />
            </video>
          </div>
          <article className="bg-white p-8 dark:bg-[#1b2236] sm:p-10">
            <Label>CASE STUDY · MULTI-TENANT SAAS</Label>
            <h3 className="mt-4 text-2xl font-semibold">Lead Track AI</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              Multi-tenant SaaS where every customer operates a fully isolated,
              configured instance — the architecture pattern white label
              launches are built on.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
              {[
                ["Multi-tenant", "By design"],
                ["100K+", "Profiles"],
                ["<30s", "First response"],
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
        side="The same hireable platform stack as our SaaS builds — because a white label product is one."
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
                The things buyers of white label platforms ask us most. Anything
                else — put it in a brief; a senior engineer replies within a
                business day.
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
            Want the product without <Em>the year of plumbing?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us the market and the brand. We reply within one business day
            with an honest answer on whether white label is the wrong call.
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

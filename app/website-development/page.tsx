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
    "Front-end engineering",
    "React and Next.js interfaces that feel instant, look considered and are built to stay that way.",
  ],
  [
    "02",
    "Back-end & APIs",
    "Fast, documented APIs over Postgres — the contract your web, mobile and partner integrations all share.",
  ],
  [
    "03",
    "E-commerce",
    "Storefronts, checkout and subscriptions engineered for conversion, payments, tax and fulfilment.",
  ],
  [
    "04",
    "Performance & SEO",
    "Core Web Vitals in the green, structured data and rendering strategy that compounds organic traffic.",
  ],
  [
    "05",
    "Accessibility",
    "WCAG-conscious components and testing, because excluding users is also bad business.",
  ],
  [
    "06",
    "CMS & content ops",
    "Headless content workflows your marketing team can run without engineering tickets.",
  ],
];

const steps = [
  [
    "01",
    "SCOPE",
    "Set the budgets",
    "Performance, SEO and conversion are decided early — not discovered after launch.",
  ],
  [
    "02",
    "SYSTEM",
    "Design the system",
    "Information architecture, reusable components and content patterns make each new page easier.",
  ],
  [
    "03",
    "BUILD",
    "Build & verify",
    "Lighthouse, accessibility and visual regression checks run on every meaningful release.",
  ],
  [
    "04",
    "LAUNCH",
    "Launch & compound",
    "Analytics tell us what people do; iterations turn real behaviour into the next improvement.",
  ],
];

const stack: Array<[string, string[]]> = [
  ["FOUNDATION", ["Next.js", "TypeScript", "React", "Node.js"]],
  ["CONTENT", ["Sanity", "Contentful", "Strapi", "MDX"]],
  ["COMMERCE", ["Stripe", "Shopify", "Medusa", "Postgres"]],
];

const related = [
  [
    "UX/UI Design",
    "Research-led product design that ships as clear, conversion-aware interfaces.",
  ],
  [
    "SaaS App Development",
    "Multi-tenant platforms with billing, RBAC and analytics — built to scale.",
  ],
  [
    "DevOps & Cloud (AWS)",
    "Cloud foundations that scale without a 3 a.m. surprise — CI/CD, security and observability.",
  ],
];

const faqs = [
  [
    "Why not WordPress or a site builder?",
    "For a brochure site, honestly, use one and we will help you choose. When conversion, integrations, performance or future growth matter, a tailored website becomes a durable business asset rather than a theme to work around.",
  ],
  [
    "How fast will the site actually be?",
    "We set Core Web Vitals targets in discovery and measure them throughout the build. The result is a site that feels quick on ordinary devices and connections, not only a developer laptop.",
  ],
  [
    "Can you migrate us without losing our rankings?",
    "Yes. We plan URL redirects, metadata, structured data and crawl checks before launch, then monitor the transition closely.",
  ],
  [
    "Do you do design as well as build?",
    "Yes. We can lead the full product and visual design process or collaborate with your in-house design team.",
  ],
  [
    "Will the site be editable by my marketing team?",
    "Yes. We build the content model around the changes your team actually needs to make, then hand it over with clear guidance.",
  ],
  [
    "Which headless CMS should we use?",
    "The one that suits your team, governance and publishing needs. We recommend and configure the right fit rather than forcing a preferred tool.",
  ],
  [
    "Can you help us rank in AI answers and search, not just classic SEO?",
    "We build clear information architecture, structured data and authoritative content foundations that support both traditional and emerging search experiences.",
  ],
  [
    "Do you handle multilingual sites?",
    "Yes. Translation workflows, locale-aware content, routing and international SEO are designed into the platform from the start.",
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

function MetricCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          WEB-OPS — LIVE
        </span>
        <span>DISCIPLINE 07 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        PEAK CONCURRENT USERS SERVED
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">50K+</strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ live traffic protected
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 95 C105 93 180 86 258 83 S380 70 470 52 S550 44 600 28 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 95 C105 93 180 86 258 83 S380 70 470 52 S550 44 600 28"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Interactive", "< 1.5 s"],
          ["Monitoring", "24/7"],
          ["Stack", "Front-end → API"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[10px] uppercase tracking-[.12em] text-slate-400">
              {label}
            </p>
            <strong className="mt-1.5 block text-sm">{value}</strong>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10">
        {["Next.js", "SEO", "Core Web Vitals", "Performance"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WebsiteDevelopmentPage() {
  const [open, setOpen] = useState(0);
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
            aria-label="Breadcrumb"
            className="flex gap-2 text-[11px] tracking-[.18em] text-slate-500 dark:text-slate-400"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/services">SERVICES</Link>
            <span>/</span>
            <span className="text-[#ff5a34]">WEB</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 07 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                The web, engineered
                <br />
                like a <Em>product.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Web platforms built front to back — fast, secure interfaces over
                robust APIs, measured on the numbers that matter: speed, search
                and conversion.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["50K+", "Peak concurrent users"],
                  ["<1.5s", "Time to interactive"],
                  ["10K+", "Pages indexed"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <strong className="text-3xl sm:text-4xl">{stat}</strong>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[.1em] text-slate-500 dark:text-slate-400">
                      {label}
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
            07 — WEB APP DEVELOPMENT
          </span>
          <nav
            aria-label="Section navigation"
            className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex"
          >
            {nav.map((item) => (
              <a
                key={item}
                className="uppercase hover:text-[#ff5a34]"
                href={`#${item.toLowerCase()}`}
              >
                {item}
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
                Most websites are brochures. Yours should be{" "}
                <Em>infrastructure.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "07 / 14"],
                  ["Focus", "Web platforms"],
                  ["Proof", "50K+ peak concurrent users"],
                  ["Engagement", "Senior-led · Lifetime support"],
                ].map(([key, value]) => (
                  <div className="flex justify-between gap-5 py-5" key={key}>
                    <dt className="text-[11px] tracking-[.14em] text-slate-400">
                      {key.toUpperCase()}
                    </dt>
                    <dd className="text-right text-sm font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
              <p>
                The web is where your customers sign up, log in, buy and judge
                you — usually in the first two seconds. Templates and page
                builders get you something that looks finished; they cannot give
                you something that performs under load, ranks on intent and
                converts visitors into revenue.
              </p>
              <p className="mt-6">
                We engineer web platforms the way we engineer everything:
                performance budgets enforced in CI, SEO designed into the
                architecture, and accessibility as a default — not an audit
                finding.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  The same stack has carried live events past fifty thousand
                  concurrent viewers without blinking.
                </strong>
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["AudioBounce", "Under 4 min to site"],
                  ["Bizzabo", "50K+ concurrent"],
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
              Front-end to <Em>API.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              One team owns the whole surface — interface, backend and the
              pipeline between them.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {capabilities.map(([number, title, body]) => (
              <article key={number} className="bg-white p-6 dark:bg-[#1b2236]">
                <span className="font-mono text-[11px] text-[#ff5a34]">
                  {number}
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
              Measured, not <Em>vibes-based.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Every build carries explicit budgets — speed, ranking, conversion
              — and ships against them.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {steps.map(([number, phase, title, body]) => (
              <article key={number}>
                <div className="flex gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
                    {number}
                  </span>
                  <span className="text-[11px] tracking-[.14em] text-slate-500 dark:text-slate-400">
                    {phase}
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
              A web platform that streams studio-quality live events to tens of
              thousands — built on the engineering bedrock this product
              deserves.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,15,40,.25)] lg:grid-cols-[1.1fr_1fr] dark:border-white/10">
            <div className="relative min-h-[270px] overflow-hidden bg-[#17213a]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/bizzabo.mp4" type="video/mp4" />
              </video>
            </div>
            <article className="bg-white p-8 dark:bg-[#1b2236] sm:p-10">
              <Label>CASE STUDY · WEB · SAAS</Label>
              <h3 className="mt-4 text-2xl font-semibold">Bizzabo</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                An all-in-one event experience OS for virtual, in-person and
                hybrid events — studio-quality live streaming and audience
                interaction for thousands.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["50K+", "Peak users"],
                  ["10K+", "Sessions"],
                  ["<1.5s", "Interactive start"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <strong className="text-2xl">{stat}</strong>
                    <p className="mt-1 text-[10px] uppercase tracking-[.1em] text-slate-400">
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
              The boring-modern web stack: fast to build, easy to hire for, hard
              to outgrow.
            </p>
          </div>
          <div className="mt-14 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
            {stack.map(([label, tools]) => (
              <div
                key={label}
                className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-center"
              >
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] text-slate-600 dark:border-white/10 dark:text-slate-300"
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
              Disciplines most often combined with web platforms — same
              architecture, same engineers, no integration tax.
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
                  <span className="text-slate-300 group-hover:text-[#ff5a34]">
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
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-16">
          <div>
            <Label>BEFORE YOU ASK</Label>
            <Heading className="mt-6">
              Questions, <Em>answered.</Em>
            </Heading>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              The things buyers of web platforms ask us most. Anything else —
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
              href="mailto:contact@Bigwig.com"
              className="mt-7 inline-flex rounded-full bg-[#0d0f21] px-5 py-3 text-[12px] font-semibold text-white dark:bg-white dark:text-[#0d0f21]"
            >
              Put in a brief
            </a>
          </div>
          <div className="lg:col-span-2">
            <div className="divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
              {faqs.map(([question, answer], index) => {
                const active = index === open;
                return (
                  <div key={question}>
                    <button
                      type="button"
                      onClick={() => setOpen(active ? -1 : index)}
                      aria-expanded={active}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="flex gap-4">
                        <span
                          className={`text-[11px] tracking-[.1em] ${active ? "text-[#ff5a34]" : "text-slate-400"}`}
                        >
                          Q.{String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-medium">
                          {question}
                        </span>
                      </span>
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${active ? "bg-[#ff5a34] text-white" : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-300"}`}
                      >
                        {active ? "×" : "+"}
                      </span>
                    </button>
                    {active && (
                      <p className="max-w-3xl pb-6 pl-[52px] text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {answer}
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
            Need a web platform that <Em>earns its keep?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            A senior engineer replies within one business day with an honest
            path to speed, search, conversion — or a clearer next step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@Bigwig.com"
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

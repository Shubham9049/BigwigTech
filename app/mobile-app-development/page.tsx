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
    "Native iOS",
    "Swift apps that feel inevitable on the platform — widgets, App Clips and the polish Apple users notice.",
  ],
  [
    "02",
    "Native Android",
    "Kotlin apps tuned for real devices and the long tail of Android hardware, not only the newest camera.",
  ],
  [
    "03",
    "Cross-platform",
    "Flutter and React Native when one codebase serves the business better — chosen on engineering merit, not fashion.",
  ],
  [
    "04",
    "Offline-first sync",
    "Local-first data with conflict-free sync, so the app works in basements, planes and dead zones.",
  ],
  [
    "05",
    "Payments, NFC & push",
    "In-app purchases, wallets, tap-to-pay and NFC paired with notifications that respect the user enough to be kept on.",
  ],
  [
    "06",
    "Store launch & beyond",
    "Review-proof submissions, staged rollouts, crash monitoring and OS-version compatibility for life.",
  ],
];
const steps = [
  [
    "01",
    "PROTOTYPE",
    "Prototype on-device",
    "Clickable flows on real hardware in week two — because an app is judged in the hand, not on a presentation.",
  ],
  [
    "02",
    "BUILD",
    "Build offline-first",
    "Sync, caching and failure states are engineered from the start. Connectivity is treated as a bonus, not an assumption.",
  ],
  [
    "03",
    "TEST",
    "Test on real devices",
    "A device wall of cheap Androids and old iPhones — your users' phones, not your founder's.",
  ],
  [
    "04",
    "LAUNCH",
    "Launch & iterate",
    "Staged rollouts, crash-free-rate alerts and analytics-driven iteration. The app improves every release.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["MOBILE", ["SwiftUI", "Kotlin", "Flutter", "React Native"]],
  ["SERVICES", ["Firebase", "SQLite", "Supabase", "Postgres"]],
  ["COMMERCE", ["Stripe", "In-App Purchase", "NFC", "Fastlane"]],
];
const related = [
  [
    "UI / UX Design",
    "Research-led product design that ships as clear, conversion-aware interfaces.",
  ],
  [
    "IoT Solutions",
    "Connected hardware, edge software and cloud platforms designed together as one system.",
  ],
  [
    "SaaS App Development",
    "Multi-tenant platforms with billing, RBAC and analytics — built to scale from user one to millions.",
  ],
];
const faqs = [
  [
    "Native or cross-platform — which should we pick?",
    "It depends on what the app does and how long it will evolve. Heavy platform integration, cameras or background work favour native; content-and-commerce apps usually ship faster and cheaper on Flutter or React Native with no user-visible compromise.",
  ],
  [
    "How long will we be in the App Store?",
    "We plan for review from day one and use TestFlight and staged rollout processes. Most launches clear review in days, not weeks.",
  ],
  [
    "Do you handle App Store and Play Store approval?",
    "Yes. We prepare the store listings, privacy disclosures, build signing and submission process, then remain available through review.",
  ],
  [
    "What happens after launch?",
    "We monitor crashes, performance and real behaviour, then help prioritise the next releases. Mobile products are never finished at version one.",
  ],
  [
    "Can you take over a mobile app another agency built?",
    "Yes. We start with a code and release audit, stabilise the most important risks, then make a practical roadmap.",
  ],
  [
    "React Native or Flutter, if we go cross-platform?",
    "Both can deliver excellent apps. We choose based on your existing team, integrations, visual requirements and long-term product plan.",
  ],
  [
    "How do you handle in-app purchases and subscriptions?",
    "We implement platform-compliant payment flows, receipt validation and the entitlement model behind them so access stays reliable.",
  ],
  [
    "How do you push updates without forcing users through the app store every time?",
    "Content and backend changes ship without a store release; app-binary updates use release channels and staged rollouts to minimise disruption.",
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

function Metrics() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          MOBILE-OPS — LIVE
        </span>
        <span>DISCIPLINE 08 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        GLOBAL 90-DAY PRODUCTIVITY
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">99.5</strong>
        <span className="text-sm font-semibold text-emerald-600">
          ▲ 4.8m sessions on the app
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 95 C90 94 170 91 250 84 S380 70 470 50 S545 43 600 28 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 95 C90 94 170 91 250 84 S380 70 470 50 S545 43 600 28"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Offline", "Sync-first"],
          ["Retail", "24/7 unmanned"],
          ["Platforms", "iOS · Android"],
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
        {["Native iOS", "Android", "Flutter", "Offline-first"].map((tag) => (
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

export default function MobileAppDevelopmentPage() {
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
            <span className="text-[#ff5a34]">MOBILE</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 08 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Apps people keep
                <br />
                on their <Em>home screen.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Native iOS, Android and cross-platform apps — offline-first,
                instrumented, and polished to the standard that keeps people
                coming back after work ends.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["$10M+", "Valuation built on app"],
                  ["99.5%", "Launch accuracy"],
                  ["24/7", "Retail power"],
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
              <Metrics />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            08 — MOBILE APP DEVELOPMENT
          </span>
          <nav className="hidden gap-8 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400 md:flex">
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
                Week one downloads are easy. Week <Em>fifty-two</Em> retention
                is engineering.
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "08 / 14"],
                  ["Focus", "iOS · Android · Cross-platform"],
                  ["Proof", "$10M+ valuation on our apps"],
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
                Most apps are abandoned within days — not because the idea was
                wrong, but because the app was slow on a three-year-old Android,
                lost data in a dead zone, or nagged with notifications nobody
                wanted. Retention is not a marketing problem. It is an
                engineering standard.
              </p>
              <p className="mt-6">
                Our apps run businesses: fridges unlocked by scan at 3 a.m.,
                shifts booked by NFC access doors of staff, meals paid for in
                tap-to-pay.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  Offline-first sync, native payments and analytics are
                  foundations in every build — because the app that works once
                  is not the one people keep.
                </strong>
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["FeelEat — Happy Fridge", "$10M+ valuation"],
                  ["TapTime", "99.5% accuracy"],
                  ["HappyBee", "24/7 retail"],
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
              Shipped to both <Em>stores.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Whatever the platform strategy, the standard is identical: fast,
              offline-capable, instrumented.
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
              Polish is a process, not a <Em>final sprint.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Quality that survives the store review and the three-star rage
              review alike.
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
              The mobile app at the heart of a $10M+ connected-retail business —
              browse, scan, unlock, pay.
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
              <Label>CASE STUDY · MOBILE · IOT</Label>
              <h3 className="mt-4 text-2xl font-semibold">
                FeelEat — Happy Fridge
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                Browse daily meals, unlock a contactless smart fridge, pay
                in-app and access healthy food in an urban retail, allergen and
                food waste included.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["$10M+", "Valuation"],
                  ["−90%", "Less waste"],
                  ["24/7", "Retail"],
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
              Native where it matters, shared where it pays — every choice
              aligned to your retention metric.
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
              Disciplines most often combined with mobile apps — same
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
              The things buyers of mobile apps ask us most. Anything else — put
              it in a brief; a senior engineer replies within a business day.
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
            Have an app your users <Em>should love?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us the job the app must do and who it is for. A senior mobile
            engineer replies within one business day with platform advice and a
            clear next step.
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
    </div>
  );
}

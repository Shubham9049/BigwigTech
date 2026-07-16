"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../components/ServiceDarkMode.module.css";

const capabilities = [
  [
    "01",
    "Smart contracts",
    "Solidity contracts built on audited patterns, with full test coverage and formal review before deployment.",
  ],
  [
    "02",
    "Token engineering",
    "Utility and governance token design with the economics modelled long before the minting contract.",
  ],
  [
    "03",
    "dApps",
    "Web and mobile frontends over on-chain logic — wallet flows your non-crypto users can actually survive.",
  ],
  [
    "04",
    "Wallets & payments",
    "Custody decisions, payment rails and fiat on-ramps mapped to your regulatory reality.",
  ],
  [
    "05",
    "Audits & reviews",
    "Independent review of third-party contracts before you integrate — or inherit — their risk.",
  ],
  [
    "06",
    "Chain integration",
    "On-chain components wired into conventional systems: the hybrid architecture your product needs.",
  ],
];
const phases = [
  [
    "01",
    "CHALLENGE THE PREMISE",
    "First question: does this need a chain? We architect the no-blockchain alternative too, and compare honestly.",
  ],
  [
    "02",
    "DESIGN THE ECONOMICS",
    "Token mechanics and incentives modelled before implementation — economics bugs are also immutable.",
  ],
  [
    "03",
    "BUILD & TEST EXHAUSTIVELY",
    "Audited libraries, full coverage, fuzzing and testnet rehearsals. Clearness is code smell here.",
  ],
  [
    "04",
    "AUDIT, THEN MAINNET",
    "External review, staged deployment, monitoring and an incident plan. Then — and only then — production.",
  ],
];
const faqs = [
  [
    "Do we actually need a blockchain?",
    "Statistically, probably not — and we will tell you so for free. A chain earns its place with shared state across parties that do not trust each other, censorship resistance or programmable assets. Otherwise a database is faster, cheaper and kinder to your users.",
  ],
  [
    "How do you prevent smart contract exploits?",
    "We minimise surface area, use established audited patterns, write comprehensive tests and fuzz cases, then arrange independent review before mainnet deployment.",
  ],
  [
    "Can you connect on-chain logic to our existing systems?",
    "Yes. Most useful Web3 products are hybrid: conventional services handle accounts and operations while the chain handles the part that benefits from shared, verifiable state.",
  ],
  [
    "What about regulation and compliance?",
    "We map custody, user geography, payment flows and token design early. Legal advice comes from your counsel; our role is engineering a platform that can meet the resulting requirements.",
  ],
  [
    "Which chain should we use?",
    "We select for security, ecosystem, cost, finality and your users' needs — not a fashionable ticker. Sometimes the answer is no chain at all.",
  ],
  [
    "Should the contract be upgradeable?",
    "Only when the need outweighs the governance and trust cost. We document who can upgrade, how it is delayed and what users can verify.",
  ],
];
const stack = [
  "Solidity",
  "Foundry",
  "OpenZeppelin",
  "Ethers.js",
  "The Graph",
  "Safe",
  "IPFS",
  "AWS",
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
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-[48px]">
      {children}
    </h2>
  );
}
function Section({
  id,
  label,
  title,
  side,
  children,
}: {
  id?: string;
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

function AuditCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          CONTRACT-OPS · AUDITED
        </span>
        <span>DISCIPLINE 14 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        AUDITED BEFORE MAINNET
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">
          100<sup className="text-2xl">%</sup>
        </strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ happy-path test suite
        </span>
      </div>
      <svg
        className="mt-6 h-24 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 90 C130 90 205 85 300 78 S430 61 600 24 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 90 C130 90 205 85 300 78 S430 61 600 24"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Audit", "Audited first"],
          ["Test suite", "100%"],
          ["Advice", "Honest first"],
        ].map(([l, v]) => (
          <div key={l}>
            <p className="text-[10px] uppercase tracking-[.12em] text-slate-400">
              {l}
            </p>
            <strong className="mt-1.5 block text-sm">{v}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlockchainWeb3Page() {
  const [open, setOpen] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className={
        styles.page +
        " -mt-24 min-h-screen bg-[#f4f4fa] pt-24 text-[#0d0f21] dark:bg-[#0a0b18] dark:text-white"
      }
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
          <nav className="flex gap-2 text-[11px] tracking-[.18em] text-slate-500 dark:text-slate-400">
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/services">SERVICES</Link>
            <span>/</span>
            <span className="text-[#ff5a34]">WEB3</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 14 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Web3, only where
                <br />
                it <Em>earns its place.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Smart contracts, token systems and dApps engineered with the
                paranoia immutable code deserves — and an honest no when a
                database would serve you better.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["100%", "Audited before mainnet"],
                  ["0", "Uptime, never bills"],
                  ["1 day", "Senior engineer reply"],
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
              <AuditCard />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            14 — BLOCKCHAIN / WEB3
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
                href={"#" + n.toLowerCase()}
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
                Immutable code is unforgiving. So is our <Em>process.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
                {[
                  ["Discipline", "14 / 14"],
                  ["Focus", "Smart contracts & dApps"],
                  ["Proof", "100% audited before mainnet"],
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
                Smart contracts are the only software where a bug can be
                permanent and instantly expensive. The industry learned this the
                hard way: repeatedly. That environment does not reward more
                features. It rewards formal review, exhaustive testing and a
                sober comparison of the alternatives.
              </p>
              <p className="mt-6">
                That is how we build for chains: boring patterns, audited
                libraries, full test coverage and external review before
                anything touches mainnet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Section
        id="capabilities"
        label="WHAT YOU GET"
        title={
          <>
            On-chain, where it <Em>matters.</Em>
          </>
        }
        side="The Web3 engineering surface — minus the parts nobody needs without."
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
      <section
        id="method"
        className="scroll-mt-20 border-b border-slate-200 bg-[#eef0f7] dark:border-white/10 dark:bg-[#161c2e]"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>HOW WE DELIVER</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              Paranoia as a <Em>method.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Deployment is the last step of a process designed to make it
              uneventful.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-slate-300/70 pt-10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
            {phases.map(([n, t, b]) => (
              <article key={n}>
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#ff5a34]/40 font-mono text-[10px] text-[#ff5a34]">
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
        id="proof"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(15,15,40,.22)] sm:p-10 lg:grid-cols-2 dark:border-white/10 dark:bg-[#1b2236]">
            <div>
              <Label>OUR STANCE</Label>
              <Heading>
                We will tell you when you don’t need a blockchain.
              </Heading>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                Most products pitched to us as Web3 ship better as conventional
                software — cheaper, faster, easier to operate and kinder to
                their users. When a chain genuinely earns its place, we build it
                with the highest immutable-code standards.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-white/10">
              <p className="text-[11px] tracking-[.14em] text-slate-400">
                DOES IT NEED A CHAIN?
              </p>
              {[
                "A chain earns its place",
                "Shared state across parties that don’t trust each other",
                "Censorship resistance is a hard requirement",
                "Assets or rules must be programmable",
                "A database wins",
                "Lower cost and latency",
                "Simpler to operate and evolve",
              ].map((x, i) => (
                <p
                  key={x}
                  className={
                    "border-b py-3 text-sm " +
                    (i === 0 || i === 4
                      ? "font-semibold text-[#ff5a34]"
                      : "text-slate-500 dark:text-slate-400")
                  }
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Section
        id="stack"
        label="TOOLS WE REACH FOR"
        title={
          <>
            Chosen for the <Em>problem,</Em> not the résumé.
          </>
        }
        side="Battle-tested tooling and audited libraries — the only acceptable foundation for immutable code."
      >
        <div className="mt-14 flex flex-wrap gap-2 border-y border-slate-200 py-8 dark:border-white/10">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-[13px] text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>
      <section
        id="faq"
        className="scroll-mt-20 border-b border-slate-200 dark:border-white/10"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-16">
          <div>
            <Label>BEFORE YOU ASK</Label>
            <Heading>
              Questions, <Em>answered.</Em>
            </Heading>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              The things buyers of Web3 ask us most. Anything else — put it in a
              brief; a senior engineer replies within one business day.
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
                          className={
                            "text-[11px] tracking-[.1em] " +
                            (active ? "text-[#ff5a34]" : "text-slate-400")
                          }
                        >
                          Q.{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-medium">{q}</span>
                      </span>
                      <span
                        className={
                          "grid h-6 w-6 shrink-0 place-items-center rounded-full " +
                          (active
                            ? "bg-[#ff5a34] text-white"
                            : "border border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-300")
                        }
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
      <section id="book-a-call" className="overflow-hidden bg-[#0b0e22]">
        <div className="mx-auto max-w-[900px] px-4 py-24 text-center sm:px-10 sm:py-28">
          <Label>LET’S SCOPE IT</Label>
          <h2 className="mx-auto mt-6 max-w-2xl text-[40px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[52px]">
            Thinking about going <Em>on-chain?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us the outcome you need — including the no-blockchain option.
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

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
    "Cloud backends",
    "Cloud backends that ingest, store and act on device data — built for fleets, not demos.",
  ],
  [
    "02",
    "Firmware integration",
    "Gateway logic and edge processing where latency or connectivity demand it.",
  ],
  [
    "03",
    "Mobile & kiosk apps",
    "Customer and staff experiences through which hardware becomes useful.",
  ],
  [
    "04",
    "Telemetry & data management",
    "Time-series pipelines, anomaly alerts and analytics that turn operational data into action.",
  ],
  [
    "05",
    "Fleet monitoring",
    "Provisioning, OTA updates, health dashboards and alerting for every unit in the field.",
  ],
  [
    "06",
    "Consulting & strategy",
    "Build-vs-buy on hardware, connectivity and protocols — before you commit to an expensive path.",
  ],
];
const steps = [
  [
    "01",
    "DEVICE",
    "Use unusual, off-the-shelf, or bespoke?",
    "We map the full loop: hardware, assumptions tested with hardware in hand.",
  ],
  [
    "02",
    "RISK",
    "Test on devices in the real world",
    "Real-world flaky networks, power and human behaviour. We instrument everything.",
  ],
  [
    "03",
    "PROVISION",
    "Provisioning, OTA updates, security",
    "Ship observable hardware before the fleet grows — not bolt it on after the first outage.",
  ],
  [
    "04",
    "SCALE",
    "Launchpads, learning and support",
    "You watch the business; the system watches the devices.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["EDGE", ["MQTT", "BLE", "NFC", "ESP32", "Embedded"]],
  ["CLOUD", ["AWS IoT Core", "TimescaleDB", "Grafana", "Node.js"]],
  ["PRODUCT", ["Flutter", "LoRaWAN", "OTA pipelines"]],
];
const related = [
  [
    "Mobile App Development",
    "Native and cross-platform apps with offline-first sync, payments, NFC and push built in.",
  ],
  [
    "Data Engineering & Analytics",
    "Pipelines, warehouses and BI that turn events into numbers your whole company trusts.",
  ],
  [
    "Custom Product Development",
    "Engineering for the workflow no off-the-shelf tool will ever fit — owned entirely by you.",
  ],
];
const faqs = [
  [
    "What happens when devices go offline?",
    "Offline behaviour is designed before the happy path. Devices retain critical work locally, sync safely when a connection returns and report their own health.",
  ],
  [
    "How do you handle device security?",
    "We use unique device identities, encrypted transport, scoped permissions and secure OTA update paths from the first prototype.",
  ],
  [
    "Can you rescue a stalled IoT project?",
    "Yes. We audit hardware, firmware, cloud and product layers together, stabilise the riskiest seams and create an achievable roadmap.",
  ],
  [
    "Which connectivity should we use?",
    "It depends on range, bandwidth, battery life, operating environment and cost. We choose the protocol after those constraints are clear.",
  ],
  [
    "How do you handle OTA updates safely?",
    "Updates are signed, staged, monitored and designed with rollback paths, so one bad release does not take out a fleet.",
  ],
  [
    "Will this scale to a million devices?",
    "We design the data plane, tenancy and observability around the expected fleet shape — then prove it with load and failure testing.",
  ],
  [
    "Can you add predictive maintenance or anomaly detection?",
    "Yes. Clean, contextual telemetry makes useful alerts and models possible; we start by ensuring the data foundation earns trust.",
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
function FleetCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          FLEET-OPS — LIVE
        </span>
        <span>DISCIPLINE 09 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        TARGET OUT-OF-CONNECTED FLEET
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">~90%</strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ real-time telemetry
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
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
          ["Fleet uptime", "24/7"],
          ["Updates", "OTA"],
          ["Stack", "Device → cloud"],
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
        {["MQTT", "Edge", "OTA", "Fleet monitoring"].map((x) => (
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

export default function IoTSolutionsPage() {
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
            <span className="text-[#ff5a34]">IOT</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 09 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Hardware, edge and
                <br />
                cloud. <Em>One system.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Connected products engineered as a whole — the device, the
                firmware, the telemetry, the app and the dashboard — by one team
                accountable for all of it.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["~90%", "Fleet / connected fridges"],
                  ["24/7", "Fleet uptime monitored"],
                  ["Real-time", "Telemetry decision"],
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
              <FleetCard />
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-0 z-40 border-y border-slate-200 bg-[#f4f4fa]/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0b18]/95">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-x-auto px-4 py-4 sm:px-10 sm:py-5 lg:px-16">
          <span className="shrink-0 text-[11px] tracking-[.1em] text-slate-500 dark:text-slate-400">
            <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a34]" />
            09 — IOT SOLUTIONS
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
                IoT projects fail in the seams. So we <Em>removed</Em> the
                seams.
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "09 / 14"],
                  ["Focus", "Connected systems"],
                  ["Proof", "~90% fleet by connected fridges"],
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
                Connected products are systems, not apps. Device protocols, edge
                logic, sync, cloud platforms, mobile apps and fleet dashboards —
                one architecture, one team, one throat to choke. Our connected
                fridges have run unmanned retail around the clock for years;
                that is what seamless actually means.
              </p>
              <p className="mt-6">
                We deliver the stack as one engineered system.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  When a device is offline, the user notices nothing; when it
                  needs an update, the fleet stays safe.
                </strong>
              </p>
              <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-[11px] tracking-[.14em] text-slate-400">
                  SHIPPED WITH THIS DISCIPLINE
                </p>
                {[
                  ["FeelEat — Happy Fridge", "~90% less theft"],
                  ["Smart Kiosk", "99.9% uptime"],
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
      <Section
        id="capabilities"
        label="WHAT YOU GET"
        title={
          <>
            From sensor to <Em>decision.</Em>
          </>
        }
        side="Every layer of a connected product — engineered together, owned by you."
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
              Prove it on one device, then <Em>a thousand.</Em>
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Connected products scale in hops — bench, pilot, fleet — and each
              one has different failure modes.
            </p>
          </div>
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
              Connected fridges running unmanned retail 24/7 — hardware, app and
              platform engineered as one system.
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
              <Label>CASE STUDY · IOT · MOBILE</Label>
              <h3 className="mt-4 text-2xl font-semibold">
                FeelEat — Happy Fridge
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                Smart fridges with scan-to-unlock, in-app payment and live
                inventory telemetry — sustainable meals sold around the clock,
                in one system.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
                {[
                  ["~90%", "Less theft"],
                  ["24/7", "Retail"],
                  ["Live", "Telemetry"],
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
      <Section
        id="stack"
        label="TOOLS WE REACH FOR"
        title={
          <>
            Chosen for the <Em>problem,</Em> not the résumé.
          </>
        }
        side="Open protocols and proven infrastructure — no proprietary platform lock-in between you and your devices."
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
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>PAIRS WELL WITH</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
            <Heading>
              One team. <Em>Zero</Em> hand-offs.
            </Heading>
            <p className="max-w-md text-[17px] leading-relaxed text-slate-500 dark:text-slate-400 lg:justify-self-end">
              Same architecture, same engineers, no integration tax.
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
              The things buyers of IoT ask us most. Anything else — put it in a
              brief; a senior engineer replies within a business day.
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
            Putting software inside <Em>something physical?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Fridges, kiosks, sensors, machines — tell us what the device must
            do. A senior engineer replies within one business day with an
            architecture read.
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

function Section({
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

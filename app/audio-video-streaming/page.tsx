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
    "Live streaming",
    "WebRTC and RTMP pipelines with adaptive bitrate and tuned latency.",
  ],
  [
    "02",
    "Conferencing & rooms",
    "High-quality video, breakout rooms and recording engineered for real meetings.",
  ],
  [
    "03",
    "On-demand video",
    "Upload-to-playback pipelines, transcoding, storage and instant-start delivery.",
  ],
  [
    "04",
    "Real-time interaction",
    "Chat, reactions, Q&A and polls that stay loud under load.",
  ],
  [
    "05",
    "Simulive production",
    "Pre-recorded content delivered as live with studio-grade tools.",
  ],
  [
    "06",
    "Analytics & QoE",
    "Per-viewer join time, rebuffer rate and bitrate metrics.",
  ],
];
const steps = [
  [
    "01",
    "MODEL",
    "Model the peak",
    "Concurrency, geography and interaction load define architecture before code.",
  ],
  [
    "02",
    "PIPELINE",
    "Build the pipeline",
    "Ingest, transcode, deliver and play assembled from proven components.",
  ],
  [
    "03",
    "BREAK",
    "Break it on purpose",
    "Load tests, CDN failover drills and chaos testing find the limit early.",
  ],
  [
    "04",
    "OPERATE",
    "Operate live",
    "QoE dashboards and senior on-call support during your flagship events.",
  ],
];
const stack: Array<[string, string[]]> = [
  ["PROTOCOLS", ["WebRTC", "RTMP", "HLS", "SRT"]],
  ["PLATFORM", ["FFmpeg", "LiveKit", "AWS IVS", "Mux", "CloudFront"]],
  ["INSIGHT", ["WebSockets", "Redis", "Analytics", "Observability"]],
];
const faqs = [
  [
    "What latency can we actually expect?",
    "Sub-second with WebRTC for interaction formats; two to five seconds with tuned HLS for broadcast scale. The honest answer is a trade-off against audience size and cost.",
  ],
  [
    "Can the platform survive a sudden viral audience?",
    "Yes, when concurrency, regions, delivery paths and failure behaviour are designed and tested before the spike.",
  ],
  [
    "Build on Mux/IVS or run our own pipeline?",
    "Both can be right. Managed infrastructure buys speed; a custom pipeline can win on control and unit economics.",
  ],
  [
    "Do you support monetisation?",
    "Yes: subscriptions, paid events, entitlements and secure content access can all be built into the product.",
  ],
  [
    "Can you do live and VOD on one platform?",
    "Yes. Shared identity, content and analytics make broadcasts and libraries feel like one product.",
  ],
  [
    "What about DRM?",
    "We design rights protection based on content value, platform support and business risk.",
  ],
  [
    "Why multi-CDN instead of just one?",
    "For high-stakes events, multi-CDN can protect delivery from a single provider or regional failure.",
  ],
  [
    "What player should we use?",
    "We start with mature player foundations, then customise only where the viewing experience earns it.",
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
function MetricCard() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_60px_-25px_rgba(15,15,40,.25)] dark:border-white/10 dark:bg-white/[.04] sm:p-8">
      <div className="flex justify-between text-[10px] font-semibold tracking-[.14em] text-slate-500 dark:text-slate-400">
        <span>
          <i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
          STREAM-OPS — LIVE
        </span>
        <span>DISCIPLINE 10 / 14</span>
      </div>
      <p className="mt-8 text-[10px] font-semibold tracking-[.14em] text-slate-400">
        PEAK CONCURRENT VIEWERS
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <strong className="text-6xl tracking-tight sm:text-7xl">50K+</strong>
        <span className="text-xs font-semibold text-emerald-600">
          ▲ zero dropped delivery
        </span>
      </div>
      <svg
        className="mt-6 h-28 w-full"
        viewBox="0 0 600 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 94 C110 93 180 86 255 81 S380 70 470 49 S550 41 600 25 L600 120 L0 120Z"
          fill="#ff7a59"
          fillOpacity=".15"
        />
        <path
          d="M0 94 C110 93 180 86 255 81 S380 70 470 49 S550 41 600 25"
          fill="none"
          stroke="#ff5a34"
          strokeWidth="2.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
        {[
          ["Stream start", "<1.5 s"],
          ["Protocol", "WebRTC"],
          ["Chat", "Real-time"],
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
export default function AudioVideoStreamingPage() {
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
            <span className="text-[#ff5a34]">STREAMING</span>
          </nav>
          <div className="mt-10 grid gap-10 pb-16 sm:mt-14 sm:gap-16 sm:pb-24 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[.18em] text-slate-500 dark:text-slate-400">
                <i className="h-px w-8 bg-slate-400" />
                DISCIPLINE 10 — OF 14
              </p>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[56px]">
                Built for the spike at <Em>3 a.m.</Em>
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
                Live and on-demand streaming platforms with broadcast-grade
                reliability — low latency, real-time interaction and
                infrastructure that treats a viral moment as a feature, not an
                outage.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:gap-6 sm:pt-8 dark:border-white/10">
                {[
                  ["50K+", "Peak concurrent viewers"],
                  ["<1.5s", "Time to interactive"],
                  ["10K+", "Events delivered"],
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
            10 — AUDIO & VIDEO STREAMING
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
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16">
          <Label>THE DISCIPLINE</Label>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading>
                Streaming is unforgiving. Two seconds of buffering and they are{" "}
                <Em>gone.</Em>
              </Heading>
              <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10 sm:mt-14">
                {[
                  ["Discipline", "10 / 14"],
                  ["Focus", "Live & on-demand"],
                  ["Proof", "50K+ peak concurrent viewers"],
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
                Nobody emails support about a buffering stream — they just
                leave, and your biggest audience of the year becomes your worst
                churn event. Streaming punishes weak engineering instantly:
                public latency and the exact moment success arrives.
              </p>
              <p className="mt-6">
                We build platforms that have carried ten thousand live events
                and audiences past fifty thousand concurrent viewers — with
                adaptive bitrate, multi-CDN failover and real-time chat built
                in.{" "}
                <strong className="text-[#0d0f21] dark:text-white">
                  The viral spike is the design requirement, not the
                  post-mortem.
                </strong>
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
            Live, on-demand, <Em>interactive.</Em>
          </>
        }
        side="The full streaming surface — ingest to player to the chat scrolling beside it."
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
            Engineered for the <Em>worst minute.</Em>
          </>
        }
        side="Streaming architecture is judged by its worst sixty seconds. We design for that minute first."
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
        side="A production event platform where streaming is not a feature; it is the product."
      >
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
            <Label>CASE STUDY · STREAMING · WEB</Label>
            <h3 className="mt-4 text-2xl font-semibold">Bizzabo</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              Studio-quality live and simulive streaming with self-service
              production tools — virtual, in-person and hybrid events on one
              platform.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
              {[
                ["50K+", "Peak users"],
                ["<1.5s", "Stream start"],
                ["10K+", "Events"],
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
        side="Mature streaming primitives, measured delivery and proven infrastructure — no reinvention during a live event."
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
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-16">
          <div>
            <Label>BEFORE YOU ASK</Label>
            <Heading>
              Questions, <Em>answered.</Em>
            </Heading>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              The things buyers of streaming ask us most. Anything else — put it
              in a brief; a senior engineer replies within a business day.
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
            Planning something <Em>worth watching live?</Em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            Tell us the format, audience size and latency you need. A senior
            streaming engineer replies within one business day with an
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

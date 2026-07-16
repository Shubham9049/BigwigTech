import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChefHat,
  Quote,
  Sparkles,
  Smartphone,
  Radio,
  Blocks,
  Plane,
  Database,
  Code2,
  Monitor,
  Cloud,
  Music,
  Clapperboard,
} from "lucide-react";

const technologies = [
  "WebRTC",
  "RTMP / HLS",
  "FFmpeg",
  "Node.js",
  "Go",
  "Redis",
  "CDN (multi-region)",
  "AWS Media",
];

const systems = [
  {
    id: "01",
    title: "OTT & VOD platforms",
    description:
      "Subscription and ad-supported video products with catalogues, entitlements, DRM and recommendations.",
  },
  {
    id: "02",
    title: "Low-latency live",
    description:
      "WebRTC and RTMP pipelines tuned for sub-second start and real-time interaction at scale.",
  },
  {
    id: "03",
    title: "Creator & UGC video",
    description:
      "Upload, transcode, moderation and monetisation systems for creator-led video at volume.",
  },
  {
    id: "04",
    title: "Live event experience",
    description:
      "Streaming woven into registration, chat, Q&A and analytics for virtual and hybrid events.",
  },
  {
    id: "05",
    title: "Real-time chat & interaction",
    description:
      "Reactions, polls and chat that stay in sync with the stream even under a viral load.",
  },
  {
    id: "06",
    title: "Monetisation & rights",
    description:
      "Subscriptions, pay-per-view, ad insertion and content protection built into the platform.",
  },
];

const outcomes = [
  {
    value: "50K+",
    label: "Peak concurrent viewers held",
  },
  {
    value: "<1.5s",
    label: "Stream start time",
  },
  {
    value: "10K+",
    label: "Events streamed",
  },
  {
    value: "Every",
    label: "Device & network reached",
  },
];

const principles = [
  {
    id: "01",
    title: "Engineered for the spike",
    description:
      "We design for your worst-case concurrency, then load-test to it — the launch night is the spec, not the surprise.",
  },
  {
    id: "02",
    title: "Latency as a feature",
    description:
      "Every architecture decision is weighed against join time and glass-to-glass delay, because that is what viewers feel.",
  },
  {
    id: "03",
    title: "Every device, every network",
    description:
      "Adaptive delivery so a phone on cellular and a TV on fibre both get the best stream their connection allows.",
  },
  {
    id: "04",
    title: "Observability built in",
    description:
      "Real-time dashboards on quality, buffering and concurrency, so you see a problem before the audience tweets it.",
  },
];

const audiences = [
  "OTT & streaming services",
  "Live & hybrid event platforms",
  "Creator & UGC video products",
  "Sports & live entertainment",
  "Media & broadcast",
  "Conferencing & webinar tools",
];

const relatedServices = [
  {
    title: "SaaS App Development",
    icon: Monitor,
    href: "/saas-app-development",
  },
  {
    title: "Audio & Video Streaming Platforms",
    icon: Music,
    href: "/audio-video-streaming",
  },
  {
    title: "DevOps & Cloud (AWS)",
    icon: Cloud,
    href: "/devops-cloud",
  },
];

const nextIndustry = {
  number: "04",
  total: "15",
  title: "Healthcare",
  href: "/industries/healthcare",
};

const faqs = [
  [
    "How many concurrent viewers can you support?",
    "We have shipped live layers holding 50K+ concurrent viewers. We design to your peak target and load-test against it before launch.",
  ],
  [
    "WebRTC, RTMP or HLS — which do you use?",
    "Whichever the use case demands. Sub-second interaction leans WebRTC; large broadcast leans low-latency HLS. We pick per the latency and scale you need.",
  ],
  [
    "Can you handle DRM and content protection?",
    "Yes — entitlements, token-gated playback and studio DRM are part of the OTT and VOD builds we deliver.",
  ],
  [
    "Will the stream hold up on poor connections?",
    "Adaptive bitrate delivery means each viewer gets the best quality their network sustains, with graceful fallback rather than a frozen frame.",
  ],
  [
    "Can you build monetisation in?",
    "Yes — Aviatize manages 1,000+ aircraft across 40+ countries, with fleet, type and jurisdiction handled as configuration.",
  ],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="industries-eyebrow text-[11px] font-bold uppercase tracking-[0.18em] text-[#8992ad]">
      <span className="mr-2 text-[#ff7658]">-</span>
      {children}
    </p>
  );
}

export default function EntertainmentPage() {
  return (
    <div className="industries-page overflow-hidden bg-[#f6f7fd] text-[#20263a]">
      <style>{`
  .industries-page p {
    font-size: 14px !important;
    line-height: 1.55 !important;
  }

  .industries-page .industries-eyebrow {
    font-size: 11px !important;
    line-height: 1.2 !important;
  }

  .industries-page h3 {
    font-size: 18px !important;
  }

  .industries-page a {
    font-size: 14px;
  }

  .industries-page table {
    font-size: 13px !important;
  }

  .industries-page table th,
  .industries-page table td {
    padding: 1rem !important;
  }

  .industries-hero {
    min-height: 733px;
    background:
      radial-gradient(circle at 22% 25%, rgba(255, 109, 80, .13), transparent 34%),
      radial-gradient(circle at 78% 12%, rgba(155, 166, 235, .23), transparent 40%),
      linear-gradient(180deg, #f7f8ff 0%, #f4f6fc 100%);
  }

  .industries-hero-grid {
    background-image:
      linear-gradient(90deg, rgba(197, 203, 224, .34) 1px, transparent 1px),
      linear-gradient(0deg, rgba(197, 203, 224, .28) 1px, transparent 1px);
    background-size: 318px 100%, 100% 184px;
  }

  .industries-icon-wall {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .industries-stat-strip {
    border-top: 1px solid rgba(190, 196, 215, .62);
  }

  /* =========================
      DARK MODE
  ========================== */

  .dark .industries-page {
    background: #101422 !important;
    color: #f4f6ff !important;
  }

  .dark .industries-page section {
    border-color: #30384f !important;
  }

  .dark .industries-hero {
    background:
      radial-gradient(circle at 22% 25%, rgba(255, 105, 72, .18), transparent 34%),
      radial-gradient(circle at 78% 12%, rgba(82, 104, 255, .19), transparent 42%),
      linear-gradient(180deg, #111727 0%, #101422 100%) !important;
    border-color: #30384f !important;
  }

  .dark .industries-hero-grid {
    background-image:
      linear-gradient(90deg, rgba(70, 80, 112, .34) 1px, transparent 1px),
      linear-gradient(0deg, rgba(70, 80, 112, .27) 1px, transparent 1px);
  }

  /* Cards */

  .dark .industries-page .industry-card,
  .dark .industries-page .industry-proof-card,
  .dark .industries-page .industry-faq-card,
  .dark .industries-page .industry-panel {
    background: #191e30 !important;
    border-color: #30384f !important;
    box-shadow: 0 18px 34px rgba(0, 0, 0, .22) !important;
  }

  .dark .industries-page .industry-muted-panel,
  .dark .industries-page .industry-chip {
    background: #202940 !important;
    border-color: #35415d !important;
  }

  .dark .industries-page .industry-band {
    background: #151a2b !important;
  }

  .dark .industries-page .industry-accent-panel {
    background: #3a2a35 !important;
  }

  .dark .industries-page .industries-icon-tile {
    background: rgba(27, 34, 54, .68) !important;
    border-color: rgba(63, 73, 107, .76) !important;
    color: #8f9ac1 !important;
  }

  .dark .industries-page .industries-stat-strip {
    border-color: #30384f !important;
  }

  .dark .industries-page .industry-divider {
    background: #30384f !important;
  }

  /* =========================
      TEXT COLORS
  ========================== */

  .dark .industries-page h1,
  .dark .industries-page h2,
  .dark .industries-page h3,
  .dark .industries-page h4,
  .dark .industries-page h5,
  .dark .industries-page h6 {
    color: #f8f9ff !important;
  }

  .dark .industries-page p,
  .dark .industries-page span,
  .dark .industries-page li,
  .dark .industries-page label,
  .dark .industries-page small {
    color: #b8c1da !important;
  }

  .dark .industries-page strong,
  .dark .industries-page b {
    color: #ffffff !important;
  }

  .dark .industries-page a {
    color: #d9e1ff !important;
  }

  .dark .industries-page table,
  .dark .industries-page table th,
  .dark .industries-page table td {
    color: #d7dff7 !important;
    border-color: #30384f !important;
  }

  .dark .industries-page table th {
    color: #ffffff !important;
  }

  .dark .industries-page .industry-soft-text {
    color: #b8c1da !important;
  }

  .dark .industries-page .industry-strong-text {
    color: #f4f6ff !important;
  }

  .dark .industries-page .industries-eyebrow {
    color: #ff8b6e !important;
  }

  /* =========================
      MOBILE
  ========================== */

  @media (max-width: 640px) {
    .industries-page p {
      font-size: 14px !important;
    }

    .industries-page h3 {
      font-size: 17px !important;
    }
  }
`}</style>
      <section className="industries-hero relative overflow-hidden border-b border-[#d8dce9] px-5 pb-20 pt-8 sm:px-8 lg:px-10">
        {/* Grid */}
        <div className="industries-hero-grid pointer-events-none absolute inset-0 opacity-70" />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff6d50]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-[#7f92ff]/10 blur-[120px]" />

        {/* Background Number */}
        <div className="pointer-events-none absolute right-[2%] top-1/2 hidden -translate-y-1/2 select-none lg:block">
          <span className="text-[26rem] font-semibold leading-none tracking-[-0.08em] text-[#ff6d50]/5">
            03
          </span>
        </div>

        {/* Floating Card */}
        <div className="absolute right-10 top-14 hidden lg:block">
          <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-[#ffb59f] bg-gradient-to-br from-[#ffe7e0] via-white/80 to-[#ffe9e3] shadow-[0_25px_60px_rgba(255,109,80,.12)] backdrop-blur">
            <Clapperboard
              size={66}
              strokeWidth={1.8}
              className="text-[#ff6d50]"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px]">
          {/* Breadcrumb */}
          <div className="text-[13px] font-medium uppercase tracking-[.18em] text-[#7983a5]">
            <Link href="/" className="transition hover:text-[#ff6d50]">
              Home
            </Link>

            <span className="mx-3">/</span>

            <Link
              href="/industries"
              className="transition hover:text-[#ff6d50]"
            >
              Industries
            </Link>

            <span className="mx-3">/</span>

            <span className="text-[#ff6d50]">Entertainment</span>
          </div>

          {/* Industry Badge */}
          <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-[#d8dce9] bg-white/75 px-5 py-3 shadow-sm backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a5d] to-[#756bff] text-white">
              <Clapperboard size={18} />
            </span>

            <span className="text-[14px] uppercase tracking-[.18em] text-[#66728f]">
              Industry 03 / 15 — Streaming & live events
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-12 max-w-3xl text-[clamp(3.5rem,6vw,6.2rem)] leading-[.9] tracking-[-.075em] text-[#111322]">
            Streams that survive
            <em className="font-serif font-normal text-[#ff6d50]">
              going viral.
            </em>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-3xl text-[21px] leading-[1.7] text-[#55607f]">
            OTT platforms, low-latency live event tech and creator video systems
            — engineered to stay smooth when fifty thousand people hit play at
            once.
          </p>

          {/* Divider */}
          <div className="mt-16 h-px bg-[#d8dce9]" />

          {/* Stats */}
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-[56px] font-semibold leading-none tracking-[-.06em] text-[#ff6d50]">
                &lt;2.4s
              </h3>

              <p className="mt-3 text-[12px] uppercase tracking-[.22em] text-[#6c7696]">
                Median join time
              </p>
            </div>

            <div className="border-l border-[#d8dce9] pl-10">
              <h3 className="text-[56px] font-semibold leading-none tracking-[-.06em] text-[#ff6d50]">
                50K+
              </h3>

              <p className="mt-3 text-[12px] uppercase tracking-[.22em] text-[#6c7696]">
                Peak concurrent viewers
              </p>
            </div>

            <div className="border-l border-[#d8dce9] pl-10">
              <h3 className="text-[56px] font-semibold leading-none tracking-[-.06em] text-[#ff6d50]">
                10K+
              </h3>

              <p className="mt-3 text-[12px] uppercase tracking-[.22em] text-[#6c7696]">
                Events streamed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[2.5rem] border border-[#d9deeb] bg-white shadow-[0_25px_70px_rgba(43,55,94,.08)] dark:border-[#31384d] dark:bg-[#191e30]">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#ff6d50]/10 blur-[120px]" />

          <div className="grid lg:grid-cols-[1.35fr_.65fr]">
            {/* Left */}
            <div className="relative p-8 sm:p-12 lg:p-16">
              <Quote
                size={34}
                strokeWidth={2.2}
                className="mb-8 text-[#ff6d50]"
              />

              <h2 className="max-w-2xl text-[clamp(2.5rem,4.5vw,4.4rem)]  leading-[0.95] tracking-[-0.06em] text-[#111322] dark:text-white">
                The biggest audience is
                <br />
                the hardest test.
              </h2>

              <p className="mt-10 max-w-2xl text-[20px] leading-[1.75] text-[#586482] dark:text-[#b8c1da]">
                On a live platform, success and failure arrive at the same
                moment — the spike. We architect for the worst-case concurrency
                from the start, weigh every decision against join time and
                glass-to-glass latency, and deliver adaptively so every device
                gets the best stream its network allows. We built the live layer
                inside Bizzabo to hold 50K+ concurrent viewers with sub-second
                starts. The launch night is the specification, not the gamble.
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center border-t border-[#d9deeb] p-10 lg:border-l lg:border-t-0 dark:border-[#31384d]">
              <div className="text-center">
                <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-[#ffb7a3] bg-gradient-to-br from-[#ffe8e1] via-white to-[#fff1ec] shadow-[0_20px_50px_rgba(255,109,80,.12)]">
                  <Clapperboard
                    size={70}
                    strokeWidth={1.8}
                    className="text-[#ff6d50]"
                  />
                </div>

                <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.32em] text-[#66728f] dark:text-[#b8c1da]">
                  Entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="mx-auto grid max-w-[1360px] gap-16 lg:grid-cols-[0.95fr_1.25fr]">
          {/* Left */}
          <div>
            <h2 className="text-[clamp(3rem,5vw,5rem)]  leading-[0.92] tracking-[-0.06em] text-[#111322] dark:text-white">
              The sector,
              <br />
              <em className="font-serif font-normal text-[#ff6d50]">
                honestly.
              </em>
            </h2>

            <div className="mt-10 h-px bg-[#d8dce9] dark:bg-[#30384f]" />

            <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#ff6d50]">
              In this sector, we build
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "OTT & VOD platforms",
                "Low-latency live",
                "Creator & UGC video",
                "Live event experience",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d6dceb] bg-white px-3 py-3 text-[10px] text-[#55607f] shadow-sm transition hover:border-[#ff6d50] hover:text-[#ff6d50] dark:border-[#31384d] dark:bg-[#191e30] dark:text-[#b8c1da]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-10 text-[20px] leading-[1.8] text-[#55607f] dark:text-[#b8c1da]">
            <p>
              Streaming is unforgiving: the moment your audience is biggest is
              the moment your infrastructure is most likely to break. Buffering
              during the keynote, a stream that won’t start, latency that kills
              the live chat — these are the failures viewers never forgive and
              reviewers never forget.
            </p>

            <p>
              We engineered the{" "}
              <strong className="font-semibold text-[#111322] dark:text-white">
                low-latency live layer inside Bizzabo’s Event Experience OS,
              </strong>{" "}
              holding 50K+ concurrent viewers with sub-second start times. We
              build streaming that scales with the spike instead of buckling
              under it.
            </p>

            <p>
              From OTT catalogues and DRM to creator upload pipelines and
              real-time interaction, we treat latency and concurrency as
              features to engineer — because on a live platform they are what
              the audience actually feels.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#66728f]">
                <span className="h-px w-6 bg-[#ff6d50]" />
                What We Build
              </p>

              <h2 className="text-[clamp(3rem,5vw,5.5rem)]  leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                Systems for{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  entertainment.
                </em>
              </h2>
            </div>

            <p className="max-w-xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              The platforms we ship most often for this sector — each scoped to
              a number the business actually cares about.
            </p>
          </div>

          {/* List */}
          <div className="mt-10 border-t border-[#d8dce9] dark:border-[#31384d]">
            {systems.map((item, index) => (
              <div
                key={item.id}
                className="group grid gap-8 border-b border-[#d8dce9] py-4 transition-colors duration-300 hover:bg-[#fafbff] dark:border-[#31384d] dark:hover:bg-[#181d2f] lg:grid-cols-[80px_1fr_1.4fr]"
              >
                {/* Number */}
                <div className="relative">
                  <span className="font-mono text-[17px] text-[#ff6d50]">
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#111322] transition-colors group-hover:text-[#ff6d50] dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-3xl text-[18px] leading-[1.75] text-[#55607f] dark:text-[#b8c1da]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#66728f]">
                <span className="h-px w-6 bg-[#ff6d50]" />
                Outcomes We Target
              </p>

              <h2 className="text-[clamp(3rem,5vw,5.4rem)]  leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                Numbers, not{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  slideware.
                </em>
              </h2>
            </div>

            <p className="max-w-xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              Every engagement is scoped to a measurable result. The kinds of
              outcomes we build restaurant systems to move — and hold ourselves
              to.
            </p>
          </div>

          {/* Stats Card */}
          <div className="mt-10 overflow-hidden rounded-[2.2rem] border border-[#d9deeb] bg-white shadow-[0_18px_45px_rgba(43,55,94,.08)] dark:border-[#31384d] dark:bg-[#191e30]">
            <div className="grid md:grid-cols-2 xl:grid-cols-4">
              {outcomes.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex min-h-[145px] flex-col justify-center px-11 py-2 ${
                    index !== outcomes.length - 1
                      ? "border-b border-[#d9deeb] md:border-b-0 xl:border-r dark:border-[#31384d]"
                      : ""
                  }`}
                >
                  <h3 className="text-[90px] font-semibold leading-[0.9] tracking-[-0.08em] text-[#ff6d50]">
                    {item.value}
                  </h3>

                  <p className="mt-3 max-w-[260px] text-[16px] leading-[1.5] text-[#55607f] dark:text-[#b8c1da]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-start">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#66728f]">
                <span className="h-px w-6 bg-[#ff6d50]" />
                How We Approach It
              </p>

              <h2 className="text-[clamp(3rem,5vw,5.3rem)]  leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                The hard parts,{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  handled.
                </em>
              </h2>
            </div>

            <p className="max-w-xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              The principles we build by in this sector — and what each one
              means once the system is live.
            </p>
          </div>

          {/* Table */}
          <div className="mt-10 border-t border-[#d9deeb] dark:border-[#31384d]">
            {principles.map((item) => (
              <div
                key={item.id}
                className="grid gap-8 border-b border-[#d9deeb] py-4 lg:grid-cols-[70px_1fr_1.2fr] dark:border-[#31384d]"
              >
                {/* Number */}
                <div className="font-mono text-[20px] text-[#66728f]">
                  {item.id}
                </div>

                {/* Principle */}
                <div>
                  <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#66728f]">
                    Principle
                  </p>

                  <h3 className="text-[32px] font-medium tracking-[-0.04em] text-[#111322] dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Practice */}
                <div>
                  <p className="mb-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#ff6d50]">
                    <span className="text-[12px]">✓</span>
                    In Practice
                  </p>

                  <p className="text-[18px] leading-[1.75] text-[#55607f] dark:text-[#b8c1da]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-start">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-[#66728f]">
                <span className="h-px w-7 bg-[#ff6d50]" />
                Who We Build For
              </p>

              <h2 className="max-w-3xl text-[clamp(3rem,5vw,5.5rem)]  leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                From startups to{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  scale.
                </em>
              </h2>
            </div>

            <p className="max-w-2xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              The kinds of teams across restaurants we partner with — each with
              different stakes, the same standard of craft.
            </p>
          </div>

          {/* Audience Pills */}
          <div className="mt-20 flex flex-wrap gap-5">
            {audiences.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-full border border-[#d9deeb] bg-white px-7 py-6 shadow-[0_8px_24px_rgba(43,55,94,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6d50] hover:shadow-[0_18px_40px_rgba(255,109,80,.12)] dark:border-[#31384d] dark:bg-[#191e30]"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-[#ff6d50]" />

                <span className="text-[17px] font-medium text-[#111322] transition-colors group-hover:text-[#ff6d50] dark:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-start">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-[#66728f]">
                <span className="h-px w-7 bg-[#ff6d50]" />
                Tools We Reach For
              </p>

              <h2 className="max-w-3xl text-[clamp(3rem,5vw,5.4rem)] leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                Chosen for the{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  problem.
                </em>
              </h2>
            </div>

            <p className="max-w-2xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              Framework-agnostic, outcome-opinionated. A representative stack
              for restaurants — the mix bends to your problem, never the
              reverse.
            </p>
          </div>

          {/* Technology Card */}
          <div className="mt-10 rounded-[2.5rem] border border-[#d9deeb] bg-white p-10 shadow-[0_20px_60px_rgba(43,55,94,.08)] dark:border-[#31384d] dark:bg-[#191e30]">
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#d9deeb] bg-[#fafbff] px-6 py-2 font-mono text-[12px] text-[#66728f] transition-all duration-300 hover:border-[#ff6d50] hover:bg-[#fff5f2] hover:text-[#ff6d50] dark:border-[#31384d] dark:bg-[#20263b] dark:text-[#c5cee8] dark:hover:border-[#ff6d50] dark:hover:bg-[#2a2432]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="mx-auto max-w-[1360px]">
          {/* Heading */}
          <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-start">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-[#66728f]">
                <span className="h-px w-7 bg-[#ff6d50]" />
                The Services Behind It
              </p>

              <h2 className="max-w-4xl text-[clamp(3rem,5vw,5.5rem)] leading-[.92] tracking-[-.065em] text-[#111322] dark:text-white">
                One team.
                <em className="ml-3 font-serif font-normal text-[#ff6d50]">
                  Zero
                </em>{" "}
                hand-offs.
              </h2>
            </div>

            <p className="max-w-2xl text-[20px] leading-[1.7] text-[#55607f] dark:text-[#b8c1da]">
              The CODT disciplines we most often combine to build for
              restaurants — same architecture, same engineers, no integration
              tax.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {relatedServices.map(({ title, icon: Icon, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center justify-between rounded-[2rem] border border-[#d9deeb] bg-white p-7 shadow-[0_15px_35px_rgba(43,55,94,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6d50] hover:shadow-[0_22px_50px_rgba(255,109,80,.12)] dark:border-[#31384d] dark:bg-[#191e30]"
              >
                <div className="flex items-center gap-6">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#ffc4b2] bg-[#fff6f2] transition-all duration-300 group-hover:bg-[#ff6d50]">
                    <Icon
                      size={28}
                      className="text-[#ff6d50] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111322] transition-colors duration-300 group-hover:text-[#ff6d50] dark:text-white">
                    {title}
                  </h3>
                </div>

                <ArrowRight
                  size={24}
                  className="text-[#66728f] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff6d50]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-10 sm:px-8 lg:px-10 ">
        <div className="mx-auto max-w-[1360px]">
          {/* Top Divider */}
          <div className="h-px bg-[#d9deeb] dark:bg-[#31384d]" />

          <Link
            href={nextIndustry.href}
            className="group mt-8 flex items-center justify-between"
          >
            {/* Left Content */}
            <div>
              <p className="mb-8 text-[14px] font-medium uppercase tracking-[0.28em] text-[#66728f]">
                Next Industry — {nextIndustry.number} / {nextIndustry.total}
              </p>

              <div className="flex items-center gap-5">
                <h2 className="text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.07em] text-[#111322] transition-colors duration-300 group-hover:text-[#ff6d50] dark:text-white">
                  {nextIndustry.title}
                </h2>

                <ArrowRight
                  size={48}
                  strokeWidth={1.8}
                  className="mt-2 text-[#ff6d50] transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            </div>

            {/* Right Button */}
            <div className="hidden lg:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d9deeb] bg-white shadow-sm transition-all duration-300 group-hover:border-[#ff6d50] group-hover:bg-[#ff6d50] dark:border-[#31384d] dark:bg-[#191e30]">
                <ArrowRight
                  size={36}
                  strokeWidth={2}
                  className="text-[#111322] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white dark:text-white"
                />
              </div>
            </div>
          </Link>

          {/* Bottom Divider */}
          <div className="mt-8 h-px bg-[#d9deeb] dark:bg-[#31384d]" />
        </div>
      </section>

      <section className="industry-band bg-[#f0f2fb] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>Before you ask</Eyebrow>
            <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.9rem)] font-semibold leading-[.91] tracking-[-.06em]">
              Common{" "}
              <em className="font-serif font-normal text-[#ff6d50]">
                questions.
              </em>
            </h2>
            <p className="mt-5 max-w-sm text-[13px] leading-5 text-[#66728f]">
              The things buyers in entertainment ask us most. Anything else —
              put it in a brief, a senior engineer replies within a business
              day.
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                className="industry-faq-card rounded-2xl border border-[#e1e5ef] bg-white p-6"
              >
                <h3 className="text-[16px] font-semibold text-[#27314d]">
                  {question}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-[#66728f]">
                  {answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-band border-t border-[#dfe4ee] bg-[#e6e9fa] px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-xl">
          <Eyebrow>Ready to build</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[.94] tracking-[-.06em]">
            Have a sector problem{" "}
            <em className="font-serif font-normal text-[#ff6d50]">
              worth solving well?
            </em>
          </h2>
          <p className="mt-5 text-[12px] leading-5 text-[#66728f]">
            Tell us your sector, your timeline and your constraints. We will
            reply within one business day with an honest read on fit, scope, and
            the right team to put on it.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6d50] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,109,80,.25)]"
            >
              Book an intro call <ArrowRight size={14} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[#d5d9e7] bg-white px-5 py-3 text-[11px] font-semibold text-[#4d5875]"
            >
              See the work first <Sparkles size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

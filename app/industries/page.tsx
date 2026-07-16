import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Check,
  ChefHat,
  Clapperboard,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Pill,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Tv,
} from "lucide-react";

type Industry = {
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
};

const industries: Industry[] = [
  {
    icon: ChefHat,
    title: "Restaurants / Food Tech",
    href: "/industries/restaurants-foodtech",
    description:
      "POS, kiosk, ordering, and back-of-house tooling for hospitality.",
    tags: ["POS & Kiosk", "Smart Fridges", "KDS", "Inventory"],
    metric: "200+/hr",
    metricLabel: "Peak orders per kitchen handled",
  },
  {
    icon: Plane,
    title: "Aviation",
    href: "/industries/aviation",
    description:
      "Maintenance, training, and operations software for the aviation sector.",
    tags: ["Digital Logbooks", "MRO", "Training", "Compliance"],
    metric: "100%",
    metricLabel: "Inspection compliance on shipped logbooks",
  },
  {
    icon: Clapperboard,
    title: "Entertainment / Media Streaming",
    href: "/industries/entertainment-streaming",
    description: "OTT platforms, live event tech, and creator video systems.",
    tags: ["OTT / VOD", "Low-latency Live", "Creator Video", "Real-time Chat"],
    metric: "<2.4s",
    metricLabel: "Median live-stream join time",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    href: "/industries/healthcare",
    description:
      "HIPAA-ready platforms for clinics, telemedicine, and digital health.",
    tags: ["Telemedicine", "HIPAA-ready", "HL7 / FHIR", "Patient Portals"],
    metric: "0",
    metricLabel: "PHI exposure incidents in production",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    href: "/industries/ecommerce",
    description:
      "Storefronts and marketplaces engineered for conversion and scale.",
    tags: ["Headless", "Checkout", "Marketplaces", "AI Search"],
    metric: "+15-40%",
    metricLabel: "Conversion lift after replatform",
  },
  {
    icon: Landmark,
    title: "Finance / Fintech",
    href: "/industries/finance-fintech",
    description:
      "Regulated financial systems for lending, payments, and wealth platforms.",
    tags: ["Payments", "Lending", "Ledgers", "KYC / AML"],
    metric: "SAQ A",
    metricLabel: "PCI scope kept minimal via tokenisation",
  },
  {
    icon: Building2,
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Property platforms, listing portals, and tenant operations software.",
    tags: ["Listing Portals", "Geo-search", "Tenant Ops", "Listing Sync"],
    metric: "<100ms",
    metricLabel: "Map pin render at 100k+ listings",
  },
  {
    icon: GraduationCap,
    title: "EdTech / E-Learning",
    href: "/industries/edtech",
    description:
      "Learning platforms, LMS systems, and creator-led course products.",
    tags: ["LMS", "Course Marketplace", "Assessment", "Accessibility"],
    metric: "WCAG 2.2 AA",
    metricLabel: "Accessibility baked into platforms",
  },
  {
    icon: HardHat,
    title: "Construction",
    href: "/industries/construction",
    description:
      "Field operations, project management, and BIM-adjacent tooling.",
    tags: ["Field Ops", "Project Mgmt", "BIM-adjacent", "Safety"],
    metric: "Offline-first",
    metricLabel: "Works all day with no signal",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    href: "/industries/insurance",
    description: "Insurtech platforms for quoting, policy admin, and claims.",
    tags: ["Rating Engines", "Policy Admin", "Claims", "Underwriting"],
    metric: "50 states",
    metricLabel: "Rating-rule variance planned for",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    href: "/industries/gaming",
    description:
      "Multiplayer infrastructure, live ops tooling, and game services.",
    tags: ["Multiplayer", "Live Ops", "Matchmaking", "Economy"],
    metric: "10x",
    metricLabel: "Launch-spike concurrency load-tested",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    href: "/industries/fitness",
    description:
      "Coaching apps, gym platforms, and connected fitness products.",
    tags: ["Coaching Apps", "Wearables", "Gym Platforms", "Habit Design"],
    metric: "HealthKit / Fit",
    metricLabel: "Wearable integrations, first-class",
  },
  {
    icon: Tv,
    title: "OTT Platforms",
    href: "/industries/ott",
    description:
      "VOD, CTV and mobile streaming services with multi-DRM and churn-aware billing.",
    tags: ["VOD / CTV", "Multi-DRM", "ABR Delivery", "SVOD / AVOD"],
    metric: "<2s",
    metricLabel: "Median playback start time",
  },
  {
    icon: Truck,
    title: "Logistics",
    href: "/industries/logistics",
    description:
      "Fleet, warehouse and last-mile platforms with real-time track-and-trace and offline-first driver apps - built to move the on-time number.",
    tags: [
      "Fleet & route optimization",
      "Warehouse & WMS",
      "Last-mile & driver apps",
      "Track-and-trace & telematics",
    ],
    metric: "On-time %",
    metricLabel: "The number we move",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    href: "/industries/pharmaceutical",
    description:
      "GxP/GMP-compliant systems - clinical and eTMF tooling, cold-chain monitoring, serialization and validated quality software with 21 CFR Part 11 audit trails.",
    tags: [
      "Clinical trial & eTMF tooling",
      "Cold-chain & serialization",
      "Validated (GAMP 5) systems",
      "Pharmacovigilance & quality",
    ],
    metric: "GAMP 5",
    metricLabel: "Validated by design",
  },
];

const proof = [
  [
    "Restaurants / Food Tech",
    "FeelEat - Happy Fridge",
    "Smart unattended fridges with scan-to-unlock and pay-to-open, plus the kiosk, employee and ERP apps around them.",
    "$10M+",
    "Valuation",
  ],
  [
    "Aviation",
    "Aviatize",
    "An EASA/FAA-ready operations-and-compliance platform that replaced paper logbooks across a global fleet, end to end.",
    "3d -> 4h",
    "Audit prep",
  ],
  [
    "Entertainment / Streaming",
    "Bizzabo",
    "A studio-quality, low-latency live-streaming layer engineered into a single Event Experience OS.",
    "50K+",
    "Peak viewers",
  ],
] as const;

const commitments = [
  [
    "Senior-led, always",
    "Every build is led by an architect with 9+ years in production - no junior teams behind senior names.",
  ],
  [
    "Compliance-aware",
    "HIPAA, PCI, EASA/FAA and WCAG - we design around the rules your sector lives under from line one.",
  ],
  [
    "You own it all",
    "Code, data and roadmap are yours. We deploy into infrastructure you control, with no lock-in.",
  ],
  [
    "Lifetime support",
    "Patches, fixes and a senior engineer who knows the system - for the life of what we ship.",
  ],
] as const;

const comparison = [
  [
    "Sector knowledge",
    "Learns your rules on your budget",
    "Designs around HIPAA, PCI, EASA/FAA & WCAG from line one",
  ],
  [
    "Time to value",
    "A demo that impresses, then stalls",
    "A production-grade slice in six to ten weeks",
  ],
  [
    "The team",
    "Juniors behind a senior pitch",
    "The architects who scoped it are the ones who build it",
  ],
  [
    "Compliance",
    "Bolted on before the audit",
    "Baked into the architecture, audit-ready by default",
  ],
  [
    "After launch",
    "Hands off and moves on",
    "Lifetime support · 3+ year average client tenure",
  ],
  [
    "Ownership",
    "You rent their closed platform",
    "You own the code, data and roadmap — no lock-in",
  ],
  [
    "The stack",
    "A generic template, forced to fit",
    "A stack chosen for your sector's actual problem",
  ],
] as const;

const faqs = [
  [
    "Our industry is not listed - can you still help?",
    "Almost certainly. The fifteen sectors here are where we have the deepest scars, but the underlying patterns - compliance, scale, offline-first, real-time - transfer widely. Tell us your problem and we will give you an honest read on fit.",
  ],
  [
    "Do you actually understand our sector's rules?",
    "We design around them from line one - HIPAA in healthcare, PCI in fintech, EASA/FAA in aviation, WCAG in EdTech. Compliance is part of the architecture, not a feature bolted on before launch.",
  ],
  [
    "Who owns the software you build?",
    "You do - all of it. Code, data, pipelines and documentation are assigned to you, deployed into infrastructure you control. No licensing back, no lock-in.",
  ],
  [
    "How quickly can we see something real?",
    "Discovery runs one to two weeks and ends with a fixed plan. Most teams see a first production-grade slice inside six to ten weeks, then iterate weekly against the business metric that matters.",
  ],
  [
    "What happens after launch?",
    "We stay. Every engagement includes lifetime support - security patches, OS compatibility and a senior engineer who knows the system. Average client tenure with us is over three years.",
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

export default function IndustriesPage() {
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

      <section className="industries-hero relative overflow-hidden border-b border-[#d8dce9] px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20">
        <div className="industries-hero-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="industries-icon-wall pointer-events-none absolute right-[4.6vw] top-[3.75rem] hidden w-[27vw] max-w-[520px] gap-4 opacity-95 lg:grid">
          {industries.map(({ icon: Icon, title }, index) => (
            <span
              key={title}
              className="industries-icon-tile grid aspect-square min-h-[94px] place-items-center rounded-[1.25rem] border border-[#dfe4f0] bg-white/35 text-[#98a0ba] shadow-[inset_0_1px_0_rgba(255,255,255,.65),0_18px_34px_rgba(43,55,94,.05)] backdrop-blur"
            >
              <Icon size={34} strokeWidth={1.9} />
            </span>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px]">
          <div className="mb-7 text-[13px] text-[#8490aa]">
            <Link href="/" className="hover:text-[#ff6d50]">
              Home
            </Link>
            <span className="mx-2">/</span>Industries
          </div>
          <Eyebrow>Industries - 15 sectors served</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.75rem)] font-semibold leading-[.93] tracking-[-.065em]">
            We build for the <br />
            <em className="font-serif font-normal text-[#ff6d50]">
              sector you&apos;re in.
            </em>
          </h1>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-7 text-[#66728f] sm:text-[17px]">
            Software is never generic. A kitchen at peak, an audit-ready
            logbook, a launch-day game server and a HIPAA-bound record each
            demand different things. We have shipped production systems across
            fifteen industries - and we bring the scars and the patterns to
            yours.
          </p>

          <div className="mt-14 grid overflow-hidden rounded-[1.35rem] border border-[#e1e5f0] bg-white/80 shadow-[0_18px_42px_rgba(43,55,94,.08)] backdrop-blur sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
            {[
              ["15", "Industries served"],
              ["40+", "Products shipped"],
              ["9+ yrs", "Production software"],
              ["5.0", "Average client rating"],
            ].map(([value, label]) => (
              <article
                key={label}
                className="flex flex-col items-center justify-center text-center border-b border-[#d9deeb] py-4 px-6 last:border-b-0 sm:odd:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="industry-strong-text text-[40px] font-semibold leading-none tracking-[-.075em] text-[#080b1b]">
                  {value}
                </p>

                <p className="industry-soft-text mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#687193]">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 border-b border-[#e3e6f0] pb-9 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <h2 className="max-w-xl text-[clamp(2.2rem,4.6vw,4.6rem)] font-semibold leading-[.9] tracking-[-.065em]">
              Fifteen sectors.{" "}
              <em className="font-serif font-normal text-[#ff6d50]">One</em>{" "}
              senior team.
            </h2>
            <p className="max-w-xl text-[25px] leading-6 text-[#66728f] md:justify-self-end">
              Each industry below opens a detailed page - the systems we build,
              the challenges we design around, and the outcomes we target. Do
              not see yours? The patterns usually transfer - tell us about it.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="industry-card group relative flex min-h-[360px] flex-col rounded-[1.4rem] border border-[#e2e6f0] bg-white p-6 shadow-[0_8px_18px_rgba(39,54,96,.06)] transition hover:-translate-y-1 hover:border-[#aebcff] hover:shadow-[0_18px_34px_rgba(47,70,160,.13)]"
                >
                  <span className="absolute left-6 top-5 font-mono text-[12px] font-semibold text-[#9ea8be]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-[#e1e5f0] text-[#7c86a4] transition group-hover:border-[#ff6d50] group-hover:bg-[#ff6d50] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                  <span className="mt-11 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff0ed] text-[#ff7658] transition group-hover:bg-[#ff6d50] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-.02em] text-[#27314d]">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-5 text-[#66728f]">
                    {industry.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="industry-chip rounded-full border border-[#e3e7f1] bg-[#f8f9fe] px-3 py-1.5 text-[11px] font-medium text-[#77819c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="industry-divider h-px bg-[#e6e9f2]" />
                    <div className="mt-5 flex items-end justify-between gap-5">
                      <span className="text-[28px] font-semibold leading-none tracking-[-.07em] text-[#2e2f80]">
                        {industry.metric}
                      </span>
                      <span className="max-w-[12rem] text-right text-[12px] leading-5 text-[#66728f]">
                        {industry.metricLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industry-band bg-[#e9ecfa] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 md:grid-cols-[1fr_.9fr] md:items-end">
            <div>
              <Eyebrow>Proven in production</Eyebrow>
              <h2 className="mt-3 text-[clamp(2.2rem,4.2vw,4.2rem)]  leading-[.9] tracking-[-.065em]">
                Systems shipped,{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  still running.
                </em>
              </h2>
            </div>
            <p className="max-w-xl text-[25px] leading-6 text-[#66728f]">
              Not case-study theatre - live platforms, paid for and still
              running, in three of the fifteen sectors above.
            </p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {proof.map(([sector, title, text, metric, label], index) => (
              <article
                key={title}
                className={`industry-proof-card rounded-[1.5rem] p-7 ${index === 1 ? "bg-[#2e2f80] text-white shadow-[0_18px_34px_rgba(45,47,128,.3)]" : "bg-white"}`}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-[.18em] ${index === 1 ? "text-[#ff9a87]" : "text-[#9ca6bb]"}`}
                >
                  {sector}
                </p>
                <h3 className="mt-4 text-[21px] font-semibold">{title}</h3>
                <p
                  className={`mt-3 text-[13px] leading-5 ${index === 1 ? "text-[#d0d4ff]" : "text-[#66728f]"}`}
                >
                  {text}
                </p>
                <div
                  className={`industry-muted-panel mt-7 rounded-2xl p-5 ${index === 1 ? "bg-white/10" : "bg-[#f4f6ff]"}`}
                >
                  <p className="text-[32px] font-semibold leading-none tracking-[-.07em] text-[#ff7658]">
                    {metric}
                  </p>
                  <p
                    className={`mt-2 text-[12px] ${index === 1 ? "text-[#dfe2ff]" : "text-[#66728f]"}`}
                  >
                    {label}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ff6d50] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e95b3f] hover:shadow-[0_12px_30px_rgba(255,109,80,.35)]"
            >
              View All Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <Eyebrow>What carries across</Eyebrow>
              <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] leading-[.9] tracking-[-.065em]">
                Different sectors.{" "}
                <em className="font-serif font-normal text-[#ff6d50]">same</em>{" "}
                standards.
              </h2>
            </div>
            <p className="self-end text-[25px] leading-6 text-[#66728f]">
              Whatever the industry, four commitments hold - the reasons clients
              across all fifteen renew with us, and refer us.
            </p>
          </div>
          <div className="industry-panel mt-9 grid overflow-hidden rounded-2xl border border-[#dfe4ef] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(([title, text], index) => (
              <article
                key={title}
                className="border-b border-[#e7eaf2] p-7 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff0ed] text-[#ff7658]">
                  <Check size={18} />
                </span>
                <p className="mt-5 font-serif text-[19px] italic text-[#ff7658]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-[16px] font-semibold">{title}</h3>
                <p className="mt-3 text-[13px] leading-5 text-[#66728f]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 md:grid-cols-[1fr_.9fr] md:items-end">
            <div>
              <Eyebrow>The difference</Eyebrow>
              <h2 className="mt-3 text-[clamp(2rem,3.8vw,3.7rem)]  leading-[.91] tracking-[-.06em]">
                A generalist learns your sector.
                <em className="font-serif font-normal text-[#ff6d50]">
                  We already know it.
                </em>{" "}
              </h2>
            </div>
            <p className="text-[25px] leading-5 text-[#66728f]">
              What changes when the team has already shipped in your industry -
              and carries its scars, not just a discovery questionnaire.
            </p>
          </div>
          <div className="industry-panel mt-8 overflow-x-auto rounded-xl border border-[#dfe4ef] bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[#eef0fa] text-[10px] uppercase tracking-[.14em] text-[#75809c]">
                <tr>
                  <th>What matters</th>
                  <th>Typical agency</th>
                  <th className="bg-[#fff0ed] text-[#e46047]">
                    CODT Technologies
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, agency, codt]) => (
                  <tr key={label} className="border-t border-[#edf0f5]">
                    <th className="font-semibold">{label}</th>
                    <td className="text-[#66728f]">{agency}</td>
                    <td className="bg-[#fff8f5] text-[#66728f]">{codt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              The things teams ask when they&apos;re weighing a sector partner.
              Anything else - put it in a brief, a senior engineer replies
              within a business day.
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

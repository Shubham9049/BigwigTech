import Link from "next/link";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import TrustedMarquee from "../components/TrustedMarquee";

const services = [
  [
    "AI / ML Solutions",
    "Production ML and LLM-powered features — not demos, not POCs that die.",
    "/ai-ml-solutions",
    "AI • MLOps • Computer Vision • LLMs",
  ],
  [
    "AI Agents",
    "Goal-directed AI systems that execute multi-step workflows reliably.",
    "/ai-agents",
    "Agent Development • Integrations • Workflows",
  ],
  [
    "Data Engineering & Analytics",
    "Pipelines, warehouses, and BI that turn raw events into decisions.",
    "/data-engineering",
    "ETL • Warehouses • Reporting • Analytics",
  ],
  [
    "SaaS App Development",
    "Multi-tenant SaaS platforms with billing, RBAC, and analytics baked in.",
    "/saas-app-development",
    "SaaS • Integrations • Automation",
  ],
  [
    "ERP & Business Automation",
    "Internal platforms that replace spreadsheets with auditable workflows.",
    "/erp-business-automation",
    "ERP • Planning • Integrations • Reporting",
  ],
  [
    "Custom Product Development",
    "Engineering for problems that off-the-shelf software can’t solve.",
    "/custom-product-development",
    "Product Strategy • UX • Engineering",
  ],
  [
    "Web App Development",
    "Modern web apps, dashboards, and portals engineered for performance and scale.",
    "/website-development",
    "Frontend • Backend • Commerce • UX",
  ],
  [
    "Mobile App Development",
    "Native and cross-platform apps that ship to App Store and Play Store.",
    "/mobile-app-development",
    "React Native • iOS • Android",
  ],
  [
    "IoT Solutions",
    "Connected hardware, edge software, and cloud platforms — engineered together.",
    "/iot-solutions",
    "Firmware • Devices • Dashboards",
  ],
  [
    "Audio & Video Streaming",
    "Live and VOD platforms that survive a viral spike at 3 a.m.",
    "/audio-video-streaming",
    "Live • Encoding • DRM • CDN",
  ],
  [
    "White-label Solutions",
    "Battle-tested platforms re-skinned and re-launched as your product.",
    "/white-label-solutions",
    "Fintech • SaaS • Client Portals",
  ],
  [
    "UI / UX Design",
    "Research-led product design that ships, not just decorates.",
    "/ui-ux-design",
    "Research • UX • Design Systems",
  ],
  [
    "DevOps & Cloud (AWS)",
    "Cloud infrastructure that scales without 3 a.m. surprises.",
    "/devops-cloud",
    "AWS • CI/CD • Security • Cost",
  ],
  [
    "Blockchain / Web3",
    "Smart contracts and Web3 systems — when they actually solve the problem.",
    "/blockchain-web3",
    "Smart Contracts • Wallets • Auditing",
  ],
] as const;

const practices = [
  [
    "01",
    "Senior-only delivery",
    "The architects who scope your system are the engineers who build it. No juniors learning on your budget.",
  ],
  [
    "02",
    "European standard",
    "GDPR-aware by default. EU-region data residency on request, and documentation your team can actually audit.",
  ],
  [
    "03",
    "One architecture",
    "Mobile, web, AI and data share a single stack — no stitching composable tools together across teams.",
  ],
  [
    "04",
    "Built to last",
    "We stay on after launch. Average client tenure with us is over three years, with no sunset clause.",
  ],
];

const phases = [
  "Discovery & Strategy",
  "Architecture & Design",
  "Build & Integrate",
  "Secure Deployment",
  "Scale & Lifetime Support",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="services-eyebrow text-[11px] font-bold uppercase tracking-[0.18em] text-[#8992ad]">
      <span className="mr-2 text-[#ff7658]">—</span>
      {children}
    </p>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page overflow-hidden bg-[#f6f7fd] text-[#20263a]">
      <style>{`
        .services-page p { font-size: 14px !important; line-height: 1.55 !important; }
        .services-page .services-eyebrow { font-size: 11px !important; line-height: 1.2 !important; }
        .services-page h3 { font-size: 18px !important; }
        .services-page a { font-size: 14px; }
        .services-page table { font-size: 13px !important; }
        .services-page table th, .services-page table td { padding: 1rem !important; }
        @media (max-width: 640px) {
          .services-page p { font-size: 14px !important; }
          .services-page h3 { font-size: 17px !important; }
        }
      `}</style>
      <section className="relative border-b border-[#e5e8f3] bg-[radial-gradient(ellipse_at_60%_0%,#e7eaff_0%,transparent_58%)] px-5 pb-12 pt-7 sm:px-8 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="text-[13px] text-[#8490aa] py-5">
            <Link href="/" className="hover:text-[#ff6d50]">
              Home
            </Link>
            <span className="mx-2">›</span>Services
          </div>
          <Eyebrow>What we do</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.75rem)] font-semibold leading-[.93] tracking-[-.065em]">
            Fourteen disciplines. One{" "}
            <em className="font-serif font-normal text-[#ff6d50]">
              senior team.
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#66728f] sm:text-[17px]">
            From a first-touch AI concept to a regulated ERP platform, CODT
            designs, engineers, and operates production software end-to-end —
            staffed by senior teams, billed on outcomes, owned entirely by you.
          </p>
        </div>
        <TrustedMarquee />
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 border-b border-[#e3e6f0] pb-9 md:grid-cols-[1.1fr_.9fr]">
            <h2 className="max-w-md text-[clamp(2.2rem,3.8vw,3.7rem)] font-semibold leading-[.91] tracking-[-.06em]">
              Every{" "}
              <em className="font-serif font-normal text-[#ff6d50]">
                discipline
              </em>{" "}
              you need, under one roof.
            </h2>
            <p className="max-w-md self-end text-[15px] leading-6 text-[#66728f]">
              Fourteen specialised practices — but one shared engineering
              culture, one quality bar, and one team accountable for the result.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map(([title, description, href, tags], index) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-[#e2e6f0] bg-white p-6 shadow-[0_8px_18px_rgba(39,54,96,.06)] transition hover:-translate-y-0.5 hover:border-[#aebcff] hover:shadow-[0_14px_24px_rgba(47,70,160,.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded bg-[#fff0ed] text-[12px] text-[#ff7658]">
                    ✦
                  </span>
                  <span className="text-[11px] text-[#9ea8be]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-[#27314d]">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-[#66728f]">
                  {description}
                </p>
                <p className="mt-4 text-[11px] font-medium text-[#9ba5ba]">
                  {tags}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ecfa] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <Eyebrow>Engagement models</Eyebrow>
              <h2 className="mt-3 text-[clamp(2.2rem,3.8vw,3.7rem)] font-semibold leading-[.91] tracking-[-.06em]">
                Three ways to{" "}
                <em className="font-serif font-normal text-[#ff6d50]">work</em>{" "}
                with us.
              </h2>
            </div>
            <p className="self-end text-[15px] leading-6 text-[#66728f]">
              Outcomes priced, not hours billed. You see the budget before we
              start, and milestones are fixed in writing.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              [
                "Fixed Scope",
                "Product Build",
                "A defined product, shipped to production for a fixed price and timeline.",
              ],
              [
                "Flexible",
                "Studio Retainer",
                "A dedicated senior squad embedded with your team, sprint after sprint.",
              ],
              [
                "Lifetime",
                "Care & Scale",
                "Long-term ownership of a live platform — support, performance and reliability.",
              ],
            ].map(([label, title, text], i) => (
              <article
                key={title}
                className={`rounded-2xl p-7 ${i === 1 ? "bg-[#2e2f80] text-white shadow-[0_18px_34px_rgba(45,47,128,.3)]" : "bg-white"}`}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-[.18em] ${i === 1 ? "text-[#ff9a87]" : "text-[#9ca6bb]"}`}
                >
                  ✦ {label}
                </p>
                <h3 className="mt-4 text-[21px] font-semibold">{title}</h3>
                <p
                  className={`mt-3 text-[13px] leading-5 ${i === 1 ? "text-[#d0d4ff]" : "text-[#66728f]"}`}
                >
                  {text}
                </p>
                <ul
                  className={`mt-6 space-y-2 text-[12px] ${i === 1 ? "text-[#dfe2ff]" : "text-[#7883a0]"}`}
                >
                  <li>→ Senior specialists</li>
                  <li>→ Clear milestones</li>
                  <li>→ Your systems, your IP</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <Eyebrow>Not one partner</Eyebrow>
              <h2 className="mt-3 text-[clamp(2.2rem,3.8vw,3.7rem)] font-semibold leading-[.91] tracking-[-.06em]">
                Fourteen services.{" "}
                <em className="font-serif font-normal text-[#ff6d50]">Zero</em>{" "}
                hand-offs.
              </h2>
            </div>
            <p className="self-end text-[15px] leading-6 text-[#66728f]">
              Most projects fail in the gaps between vendors. We close those
              gaps by keeping design, engineering, data and operations under one
              roof.
            </p>
          </div>
          <div className="mt-9 grid overflow-hidden rounded-2xl border border-[#dfe4ef] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {practices.map(([number, title, text]) => (
              <article
                key={number}
                className="border-b border-[#e7eaf2] p-7 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="font-serif text-[19px] italic text-[#ff7658]">
                  {number}
                </p>
                <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
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
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <Eyebrow>Build vs buy</Eyebrow>
              <h2 className="mt-3 text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[.91] tracking-[-.06em]">
                When to{" "}
                <em className="font-serif font-normal text-[#ff6d50]">
                  build custom
                </em>{" "}
                vs buy off-the-shelf
              </h2>
            </div>
            <p className="self-end text-[12px] leading-5 text-[#66728f]">
              Off-the-shelf SaaS wins when your workflow matches the product’s
              opinions. A custom build wins when your edge depends on doing
              something the market can’t sell you.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dfe4ef] bg-white">
            <table className="w-full min-w-[620px] text-left text-[10px]">
              <thead className="bg-[#eef0fa] text-[8px] uppercase tracking-[.14em] text-[#75809c]">
                <tr>
                  <th className="p-3">What matters</th>
                  <th className="p-3">Off-the-shelf SaaS</th>
                  <th className="bg-[#fff0ed] p-3 text-[#e46047]">
                    Custom built with CODT
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Best for",
                    "Standard, commodity workflows everyone runs the same way",
                    "Workflows that are your competitive edge — or fit no product",
                  ],
                  [
                    "Time to first value",
                    "Days — sign up and configure",
                    "Weeks — a fixed fee discovery sprint, then shipped module by module",
                  ],
                  [
                    "Fit to your process",
                    "You adapt to the product’s opinions",
                    "The system is shaped around how you actually work",
                  ],
                  [
                    "Ongoing cost",
                    "Per-seat fees that scale with headcount forever",
                    "Build cost up front, then only what you choose to extend",
                  ],
                  [
                    "Code & IP ownership",
                    "The vendor owns the platform; you rent access",
                    "You own all source, IP, designs and infrastructure at delivery",
                  ],
                ].map(([label, saas, custom]) => (
                  <tr key={label} className="border-t border-[#edf0f5]">
                    <th className="p-3 font-semibold">{label}</th>
                    <td className="p-3 text-[#66728f]">{saas}</td>
                    <td className="bg-[#fff8f5] p-3 text-[#66728f]">
                      {custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dfe4ee] bg-[#e6e9fa] px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-xl">
          <Eyebrow>Ready to build</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[.94] tracking-[-.06em]">
            Have a problem worth{" "}
            <em className="font-serif font-normal text-[#ff6d50]">
              solving well?
            </em>
          </h2>
          <p className="mt-5 text-[12px] leading-5 text-[#66728f]">
            Tell us about your product, your timeline, and your constraints.
            We’ll reply with one business day with an honest read on fit, scope,
            and the right team to put on it.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6d50] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,109,80,.25)]"
            >
              Book an intro call <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#d5d9e7] bg-white px-5 py-3 text-[11px] font-semibold text-[#4d5875]"
            >
              Email us directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

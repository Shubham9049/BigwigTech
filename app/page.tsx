// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import TypewriterHero from "./components/TypewriterHero";
import TrustedMarquee from "./components/TrustedMarquee";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Code2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  MapPin,
} from "lucide-react";
import WorkCard from "./components/WorkCard";
import ServiceCard from "./components/ServiceCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ScrollFaq from "./components/ScrollFaq";
import { works } from "./utils/work";

const work = [
  [
    "Forecasting Model",
    "AI decision support for a more confident tomorrow.",
    "0%",
    "95%",
  ],
  [
    "Lead Task AI",
    "A smart work assistant for better briefs and faster delivery.",
    "30%",
    "38%",
  ],
  [
    "FeelEat",
    "Helping people create healthier habits, one order at a time.",
    "60%",
    "40%",
  ],
  [
    "Tapline",
    "A simple, secure way to pay and manage everyday money.",
    "98.5%",
    "Real time",
  ],
];
const services = [
  {
    title: "AI Partner",
    description:
      "Your end-to-end AI partner — agentic workflows that finish real tasks, retrieval assistants grounded in your own data, and private LLMs that keep everything inside the EU.",
    tags: ["Agents", "RAG", "Private LLM", "Voice"],
    icon: "sparkles",
  },
  {
    title: "Mobile App Partner",
    description:
      "Native iOS & Android and cross-platform apps — offline-first, with payments, NFC and push built in.",
    tags: ["iOS", "Android", "Flutter", "React Native", "PWA"],
    icon: "smartphone",
  },
  {
    title: "SaaS Product Partner",
    description:
      "From the first workflow to a reliable product platform, we design and build software your customers want to keep using.",
    tags: ["Web Apps", "Multi-tenant", "Billing", "Analytics"],
    icon: "layers",
  },
  {
    title: "Custom Software",
    description:
      "Purpose-built systems that fit the way your teams actually work, connect to the right tools, and scale with the business.",
    tags: ["Portals", "Automation", "APIs", "Integrations"],
    icon: "layers",
  },
  {
    title: "ERP Partner",
    description:
      "Connected operational systems that turn scattered data and manual processes into one clear, dependable source of truth.",
    tags: ["Operations", "Workflows", "Reporting", "Data"],
    icon: "layers",
  },
  {
    title: "CMS Partner",
    description:
      "Fast, flexible content platforms that give your team the freedom to publish, personalise and improve without engineering bottlenecks.",
    tags: ["Content", "Commerce", "SEO", "Migration"],
    icon: "layers",
  },
];
const approach = [
  {
    icon: "🔍",
    title: "Data Strategy & Ingestion",
    description:
      "We audit your proprietary data, structure the unstructured, and build robust pipelines. Clean, reliable data is the foundation for every successful AI system.",
  },
  {
    icon: "✏️",
    title: "Model Selection & Architecture",
    description:
      "We select the right foundational models (LLMs, SLMs, Vision) and design the architecture that makes them reliable, scalable, and useful.",
  },
  {
    icon: "⚙️",
    title: "Fine-Tuning & Autonomous Agents",
    description:
      "We train models on your specific domain knowledge and construct autonomous agent workflows that can reason, act, and deliver real outcomes.",
  },
  {
    icon: "🚀",
    title: "Secure Enterprise Deployment",
    description:
      "Rigorous hallucination testing and security checks precede a smooth launch. We deploy your solution with the controls, observability, and support it needs to last.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      {/* <Navbar /> */}

      <div className="relative z-10 overflow-hidden bg-[#f3f5ff]/90 text-[#24283b]">
        <section className="relative px-5 pb-14 pt-12 md:px-10 lg:pb-20 lg:pt-20">
          <InteractiveBackground />
          <div className="hero-orb absolute -right-32 top-0 h-96 w-96 rounded-full" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Your product team</p>
              <TypewriterHero />
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
                We bring our hearts, heads and hands to the software projects
                our expertise is built on. From AI agents and SaaS platforms to
                mobile apps, ERP and CRM.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <button className="rounded-full bg-[#ff6948] px-7 py-4 text-sm font-bold text-white">
                  Start a project{" "}
                  <ArrowRight className="ml-2 inline" size={16} />
                </button>
                <a href="#work" className="text-sm font-bold">
                  View our work <ArrowUpRight className="inline" size={15} />
                </a>
              </div>
            </div>
            <div className="hero-metrics">
              <Metric n="9+" t="Years building production software" c="" />
              <Metric n="40+" t="Products shipped across 10+ countries" c="" />
              <Metric n="5.0" t="Rated by founders, operators & CIOs" c="" />
            </div>
          </div>
        </section>
        <TrustedMarquee />
        <section id="work" className="bg-[#f5f6ff] py-20 ">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_.94fr] lg:items-end lg:gap-20">
              <div>
                <p className="eyebrow mb-10">Selected work</p>
                <h2 className="max-w-3xl text-[clamp(3.5rem,5.45vw,6.5rem)] font-semibold leading-[.91] tracking-[-.07em] text-[#111426]">
                  Production systems,
                  <br />
                  not{" "}
                  <em className="font-serif font-normal text-[#ff6948]">
                    pitch-deck
                  </em>
                  <br />
                  mock-ups.
                </h2>
              </div>
              <p className="max-w-2xl pb-1 text-xl leading-[1.55] tracking-[-.03em] text-[#56628a] md:text-2xl lg:text-[1.75rem]">
                A sample of platforms we&apos;ve designed and shipped. Every
                project here is live, paid for, and earning revenue for its
                owners.
              </p>
            </div>

            {/* Grid */}

            <div className="mt-16 grid gap-x-14 gap-y-20 lg:mt-24 lg:grid-cols-2">
              {works.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-[#ffb8a4] bg-[#fffaf8] px-9 text-[16px] font-medium text-[#ff7758] transition-all duration-300 hover:bg-[#ff7758] hover:text-white"
              >
                View all work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#f5f6ff] px-5 py-20 md:px-10 ">
          <div className="mx-auto max-w-[1550px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_.94fr] lg:items-end lg:gap-20">
              <div>
                <p className="eyebrow mb-10">What we build</p>
                <h2 className="text-[clamp(3.5rem,5.45vw,6.5rem)] font-semibold leading-[.91] tracking-[-.07em] text-[#111426]">
                  Six ways we
                  <br />
                  become{" "}
                  <em className="font-serif font-normal text-[#ff6948]">
                    your
                  </em>{" "}
                  partner.
                </h2>
              </div>
              <p className="max-w-2xl pb-1 text-xl leading-[1.55] tracking-[-.03em] text-[#56628a] md:text-2xl lg:text-[1.75rem]">
                One senior team owns it end to end — from discovery to
                production to lifetime support. No hand-offs, no offshore
                relays.
              </p>
            </div>
            <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
              {services.map((service, i) => (
                <ServiceCard service={service} index={i} key={service.title} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f5f6ff] px-5 py-20 md:px-10 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <p className="eyebrow mb-10">Why BigwigTechnologies</p>
            <h2 className="text-[clamp(3.5rem,5.45vw,6.5rem)] font-semibold leading-[.91] tracking-[-.07em] text-[#111426]">
              Not a vendor. An{" "}
              <em className="font-serif font-normal text-[#ff6948]">
                extension
              </em>{" "}
              of your team.
            </h2>
            <p className="mt-8 text-xl leading-[1.55] tracking-[-.03em] text-[#56628a] md:text-2xl lg:text-[1.75rem]">
              Why clients return with us — and refer us.
            </p>
            <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#c8cedd] bg-white shadow-[0_16px_32px_rgba(61,68,99,0.07)] lg:mt-20 lg:grid lg:grid-cols-3">
              {[
                {
                  title: "Lifetime support, never a sunset clause.",
                  description:
                    "Every product Bigwigships comes with lifetime support — no 30-day window, no expiring SLA, no surprise re-engagement fee. Bug fixes, OS-version compatibility, and security patches for the lifetime of the system, on the original team that built it.",
                  icon: ShieldCheck,
                },
                {
                  title: "Customised solutions, not templates",
                  description:
                    "Every engagement begins with a discovery sprint. We do not ship pre-fab themes or recycled architectures. Each system we build is engineered around the customer behaviour, regulatory context, and growth thesis of the business buying it.",
                  icon: Code2,
                },
                {
                  title: "Long-term partnerships, not transactions",
                  description:
                    "Our average client tenure exceeds three years. We staff retainers with the same engineers who built the original system — so institutional knowledge stays with the people writing the next feature.",
                  icon: UsersRound,
                },
                {
                  title: "Senior expertise, not seat warmers.",
                  description:
                    "The people shaping the product are the people building it: experienced specialists who make sound decisions and communicate clearly.",
                  icon: Sparkles,
                },
                {
                  title: "Flexible access, every service you need.",
                  description:
                    "One accountable team brings product thinking, design, engineering and ongoing support together when you need them.",
                  icon: Layers3,
                },
                {
                  title: "Outcomes prized, not hours billed.",
                  description:
                    "We focus on the useful work that moves your product forward, with transparent priorities and progress you can measure.",
                  icon: Target,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <article
                    className={`p-8 md:p-12 ${i % 3 !== 0 ? "lg:border-l lg:border-[#c8cedd]" : ""} ${i >= 3 ? "border-t border-[#c8cedd]" : ""}`}
                    key={item.title}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-5xl italic leading-none tracking-[-.06em] text-[#ff6948]">
                        0{i + 1}
                      </span>
                      <Icon
                        className="text-[#5c678d]"
                        size={29}
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="mt-8 text-[1.55rem] font-semibold leading-[1.15] tracking-[-.045em] text-[#171a2a]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-[38rem] text-lg leading-[1.62] tracking-[-.02em] text-[#56628a]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-[#f5f6ff] px-5 py-20 md:px-10 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[1.45fr_.85fr] lg:items-end lg:gap-20">
              <div>
                <p className="eyebrow mb-10">Client voice</p>
                <h2 className="text-[clamp(3.5rem,5.45vw,6.5rem)] font-semibold leading-[.91] tracking-[-.07em] text-[#111426]">
                  What it&apos;s like to{" "}
                  <em className="font-serif font-normal text-[#ff6948]">
                    build with us.
                  </em>
                </h2>
              </div>
              <p className="max-w-2xl pb-1 text-xl leading-[1.55] tracking-[-.03em] text-[#56628a] md:text-2xl lg:text-[1.75rem]">
                A handful of the people who have lived through a project with
                us.
              </p>
            </div>
            <div className="mt-16 lg:mt-20">
              <TestimonialCarousel />
            </div>
            <div className="hidden">
              {[
                "They&apos;re candid, technically excellent and always pushing our thinking forward.",
                "BigwigTechnologies provided outstanding support from day one - focused, calm, and deeply invested.",
                "Their team has the rare ability to turn complex ideas into a working product quickly.",
              ].map((quote) => (
                <blockquote
                  className="rounded-xl bg-white p-5 text-xs leading-5 shadow-sm"
                  key={quote}
                >
                  <span className="text-[#ff6948]">*****</span>
                  <p className="mt-3">&quot;{quote}&quot;</p>
                  <footer className="mt-5 text-[10px] font-bold text-slate-500">
                    Client partner · SaaS founder
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="hidden">
              {[
                ["5.0", "Clutch rating"],
                ["3+ YRS", "Average partnership"],
                ["10+", "Countries"],
                ["6 / 6", "Client referrals"],
              ].map(([a, b]) => (
                <div key={a}>
                  <b className="text-lg">{a}</b>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="bg-[#f5f6ff] px-5 py-20 md:px-10 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            

            <div className="flex justify-center">
              <span className="rounded-full border border-[#8adfca] bg-[#dff8f1] px-7 py-2.5 text-base font-semibold uppercase tracking-[0.35em] text-[#00b48d]">
                Global Reach
              </span>
            </div>


            <h2 className="mx-auto mt-8 max-w-4xl text-center text-[clamp(2.5rem,3.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.06em] text-[#111426]">
              Two locations. Ten countries served.
            </h2>


            <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-[1.55] tracking-[-0.03em] text-[#56628a] md:text-2xl lg:text-[1.75rem]">
              Engineering hub in Gurugram with a North American office in
              Silicon Valley — follow-the-sun coverage for every client, no
              matter the time zone.
            </p>


            <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">

              <div className="mx-auto w-full max-w-md text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#8adfca] bg-[#dff8f1] px-5 py-2 text-base font-medium text-[#00a887]">
                  <MapPin size={16} />
                  United States
                </span>

                <h3 className="mt-7 text-[1.65rem] font-semibold tracking-[-0.04em] text-[#111426]">
                  Milpitas, California
                </h3>

                <p className="mt-5 font-mono text-lg leading-9 text-[#5d6683]">
                  PO Box 1090, S Milpitas Blvd, PMB 2006
                  <br />
                  Milpitas, CA 95035, United States
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-lg text-[#657196]">
                  <Clock3 size={18} />
                  America/Los Angeles
                </div>
              </div>


              <div className="mx-auto w-full max-w-md text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d6c4ff] bg-[#f0eaff] px-5 py-2 text-base font-medium text-[#7a5cff]">
                  <MapPin size={16} />
                  India
                </span>

                <h3 className="mt-7 text-[1.65rem] font-semibold tracking-[-0.04em] text-[#111426]">
                  Gurugram, India
                </h3>

                <p className="mt-5 font-mono text-lg leading-9 text-[#5d6683]">
                  SVH 83, Office No. 1022, Metro Street, Sector 83
                  <br />
                  Gurugram, Haryana 122004, India
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-lg text-[#657196]">
                  <Clock3 size={18} />
                  Asia/Kolkata
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-[#f1f2fc] px-5 py-20 md:px-10 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1800px] text-center">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.36em] text-[#ff6948] md:text-base">
              Our AI Pipeline
            </p>
            <h2 className="mx-auto mt-10 max-w-5xl text-[clamp(2.55rem,4.1vw,4rem)] font-medium leading-[1.06] tracking-[-0.06em] text-[#090c20]">
              A deliberate path from data
              <br />
              ingestion to deployment.
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-lg leading-[1.55] tracking-[-0.025em] text-[#536087] md:text-2xl lg:text-[1.7rem]">
              We don&apos;t do blind execution or simple API wrappers. We
              de-risk every AI project through a structured, deep-tech pipeline
              that aligns machine learning with business outcomes.
            </p>
            <div className="mt-20 grid gap-7 text-left md:grid-cols-2 xl:grid-cols-4 xl:gap-9">
              {approach.map((step, index) => (
                <article
                  className="min-h-[330px] rounded-[1.7rem] border border-[#dfe1ea] bg-white p-8 shadow-[0_1px_2px_rgba(16,19,38,0.03)] md:p-10"
                  key={step.title}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-3xl leading-none"
                      role="img"
                      aria-label=""
                    >
                      {step.icon}
                    </span>
                    <span className="text-[2.5rem] font-semibold leading-none tracking-[-0.06em] text-[#ffd1c5]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-9 max-w-[14rem] text-[1.7rem] font-medium leading-[1.18] tracking-[-0.045em] text-[#090c20]">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-lg leading-[1.58] tracking-[-0.025em] text-[#536087]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ScrollFaq />
        <section className="bg-[linear-gradient(120deg,#eaeaff,#f3f0ff)] px-5 py-16 text-center md:px-10">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="section-title mt-3">
            Have a problem worth
            <br />
            <em>solving well?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-slate-500">
            Tell us about your product, your timeline, and your constraints.
            We&apos;ll reply within one business day with an honest next step.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <button className="rounded-full bg-[#ff6948] px-5 py-3 text-xs font-bold text-white">
              Book a consultation{" "}
              <ArrowRight className="ml-1 inline" size={13} />
            </button>
            <button className="rounded-full bg-white px-5 py-3 text-xs font-bold">
              Email us directly
            </button>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function Metric({ n, t }: { n: string; t: string; c: string }) {
  const rating = n === "5.0";
  return (
    <div className={`metric-card ${rating ? "metric-rating" : ""}`}>
      <b className="metric-number">{n}</b>
      {rating && <span className="metric-out-of">/ 5.0</span>}
      <div className="metric-copy">
        {rating && <span className="metric-stars">★★★★★</span>}
        <span>{t}</span>
      </div>
    </div>
  );
}

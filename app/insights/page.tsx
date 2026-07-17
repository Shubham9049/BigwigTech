import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Clock3, Mail } from "lucide-react";

const disciplines = [
  "AI & ML",
  "AI Agents",
  "SaaS & Platforms",
  "Operations & ERP",
  "Mobile & IoT",
  "Streaming",
  "Infrastructure",
  "Product practice",
];

const team = [
  {
    name: "Vipul Dutta",
    role: "Founder",
    initials: "VD",
    description:
      "Guiding product direction and helping ambitious ideas become practical, valuable software.",
  },
  {
    name: "Devashish Kumar",
    role: "Full Stack Developer",
    initials: "DK",
    description:
      "Building clean, responsive product experiences from the interface through to dependable APIs.",
  },
  {
    name: "Chandan Kumar",
    role: "Full Stack Developer",
    initials: "CK",
    description:
      "Turning complex requirements into reliable features, thoughtful workflows and maintainable code.",
  },
  {
    name: "Shubham Kumar",
    role: "Full Stack Developer",
    initials: "SK",
    description:
      "Creating scalable web solutions with careful attention to performance, usability and quality.",
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-[#f5f6fd] text-[#171a2d]">
      <section className="border-b border-[#dfe3f0] bg-[linear-gradient(110deg,#fff7f5_0%,#f5f6fd_50%,#e9edff_100%)] px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            className="text-base font-medium text-[#687391]"
          >
            <Link href="/" className="transition hover:text-[#ff6948]">
              Home
            </Link>
            <span className="mx-2 text-[#a4abc0]" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Insights</span>
          </nav>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">
                Insights
              </p>
              <h1 className="mt-5 text-[clamp(3rem,5.5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.07em]">
                Notes from{" "}
                <span className="block font-serif font-normal text-[#ff6948]">
                  the build.
                </span>
              </h1>
            </div>
            <div className="border-l border-[#d8ddeb] pl-6 lg:mb-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6948]">
                What this is
              </p>
              <p className="mt-4 text-lg leading-8 text-[#56628a]">
                Practical notes on the systems we build, the decisions behind
                them, and the lessons worth sharing along the way.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 border-t border-[#dfe3f0] pt-7 sm:grid-cols-3">
            <Metric value="Real" label="work, plainly shared" />
            <Metric value="0" label="filler posts or fluff" />
            <Metric value="1" label="useful idea at a time" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">
                The journal
              </p>
              <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.8rem)] font-semibold leading-[.94] tracking-[-.065em]">
                Blogs are{" "}
                <em className="font-serif font-normal text-[#ff6948]">
                  coming soon.
                </em>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#56628a]">
              We are preparing thoughtful articles from the work our team is
              doing now. Come back soon for engineering notes, product lessons
              and honest technical perspectives.
            </p>
          </div>

          <div className="mt-12 grid place-items-center rounded-[2rem] border border-dashed border-[#b9c2da] bg-white px-6 py-16 text-center shadow-[0_16px_40px_rgba(53,63,109,.06)] md:py-24">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff6948]">
              <BookOpen size={30} />
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-.045em]">
              Our first blogs are on the way.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#62708f]">
              This space will soon feature case studies, product thinking and
              practical notes from the Bigwig team.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#dce1ef] bg-[#f8f9fe] px-5 py-3 text-base font-medium text-[#6b7693]">
              <Clock3 size={18} /> Blogs coming soon
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe3f0] bg-[#e9ecf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-9 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">
                What we write about
              </p>
              <h2 className="mt-4 text-[clamp(2.5rem,4.4vw,4.7rem)] font-semibold leading-[.94] tracking-[-.065em]">
                The disciplines{" "}
                <em className="font-serif font-normal text-[#ff6948]">
                  behind
                </em>{" "}
                the notes.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#56628a]">
              Every topic is connected to the kind of product work we do: useful
              systems, real constraints and technology in production.
            </p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-[1.8rem] border border-[#dbe0ee] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <article
                key={discipline}
                className="min-h-44 border-b border-[#e2e6f1] p-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <p className="text-sm font-semibold text-[#9aa4bd]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-.03em]">
                  {discipline}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#697594]">
                  Notes from the work, not a content calendar.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-9 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">
                Who writes these
              </p>
              <h2 className="mt-4 text-[clamp(2.5rem,4.4vw,4.7rem)] font-semibold leading-[.94] tracking-[-.065em]">
                The people who{" "}
                <em className="font-serif font-normal text-[#ff6948]">
                  shipped
                </em>{" "}
                it.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#56628a]">
              When the notes arrive, they will be written by the people who
              design, build and support the systems behind them.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-[#dce1ef] bg-white p-7 shadow-[0_12px_30px_rgba(51,62,103,.05)]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(135deg,#ffe6dd,#dce4ff)] text-lg font-bold text-[#394365]">
                  {person.initials}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-.03em]">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[.14em] text-[#ff6948]">
                  {person.role}
                </p>
                <p className="mt-5 text-base leading-7 text-[#687594]">{person.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101426] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9ba8d1]">
            Beyond reading
          </p>
          <h2 className="mt-4 text-[clamp(2.5rem,4.4vw,4.7rem)] font-semibold leading-[.94] tracking-[-.065em]">
            Rather talk it through{" "}
            <em className="font-serif font-normal text-[#ff7a5a]">
              with an engineer?
            </em>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#c0c8e1]">
            Share the problem you are working on. We will bring a useful point
            of view and the right people to the conversation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff6948] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#e95738]"
          >
            Book an intro call <ArrowRight size={19} />
          </Link>
          <a
            href="mailto:hello@bigwigtech.com"
            className="mt-5 flex items-center justify-center gap-2 text-base text-[#c0c8e1] transition hover:text-white"
          >
            <Mail size={17} /> hello@bigwigtech.com <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-[-.05em] text-[#1b2034]">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[.15em] text-[#7b86a5]">
        {label}
      </p>
    </div>
  );
}

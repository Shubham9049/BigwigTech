import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const principles = [
  {
    title: "Senior-only teams",
    body: "The people you meet at the start are the people who stay close to the work, from first workshop to release.",
  },
  {
    title: "Direct collaboration",
    body: "Clear communication, honest trade-offs and a shared view of what matters most keep momentum high.",
  },
  {
    title: "Built to last",
    body: "We make deliberate technical choices so your product remains useful, maintainable and ready to grow.",
  },
  {
    title: "Outcome focused",
    body: "Every decision connects back to the customer experience and the business result it needs to create.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="about-us-page overflow-hidden bg-[#f4f5fc] text-[#171a2d]">
      <section className="relative border-b border-[#dfe3f0] px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_82%_0%,rgba(218,224,255,.9),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1320px]">
          <nav aria-label="Breadcrumb" className="text-base font-medium text-[#687391]">
            <Link href="/" className="transition hover:text-[#ff6948]">
              Home
            </Link>
            <span className="mx-2 text-[#a4abc0]" aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>
          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">
              Bigwig Technologies
            </p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,5.4vw,5.25rem)] font-semibold leading-[.92] tracking-[-.065em]">
              We build digital products with <em className="font-serif font-normal text-[#ff6948]">purpose.</em>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#56628a] md:text-xl md:leading-9">
              Bigwig Technologies is a product engineering partner for ambitious
              teams. We bring strategy, design and dependable engineering
              together to turn complex ideas into products people want to use.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/80 bg-white/90 p-7 shadow-[0_16px_45px_rgba(53,63,109,.07)] md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b86a5]">Mission</p>
              <p className="mt-5 text-lg leading-8 text-[#455274]">
                To help good ideas become useful, reliable software through
                thoughtful product thinking and engineering that holds up in the
                real world.
              </p>
            </article>
            <article className="rounded-3xl border border-[#ffe1d7] bg-[#fffaf8] p-7 shadow-[0_16px_45px_rgba(53,63,109,.07)] md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d46d55]">Vision</p>
              <p className="mt-5 text-lg leading-8 text-[#455274]">
                A world where organisations can move with confidence, supported
                by technology that is clear, calm and built around people.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <span className="pointer-events-none absolute left-1/2 top-[34%] -translate-x-1/2 whitespace-nowrap text-[clamp(5rem,16vw,15rem)] font-semibold leading-none tracking-[-.09em] text-[#dfe3f0]/70">
          LEADERSHIP
        </span>
        <div className="relative mx-auto max-w-[1320px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">Leadership</p>
          <h2 className="mt-4 text-[clamp(2.35rem,4vw,4.3rem)] font-semibold leading-[.95] tracking-[-.06em]">
            Meet the <em className="font-serif font-normal text-[#ff6948]">Founder</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#56628a]">
            One focused leader, backed by a team that cares deeply about the
            quality of every detail.
          </p>

          <div className="mx-auto mt-11 max-w-sm overflow-hidden rounded-[1.8rem] border border-[#dce1ef] bg-white text-left shadow-[0_20px_45px_rgba(45,55,95,.12)]">
            <div className="aspect-[4/5] bg-[linear-gradient(135deg,#e5e9f5,#f8f9fd)] p-5">
              <div className="grid h-full place-items-center rounded-2xl border-2 border-dashed border-[#bac3da] text-center text-base font-medium text-[#73809f]">
                Founder image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-[-.03em]">Vipul Dutta</h3>
              <p className="mt-1 text-base font-medium text-[#ff6948]">Founder, Bigwig Technologies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe3f0] bg-[#e9ecf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">The architects</p>
          <h2 className="mt-4 text-[clamp(2.35rem,4vw,4.3rem)] font-semibold leading-[.95] tracking-[-.06em]">
            Our engineering <em className="font-serif font-normal text-[#ff6948]">masterminds</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#56628a]">
            A compact team of curious problem-solvers who build for modern
            businesses.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {["Team image 01", "Team image 02", "Team image 03", "Team image 04"].map((label) => (
              <div key={label} className="aspect-[4/5] rounded-3xl border-2 border-dashed border-[#b8c1d8] bg-[#f7f8fd] p-4 shadow-[0_12px_28px_rgba(48,59,100,.06)]">
                <div className="grid h-full place-items-center rounded-2xl bg-[#eef1f9] px-3 text-center text-base font-medium text-[#75819f]">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base text-[#697594]">Four image spaces are ready for your team photos.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">Our story</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.8rem)] font-semibold leading-[.94] tracking-[-.065em]">
              Built by people who&apos;d rather <em className="font-serif font-normal text-[#ff6948]">ship</em> than show.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#56628a]">
            <p>
              We started with a simple belief: software projects work better
              when the people doing the work stay close to the people using it.
              That is still how we operate today.
            </p>
            <p>
              From early product decisions to the systems behind a growing
              business, we are a practical extension of your team. We ask good
              questions, explain trade-offs plainly and keep the work moving.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1320px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-3xl border border-[#dce1ef] bg-white p-7 shadow-[0_12px_30px_rgba(51,62,103,.05)]">
              <h3 className="text-xl font-semibold tracking-[-.03em]">{principle.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#62708f]">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#dfe3f0] bg-[#e8ebfa] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7b86a5]">Global reach</p>
          <h2 className="mt-4 text-[clamp(2.35rem,4vw,4.3rem)] font-semibold leading-[.95] tracking-[-.06em]">
            Two locations. Ten countries served.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#56628a]">
            Our team works across time zones while staying connected to the
            outcomes that matter to you.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 text-left md:grid-cols-2">
            <Office city="Milpitas, California" address="PO Box 1090, S Milpitas Blvd, PMB 2006, Milpitas, CA 95035, United States" />
            <Office city="Gurugram, India" address="SVH 83, Office No. 1022, Metro Street, Sector 83, Gurugram, Haryana 122004, India" />
          </div>
        </div>
      </section>

      <section className="bg-[#dfe4ff] px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6f7aa0]">Ready to build</p>
          <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.8rem)] font-semibold leading-[.94] tracking-[-.065em]">
            Have a problem worth <em className="font-serif font-normal text-[#ff6948]">solving well?</em>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#56628a]">
            Tell us about the product or platform you want to make better. We&apos;ll
            bring the right people to the conversation.
          </p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff6948] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(255,105,72,.28)] transition hover:bg-[#e95738]">
            Book an intro call <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Office({ city, address }: { city: string; address: string }) {
  return (
    <article className="rounded-3xl border border-[#d6dcee] bg-white/75 p-7">
      <div className="flex items-center gap-3 text-[#ff6948]">
        <MapPin size={21} />
        <h3 className="text-xl font-semibold text-[#1b2034]">{city}</h3>
      </div>
      <p className="mt-4 text-base leading-7 text-[#62708f]">{address}</p>
    </article>
  );
}

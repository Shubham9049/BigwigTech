"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const questions = [
  {
    question: "What is CODT Technologies?",
    answer:
      "CODT Technologies is an enterprise software engineering firm that designs, builds, and operates production software — mobile apps, SaaS platforms, AI agents, and IoT systems — for founders, scale-ups, and enterprises.",
  },
  {
    question: "What services does CODT Technologies offer?",
    answer:
      "We cover the full product lifecycle: mobile and web app development, SaaS platforms, custom product engineering, AI and AI agents, IoT systems, UI/UX design, data engineering, DevOps, cloud, and business automation.",
  },
  {
    question: "Where is CODT Technologies located?",
    answer:
      "Our teams work across India and California, supporting ambitious companies in more than ten countries with close, senior-level collaboration from discovery through launch and beyond.",
  },
  {
    question: "How do I start a project with CODT Technologies?",
    answer:
      "Start with a conversation about your product, goals, timeline, and constraints. We will help shape the clearest next step — whether that is discovery, a focused sprint, or a delivery plan.",
  },
  {
    question: "Why do clients choose CODT Technologies?",
    answer:
      "Clients choose us for senior expertise, accountable partnership, and software built around real outcomes. The same people who shape the product stay close to the work as it grows.",
  },
];

export default function ScrollFaq() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    if (!section || !heading || cards.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top+=128",
          end: "bottom bottom",
          pin: heading,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });

      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.from(cards, {
            autoAlpha: 0,
            y: 28,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          });
        },
      );
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="faq-scroll-section bg-[#f5f6ff] px-5 py-20 md:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1650px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-24">
        <header ref={headingRef}>
          <p className="eyebrow mb-10 text-[#ff6948]">Frequently asked</p>
          <h2 className="text-[clamp(3.5rem,5.45vw,6.5rem)] font-semibold leading-[.91] tracking-[-.07em] text-[#111426]">
            Questions, answered.
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-[1.55] tracking-[-.03em] text-[#56628a] md:text-2xl">
            The essentials on who we are, what we build, and how to get started.
          </p>
          <p className="mt-10 hidden text-sm font-medium text-[#7a84a4] lg:block">
            Scroll to explore
          </p>
        </header>

        <div>
          {questions.map((item, index) => (
            <article
              className="faq-scroll-card border-t border-[#dce0ea] py-8 first:border-t-0 first:pt-0 lg:py-9"
              ref={(element) => {
                if (element) cardsRef.current[index] = element;
              }}
              key={item.question}
            >
              <span className="mb-5 block font-mono text-sm tracking-[.2em] text-[#ff6948] lg:hidden">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-.04em] text-[#111426] md:text-[1.9rem]">
                {item.question}
              </h3>
              <p className="mt-5 max-w-4xl text-base leading-[1.65] tracking-[-.015em] text-[#56628a] md:text-lg lg:mt-6 lg:text-[1.3rem]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

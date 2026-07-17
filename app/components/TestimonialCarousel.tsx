"use client";

import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Over 8 years, Bigwig Technologies delivered an exceptional ERP system for FeelEat, showcasing top-notch project management, technical expertise, and proactive problem-solving. Their innovative and cost-effective solutions consistently exceeded expectations, ensuring smooth and efficient operations.",
    name: "Jonathan Strauss",
    role: "Co-Founder · FeelEat",
    initials: "JS",
    avatar: "bg-[#f2be8c]",
  },
  {
    quote:
      "Bigwig Technologies provided outstanding solutions, ensuring smooth integration. Skilled team expertly managed projects, delivering creative insights and progressive strategies. Bigwig Technologies emerged as an invaluable, exceptional partner in Happy Bee's success.",
    name: "Marco Barboza",
    role: "Co-Founder · Happy Bee",
    initials: "MB",
    avatar: "bg-[#876a57]",
  },
  {
    quote:
      "We brought CODT in for a six-week scoping sprint and kept them on for two years. The same architect ran the whole engagement — that's why our roadmap actually shipped.",
    name: "Joel Hermann",
    role: "Operations Head · FeelEat",
    initials: "JH",
    avatar: "bg-[linear-gradient(135deg,#f36d5e,#7564df)]",
  },
  {
    quote:
      "The team was clear, proactive, and deeply invested from the first workshop. We always knew what was being built, why it mattered, and what came next.",
    name: "Anita Kapoor",
    role: "Product Director · SaaS",
    initials: "AK",
    avatar: "bg-[#6c9cb0]",
  },
  {
    quote:
      "They combine the care of an in-house team with the pace and focus of a brilliant specialist partner. Our customers noticed the difference immediately.",
    name: "Daniel Foster",
    role: "Founder · LeadTrack",
    initials: "DF",
    avatar: "bg-[#7c9364]",
  },
  {
    quote:
      "CODT made a complicated product feel manageable. Their team earned trust quickly, then delivered the kind of quality that makes you want to keep building together.",
    name: "Sara Mehta",
    role: "CEO · TapTime",
    initials: "SM",
    avatar: "bg-[#b7779d]",
  },
];

export default function TestimonialCarousel() {
  const [start, setStart] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const changeSlide = useCallback(
    (direction: 1 | -1) => {
      const next =
        (start + direction + testimonials.length) % testimonials.length;
      if (cardsRef.current && !reduceMotion.current) {
        gsap.to(cardsRef.current, {
          opacity: 0,
          x: direction * -36,
          duration: 0.24,
          ease: "power2.in",
          onComplete: () => {
            setStart(next);
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, x: direction * 36 },
              { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            );
          },
        });
      } else setStart(next);
    },
    [start],
  );

  useEffect(() => {
    const timer = window.setInterval(() => changeSlide(1), 5500);
    return () => window.clearInterval(timer);
  }, [changeSlide]);

  const visible = Array.from(
    { length: 3 },
    (_, index) => testimonials[(start + index) % testimonials.length],
  );

  return (
    <>
      <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
        {visible.map((testimonial) => (
          <article
            className="flex min-h-[370px] flex-col rounded-[1.5rem] border border-[#dcdfea] bg-white p-8 shadow-[0_12px_24px_rgba(61,68,99,0.07)] lg:min-h-[430px] lg:p-10"
            key={testimonial.name}
          >
            <div className="text-lg tracking-[.14em] text-[#ffb20c]">★★★★★</div>
            <blockquote className="mt-6 text-[1.35rem] leading-[1.56] tracking-[-.035em] text-[#191d2d] lg:text-[1.2rem]">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-auto flex items-center gap-4 border-t border-[#dfe2ea] pt-5">
              <span
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-base font-semibold text-white ${testimonial.avatar}`}
              >
                {testimonial.initials}
              </span>
              <div>
                <p className="text-lg font-semibold tracking-[-.035em] text-[#171a2a]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-base text-[#56628a]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-9 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous testimonials"
          className="grid h-14 w-14 place-items-center rounded-full border border-[#d8dce7] text-[#15192b] transition hover:border-[#ff7758] hover:text-[#ff7758]"
        >
          <ChevronLeft size={23} />
        </button>
        <div className="flex gap-3" aria-label="Testimonial slide indicators">
          {[0, 1].map((dot) => (
            <button
              type="button"
              onClick={() => setStart(dot * 3)}
              aria-label={`Show testimonial group ${dot + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${Math.floor(start / 3) === dot ? "w-10 bg-[#ff6948]" : "w-3 bg-[#c8cedc]"}`}
              key={dot}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next testimonials"
          className="grid h-14 w-14 place-items-center rounded-full border border-[#d8dce7] text-[#15192b] transition hover:border-[#ff7758] hover:text-[#ff7758]"
        >
          <ChevronRight size={23} />
        </button>
      </div>
    </>
  );
}

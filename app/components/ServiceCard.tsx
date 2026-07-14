"use client";

import { gsap } from "gsap";
import { Layers3, Smartphone, Sparkles } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

type Service = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon === "sparkles" ? Sparkles : service.icon === "smartphone" ? Smartphone : Layers3;

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.set(card, { transformPerspective: 900, transformOrigin: "center center" });
    }, card);

    return () => context.revert();
  }, []);

  const animateIn = () => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.to(cardRef.current, { y: -10, scale: 1.008, duration: 0.55, ease: "power3.out", boxShadow: "0 28px 52px rgba(61,68,99,0.18)", borderColor: "#ffb8a5", overwrite: "auto" });
    gsap.to(iconRef.current, { rotation: 8, scale: 1.12, duration: 0.55, ease: "back.out(2)", backgroundColor: "#fff0eb", overwrite: "auto" });
    gsap.to(numberRef.current, { color: "#ff6948", duration: 0.3, ease: "power2.out", overwrite: "auto" });
    gsap.to(tagsRef.current?.children ?? [], { y: -2, borderColor: "#ffc8b9", backgroundColor: "#fff8f5", duration: 0.35, stagger: 0.035, ease: "power2.out", overwrite: "auto" });
  };

  const animateOut = () => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.to(cardRef.current, { y: 0, scale: 1, duration: 0.65, ease: "elastic.out(1, 0.7)", boxShadow: "0 16px 32px rgba(61,68,99,0.09)", borderColor: "#dcdfea", overwrite: "auto" });
    gsap.to(iconRef.current, { rotation: 0, scale: 1, duration: 0.45, ease: "power3.out", backgroundColor: "#eef0ff", overwrite: "auto" });
    gsap.to(numberRef.current, { color: "#56628a", duration: 0.3, overwrite: "auto" });
    gsap.to(tagsRef.current?.children ?? [], { y: 0, borderColor: "#dfe2ea", backgroundColor: "#ffffff", duration: 0.3, stagger: 0.02, ease: "power2.out", overwrite: "auto" });
  };

  return (
    <article ref={cardRef} onPointerEnter={animateIn} onPointerLeave={animateOut} className="min-h-[315px] rounded-[2rem] border border-[#dcdfea] bg-white p-8 shadow-[0_16px_32px_rgba(61,68,99,0.09)] will-change-transform md:p-9">
      <div className="flex items-start justify-between">
        <span ref={iconRef} className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eef0ff] text-[#ff6948] will-change-transform"><Icon size={25} strokeWidth={1.8} /></span>
        <span ref={numberRef} className="font-mono text-sm text-[#56628a]">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-.04em] text-[#15192b]">{service.title}</h3>
      <p className="mt-3 max-w-[44rem] text-lg leading-[1.6] tracking-[-.02em] text-[#56628a]">{service.description}</p>
      <div ref={tagsRef} className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => <span className="rounded-full border border-[#dfe2ea] px-3.5 py-1.5 font-mono text-sm text-[#56628a]" key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

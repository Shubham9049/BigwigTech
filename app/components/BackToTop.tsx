"use client";

import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const SHOW_AFTER_SCROLL = 240;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const updateVisibility = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    gsap.killTweensOf(window);
    gsap.to(window, {
      duration: 0.8,
      ease: "power3.out",
      scrollTo: { y: 0, autoKill: true },
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-[5.5rem] left-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-[#0d0f21] shadow-[0_10px_25px_-10px_rgba(15,15,40,0.25)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6948] md:bottom-8 md:left-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}

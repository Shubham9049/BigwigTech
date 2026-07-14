"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Globe,
  Moon,
  Sun,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navigationItems = ["Home", "Services", "Industries", "Portfolio", "Insights", "About Us", "Contact"];

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => typeof window !== "undefined" && (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)));
  const [language, setLanguage] = useState(() => typeof window === "undefined" ? "EN" : localStorage.getItem("language") || "EN");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const changeLanguage = (value: string) => {
    setLanguage(value);
    localStorage.setItem("language", value);
    document.documentElement.lang = value.toLowerCase();
  };

  return (
    <motion.header
      initial={false}
      animate={{
        y: sticky ? 15 : 0,
        width: sticky ? "92%" : "100%",
      }}
      transition={{
        duration: .35,
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-50
      ${
        sticky
          ? "top-0 bg-white shadow-xl rounded-full border border-neutral-200 backdrop-blur-md"
          : "top-5 bg-transparent"
      }`}
    >
      <div className="flex h-20 items-center justify-between gap-5 px-6 xl:px-8">

        {/* Logo */}

        <Link href="/" className="flex shrink-0 items-center gap-3">
  <Image
    src="/bigwig-logo.png"
    alt="Bigwig Logo"
    width={180}
    height={60}
    priority
    className="h-10 w-auto"
  />
</Link>

        {/* Center */}

        <nav className="hidden min-[1280px]:flex shrink-0 items-center gap-4 xl:gap-6 2xl:gap-8">

          {navigationItems.map((item, i) => (
            <Link
              key={i}
              href="/"
              className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-[#ff6435] xl:text-base"
            >
              {item}

              {(item == "Services" ||
                item == "Industries" ||
                item == "Portfolio") && (
                <ChevronDown size={17} />
              )}
            </Link>
          ))}

        </nav>

        {/* Right */}

        <div className="hidden min-[1280px]:flex shrink-0 items-center gap-3 text-gray-700">

          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="theme-toggle h-12 w-12 rounded-full border flex justify-center items-center">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <label className="language-picker h-12 rounded-full border px-4 flex items-center gap-2 text-sm">
            <Globe size={19} />
            <select value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Select language">
              <option value="EN">EN</option><option value="HI">HI</option><option value="DE">DE</option>
            </select>
            <ChevronDown size={16} />
          </label>

          <button className="flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-[#0d1022] px-6 text-sm text-white transition hover:bg-black"
          >
            Book a Call
            <ArrowRight size={18} />
          </button>

        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#d8dce7] bg-white/90 text-[#0d1022] shadow-sm transition hover:border-[#ff6948] hover:text-[#ff6948] min-[1280px]:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mb-3 rounded-3xl border border-[#d8dce7] bg-white p-4 shadow-xl min-[1280px]:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navigationItems.map((item) => (
                <Link key={item} href="/" onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-[#fff0eb] hover:text-[#ff6435]">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#e5e7ef] pt-4">
              <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className="theme-toggle grid h-11 w-11 place-items-center rounded-full border">
                {dark ? <Sun size={19} /> : <Moon size={19} />}
              </button>
              <label className="language-picker flex h-11 flex-1 items-center gap-2 rounded-full border px-4 text-sm">
                <Globe size={18} />
                <select value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Select language" className="min-w-0 flex-1">
                  <option value="EN">EN</option><option value="HI">HI</option><option value="DE">DE</option>
                </select>
                <ChevronDown size={16} />
              </label>
              <button type="button" className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0d1022] px-4 text-sm text-white">
                Book a Call <ArrowRight size={16} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

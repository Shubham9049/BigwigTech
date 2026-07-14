"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Globe,
  Moon,
  Sun,
  ArrowRight,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
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
      <div className="h-20 flex items-center justify-between px-8">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
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

        <nav className="hidden lg:flex gap-5 xl:gap-8">

          {[
            "Home",
            "Services",
            "Industries",
            "Portfolio",
            "Insights",
            "About Us",
            "Contact",
          ].map((item, i) => (
            <Link
              key={i}
              href="/"
              className="flex items-center gap-1 text-md text-gray-700 font-medium hover:text-[#ff6435] transition"
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

        <div className="hidden lg:flex items-center gap-3 text-gray-700">

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

          <button className="bg-[#0d1022] text-white rounded-full px-6 h-12 flex items-center gap-2 text-sm hover:bg-black transition"
          >
            Book a Call
            <ArrowRight size={18} />
          </button>

        </div>

        <button className="lg:hidden">
          <Menu />
        </button>

      </div>
    </motion.header>
  );
}

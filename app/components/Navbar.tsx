"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Moon, Sun, ArrowRight, Menu, X } from "lucide-react";
import ServicesMegaMenu from "./ServicesMegaMenu";
import LanguageSelector from "./LanguageSelector";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/insights" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay?: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
  }
}
export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    const loadGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const script = document.createElement("script");

        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

        script.async = true;

        document.body.appendChild(script);

        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    loadGoogleTranslateScript();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <motion.header
      ref={headerRef}
      initial={false}
      animate={{
        y: sticky ? 15 : 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`fixed left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 min-[1280px]:w-[92%]
      ${
        sticky
          ? "top-0 rounded-[2rem] border border-neutral-200 bg-white shadow-xl backdrop-blur-md min-[1280px]:w-[92%] min-[1280px]:rounded-full"
          : "top-5 bg-transparent min-[1280px]:w-[92%]"
      }`}
    >
      <div className="flex h-20 items-center justify-between gap-5 px-4 sm:px-6 xl:px-8">
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
          {navigationItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu("services")}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMenu((menu) =>
                        menu === "services" ? null : "services",
                      )
                    }
                    aria-expanded={activeMenu === "services"}
                    aria-controls="services-mega-menu"
                    className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-[#ff6435] xl:text-base"
                  >
                    Services
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        activeMenu === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-[#ff6435] xl:text-base"
              >
                {item.name}

                {(item.name === "Industries" || item.name === "Portfolio") && (
                  <ChevronDown size={17} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}

        <div className="hidden min-[1280px]:flex shrink-0 items-center gap-3 text-gray-700">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="theme-toggle h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <Sun size={20} className="hidden dark:block" />
            <Moon size={20} className="block dark:hidden" />
          </button>

          <LanguageSelector />

          <button className="flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-[#0d1022] px-6 text-sm text-white transition hover:bg-black">
            Book a Call
            <ArrowRight size={18} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#d8dce7] bg-white/90 text-[#0d1022] shadow-sm transition hover:border-[#ff6948] hover:text-[#ff6948] min-[1280px]:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {activeMenu === "services" && (
          <ServicesMegaMenu
            onNavigate={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </AnimatePresence>
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
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-[#fff0eb] hover:text-[#ff6435]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#e5e7ef] pt-4">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="theme-toggle grid h-11 w-11 place-items-center rounded-full border"
              >
                <Sun size={19} className="hidden dark:block" />
                <Moon size={19} className="block dark:hidden" />
              </button>
              <div className="notranslate">
                <LanguageSelector />
              </div>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0d1022] px-4 text-sm text-white"
              >
                Book a Call <ArrowRight size={16} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

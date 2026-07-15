"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "en", label: "EN", title: "English" },
  { code: "hi", label: "HI", title: "Hindi" },
  { code: "bn", label: "BN", title: "Bengali" },
  { code: "te", label: "TE", title: "Telugu" },
  { code: "mr", label: "MR", title: "Marathi" },
  { code: "ta", label: "TA", title: "Tamil" },
  { code: "gu", label: "GU", title: "Gujarati" },
  { code: "pa", label: "PA", title: "Punjabi" },
  { code: "ar", label: "AR", title: "Arabic" },
  { code: "fr", label: "FR", title: "French" },
  { code: "de", label: "DE", title: "German" },
  { code: "es", label: "ES", title: "Spanish" },
  { code: "it", label: "IT", title: "Italian" },
  { code: "pt", label: "PT", title: "Portuguese" },
  { code: "ru", label: "RU", title: "Russian" },
  { code: "zh-CN", label: "ZH", title: "Chinese (Simplified)" },
  { code: "ja", label: "JA", title: "Japanese" },
  { code: "ko", label: "KO", title: "Korean" },
  { code: "id", label: "ID", title: "Indonesian" },
  { code: "tr", label: "TR", title: "Turkish" },
];

type LanguageSelectorProps = {
  className?: string;
  variant?: "navbar" | "footer" | "mobile";
};

function getSavedLanguage() {
  if (typeof window === "undefined") return "en";
  const savedLanguage = localStorage.getItem("language");
  return savedLanguage && languages.some((item) => item.code === savedLanguage)
    ? savedLanguage
    : "en";
}

function writeGoogleTranslateCookie(language: string) {
  document.cookie =
    language === "en"
      ? "googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax"
      : `googtrans=/en/${language};path=/;SameSite=Lax`;
}

export default function LanguageSelector({
  className = "",
  variant = "navbar",
}: LanguageSelectorProps) {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved && languages.some((item) => item.code === saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const selectLanguage = (nextLanguage: string) => {
    setLanguage(nextLanguage);
    setOpen(false);
    localStorage.setItem("language", nextLanguage);

    // Matches the provided Google Translate integration when its script is present.
    writeGoogleTranslateCookie(nextLanguage);
    window.location.reload();
  };

  const buttonSize = variant === "footer" ? "h-[60px] px-5" : "h-12 px-4";

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`language-selector flex ${buttonSize} w-full items-center justify-center gap-2 rounded-full border border-[#c9cfdf] bg-white/55 text-sm font-semibold text-[#252c45] shadow-[0_5px_16px_rgba(45,56,94,.06)] transition hover:border-[#7e8cff] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4057f4]`}
      >
        <Globe2 size={variant === "footer" ? 21 : 19} strokeWidth={1.9} />
        <span>{selectedLanguage.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-[100] mt-3 w-72 overflow-hidden rounded-[22px] border border-[#d7dceb] bg-[#fbfcff] p-2 shadow-[0_24px_65px_rgba(34,45,82,.2)]"
          role="listbox"
          aria-label="Select language"
        >
          <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#7b86a5]">
            Choose language
          </p>
          <div className="max-h-80 overflow-y-auto pr-1">
            {languages.map((item) => {
              const selected = language === item.code;
              return (
                <button
                  type="button"
                  key={item.code}
                  role="option"
                  aria-selected={selected}
                  onClick={() => selectLanguage(item.code)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${selected ? "bg-[#edf0ff] text-[#4057f4]" : "text-[#394561] hover:bg-[#f0f3fa]"}`}
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-lg text-[10px] font-bold tracking-wide ${selected ? "bg-[#4057f4] text-white" : "bg-[#e7ebf5] text-[#64708e]"}`}
                  >
                    {item.label}
                  </span>
                  <span className="flex-1 text-sm font-medium">
                    {item.title}
                  </span>
                  {selected && <Check size={16} strokeWidth={2.4} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

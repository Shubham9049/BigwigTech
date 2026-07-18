"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PREFERENCES_HASH = "#cookie-preferences";
const STORAGE_KEY = "bigwig-cookie-preferences";

type Preferences = {
  analytics: boolean;
  updatedAt: string;
};

export default function CookiePreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === PREFERENCES_HASH) {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          try {
            setAnalytics((JSON.parse(stored) as Preferences).analytics);
          } catch {
            window.localStorage.removeItem(STORAGE_KEY);
          }
        }
        setIsOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function close() {
    setIsOpen(false);
    setIsManaging(false);
    if (window.location.hash === PREFERENCES_HASH) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }

  function savePreferences(nextAnalytics: boolean) {
    const preferences: Preferences = {
      analytics: nextAnalytics,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    close();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-[#101426]/10 p-3 sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="w-full max-w-[770px] rounded-[1.3rem] border border-white/80 bg-white px-6 py-6 text-[#171a2d] shadow-[0_18px_45px_rgba(28,36,69,.22)] sm:px-7 sm:py-6"
      >
        <h2
          id="cookie-preferences-title"
          className="text-xl font-semibold tracking-[-.035em]"
        >
          We respect your privacy
        </h2>
        <p className="mt-3 max-w-[680px] text-[15px] leading-6 text-[#58668b]">
          We use cookies for essential site features and, with your consent, for
          analytics that help us improve. Read our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#f16649] underline underline-offset-4"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/cookie-policy"
            className="text-[#f16649] underline underline-offset-4"
          >
            Cookie Policy
          </Link>{" "}
          to learn more.
        </p>

        {isManaging && (
          <label className="mt-5 flex items-center justify-between gap-5 rounded-2xl border border-[#dce1ed] bg-[#f7f8fc] px-4 py-3 text-sm text-[#4f5d81]">
            <span>
              <strong className="block text-[#20263c]">
                Analytics cookies
              </strong>
              Help us understand how the site is used.
            </span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
              className="h-5 w-5 accent-[#5a5cf0]"
            />
          </label>
        )}

        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => setIsManaging((open) => !open)}
            className="h-11 rounded-full px-4 text-sm font-semibold text-[#566386] transition hover:bg-[#f2f4fa]"
          >
            {isManaging ? "Save selected" : "Manage preferences"}
          </button>
          <button
            type="button"
            onClick={() => savePreferences(false)}
            className="h-11 rounded-full border border-[#d8dce7] bg-[#f3f4f7] px-5 text-sm font-semibold text-[#2a3045] transition hover:border-[#c7cddb] hover:bg-[#e9ebf1]"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(isManaging ? analytics : true)}
            className="h-11 rounded-full bg-[linear-gradient(105deg,#ef7053,#6b63ec)] px-6 text-sm font-semibold text-white shadow-[0_7px_16px_rgba(102,93,225,.25)] transition hover:brightness-105"
          >
            Accept all
          </button>
        </div>
      </section>
    </div>
  );
}

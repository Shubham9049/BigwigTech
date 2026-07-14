"use client";

import { useEffect, useState } from "react";

const phrases = ["AI Partner.", "Product Team.", "Growth Engine.", "Innovation Lab."];

export default function TypewriterHero() {
  const [phrase, setPhrase] = useState(0), [letters, setLetters] = useState(0), [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = phrases[phrase], complete = letters === word.length, empty = letters === 0;
    const timer = window.setTimeout(() => { if (!deleting && complete) setDeleting(true); else if (deleting && empty) { setDeleting(false); setPhrase((current) => (current + 1) % phrases.length); } else setLetters((current) => current + (deleting ? -1 : 1)); }, !deleting && complete ? 1400 : deleting ? 45 : 95);
    return () => window.clearTimeout(timer);
  }, [deleting, letters, phrase]);
  return <h1 className="hero-title mt-5 max-w-2xl">Your end-to-end<br /><em>{phrases[phrase].slice(0, letters)}<span className="type-caret">|</span></em></h1>;
}

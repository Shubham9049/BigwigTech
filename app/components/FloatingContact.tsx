"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const phoneNumber = "918512883688";
const whatsappMessage = encodeURIComponent(
  "Hello Bigwig Technologies, I would like to know more about your services.",
);

export default function FloatingContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#11162b] shadow-[0_16px_40px_rgba(32,26,70,.32)] backdrop-blur">
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 border-r border-white/10 px-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <FaWhatsapp size={19} className="text-[#4ee58b]" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={`tel:+${phoneNumber}`}
          className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 bg-[linear-gradient(110deg,#ff7658,#f45776_48%,#8063ed)] px-3 text-sm font-semibold text-white shadow-[-8px_0_24px_rgba(244,87,118,.2)] transition hover:brightness-110"
        >
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
      </div>
    </div>
  );
}

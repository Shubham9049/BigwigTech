import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import type { ReactNode } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";

const explore = ["Services", "Industries", "Portfolio", "Insights"];

export default function Footer() {
  return (
    <footer className="border-t border-[#cfd4e3] bg-[#eef0fb] px-5 pt-8 text-[#111426] sm:px-6 md:px-10 lg:pt-10">
      <div className="mx-auto max-w-[1725px]">
        <div className="grid gap-8 pb-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[1.35fr_.86fr_.95fr_1fr] lg:gap-x-12 lg:pb-10">
          <div>
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig Logo"
              width={180}
              height={60}
              priority
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-[29rem] text-sm leading-[1.5] tracking-[-.02em] text-[#51608c] sm:mt-6 sm:text-base">
              Building digital products that compound in value.
            </p>

            <div className="mt-6 max-w-[31rem]">
              <h2 className="text-base font-medium tracking-[-.025em] sm:text-lg">
                Quarterly engineering notes
              </h2>
              <p className="mt-2 text-sm leading-[1.5] text-[#95a1c1]">
                One concise email every quarter. No funnel, no spam — only the
                technical lessons our team thinks are worth your time.
              </p>
              <form className="mt-4 flex items-center gap-2 sm:gap-3">
                <label className="sr-only" htmlFor="footer-email">
                  Your email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="h-11 min-w-0 flex-1 rounded-full border border-[#d3d8e6] bg-transparent px-4 text-sm text-[#52618e] outline-none placeholder:text-[#68779e] focus:border-[#465cff] sm:h-12 sm:px-5"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#4057f4] text-[#111426] transition hover:bg-[#ff6948] hover:text-white sm:h-12 sm:w-12"
                >
                  <ArrowRight size={19} strokeWidth={1.7} />
                </button>
              </form>
              <p className="mt-4 text-xs leading-5 text-[#6c7a9f]">
                By subscribing, you consent to receiving our newsletter.
                <br />
                Unsubscribe any time — read our{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="mt-5 flex gap-2">
                <SocialIcon label="LinkedIn">
                  <FaLinkedinIn size={17} />
                </SocialIcon>

                <SocialIcon label="Instagram">
                  <FaInstagram size={18} />
                </SocialIcon>

                <SocialIcon label="X (Twitter)">
                  <FaXTwitter size={18} />
                </SocialIcon>

                <SocialIcon label="Facebook">
                  <FaFacebookF size={17} />
                </SocialIcon>
              </div>
            </div>
          </div>

          <FooterColumn title="Explore" links={explore} />
          <div>
            <p className="footer-label">Company</p>
            <div className="mt-4 space-y-2 text-sm tracking-[-.025em] text-[#51608c]">
              <a className="footer-link" href="#">
                About Us
              </a>
              <a className="footer-link" href="#">
                Contact
              </a>
              <a
                className="footer-link mt-4 flex items-center gap-3"
                href="mailto:hello@codt.tech"
              >
                <Mail size={18} className="text-[#ff6948]" />
                Email
              </a>
              <a
                className="footer-link flex items-center gap-3"
                href="tel:+918512883688"
              >
                <Phone size={18} className="text-[#ff6948]" />
                +91 851 288 3688
              </a>
            </div>
          </div>
          <div className="space-y-7 sm:space-y-10">
            <Office title="Milpitas, California">
              PO Box 1090, S Milpitas Blvd, PMB 2006
              <br />
              Milpitas, CA 95035, United States
            </Office>
            <Office title="Gurugram, India">
              SVH 83, Office No. 1022, Metro Street, Sector 83
              <br />
              Gurugram, Haryana 122004, India
            </Office>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#cfd4e3] py-5 text-xs text-[#58678f] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs leading-5 tracking-[-.025em] sm:text-sm">
            © 2026 Bigwig Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="grid grid-cols-2 items-center gap-x-4 gap-y-2 font-medium sm:flex sm:flex-wrap sm:gap-x-6">
            <a className="footer-link" href="#">
              Privacy Policy
            </a>
            <a className="footer-link" href="#">
              Terms of Service
            </a>
            <a className="footer-link" href="#">
              Cookie Policy
            </a>
            <a className="footer-link" href="#">
              Cookie preferences
            </a>
            <LanguageSelector
              className="col-span-2 w-full sm:ml-1 sm:w-auto sm:min-w-[118px]"
              variant="footer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="footer-label">{title}</p>
      <div className="mt-4 space-y-2 text-sm tracking-[-.025em] text-[#51608c]">
        {links.map((link) => (
          <a className="footer-link block" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function Office({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="footer-label flex items-center gap-3">
        <MapPin size={20} className="text-[#ff6948]" strokeWidth={1.8} />
        {title}
      </p>
      <p className="mt-4 text-sm leading-[1.5] tracking-[-.025em] text-[#51608c]">
        {children}
      </p>
    </div>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#ccd2e0] text-[#5b6890] transition hover:border-[#ff6948] hover:text-[#ff6948]"
    >
      {children}
    </a>
  );
}

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
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
    <footer className="border-t border-[#cfd4e3] bg-[#eef0fb] px-5 pt-12 text-[#111426] md:px-10 lg:pt-12">
      <div className="mx-auto max-w-[1725px]">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.35fr_.86fr_.95fr_1fr] lg:gap-x-16">
          <div>
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig Logo"
              width={180}
              height={60}
              priority
              className="h-10 w-auto"
            />
            <p className="mt-8 max-w-[29rem] text-xl leading-[1.45] tracking-[-.02em] text-[#51608c]">
              Building digital products that compound in value.
            </p>

            <div className="mt-8 max-w-[31rem]">
              <h2 className="text-xl font-medium tracking-[-.025em]">
                Quarterly engineering notes
              </h2>
              <p className="mt-3 text-base leading-[1.55] text-[#95a1c1]">
                One concise email every quarter. No funnel, no spam — only the
                technical lessons our team thinks are worth your time.
              </p>
              <form className="mt-6 flex items-center gap-3">
                <label className="sr-only" htmlFor="footer-email">
                  Your email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="h-[62px] min-w-0 flex-1 rounded-full border border-[#d3d8e6] bg-transparent px-6 text-lg text-[#52618e] outline-none placeholder:text-[#68779e] focus:border-[#465cff]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full bg-[#4057f4] text-[#111426] transition hover:bg-[#ff6948] hover:text-white"
                >
                  <ArrowRight size={24} strokeWidth={1.7} />
                </button>
              </form>
              <p className="mt-5 text-sm leading-6 text-[#6c7a9f]">
                By subscribing, you consent to receiving our newsletter.
                <br />
                Unsubscribe any time — read our{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="mt-7 flex gap-3">
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
            <div className="mt-5 space-y-3 text-xl tracking-[-.025em] text-[#51608c]">
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
          <div className="space-y-14">
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

        <div className="flex flex-col gap-6 border-t border-[#cfd4e3] py-6 text-base text-[#58678f] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xl tracking-[-.025em]">
            © 2026 CODT Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-medium">
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
            <LanguageSelector className="ml-1 min-w-[118px]" variant="footer" />
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
      <div className="mt-5 space-y-3 text-xl tracking-[-.025em] text-[#51608c]">
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
      <p className="mt-5 text-xl leading-[1.55] tracking-[-.025em] text-[#51608c]">
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
      className="grid h-12 w-12 place-items-center rounded-full border border-[#ccd2e0] text-[#5b6890] transition hover:border-[#ff6948] hover:text-[#ff6948]"
    >
      {children}
    </a>
  );
}

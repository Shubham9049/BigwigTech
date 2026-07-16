"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  UtensilsCrossed,
  Plane,
  Clapperboard,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
  HardHat,
  ShieldCheck,
  Gamepad2,
  Dumbbell,
  Tv,
  Truck,
  Pill,
  House,
  ChefHat,
} from "lucide-react";

const industries = [
  {
    icon: ChefHat,
    title: "Restaurants / Food Tech",
    desc: "POS, kiosk, ordering, and back-of-house tooling for hospitality.",
    href: "/industries/restaurants-food-tech",
  },
  {
    icon: Plane,
    title: "Aviation",
    desc: "Maintenance, training, and operations software for the aviation sector.",
    href: "/industries/aviation",
  },
  {
    icon: Clapperboard,
    title: "Entertainment / Media Streaming",
    desc: "OTT platforms, live event tech, and creator video systems.",
    href: "/industries/entertainment-media-streaming",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "HIPAA-ready platforms for clinics, telemedicine, and digital health.",
    href: "/industries/healthcare",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Storefronts and marketplaces engineered for conversion and scale.",
    href: "/industries/e-commerce",
  },
  {
    icon: Landmark,
    title: "Finance / Fintech",
    desc: "Regulated financial systems for lending, payments, and wealth platforms.",
    href: "/industries/finance-fintech",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property platforms, listing portals, and tenant operations software.",
    href: "/industries/real-estate",
  },
  {
    icon: GraduationCap,
    title: "EdTech / E-Learning",
    desc: "Learning platforms, LMS systems, and creator-led course products.",
    href: "/industries/edtech-e-learning",
  },
  {
    icon: House,
    title: "Construction",
    desc: "Field operations, project management, and BIM-adjacent tooling.",
    href: "/industries/construction",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    desc: "Insurtech platforms for quoting, policy admin, and claims.",
    href: "/industries/insurance",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    desc: "Multiplayer infrastructure, live ops tooling, and game services.",
    href: "/industries/gaming",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    desc: "Coaching apps, gym platforms, and connected fitness products.",
    href: "/industries/fitness",
  },
  {
    icon: Tv,
    title: "OTT Platforms",
    desc: "VOD, CTV and mobile streaming services with multi-DRM and churn-aware billing.",
    href: "/industries/ott-platforms",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Fleet, warehouse and last-mile platforms with real-time track-and-trace and offline-first driver apps — built to move the on-time number.",
    href: "/industries/logistics",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    desc: "GxP/GMP-compliant systems — clinical and eTMF tooling, cold-chain monitoring, serialization and manufacturing platforms.",
    href: "/industries/pharmaceutical",
  },
];

type IndustriesMegaMenuProps = {
  onNavigate: () => void;
};

export default function IndustriesMegaMenu({
  onNavigate,
}: IndustriesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      id="industries-mega-menu"
      className="absolute left-1/2 top-full z-50 mt-4 max-h-[calc(100dvh-7.5rem)] w-[min(94vw,1800px)] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-[28px] border border-[#dfe3ee] bg-[#f9faff] px-6 py-6 shadow-[0_28px_64px_rgba(38,48,86,.14)] lg:px-10 lg:py-12"
    >
      <div className="mb-7 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[6px] text-[#66708d]">
          INDUSTRIES
        </h3>
        <Link
          href="/industries"
          onClick={onNavigate}
          className="flex items-center gap-2 text-[#3563ff]"
        >
          Explore all <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4 lg:gap-x-12 ">
        {industries.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onNavigate}
            className="group flex min-w-0 gap-4 rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-[#3563ff] focus-visible:ring-offset-4"
          >
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#e5f1ff] text-[#6377b5] transition group-hover:bg-[#3563ff] group-hover:text-white">
              <item.icon size={23} />
            </div>
            <div className="min-w-0">
              <h4 className="text-[16px] font-semibold text-[#1f2438] group-hover:text-[#3563ff]">
                {item.title}
              </h4>
              <p className="mt-1 text-[14px] leading-6 text-[#6b7696] line-clamp-2">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

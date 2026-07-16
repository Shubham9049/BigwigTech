"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Bot,
  Cloud,
  Cpu,
  Database,
  Globe,
  Monitor,
  Pencil,
  Radio,
  Smartphone,
  Video,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI / ML Solutions",
    desc: "Production ML and LLM-powered features—not demos.",
    href: "/ai-ml-solutions",
  },
  {
    icon: Cpu,
    title: "AI Agents",
    desc: "Goal-directed AI systems that execute workflows.",
    href: "/ai-agents",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Pipelines, warehouses and analytics.",
    href: "/data-engineering",
  },
  {
    icon: Monitor,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms.",
    href: "/saas-app-development",
  },
  {
    icon: Blocks,
    title: "ERP Automation",
    desc: "Internal workflow automation.",
    href: "/erp-business-automation ",
  },
  {
    icon: Code2,
    title: "Custom Product Development",
    desc: "Bespoke systems engineered ",
    href: "/custom-product-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High performance web apps.",
    href: "/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "iOS & Android applications.",
    href: "/mobile-apps",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "AWS, Azure & scalable infrastructure.",
    href: "/devops-cloud",
  },
  {
    icon: Radio,
    title: "IoT Solutions",
    desc: "Connected hardware platforms.",
    href: "/iot-solutions",
  },
  {
    icon: Video,
    title: "Streaming Platforms",
    desc: "Live & VOD systems.",
    href: "/streaming-platforms",
  },
  {
    icon: Pencil,
    title: "UI / UX Design",
    desc: "Research-driven product design.",
    href: "/ui-ux-design",
  },
];

type ServicesMegaMenuProps = {
  onNavigate: () => void;
};

export default function ServicesMegaMenu({
  onNavigate,
}: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      id="services-mega-menu"
      className="absolute left-1/2 top-full z-50 mt-4 w-[min(94vw,1800px)] -translate-x-1/2 rounded-[28px] border border-[#dfe3ee] bg-[#f9faff] px-6 py-8 shadow-[0_28px_64px_rgba(38,48,86,.14)] lg:px-10 lg:py-12"
    >
      <div className="mb-9 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[6px] text-[#66708d]">
          SERVICES
        </h3>
        <Link
          href="/services"
          onClick={onNavigate}
          className="flex items-center gap-2 text-[#3563ff]"
        >
          Explore all <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
        {services.map((item) => (
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
              <p className="mt-1 text-[14px] leading-6 text-[#6b7696]">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

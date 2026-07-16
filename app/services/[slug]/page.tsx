import Link from "next/link";
import { notFound } from "next/navigation";

const serviceNames: Record<string, string> = {
  "ai-ml-solutions": "AI / ML Solutions",
  "ai-agents": "AI Agents",
  "data-engineering": "Data Engineering",
  "saas-app-development": "SaaS Development",
  "erp-automation": "ERP Automation",
  "web-development": "Web Development",
  "mobile-apps": "Mobile Apps",
  "devops-cloud": "DevOps & Cloud",
  "iot-solutions": "IoT Solutions",
  "streaming-platforms": "Streaming Platforms",
  "ui-ux-design": "UI / UX Design",
  "blockchain-web3": "Blockchain / Web3",
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceName = serviceNames[slug];
  if (!serviceName) notFound();
  return (
    <section className="min-h-screen bg-[#f9faff] px-6 py-20 text-[#1f2438] sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/services"
          className="text-sm font-medium text-[#3563ff] transition hover:text-[#254bd1]"
        >
          ← All services
        </Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#66708d]">
          Service
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {serviceName}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b7696]">
          We design and build practical, scalable solutions around your
          team&apos;s goals.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-[#0d1022] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Talk to our team
        </Link>
      </div>
    </section>
  );
}

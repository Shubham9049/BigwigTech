"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";
type WorkProject = {
  id: string;
  title: string;
  video: string;
  badge?: string;
  tags: string[];
  description: string;
  stats: { value: string; label: string }[];
};

export default function WorkCard({ project }: { project: WorkProject }) {
const videoRef = useRef<HTMLVideoElement>(null);
  const previewPosition = `${(Number(project.id) - 1) * 33.333}% center`;

  return (
    <article
  className="group min-w-0"
  onMouseEnter={() => videoRef.current?.play()}
  onMouseLeave={() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Restart from beginning next time
    }
  }}
>
      <div className="relative aspect-[1.78/1] overflow-hidden rounded-[10px] bg-[#dfe3ee] shadow-[0_10px_24px_rgba(54,62,94,0.08)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/project-work.png')", backgroundPosition: previewPosition, backgroundSize: "400% 100%" }}
        />
        <div className="absolute inset-x-0 top-0 z-20 flex h-5 items-center gap-1.5 bg-[#edf0f7] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff7164]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd49]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" />
        </div>

        {project.badge && (
          <span className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-b-md bg-white px-4 py-0.5 text-[9px] font-medium text-slate-400 shadow-sm">
            {project.badge}
          </span>
        )}

       <video
  ref={videoRef}
  muted
  loop
  playsInline
  preload="metadata"
          aria-label={`${project.title} project preview`}
          className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
        >
          <source src={project.video} type="video/mp4" />
        </video>

        <span className="absolute left-3 top-8 z-20 rounded-full bg-[#38444a]/85 px-2.5 py-1.5 text-[9px] font-bold tracking-wide text-white">
          {project.id}
        </span>

        <button
          type="button"
          aria-label={`Play ${project.title} preview`}
          className="absolute left-1/2 top-1/2 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#3d494e]/80 text-white backdrop-blur-sm transition group-hover:scale-110"
        >
          <Play className="ml-px" size={14} fill="currentColor" />
        </button>

        <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#38444a]/85 px-2.5 py-1.5 text-[9px] font-semibold text-white backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#1f2438]">
          {project.title}
        </h3>
        <p className="mt-4 min-h-[110px] text-[18px] leading-8 text-[#5f6987]">
          {project.description}
        </p>

        <div className="mt-5 grid grid-cols-3 border-t border-[#dfe3ee] pt-4">
          {project.stats.map((item) => (
            <div key={item.label}>
              <p className="text-[24px] leading-none tracking-[-0.03em] text-[#22283c]">{item.value}</p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[3px] text-[#8088a5]">{item.label}</p>
            </div>
          ))}
        </div>

        <button type="button" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ffb8a4] bg-[#fffaf8] px-7 py-3 text-[17px] font-medium text-[#ff7758] transition hover:border-[#ff7758] hover:bg-[#ff7758] hover:text-white">
          View case <ArrowUpRight size={12} strokeWidth={2.25} />
        </button>
      </div>
    </article>
  );
}

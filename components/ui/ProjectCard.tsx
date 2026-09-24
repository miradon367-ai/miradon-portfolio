"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, Layers } from "lucide-react";
import { Project } from "@/types";
import { getValidImageUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onPlayVideo?: (videoUrl: string, title: string, category: string) => void;
}

export function ProjectCard({ project, onPlayVideo }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(getValidImageUrl(project.thumbnailUrl));

  const aiTools = project.technicalBreakdown?.aiToolsUsed || [];
  const metrics = project.metrics || [];

  return (
    <div className="group relative rounded-2xl glass-panel bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      {/* Thumbnail */}
      <div
        onClick={() => {
          if (project.videoUrl && onPlayVideo) {
            onPlayVideo(project.videoUrl, project.title, project.category);
          }
        }}
        className={`relative aspect-video w-full overflow-hidden bg-slate-950 ${
          project.videoUrl && onPlayVideo ? "cursor-pointer group/thumb" : ""
        }`}
      >
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          unoptimized
          onError={() =>
            setImgSrc("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200")
          }
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Center Hover Play Icon */}
        {project.videoUrl && onPlayVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 transform scale-75 group-hover/thumb:scale-100 transition-transform duration-300">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>
        )}

        {/* Category & Play Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md truncate">
            {project.category}
          </span>

          {project.videoUrl && onPlayVideo && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPlayVideo(project.videoUrl!, project.title, project.category);
              }}
              className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-current" /> Play
            </button>
          )}
        </div>

        {/* Metric Badges */}
        <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1.5 z-10">
          {metrics.slice(0, 2).map((metric, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-cyan-400 font-semibold">{metric.value}</span> {metric.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] text-slate-400 font-mono mb-1 flex items-center gap-1.5 flex-wrap">
            <span>{project.role}</span>
            <span>•</span>
            <span className="truncate">{project.client}</span>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-start justify-between gap-2">
            <span className="leading-snug">{project.title}</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-0.5" />
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tools & Link */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {aiTools.slice(0, 2).map((tool, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={`/portfolio/${project.slug}`}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
          >
            Details <Layers className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

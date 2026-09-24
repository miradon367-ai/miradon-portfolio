"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { Project } from "@/types";
import { getValidImageUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onPlayVideo?: (videoUrl: string, title: string, category: string) => void;
}

export function ProjectCard({ project, onPlayVideo }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(getValidImageUrl(project.thumbnailUrl));

  const aiTools = project.technicalBreakdown?.aiToolsUsed || [];
  const techStack = project.technicalBreakdown?.techStack || [];
  const metrics = project.metrics || [];

  return (
    <div className="group relative rounded-2xl glass-panel bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      {/* Visual Thumbnail / Video Trigger */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          unoptimized
          onError={() => setImgSrc("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200")}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Category & Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
            {project.category}
          </span>

          {project.videoUrl && onPlayVideo && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPlayVideo(project.videoUrl!, project.title, project.category);
              }}
              className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" /> Play Reel
            </button>
          )}
        </div>

        {/* Metric Badges Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2 z-10">
          {metrics.slice(0, 2).map((metric, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-cyan-400 font-semibold">{metric.value}</span> {metric.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs text-slate-400 font-mono mb-1 flex items-center gap-2">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.client}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>

          <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tools & Breakdown Link */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {aiTools.slice(0, 2).map((tool, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
              >
                {tool}
              </span>
            ))}
            {techStack.slice(0, 1).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/portfolio/${project.slug}`}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            Deep Dive <Layers className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

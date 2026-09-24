"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { VideoModal } from "@/components/ui/VideoModal";
import { Project } from "@/types";
import { ArrowRight, Film, Sparkles } from "lucide-react";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
    category: string;
  } | null>(null);

  const categories = ["All", "AI Video & Film", "Software & Games", "Web Design & Dev"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works & Technical Breakdowns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Flagship Projects
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              Exploring cutting-edge AI film trailers, interactive software loops, and modern luxury web applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl bg-slate-900/60 border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPlayVideo={(url, title, category) =>
                setActiveVideo({ url, title, category })
              }
            />
          ))}
        </div>

        {/* Bottom CTA to all portfolio */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-panel bg-slate-900 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800 transition-all shadow-lg"
          >
            <span>View Complete Project Archive & Case Studies</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>

      {/* Video Modal Instance */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.url}
          title={activeVideo.title}
          category={activeVideo.category}
        />
      )}
    </section>
  );
}

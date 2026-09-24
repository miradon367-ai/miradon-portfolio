"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Sparkles, Calendar, ArrowRight, Video, Code, Layers, ShieldCheck } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";
import { AppointmentBookingModal } from "@/components/ui/AppointmentBookingModal";

export function SplitHero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Neon Gradients & Cyber Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio Highlights & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill with Avatar */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-cyan-400 shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Miradon"
                  fill
                  className="object-cover"
                />
              </div>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI Video Expert • Software & AI Developer • Website Designer</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-gradient">Cinematic AI</span> Visuals & High-Performance Digital Experiences
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I’m <strong className="text-white font-semibold">Mira David don (Miradon)</strong>. I transform creative concepts into photorealistic AI videos, cinematic trailers, commercials, and scalable software applications powered by modern full-stack web technology and generative pipelines.
            </p>

            {/* Quick Skills Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-cyan-400" /> Multi-Scene AI Video & Trailers
              </span>
              <span className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-purple-400" /> Full-Stack Next.js & AI Solutions
              </span>
              <span className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" /> High-Converting Web Architecture
              </span>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-xl glass-panel bg-slate-900/80 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex items-center gap-2"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Video/Creative Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-500/40 via-purple-600/30 to-blue-500/40 shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] flex flex-col justify-between">
                {/* Background Image Poster */}
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
                  alt="The Mad Preacher Cinematic AI Showcase"
                  fill
                  priority
                  className="object-cover object-center brightness-75 hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />

                {/* Top Badge Overlay */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    Featured AI Film Trailer
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Showcase
                  </span>
                </div>

                {/* Center Play Button Action */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="group w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Play Featured AI Trailer Reel"
                  >
                    <div className="w-full h-full bg-slate-950/90 rounded-full flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </button>
                  <p className="mt-3 text-xs font-mono uppercase tracking-widest text-cyan-300">
                    Click to Play 4K Reel
                  </p>
                </div>

                {/* Bottom Metadata Card */}
                <div className="relative z-10 p-5 glass-panel bg-slate-950/90 border-t border-white/10 m-3 rounded-2xl">
                  <h3 className="text-white font-bold text-base flex items-center justify-between">
                    <span>The Mad Preacher</span>
                    <span className="text-xs font-mono text-cyan-400">7+ Scenes • 4K</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    Ancient Judea cinematic psychological thriller trailer with character consistency & spatial audio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
        title="The Mad Preacher — AI Cinematic Movie Trailer"
        category="Cinematic AI Film Direction"
      />

      {/* Booking Modal */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}

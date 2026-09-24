"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Calendar, ArrowRight, Sparkles, CheckCircle2, Award, Terminal, Video, Code, Palette, Shield } from "lucide-react";
import { AppointmentBookingModal } from "@/components/ui/AppointmentBookingModal";
import profileData from "@/data/profile.json";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Professional Background</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bridging <span className="text-gradient">AI Generative Artistry</span> with Full-Stack Software Engineering
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            I’m <strong className="text-white">Mira David don</strong>, known professionally as <strong className="text-cyan-400">Miradon</strong>. I operate at the intersection of cinematic AI media generation, modern web development, and intelligent software automation.
          </p>
        </div>

        {/* Two-Column Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Portrait & Highlights Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-blue-500/30 shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5]">
                <Image
                  src={profileData.image || "/images/profile.jpg"}
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel bg-slate-950/90 border border-white/10">
                  <h3 className="text-lg font-bold text-white">Mira David don (Miradon)</h3>
                  <p className="text-xs font-mono text-cyan-400">AI Video Expert & Developer</p>
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                    <span>Remote / Global</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl glass-panel bg-slate-900/50 border border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Direct Contact Lines
              </h4>
              <div className="text-sm space-y-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{profileData.email}</span>
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{profileData.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Specialty Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
              <h3 className="text-2xl font-bold text-white">The Creative & Technical Philosophy</h3>
              <p>
                In an era where generative AI and digital experiences evolve daily, true distinction lies in the mastery of both storytelling and execution. I specialize in turning abstract creative concepts into cinematic AI videos, high-impact commercials, engaging animations, and branded content while leveraging advanced prompting workflows and seed-locked character consistency.
              </p>
              <p>
                As a software engineer and web designer, I build intelligent digital products, full-stack web applications, landing pages, and business platforms designed for blistering performance, conversion, and effortless usability.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-white/5 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Video className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">AI Video & Film Direction</h4>
                <p className="text-xs text-slate-400">
                  Character-consistent generative trailers, commercials, 4K upscaling, and spatial Foley audio.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-white/5 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Full-Stack Development</h4>
                <p className="text-xs text-slate-400">
                  Next.js App Router, TypeScript, Tailwind CSS, REST APIs, and high-performance serverless backends.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-white/5 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">UI/UX & Web Design</h4>
                <p className="text-xs text-slate-400">
                  Futuristic aesthetic systems, 100% responsive scaling, and conversion-optimized user flows.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel bg-slate-900/40 border border-white/5 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">AI Automations & Integration</h4>
                <p className="text-xs text-slate-400">
                  Integrating custom LLMs, generative APIs, and workflow automations into commercial products.
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book Consultation Call
              </button>

              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-xl glass-panel bg-slate-900 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-2"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal Instance */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

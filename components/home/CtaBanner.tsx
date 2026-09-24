"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Calendar, ArrowRight, Sparkles, Send } from "lucide-react";
import { AppointmentBookingModal } from "@/components/ui/AppointmentBookingModal";
import profileData from "@/data/profile.json";

export function CtaBanner() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-14 glass-panel-glow bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-950/90 border border-cyan-500/40 overflow-hidden shadow-2xl text-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Build Something Extraordinary</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Elevate Your Vision with AI Video & Modern Software?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you need a cinematic AI movie trailer, a high-converting web application, or an intelligent custom AI pipeline, let&apos;s turn your concept into reality.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="px-8 py-4 rounded-xl glass-panel bg-slate-900/80 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 hover:bg-slate-850 transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" /> Contact via Email
                </a>
              </div>

              <p className="text-xs font-mono text-slate-400 pt-2">
                Direct Inquiries: <span className="text-cyan-400">{profileData.email}</span> • <span className="text-cyan-400">{profileData.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Modal Instance */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}

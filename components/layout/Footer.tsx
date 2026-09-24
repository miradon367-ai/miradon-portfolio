import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles, Shield, Terminal } from "lucide-react";
import profileData from "@/data/profile.json";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-cyan-950/20 via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-base text-cyan-400">M</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">MIRADON</span>
                <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  AI Video Creator & Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Transforming bold creative concepts into cinematic AI visuals, high-converting digital products, and intelligent software experiences.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for New Projects & Contracts</span>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{profileData.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Remote / Worldwide</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Services & Pipelines
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Book & Inquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture / Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              System Specs
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Next.js App Router
              </li>
              <li className="flex items-center gap-1.5 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-purple-400" /> Netlify Automated CI/CD
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Content CMS Admin <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mira David don (Miradon). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Futuristic Dark UI</span>
            <span>•</span>
            <span>SSR / SSG Architecture</span>
            <span>•</span>
            <span>JSON/MD Data Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

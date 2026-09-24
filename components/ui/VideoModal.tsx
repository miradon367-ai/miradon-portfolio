"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Film, Play, Sparkles } from "lucide-react";
import { formatVideoEmbedUrl } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  category?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  category = "AI Video Showcase",
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const embedUrl = formatVideoEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-5xl rounded-2xl glass-panel-glow bg-slate-950/95 overflow-hidden shadow-2xl z-10 border border-cyan-500/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-mono text-cyan-400">
                      {category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Sparkles className="w-2.5 h-2.5" /> 4K Ultra HD
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center overflow-hidden">
              {embedUrl ? (
                <iframe
                  src={embedUrl.includes("?") ? `${embedUrl}&autoplay=1` : `${embedUrl}?autoplay=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4 animate-pulse">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <p className="text-lg font-medium text-slate-300">Cinematic Trailer Preview</p>
                  <p className="text-sm text-slate-500 mt-1 max-w-md">
                    High-definition AI video render rendered with multi-model character consistency and custom sound design.
                  </p>
                </div>
              )}
            </div>

            {/* Footer Notice */}
            <div className="px-6 py-3 bg-slate-950 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
              <span>Directed & Engineered by Mira David don (Miradon)</span>
              <span className="text-cyan-400 font-mono">Generative AI • 60 FPS • Spatial Audio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

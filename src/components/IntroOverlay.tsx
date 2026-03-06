
"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A full-screen luxury intro overlay for the wedding invitation.
 * Features:
 * - High z-index "Royal Gate" entry
 * - Interactive tap-to-open logic
 * - Synchronized activation of background music
 * - Decorative gold botanical elements
 */

export function IntroOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  // Prevent scrolling when the overlay is active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Remove from DOM after fade animation
      const timer = setTimeout(() => setShouldRender(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[1000] flex items-center justify-center transition-all duration-[2000ms] ease-in-out bg-background",
        isOpen ? "opacity-0 pointer-events-none scale-110" : "opacity-100"
      )}
      onClick={() => setIsOpen(true)}
    >
      {/* Royal Background Texture */}
      <div className="absolute inset-0 silk-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_70%)]" />

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 w-32 h-32 border-t-2 border-l-2 border-accent/30 rounded-tl-3xl" />
      <div className="absolute top-12 right-12 w-32 h-32 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
      <div className="absolute bottom-12 left-12 w-32 h-32 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
      <div className="absolute bottom-12 right-12 w-32 h-32 border-b-2 border-r-2 border-accent/30 rounded-br-3xl" />

      {/* Center Content */}
      <div className="relative z-10 text-center space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
             <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse" />
             <Heart className="text-accent w-16 h-16 relative" fill="currentColor" />
          </div>
          
          <h2 className="text-primary font-headline text-2xl md:text-3xl tracking-[0.2em] uppercase mb-2">
            Groom & Sakshi
          </h2>
          <div className="h-[1px] w-24 bg-accent/40 mx-auto mb-8" />
          
          <button 
            className="group relative px-12 py-4 overflow-hidden rounded-full border border-accent/30 bg-white/50 backdrop-blur-md shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 animate-shimmer-gold opacity-30" />
            <span className="relative flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-sm">
              <Sparkles size={18} className="text-accent group-hover:rotate-12 transition-transform" />
              Open Invitation
              <Sparkles size={18} className="text-accent group-hover:-rotate-12 transition-transform" />
            </span>
          </button>
        </div>

        <p className="text-muted-foreground italic text-sm tracking-widest opacity-60">
          Tap anywhere to enter the celebration
        </p>
      </div>

      {/* Floating Sparkles in Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

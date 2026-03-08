"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A full-screen luxury intro overlay for the wedding invitation.
 * Features:
 * - Interactive tap-to-open logic
 * - Synchronized activation of background music via custom event
 */

export function IntroOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; scale: number; delay: string }[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${20 + Math.random() * 60}%`,
      left: `${20 + Math.random() * 60}%`,
      scale: 0.5 + Math.random() * 0.5,
      delay: `${Math.random() * 2}s`,
    }));
    setSparkles(newSparkles);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setShouldRender(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Dispatch custom event to trigger music player
    window.dispatchEvent(new CustomEvent("start-wedding-music"));
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[1000] flex items-center justify-center transition-all ease-in-out bg-background cursor-pointer",
        isOpen ? "opacity-0 pointer-events-none scale-110" : "opacity-100"
      )}
      style={{ transitionDuration: '2000ms' }}
      onClick={handleOpenInvitation}
    >
      <div className="absolute inset-0 silk-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.12)_0%,transparent_60%)]" />

      <div className="relative z-10 text-center space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
             <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse" />
             <Heart className="text-accent w-16 h-16 relative" fill="currentColor" />
          </div>
          
          <h2 className="text-primary font-headline text-2xl md:text-3xl tracking-[0.2em] uppercase mb-2">
            Shiv & Sakshi
          </h2>
          <div className="h-[1px] w-24 bg-accent/40 mx-auto mb-12" />
          
          <div className="relative group">
            <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full animate-pulse" />
            
            {sparkles.map((s) => (
              <div
                key={s.id}
                className="absolute text-accent/40 animate-pulse pointer-events-none"
                style={{
                  top: s.top,
                  left: s.left,
                  transform: `scale(${s.scale})`,
                  animationDelay: s.delay,
                }}
              >
                <Star size={12} fill="currentColor" />
              </div>
            ))}

            <button 
              onClick={handleOpenInvitation}
              className="group relative px-14 py-5 overflow-hidden rounded-full border border-accent/40 bg-white/60 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 animate-shimmer-gold opacity-40" />
              <span className="relative flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-sm">
                <Sparkles size={20} className="text-accent" />
                Open Invitation
                <Sparkles size={20} className="text-accent" />
              </span>
            </button>
          </div>
        </div>

        <p className="text-muted-foreground italic text-sm tracking-widest opacity-60 mt-8">
          Tap anywhere to enter the celebration
        </p>
      </div>
    </div>
  );
}

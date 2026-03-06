
"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A full-screen luxury intro overlay for the wedding invitation.
 * Features:
 * - High z-index "Royal Gate" entry
 * - Interactive tap-to-open logic
 * - Synchronized activation of background music
 * - Decorative gold botanical elements
 * - Luxury glowing button with sparkle particles
 */

export function IntroOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; scale: number; delay: string }[]>([]);

  useEffect(() => {
    // Generate sparkles specifically for the button area
    const newSparkles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${20 + Math.random() * 60}%`,
      left: `${20 + Math.random() * 60}%`,
      scale: 0.5 + Math.random() * 0.5,
      delay: `${Math.random() * 2}s`,
    }));
    setSparkles(newSparkles);
  }, []);

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12)_0%,transparent_70%)]" />

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
          <div className="h-[1px] w-24 bg-accent/40 mx-auto mb-12" />
          
          <div className="relative group">
            {/* Pulsing Ambient Glow around the button */}
            <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full animate-pulse delay-700" />

            {/* Sparkle Particles circling the button */}
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
              className="group relative px-14 py-5 overflow-hidden rounded-full border border-accent/40 bg-white/60 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all hover:scale-105 active:scale-95"
            >
              {/* Golden Shimmer Effect */}
              <div className="absolute inset-0 animate-shimmer-gold opacity-40" />
              
              <span className="relative flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-sm">
                <Sparkles size={20} className="text-accent group-hover:rotate-12 transition-transform" />
                Open Invitation
                <Sparkles size={20} className="text-accent group-hover:-rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        <p className="text-muted-foreground italic text-sm tracking-widest opacity-60 mt-8">
          Tap anywhere to enter the celebration
        </p>
      </div>

      {/* Background Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

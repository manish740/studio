"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ScratchToReveal } from "./ScratchToReveal";

const Butterfly = ({ 
  className, 
  color, 
  delay, 
  duration = "20s" 
}: { 
  className?: string, 
  color: string, 
  delay: string, 
  duration?: string 
}) => (
  <div 
    className={cn("absolute z-30 pointer-events-none", className)}
    style={{ 
      animation: `float-slow ${duration} ease-in-out infinite`,
      animationDelay: delay 
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(color, "animate-wing-glow")}
      width="28"
      height="28"
    >
      <g className="animate-wing-flap origin-center">
        <path d="M12,12 C12,12 14.5,7 19,7 C22,7 24,9.5 24,13 C24,17 19,21 12,23 C5,21 0,17 0,13 C0,9.5 2,7 5,7 C9.5,7 12,12 12,12 Z" opacity="0.6" />
      </g>
    </svg>
  </div>
);

const FallingPetal = ({ delay, color, left }: { delay: number, color: string, left: string }) => (
  <div 
    className={cn("absolute w-4 h-4 rounded-full opacity-0 animate-petal-fall z-30 pointer-events-none", color)}
    style={{ 
      animationDelay: `${delay}s`,
      left: left,
      top: '-20px'
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </div>
);

export function InvitationHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [petals, setPetals] = useState<{ id: number, delay: number, color: string, left: string }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number, top: string, left: string, delay: string }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const petalColors = ['text-accent/40', 'text-primary/30', 'text-white/50'];
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      left: `${15 + Math.random() * 70}%`
    }));
    setPetals(newPetals);

    const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-12 overflow-hidden">
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto space-y-12">
        <ScrollReveal>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-primary/30" />
            <Heart className="mx-4 text-primary opacity-50" size={18} />
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          
          <h2 className="text-sm md:text-base uppercase tracking-[0.5em] text-muted-foreground font-semibold mb-8">
            The Royal Celebration of
          </h2>
          
          <div className="relative inline-block w-full group/names">
            {/* Ambient Background Glow for Names */}
            <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full scale-150 pointer-events-none group-hover/names:bg-accent/10 transition-colors duration-700" />

            {/* Shimmer Sparkles around the name area */}
            {isMounted && sparkles.map((s) => (
              <div 
                key={s.id}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-0 group-hover/names:opacity-100 transition-opacity"
                style={{
                  top: s.top,
                  left: s.left,
                  animationDelay: s.delay,
                  boxShadow: '0 0 10px white'
                }}
              />
            ))}

            {/* Butterflies */}
            <Butterfly 
              color="text-accent/40" 
              className="-top-12 left-[15%]" 
              delay="0s" 
            />
            <Butterfly 
              color="text-white/60" 
              className="-top-20 right-[20%]" 
              delay="4s" 
            />

            {/* Petal Emitters */}
            {isMounted && (
              <div className="absolute -top-40 left-0 w-full h-[120vh] z-40 pointer-events-none">
                {petals.map((petal) => (
                  <FallingPetal key={petal.id} delay={petal.delay} color={petal.color} left={petal.left} />
                ))}
              </div>
            )}

            <div className="relative py-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 group-hover/names:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-headline embossed-gold tracking-tighter group-hover/names:tracking-normal transition-all duration-700 group-hover/names:brightness-110">
                  Groom
                </h1>

                {/* Embossed Golden Heart Frame for WEDS - Perfectly Centered and Symmetrical */}
                <div className="relative flex items-center justify-center shrink-0 mt-4 md:mt-0">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse group-hover/names:bg-accent/40" />
                  <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-20 md:h-20 drop-shadow-2xl transition-transform duration-500 group-hover/names:scale-110">
                    <defs>
                      <linearGradient id="heartGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="50%" stopColor="#f9f295" />
                        <stop offset="100%" stopColor="#b8860b" />
                      </linearGradient>
                      <filter id="innerShadow">
                        <feOffset dx="0" dy="2"/>
                        <feGaussianBlur stdDeviation="2" result="offset-blur"/>
                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
                        <feFlood floodColor="black" floodOpacity="0.5" result="color"/>
                        <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
                        <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
                      </filter>
                    </defs>
                    <path 
                      d="M50 88.9L43.4 82.3C17.2 58.5 0 42.9 0 24C0 10.7 10.4 0 23.7 0C31.2 0 38.4 3.5 43.1 9C47.8 3.5 55 0 62.5 0C75.8 0 86.2 10.7 86.2 24C86.2 42.9 69 58.5 42.8 82.3L50 88.9Z" 
                      fill="url(#heartGold)" 
                      filter="url(#innerShadow)"
                    />
                    <text 
                      x="43" 
                      y="45" 
                      textAnchor="middle" 
                      className="font-headline font-bold text-[14px] fill-primary/80"
                      style={{ filter: 'drop-shadow(0px 1px 1px white)' }}
                    >
                      WEDS
                    </text>
                  </svg>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-headline embossed-gold tracking-tighter group-hover/names:tracking-normal transition-all duration-700 group-hover/names:brightness-110">
                  Sakshi
                </h1>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl font-headline italic text-primary/70 mt-8 max-w-2xl mx-auto leading-relaxed">
            Request the honor of your presence as we pledge our eternal love
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 py-12 bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.1)] border border-white/60 px-8">
            <ScratchToReveal label="The Date" value="October 26, 2026" />
            <ScratchToReveal label="The Hour" value="Five O'Clock" />
            <ScratchToReveal label="The Venue" value="Grand Ballroom" />
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

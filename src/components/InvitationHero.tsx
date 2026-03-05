"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const [petals, setPetals] = useState<{ id: number, delay: number, color: string, left: string }[]>([]);

  useEffect(() => {
    const petalColors = ['text-accent/40', 'text-primary/30', 'text-white/50'];
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      left: `${15 + Math.random() * 70}%`
    }));
    setPetals(newPetals);
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
          
          <div className="relative inline-block w-full spotlight-glow">
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
            <div className="absolute -top-40 left-0 w-full h-[120vh] z-40 pointer-events-none">
              {petals.map((petal) => (
                <FallingPetal key={petal.id} delay={petal.delay} color={petal.color} left={petal.left} />
              ))}
            </div>

            <div className="relative py-12">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline embossed-gold mb-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 transition-all duration-700 hover:tracking-widest whitespace-nowrap">
                <span>Groom</span>
                <span className="text-2xl md:text-4xl lg:text-5xl italic opacity-70 font-light">&</span>
                <span>Sakshi</span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl font-headline italic text-primary/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Request the honor of your presence as we pledge our eternal love
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 py-12 bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.1)] border border-white/60 px-8">
            <div className="flex flex-col items-center space-y-2 group">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">The Date</span>
              <span className="text-xl md:text-2xl font-headline text-primary">October 26, 2024</span>
              <div className="h-[1px] w-0 bg-accent/50 transition-all duration-500 group-hover:w-full" />
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">The Hour</span>
              <span className="text-xl md:text-2xl font-headline text-primary">Five O'Clock</span>
              <div className="h-[1px] w-0 bg-accent/50 transition-all duration-500 group-hover:w-full" />
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">The Venue</span>
              <span className="text-xl md:text-2xl font-headline text-primary">Grand Ballroom</span>
              <div className="h-[1px] w-0 bg-accent/50 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
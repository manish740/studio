"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const RoseIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.5 2 9 3 8 4.5C7 3 5.5 2 4 2C2 2 1 3.5 1 5.5C1 8.5 4 11.5 8 15C8 15 8 15 8 15C8 15 8 15 8 15C12 11.5 15 8.5 15 5.5C15 3.5 14 2 12 2Z" />
    <path d="M18 7C17.2 7 16.5 7.4 16 8.1C15.5 7.4 14.8 7 14 7C12.9 7 12 7.9 12 9C12 10.8 13.8 12.6 16 14.5C18.2 12.6 20 10.8 20 9C20 7.9 19.1 7 18 7Z" />
    <path d="M12 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M12 18C10.5 18.5 9 17.5 9 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M12 19.5C13.5 20 15 19 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const Butterfly = ({ 
  className, 
  color, 
  delay, 
  duration = "10s" 
}: { 
  className?: string, 
  color: string, 
  delay: string, 
  duration?: string 
}) => (
  <div 
    className={cn("absolute z-30 pointer-events-none", className)}
    style={{ 
      animation: `float ${duration} ease-in-out infinite`,
      animationDelay: delay 
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(color, "animate-wing-glow")}
      width="32"
      height="32"
    >
      <g className="animate-wing-flap origin-center">
        <path d="M12,12 C12,12 14.5,7 19,7 C22,7 24,9.5 24,13 C24,17 19,21 12,23 C5,21 0,17 0,13 C0,9.5 2,7 5,7 C9.5,7 12,12 12,12 Z" opacity="0.8" />
        <circle cx="12" cy="14" r="1.5" fill="white" fillOpacity="0.5" />
      </g>
    </svg>
  </div>
);

const Petal = ({ delay, color, left }: { delay: number, color: string, left: string }) => (
  <div 
    className={`absolute w-3 h-3 rounded-full opacity-0 animate-petal-fall z-30 pointer-events-none ${color}`}
    style={{ 
      animationDelay: `${delay}s`,
      left: left,
      top: '-10px'
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </div>
);

const Sparkle = ({ delay, left, top }: { delay: number, left: string, top: string }) => (
  <div 
    className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-shimmer pointer-events-none z-20"
    style={{ 
      animationDelay: `${delay}s`,
      left,
      top
    }}
  />
);

export function InvitationHero() {
  const [petals, setPetals] = useState<{ id: number, delay: number, color: string, left: string }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number, delay: number, left: string, top: string }[]>([]);

  useEffect(() => {
    const petalColors = ['text-red-400/60', 'text-pink-300/60', 'text-white/80'];
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      left: `${20 + Math.random() * 60}%`
    }));
    setPetals(newPetals);

    const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 3,
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto space-y-6 md:space-y-8">
        <ScrollReveal>
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-primary/50" />
            <Heart className="mx-2 md:mx-4 text-accent animate-pulse" size={20} />
            <div className="h-[1px] w-8 md:w-12 bg-primary/50" />
          </div>
          <h2 className="text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
            Together with their families
          </h2>
          
          <div className="relative inline-block w-full">
            {/* Butterflies - flying around the name */}
            <Butterfly 
              color="text-yellow-400" 
              className="-top-12 left-[10%] md:left-[20%]" 
              delay="0s" 
              duration="12s" 
            />
            <Butterfly 
              color="text-slate-100" 
              className="-top-16 right-[15%] md:right-[25%]" 
              delay="2s" 
              duration="15s" 
            />
            <Butterfly 
              color="text-yellow-200" 
              className="bottom-0 left-[5%]" 
              delay="5s" 
              duration="14s" 
            />
            <Butterfly 
              color="text-white" 
              className="-bottom-10 right-[10%]" 
              delay="3s" 
              duration="11s" 
            />

            {/* Petal Emitters */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-32 z-40 pointer-events-none">
              {petals.map((petal) => (
                <Petal key={petal.id} delay={petal.delay} color={petal.color} left={petal.left} />
              ))}
            </div>

            <div className="relative py-8 md:py-12">
              {/* Shimmer particles around the names */}
              <div className="absolute inset-0 pointer-events-none">
                {sparkles.map((s) => (
                  <Sparkle key={s.id} delay={s.delay} left={s.left} top={s.top} />
                ))}
              </div>

              {/* Ambient Glow background */}
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150 opacity-30 animate-pulse pointer-events-none" />
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline text-primary mb-6 relative flex flex-wrap items-center justify-center gap-2 md:gap-4 drop-shadow-sm transition-all duration-500 hover:tracking-wider animate-golden-glow">
                <span className="relative inline-block">
                  Groom
                  <RoseIcon className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-6 h-6 md:w-8 md:h-8 text-accent animate-float" />
                </span>
                <span className="text-accent italic">&</span>
                <span className="relative inline-block">
                  Sakshi
                  <RoseIcon className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-6 h-6 md:w-8 md:h-8 text-accent animate-drift" style={{ animationDelay: '-1s' }} />
                </span>
              </h1>
            </div>
          </div>
          
          <p className="text-lg md:text-2xl font-light italic text-muted-foreground mt-4 max-w-xl mx-auto transition-colors hover:text-primary leading-snug">
            Request the pleasure of your company at the celebration of their union
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 py-8 md:py-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 px-4">
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Day</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">October 26, 2024</span>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Time</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">5:00 PM onwards</span>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Place</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">The Grand Ballroom</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-[1px] h-12 md:h-16 bg-primary/40" />
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import React, { useEffect, useState } from "react";

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

const SwansIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Swan Body */}
    <path d="M10,50 Q30,55 50,45 Q40,30 30,30 Q20,30 10,50 Z" fill="white" opacity="0.9" />
    {/* Left Swan Neck */}
    <path d="M45,47 C55,40 55,20 45,15 C40,12 35,15 37,20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Right Swan Body */}
    <path d="M90,50 Q70,55 50,45 Q60,30 70,30 Q80,30 90,50 Z" fill="white" opacity="0.9" />
    {/* Right Swan Neck */}
    <path d="M55,47 C45,40 45,20 55,15 C60,12 65,15 63,20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Subtle Heart shape with necks */}
    <path d="M48,20 Q50,24 52,20" fill="none" stroke="#ffb6c1" strokeWidth="1" opacity="0.6" />
    
    {/* Soft Glow */}
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
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

export function InvitationHero() {
  const quby1 = PlaceHolderImages.find(img => img.id === 'quby-sticker-1');
  const quby2 = PlaceHolderImages.find(img => img.id === 'quby-sticker-2');
  
  const [petals, setPetals] = useState<{ id: number, delay: number, color: string, left: string }[]>([]);

  useEffect(() => {
    const petalColors = ['text-red-400/60', 'text-pink-300/60', 'text-white/80'];
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      left: `${20 + Math.random() * 60}%`
    }));
    setPetals(newPetals);
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
            {/* Elegant Swans Animation */}
            <div className="absolute -top-32 md:-top-48 left-1/2 -translate-x-1/2 w-48 h-32 md:w-64 md:h-48 z-40">
              <SwansIcon className="w-full h-full animate-float drop-shadow-2xl" />
              {/* Petal Emitters */}
              {petals.map((petal) => (
                <Petal key={petal.id} delay={petal.delay} color={petal.color} left={petal.left} />
              ))}
            </div>

            {/* Quby Stickers */}
            {quby1 && (
              <div className="absolute -top-12 md:-top-16 -left-4 md:-left-12 w-16 h-16 md:w-24 md:h-24 animate-float z-20 transition-transform hover:scale-110 duration-300">
                <Image 
                  src={quby1.imageUrl} 
                  alt="Cute Sticker" 
                  width={100} 
                  height={100} 
                  className="rounded-full border-2 md:border-4 border-white shadow-lg"
                  data-ai-hint="cute sticker"
                />
              </div>
            )}
            {quby2 && (
              <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-12 w-14 h-14 md:w-20 md:h-20 animate-drift z-20 transition-transform hover:scale-110 duration-300" style={{ animationDelay: '-3s' }}>
                <Image 
                  src={quby2.imageUrl} 
                  alt="Happy Sticker" 
                  width={80} 
                  height={80} 
                  className="rounded-full border-2 md:border-4 border-white shadow-lg"
                  data-ai-hint="happy sticker"
                />
              </div>
            )}

            <div className="relative">
              {/* Subtle Sparkles background for the name */}
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

"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";

export function CoupleIntroduction() {
  const couplePhoto = PlaceHolderImages.find(img => img.id === 'hero-wedding');

  return (
    <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Meet the Couple</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={200} className="relative aspect-[4/5] md:aspect-square lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group mx-auto">
          {couplePhoto && (
            <Image
              src={couplePhoto.imageUrl}
              alt="The Happy Couple"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={couplePhoto.imageHint}
            />
          )}
          
          {/* Darker overlay at the bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity group-hover:from-black/90" />

          {/* Names and Heart Overlay */}
          <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <h3 className="text-5xl md:text-7xl font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Sakshi
              </h3>
              
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-[#D4AF37]/50 hidden md:block" />
                <Heart 
                  fill="#D4AF37" 
                  className="text-[#D4AF37] animate-pulse w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
                />
                <div className="h-[1px] w-8 bg-[#D4AF37]/50 hidden md:block" />
              </div>

              <h3 className="text-5xl md:text-7xl font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Shiv
              </h3>
            </div>
            
            <p className="text-white/90 text-lg md:text-xl font-headline italic max-w-lg drop-shadow-md">
              "Two souls, one heart. We found in each other what we never knew was missing."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

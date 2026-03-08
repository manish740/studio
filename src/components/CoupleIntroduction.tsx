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

        <ScrollReveal delay={200} className="relative aspect-[4/5] md:aspect-square lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group mx-auto mb-12">
          {couplePhoto && (
            <Image
              src={couplePhoto.imageUrl}
              alt="The Happy Couple"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={couplePhoto.imageHint}
            />
          )}
          
          {/* Subtle Ambient Overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Internal Footer Overlay for Names */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 md:p-12">
            <div className="flex items-center justify-center gap-4 md:gap-12 max-w-3xl mx-auto">
              {/* Sakshi */}
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap">
                Sakshi
              </h3>

              {/* Glowing Heart and Dividers */}
              <div className="flex items-center gap-2 md:gap-6 flex-1 max-w-[120px] md:max-w-[300px]">
                <div className="h-[1px] flex-1 bg-[#D4AF37]/50 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#D4AF37]/60 blur-xl rounded-full animate-pulse" />
                  <Heart 
                    fill="#D4AF37" 
                    className="text-[#D4AF37] w-6 h-6 md:w-12 md:h-12 relative z-10 animate-pulse drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" 
                  />
                </div>
                <div className="h-[1px] flex-1 bg-[#D4AF37]/50 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
              </div>

              {/* Shiv */}
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap">
                Shiv
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="text-center pt-8">
          <p className="text-xl md:text-2xl font-headline italic text-primary/70 max-w-lg mx-auto leading-relaxed">
            "Two souls, one heart. We found in each other what we never knew was missing."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

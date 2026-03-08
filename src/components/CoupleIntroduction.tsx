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
          
          {/* Internal Footer Area for Names */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 md:gap-4 max-w-lg mx-auto">
              {/* Sakshi */}
              <h3 className="text-[16px] font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] whitespace-nowrap uppercase tracking-widest font-bold">
                Sakshi
              </h3>

              {/* Glowing Heart and Dividers */}
              <div className="flex items-center gap-2 md:gap-3 flex-1 max-w-[40px] md:max-w-[60px]">
                <div className="h-[1px] flex-1 bg-[#D4AF37]/40 shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-lg rounded-full animate-pulse" />
                  <Heart 
                    fill="#D4AF37" 
                    className="text-[#D4AF37] w-4 h-4 md:w-5 md:h-5 relative z-10 animate-pulse drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                  />
                </div>
                <div className="h-[1px] flex-1 bg-[#D4AF37]/40 shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
              </div>

              {/* Shiv */}
              <h3 className="text-[16px] font-headline text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] whitespace-nowrap uppercase tracking-widest font-bold">
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

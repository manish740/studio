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

        <ScrollReveal delay={200} className="relative aspect-[4/5] md:aspect-square lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group mx-auto mb-12">
          {couplePhoto && (
            <Image
              src={couplePhoto.imageUrl}
              alt="The Happy Couple"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={couplePhoto.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </ScrollReveal>

        <ScrollReveal delay={400} className="text-center space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-headline text-primary">Sakshi</h3>
              <p className="text-muted-foreground italic max-w-xs mx-auto">
                A soul full of sunshine, Sakshi brings grace and joy to every moment.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent/30 hidden md:block" />
              <Heart fill="currentColor" className="text-accent animate-pulse w-8 h-8" />
              <div className="h-[1px] w-12 bg-accent/30 hidden md:block" />
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-headline text-primary">Shiv</h3>
              <p className="text-muted-foreground italic max-w-xs mx-auto">
                With a heart of gold, Shiv is the calm and steady anchor in their journey.
              </p>
            </div>
          </div>
          
          <p className="text-xl font-headline italic text-primary/70 pt-8 border-t border-primary/10 max-w-lg mx-auto">
            "Two souls, one heart. We found in each other what we never knew was missing."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

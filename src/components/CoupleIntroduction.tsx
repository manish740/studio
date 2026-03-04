
"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";

export function CoupleIntroduction() {
  const couplePhoto = PlaceHolderImages.find(img => img.id === 'hero-wedding');

  return (
    <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Meet the Couple</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Couple Photo Area */}
          <ScrollReveal delay={200} className="relative aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            {couplePhoto && (
              <Image
                src={couplePhoto.imageUrl}
                alt="Manish and Sakshi"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={couplePhoto.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
               <div className="h-[1px] w-12 bg-white/50" />
               <Heart fill="currentColor" size={24} className="animate-pulse" />
               <div className="h-[1px] w-12 bg-white/50" />
            </div>
          </ScrollReveal>

          {/* Biographies */}
          <div className="space-y-12">
            <ScrollReveal delay={400} className="space-y-4 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-accent font-headline text-4xl italic transition-transform group-hover:scale-110">M</span>
                <h3 className="text-3xl font-headline text-primary group-hover:text-accent transition-colors">Manish</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic transition-colors group-hover:text-foreground">
                A dreamer and a doer, Manish is known for his calm nature and infectious smile. He believes that true love is found in the smallest moments of everyday life.
              </p>
              <div className="h-[1px] w-full bg-primary/10 group-hover:bg-accent/30 transition-colors" />
            </ScrollReveal>

            <ScrollReveal delay={600} className="space-y-4 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-accent font-headline text-4xl italic transition-transform group-hover:scale-110">S</span>
                <h3 className="text-3xl font-headline text-primary group-hover:text-accent transition-colors">Sakshi</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic transition-colors group-hover:text-foreground">
                Radiant and kind-hearted, Sakshi brings light to every room she enters. Her passion for life and art is matched only by her devotion to those she holds dear.
              </p>
              <div className="h-[1px] w-full bg-primary/10 group-hover:bg-accent/30 transition-colors" />
            </ScrollReveal>

            <ScrollReveal delay={800} className="pt-4">
               <blockquote className="border-l-4 border-accent pl-6 py-2 hover:bg-accent/5 transition-colors rounded-r-lg">
                  <p className="text-xl font-headline text-primary/80 italic">
                    "Two souls, one heart. We found in each other what we never knew was missing."
                  </p>
               </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

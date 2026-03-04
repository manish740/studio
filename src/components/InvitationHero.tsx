
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function InvitationHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wedding');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            priority
            className="object-cover opacity-30 grayscale-[20%]"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-primary/50" />
            <Heart className="mx-4 text-accent animate-pulse" size={24} />
            <div className="h-[1px] w-12 bg-primary/50" />
          </div>
          <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Together with their families
          </h2>
          <h1 className="text-6xl md:text-8xl font-headline text-primary mb-6">
            John <span className="text-accent italic">&</span> Jane
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-muted-foreground">
            Request the pleasure of your company at the celebration of their union
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-primary/20 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="text-accent mb-2" size={28} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">The Day</span>
              <span className="text-xl font-headline font-semibold">October 26, 2024</span>
            </div>
            <div className="flex flex-col items-center space-y-2 border-x border-primary/10">
              <Clock className="text-accent mb-2" size={28} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">The Time</span>
              <span className="text-xl font-headline font-semibold">5:00 PM onwards</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="text-accent mb-2" size={28} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">The Place</span>
              <span className="text-xl font-headline font-semibold">The Grand Ballroom</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-primary/40" />
      </div>
    </section>
  );
}

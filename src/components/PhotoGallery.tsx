
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "./ScrollReveal";

export function PhotoGallery() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section className="py-24 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Our Love Story</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            "You are every reason, every hope, and every dream I've ever had."
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <ScrollReveal key={img.id} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-muted">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-headline text-xl italic">{img.description}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { Users, Heart } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function FamilyDetails() {
  const bridePhoto = PlaceHolderImages.find(img => img.id === 'bride-sakshi');

  const groomFamily = {
    father: "Mr. Vinod Kumar",
    mother: "Mrs. Abha",
    relation: "Son of"
  };

  const brideFamily = {
    father: "Late Satish Singh",
    mother: "Mrs. Reema Singh",
    relation: "Daughter of"
  };

  return (
    <section className="py-24 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">The Families</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
          <p className="mt-6 text-muted-foreground italic">
            "Family is where life begins and love never ends."
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Sakshi's Family */}
          <ScrollReveal delay={100} className="h-full">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden group hover:border-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Users size={80} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 relative z-10 h-full">
                {bridePhoto && (
                  <div className="w-full md:w-32 h-48 md:h-full relative rounded-2xl overflow-hidden shrink-0 border-2 border-accent/20 group-hover:border-accent transition-colors">
                    <Image 
                      src={bridePhoto.imageUrl} 
                      alt="Bride Sakshi" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={bridePhoto.imageHint}
                    />
                  </div>
                )}
                
                <div className="space-y-6 flex-1 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                      <Heart size={24} className="group-hover:fill-current" />
                    </div>
                    <h3 className="text-3xl font-headline text-primary group-hover:text-accent transition-colors">Sakshi's Family</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group/item transition-all duration-200">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1 group-hover/item:text-accent/60">Parents</span>
                      <div className="text-xl md:text-2xl font-headline text-primary/80 group-hover/item:text-primary transition-colors leading-relaxed">
                        <p>{brideFamily.father}</p>
                        <p>{brideFamily.mother}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Shiv's Family */}
          <ScrollReveal delay={300} className="h-full">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden group hover:border-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Users size={80} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Heart size={24} className="group-hover:fill-current" />
                  </div>
                  <h3 className="text-3xl font-headline text-primary group-hover:text-accent transition-colors">Shiv's Family</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="group/item transition-all duration-200">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1 group-hover/item:text-accent/60">Parents</span>
                    <div className="text-xl md:text-2xl font-headline text-primary/80 group-hover/item:text-primary transition-colors leading-relaxed">
                      <p>{groomFamily.father}</p>
                      <p>{groomFamily.mother}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

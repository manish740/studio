"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Users, MapPin, Heart } from "lucide-react";

export function FamilyDetails() {
  const groomFamily = {
    parents: "Mr. & Mrs. Ramesh Kumar",
    origin: "New Delhi",
    relation: "Son of"
  };

  const brideFamily = {
    parents: "Mr. & Mrs. Sunil Sharma",
    origin: "Jaipur, Rajasthan",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Groom's Family */}
          <ScrollReveal delay={100}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={80} className="text-primary" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-3xl font-headline text-primary">Manish's Family</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1">Parents</span>
                    <p className="text-xl font-semibold text-primary/80">{groomFamily.parents}</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1">Hailing From</span>
                      <p className="text-lg text-muted-foreground">{groomFamily.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bride's Family */}
          <ScrollReveal delay={300}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={80} className="text-primary" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-3xl font-headline text-primary">Sakshi's Family</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1">Parents</span>
                    <p className="text-xl font-semibold text-primary/80">{brideFamily.parents}</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1">Hailing From</span>
                      <p className="text-lg text-muted-foreground">{brideFamily.origin}</p>
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

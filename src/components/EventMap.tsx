"use client";

import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function EventMap() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline text-primary mb-4">Location & Directions</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal className="lg:col-span-1 space-y-8">
            <div className="bg-primary/5 p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={24} className="text-accent" />
                <h3 className="text-2xl font-headline">The Grand Ballroom</h3>
              </div>
              <p className="text-muted-foreground">
                123 Elegant Avenue, Celebration City<br />
                Suite 456, NY 10001
              </p>
              <div className="pt-4">
                <h4 className="font-semibold text-sm uppercase tracking-widest text-primary mb-2">Ceremony</h4>
                <p className="text-muted-foreground text-sm">Starts promptly at 5:00 PM</p>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-sm uppercase tracking-widest text-primary mb-2">Reception</h4>
                <p className="text-muted-foreground text-sm">Cocktails and dancing to follow</p>
              </div>
              <Button 
                className="w-full mt-6 flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border-none shadow-none"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                <Navigation size={18} />
                Open in Maps
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="w-full h-[450px] bg-muted rounded-2xl overflow-hidden relative shadow-lg">
              {/* Mock map interface since we don't have a real key here */}
              <div className="absolute inset-0 bg-[#f8f9fa] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MapPin size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-headline text-primary">Map View</h4>
                  <p className="text-muted-foreground max-w-sm">
                    In a production app, an interactive Google Map would be embedded here showcasing the venue location and nearby points of interest.
                  </p>
                </div>
              </div>
              {/* Overlay for map feel */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded shadow-sm flex flex-col gap-2">
                 <div className="w-8 h-8 flex items-center justify-center border-b border-muted">+</div>
                 <div className="w-8 h-8 flex items-center justify-center">-</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function EventMap() {
  const locations = [
    {
      name: "Aggarwal Dharamshala",
      address: "Shakarpur, Delhi",
      event: "Mehandi & Sangeet",
      time: "6:00 PM"
    },
    {
      name: "Iskcon Temple",
      address: "Iskcon Temple Rd, Sant Nagar, East of Kailash, New Delhi, Delhi 110065",
      event: "Wedding Ceremony",
      time: "11:00 AM"
    },
    {
      name: "Eros Hotel",
      address: "Nehru Place, Delhi",
      event: "Reception",
      time: "7:00 PM"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline text-primary mb-4">Locations & Directions</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal className="lg:col-span-1 space-y-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-primary/5 p-6 rounded-2xl space-y-3 group hover:bg-primary/10 transition-colors duration-300 shadow-sm border border-transparent hover:border-primary/10">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-headline group-hover:text-accent transition-colors">{loc.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <Clock size={12} className="text-accent" />
                  <span>{loc.time}</span>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {loc.address}
                </p>
                <div className="pt-2 border-t border-primary/5 flex justify-between items-center">
                  <span className="font-semibold text-[10px] uppercase tracking-widest text-primary/60">{loc.event}</span>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="h-7 text-[10px] flex items-center gap-1 hover:text-accent"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " " + loc.address)}`, '_blank')}
                  >
                    <Navigation size={10} />
                    Map
                  </Button>
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="w-full h-full min-h-[450px] bg-muted rounded-2xl overflow-hidden relative shadow-lg group">
              <div className="absolute inset-0 bg-[#f8f9fa] flex items-center justify-center transition-all duration-700 group-hover:bg-[#f1f3f4]">
                <div className="text-center space-y-4 p-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MapPin size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-headline text-primary">Venues Overview</h4>
                  <p className="text-muted-foreground max-w-sm text-sm">
                    Our celebrations span across beautiful venues in Delhi. Tap the directions on the left to navigate to each event seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

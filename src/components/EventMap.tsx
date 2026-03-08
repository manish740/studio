"use client";

import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function EventMap() {
  const locations = [
    {
      name: "Aggarwal Dharamshala",
      address: "J7MP+P7P, Madhuban Rd, Veer Savarkar Block, Dayanand Colony, Shakarpur, Delhi, 110092",
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
      address: "Nehru Place, New Delhi, Delhi 110019",
      event: "Reception",
      time: "7:00 PM"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-headline text-primary mb-4">Locations & Directions</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8">
          <ScrollReveal className="space-y-6 max-w-2xl mx-auto w-full">
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
        </div>
      </div>
    </section>
  );
}


"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Music, Truck, Heart, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WeddingEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

export function WeddingEvents() {
  const events: WeddingEvent[] = [
    {
      id: "1",
      title: "Sangeet & Dance",
      time: "Oct 25, 07:00 PM",
      description: "An evening of music, dance, and celebration with the couple.",
      icon: <Music className="text-accent" size={24} />,
    },
    {
      id: "2",
      title: "Arrival of Barat",
      time: "Oct 26, 04:00 PM",
      description: "Welcoming the groom and his family with grand celebrations.",
      icon: <Truck className="text-primary" size={24} />,
    },
    {
      id: "3",
      title: "Vidai Ceremony",
      time: "Oct 27, 04:00 AM",
      description: "The emotional farewell as the bride starts her new journey.",
      icon: <Heart className="text-accent" size={24} />,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Wedding Itinerary</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
          <p className="mt-6 text-muted-foreground italic">
            "Every moment is a memory in the making."
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 150}>
              <Card className="h-full border-none shadow-lg bg-white/60 backdrop-blur-sm group hover:translate-y-[-8px] hover:shadow-2xl hover:bg-white/90 transition-all duration-300 cursor-default">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-inner mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {event.icon}
                  </div>
                  
                  <h3 className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">{event.title}</h3>
                  
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Clock size={14} className="group-hover:animate-spin-slow" />
                    <span className="truncate max-w-[150px]">{event.time}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

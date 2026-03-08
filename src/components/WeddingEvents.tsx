"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Music, Heart, Utensils, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WeddingEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  description: string;
  icon: React.ReactNode;
}

export function WeddingEvents() {
  const events: WeddingEvent[] = [
    {
      id: "1",
      title: "Mehandi & Sangeet",
      time: "April 19, 2026 • 6:00 PM",
      location: "Aggarwal Dharamshala, Shakarpur",
      description: "An evening of vibrant colors, music, and henna as we celebrate the union. Agarshen Marg, Master Block.",
      icon: <Music className="text-accent" size={24} />,
    },
    {
      id: "2",
      title: "Wedding Ceremony",
      time: "April 20, 2026 • 11:00 AM",
      location: "Iskcon Temple Rd, Sant Nagar, East of Kailash, New Delhi, Delhi 110065",
      description: "Witness our sacred vows and the beginning of our new journey in a divine atmosphere.",
      icon: <Heart className="text-primary" size={24} />,
    },
    {
      id: "3",
      title: "Reception Dinner",
      time: "April 20, 2026 • 7:00 PM",
      location: "EROS HOTEL, Nehru Place, New Delhi, Delhi 110019",
      description: "Join us for a grand celebration dinner and dance as we celebrate our first evening as husband and wife.",
      icon: <Utensils className="text-accent" size={24} />,
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
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-muted-foreground text-[10px] italic">
                      <MapPin size={12} className="text-accent" />
                      <span className="max-w-[200px]">{event.location}</span>
                    </div>
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

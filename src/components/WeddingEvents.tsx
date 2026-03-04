"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Music, Heart, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DecorativeCar = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
    <path d="M13 8V5c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v3" />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
    <path d="M5 10c0-1 1-2 2-2h4" />
  </svg>
);

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
      icon: <DecorativeCar className="text-primary" size={24} />,
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

"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const RoseIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.5 2 9 3 8 4.5C7 3 5.5 2 4 2C2 2 1 3.5 1 5.5C1 8.5 4 11.5 8 15C8 15 8 15 8 15C8 15 8 15 8 15C12 11.5 15 8.5 15 5.5C15 3.5 14 2 12 2Z" />
    <path d="M18 7C17.2 7 16.5 7.4 16 8.1C15.5 7.4 14.8 7 14 7C12.9 7 12 7.9 12 9C12 10.8 13.8 12.6 16 14.5C18.2 12.6 20 10.8 20 9C20 7.9 19.1 7 18 7Z" />
    <path d="M12 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M12 18C10.5 18.5 9 17.5 9 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M12 19.5C13.5 20 15 19 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export function InvitationHero() {
  const quby1 = PlaceHolderImages.find(img => img.id === 'quby-sticker-1');
  const quby2 = PlaceHolderImages.find(img => img.id === 'quby-sticker-2');

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center py-12">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto space-y-6 md:space-y-8">
        <ScrollReveal>
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-primary/50" />
            <Heart className="mx-2 md:mx-4 text-accent animate-pulse" size={20} />
            <div className="h-[1px] w-8 md:w-12 bg-primary/50" />
          </div>
          <h2 className="text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
            Together with their families
          </h2>
          
          <div className="relative inline-block w-full">
            {/* Quby Stickers */}
            {quby1 && (
              <div className="absolute -top-12 md:-top-16 -left-4 md:-left-12 w-16 h-16 md:w-24 md:h-24 animate-float z-20 transition-transform hover:scale-110 duration-300">
                <Image 
                  src={quby1.imageUrl} 
                  alt="Cute Sticker" 
                  width={100} 
                  height={100} 
                  className="rounded-full border-2 md:border-4 border-white shadow-lg"
                  data-ai-hint="cute sticker"
                />
              </div>
            )}
            {quby2 && (
              <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-12 w-14 h-14 md:w-20 md:h-20 animate-drift z-20 transition-transform hover:scale-110 duration-300" style={{ animationDelay: '-3s' }}>
                <Image 
                  src={quby2.imageUrl} 
                  alt="Happy Sticker" 
                  width={80} 
                  height={80} 
                  className="rounded-full border-2 md:border-4 border-white shadow-lg"
                  data-ai-hint="happy sticker"
                />
              </div>
            )}

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline text-primary mb-6 relative flex flex-wrap items-center justify-center gap-2 md:gap-4 drop-shadow-sm transition-all duration-500 hover:tracking-wider">
              <span className="relative inline-block">
                Groom
                <RoseIcon className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-6 h-6 md:w-8 md:h-8 text-accent animate-float" />
              </span>
              <span className="text-accent italic">&</span>
              <span className="relative inline-block">
                Sakshi
                <RoseIcon className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-6 h-6 md:w-8 md:h-8 text-accent animate-drift" style={{ animationDelay: '-1s' }} />
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl font-light italic text-muted-foreground mt-4 max-w-xl mx-auto transition-colors hover:text-primary leading-snug">
            Request the pleasure of your company at the celebration of their union
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 py-8 md:py-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 px-4">
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Day</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">October 26, 2024</span>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Time</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">5:00 PM onwards</span>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-2 group p-2 rounded-xl transition-colors hover:bg-primary/5">
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">The Place</span>
              <span className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">The Grand Ballroom</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-[1px] h-12 md:h-16 bg-primary/40" />
      </div>
    </section>
  );
}

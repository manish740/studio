"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music2, Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A romantic background music player for the wedding invitation.
 * Features a luxurious toggle button, subtle animations, and autoplay support.
 */

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // A soft, romantic instrumental track URL (Pachelbel's Canon or similar style)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    
    const playAttempt = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        // Gentle cinematic fade-in effect
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (vol < 0.25) {
            vol += 0.01;
            audio.volume = vol;
          } else {
            clearInterval(fadeInterval);
          }
        }, 150);
      }).catch(() => {
        // Autoplay likely blocked by browser, waiting for first interaction
      });
    };

    // Interaction listener to start music if autoplay was initially blocked
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        playAttempt();
        setHasInteracted(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      });
    }
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[200]">
      <audio ref={audioRef} src={musicUrl} loop />
      
      <div className="relative group">
        {/* Interaction Hint for First-time Guests */}
        {!hasInteracted && !isPlaying && (
          <div className="absolute bottom-full right-0 mb-4 animate-fade-in whitespace-nowrap pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-accent/20 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Play Romantic Theme
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            </div>
          </div>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={toggleMusic}
          className={cn(
            "w-14 h-14 rounded-full border-2 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(212,175,55,0.25)] transition-all duration-700",
            isPlaying ? "border-accent scale-100" : "border-primary/20 scale-95 opacity-80",
            "hover:scale-110 hover:rotate-6 active:scale-95 group-hover:border-accent/60"
          )}
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <Volume2 className="text-accent w-6 h-6 transition-all" />
            ) : (
              <VolumeX className="text-primary/40 w-6 h-6 transition-all" />
            )}
            
            {/* Ambient Animated Musical Notes */}
            {isPlaying && (
              <>
                <Music size={12} className="absolute -top-6 -right-2 text-accent/40 animate-bounce" style={{ animationDuration: '3s' }} />
                <Music2 size={10} className="absolute -bottom-5 -left-4 text-primary/30 animate-bounce" style={{ animationDuration: '4.5s' }} />
              </>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
}

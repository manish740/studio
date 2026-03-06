
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A premium, royal-themed background music player.
 * Features:
 * - Syncs with the IntroOverlay tap event
 * - Cinematic volume fade-in
 * - Shimmering luxury button design
 * - Floating musical note animations
 */

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // A high-quality romantic instrumental track (Royalty-free)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume to 0 for the cinematic fade-in
    audio.volume = 0;
    
    const startPlayback = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
        // Cinematic volume fade-in
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (vol < 0.3) {
            vol += 0.01;
            audio.volume = parseFloat(vol.toFixed(2));
          } else {
            clearInterval(fadeInterval);
          }
        }, 100);
      }).catch(() => {
        // Autoplay blocked by browser policy
        console.log("Autoplay blocked. Waiting for guest interaction.");
      });
    };

    // Aggressive listeners to catch the intro tap or any scroll/click
    const interactions = ['click', 'touchstart', 'scroll', 'mousedown'];
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        startPlayback();
      }
      interactions.forEach(event => window.removeEventListener(event, handleFirstInteraction));
    };

    interactions.forEach(event => window.addEventListener(event, handleFirstInteraction));

    return () => {
      interactions.forEach(event => window.removeEventListener(event, handleFirstInteraction));
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
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[300]">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      
      <div className="relative group">
        {/* Shimmering Aura around button */}
        <div className={cn(
          "absolute inset-0 rounded-full blur-xl bg-accent/20 transition-opacity duration-1000",
          isPlaying ? "opacity-100 animate-pulse" : "opacity-0"
        )} />

        <Button
          variant="outline"
          size="icon"
          onClick={toggleMusic}
          className={cn(
            "w-16 h-16 rounded-full border-2 bg-white/90 backdrop-blur-2xl shadow-[0_15px_50px_rgba(212,175,55,0.3)] transition-all duration-700",
            isPlaying ? "border-accent scale-100 rotate-0" : "border-primary/10 scale-90 -rotate-12 opacity-80",
            "hover:scale-110 hover:border-accent active:scale-95 overflow-visible"
          )}
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <Volume2 className="text-accent w-7 h-7 animate-in fade-in zoom-in duration-500" />
            ) : (
              <VolumeX className="text-primary/30 w-7 h-7 animate-in fade-in zoom-in duration-500" />
            )}
            
            {/* Animated Musical Particles */}
            {isPlaying && (
              <div className="absolute inset-0 pointer-events-none">
                <Music size={12} className="absolute -top-8 -right-2 text-accent/60 animate-bounce" style={{ animationDuration: '2s' }} />
                <Music size={10} className="absolute -top-4 -left-6 text-primary/40 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
}

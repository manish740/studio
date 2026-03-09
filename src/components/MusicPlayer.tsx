"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A background music player optimized for a "truly automatic" feel.
 * It attempts immediate playback on mount and uses highly sensitive interaction 
 * listeners as a fallback to bypass browser autoplay restrictions seamlessly.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = MusicConfig.volume;
    audio.loop = true;

    const startPlayback = () => {
      if (!audio) return;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Success! Remove all listeners immediately
            cleanup();
          })
          .catch(() => {
            // Still blocked by browser, listeners will catch the first micro-interaction
          });
      }
    };

    // A comprehensive list of events that satisfy browser interaction requirements
    const interactionEvents = [
      "click",
      "touchstart",
      "mousedown",
      "keydown",
      "scroll",
      "wheel",
      "pointerdown",
      "mousemove" // Added for desktop sensitivity
    ];

    const cleanup = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, startPlayback);
        document.removeEventListener(event, startPlayback);
      });
    };

    // Attach listeners for immediate fallback
    interactionEvents.forEach(event => {
      window.addEventListener(event, startPlayback, { once: true, passive: true });
      document.addEventListener(event, startPlayback, { once: true, passive: true });
    });

    // Attempt immediate play (works on some desktops/browsers with high engagement)
    startPlayback();

    return () => cleanup();
  }, []);

  return (
    <audio
      ref={audioRef}
      src={MusicConfig.audioPath}
      autoPlay
      loop
      preload="auto"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

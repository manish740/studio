"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A hidden background music player.
 * Music starts directly at full configured volume upon the first user interaction 
 * to comply with browser autoplay policies.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set target volume immediately with no fade
    audio.volume = MusicConfig.volume;

    const startPlayback = () => {
      audio.play().catch(() => {
        // Autoplay blocked, wait for next interaction
      });
    };

    // Events that signal a user interaction
    const interactionEvents = ["click", "touchstart", "scroll", "keydown"];
    
    const handleInteraction = () => {
      startPlayback();
      // Once music starts, we stop listening for initial triggers
      interactionEvents.forEach(event => 
        window.removeEventListener(event, handleInteraction)
      );
    };

    // Listen for the first interaction to start music directly
    interactionEvents.forEach(event => 
      window.addEventListener(event, handleInteraction, { once: true })
    );

    // Initial attempt for browsers that might allow it
    startPlayback();

    return () => {
      interactionEvents.forEach(event => 
        window.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={MusicConfig.audioPath}
      loop
      preload="auto"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}


"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A hidden background music player optimized for automatic playback.
 * Attempts to bypass browser autoplay restrictions by trying to play immediately on mount
 * and listening for any page-level interaction to start as soon as permitted.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume directly as requested
    audio.volume = MusicConfig.volume;

    const attemptPlay = () => {
      if (!audio) return;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Success! We can stop trying to play.
            interactionEvents.forEach(event => 
              window.removeEventListener(event, attemptPlay)
            );
          })
          .catch(() => {
            // Autoplay was likely prevented by the browser. 
            // The interaction listeners will handle it as soon as the user touches the screen.
          });
      }
    };

    // Attempt immediate playback on mount
    attemptPlay();

    // Reliable fallback events to trigger playback if immediate autoplay fails.
    // Browsers often require at least one of these to 'unlock' audio.
    const interactionEvents = ["click", "touchstart", "mousedown", "keydown", "scroll"];
    
    interactionEvents.forEach(event => 
      window.addEventListener(event, attemptPlay, { once: true })
    );

    return () => {
      interactionEvents.forEach(event => 
        window.removeEventListener(event, attemptPlay)
      );
    };
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

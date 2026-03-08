"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A hidden background music player optimized for cross-device compatibility.
 * Starts playback immediately upon the first valid user gesture (tap/click) to 
 * bypass strict mobile/desktop autoplay policies.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = MusicConfig.volume;

    const startPlayback = () => {
      if (!audio) return;
      
      audio.play()
        .then(() => {
          // If successful, we can stop listening for interaction triggers
          interactionEvents.forEach(event => 
            window.removeEventListener(event, handleInteraction)
          );
        })
        .catch(() => {
          // Playback failed, likely due to browser restrictions. 
          // We wait for the next user interaction.
        });
    };

    const handleInteraction = () => {
      startPlayback();
    };

    // Reliable user-initiated events for audio playback (scroll is often ignored)
    const interactionEvents = ["click", "touchstart", "mousedown", "keydown"];
    
    interactionEvents.forEach(event => 
      window.addEventListener(event, handleInteraction, { once: false })
    );

    // Attempt to play immediately (some browsers allow this if previously permitted)
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

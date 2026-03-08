"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A hidden background music player optimized for mobile devices.
 * Uses a combination of custom event triggers and general interaction listeners
 * to ensure playback starts on the first valid user gesture (tap/click).
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = MusicConfig.volume;

    const startPlayback = () => {
      if (!audio) return;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Success! Remove all interaction listeners
            removeListeners();
          })
          .catch((error) => {
            // Autoplay prevented, waiting for next interaction
            console.log("Waiting for user gesture to permit audio...");
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("start-wedding-music", startPlayback);
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("mousedown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
    };

    // Listener for the "Open Invitation" button custom event
    window.addEventListener("start-wedding-music", startPlayback);
    
    // Fallback interaction listeners for mobile compatibility
    window.addEventListener("click", startPlayback);
    window.addEventListener("touchstart", startPlayback, { passive: true });
    window.addEventListener("mousedown", startPlayback);
    window.addEventListener("keydown", startPlayback);

    return () => removeListeners();
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

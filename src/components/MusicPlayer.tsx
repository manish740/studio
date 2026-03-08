"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A hidden background music player that handles browser autoplay restrictions.
 * It waits for the first user interaction (click, scroll, touch) to start playback.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume from config
    audio.volume = MusicConfig.volume;

    const startPlayback = () => {
      audio.play().then(() => {
        // Success! Remove listeners once playing.
        removeInteractionListeners();
      }).catch((error) => {
        // Autoplay likely blocked, will try again on next interaction.
        console.log("Autoplay blocked, waiting for interaction...");
      });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("keydown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };

    // Add listeners for various user interactions to bypass autoplay policy
    window.addEventListener("click", startPlayback, { once: true });
    window.addEventListener("keydown", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, { once: true });
    window.addEventListener("scroll", startPlayback, { once: true });

    // Initial attempt (browsers might block this until interaction)
    startPlayback();

    return () => {
      removeInteractionListeners();
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

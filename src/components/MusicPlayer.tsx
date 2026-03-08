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
      window.removeEventListener("mousedown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };

    // Add listeners for various user interactions
    window.addEventListener("mousedown", startPlayback);
    window.addEventListener("keydown", startPlayback);
    window.addEventListener("touchstart", startPlayback);
    window.addEventListener("scroll", startPlayback);

    // Initial attempt (often blocked but worth trying)
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
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

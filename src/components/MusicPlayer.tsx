"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A high-performance background music player.
 * Optimized for zero-delay playback by using low-latency event triggers
 * and immediate audio buffer warming.
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
            // Success! Remove all interaction listeners immediately
            removeListeners();
          })
          .catch((error) => {
            // Audio was blocked by browser, we keep listeners active for next attempt
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("mousedown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };

    // 1. Attempt immediate playback (some browsers/configurations allow this)
    startPlayback();

    // 2. Aggressive low-latency triggers for mobile and desktop
    window.addEventListener("pointerdown", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, { once: true, passive: true });
    window.addEventListener("mousedown", startPlayback, { once: true });
    window.addEventListener("keydown", startPlayback, { once: true });
    window.addEventListener("scroll", startPlayback, { once: true, passive: true });

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

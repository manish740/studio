"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A background music player optimized for cross-browser autoplay compliance.
 * It attempts autoplay on load and falls back to user interaction listeners (click, tap, scroll).
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume and ensure standard audio properties
    audio.volume = MusicConfig.volume;
    audio.loop = true;

    const startPlayback = () => {
      if (!audio) return;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Successfully started! Remove interaction listeners.
            cleanup();
          })
          .catch((error) => {
            // Autoplay was prevented by browser policy. 
            // The interaction listeners will handle the next attempt.
          });
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("mousedown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
      window.removeEventListener("scroll", startPlayback);
      window.removeEventListener("wheel", startPlayback);
      document.removeEventListener("scroll", startPlayback);
    };

    // Attach listeners for interaction fallback. 
    // Browsers like Safari and Chrome require a user-initiated event to unlock audio.
    window.addEventListener("click", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, { once: true });
    window.addEventListener("mousedown", startPlayback, { once: true });
    window.addEventListener("keydown", startPlayback, { once: true });
    window.addEventListener("scroll", startPlayback, { once: true });
    window.addEventListener("wheel", startPlayback, { once: true });
    document.addEventListener("scroll", startPlayback, { once: true });

    // Initial attempt: Some desktop browsers allow autoplay if the user has visited the site before.
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

"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A background music player that triggers automatically
 * upon the user's first interaction with the page (scroll, touch, or click).
 * This bypasses browser autoplay restrictions effectively.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = MusicConfig.volume;
    audio.loop = true;

    const handleInteraction = () => {
      if (!audio) return;
      
      audio.play()
        .then(() => {
          // Once successfully playing, remove all listeners to prevent repeated calls
          cleanup();
        })
        .catch(() => {
          // Playback might still be blocked if the interaction wasn't "strong" enough
          // We keep listeners active in this case.
        });
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
    };

    // Attach listeners for natural user interactions
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("mousedown", handleInteraction, { once: true });

    // Initial attempt (works in some environments/desktops)
    handleInteraction();

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

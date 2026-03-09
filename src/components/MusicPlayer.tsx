"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A background music player optimized for an "automatic" experience.
 * It attempts autoplay immediately and attaches multiple interaction listeners
 * (scroll, touch, click) to ensure the audio starts on the guest's very first move.
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
            // Success! Remove all listeners
            cleanup();
          })
          .catch(() => {
            // Still blocked by browser, listeners will catch the next move
          });
      }
    };

    const interactionEvents = [
      "click",
      "touchstart",
      "mousedown",
      "keydown",
      "scroll",
      "wheel",
      "pointerdown"
    ];

    const cleanup = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, startPlayback);
        document.removeEventListener(event, startPlayback);
      });
    };

    // Attach listeners for interaction fallback
    interactionEvents.forEach(event => {
      window.addEventListener(event, startPlayback, { once: true, passive: true });
      document.addEventListener(event, startPlayback, { once: true, passive: true });
    });

    // Initial attempt for browsers with low strictness or high engagement index
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

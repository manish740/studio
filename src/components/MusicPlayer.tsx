"use client";

import React, { useEffect, useRef } from "react";
import { MusicConfig } from "@/lib/music-config";

/**
 * @fileOverview A background music player optimized for cross-browser autoplay compliance.
 * Listens for standard user gestures to trigger high-fidelity audio playback.
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
            // Success! We can stop listening for gestures
            removeListeners();
          })
          .catch((error) => {
            // Browser still blocking, wait for next interaction
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("mousedown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
    };

    // Browsers require a user gesture (click, tap, keypress) to play audio with sound.
    // We attach listeners to the window so ANY interaction starts the music.
    window.addEventListener("click", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, { once: true });
    window.addEventListener("mousedown", startPlayback, { once: true });
    window.addEventListener("keydown", startPlayback, { once: true });

    // Initial attempt (might work if user has interacted with the domain before)
    startPlayback();

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

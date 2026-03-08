"use client";

import { useEffect, useRef } from "react";

/**
 * @fileOverview A robust background music player for the wedding invitation.
 * Features:
 * - Completely hidden UI.
 * - Multi-stage interaction detection (click, scroll, touch) to bypass autoplay blocks.
 * - High-quality romantic cinematic instrumental (Direct MP3).
 * - Automatic loop and volume normalization.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // A high-quality, stable romantic cinematic instrumental MP3
  const audioSrc = "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set a comfortable background volume level
    audio.volume = 0.35;

    const startPlayback = () => {
      if (audio.paused) {
        audio.play()
          .then(() => {
            console.log("Music started successfully.");
            // Once playing, we can remove all interaction listeners
            removeListeners();
          })
          .catch((error) => {
            console.log("Autoplay blocked, waiting for more explicit interaction.");
          });
      }
    };

    const interactionEvents = ["click", "touchstart", "scroll", "mousedown", "keydown"];
    
    const handleFirstInteraction = () => {
      startPlayback();
    };

    const removeListeners = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };

    // Attach listeners to window to capture the first guest action
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    // Attempt to play immediately (works if browser allows)
    startPlayback();

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      loop
      preload="auto"
      className="hidden"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

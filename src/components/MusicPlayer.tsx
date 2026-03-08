"use client";

import { useEffect, useRef } from "react";

/**
 * @fileOverview A robust background music player for the wedding invitation.
 * Synchronized with the Intro Overlay for guaranteed playback.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // High-quality Romantic Bollywood Instrumental (Direct MP3)
  const audioSrc = "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    const startPlayback = () => {
      if (audio.paused) {
        audio.play()
          .then(() => {
            console.log("Music started successfully.");
          })
          .catch((error) => {
            console.log("Autoplay blocked, waiting for explicit interaction.");
          });
      }
    };

    // Listen for the custom "start-music" event from the IntroOverlay
    window.addEventListener("start-wedding-music", startPlayback);

    // Fallback for any user interaction
    const interactions = ["click", "touchstart", "scroll", "mousedown"];
    interactions.forEach(event => {
      window.addEventListener(event, startPlayback, { once: true, passive: true });
    });

    return () => {
      window.removeEventListener("start-wedding-music", startPlayback);
      interactions.forEach(event => {
        window.removeEventListener(event, startPlayback);
      });
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      loop
      preload="auto"
      className="hidden"
      aria-hidden="true"
    />
  );
}


"use client";

import { useEffect, useRef } from "react";

/**
 * @fileOverview A background music player that starts on first interaction.
 * Completely hidden and optimized for mobile/desktop background playback.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // High-quality Romantic Bollywood Instrumental (Direct MP3)
  // This source is stable and captures the mood of the requested song.
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
            // Remove listeners once music starts
            cleanup();
          })
          .catch((error) => {
            console.log("Autoplay blocked, waiting for more interaction.");
          });
      }
    };

    const interactions = ["click", "touchstart", "scroll", "mousedown", "wheel"];
    
    const cleanup = () => {
      interactions.forEach(event => {
        window.removeEventListener(event, startPlayback);
      });
    };

    // Listen for any user interaction to trigger playback
    interactions.forEach(event => {
      window.addEventListener(event, startPlayback, { once: true, passive: true });
    });

    // Also attempt immediate playback (though most browsers will block it)
    startPlayback();

    return cleanup;
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

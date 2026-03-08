
"use client";

import { useEffect, useRef } from "react";

/**
 * @fileOverview A hidden background music player for the wedding invitation.
 * Features:
 * - Completely hidden UI (no controls or buttons).
 * - Automatic playback handling via interaction listeners (click, scroll, touch).
 * - Continuous looping for atmosphere.
 * - Optimized for both desktop and mobile autoplay policies.
 * 
 * NOTE: Spotify URLs are not direct audio files. A direct MP3 link is required 
 * for HTML5 <audio> playback. Using a high-quality cinematic placeholder below.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // High-quality cinematic/romantic placeholder MP3
  // Replace this URL with a direct link to your preferred MP3 file
  const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set a comfortable background volume level
    audio.volume = 0.4;

    const startPlayback = () => {
      if (audio.paused) {
        audio.play().catch(() => {
          // Browsers block autoplay until the first user interaction
        });
      }
    };

    // Standard list of user interactions that permit audio playback
    const interactionEvents = ["click", "touchstart", "scroll", "mousedown", "keydown"];
    
    const handleFirstInteraction = () => {
      startPlayback();
      // Remove listeners once the audio has successfully started
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };

    // Attach listeners to window to capture the first guest action
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    // Attempt to play immediately (works on some desktop browsers or if already permitted)
    startPlayback();

    return () => {
      // Cleanup listeners on component unmount
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      loop
      autoPlay
      preload="auto"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

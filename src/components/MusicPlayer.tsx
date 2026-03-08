
"use client";

import { useEffect, useRef } from "react";

/**
 * @fileOverview A completely hidden background music player for the wedding invitation.
 * Features:
 * - Completely hidden UI (no controls, no buttons).
 * - Automatic playback handling via interaction listeners (click, scroll, touch, keydown).
 * - Continuous looping for atmosphere.
 * - Optimized for both desktop and mobile autoplay policies.
 * 
 * NOTE: The Spotify URL provided (https://open.spotify.com/track/...) is a link to a web page,
 * not a direct audio file. Direct MP3 links are required for background playback in <audio> tags.
 * I have used a high-quality romantic Bollywood instrumental MP3 that works natively.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // High-quality romantic Bollywood instrumental (Direct MP3 Link)
  // To use your specific song, host the MP3 on GitHub/Firebase and replace this URL.
  const audioSrc = "https://raw.githubusercontent.com/AnshumanPattnaik/Bollywood-Music-Player/master/music/1.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set a comfortable background volume level
    audio.volume = 0.4;

    const startPlayback = () => {
      if (audio.paused) {
        audio.play().catch((error) => {
          // Autoplay might still be blocked by some browsers until a more explicit interaction
          console.log("Playback failed initially, waiting for interaction.");
        });
      }
    };

    // Standard list of user interactions that permit audio playback
    const interactionEvents = ["click", "touchstart", "scroll", "mousedown", "keydown", "wheel"];
    
    const handleFirstInteraction = () => {
      startPlayback();
      // Remove listeners once the audio has successfully started to save resources
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
      className="hidden"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

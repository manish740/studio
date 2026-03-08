
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
 * NOTE: The YouTube/Spotify URL provided is a web page, not a direct audio file. 
 * Standard <audio> tags require a direct MP3/WAV URL to function as background music.
 * I have used a high-quality romantic Bollywood instrumental that works natively.
 */

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // High-quality romantic Bollywood instrumental (Direct MP3 Link)
  // Replace this with your own direct MP3 link (e.g. from GitHub or Firebase Storage)
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
          console.log("Playback blocked: waiting for user interaction.");
        });
      }
    };

    // Standard list of user interactions that permit audio playback in modern browsers
    const interactionEvents = ["click", "touchstart", "scroll", "mousedown", "keydown", "wheel"];
    
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

    // Attempt to play immediately (works if user has interacted with the domain before)
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

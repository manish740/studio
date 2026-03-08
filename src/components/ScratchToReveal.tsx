"use client";

import React, { useRef, useEffect, useState } from "react";

interface ScratchToRevealProps {
  label: string;
  value: string;
  subValue?: string;
}

export function ScratchToReveal({ label, value, subValue }: ScratchToRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullyScratched, setIsFullyScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Fill with golden foil gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#d4af37"); // Gold
      gradient.addColorStop(0.3, "#f9f295"); // Light Gold
      gradient.addColorStop(0.7, "#e6be8a"); // Warm Gold
      gradient.addColorStop(1, "#b8860b"); // Dark Gold

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add "shimmer" texture for a premium look
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 200; i++) {
        ctx.fillStyle = i % 2 === 0 ? "#ffffff" : "#000000";
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          1.5,
          1.5
        );
      }
      ctx.globalAlpha = 1.0;
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    let isDrawing = false;
    let scratchedArea = 0;

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 24, 0, Math.PI * 2);
      ctx.fill();

      // Track scratching progress
      if (!isFullyScratched) {
        scratchedArea++;
        // After some interaction, allow the fade out animation to trigger
        if (scratchedArea > 30) {
          setIsFullyScratched(true);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      if (e.cancelable) e.preventDefault();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("resize", initCanvas);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseUp);
    };
  }, [isFullyScratched]);

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
        {label}
      </span>
      <div
        ref={containerRef}
        className="relative w-full h-20 sm:h-24 bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-white/80 group"
      >
        <div className="flex flex-col items-center z-0 px-6 text-center select-none">
          <span className="text-lg md:text-xl font-headline text-primary leading-tight">
            {value}
          </span>
          {subValue && (
            <span className="text-[10px] md:text-xs font-semibold text-accent/80 uppercase tracking-[0.2em] mt-1">
              {subValue}
            </span>
          )}
        </div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 touch-none cursor-crosshair transition-opacity duration-1500"
          style={{ 
            opacity: isFullyScratched ? 0 : 1,
            pointerEvents: isFullyScratched ? "none" : "auto" 
          }}
        />
        {!isFullyScratched && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-300">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-primary/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Scratch to reveal
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

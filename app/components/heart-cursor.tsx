"use client";

import { useEffect, useRef } from "react";

// A small pink heart that trails just behind the mouse pointer on every page.
// Each frame it moves part of the way towards the pointer, so it lags a
// little and catches up when the mouse stops. It sits down and to the right
// of the pointer so it never covers what you are pointing at, hides when the
// mouse leaves the window, and is left out on touch screens, which have no
// pointer to follow.
const OFFSET = 14; // px down and to the right of the pointer
const EASE = 0.2; // how much of the remaining distance it covers each frame

export default function HeartCursor() {
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heart = heartRef.current;
    if (!heart || !window.matchMedia("(pointer: fine)").matches) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const target = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    let started = false;
    let frame = 0;

    const draw = () => {
      position.x += (target.x - position.x) * EASE;
      position.y += (target.y - position.y) * EASE;
      heart.style.transform = `translate(${position.x}px, ${position.y}px)`;
      frame = requestAnimationFrame(draw);
    };

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX + OFFSET;
      target.y = event.clientY + OFFSET;
      if (!started || reduceMotion) {
        position.x = target.x;
        position.y = target.y;
      }
      if (!started) {
        started = true;
        frame = requestAnimationFrame(draw);
      }
      heart.style.opacity = "1";
    };

    const onLeave = () => {
      heart.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={heartRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] opacity-0 transition-opacity duration-200"
    >
      <svg width="18" height="16" viewBox="0 0 24 21" fill="#ff7eb6">
        <path d="M12 21 1.8 10.9A6 6 0 0 1 12 3.1a6 6 0 0 1 10.2 7.8Z" />
      </svg>
    </div>
  );
}

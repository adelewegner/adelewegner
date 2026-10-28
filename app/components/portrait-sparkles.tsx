"use client";

import { useEffect, useState } from "react";

// Little pink lights that keep popping out of the portrait: each one appears
// at the edge of the figure, drifts a short way outwards, glows, and goes
// "poof". Placed over the photo's box, so its percentages are of the photo.
// Visitors who ask for reduced motion get none.

interface Sparkle {
  id: number;
  x: number; // start, % of the photo's width
  y: number; // start, % of the photo's height
  dx: number; // drift, px
  dy: number;
  size: number; // px
  color: string;
  duration: number; // ms
}

const COLORS = ["#ff4fa0", "#ff7eb6", "#ff2d8f", "#ff9ccb"];
const SPAWN_EVERY = 120; // ms between new lights
const MAX_ALIVE = 36;

// The figure roughly fills an ellipse in the right-hand part of the image;
// lights start on its edge and head away from its middle. Only the top half
// and the sides are used, since the bottom of the photo is cut off by the
// band.
const CENTRE = { x: 58, y: 52 };
const RADIUS = { x: 30, y: 42 };

let nextId = 0;

function makeSparkle(): Sparkle {
  const angle = -Math.PI - 0.35 + Math.random() * (Math.PI + 0.7);
  const distance = 40 + Math.random() * 90;
  return {
    id: nextId++,
    x: CENTRE.x + Math.cos(angle) * RADIUS.x,
    y: CENTRE.y + Math.sin(angle) * RADIUS.y,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance,
    size: 6 + Math.random() * 9,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: 1100 + Math.random() * 900,
  };
}

export default function PortraitSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setSparkles((current) =>
        current.length >= MAX_ALIVE ? current : [...current, makeSparkle()],
      );
    }, SPAWN_EVERY);
    return () => clearInterval(timer);
  }, []);

  const remove = (id: number) =>
    setSparkles((current) => current.filter((sparkle) => sparkle.id !== id));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          onAnimationEnd={() => remove(sparkle.id)}
          className="absolute rounded-full [animation:sparkle-poof_var(--duration)_ease-out_forwards]"
          style={
            {
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
              background: sparkle.color,
              boxShadow: `0 0 ${sparkle.size * 1.5}px ${sparkle.size / 2}px ${sparkle.color}`,
              "--dx": `${sparkle.dx}px`,
              "--dy": `${sparkle.dy}px`,
              "--duration": `${sparkle.duration}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

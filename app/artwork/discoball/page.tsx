import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disco ball – Adele Odderskov Wegner",
};

// The disco ball's own page: the finished painting as large as fits on one
// screen, with the sketchbook page it started from underneath. On wider
// screens the painting starts level with the flower in the corner, which it
// sits clear of, and is capped at the window's height less that same gap
// above and below.
//
// The sketch is always exactly as wide as the painting. The column shrinks to
// the painting's width, and the sketch is told to count for nothing when that
// width is worked out (w-0) and then to fill it (min-w-full), so it follows
// the painting instead of pushing the column wider.
export default function DiscoballPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[900px] flex-col items-center px-4 pt-32 pb-24 sm:pt-14">
      <div className="flex w-fit max-w-full flex-col gap-12">
        <Image
          src="/artwork/discoball.png"
          alt="Disco ball, a painting in Procreate"
          width={2550}
          height={3300}
          priority
          sizes="(max-width: 900px) 100vw, 700px"
          className="block h-auto w-auto max-w-full sm:max-h-[calc(100svh-7rem)]"
        />

        <Image
          src="/artwork/discoball-sketches.jpeg"
          alt="Sketchbook page with pen sketches of disco balls"
          width={2414}
          height={1784}
          sizes="(max-width: 900px) 100vw, 700px"
          className="block h-auto w-0 min-w-full"
        />
      </div>
    </main>
  );
}

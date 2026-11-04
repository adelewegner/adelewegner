import type { Metadata } from "next";
import AsksSpiral from "@/app/components/asks-spiral";
import FieldNotes from "@/app/components/field-notes";
import NextProject from "@/app/components/next-project";
import { formatDate, getAsks, getNotes } from "@/lib/asks";

export const metadata: Metadata = {
  title: "Challenge: 500 rejections – Adele Odderskov Wegner",
};

// Challenge: 500 rejections, Adele's personal project from autumn 2026 to autumn
// 2028. First the idea and why, then the asks so far as a growing spiral,
// then her field notes along the way, newest first. The asks and notes live in
// content/500-rejections (see the README there) and are read when the site is
// built, so adding one is a matter of editing those files and pushing.
export default function FiveHundredRejectionsProject() {
  const asks = getAsks().map(({ date, ...ask }) => ({
    ...ask,
    when: formatDate(date),
  }));

  return (
    <main
      data-yellow
      className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[8vw]"
    >
      <p className="text-[clamp(13px,1.3vw,20px)] tracking-[0.06em] uppercase">
        Fall 2026 – Fall 2028 | Creative Coding · Creative Data Visualization ·
        Personal Data
      </p>

      <section className="max-w-[56em] space-y-4 py-[4vw] text-[clamp(15.7px,1.18vw,17.9px)] leading-[1.7]">
        <h1 className="text-[clamp(28px,3.2vw,52px)] leading-tight">
          Challenge: 500 rejections
        </h1>
        <p>
          A year ago, I came across a young woman sharing a new project of hers.
          Her idea was simple: chase rejections. Apply for things, ask for
          opportunities and put yourself out there, even when you&rsquo;re
          almost certain the answer will be no. Because once rejection stops
          being something to fear, you might as well go for it. And every now
          and then, a little courage pays off with a yes, a new connection or an
          opportunity you never would have found otherwise. A friend of mine has
          been a huge inspiration, as she started the same journey. So, from
          fall 2026 to fall 2028, I&rsquo;m setting myself a challenge. 500
          rejections. Some professional, some personal, and some just for the
          sake of seeing what might happen.
        </p>
        <p>
          The spiral below grows by one every time I make an ask. It tracks
          whether the answer was yes, no or is still pending, which part of my
          life the ask belongs to, and how scary it felt to put myself out
          there. Visually, the project takes inspiration from the colour
          palettes of the 1970s and the illustrations often seen in films
          inspired by that era. And since this is a rather personal project,
          I&rsquo;ve given the page a background in one of my favourite colours,
          too.
        </p>
      </section>

      <section className="pt-[4vw]">
        <AsksSpiral asks={asks} />
      </section>

      <FieldNotes
        notes={getNotes().map(({ date, ...note }) => ({
          ...note,
          when: formatDate(date),
        }))}
      />

      <NextProject current="500-rejections" />
    </main>
  );
}

"use client";

import { useState } from "react";

export interface FieldNote {
  when: string;
  title?: string;
  paragraphs: string[];
}

// Adele's notes from the challenge, each in its own outlined box with its
// date, newest first. The button above them turns the order round.
export default function FieldNotes({ notes }: { notes: FieldNote[] }) {
  const [oldestFirst, setOldestFirst] = useState(false);
  const shown = oldestFirst ? [...notes].reverse() : notes;

  return (
    <section aria-labelledby="field-notes" className="pt-[8vw] pb-[4vw]">
      <h2
        id="field-notes"
        className="text-[clamp(13px,1.05vw,16px)] font-bold tracking-[0.14em] uppercase"
      >
        Field notes
      </h2>
      <p className="mt-4 max-w-[60em] text-[clamp(15px,1.25vw,19px)] leading-[1.7]">
        Besides the data visualization, I&rsquo;m collecting field notes along
        the way: my thoughts, realisations, struggles and learnings from the
        challenge.
      </p>

      {notes.length > 1 && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setOldestFirst(!oldestFirst)}
            aria-label={
              oldestFirst
                ? "Show newest notes first"
                : "Show oldest notes first"
            }
            className="flex size-10 items-center justify-center rounded-lg border-2 border-purple transition-colors hover:bg-[#ff7eb6]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* An arrow up beside an arrow down. */}
              <path d="M8 20V4M4 8l4-4 4 4M16 4v16M12 16l4 4 4-4" />
            </svg>
          </button>
        </div>
      )}

      {notes.length ? (
        <ol className="mt-4 space-y-4">
          {shown.map((note, index) => (
            <li
              key={note.when + index}
              className="rounded-lg border-2 border-purple px-[clamp(16px,1.6vw,26px)] py-[clamp(14px,1.4vw,22px)] text-[clamp(15px,1.25vw,19px)] leading-[1.7]"
            >
              <p className="text-purple/70">{note.when}</p>
              {note.title && <h3 className="mt-1 font-bold">{note.title}</h3>}
              <div className="mt-1 space-y-3">
                {note.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-6 rounded-lg border-2 border-purple px-[clamp(16px,1.6vw,26px)] py-[clamp(14px,1.4vw,22px)] text-[clamp(15px,1.25vw,19px)] text-purple/70">
          The first note is coming soon.
        </p>
      )}
    </section>
  );
}

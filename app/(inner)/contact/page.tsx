import type { Metadata } from "next";
import MessageForm from "./message-form";

export const metadata: Metadata = {
  title: "Contact – Adele Odderskov Wegner",
};

// The lines typed onto the paper, top to bottom. `label` is the small
// uppercase word above each one.
const LINES = [
  { label: "Phone", text: "+45 42603012", href: "tel:+4542603012" },
  {
    label: "Mail",
    text: "adeleodderskov@gmail.com",
    href: "mailto:adeleodderskov@gmail.com",
  },
  { label: "Uni email", text: "adew@itu.dk", href: "mailto:adew@itu.dk" },
  { label: "Based in", text: "Copenhagen" },
];

// Keys per row on the keyboard, front row last.
const KEY_ROWS = [11, 11, 10, 9];

// The contact page: a line drawing of a typewriter seen from above, in black
// lines with the same hand-drawn wobble as the project drawings. Visitors
// write a message on its paper; the contact details sit to its left, and a
// telephone receiver hangs on its curly cord to its right (from lg up). The
// paper's contents are real HTML laid over the drawing, placed in
// percentages of its 600×1000 box and sized in cqw, so they stay on the paper
// at any width. The heading and the details type themselves out once.
export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1400px] grid-cols-1 overflow-hidden px-[5.5vw] pb-[6vw] lg:grid-cols-[1fr_minmax(0,520px)_1fr] lg:gap-x-[4vw]">
      <div className="@container relative order-1 mx-auto mt-[4vw] w-full max-w-[520px] lg:order-2">
        <svg
          viewBox="0 0 600 1000"
          className="block h-auto w-full text-black"
          aria-hidden
        >
          <defs>
            <filter id="typewriter-rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
              <feDisplacementMap in="SourceGraphic" scale="3" />
            </filter>
          </defs>
          <g
            filter="url(#typewriter-rough)"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* paper */}
            <path d="M132 42 L468 40 L470 508 L130 510 Z" />
            {/* roller with its knobs, and the bail across the paper */}
            <path d="M84 508 L516 508 Q528 508 528 520 L528 528 Q528 540 516 540 L84 540 Q72 540 72 528 L72 520 Q72 508 84 508 Z" />
            <path d="M72 516 L56 516 M72 532 L56 532" />
            <path d="M56 506 Q42 506 42 524 Q42 542 56 542 Z" />
            <path d="M528 516 L544 516 M528 532 L544 532" />
            <path d="M544 506 Q558 506 558 524 Q558 542 544 542 Z" />
            <path d="M120 556 L480 556" />
            <circle cx="210" cy="556" r="7" />
            <circle cx="390" cy="556" r="7" />
            {/* carriage return lever */}
            <path d="M94 512 L58 700 Q54 716 66 718 Q76 718 78 704 L108 540" />
            {/* body */}
            <path d="M86 594 Q88 570 112 570 L488 570 Q512 570 514 594 L520 946 Q520 966 498 966 L102 966 Q80 966 80 946 Z" />
            {/* feet */}
            <path d="M112 966 L114 980 L160 980 L162 966 M438 966 L440 980 L486 980 L488 966" />
            <path d="M112 570 L118 548 M488 570 L482 548" />
            {/* cover plate sweeping in to the type basket */}
            <path d="M130 600 Q240 598 252 640 Q262 690 222 712" />
            <path d="M470 600 Q360 598 348 640 Q338 690 378 712" />
            {/* type guide and basket */}
            <path d="M286 572 L286 596 L314 596 L314 572" />
            <path d="M222 712 Q300 600 378 712 Q300 690 222 712 Z" />
            {[-60, -40, -20, 0, 20, 40, 60].map((x) => (
              <path key={x} d={`M300 640 L${300 + x} ${700 - Math.abs(x) / 6}`} />
            ))}
            {/* front edge of the cover, then the keys */}
            <path d="M92 738 Q300 728 508 738" />
            {KEY_ROWS.map((count, row) =>
              Array.from({ length: count }, (_, i) => (
                <circle
                  key={`${row}-${i}`}
                  cx={300 + (i - (count - 1) / 2) * 36 + (row % 2) * 6}
                  cy={770 + row * 34}
                  r="12"
                />
              )),
            )}
            {/* space bar */}
            <path d="M196 912 L404 912 Q414 912 414 922 Q414 932 404 932 L196 932 Q186 932 186 922 Q186 912 196 912 Z" />
          </g>
        </svg>

        {/* The paper: 130–470 across and 40–510 down in the 600×1000 box.
            Visitors write their message here. */}
        <div className="absolute top-[8%] right-[25%] left-[25%] text-black">
          <h1
            className="typed text-[7cqw] leading-tight"
            style={{ animationDelay: "0.3s", ["--chars" as string]: 15 }}
          >
            Hi, let&rsquo;s talk
          </h1>
          <MessageForm />
        </div>

      </div>

      {/* The details, to the left of the typewriter from lg up, starting
          level with the top of the paper; under it on phones. */}
      <dl className="order-2 mt-10 space-y-[1.4em] text-center text-[clamp(15px,1.3vw,20px)] text-black lg:order-1 lg:mt-[calc(4vw+min(4.5vw,24px)+2em)] lg:justify-self-end lg:text-right">
        {LINES.map((line, index) => {
          const style = {
            animationDelay: `${1.2 + index * 0.9}s`,
            ["--chars" as string]: line.text.length,
          };
          return (
            <div key={line.label}>
              <dt className="mb-[0.3em] text-[0.6em] tracking-[0.16em] uppercase">
                {line.label}
              </dt>
              <dd className="typed" style={style}>
                {line.href ? (
                  <a
                    href={line.href}
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                  >
                    {line.text}
                  </a>
                ) : (
                  line.text
                )}
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="order-3 hidden lg:block">
        <HangingPhone />
      </div>
    </main>
  );
}

// Turns in the curly cord.
const COIL_TURNS = 30;

// A telephone receiver hanging from the top of the page on a curly cord,
// drawn in the same black line as the typewriter, with a speech bubble
// coming from the earpiece that calls the number. The receiver sways a
// little from the top; not at all with reduced motion. Hidden on narrow
// screens, where the typewriter fills the width (see ContactPage). --w is
// the receiver's width; the bubble is sized and placed from it so its tail
// keeps pointing at the earpiece.
function HangingPhone() {
  return (
    <div className="relative [--w:clamp(100px,10vw,150px)]">
      <PhoneDrawing />
      <a
        href="tel:+4542603012"
        className="group absolute top-[calc(var(--w)*1.6)] left-[calc(2vw+var(--w)*0.72)] block w-[calc(var(--w)*1.35)] text-black"
      >
        <svg viewBox="0 0 210 120" className="block h-auto w-full" aria-hidden>
          <path
            filter="url(#phone-rough)"
            d="M44 10 L182 8 Q202 8 202 30 L202 62 Q202 84 180 84 L66 84 L8 112 L40 84 Q20 84 20 62 L20 32 Q20 10 44 10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinejoin="round"
            className="transition-[fill] duration-200 group-hover:fill-[#ff7eb6]"
          />
        </svg>
        <span className="absolute inset-x-[10%] top-[6%] bottom-[30%] flex items-center justify-center pl-[6%] text-center text-[calc(var(--w)*0.13)] leading-tight">
          or give me a call
        </span>
      </a>
    </div>
  );
}

// The receiver and its cord.
function PhoneDrawing() {
  return (
    <svg
      viewBox="0 0 160 700"
      className="phone-sway ml-[2vw] block h-auto w-(--w) text-black"
      aria-hidden
    >
      <defs>
        <filter id="phone-rough" x="-10%" y="-5%" width="120%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      <g
        filter="url(#phone-rough)"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* the cord: overlapping tilted loops, then a slack bit into the receiver */}
        {Array.from({ length: COIL_TURNS }, (_, i) => (
          <ellipse
            key={i}
            cx="84"
            cy={4 + i * 10}
            rx="13"
            ry="5"
            transform={`rotate(-14 84 ${4 + i * 10})`}
          />
        ))}
        <path d="M84 300 C86 318 98 326 92 340 C86 352 70 350 66 362" />
        {/* earpiece, handle and mouthpiece */}
        <ellipse cx="66" cy="400" rx="40" ry="36" transform="rotate(-8 66 400)" />
        <path d="M30 418 C6 470 8 560 40 628" />
        <path d="M76 436 C58 480 58 548 80 600" />
        <ellipse cx="78" cy="640" rx="42" ry="38" transform="rotate(10 78 640)" />
        {/* the holes in each end */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
          const a = (n / 8) * Math.PI * 2;
          return (
            <g key={n}>
              <circle cx={66 + Math.cos(a) * 18} cy={400 + Math.sin(a) * 16} r="1.6" />
              <circle cx={78 + Math.cos(a) * 18} cy={640 + Math.sin(a) * 16} r="1.6" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

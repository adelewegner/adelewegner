import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Adele Odderskov Wegner",
};

// What's in Adele's bag: cut-out photos in public/bag, each with a short
// handwritten note. On wide screens the bag is big at the bottom and the
// rest sit in an arc around it: `left`, `top` and `width` place each one as a
// share of the area, `turn` tips it a few degrees, and `place` says
// whether its note sits above or below it, with a thin pointed arrow.
// On narrower screens they line up in a grid with the note under each.
const BAG = [
  {
    src: "macbook.png",
    w: 445,
    h: 313,
    alt: "A black MacBook",
    note: "MacBook for Figma & everything else",
    left: 2,
    top: 46,
    width: 21,
    turn: -10,
    place: "below",
  },
  {
    src: "fourth-wing.png",
    w: 290,
    h: 446,
    alt: "Fourth Wing by Rebecca Yarros",
    note: "Current read: Fourth Wing",
    left: 38,
    top: 0,
    width: 8,
    turn: -6,
    place: "above",
  },
  {
    src: "ipad.png",
    w: 485,
    h: 609,
    alt: "A silver iPad with an Apple Pencil",
    note: "iPad + Pencil for drawing",
    left: 53,
    top: 6,
    width: 11,
    turn: 10,
    place: "above",
  },
  {
    src: "notebook.png",
    w: 578,
    h: 502,
    alt: "An open notebook with a pen",
    note: "Notebook for ideas, to-dos & journaling",
    left: 18,
    top: 2,
    width: 17,
    turn: 8,
    place: "above",
  },
  {
    src: "earphones.png",
    w: 748,
    h: 866,
    alt: "Tangled wired earphones",
    note: "Wired earphones, always",
    left: 83,
    top: 35,
    width: 11,
    turn: 0,
    place: "below",
  },
  {
    src: "bag.png",
    w: 552,
    h: 424,
    alt: "A brown suede handbag",
    note: "The bag",
    left: 30,
    top: 42,
    width: 40,
    turn: 0,
    place: "none",
  },
  {
    src: "lipstick.png",
    w: 163,
    h: 600,
    alt: "A dark red lipstick",
    note: "The lipstick that goes with everything",
    left: 76,
    top: 64,
    width: 3,
    turn: 14,
    place: "below",
  },
  {
    src: "camera.png",
    w: 334,
    h: 209,
    alt: "A black Kodak digital camera",
    note: "Digital camera for the moments",
    left: 70,
    top: 4,
    width: 15,
    turn: -8,
    place: "above",
  },
] as const;

// The "Meet Adele" page. It opens like a magazine spread: "ABOUT ME" in
// huge, tall, narrow capitals across the full width, a cut-out photo of
// Adele standing in front of "ME", and a short introduction to her left.
// Then what's in her bag, and a link to get in touch.
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1300px] overflow-hidden px-[5.5vw] pt-[3vw] pb-[8vw] text-purple">
      {/* A tab on the right edge of the screen, reading upwards, that stays
          put while the page scrolls. Pink like the other buttons, and it
          slides out a little on hover. */}
      <Link
        href="/cv"
        className="fixed top-1/2 right-0 z-30 -translate-y-1/2 rounded-l-2xl border-2 border-r-0 border-purple bg-[#ff7eb6] px-[0.6em] py-[1.6em] text-[clamp(14px,1.2vw,18px)] tracking-[0.14em] text-purple uppercase shadow-[-3px_3px_0_#3a1f49] transition-[padding] duration-200 ease-out [writing-mode:vertical-rl] hover:pr-[0.9em] motion-reduce:transition-none"
      >
        <span className="inline-block rotate-180">cv</span>
      </Link>

      <div className="@container relative">
        {/* Sized in cqw to fill the page width exactly, so it stays centred.
            Stretched to 1.5 times its height; the bottom margin makes room
            for the stretch, which doesn't take up space by itself. */}
        <h1 className="mb-[0.4em] origin-top scale-y-150 text-center text-[25.6cqw] leading-[0.8] font-bold whitespace-nowrap text-black uppercase [font-family:var(--font-display-face)] [font-stretch:75%]">
          About me
        </h1>

        {/* On wide screens the text sits centred under "ABOUT", whose middle
            is about a third of the way across, with its last line level
            with the bottom of the photo. */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <p className="order-2 text-justify text-[clamp(16px,1.35vw,20px)] leading-relaxed text-black lg:order-1 lg:ml-[12cqw] lg:w-[42cqw]">
            {/* Adele's introduction goes here. */}
          </p>
          <div className="relative order-1 mx-auto -mt-[24vw] aspect-[833/1206] w-[min(52vw,315px)] lg:order-2 lg:mr-[5cqw] lg:-mt-[min(24vw,340px)] lg:w-[min(27vw,375px)]">
            <Image
              src="/adele-about.png"
              alt="Adele Odderskov Wegner"
              fill
              priority
              sizes="(max-width: 1024px) 52vw, 375px"
              className="object-contain object-bottom brightness-110"
            />
          </div>
        </div>
      </div>

      <section aria-labelledby="bag" className="mt-[clamp(40px,4vw,64px)]">
        {/* Light and editorial: the serif at regular weight with "my" in
            pink, over a small spaced-out line of capitals. */}
        <h2
          id="bag"
          className="text-center text-[clamp(40px,5.5vw,84px)] leading-none font-normal tracking-[-0.01em] text-black"
        >
          What&rsquo;s in <span className="text-[#ff7eb6]">my</span> bag?
        </h2>
        <p className="mt-4 text-center text-[clamp(11px,1vw,14px)] tracking-[0.3em] text-black uppercase">
          The everyday essentials
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:relative lg:mt-10 lg:block lg:aspect-[16/10]">
          {BAG.map((item) => (
            <li
              key={item.src}
              style={
                {
                  "--x": `${item.left}%`,
                  "--y": `${item.top}%`,
                  "--w": `${item.width}%`,
                } as React.CSSProperties
              }
              className={`flex flex-col items-center gap-2 lg:absolute lg:gap-0.5 lg:top-(--y) lg:left-(--x) lg:w-(--w) ${
                item.place === "above" ? "lg:flex-col-reverse" : ""
              } ${item.place === "none" ? "col-span-2 sm:col-span-3" : ""}`}
            >
              <Image
                src={`/bag/${item.src}`}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="(max-width: 1024px) 45vw, 25vw"
                style={{ rotate: `${item.turn}deg` }}
                className={`lg:h-auto lg:w-full lg:max-w-none ${
                  item.place === "none"
                    ? "h-auto w-full max-w-[420px]"
                    : "h-[140px] w-auto max-w-full object-contain"
                }`}
              />
              {item.place !== "none" && (
                <p
                  className={`flex items-center gap-2 text-center font-hand lg:gap-1 text-[14px] leading-snug tracking-[0.06em] uppercase lg:w-max lg:max-w-[min(12vw,150px)] lg:text-[clamp(11px,0.95vw,13px)] ${
                    item.place === "above"
                      ? "lg:flex-col-reverse"
                      : "lg:flex-col"
                  }`}
                >
                  <svg
                    viewBox="0 0 12 36"
                    aria-hidden
                    className={`hidden h-8 w-3 lg:block ${
                      item.place === "above" ? "" : "rotate-180"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* A thin line ending in a sharp head, pointing down. */}
                    <path d="M6 1v33M2 29l4 5 4-5" />
                  </svg>
                  {item.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-center text-[clamp(20px,2vw,30px)]">
        <Link
          href="/contact"
          className="underline decoration-[#ff7eb6] decoration-4 underline-offset-[0.2em] transition-colors hover:text-[#ff7eb6]"
        >
          Let&rsquo;s work together &rarr;
        </Link>
      </p>
    </main>
  );
}

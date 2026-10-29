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

// The "Meet Adele" page. It opens with a huge "Meet" behind the top of a
// cut-out photo of Adele in a yellow sticker outline and "Adele" in front
// of its bottom edge. Then what's in her bag, and a link to get in touch.
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1300px] overflow-hidden px-[5.5vw] pt-[3vw] pb-[8vw] text-purple">
      <h1 className="sr-only">Meet Adele</h1>

      <div className="relative">
        {/* Sized in em, from this font size, so the stack keeps its shape. */}
        <div
          aria-hidden
          className="relative flex flex-col items-center text-[clamp(72px,12vw,180px)] leading-none font-bold text-black [-webkit-text-stroke:max(1.5px,0.012em)_#ff7eb6]"
        >
          <p>Meet</p>
          <div className="relative z-10 -mt-[0.42em] aspect-[870/1248] w-[2.1em]">
            <Image
              src="/meet-adele.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1500px) 25vw, 378px"
              className="object-contain"
            />
          </div>
          <p className="relative z-20 -mt-[0.62em]">Adele</p>
        </div>
      </div>

      <section aria-labelledby="bag" className="mt-[clamp(64px,8vw,128px)]">
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
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:relative lg:mt-24 lg:block lg:aspect-[16/10]">
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

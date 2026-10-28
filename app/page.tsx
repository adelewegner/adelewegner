import Image from "next/image";
import PortraitSparkles from "@/app/components/portrait-sparkles";

// The front page: a lime band with the portrait and the title, then a purple
// area holding the project grid. The grid is placeholders for now, nine grey
// tiles in rows of three. Sizes are in vw so the page keeps the proportions
// of the design at any width, with clamps to stop text getting too small on
// phones or too big on very wide screens.
const PLACEHOLDER_TILES = 9;

export default function Home() {
  return (
    <main className="min-h-screen bg-purple">
      <header className="relative h-[clamp(240px,39vw,600px)] overflow-hidden bg-lime">
        <div className="absolute bottom-0 left-[3%] aspect-[1048/1128] h-[88%] sm:left-[15%]">
          <Image
            src="/adele-portrait.png"
            alt="Portrait of Adele Odderskov Wegner"
            fill
            priority
            sizes="(max-width: 640px) 45vw, 34vw"
            className="object-contain object-bottom"
          />
          <PortraitSparkles />
        </div>

        <div className="absolute top-[20%] right-[calc(max(0px,(100%-1600px)/2)+5.5vw)] text-right">
          <p className="text-[clamp(15px,3.75vw,54px)] leading-tight">
            Adele Odderskov Wegner
          </p>
          <p className="mt-[0.3em] text-[clamp(9px,2.35vw,34px)] tracking-[0.02em] uppercase">
            UX · Communication · Co-design
          </p>
          <h1 className="mt-[0.15em] text-[clamp(38px,8.5vw,122px)] leading-none italic">
            Portfolio
          </h1>
        </div>
      </header>

      <section
        aria-label="Projects"
        className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[20vw]"
      >
        {/* Centred over the grid below it. */}
        <p className="flex items-center justify-center gap-[1em] text-[clamp(10px,1.4vw,20px)] tracking-[0.12em] text-cream uppercase">
          <span
            aria-hidden
            className="h-[2em] w-[2em] shrink-0 rounded-full bg-[#82dd4a]"
          />
          Open for work - Copenhagen
        </p>

        <div className="mt-[5vw] grid grid-cols-1 gap-x-[5vw] gap-y-12 sm:grid-cols-3 sm:gap-y-[14.5vw]">
          {Array.from({ length: PLACEHOLDER_TILES }, (_, index) => (
            <div key={index} className="aspect-[179/136] bg-[#d9d9d9]" />
          ))}
        </div>
      </section>
    </main>
  );
}

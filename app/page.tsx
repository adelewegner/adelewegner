import Image from "next/image";
import Link from "next/link";
import NavPills from "@/app/components/nav-pills";
import { PROJECTS } from "@/lib/projects";

// The front page: a purple band with the portrait and the title, then a lime
// area holding the project grid from lib/projects.ts, in rows of three. A
// project with its own page links there from its square. Sizes are in vw so
// the page keeps the proportions of the design at any width, with clamps to
// stop text getting too small on phones or too big on very wide screens.
export default function Home() {
  return (
    <main className="min-h-screen bg-lime">
      <header className="relative h-[clamp(240px,39vw,600px)] overflow-hidden bg-purple text-lime">
        <NavPills className="absolute top-[2.5vw] left-[2.5vw] z-10" />

        <div className="absolute bottom-0 left-[3%] aspect-[1048/1128] h-[88%] sm:left-[15%]">
          <Image
            src="/adele-portrait.png"
            alt="Portrait of Adele Odderskov Wegner"
            fill
            priority
            sizes="(max-width: 640px) 45vw, 34vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute top-[16%] right-[calc(max(0px,(100%-1600px)/2)+5.5vw)] text-right">
          <p className="text-[clamp(14px,3.15vw,50px)] leading-tight">
            Adele Odderskov Wegner
          </p>
          <p className="mt-[0.35em] text-[clamp(9px,2vw,32px)] tracking-[0.04em] uppercase">
            UX · Communication · Co-design
          </p>
          <h1 className="mt-[0.25em] text-[clamp(40px,10.6vw,170px)] leading-none italic">
            Portfolio
          </h1>
        </div>
      </header>

      <section
        aria-label="Projects"
        className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[20vw]"
      >
        {/* Centred over the grid below it. */}
        <p className="flex items-center justify-center gap-[1em] text-[clamp(9px,1.05vw,15px)] tracking-[0.12em] text-purple uppercase">
          <span
            aria-hidden
            className="h-[2em] w-[2em] shrink-0 rounded-full border-2 border-purple bg-lime"
          />
          Open for work · Copenhagen
        </p>

        <div className="mt-[2.5vw] grid grid-cols-1 gap-x-[5vw] gap-y-12 sm:grid-cols-3 sm:gap-y-[6vw]">
          {PROJECTS.map((project, index) => {
            const tile = (
              <>
                {/* No project has a picture yet, so every square is a purple
                    "under construction" tile for now. */}
                <div className="flex aspect-[179/136] items-center justify-center bg-purple text-[clamp(10px,1.05vw,16px)] tracking-[0.12em] text-lime uppercase">
                  Under construction
                </div>
                {project.title && (
                  <h2 className="mt-[1.2em] text-[clamp(16px,1.7vw,26px)] leading-tight font-bold">
                    {project.title}
                  </h2>
                )}
                {project.subtitle && (
                  <p className="mt-[0.9em] text-[clamp(10px,1.05vw,16px)] tracking-[0.12em]">
                    {project.subtitle}
                  </p>
                )}
              </>
            );
            return (
              <article key={index} className="text-center text-purple">
                {project.slug ? (
                  <Link href={`/projects/${project.slug}`} className="block">
                    {tile}
                  </Link>
                ) : (
                  tile
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

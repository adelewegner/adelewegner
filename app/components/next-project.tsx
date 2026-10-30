import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

// Every project with a page, in front-page order.
const SLUGS = PROJECTS.flatMap((project) =>
  project.slug ? [project.slug] : [],
);

const BUTTON =
  "flex h-[2.4em] items-center gap-[0.6em] rounded-full border-2 border-purple bg-[#ff7eb6] text-[clamp(15px,1.4vw,22px)] text-purple shadow-[3px_3px_0_#3a1f49] transition duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#3a1f49] motion-reduce:transition-none";
const ARROW =
  "flex size-[1.65em] items-center justify-center rounded-full bg-purple text-lime";

// The "Previous project" and "Next project" buttons at the end of a
// project page, side by side and styled like the Meet Adele button on the
// front page, each with its arrow in a purple circle on the outer side.
// They go through every project in front-page order, the ones still under
// construction included, looping round at either end.
export default function NextProject({ current }: { current: string }) {
  const index = SLUGS.indexOf(current);
  const previous = SLUGS[(index - 1 + SLUGS.length) % SLUGS.length];
  const next = SLUGS[(index + 1) % SLUGS.length];

  return (
    <nav
      aria-label="More projects"
      className="mt-[3vw] flex flex-wrap justify-center gap-4"
    >
      <Link
        href={`/projects/${previous}`}
        className={`${BUTTON} pr-[1.2em] pl-[0.3em]`}
      >
        <span aria-hidden className={ARROW}>
          &larr;
        </span>
        Previous project
      </Link>
      <Link
        href={`/projects/${next}`}
        className={`${BUTTON} pr-[0.3em] pl-[1.2em]`}
      >
        Next project
        <span aria-hidden className={ARROW}>
          &rarr;
        </span>
      </Link>
    </nav>
  );
}

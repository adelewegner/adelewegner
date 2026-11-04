import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

// Every project with a page, in front-page order.
const SLUGS = PROJECTS.flatMap((project) =>
  project.slug ? [project.slug] : [],
);

const BUTTON =
  "flex h-[2.2em] items-center gap-[0.6em] rounded-full border border-purple bg-[#ff7eb6] text-[clamp(14px,1.3vw,20px)] text-purple transition-colors duration-200 hover:bg-[#f763a3] motion-reduce:transition-none";
const ARROW =
  "flex size-[1.5em] items-center justify-center rounded-full bg-purple text-lime";

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
        className={`${BUTTON} pr-[1.1em] pl-[0.3em]`}
      >
        <span aria-hidden className={ARROW}>
          &larr;
        </span>
        Previous project
      </Link>
      <Link
        href={`/projects/${next}`}
        className={`${BUTTON} pr-[0.3em] pl-[1.1em]`}
      >
        Next project
        <span aria-hidden className={ARROW}>
          &rarr;
        </span>
      </Link>
    </nav>
  );
}

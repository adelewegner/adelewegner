import Link from "next/link";
import { OWN_PAGES } from "@/lib/projects";

// The "Next project" button at the end of a project page, styled like the
// Meet Adele button on the front page. It goes through the projects that
// have a full page, in front-page order, and from the last back to the
// first.
export default function NextProject({ current }: { current: string }) {
  const next = OWN_PAGES[(OWN_PAGES.indexOf(current) + 1) % OWN_PAGES.length];

  return (
    <div className="mt-[3vw] flex justify-center">
      <Link
        href={`/projects/${next}`}
        className="flex h-[2.4em] items-center gap-[0.6em] rounded-full border-2 border-purple bg-[#ff7eb6] pr-[0.3em] pl-[1.2em] text-[clamp(15px,1.4vw,22px)] text-purple shadow-[3px_3px_0_#3a1f49] transition duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#3a1f49] motion-reduce:transition-none"
      >
        Next project
        <span
          aria-hidden
          className="flex size-[1.65em] items-center justify-center rounded-full bg-purple text-lime"
        >
          &rarr;
        </span>
      </Link>
    </div>
  );
}

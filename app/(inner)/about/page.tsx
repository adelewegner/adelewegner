import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Adele Odderskov Wegner",
};

// The "Meet Adele" page. Under construction for now, lettered like the
// under-construction project square on the front page.
export default function AboutPage() {
  return (
    <main className="flex min-h-[50vh] items-center justify-center px-[5.5vw] py-[8vw]">
      <p className="text-center text-[clamp(13px,1.4vw,22px)] tracking-[0.14em] text-purple uppercase">
        Under construction
      </p>
    </main>
  );
}

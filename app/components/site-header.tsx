import Link from "next/link";
import NavPills from "@/app/components/nav-pills";

// The slim purple top for every page except the front page: the cv and
// contact pills on the left, "Portfolio" in the middle leading home, the
// name and disciplines on the right, and a way back underneath. On phones
// the pills and name share the first row and Portfolio drops below them.
export default function SiteHeader() {
  return (
    <header className="bg-purple text-lime">
      <div className="mx-auto max-w-[1600px] px-[5.5vw] pt-[2.5vw] pb-[2vw]">
        <div className="grid grid-cols-2 items-start gap-y-4 sm:grid-cols-3">
          <NavPills />

          <Link
            href="/"
            className="order-last col-span-2 justify-self-center text-[clamp(36px,5vw,80px)] leading-none italic sm:order-none sm:col-span-1"
          >
            Portfolio
          </Link>

          <div className="justify-self-end text-right">
            <p className="text-[clamp(13px,2.3vw,36px)] leading-tight">
              Adele Odderskov Wegner
            </p>
            <p className="mt-[0.35em] text-[clamp(8px,1.4vw,22px)] tracking-[0.04em] uppercase">
              UX · Communication · Co-design
            </p>
          </div>
        </div>

        {/* An outlined pill that fills pink on hover. */}
        <Link
          href="/"
          className="mt-[3vw] inline-flex h-[1.85em] items-center gap-[0.5em] rounded-full border-2 border-lime px-[1.1em] text-[clamp(11px,1.3vw,22px)] lowercase transition-colors duration-200 hover:border-[#ff7eb6] hover:bg-[#ff7eb6] hover:text-purple motion-reduce:transition-none"
        >
          <span aria-hidden>←</span>
          back
        </Link>
      </div>
    </header>
  );
}

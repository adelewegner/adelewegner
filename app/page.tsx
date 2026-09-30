import PillButton from "@/app/components/pill-button";
import MeetMe from "@/app/components/meet-me";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-28 pb-20 text-center sm:pt-[100px]">
      <p className="flex items-center gap-3 whitespace-nowrap text-[13px] uppercase sm:gap-6 tracking-[0.12em] sm:text-[20px]">
        <span
          aria-hidden
          className="h-6 w-6 shrink-0 rounded-full bg-available sm:h-12 sm:w-12"
        />
        Open for work - Copenhagen
      </p>

      <h1 className="mt-12 font-display text-[clamp(2.5rem,7.5vw,6.75rem)] font-black leading-none [font-stretch:75%] sm:mt-24">
        Adele Odderskov Wegner
      </h1>

      <p className="mt-8 max-w-[960px] text-[20px] leading-[1.6] sm:mt-9 sm:text-[29px]">
        Masters student at IT-university of copenhagen, with passion for{" "}
        <br className="hidden md:inline" />
        UX-reseach, Interaction design and creative data dissemination
      </p>

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-11">
        <PillButton href="/projects">View my design projects</PillButton>
        <PillButton href="/artwork">View my artwork</PillButton>
      </div>

      <div className="mt-16 w-full text-left sm:mt-20">
        <MeetMe />
      </div>
    </main>
  );
}

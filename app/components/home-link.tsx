import Link from "next/link";
import Image from "next/image";

// The home button: the black flower in the top-left corner, on every page.
// It turns slowly all the time and holds still while the mouse is on it.
// Pausing rather than removing the animation keeps it where it stopped.
export default function HomeLink() {
  return (
    <Link href="/" aria-label="Home" className="absolute left-4 top-4 z-50 block sm:left-10 sm:top-14">
      <Image
        src="/blackflower.svg"
        alt=""
        width={160}
        height={160}
        priority
        className="h-20 w-20 sm:h-40 sm:w-40 animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none"
      />
    </Link>
  );
}

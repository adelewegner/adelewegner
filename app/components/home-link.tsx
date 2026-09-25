import Link from "next/link";
import Image from "next/image";

// The home button: the orange starflower in the top-left corner. It spins
// slowly only while the mouse is on it. Pausing the animation rather than
// removing it means the flower stops where it is instead of snapping back.
export default function HomeLink({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} aria-label="Home" className="group block w-fit shrink-0">
      <Image
        src="/starflower.svg"
        alt=""
        width={90}
        height={84}
        priority
        className="animate-[spin_12s_linear_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running] motion-reduce:animate-none"
      />
    </Link>
  );
}

import Link from "next/link";

// The home button: a plain circle in the top-left corner.
export default function HomeLink({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} aria-label="Home" className="block h-10 w-10 shrink-0">
      <span className="block h-10 w-10 rounded-full bg-black" />
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// The filter at the top of the front page. /about still exists as a route but
// is kept out of the filter.
export const PAGES = [
  { href: "/", label: "projects" },
  { href: "/art", label: "artworks" },
];

export default function PageNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-4">
      {PAGES.map((page) => {
        const isActive = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={isActive ? "page" : undefined}
            className={isActive ? "font-semibold" : ""}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}

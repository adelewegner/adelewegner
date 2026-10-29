"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "cv", href: "/cv" },
  { label: "contact", href: "/contact" },
];

// The cv and contact pills, used on every page. The one for the page you are
// on turns pink, and the others turn pink on hover.
export default function NavPills({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={`flex gap-[0.9vw] text-[clamp(11px,1.3vw,22px)] text-purple lowercase ${className}`}
    >
      {LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`flex h-[1.85em] items-center rounded-full px-[1.6em] transition-colors duration-200 ${
              active ? "bg-[#ff7eb6]" : "bg-lime hover:bg-[#ff7eb6]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { usePathname } from "next/navigation";

// Adele's phone number, written as it shows on the page.
const PHONE = "+45 42603012";

// The small contact line at the bottom of every page: phone on the left,
// private email in the middle, ITU email on the right. On phones they stack.
// The contact page has all of this already, so it leaves the footer out.
export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <footer className="mx-auto max-w-[1600px] px-[5.5vw]">
      <div className="flex flex-col items-center gap-2 py-6 text-[clamp(11px,0.9vw,14px)] tracking-[0.06em] text-purple sm:grid sm:grid-cols-3 sm:gap-4">
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:underline sm:justify-self-start">
          {PHONE}
        </a>
        <a href="mailto:adeleodderskov@gmail.com" className="hover:underline sm:justify-self-center">
          adeleodderskov@gmail.com
        </a>
        <a href="mailto:adew@itu.dk" className="hover:underline sm:justify-self-end">
          adew@itu.dk
        </a>
      </div>
    </footer>
  );
}

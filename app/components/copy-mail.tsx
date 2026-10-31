"use client";

import { ReactNode, useState } from "react";

// A mailto link that also copies the address when clicked, and says so for a
// moment. Visitors without a mail program set up (Gmail in the browser, say)
// otherwise get nothing at all from a mailto link.
export default function CopyMail({
  address,
  className,
  children,
}: {
  address: string;
  className?: string;
  children: ReactNode;
}) {
  const [isCopied, setCopied] = useState(false);

  function copied() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function copy() {
    navigator.clipboard
      ?.writeText(address)
      .then(copied)
      .catch(() => {
        // Some browsers refuse the clipboard API; try the older way. If
        // that fails too, the mailto link still works.
        const field = document.createElement("textarea");
        field.value = address;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        if (document.execCommand("copy")) copied();
        field.remove();
      });
  }

  return (
    <a href={`mailto:${address}`} onClick={copy} className={className}>
      {children}
      <span
        aria-live="polite"
        className="pointer-events-none absolute right-0 bottom-[0.15em] text-[clamp(9px,0.8vw,12px)] tracking-[0.14em] uppercase"
      >
        {isCopied && "Copied to clipboard"}
      </span>
    </a>
  );
}

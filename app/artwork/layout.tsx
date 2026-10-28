import { ReactNode } from "react";
import HomeLink from "@/app/components/home-link";

// The flower home button on every page under /artwork. The front page has
// no need for it, so it lives here rather than in the root layout.
export default function ArtworkLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeLink />
      {children}
    </>
  );
}

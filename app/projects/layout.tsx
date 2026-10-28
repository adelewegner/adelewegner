import { ReactNode } from "react";
import HomeLink from "@/app/components/home-link";

// The flower home button on every page under /projects. The front page has
// no need for it, so it lives here rather than in the root layout.
export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeLink />
      {children}
    </>
  );
}

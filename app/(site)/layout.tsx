import { ReactNode } from "react";
import SiteFrame from "@/app/components/site-frame";

// Shared layout for the front page, the art page and the about page, so the
// frame stays mounted when moving between them.
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteFrame>{children}</SiteFrame>;
}

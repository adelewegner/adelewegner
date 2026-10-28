import { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";

// Every page you reach from the front page (a project, the cv, contact)
// shares the slim purple top and the lime page beneath it.
export default function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-lime text-purple">
      <SiteHeader />
      {children}
    </div>
  );
}

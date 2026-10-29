import { ReactNode } from "react";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";

// Every page you reach from the front page (a project, the cv, contact)
// shares the slim purple top, the lime page beneath it and the contact
// footer (which hides itself on the contact page).
export default function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-lime text-purple">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

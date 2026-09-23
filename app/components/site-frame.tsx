import { ReactNode } from "react";
import HomeLink from "@/app/components/home-link";
import PageNav from "@/app/components/page-nav";
import BioBlock from "@/app/components/bio-block";

// Shared frame for the front page, the art page and the about page: the home
// circle and the filter along the top, a sidebar with the bio on the left,
// and the page's own content on the right. Stacked on narrow screens.
export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 lg:px-8">
      <header className="mb-10 flex items-center gap-6">
        <HomeLink />
        <PageNav />
      </header>

      <main className="flex flex-col gap-10 lg:flex-row">
        <aside className="shrink-0 lg:sticky lg:top-6 lg:w-64 lg:self-start">
          <BioBlock />
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </main>
    </div>
  );
}

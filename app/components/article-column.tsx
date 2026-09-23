import { ReactNode } from "react";
import Link from "next/link";
import HomeLink from "@/app/components/home-link";

export interface ArticleChapter {
  id: string;
  label: string;
  content: ReactNode;
}

// The order of the projects on the front page, which is the order "next
// project" walks. It wraps at the end.
const PROJECT_ORDER = ["/projects/untitled-project"];

// The layout for a project article: the home circle, a title and year, then
// one section per chapter, and a link on to the next project.
export default function ArticleColumn({
  slug,
  title,
  year,
  chapters,
}: {
  slug: string;
  title: ReactNode;
  year: string;
  chapters: ArticleChapter[];
}) {
  const current = Math.max(PROJECT_ORDER.indexOf(`/projects/${slug}`), 0);
  const nextProject = PROJECT_ORDER[(current + 1) % PROJECT_ORDER.length];

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl px-4 py-6 lg:px-8">
      <header className="mb-10">
        <HomeLink />
      </header>

      <main className="space-y-10">
        <div className="space-y-2">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>

        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="space-y-4">
            <h2>{chapter.label}</h2>
            {chapter.content}
          </section>
        ))}

        <p>
          <Link href={nextProject}>next project</Link>
        </p>
      </main>
    </div>
  );
}

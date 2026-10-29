import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Projects that have their own page in a folder beside this one, so this
// general page must not claim their address too.
const OWN_PAGES = new Set([
  "smartwatch-in-everyday-life",
  "news-for-a-digital-generation",
  "eventful",
]);

export function generateStaticParams() {
  return PROJECTS.filter(
    (project) => project.slug && !OWN_PAGES.has(project.slug),
  ).map((project) => ({ slug: project.slug! }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: `${project?.title} – Adele Odderskov Wegner` };
}

// A project's own page. Only the title for now; the rest is still to come.
export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[1600px] px-[5.5vw] py-[4vw] text-center">
      <h1 className="text-[clamp(22px,3vw,48px)] leading-tight font-bold">
        {project.title}
      </h1>
      <p className="mt-[0.9em] text-[clamp(10px,1.05vw,16px)] tracking-[0.12em]">
        {project.subtitle}
      </p>
    </main>
  );
}

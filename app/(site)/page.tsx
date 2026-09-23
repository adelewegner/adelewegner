import Link from "next/link";

// The projects shown on the front page. Each one links to its article under
// app/projects/<slug>/page.tsx.
const projects = [
  {
    href: "/projects/untitled-project",
    title: "Project title",
    year: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <article key={project.href} className="space-y-2">
          <h2>
            <Link href={project.href}>{project.title}</Link>
          </h2>
          <p>{project.year}</p>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  );
}

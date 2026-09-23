import ArticleColumn, { ArticleChapter } from "@/app/components/article-column";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const CHAPTERS: ArticleChapter[] = [
  { id: "overview", label: "Overview", content: <p>{LOREM}</p> },
  { id: "process", label: "Process", content: <p>{LOREM}</p> },
  { id: "outcome", label: "Outcome", content: <p>{LOREM}</p> },
];

export default function UntitledProject() {
  return (
    <ArticleColumn
      slug="untitled-project"
      title="Project title"
      year="2026"
      chapters={CHAPTERS}
    />
  );
}

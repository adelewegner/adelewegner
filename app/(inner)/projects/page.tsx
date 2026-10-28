import { redirect } from "next/navigation";

// The projects are listed on the front page, so this address just leads
// there.
export default function ProjectsPage() {
  redirect("/");
}

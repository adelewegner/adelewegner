import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

// The data behind "Challenge: 500 asks", read from content/500-asks when the
// site is built. content/500-asks/README.md explains the format for Adele.
const FOLDER = path.join(process.cwd(), "content/500-asks");

export type Status = "accepted" | "rejected" | "pending";
export type Category = "professional" | "personal";

export interface Ask {
  date: string;
  category: Category;
  status: Status;
  fear: 1 | 2 | 3;
}

export interface Note {
  date: string;
  title?: string;
  paragraphs: string[];
}

// Every ask in asks.csv, in the order they were made. Lines with a category
// or status that isn't one of the known words are left out, so a typo
// doesn't break the page; a missing or odd fear level counts as 2.
export function getAsks(): Ask[] {
  const [, ...lines] = readFileSync(path.join(FOLDER, "asks.csv"), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  return lines.flatMap((line) => {
    const [date = "", category = "", status = "", fear = ""] = line
      .split(",")
      .map((value) => value.trim());
    const c = category.toLowerCase();
    const s = status.toLowerCase();
    if (c !== "professional" && c !== "personal") return [];
    if (s !== "accepted" && s !== "rejected" && s !== "pending") return [];
    const level = fear === "1" ? 1 : fear === "3" ? 3 : 2;
    return [{ date, category: c, status: s, fear: level }];
  });
}

// Every note in notes/, newest first. The date comes from the start of the
// file name, the title (if any) from a first line starting "# ", and the
// rest is split into paragraphs at blank lines.
export function getNotes(): Note[] {
  return readdirSync(path.join(FOLDER, "notes"))
    .filter((file) => /^\d{4}-\d{2}-\d{2}.*\.md$/.test(file))
    .sort()
    .reverse()
    .map((file) => {
      const text = readFileSync(path.join(FOLDER, "notes", file), "utf8");
      const lines = text.trim().split(/\r?\n/);
      const title = lines[0]?.startsWith("#")
        ? lines.shift()!.replace(/^#+\s*/, "")
        : undefined;
      return {
        date: file.slice(0, 10),
        title,
        paragraphs: lines
          .join("\n")
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
          .filter(Boolean),
      };
    });
}

// "2026-11-04" as "4 November 2026".
export function formatDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

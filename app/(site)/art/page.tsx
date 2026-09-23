import Link from "next/link";
import { getAllGalleryItems } from "@/lib/gallery";

// Every folder in public/gallery becomes one artwork here, linking to its own
// page under /gallery/<slug>.
export default function ArtPage() {
  const artworks = getAllGalleryItems();

  return (
    <div className="space-y-8">
      {artworks.map((item) => (
        <article key={item.slug} className="space-y-2">
          <h2>
            <Link href={`/gallery/${item.slug}`}>{item.metadata.title}</Link>
          </h2>
          <p>{item.metadata.year}</p>
        </article>
      ))}
    </div>
  );
}

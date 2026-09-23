import { notFound } from "next/navigation";
import Image from "next/image";
import HomeLink from "@/app/components/home-link";
import { getGalleryItem, getGallerySlugs } from "@/lib/gallery";

interface GalleryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGallerySlugs().map((slug) => ({ slug }));
}

// One artwork: its title and year, then any images placed in its folder in
// public/gallery/<slug>.
export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const item = getGalleryItem(slug);

  if (!item) {
    notFound();
  }

  const { metadata, images } = item;

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl px-4 py-6 lg:px-8">
      <header className="mb-10">
        <HomeLink href="/art" />
      </header>

      <main className="space-y-6">
        <div className="space-y-2">
          <h1>{metadata.title}</h1>
          <p>{metadata.year}</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${metadata.title} - Image ${index + 1}`}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
          />
        ))}
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

// Each artwork is a framed picture that opens its own page under /artwork.
// Add a new one by putting its image in public/artwork and adding a row here.
const artworks = [
  {
    slug: "discoball",
    title: "Disco ball",
    src: "/artwork/discoball.png",
    width: 2550,
    height: 3300,
  },
];

export default function ArtworkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-32 pb-24 sm:pt-[155px]">
      <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-none [font-stretch:75%]">
        Artwork
      </h1>

      <div className="mt-16 grid w-full max-w-[1160px] grid-cols-1 gap-10 sm:mt-28 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <Link
            key={artwork.slug}
            href={`/artwork/${artwork.slug}`}
            aria-label={artwork.title}
            className="block"
          >
            <Image
              src={artwork.src}
              alt={artwork.title}
              width={artwork.width}
              height={artwork.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              className="block h-auto w-full"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

import { ReactNode } from "react";
import Image from "next/image";

// One section of a project page: text on one side, a picture on the other.
// Sections alternate sides down the page; on phones they stack with the text
// first. Until a picture exists, a grey box holds its place.
export default function ProjectSection({
  imageSide,
  imageAspect = "aspect-square",
  image,
  children,
}: {
  imageSide: "left" | "right";
  imageAspect?: string;
  image?: { src: string; alt: string; caption?: string };
  children: ReactNode;
}) {
  return (
    <section className="grid items-center gap-[5vw] py-[4vw] md:grid-cols-2">
      <div
        className={`space-y-5 text-[clamp(15px,1.25vw,19px)] leading-[1.7] ${
          imageSide === "left" ? "md:order-2" : ""
        }`}
      >
        {children}
      </div>
      <figure className={imageSide === "left" ? "md:order-1" : ""}>
        <div
          aria-hidden={image ? undefined : true}
          className={`relative w-full overflow-hidden bg-[#d9d9d9] ${imageAspect}`}
        >
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          )}
        </div>
        {image?.caption && (
          <figcaption className="mt-3 text-[13px] leading-snug">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
}

// A small bold heading in capitals, for every section after the first.
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[clamp(17px,1.6vw,24px)] font-bold tracking-[0.03em] uppercase">
      {children}
    </h2>
  );
}

// A bulleted list in the body text style.
export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// The closing box on each project page: how what the project taught can be
// used at work. Purple with lime text, like the header, so it stands out
// from the sections above it.
export function InPractice({ children }: { children: ReactNode }) {
  return (
    <section className="my-[4vw] grid gap-x-[5vw] gap-y-4 bg-purple p-[clamp(24px,3.5vw,56px)] text-lime md:grid-cols-[1fr_2fr]">
      <h2 className="text-[clamp(26px,2.6vw,42px)] leading-tight">
        How I use this in practice
      </h2>
      <div className="space-y-5 text-[clamp(15px,1.25vw,19px)] leading-[1.7]">
        {children}
      </div>
    </section>
  );
}

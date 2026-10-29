import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Adele Odderskov Wegner",
};

// The ways to reach Adele, top to bottom. `label` is the small uppercase
// word on the left of each row.
const LINKS = [
  {
    label: "Mail",
    text: "adeleodderskov@gmail.com",
    href: "mailto:adeleodderskov@gmail.com",
  },
  { label: "Uni email", text: "adew@itu.dk", href: "mailto:adew@itu.dk" },
  { label: "Phone", text: "+45 42603012", href: "tel:+4542603012" },
  {
    label: "LinkedIn",
    text: "Adele Odderskov Wegner",
    href: "https://www.linkedin.com/in/adele-odderskov-wegner-6a92a9182/",
    external: true,
  },
];

// The contact page: a big "Let's talk" on the left and the contact details
// as a list of ruled rows on the right (stacked on phones). Hovering a row
// runs a pink highlighter under its link.
export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1600px] items-start gap-x-[6vw] gap-y-16 px-[5.5vw] pt-[5vw] pb-[8vw] text-purple lg:grid-cols-2">
      <div>
        <p className="flex items-center gap-[0.7em] text-[clamp(10px,1.05vw,15px)] tracking-[0.12em] uppercase">
          <span
            aria-hidden
            className="size-[1em] rounded-full border-2 border-purple bg-lime"
          />
          Open for work · Copenhagen
        </p>
        <h1 className="mt-[0.3em] text-[clamp(52px,8vw,128px)] leading-none">
          Let&rsquo;s talk
        </h1>
        <p className="mt-[1.2em] max-w-[26em] text-[clamp(16px,1.35vw,21px)] leading-relaxed">
          Whether it&rsquo;s a job, a project or just a good chit chat, I
          would love to hear from you! &lt;3
        </p>
      </div>

      <ul className="border-t-2 border-purple lg:mt-[clamp(40px,4.5vw,72px)]">
        {LINKS.map((link) => (
          <li key={link.label} className="border-b-2 border-purple">
            <a
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noreferrer" })}
              className="group flex items-baseline justify-between gap-6 py-[clamp(14px,1.4vw,22px)]"
            >
              <span className="shrink-0 text-[clamp(10px,0.9vw,14px)] tracking-[0.14em] uppercase">
                {link.label}
              </span>
              <span className="min-w-0 text-right text-[clamp(17px,1.75vw,28px)] break-words">
                <span className="bg-[linear-gradient(#ff7eb6,#ff7eb6)] bg-[length:0%_0.45em] bg-[position:0_90%] bg-no-repeat transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_0.45em] group-focus-visible:bg-[length:100%_0.45em] motion-reduce:transition-none">
                  {link.text}
                </span>
                {link.external && (
                  <span aria-hidden className="ml-[0.4em] text-[0.7em]">
                    &rarr;
                  </span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

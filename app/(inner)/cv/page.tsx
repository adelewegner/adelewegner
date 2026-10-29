import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CV – Adele Odderskov Wegner",
};

// The CV, set plainly: black text, thin black rules between sections. The
// experience runs down the wider left column and the profile, skills,
// languages and courses down the right; on phones they stack.

interface Entry {
  title: string;
  place?: string;
  period: string;
  points?: string[];
}

const EDUCATION: Entry[] = [
  {
    title: "MSc in Digital Design and Interactive Technologies",
    place: "IT University of Copenhagen",
    period: "2026 – 2028",
  },
  {
    title: "BA in Media Studies and Humanistic Technology Development",
    place: "Aarhus University",
    period: "2022 – 2025",
  },
];

const EXPERIENCE: Entry[] = [
  {
    title: "Kunde & Co, Assistant Consultant & Webmaster",
    period: "November 2025 – August 2026",
    points: [
      "Coordinating and updating web content for clients in CMS platforms (AEM, Drupal, Veeva) and working in HubSpot.",
      "Creating presentations in Figma and PowerPoint.",
      "Collaborating with clients and colleagues on projects.",
    ],
  },
  {
    title: "(Volunteer) Chair and Vice-Chair, Fredagsbar.dk",
    period: "November 2023 – April 2025",
    points: [
      "Leading the board and volunteers.",
      "Planning and running events and themed bars.",
      "Coordinating areas of responsibility and liaising with suppliers.",
    ],
  },
  {
    title:
      "Crescine (Report & Document Management), Aarhus University, Project Student Assistant",
    period: "March 2024 – May 2024",
    points: [
      "Report and document management, converting internal bookmarks into live web links, and archiving external sources via the Internet Archive for accurate referencing.",
    ],
  },
  {
    title: "(Volunteer) Layout Designer, SAMSON media magazine",
    period: "September 2023 – September 2024",
    points: [
      "Layout design for a printed magazine in Adobe InDesign, visual communication.",
    ],
  },
  {
    title: "(Volunteer) Member, Board of Studies, Aarhus University",
    period: "October 2022 – October 2023",
    points: [
      "Representing students in decisions on the degree programme, from course evaluations to changes in the curriculum.",
    ],
  },
  {
    title: "A. Enggaard, Office Junior (Piccoline) – full-time",
    period: "August 2021 – February 2022",
    points: [
      "As office junior at A. Enggaard I handled practical and administrative tasks, kept the office running smoothly day to day, and helped provide good service to colleagues and guests alike.",
    ],
  },
  {
    title: "Hospitality – Waiter, Bartender and Host",
    period: "4.5 years of experience as a waiter, bartender and host",
    points: ["Service under pressure with lots of people every day."],
  },
];

const PROFILE = [
  "Dreaming of having a professional marathon runner on the team? Then it's not me. On the other hand, I'm almost a professional at walking into a room with good energy and creating a great atmosphere.",
  "I hold a bachelor's degree in Media Studies with a minor in Humanistic Technology Development from Aarhus University, and I'm now doing my master's in Digital Design and Interactive Technologies at the IT University of Copenhagen.",
  "I'm fascinated by why people do what they do, and I love turning that curiosity into insight through interviews, observation and user testing.",
  "I want to work with UX research and digital design: helping teams understand their users, and turning that understanding into products and communication that work. I'm especially drawn to culture, media and brands, where technology and creativity meet.",
  "Outside work, I like to move my body, build Lego, listen to a lot of music and draw on my iPad, where I love to experiment visually.",
];

const SKILLS = [
  "CMS",
  "Excel",
  "Project coordination",
  "Workshop facilitation",
  "UX research",
  "PowerPoint",
  "Figma and Canva",
  "Prototyping",
  "Procreate",
];

const LANGUAGES = ["Danish – native", "English – fluent"];

const COURSES = [
  "ITU, Advanced Design Processes",
  "ITU, Situated Technology",
  "AU, Design of System-Based Technology",
  "AU, Technology in Context",
  "AU, Digital Methods",
  "AU, Analysis of Digital Media",
];

// A section: its heading in small spaced capitals over a thin black rule.
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-black pt-4">
      <h2 className="text-[13px] tracking-[0.14em] uppercase">{title}</h2>
      <div className="mt-5 space-y-7">{children}</div>
    </section>
  );
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div>
      <h3 className="font-bold leading-snug">{entry.title}</h3>
      {entry.place && <p>{entry.place}</p>}
      <p className="text-[15px] italic">{entry.period}</p>
      {entry.points && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-[15px]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-[5.5vw] py-[5vw] text-[16px] text-black">
      <header className="flex flex-col gap-4 border-b border-black pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[clamp(28px,4vw,48px)] leading-tight">
            Adele Wegner
          </h1>
          <p className="mt-1">
            MSc student in Digital Design and Interactive Technologies, ITU
          </p>
        </div>
        <div className="text-[15px] sm:text-right">
          <p>
            Phone:{" "}
            <a href="tel:+4542603012" className="underline">
              +45 42603012
            </a>
          </p>
          <p>
            Mail:{" "}
            <a href="mailto:adeleodderskov@gmail.com" className="underline">
              adeleodderskov@gmail.com
            </a>
          </p>
          <p>
            Uni email:{" "}
            <a href="mailto:adew@itu.dk" className="underline">
              adew@itu.dk
            </a>
          </p>
          <p>
            {/* A map pin: a teardrop with a round hole in it. */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="mr-[0.3em] inline-block h-[1em] w-auto align-[-0.15em]"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 5.4 7.5 13.5 7.5 13.5s7.5-8.1 7.5-13.5A7.5 7.5 0 0 0 12 1.5Zm0 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
              />
            </svg>
            Copenhagen
          </p>
        </div>
      </header>

      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-16">
        <div className="space-y-12">
          <Section title="Education">
            {EDUCATION.map((entry) => (
              <EntryBlock key={entry.title} entry={entry} />
            ))}
          </Section>
          <Section title="Experience">
            {EXPERIENCE.map((entry) => (
              <EntryBlock key={entry.title} entry={entry} />
            ))}
          </Section>
        </div>

        <div className="space-y-12">
          <Section title="Profile">
            <div className="space-y-4 text-[15px] leading-relaxed">
              {PROFILE.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>
          <Section title="Skills">
            <List items={SKILLS} />
          </Section>
          <Section title="Languages">
            <List items={LANGUAGES} />
          </Section>
          <Section title="Relevant courses">
            <List items={COURSES} />
          </Section>
        </div>
      </div>
    </main>
  );
}

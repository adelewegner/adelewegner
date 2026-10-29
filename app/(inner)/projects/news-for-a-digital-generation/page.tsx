import type { Metadata } from "next";
import ProjectSection, {
  BulletList,
  SectionHeading,
  InPractice,
} from "@/app/components/project-section";

export const metadata: Metadata = {
  title: "News for a Digital Generation – Adele Odderskov Wegner",
};

// The sources cited in the text, in the same form as in the thesis.
const REFERENCES = [
  "Clark, T., Foster, L., Sloan, L., & Bryman, A. (2021). Bryman's social research methods (6th ed.). Oxford University Press.",
  "Dijck, J. van, Poell, T., & de Waal, M. (2018). The Platform Society. Oxford University Press.",
  "DR. (2022). DR Nyheder er parat til at tabe “masser af trafik” på at lukke for kommentarer på Facebook. Retrieved 12 December 2024 from https://journalisten.dk/dr-nyheder-er-parat-til-at-tabe-masser-af-trafik-paa-at-lukke-for-kommentarer-paa-facebook/",
  "Kulturministeriet. (2023). DR's public service-kontrakt for 2024–2026. Retrieved 28 October 2024 from https://kum.dk/fileadmin/_kum/2_Kulturomraader/Medier/DR/Public_service-kontrakt_for_DR_2024-2026.pdf",
  "Moe, H. (2024). Embrace or leave social media? On the viability of public service media organizations' strategies facing platform power. European Journal of Communication, 1–13.",
  "Sehl, A., Cornia, A., & Nielsen, R. K. (2018). Public Service News and Social Media. Reuters Institute for the Study of Journalism, University of Oxford.",
];

// The BA thesis: a media system analysis of DR News on Instagram, written
// with a fellow student in Media Studies at Aarhus University (winter exam
// 2024). Three sections, each beside one of the thesis's own charts.
export default function BaThesisProject() {
  return (
    <main className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[8vw]">
      <p className="text-[clamp(13px,1.3vw,20px)] tracking-[0.06em] uppercase">
        2024 | BA thesis
      </p>

      <ProjectSection
        imageSide="right"
        imageAspect="aspect-[1664/1022]"
        image={{
          src: "/projects/ba-thesis/posts-per-year.png",
          alt: "Bar chart of posts per year on @drnyheder, rising from 22 in 2013 to a peak of 1,123 in 2021 and falling to 385 in 2024",
          caption:
            "Number of posts per year on @drnyheder, 2013–2024. Chart from the thesis, labels in Danish.",
        }}
      >
        <h1 className="text-[clamp(28px,3.2vw,52px)] leading-tight">
          BA thesis at Aarhus University
        </h1>
        <p>
          Young Danes increasingly get their news on social media rather than
          from TV, radio and newspapers. Since 2013, the public service
          broadcaster DR has met them on Instagram with @drnyheder. But
          Instagram is a commercial platform that rewards short, visual
          content, while DR is obliged to deliver news with depth and breadth
          (Moe, 2024).
        </p>
        <p>
          Together with a fellow student, I examined how DR News publishes on
          Instagram to reach a younger audience, and whether its strategy
          lives up to its public service obligations. We counted every post
          from 2013 to 2024, coded a month of content, and read DR&rsquo;s
          strategy and public service contract against what it actually posts
          (Clark et al., 2021).
        </p>
      </ProjectSection>

      <ProjectSection
        imageSide="left"
        imageAspect="aspect-[1538/942]"
        image={{
          src: "/projects/ba-thesis/content-split.png",
          alt: "Pie chart of @drnyheder's content from 28 October to 25 November 2024, led by international news at 24.2% and breaking news at 21%",
          caption:
            "Share of @drnyheder's posts by topic, 28 October – 25 November 2024. International news led at 24.2%, followed by breaking news at 21%.",
        }}
      >
        <SectionHeading>Analysis and findings</SectionHeading>
        <p>
          Posting grew from a handful of posts a year to a peak of 1,123 in
          2021, then fell by around 30% the year after, as DR turned its focus
          back to dr.dk and its own apps (DR, 2022). Looking closer at a month
          of posts in 2024, three patterns stood out:
        </p>
        <BulletList
          items={[
            <>
              <strong>Simple and visual.</strong> Every post is built for a
              quick swipe: one photo, one big headline and a short caption.
            </>,
            <>
              <strong>Broad over niche.</strong> International and breaking
              news made up 45% of the content, while regional news and news
              for children and young people got only 3.2% each.
            </>,
            <>
              <strong>Marketing, not distribution.</strong> 71% of the posts
              sent readers on to DR&rsquo;s own platforms, using Instagram as
              a signpost rather than a home for the news (Sehl et al., 2018).
            </>,
          ]}
        />
      </ProjectSection>

      <ProjectSection
        imageSide="right"
        imageAspect="aspect-[1742/1072]"
        image={{
          src: "/projects/ba-thesis/likes-per-post.png",
          alt: "Bar chart of average likes per post on @drnyheder during one week each November, peaking at 3,942 in 2020",
          caption:
            "Average likes per post on @drnyheder during one week each November, 2013–2024. Chart from the thesis, labels in Danish.",
        }}
      >
        <SectionHeading>Discussion and conclusion</SectionHeading>
        <p>
          Being on Instagram lets DR reach young people where they are, as its
          public service contract requires (Kulturministeriet, 2023). But
          every post also adds value to a commercial platform, and its
          algorithms decide which news gets seen (Dijck et al., 2018).
        </p>
        <p>
          We concluded that DR&rsquo;s presence is a balancing act rather than
          a dependency. With 343,000 followers, @drnyheder still reaches far
          after cutting back, and in today&rsquo;s media system, leaving
          Instagram would be as much of a problem as staying.
        </p>
      </ProjectSection>

      <InPractice>
        <p>
          From the thesis I bring a way of reading content strategically:
          counting and coding what an organisation actually publishes, and
          holding it up against what it says it wants to achieve.
        </p>
        <p>
          At work, I can use that to audit a company&rsquo;s social media,
          spot the gaps between strategy and output, and suggest content that
          fits both the platform and the brand&rsquo;s purpose, while keeping
          in mind the trade-off of building on platforms you don&rsquo;t own.
        </p>
      </InPractice>

      <section
        aria-labelledby="references"
        className="mx-auto mt-[4vw] max-w-[760px] border-t border-current pt-8 text-center"
      >
        <h2
          id="references"
          className="text-[13px] tracking-[0.14em] uppercase"
        >
          References
        </h2>
        <ul className="mt-5 space-y-3 text-[13px] leading-relaxed break-words">
          {REFERENCES.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

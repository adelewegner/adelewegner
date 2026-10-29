import type { Metadata } from "next";
import NextProject from "@/app/components/next-project";
import ProjectSection, {
  BulletList,
  SectionHeading,
  InPractice,
} from "@/app/components/project-section";

export const metadata: Metadata = {
  title: "Smartwatch in everyday life – Adele Odderskov Wegner",
};

// The sources cited in the text, in the same form as in the exam paper.
const REFERENCES = [
  "Bartlett, R., & Milligan, C. (2015). Diary Method: Methods in Health and Social Care Research. London: Routledge.",
  "Garmin. (n.d.). Forerunner® 265S. Retrieved 25 May 2025 from https://www.garmin.com/da-DK/p/886689/",
  "Halkier, B. (2009). Fokusgrupper (2nd ed.). Samfundslitteratur.",
  "Ihde, D. (1990). Technology and the Lifeworld: From Garden to Earth. Bloomington: Indiana University Press.",
  "Kennedy, H., & Hill, R. L. (2018). The feeling of numbers: Emotions in everyday engagements with data and their visualisation. Sociology, 52(4), 830–848. https://doi.org/10.1177/0038038516674675",
  "Light, B., Burgess, J., & Duguay, S. (2018). The walkthrough method: An approach to the study of apps. New Media & Society, 20(3), 881–900. https://doi.org/10.1177/1461444816675438",
  "Lupton, D. (2013). Understanding the human machine: The quantified self movement and the self-tracking practices. IEEE Technology and Society Magazine, 32(4), 25–30. https://doi.org/10.1109/MTS.2013.2286431",
  "Thaler, R. H. (2018). From cashews to nudges: The evolution of behavioral economics. American Economic Review, 108(6), 1265–1287. https://doi.org/10.1257/aer.108.6.1265",
  "Tracy, S. J. (2025). Qualitative research methods: Collecting evidence, crafting analysis, communicating impacts (3rd ed.). Wiley-Blackwell.",
  "Videnskab.dk. (2023, 15 May). Apps og smartwatches kan ændre sundhedssystemet – og dit helbred. Retrieved 23 May 2025 from https://videnskab.dk/krop-sundhed/apps-og-smartwatches-kan-aendre-sundhedssystemet-og-dit-helbred/",
];

// The smartwatch project: an exam project in Technology in Context at Aarhus
// University (summer 2025) on how the Garmin watch shapes the way young
// adults see their own health and performance.
export default function SmartwatchProject() {
  return (
    <main className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[8vw]">
      <p className="text-[clamp(13px,1.3vw,20px)] tracking-[0.06em] uppercase">
        2025 | Qualitative research
      </p>

      <ProjectSection
        imageSide="right"
        image={{
          src: "/projects/smartwatch/data-body.svg",
          alt: "Drawing of an arm with a smartwatch, with sleep, pulse, steps and energy floating into it",
        }}
      >
        <h1 className="text-[clamp(28px,3.2vw,52px)] leading-tight">
          Qualitative research project at Aarhus University
        </h1>
        <p>
          Wearables are no longer just for elite athletes. Smartwatches measure
          everything from steps and exercise to sleep and stress, and tell us
          whether we have &ldquo;slept well&rdquo; or &ldquo;been active
          enough&rdquo; (Videnskab.dk, 2023). In this exam project, I looked at
          the Garmin watch and asked how it shapes the way people see their own
          health and performance.
        </p>
        <p>
          The study followed two people from the target group of young
          adults, aged 18 to 30, using three qualitative methods:
        </p>
        <BulletList
          items={[
            "A walkthrough of a Garmin Forerunner 265S (Garmin, n.d.) and the Garmin Connect app, mapping what the design invites the user to do (Light, Burgess & Duguay, 2018)",
            "A one-week diary study with both participants (Bartlett & Milligan, 2015)",
            "Semi-structured interviews following up on their diaries, transcribed and coded (Tracy, 2025; Halkier, 2009)",
          ]}
        />
      </ProjectSection>

      <ProjectSection
        imageSide="left"
        imageAspect="aspect-[740/630]"
        image={{
          src: "/projects/smartwatch/meter-and-mirror.svg",
          alt: "Drawing of a watch with a gauge on its face next to a hand mirror reflecting a calm face",
        }}
      >
        <SectionHeading>Analysis and findings</SectionHeading>
        <p>
          The watch turned out to be an actor rather than a passive tool. From
          setup onwards it frames what counts as activity, puts health data
          first, and nudges with notifications like &ldquo;Time to move&rdquo;
          and a morning report on how you slept. The body is no longer felt
          directly, but through the technology (Ihde, 1990).
        </p>
        <p>The two participants related to their watches very differently:</p>
        <BulletList
          items={[
            <>
              <strong>A performance meter.</strong> For one participant, the
              watch set a high bar. They paused it on runs when they wanted to
              walk, so as not to &ldquo;ruin&rdquo; their data, and negative
              feelings made up 31.4% of their coded interview.
            </>,
            <>
              <strong>A mirror.</strong> For the other, it brought calm.
              Calling themselves a &ldquo;data-and-numbers nerd&rdquo;, they
              used it to understand and confirm their body&rsquo;s signals.
              Positive feelings made up 33.3% of their interview, and negative
              ones only 2.8%.
            </>,
          ]}
        />
      </ProjectSection>

      <ProjectSection
        imageSide="right"
        imageAspect="aspect-[740/630]"
        image={{
          src: "/projects/smartwatch/who-is-in-control.svg",
          alt: "Drawing of a pair of scales with a watch on one side, a heart on the other and a question mark above",
        }}
      >
        <SectionHeading>Conclusion</SectionHeading>
        <p>
          Drawing on the idea of the neoliberal self (Lupton, 2013), the study
          showed how the participants take on responsibility for their own
          health and let the watch&rsquo;s feedback shape them. Its nudging
          design of colours, order and notifications doesn&rsquo;t just
          structure choices (Thaler, 2018). It makes data something you feel in
          your body (Kennedy & Hill, 2018).
        </p>
        <p>
          The watch can support healthier habits, but it can also bring guilt
          and a sense of never being good enough. With only two participants
          the findings can&rsquo;t be generalised, but they raise a question
          worth asking: when health is quantified, who is really in control,
          the user or the data?
        </p>
      </ProjectSection>

      <InPractice>
        <p>
          This project taught me to look past what a design is meant to do and
          study what it actually does in people&rsquo;s everyday lives. At
          work, I use diary studies and follow-up interviews to get close to
          how users feel about a product over time, not just in a single test.
        </p>
        <p>
          It also made me alert to how nudges, notifications and numbers can
          motivate one user and stress another. I bring that into any design
          that asks people to track or measure themselves.
        </p>
      </InPractice>
      <NextProject current="smartwatch-in-everyday-life" />

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

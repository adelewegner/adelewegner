import type { Metadata } from "next";
import ProjectSection, {
  BulletList,
  SectionHeading,
  InPractice,
} from "@/app/components/project-section";

export const metadata: Metadata = {
  title: "Eventful – Adele Odderskov Wegner",
};

// The sources cited in the text, in the same form as in the exam paper.
const REFERENCES = [
  "IDEO.org. (n.d.). Human-centered design: Design kit. Retrieved 19 February 2025 from https://www.designkit.org/",
  "Laubheimer, P. (2017, 6 August). Personas vs. Jobs-to-Be-Done. Nielsen Norman Group.",
  "Lim, Y. K., Stolterman, E., & Tenenberg, J. (2008). The anatomy of prototypes: Prototypes as filters, prototypes as manifestations of design ideas. ACM Transactions on Computer-Human Interaction (TOCHI), 15(2), 1–27.",
  "Tracy, S. J. (2025). Qualitative research methods: Collecting evidence, crafting analysis, communicating impacts (3rd ed.). Wiley-Blackwell.",
];

// Eventful: an app concept for finding events in Aarhus, from the exam in
// Design of Interactive Technologies at Aarhus University (summer 2025),
// designed with a fellow student. The pictures are screens from the
// prototype, the final survey result and the spin wheel.
export default function EventfulProject() {
  return (
    <main className="mx-auto max-w-[1600px] px-[5.5vw] pt-[4vw] pb-[8vw]">
      <p className="text-[clamp(13px,1.3vw,20px)] tracking-[0.06em] uppercase">
        2025 | UX · App concept
      </p>

      <ProjectSection
        imageSide="right"
        imageAspect="aspect-[1615/1392]"
        image={{
          src: "/projects/eventful/login-and-profile.png",
          alt: "Two screens from the Eventful prototype: a blue login screen, and a profile page with friends and event tickets",
          caption:
            "The login screen and the profile page with friends and tickets, added in the second iteration.",
        }}
      >
        <h1 className="text-[clamp(28px,3.2vw,52px)] leading-tight">
          Eventful: a UX project at Aarhus University
        </h1>
        <SectionHeading>Design concept</SectionHeading>
        <p>
          There&rsquo;s always something happening in Aarhus, but finding it
          means checking Instagram, websites, posters on the street and what
          friends happen to mention.
        </p>
        <p>
          Together with a fellow student, I saw a chance to gather it all in
          one place, and to make deciding what to do feel less like searching
          and more like play.
        </p>
        <p>
          We ended up designing Eventful, an app that collects the city&rsquo;s
          events and lets you filter them by budget, time, place and
          interests. Can&rsquo;t decide? Tell it what mood you&rsquo;re in, or
          spin the wheel for a random plan.
        </p>
      </ProjectSection>

      <ProjectSection
        imageSide="left"
        imageAspect="aspect-[1400/1232]"
        image={{
          src: "/projects/eventful/mood-screens.png",
          alt: "Two screens of the “What mood are you in?” feature, with moods like romantic, zen, festive, sporty, curious, hungry and creative",
          caption:
            "The “What mood are you in?” screens from the first prototype, in Danish.",
        }}
      >
        <SectionHeading>Research and first prototype</SectionHeading>
        <p>
          Our starting hypothesis was that people in Aarhus lack one place for
          events and would use it if it existed. To test it, we followed the
          design thinking process from interviews to tested prototype
          (IDEO.org, n.d.).
        </p>
        <p>
          Semi-structured interviews (Tracy, 2025) quickly overturned our
          first assumption: hardly anyone found events on Facebook. People
          used Instagram and word of mouth, and the shared frustration was
          having to check too many places.
        </p>
        <p>
          We turned the interviews into three personas and a set of
          jobs-to-be-done (Laubheimer, 2017), and built a low-fidelity
          prototype in Canva (Lim, Stolterman & Tenenberg, 2008) with five
          features:
        </p>
        <BulletList
          items={[
            "A map of events around the city",
            "“What mood are you in?”, which suggests events to match your mood",
            "“Spin and find”, a wheel that picks a random activity",
            "A calendar and search with filters",
            "A chat for planning with friends",
          ]}
        />
      </ProjectSection>

      <ProjectSection
        imageSide="right"
        imageAspect="aspect-[2039/573]"
        image={{
          src: "/projects/eventful/rating.png",
          alt: "Average rating of 8 out of 10, shown as eight red hearts and two grey ones",
          caption:
            "Testers’ average answer to how likely they would be to use Eventful: 8 out of 10.",
        }}
      >
        <SectionHeading>Testing and second iteration</SectionHeading>
        <p>
          In user tests, the mood feature and the wheel were the favourites,
          while the map wasn&rsquo;t intuitive enough and some icons were
          unclear. In the second iteration we added a login and profile, made
          the navigation clearer, and split the calendar into saved and
          recommended events.
        </p>
        <p>
          In a follow-up survey, 75% found the app more intuitive than before,
          and every tester found the icons and the mood feature clearer. Asked
          how likely they were to use it, they gave Eventful 8 out of 10 on
          average. With a small group of testers, there is still work to do
          before it&rsquo;s a 10.
        </p>
      </ProjectSection>

      <ProjectSection
        imageSide="left"
        imageAspect="aspect-[1419/1251]"
        image={{
          src: "/projects/eventful/spin-wheel.png",
          alt: "Two screens of the “Spin and find” wheel, first empty and then set to a date, a budget and concerts",
          caption:
            "“Spin and find”: choose a date, budget and category, then spin for a random activity. From the prototype, in Danish.",
        }}
      >
        <SectionHeading>Learnings</SectionHeading>
        <p>
          Looking back, the strength of the project was how closely we
          involved the users. By testing, listening and daring to go back when
          something didn&rsquo;t work, we ended up with a prototype that fits
          their needs far better than our first idea.
        </p>
        <p>
          The weak spot was settling on an app too early. Jumping straight
          from the problem to a product may have shut out simpler solutions,
          so next time I would give the define and ideate phases more room to
          explore. And before Eventful could go live, it would need testing on
          a much larger group.
        </p>
      </ProjectSection>

      <InPractice>
        <p>
          Eventful gave me hands-on experience of the whole design process,
          from interviews and personas to prototypes, user tests and a second
          iteration.
        </p>
        <p>
          At work, it means I can take a vague idea, test the assumptions
          behind it early, and let users&rsquo; feedback shape the product
          rather than my own preferences. And I know to keep the early phases
          open long enough that the solution isn&rsquo;t decided before the
          problem is understood.
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

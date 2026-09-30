import Image from "next/image";

// The "Meet me" card on the front page: a dark red card with torn edges, a
// tilted black "MEET ME" label over its top-left corner, a short intro on
// the left and the cut-out photo on the right, standing on a torn light-grey
// patch. The torn edges are an SVG filter that roughens the outline of the
// shapes it is applied to; the text and the photo are left crisp.
export default function MeetMe() {
  return (
    <section
      aria-labelledby="meet-me"
      className="relative mx-auto w-full max-w-[1032px] px-4 pt-16 pb-24 md:px-0"
    >
      <svg aria-hidden width="0" height="0" className="absolute">
        <filter id="torn-edge" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.45"
            numOctaves="3"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="12" />
        </filter>
        {/* The patch behind the photo: first bent into a lumpy shape by
            large, slow noise, then torn along its edge like the card. */}
        <filter id="torn-patch" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="9"
            result="lumps"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="lumps"
            scale="90"
            result="lumpy"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.45"
            numOctaves="3"
            seed="4"
            result="grain"
          />
          <feDisplacementMap in="lumpy" in2="grain" scale="14" />
        </filter>
      </svg>

      <div className="relative">
        {/* The card itself, drawn behind everything. */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[28px] bg-[#410c08] [filter:url(#torn-edge)]"
        />

        {/* The tilted label hanging over the card's top-left corner. */}
        <div className="absolute -top-6 -left-2 z-20 flex h-[88px] w-[330px] -rotate-12 items-center justify-center md:-top-8 md:-left-14 md:h-[150px] md:w-[590px]">
          <div
            aria-hidden
            className="absolute inset-0 bg-black [filter:url(#torn-edge)]"
          />
          <h2
            id="meet-me"
            className="relative font-display text-[64px] font-black leading-none tracking-[0.01em] text-white uppercase [font-stretch:75%] md:text-[112px]"
          >
            Meet me
          </h2>
        </div>

        <div className="relative grid md:grid-cols-[1fr_450px]">
          <div className="relative z-10 px-6 pt-28 pb-10 text-center text-white md:px-12 md:pt-[245px] md:pb-16">
            <p className="text-[20px] tracking-[0.18em] md:text-[25px]">
              Adele Odderskov Wegner
            </p>
            <p className="mx-auto mt-3 max-w-[440px] text-[16px] leading-[2.2] tracking-[0.06em] md:text-[20px] md:leading-[2.5]">
              Digital designer and artist based in Copenhagen, with a passion
              for UX research, data analysis, human behavior, and the ways
              technology shapes how we interact with the world.
            </p>
          </div>

          <div className="relative flex items-end justify-center self-end">
            {/* The torn white patch behind the photo. */}
            <div
              aria-hidden
              className="absolute top-[8%] right-[4%] bottom-[14%] left-[4%] rounded md:right-[-1%] md:left-[-10%]-[45%_20%_40%_60%/50%_20%_55%_45%] bg-white [filter:url(#torn-patch)]"
            />
            <Image
              src="/adele.png"
              alt="Portrait of Adele Odderskov Wegner"
              width={1082}
              height={1538}
              sizes="(max-width: 768px) 300px, 450px"
              className="relative w-[300px] md:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

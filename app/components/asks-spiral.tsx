type Status = "accepted" | "rejected" | "pending";
type Category = "professional" | "personal";

export interface SpiralAsk {
  when: string;
  category: Category;
  status: Status;
  fear: 1 | 2 | 3;
}

const TOTAL = 500;

const COLOUR: Record<Status, string> = {
  accepted: "#ff7eb6",
  pending: "#ffc93c",
  rejected: "#e0323a",
};

// How much bigger a scarier ask is drawn, by fear level.
const SCALE = { 1: 0.75, 2: 1, 3: 1.35 };

// One ask as a shape, drawn like a fine ink drawing: a thin purple line
// round a light wash of its answer's colour (plain purple in the key). An
// eight-pointed star with curved points for professional, a flower of five
// slim petals for personal.
const STAR =
  "M0 -11.00Q1.22 -2.96 7.78 -7.78Q2.96 -1.22 11.00 0Q2.96 1.22 7.78 7.78Q1.22 2.96 0 11.00Q-1.22 2.96 -7.78 7.78Q-2.96 1.22 -11.00 0Q-2.96 -1.22 -7.78 -7.78Q-1.22 -2.96 0 -11.00Z";
const PETAL = "M0 0C-3.2-3.5-3.6-8.5 0-10.8 3.6-8.5 3.2-3.5 0 0Z";

function Glyph({ category, status }: { category: Category; status?: Status }) {
  const shape = {
    fill: status ? COLOUR[status] : "#3a1f49",
    fillOpacity: 0.55,
    stroke: "#3a1f49",
    strokeWidth: 0.7,
  };
  return (
    <svg viewBox="-12 -12 24 24" aria-hidden className="size-full">
      {category === "professional" ? (
        <path d={STAR} {...shape} />
      ) : (
        [0, 72, 144, 216, 288].map((turn) => (
          <path key={turn} d={PETAL} transform={`rotate(${turn})`} {...shape} />
        ))
      )}
      <circle r={category === "professional" ? 1.4 : 1.9} fill="#3a1f49" />
    </svg>
  );
}

// Where ask number `index` (from 0) sits on the spiral, in the units of the
// spiral's viewBox. It's an Archimedean spiral, so the turns are evenly
// spaced, and each ask is the same distance along it from the one before.
const GAP = 40;
const TURN = GAP / (2 * Math.PI);
function place(index: number) {
  const angle = Math.sqrt((2 * GAP * (index + 0.6)) / TURN);
  const radius = TURN * angle;
  // Start pointing up and wind clockwise. Rounded, so the server and the
  // browser agree on every digit.
  return {
    x: Math.round(radius * Math.sin(angle) * 10) / 10,
    y: Math.round(-radius * Math.cos(angle) * 10) / 10,
  };
}

// How far out ask number `index` sits from the middle.
const reach = (index: number) =>
  TURN * Math.sqrt((2 * GAP * (index + 0.6)) / TURN);

// How many of the places still to come are hinted at with a faint line.
const AHEAD = 12;

// A small heading in the key, like "Shape = category".
function KeyHeading({ children }: { children: string }) {
  return <p className="mt-6">{children}</p>;
}

// A line explaining part of the key, a little paler than the rest.
function KeyNote({ children }: { children: string }) {
  return <p className="text-purple/70">{children}</p>;
}

// The asks as a spiral that grows by one shape with every ask, from #1 in
// the middle outwards, joined by a thin dashed line; a faint line hints at
// the next few places. The view zooms out as the spiral grows, so it always
// fills its space: the shapes start big and get smaller on screen the more
// asks there are. Also the picture for the project on the front page,
// where `close` zooms in on just the asks made so far, so the shapes fill
// the small square.
export function Spiral({
  asks,
  close = false,
  className,
}: {
  asks: Pick<SpiralAsk, "category" | "status" | "fear">[];
  close?: boolean;
  className?: string;
}) {
  const count = (status: Status) =>
    asks.filter((ask) => ask.status === status).length;
  const points = Array.from({ length: TOTAL }, (_, index) => place(index));
  const line = (from: number, to: number) =>
    points
      .slice(from, to)
      .map((point, i) => `${i ? "L" : "M"}${point.x} ${point.y}`)
      .join("");
  const latest = asks.length - 1;
  // Never zoomed in further than 40 asks' worth (8 when close), so the
  // first few aren't huge.
  const size = close
    ? Math.ceil(reach(Math.max(8, asks.length))) + 24
    : Math.ceil(reach(Math.max(40, asks.length + AHEAD))) + 28;

  return (
    <svg
      viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`}
      role="img"
      aria-label={`A spiral of the ${asks.length} asks so far: ${count("accepted")} accepted, ${count("rejected")} rejected and ${count("pending")} pending`}
      className={className}
    >
      <path
        d={line(Math.max(0, latest), asks.length + AHEAD)}
        fill="none"
        stroke="#3a1f49"
        strokeOpacity={0.18}
        strokeDasharray="2 4"
      />
      <path
        d={line(0, asks.length)}
        fill="none"
        stroke="#3a1f49"
        strokeOpacity={0.55}
        strokeDasharray="3 3"
      />
      {asks.map((ask, index) => {
        const half = 13 * SCALE[ask.fear];
        return (
          <svg
            key={index}
            x={points[index].x - half}
            y={points[index].y - half}
            width={half * 2}
            height={half * 2}
            overflow="visible"
          >
            <Glyph category={ask.category} status={ask.status} />
          </svg>
        );
      })}
    </svg>
  );
}

// The live data visualization on the project page: the spiral, and to its
// left (above it on phones) how many asks so far, when the last one was,
// and the key with a count for each answer. What each ask was is never
// shown; Adele tells that in her field notes when she wants to.
export default function AsksSpiral({ asks }: { asks: SpiralAsk[] }) {
  const count = (status: Status) =>
    asks.filter((ask) => ask.status === status).length;
  const latest = asks.length - 1;

  return (
    <div className="grid items-center gap-x-[5vw] gap-y-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)]">
      <div className="text-[clamp(15px,1.25vw,19px)] leading-[1.7]">
        <h2 className="text-[clamp(13px,1.05vw,16px)] font-bold tracking-[0.14em] uppercase">
          Live data visualization
        </h2>
        {/* A deeper pink than the buttons, so the small text can be read
            on the lime. */}
        <p className="mt-4 font-bold text-[#e0408f]">
          {asks.length} of {TOTAL} asks made so far
        </p>
        {latest >= 0 && (
          <p className="text-purple/70">Last updated {asks[latest].when}</p>
        )}

        <div className="mt-2">
          <KeyHeading>Shape = category</KeyHeading>
          <ul>
            {(["professional", "personal"] as const).map((category) => (
              <li key={category} className="flex items-center gap-3">
                <span className="size-[1.1em]">
                  <Glyph category={category} />
                </span>
                {category}
              </li>
            ))}
          </ul>

          <KeyHeading>Colour = outcome</KeyHeading>
          <ul>
            {(["accepted", "rejected", "pending"] as const).map((status) => (
              <li key={status} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="mx-[0.05em] size-[1em] rounded-full border border-purple"
                  // The same 55% wash as the shapes (8c in hex).
                  style={{ background: `${COLOUR[status]}8c` }}
                />
                {status} ({count(status)})
              </li>
            ))}
          </ul>

          <KeyHeading>Size = fear level</KeyHeading>
          <KeyNote>
            Bigger shapes are asks that felt scarier to make (1–3).
          </KeyNote>

          <KeyHeading>Position = sequence of asks</KeyHeading>
          <KeyNote>
            Each ask spirals outward from the centre. #1 sits in the middle, and
            the spiral grows as the count goes up.
          </KeyNote>
        </div>

        {!asks.length && <p className="mt-8">The first ask is coming soon.</p>}
      </div>

      <Spiral asks={asks} className="mx-auto block w-full max-w-[520px]" />
    </div>
  );
}

import { cn } from "@/lib/utils";

/** Deterministic pseudo-random in [0,1) — identical on server and client. */
function hash(a: number, b: number, salt: number) {
  const n = Math.sin(a * 127.1 + b * 311.7 + salt * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const COLS = 46;
const TRAIL_ROWS = 6;
const NAVY = "bg-[#071d7b]";
const ELECTRIC = "bg-primary";

type ManifestoTransitionProps = {
  /** "in" — the navy field sits below this band, pixels escape upward.
   *  "out" — the navy field sits above this band, pixels fall downward. */
  direction: "in" | "out";
};

type Zone = { center: number; halfWidth: number; peakReach: number };

/** A handful of distinct break points across the width — not evenly spread,
 *  not everywhere. Most of the edge stays a clean, straight line. */
function breakZones(seed: number): Zone[] {
  const zones: Zone[] = [];
  for (let i = 0; i < 3; i++) {
    const center = 0.14 + hash(i, 0, seed) * 0.72;
    const widthCols = 2 + Math.floor(hash(i, 1, seed) * 3);
    const peakReach = 2 + Math.floor(hash(i, 2, seed) * (TRAIL_ROWS - 1));
    zones.push({ center, halfWidth: widthCols / COLS / 2, peakReach });
  }
  return zones;
}

function reachForColumn(cFrac: number, zones: Zone[]): number {
  let reach = 0;
  for (const zone of zones) {
    const dist = Math.abs(cFrac - zone.center);
    if (dist < zone.halfWidth) {
      const t = 1 - dist / zone.halfWidth;
      reach = Math.max(reach, Math.round(zone.peakReach * t));
    }
  }
  return reach;
}

/**
 * The manifesto's solid navy mass breaking apart at its edge: a mostly
 * straight, clean boundary with a few deliberate points where square
 * fragments detach and travel outward, thinning to nothing a short distance
 * away. Directional — escaping upward on entry, falling downward on exit —
 * and asymmetric between the two. Flat solid colour only: no rotation, no
 * gradients, no fading.
 */
export function ManifestoTransition({ direction }: ManifestoTransitionProps) {
  const isIn = direction === "in";
  const seed = isIn ? 17 : 53;
  const lightColor = isIn ? "bg-lavender" : "bg-white";
  const zones = breakZones(seed);

  // A very small number of isolated fragments, fully disconnected from any
  // break zone — the furthest, rarest specks.
  const isolated = new Set<string>();
  for (let i = 0; i < 3; i++) {
    const c = Math.floor(hash(i, 9, seed) * COLS);
    const row = TRAIL_ROWS - 1 - Math.floor(hash(i, 10, seed) * 2);
    isolated.add(`${c}-${row}`);
  }

  const columns = [];
  for (let c = 0; c < COLS; c++) {
    const cFrac = COLS > 1 ? c / (COLS - 1) : 0;
    const reach = reachForColumn(cFrac, zones);

    const steps = [];
    for (let d = 0; d < TRAIL_ROWS; d++) {
      const present = d < reach || isolated.has(`${c}-${d}`);
      if (!present) {
        steps.push(<div key={d} className="flex-1" />);
        continue;
      }
      const nearEdge = d < 2;
      const tone = nearEdge ? NAVY : hash(c, d, seed + 5) > 0.55 ? ELECTRIC : NAVY;
      const size = isIn ? Math.max(6, 12 - d * 1.2) : 9;
      steps.push(
        <div key={d} className="flex flex-1 items-center justify-center">
          <div className={tone} style={{ width: size, height: size }} />
        </div>
      );
    }

    // Distance 0 must sit at the edge nearest the navy mass: the bottom of
    // the trail zone when escaping upward, the top when falling downward.
    columns.push(
      <div key={c} className={cn("flex flex-1", isIn ? "flex-col-reverse" : "flex-col")}>
        {steps}
      </div>
    );
  }

  const trailZone = (
    <div key="trail" className={cn("flex h-28 w-full sm:h-40", lightColor)}>
      {columns}
    </div>
  );
  const navyStrip = <div key="navy" className={cn("h-8 w-full sm:h-10", NAVY)} />;

  return (
    <div aria-hidden="true" className="flex w-full flex-col">
      {isIn ? [trailZone, navyStrip] : [navyStrip, trailZone]}
    </div>
  );
}

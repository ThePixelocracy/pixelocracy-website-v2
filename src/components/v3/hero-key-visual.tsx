import { cn } from "@/lib/utils";

/** Deterministic pseudo-random in [0,1) — identical on server and client. */
function hash(a: number, b: number, salt: number) {
  const n = Math.sin(a * 127.1 + b * 311.7 + salt * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const ROWS = 6;
const COLS = 40;
// Two distinct moments — not one smooth curve — where fragments visibly
// collide and cluster before the system resolves.
const COLLISIONS = [0.36, 0.6];
const COLLISION_RADIUS = 0.06;

const BACK_ROWS = 5;
const BACK_COLS = 11;

// Exactly four solid, flat Pixelocracy colours — no alpha, no gradients.
const NAVY = "bg-[#071d7b]";
const ELECTRIC = "bg-primary";
const PALE = "bg-lavender";
const WHITE = "bg-white";

type Zone = "chaos" | "cluster" | "resolved";

function zoneFor(p: number): Zone {
  if (p < 0.32) return "chaos";
  if (p < 0.72) return "cluster";
  return "resolved";
}

type HeroKeyVisualProps = {
  className?: string;
};

/**
 * Pixelocracy key visual: "Complexity resolving into Clarity" — built
 * entirely from flat solid colour, scale, rotation and density. Scattered
 * fragments (white / pale blue, rare navy) collide and cluster at two
 * distinct moments, then settle into an aligned, uniform electric-blue
 * system. No gradients, no opacity fades, no shadows.
 */
export function HeroKeyVisual({ className }: HeroKeyVisualProps) {
  const backCells = [];
  for (let r = 0; r < BACK_ROWS; r++) {
    for (let c = 0; c < BACK_COLS; c++) {
      const progress = BACK_COLS > 1 ? c / (BACK_COLS - 1) : 1;
      const h1 = hash(r, c, 21);
      const h2 = hash(r, c, 22);
      const visible = progress < 0.68 && h1 > 0.4;
      if (!visible) {
        backCells.push(<div key={`b-${r}-${c}`} />);
        continue;
      }
      // Fixed pixel size — never derived from the (wide) column width, so it
      // can never outgrow the row it sits in.
      const size = 14 + h2 * 16;
      backCells.push(
        <div key={`b-${r}-${c}`} className="flex items-center justify-center">
          <div className={h1 > 0.7 ? PALE : WHITE} style={{ width: size, aspectRatio: "1 / 1" }} />
        </div>
      );
    }
  }

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    const rowJitter = (hash(r, 0, 11) - 0.5) * 0.1;
    for (let c = 0; c < COLS; c++) {
      const baseProgress = COLS > 1 ? c / (COLS - 1) : 1;
      const p = Math.min(1, Math.max(0, baseProgress + rowJitter));
      const zone = zoneFor(p);

      const h1 = hash(r, c, 1);
      const h2 = hash(r, c, 2);
      const h3 = hash(r, c, 3);
      const h4 = hash(r, c, 4);
      const cluster = hash(r, Math.floor(c / 3), 5);

      const isCollision = COLLISIONS.some((center) => Math.abs(baseProgress - center) < COLLISION_RADIUS);

      // Density: sparse in chaos, filling in through cluster, solid once
      // resolved. Collision points always render — that's the moment.
      let skip = false;
      if (zone === "chaos") skip = h1 < 0.32 + cluster * 0.3;
      else if (zone === "cluster") skip = !isCollision && h1 < 0.16;
      if (skip) {
        cells.push(<div key={`${r}-${c}`} />);
        continue;
      }

      let tone: string;
      if (zone === "resolved") {
        tone = h4 > 0.8 ? NAVY : ELECTRIC;
      } else if (zone === "cluster") {
        if (isCollision) {
          tone = h3 < 0.45 ? ELECTRIC : h3 < 0.75 ? NAVY : PALE;
        } else {
          tone = h3 < 0.4 ? ELECTRIC : h3 < 0.7 ? PALE : WHITE;
        }
      } else {
        tone = h3 < 0.15 ? NAVY : h3 < 0.55 ? PALE : WHITE;
      }

      let scale: number;
      let rotation: number;
      if (zone === "resolved") {
        scale = 1;
        rotation = 0;
      } else if (zone === "cluster") {
        scale = isCollision ? 0.55 + h2 * 0.55 : 0.4 + h2 * 0.5;
        rotation = (h2 - 0.5) * 30;
      } else {
        scale = 0.2 + h2 * 0.65;
        rotation = (h2 - 0.5) * 75;
      }

      // A literal collision: a second, smaller fragment overlapping the
      // first at a sharp angle — two modules meeting, not a soft blend.
      // Nested inside the same cell (not a sibling grid item), so it can
      // never shift the row/column mapping of the cells that follow it.
      const showCollisionFragment = isCollision && zone !== "resolved" && h4 > 0.55;

      cells.push(
        <div key={`${r}-${c}`} className="relative flex items-center justify-center">
          <div
            className={tone}
            style={{
              width: `${scale * 100}%`,
              aspectRatio: "1 / 1",
              transform: rotation ? `rotate(${rotation}deg)` : undefined,
            }}
          />
          {showCollisionFragment ? (
            <div
              aria-hidden="true"
              className={cn("absolute", h4 > 0.78 ? NAVY : ELECTRIC)}
              style={{
                width: `${(0.35 + h1 * 0.25) * 100}%`,
                aspectRatio: "1 / 1",
                transform: `translate(${(h1 - 0.5) * 60}%, ${(h3 - 0.5) * 60}%) rotate(${(h1 - 0.5) * 50}deg)`,
              }}
            />
          ) : null}
        </div>
      );
    }
  }

  return (
    <div className={cn("grid", className)} style={{ gridTemplateRows: "100%", gridTemplateColumns: "100%" }}>
      <div
        aria-hidden="true"
        className="grid size-full [grid-area:1/1]"
        style={{ gridTemplateColumns: `repeat(${BACK_COLS}, 1fr)`, gridTemplateRows: `repeat(${BACK_ROWS}, 1fr)` }}
      >
        {backCells}
      </div>
      <div
        aria-hidden="true"
        className="relative grid size-full gap-[3px] [grid-area:1/1]"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
      >
        {cells}
      </div>
    </div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

const ROWS = 6;
const COLS = 16;

function cellHash(row: number, col: number) {
  const n = (row * 92821 + col * 68917 + 7 * 104729) % 1000;
  return Math.abs(n) / 1000;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.018 },
  },
};

const cellVariant: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function ManifestoV3() {
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const h = cellHash(r, c);
      // Bias density toward the frame edges so the centre stays clear for the
      // headline — the resolved grid quietly frames the statement, calm rather
      // than busy, instead of competing with it.
      const nx = Math.abs(c / (COLS - 1) - 0.5) * 2;
      const ny = Math.abs(r / (ROWS - 1) - 0.5) * 2;
      const edge = Math.max(nx, ny);
      const visible = h > 0.82 - edge * 0.35;
      cells.push({ r, c, h, visible });
    }
  }

  return (
    <section id="manifesto" className="relative overflow-hidden bg-[#071d7b] px-6 py-24 sm:px-8 sm:py-36">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid p-6 opacity-60 sm:p-10"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)`, gap: "3px" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cells.map(({ r, c, h, visible }) =>
          visible ? (
            <motion.div
              key={`${r}-${c}`}
              variants={cellVariant}
              className={h > 0.85 ? "bg-primary/50" : "bg-white/[0.08]"}
            />
          ) : (
            <div key={`${r}-${c}`} />
          )
        )}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="font-mono flex items-center justify-center gap-3 text-xs tracking-[0.1em] text-white/60 uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Our vision / Grid.03
        </div>
        <p className="font-display mt-8 [text-wrap:balance] break-words text-[clamp(2rem,1rem+5vw,5.5rem)] leading-[1.05] font-medium text-white">
          To eliminate mediocrity in technology adoption.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
          To help ambitious organizations turn business challenges into practical technology
          solutions that improve efficiency, create measurable value, and build lasting
          capability, leaving every organization stronger than we found it.
        </p>
      </div>
    </section>
  );
}

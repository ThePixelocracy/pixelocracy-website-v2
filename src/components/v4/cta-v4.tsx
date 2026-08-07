"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";

/**
 * The bookend: a monumental close mirroring the hero's scale, ending on an
 * intimate, direct invitation.
 *
 * Only the headline gets motion — the same overflow-mask wipe used for the
 * Five Pillars headings, bookending that technique at the very end of the
 * page instead of introducing a new one. The paragraph and CTA button stay
 * completely static: this is the conversion moment, and neither needed
 * motion to "contribute something," so per brief they get none — always
 * immediately readable and clickable regardless of scroll timing.
 */
export function CTAV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section id="contact" className="bg-background px-6 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <h2 className="font-display text-[clamp(3rem,1.5rem+9vw,10rem)] leading-[0.92] font-medium text-foreground">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} className="overflow-hidden">
            <motion.span
              variants={{ hidden: { y: 300 }, visible: { y: 0 } }}
              transition={{ duration: fast ?? 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              Get in
            </motion.span>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} className="overflow-hidden">
            <motion.span
              variants={{ hidden: { y: 300 }, visible: { y: 0 } }}
              transition={{ duration: fast ?? 0.8, delay: fast ? 0 : 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              touch.
            </motion.span>
          </motion.div>
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-lg flex-col gap-4 text-lg text-foreground">
            <p>
              Looking for a reliable partner to design, build, or support your next project?
              We&apos;d be happy to hear more!
            </p>
            <p>
              Share a few details with us, and someone from our team will get back to you
              promptly and professionally. We treat every inquiry with care - and every project
              with clarity.
            </p>
          </div>
          <V4Button href="/contact" variant="primary" className="w-fit">
            Talk to our team
          </V4Button>
        </div>
      </div>
    </section>
  );
}

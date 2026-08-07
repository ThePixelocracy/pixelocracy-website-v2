"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contactContent } from "@/content/contact";
import { ContactFormV4 } from "@/components/v4/contact/contact-form-v4";

/**
 * Contact's own compositional concept — deliberately not a decorative hero
 * followed by a form further down the page. The form IS the hero: visible
 * and actionable immediately, no scroll, no signature reveal animation to
 * sit through first. Where every other page's hero device explains a
 * concept, this page's "device" is removing everything between the
 * visitor and the field they need to fill in first — direct, not clever,
 * because that's what a contact page needs to be. Motion is limited to a
 * quiet settle; the real interaction lives in the form's own states.
 *
 * On mobile, the form is reordered to appear immediately after the short
 * intro — before the supporting location/email/social facts — so
 * completing the form doesn't require scrolling past secondary content
 * first.
 */
export function ContactHeroV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
          className="order-1 flex flex-col gap-5 lg:col-span-5"
        >
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {contactContent.hero.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2rem,1rem+3vw,3.25rem)] leading-[1.05] font-medium text-foreground">
            {contactContent.hero.heading}
          </h1>
          <p className="max-w-md text-base text-foreground sm:text-lg">{contactContent.hero.paragraph}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.1, ease: "easeOut" }}
          className="order-2 lg:col-span-7 lg:row-span-2"
        >
          <ContactFormV4 />
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.1, ease: "easeOut" }}
          className="order-3 flex flex-col gap-6 border-t border-border pt-8 lg:col-span-5"
        >
          {contactContent.meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{item.label}</dt>
              <dd className="mt-1 text-base text-foreground">
                {item.href ? (
                  <a href={item.href} className="hover:text-primary" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {item.lines[0]}
                  </a>
                ) : (
                  item.lines[0]
                )}
              </dd>
              <dd className="text-sm text-muted-foreground">{item.lines[1]}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

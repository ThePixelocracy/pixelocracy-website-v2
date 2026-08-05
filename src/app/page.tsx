"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-20 text-center sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Pixelocracy
        </h1>
        <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          The new site is being built. AI-first, from the ground up.
        </p>
        <Button size="lg" render={<a href="mailto:hello@thepixelocracy.com" />}>
          Get in touch
          <ArrowRight className="size-4" />
        </Button>
      </motion.div>
    </div>
  );
}

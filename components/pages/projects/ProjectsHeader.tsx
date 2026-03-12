"use client";

import { motion } from "framer-motion";
import SectionGrid from "@/components/ui/SectionGrid";

export default function ProjectsHeader() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <SectionGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            All Projects
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My <span className="text-primary">Projects</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            A collection of projects I’ve built — from full-stack applications
            to UI/UX systems and AI-driven solutions. Click any project to read
            the full story behind it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
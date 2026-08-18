"use client";

import { motion } from "framer-motion";
import { Users, BriefcaseBusiness, CalendarDays } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";
import { experience } from "@/lib/experience";


export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <SectionGrid />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">
                Experience
              </h2>
            </div>
            <p className="mt-3 pl-14 text-sm text-muted-foreground">
                The experiences that have helped me build my skills, expand my perspective, and grow throughout my journey in technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.role}
                    </p>
                  </div>

                  <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.period}
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
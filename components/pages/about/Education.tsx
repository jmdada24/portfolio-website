"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Of Mindanao",
    period: "2022 — Present",
    location: "Davao City, Philippines",
    description:
      "Currently pursuing a degree in Computer Science while building practical experience through web development, UI/UX design, and software projects. My academic journey continues to strengthen my foundation in problem-solving, system thinking, and modern development practices.",
  },
  {
    degree: "General Academic Strand",
    school: "Mabini National High School",
    period: "2017 — 2019",
    location: "Davao City, Philippines",
    description:
      "Completed senior high school under the General Academic Strand, which helped strengthen my communication, research, and analytical skills before pursuing Computer Science.",
  },
];

export default function Education() {
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
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <p className="mt-3 pl-14 text-sm text-muted-foreground">
              My academic foundation and continuous learning journey.
            </p>
          </div>

          <div className="relative border-l border-primary/20 pl-8 space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-background bg-primary" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.school}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground sm:justify-end">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
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
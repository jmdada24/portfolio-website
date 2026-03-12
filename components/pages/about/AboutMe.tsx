"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20">
      <SectionGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[320px_minmax(0,1fr)]"
        >
          <div className="mx-auto w-full max-w-[320px] lg:mx-0">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/images/jm-image.jpeg"
                  alt="John Mhel Dalumpines"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              About Me
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              John Mhel
              <span className="text-primary"> Dalumpines</span>
            </h1>

            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                A passionate Computer Science student from Davao City,
                Philippines. I love turning complex problems into elegant,
                intuitive digital experiences. When I&apos;m not coding,
                you&apos;ll find me contributing to student tech communities and
                exploring the intersection of design and artificial intelligence.
              </p>

              <p>
                I enjoy working across both development and design, allowing me
                to create solutions that are not only functional, but also
                polished, user-focused, and meaningful. My goal is to continue
                growing as a developer while building projects that reflect both
                technical depth and strong visual presentation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Davao City, Philippines</span>
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>BS Computer Science</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
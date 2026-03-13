"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";
import { techStackItems } from "@/lib/techstack";

export default function TechStack() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const duplicatedItems = [...techStackItems, ...techStackItems];
  const speed = 1;

  useEffect(() => {
    const animate = () => {
      const track = trackRef.current;
      if (!track) return;

      positionRef.current += speed;
      const halfWidth = track.scrollWidth / 2;

      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const moveLeft = () => {
    positionRef.current = Math.max(positionRef.current - 180, 0);
  };

  const moveRight = () => {
    positionRef.current += 180;
  };

  return (
    <section className="relative overflow-hidden py-20">
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
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Tech Stack</h2>
            </div>
            <p className="mt-3 pl-14 text-sm text-muted-foreground">
              Technologies and tools I’ve worked with while building projects and
              exploring different areas of development.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={moveLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card text-primary transition hover:bg-primary/10"
              aria-label="Scroll tech stack left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />

              <div
                ref={trackRef}
                className="flex w-max gap-4 will-change-transform"
              >
                {duplicatedItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={`${item.name}-${index}`}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="flex min-w-45 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-card-foreground">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={moveRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card text-primary transition hover:bg-primary/10"
              aria-label="Scroll tech stack right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
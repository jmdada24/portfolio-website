"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:border-primary/30"
      >
        <div className="relative h-44 shrink-0 overflow-hidden bg-primary/10">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.coverAlt || `${project.name} preview`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/70 text-primary backdrop-blur-sm">
                <ImageIcon className="h-5 w-5" />
              </div>
              <p className="mt-3 px-4 text-center text-sm font-medium text-muted-foreground">
                Project Preview Coming Soon
              </p>
            </div>
          )}

          <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {project.category}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
            <span className="shrink-0 text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          <p className="mb-5 text-sm leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              {project.demo && (
                <span className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </span>
              )}

              {project.github && (
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Github className="h-4 w-4" />
                </span>
              )}
            </div>

            <span className="text-xs font-semibold text-primary">
              Read story →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
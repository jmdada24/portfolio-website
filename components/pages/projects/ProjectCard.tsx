"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Figma } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectImagePreview from "./ProjectImagePreview";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const hasDemo = !!project.demo;
  const hasGithub = !!project.github && project.github !== "#";
  const hasFigma = !!project.figma;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:border-primary/30">
        <div className="relative">
          <ProjectImagePreview
            image={project.coverImage}
            alt={project.coverAlt || `${project.name} preview`}
            title={project.name}
          />

          <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {project.category}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group flex flex-1 flex-col"
        >
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-foreground transition group-hover:text-primary">
                {project.name}
              </h3>
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

            <div className="mt-auto border-t border-border pt-4 flex justify-end">
              <span className="text-xs font-semibold text-primary t">
                Read story →
              </span>
            </div>
          </div>

        </Link>

        {(hasDemo || hasGithub || hasFigma) && (
          <div className="flex flex-wrap gap-2 border-t border-border px-6 pb-6 pt-4">
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}

            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}

            {hasFigma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                <Figma className="h-4 w-4" />
                Figma
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

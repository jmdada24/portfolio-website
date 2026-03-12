'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionGrid from '@/components/ui/SectionGrid';

const projects = [
  {
    title: 'Realitech',
    description:
      'A web-based real estate platform designed to improve transparency and trust among developers, agents, and buyers using AI-powered features.',
    technologies: ['React', 'Node.js', 'AI/ML', 'TypeScript', 'TailwindCSS', 'Firebase'],
    year: '2025',
    category: 'Featured',
    demo: '#',
    github: '#',
  },
];

function GlowOrb({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute z-[2] rounded-full bg-primary/16 blur-3xl ${className}`} />
  );
}

export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-14 lg:py-16">
      <GlowOrb className="left-[4%] top-[20%] h-44 w-44" />
      <GlowOrb className="right-[8%] bottom-[10%] h-52 w-52" />

      <SectionGrid opacity="opacity-[0.02]" />

      <div className="relative z-[5] mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            A quick look at selected work. Visit the projects page for full case studies and more details.
          </p>
          <div className="mx-auto mt-5 h-0.5 w-14 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="relative h-44 overflow-hidden bg-primary p-6">
                <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <p className="mb-5 text-sm leading-7 text-muted-foreground">
                  {project.description}
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

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary hover:bg-primary/15"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Read story →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button
            asChild
            className="h-12 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
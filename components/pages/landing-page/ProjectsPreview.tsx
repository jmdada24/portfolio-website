'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionGrid from '@/components/ui/SectionGrid';
import { projects } from '@/lib/projects';

function GlowOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-[2] rounded-full bg-primary/16 blur-3xl ${className}`}
    />
  );
}

export default function ProjectsPreview() {
  const featuredProjects = [...projects]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, 3);

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
            A quick look at my latest work. Visit the projects page for full case studies and more details.
          </p>
          <div className="mx-auto mt-5 h-0.5 w-14 rounded-full bg-primary" />
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Link
                href="/projects"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-primary/30"
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
                    <h3 className="text-xl font-bold text-foreground">
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
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto border-t border-border pt-4">
                    <span className="text-xs font-semibold text-primary">
                      View in Projects →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
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
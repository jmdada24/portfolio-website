import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImagePreview from "@/components/pages/projects/ProjectImagePreview";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectStoryPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              ← Back to Projects
            </Link>

            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {project.category}
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {project.name}
              </h1>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {project.coverImage && (
          <section className="pb-12">
            <div className="mx-auto max-w-6xl px-6">
              <ProjectImagePreview
                image={project.coverImage}
                alt={project.coverAlt || `${project.name} preview`}
                title={project.name}
                className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-primary/10 shadow-sm"
                imageClassName="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </section>
        )}

        <section className="pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-2xl font-semibold">Problem</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-2xl font-semibold">Solution</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.solution}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-2xl font-semibold">Outcome</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-3xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Project Info</h3>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Year
                </p>
                <p className="mt-2 text-sm">{project.year}</p>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Technologies
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    GitHub
                  </a>
                )}

                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    Figma
                  </a>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Filter, Search } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

type CategoryFilter = "All" | "Full Stack" | "Web" | "AI" | "Design";
type YearFilter = "All" | number;
type MonthFilter = "All" | string;

export default function ProjectsGrid() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [year, setYear] = useState<YearFilter>("All");
  const [month, setMonth] = useState<MonthFilter>("All");
  const [search, setSearch] = useState("");

  const years = useMemo(() => {
    return Array.from(new Set(projects.map((project) => project.yearNumber))).sort(
      (a, b) => b - a
    );
  }, []);

  const months = useMemo(() => {
    const monthOrder = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return Array.from(new Set(projects.map((project) => project.monthShort))).sort(
      (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
    );
  }, []);

  const filteredProjects = useMemo(() => {
    return [...projects]
      .filter((project) => {
        const matchesCategory =
          category === "All" || project.category === category;

        const matchesYear =
          year === "All" || project.yearNumber === year;

        const matchesMonth =
          month === "All" || project.monthShort === month;

        const searchValue = search.toLowerCase();

        const matchesSearch =
          project.name.toLowerCase().includes(searchValue) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchValue)
          ) ||
          project.shortDescription.toLowerCase().includes(searchValue);

        return matchesCategory && matchesYear && matchesMonth && matchesSearch;
      })
      .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  }, [category, year, month, search]);

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-20">
      <SectionGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="rounded-3xl border border-border bg-card/80 p-4 backdrop-blur-sm sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="mr-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Filter className="h-4 w-4 text-primary" />
                  <span>Filter by</span>
                </div>

                {["All", "Full Stack", "Web", "AI", "Design"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item as CategoryFilter)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      category === item
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[180px_180px_minmax(0,1fr)]">
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={year}
                    onChange={(e) =>
                      setYear(e.target.value === "All" ? "All" : Number(e.target.value))
                    }
                    className="h-11 w-full appearance-none rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
                  >
                    <option value="All">All Years</option>
                    {years.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="h-11 w-full appearance-none rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
                  >
                    <option value="All">All Months</option>
                    {months.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects, technologies, or keywords..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-11 rounded-xl border-border bg-background pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}
        </p>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
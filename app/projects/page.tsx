import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/pages/projects/ProjectsHeader";
import ProjectsGrid from "@/components/pages/projects/ProjectsGrid";

export const metadata = {
  title: "Projects | John Mhel Dalumpines",
  description:
    "Explore projects built by John Mhel Dalumpines including full-stack applications, UI/UX design systems, and AI-powered solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <ProjectsHeader />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
import AboutMe from '@/components/pages/about/AboutMe';
import TechStack from '@/components/pages/about/TechStack';

export const metadata = {
  title: "About | John Mhel Dalumpines",
  description:
    "Learn more about John Mhel Dalumpines, a Full-Stack Developer, UI/UX Designer, and AI Engineer building modern digital products.",
};


export default function AboutPage() {

  
  return (
    <main className="bg-background text-foreground">
      <AboutMe />
      <TechStack />


    </main>
  );
}
import AboutMe from '@/components/pages/about/AboutMe';
import Certification from '@/components/pages/about/Certification';
import Education from '@/components/pages/about/Education';
import Organization from '@/components/pages/about/Organization';
import TechStack from '@/components/pages/about/TechStack';
import Footer from '@/components/Footer';

export const metadata = {
  title: "About | John Mhel Dalumpines",
  description:
    "Learn more about John Mhel Dalumpines, a Full-Stack Developer, UI/UX Designer, and AI Engineer building modern digital products.",
};


export default function AboutPage() {
  
  return (
    <>
     
      <main className="bg-background text-foreground">
        
        <AboutMe />
        <Education/>
        <TechStack />
        <Organization/>
        <Certification/>
        

      </main>
      <Footer/>
    </>
  );
}
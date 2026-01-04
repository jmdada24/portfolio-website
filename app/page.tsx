import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Mhel Dalumpines",
    "url": "https://jm-dalumpines.vercel.app",
    "image": "https://jm-dalumpines.vercel.app/assets/images/jm-image.jpeg",
    "sameAs": [
      "https://github.com/jmdada24",
      "https://www.linkedin.com/in/john-mhel-dalumpines-3853412a5/",
      "https://www.facebook.com/jm.jayem.75"
    ],
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "University of Mindanao"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Mindanao"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Davao City",
      "addressCountry": "Philippines"
    },
    "email": "jmdalumpines24@gmail.com",
    "telephone": "+639264215680"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
import Navbar from '@/components/Navbar';
import Hero from '@/components/pages/landing-page/Hero';
import ProjectsPreview from '@/components/pages/landing-page/ProjectsPreview';
import Contact from '@/components/pages/landing-page/Contact';
import Footer from '@/components/pages/landing-page/Footer';
import HomeClient from '@/components/pages/landing-page/HomeClient';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Mhel Dalumpines',
    url: 'https://jm-dalumpines.vercel.app',
    image: 'https://jm-dalumpines.vercel.app/assets/images/jm-image.jpeg',
    sameAs: [
      'https://github.com/jmdada24',
      'https://www.linkedin.com/in/john-mhel-dalumpines-3853412a5/',
      'https://www.facebook.com/jm.jayem.75',
    ],
    jobTitle: 'Full-Stack Developer & UI/UX Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'University of Mindanao',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Mindanao',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Davao City',
      addressCountry: 'Philippines',
    },
    email: 'jmdalumpines24@gmail.com',
    telephone: '+639264215680',
  };

  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
    
  );
}
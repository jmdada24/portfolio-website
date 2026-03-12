'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '@/components/pages/landing-page/Hero';
import ProjectsPreview from '@/components/pages/landing-page/ProjectsPreview';
import Contact from '@/components/pages/landing-page/Contact';
import Footer from '@/components/Footer';
import PageLoader from '@/components/pages/landing-page/PageLoader';

const HOME_ENTRY_KEY = 'home-entry-loader-shown';

export default function HomeClient() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;

    const navType = navigationEntry?.type;
    const alreadyShownOnThisTab = sessionStorage.getItem(HOME_ENTRY_KEY) === 'true';

    let shouldShowLoader = false;

    if (navType === 'reload') {
      shouldShowLoader = true;
    } else if (navType === 'navigate' && !alreadyShownOnThisTab) {
      shouldShowLoader = true;
    }

    if (!shouldShowLoader) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem(HOME_ENTRY_KEY, 'true');
    setLoading(true);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isVisible={loading} />

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <main>
              <div id="home">
                <Hero />
              </div>

              <div id="projects">
                <ProjectsPreview />
              </div>

              <div id="contact">
                <Contact />
              </div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
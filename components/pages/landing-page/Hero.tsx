'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionGrid from '@/components/ui/SectionGrid';

const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'AI Engineer',
];

function GlowOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-[2] rounded-full bg-primary/20 blur-3xl ${className}`}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 88;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 35 : 60);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-28 pb-14 sm:pt-32 lg:pt-24">
      <GlowOrb className="left-[5%] top-[14%] h-40 w-40 sm:h-56 sm:w-56" />
      <GlowOrb className="right-[8%] top-[10%] h-48 w-48 sm:h-72 sm:w-72" />
      <GlowOrb className="bottom-[8%] right-[18%] h-36 w-36 sm:h-52 sm:w-52" />

      <SectionGrid opacity="opacity-[0.02]" />

      <div className="relative z-[5] mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-115">
            <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-xl" />
            <div className="absolute -inset-2 rounded-[2rem] opacity-100 dark:bg-[conic-gradient(from_0deg,rgba(255,140,66,0.38),transparent_35%,rgba(255,140,66,0.28),transparent_70%,rgba(255,140,66,0.38))] dark:blur-md" />

            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[1.75rem] border border-primary/30 bg-card shadow-2xl">
              <Image
                src="/assets/images/jm-image.png"
                alt="John Mhel Dalumpines"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-3 z-6 rounded-2xl border border-primary/30 bg-card px-4 py-3 shadow-lg"
            >
              <p className="text-sm font-extrabold text-primary">Developer</p>
              <p className="mt-1 text-xs text-muted-foreground">Davao City, Philippines</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mb-2 text-sm font-medium text-muted-foreground sm:text-base"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            <span>John Mhel</span>
            <br />
            <span className="text-primary">Dalumpines</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42 }}
            className="mb-5 flex items-center justify-center gap-2 lg:justify-start"
          >
            <Code2 className="h-4 w-4 text-primary" />
            <span className="min-h-7 text-base font-bold text-primary sm:text-lg">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mx-auto mb-8 max-w-[36rem] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:mx-0"
          >
            Computer Science student and developer specializing in full-stack development, UI/UX design, and AI-driven solutions. I build modern, scalable web applications and thoughtful digital experiences that combine technology, design, and intelligent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mb-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="h-12 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-xl border-primary/30 bg-transparent px-6 text-primary hover:bg-primary/10"
            >
              <a href="/assets/files/john-mhel-dalumpines-resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.78 }}
            className="flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {[
              { icon: Code2, label: 'Dev' },
              { icon: Layers, label: 'Design' },
              { icon: Cpu, label: 'AI/ML' },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-6 left-1/2 z-[5] hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex"
      >
        <span className="text-xs font-medium text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.button>
    </section>
  );
}
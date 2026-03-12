'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jmdada24',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/john-mhel-dalumpines-3853412a5/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:jmdalumpines24@gmail.com',
      icon: Mail,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/jm.jayem.75',
      icon: Facebook,
    },
  ];

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId: 'home' | 'contact') => {
    if (pathname !== '/') {
      router.push(sectionId === 'home' ? '/' : `/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background py-12 text-foreground transition-colors md:py-14 lg:py-16">
      <div className="pointer-events-none absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-primary/12 blur-3xl dark:bg-primary/18" />
      <div className="pointer-events-none absolute right-[12%] bottom-[10%] h-40 w-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/16" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-primary dark:[text-shadow:0_0_18px_rgba(255,140,66,0.35)] md:text-3xl lg:text-4xl">
              JMD
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              Computer Science student and full-stack developer creating thoughtful and innovative digital solutions.
            </p>
          </div>

          <div className="text-left lg:justify-self-center lg:pl-6 xl:pl-12">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.section as 'home' | 'contact')}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}

              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
              Connect
            </h4>

            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:hover:shadow-[0_0_16px_rgba(255,140,66,0.3)] md:h-12 md:w-12"
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href="mailto:jmdalumpines24@gmail.com"
                className="text-xs text-muted-foreground transition-colors hover:text-primary md:text-sm"
              >
                jmdalumpines24@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8">
          <p className="text-xs text-muted-foreground md:text-sm">
            &copy; {new Date().getFullYear()} John Mhel Dalumpines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
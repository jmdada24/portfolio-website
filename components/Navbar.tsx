'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', type: 'section', section: 'home', href: '/' },
  { name: 'About', type: 'page', href: '/about' },
  { name: 'Projects', type: 'page', href: '/projects' },
  { name: 'Contact', type: 'section', section: 'contact', href: '/#contact' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'contact'>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);

    const root = document.documentElement;
    const darkMode = root.classList.contains('dark');
    setIsDark(darkMode);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const sections = ['home', 'contact'] as const;
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setScrolled(true);
    }
  }, [pathname]);

  const scrollToSection = (sectionId: 'home' | 'contact') => {
    setIsOpen(false);

    if (pathname !== '/') {
      router.push(sectionId === 'home' ? '/' : `/#${sectionId}`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 88;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains('dark');

    root.classList.toggle('dark', nextDark);
    setIsDark(nextDark);
  };

  const isPageActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={[
        'fixed inset-x-0 top-0 z-[100] h-16 transition-all duration-300',
        scrolled || pathname !== '/'
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection('home')}
          className="text-primary text-xl font-extrabold tracking-tight transition-transform hover:scale-[1.04] sm:text-2xl"
          aria-label="Go to home"
        >
          JMD
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            let isActive = false;

            if (link.type === 'section') {
              isActive = pathname === '/' && activeSection === link.section;
            } else {
              isActive = isPageActive(link.href);
            }

            if (link.type === 'section') {
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.section)}
                  className="relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className={isActive ? 'text-primary' : ''}>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <span className={isActive ? 'text-primary' : ''}>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-transform hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary text-primary"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 sm:px-6">
              {navLinks.map((link) => {
                let isActive = false;

                if (link.type === 'section') {
                  isActive = pathname === '/' && activeSection === link.section;
                } else {
                  isActive = isPageActive(link.href);
                }

                if (link.type === 'section') {
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.section)}
                      className={[
                        'flex w-full items-center border-b border-border/70 py-4 text-left text-sm font-medium transition-colors last:border-b-0',
                        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                      ].join(' ')}
                    >
                      {link.name}
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      'flex w-full items-center border-b border-border/70 py-4 text-left text-sm font-medium transition-colors last:border-b-0',
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                    ].join(' ')}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
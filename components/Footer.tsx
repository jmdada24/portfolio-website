'use client';

import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

export default function Footer() {
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
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">JMD</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Computer Science student &amp; Full-stack Developer creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-gray-300 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-gray-400">
              Connect
            </h4>
            <div className="flex gap-3 md:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-5 md:mt-6">
              <a
                href="mailto:jmdalumpines24@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm break-all"
              >
                jmdalumpines24@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} John Mhel Dalumpines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
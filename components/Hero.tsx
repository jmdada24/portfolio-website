'use client';

import { FadeInElement } from '@/components/ui/FadeInElement';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-30 pt-30 pb-12 md:pt-24 lg:pt-0">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* RIGHT IMAGE ON MOBILE, RIGHT SIDE ON DESKTOP */}
          <div className="order-first lg:order-last">
            <FadeInElement direction="up" delay={0.2}>
              <div className="relative">
                <div className="relative aspect-square max-w-sm md:max-w-md mx-auto lg:max-w-lg">
                  <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl md:rounded-3xl" />
                  <img
                    src="assets/images/jm-image.jpeg"
                    alt="Profile"
                    className="relative z-10 w-full h-full object-cover rounded-2xl md:rounded-4xl shadow-2xl"
                  />
                </div>
              </div>
            </FadeInElement>
          </div>

          {/* TEXT COLUMN (LEFT ON DESKTOP, BELOW IMAGE ON MOBILE) */}
          <div className="order-last lg:order-first">
            <FadeInElement direction="up" delay={0.1}>
              <div className="text-center lg:text-left">
                <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Hi! 
                  I'm John Mhel Dalumpines
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  Full-Stack Developer & UI/UX Designer specializing in modern web technologies. 
                   A Computer Science student building innovative solutions that make a difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection('projects')}
                    className="px-6 md:px-8 h-11 md:h-12 bg-black text-white rounded-full hover:bg-gray-800 text-sm md:text-base"
                  >
                    View Projects
                  </Button>

                  <Button
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    className="px-6 md:px-8 h-11 md:h-12 border-black rounded-full hover:bg-black hover:text-white text-sm md:text-base"
                  >
                    Get in Touch
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2">6+</div>
                    <div className="text-xs md:text-sm text-gray-600">Programming Languages</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2">10+</div>
                    <div className="text-xs md:text-sm text-gray-600">Technologies</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2">2+</div>
                    <div className="text-xs md:text-sm text-gray-600">Organizations</div>
                  </div>
                </div>
              </div>
            </FadeInElement>
          </div>
        </div>
      </div>
    </section>
  );
}
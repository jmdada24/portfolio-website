'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Realitech',
      description:
        'A web-based real estate platform designed to enhance transparency and trust among developers, agents and buyers with the integration of artificial intelligence.',
      technologies: [
        'React',
        'Node.js',
        'AI/ML',
        'TypeScript',
        'TailwindCSS',
        'Firebase',
      ],
      year: '2025',
    },
  ];

  const achievements = [
    {
      title: 'Hackestate 2025',
      subtitle: 'PropTech Filipino Homes',
      award: 'TOP UX Interface',
      year: '2025',
    },
  ];

  return (
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="mb-10 md:mb-12 lg:mb-16 text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Projects
        </motion.h1>

        {/* Featured Work */}
        <motion.section
          className="mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Featured Work</h2>
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-5 md:p-6 lg:p-8 border border-gray-200 rounded-xl md:rounded-2xl hover:border-gray-400 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl">{project.title}</h3>
                  <span className="text-sm md:text-base text-gray-500 whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-black text-white text-xs md:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            Awards &amp; Recognition
          </h2>
          <div className="space-y-5 md:space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-5 md:p-6 lg:p-8 bg-gray-50 rounded-xl md:rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3 md:mb-4">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                      {achievement.title}
                    </h3>
                    <div className="text-sm md:text-base text-gray-600">
                      {achievement.subtitle}
                    </div>
                  </div>
                  <span className="text-sm md:text-base text-gray-500 whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>
                <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-black text-white text-xs md:text-sm rounded-full">
                  {achievement.award}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function About() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Mindanao',
      location: 'Matina, Davao City Philippines',
      period: '2022 – Present',
    },
    {
      degree: 'General Academic Strand',
      school: 'Mabini National High School',
      location: 'Bangkal, Davao City Philippines',
      period: '2017 – 2019',
    },
  ];

  const skills = {
    languages: ['Java', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'Dart'],
    frameworks: [
      'React',
      'Node.js',
      'TailwindCSS',
      'Docker',
      'Laravel',
      'Flutter',
      'DaisyUI',
    ],
    tools: ['Git', 'GitHub', 'MySQL', 'Firebase', 'WordPress', 'Squarespace'],
  };

  const positions = [
    {
      title: 'Mentor',
      organization: 'CCE Skills Clinic – University of Mindanao',
      period: '2025 – Present',
      description:
        'Guides and assists students in improving their programming skills such as Java. Conducts mentoring sessions, reviews, and technical workshops.',
    },
    {
      title: 'Tech Committee Member',
      organization: 'University of Mindanao Enigma',
      period: '2025 – Present',
      description:
        "Supports the organization's events, workshops, and technology initiatives.",
    },
  ];

  const certifications = [
    {
      name: 'IT Specialist - Databases',
      issuer: 'Certiport - A Pearson VUE Business',
      period: 'October 2025 - October 2030',
    },
    {
      name: 'IT Specialist - Java',
      issuer: 'Certiport - A Pearson VUE Business',
      period: 'March 2024 - March 2029',
    },
  ];


    const volunteering = [
    {
      organization: 'Google Developer Group Davao',
      role: 'Logistics',
      period: 'April 2025 - November 2025',
    },
    {
      organization: 'Davao Startup Week',
      role: 'Community Events Management',
      period: 'July 2025 - Sep 2025',
    },
  ];

  return (
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="mb-10 md:mb-12 lg:mb-16 text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          About Me
        </motion.h1>

        {/* Education */}
        <motion.section
          className="mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Education</h2>
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-black pl-4 md:pl-6">
                <h3 className="text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                  {edu.degree}
                </h3>
                <div className="text-sm md:text-base text-gray-600 mb-1">
                  {edu.school}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {edu.location} • {edu.period}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          className="mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            Technical Skills
          </h2>
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                Frameworks &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                Tools &amp; Databases
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership & Organizations */}
        <motion.section
          className="mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            Leadership &amp; Organizations
          </h2>
          <div className="space-y-6 md:space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="border-l-2 border-black pl-4 md:pl-6">
                <h3 className="text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                  {position.title}
                </h3>
                <div className="text-sm md:text-base text-gray-600 mb-2">
                  {position.organization}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                  {position.period}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>


        {/* Certifications */}
        <motion.section
            className='mb-12 md:mb-14 lg:mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            Certifications
          </h2>
          <div className="space-y-5 md:space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l-2 border-black pl-4 md:pl-6">
                <h3 className="text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                  {cert.name}
                </h3>
                <div className="text-sm md:text-base text-gray-600 mb-1">
                  {cert.issuer}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {cert.period}
                </div>
              </div>
            ))}
          </div>
        </motion.section>



        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            Community Involvement
          </h2>
          <div className="space-y-5 md:space-y-6">
            {volunteering.map((vol, index) => (
              <div key={index} className="border-l-2 border-black pl-4 md:pl-6">
                <h3 className="text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                  {vol.role}
                </h3>
                <div className="text-sm md:text-base text-gray-600 mb-1">
                  {vol.organization}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {vol.period}
                </div>
              </div>
            ))}
          </div>
        </motion.section>



      </div>
    </section>
  );
}

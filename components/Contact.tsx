'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'jmdalumpines24@gmail.com',
      href: 'mailto:jmdalumpines24@gmail.com',
    },
    {
      label: 'Phone',
      value: '09264215680',
      href: 'tel:+639264215680',
    },
    {
      label: 'Location',
      value: 'Davao City, Philippines',
      href: null,
    },
  ];

  return (
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="mb-10 md:mb-12 lg:mb-16 text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 md:h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 md:h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-[3px] focus:ring-ring/50 focus:border-ring resize-none text-sm md:text-base bg-transparent shadow-xs transition-[color,box-shadow]"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 md:h-12 bg-black text-white hover:bg-gray-800 rounded-full text-sm md:text-base"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="p-5 md:p-6 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs md:text-sm text-gray-500 mb-2">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-base md:text-lg hover:text-gray-600 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-base md:text-lg">{info.value}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="p-6 md:p-8 bg-black text-white rounded-xl">
              <h3 className="text-xl md:text-2xl mb-3">
                Let's Work Together
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
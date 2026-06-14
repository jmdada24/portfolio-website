'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import SectionGrid from '@/components/ui/SectionGrid';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [statusMessage, setStatusMessage] = useState('');

  const contactInfo = [
    {
      label: 'Email',
      value: 'jmdalumpines24@gmail.com',
      href: 'mailto:jmdalumpines24@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '09264215680',
      href: 'tel:+639264215680',
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: 'John Mhel Dalumpines',
      href: 'https://www.linkedin.com/in/john-mhel-dalumpines-3853412a5/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'jmdada24',
      href: 'https://github.com/jmdada24',
      icon: Github,
    },
    {
      label: 'Location',
      value: 'Davao City, Philippines',
      href: '',
      icon: MapPin,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage(
        'Email service is not configured yet. Please use the email link for now.'
      );
      return;
    }

    try {
      setStatus('sending');
      setStatusMessage('');

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setStatus('success');
      setStatusMessage('Message sent successfully. Thank you for reaching out.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      window.setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 4000);
    } catch {
      setStatus('error');
      setStatusMessage(
        'Something went wrong while sending. Please try again or use the email link.'
      );
    }
  };

  return (
    <section className="relative overflow-hidden px-6 pt-4 pb-16 lg:pt-8 lg:pb-20">
      <SectionGrid opacity="opacity-[0.016]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Get in Touch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I’m open to freelance work, internships, collaborations, and full-time opportunities.
            Let’s build something meaningful together.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-14 rounded-full bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-border bg-card p-5 shadow-sm md:p-6"
          >
            <h3 className="text-xl font-semibold text-foreground md:text-[1.45rem]">
              Contact Info
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Feel free to reach out through any of these channels.
            </p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                if (!item.href) {
                  return <div key={index}>{content}</div>;
                }

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-border bg-card p-5 shadow-sm md:p-6"
          >
            <h3 className="text-xl font-semibold text-foreground md:text-[1.45rem]">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Tell me about your project, idea, or opportunity.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What’s on your mind?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  required
                  className="w-full resize-none rounded-xl border border-input bg-transparent px-3 py-3 text-sm text-foreground outline-none transition-[color,box-shadow] focus:border-ring focus:ring-[3px] focus:ring-ring/50"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="h-11 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {status === 'success' ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </span>
                ) : status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>

              {statusMessage && (
                <p
                  className={[
                    'text-sm leading-6',
                    status === 'error' ? 'text-destructive' : 'text-muted-foreground',
                  ].join(' ')}
                  role="status"
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

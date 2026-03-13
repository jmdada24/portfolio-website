"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";
import { certificates } from "@/lib/certificate";

export default function Certification() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <SectionGrid />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Certificates</h2>
            </div>
            <p className="mt-3 pl-14 text-sm text-muted-foreground">
              Certifications and learning milestones that reflect my continuous
              growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => {
              const Card = (
                <motion.div
                  key={`${cert.slug}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-primary/30"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center border-b border-border bg-muted">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.imageAlt || cert.name}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        Certificate Preview
                      </span>
                    )}

                    {cert.href && (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold text-card-foreground">
                      {cert.name}
                    </h3>

                    <p className="mt-2 text-sm text-primary">{cert.issuer}</p>

                    <p className="mt-2 text-xs text-muted-foreground">
                      Issued: {cert.issuedOn}
                    </p>

                    {cert.credentialId && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </motion.div>
              );

              if (cert.href) {
                return (
                  <a
                    key={cert.slug}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {Card}
                  </a>
                );
              }

              return Card;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
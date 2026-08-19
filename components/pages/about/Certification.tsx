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
          {/* Section Header */}
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

          {/* Certificate Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => {
              const Card = (
                <motion.div
                  key={`${cert.slug}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-xl border border-border/60 bg-card/80 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-muted">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.imageAlt || cert.name}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground">
                          Certificate Preview
                        </span>
                      </div>
                    )}

                    {/* External Link */}
                    {cert.href && (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  {/* Certificate Information */}
                  <div className="p-4">
                    <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-card-foreground">
                      {cert.name}
                    </h3>

                    <p className="mt-1.5 min-h-5 text-sm text-primary">
                      {cert.issuer}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground">
                      Issued: {cert.issuedOn}
                    </p>

                    {cert.credentialId && (
                      <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
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
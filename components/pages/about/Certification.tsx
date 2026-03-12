"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionGrid from "@/components/ui/SectionGrid";

const certificates = [
  {
    name: "Certificate Name Here",
    organization: "Issuing Organization",
  },
  {
    name: "Certificate Name Here",
    organization: "Issuing Organization",
  },
  {
    name: "Certificate Name Here",
    organization: "Issuing Organization",
  },
  {
    name: "Certificate Name Here",
    organization: "Issuing Organization",
  },
];

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
              Certifications and learning milestones that reflect my continuous growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="flex aspect-[16/10] items-center justify-center border-b border-border bg-muted">
                  <span className="text-sm font-medium text-muted-foreground">
                    Certificate Preview
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-card-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary">
                    {cert.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
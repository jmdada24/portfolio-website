"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  image: string;
  alt: string;
  title: string;
  open: boolean;
  onClose: () => void;
};

export default function ProjectImageModal({
  image,
  alt,
  title,
  open,
  onClose,
}: Props) {
  const canUsePortal = typeof document !== "undefined";

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open || !canUsePortal) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} preview`}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
              <p className="truncate text-sm font-semibold text-foreground">
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition hover:text-primary"
                aria-label="Close image preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative h-[70vh] min-h-[280px] bg-background">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
    </AnimatePresence>,
    document.body
  );
}

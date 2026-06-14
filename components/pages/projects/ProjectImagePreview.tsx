"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon, Maximize2 } from "lucide-react";
import ProjectImageModal from "./ProjectImageModal";

type Props = {
  image?: string;
  alt: string;
  title: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export default function ProjectImagePreview({
  image,
  alt,
  title,
  className = "relative h-44 shrink-0 overflow-hidden bg-primary/10",
  imageClassName = "object-cover transition duration-500 group-hover:scale-105",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: Props) {
  const [open, setOpen] = useState(false);

  if (!image) {
    return (
      <div className={className}>
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-background">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/70 text-primary backdrop-blur-sm">
            <ImageIcon className="h-5 w-5" />
          </div>
          <p className="mt-3 px-4 text-center text-sm font-medium text-muted-foreground">
            Project Preview Coming Soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${className} group block w-full text-left`}
        aria-label={`Open ${title} image preview`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
        />
        <span className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      <ProjectImageModal
        image={image}
        alt={alt}
        title={title}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

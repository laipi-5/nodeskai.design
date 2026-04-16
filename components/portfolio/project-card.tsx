"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border-light bg-white hover:shadow-lg transition-all duration-300"
      >
        {project.gallery && project.gallery.length > 1 ? (
          <div className="aspect-[16/9] overflow-hidden bg-white flex items-center justify-center gap-2 px-4">
            {project.gallery.map((src, i) => (
              <div key={src} className="relative flex-1 h-full">
                <Image
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  unoptimized
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        ) : project.coverImage ? (
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={`${project.title} 封面`}
              width={320}
              height={200}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-surface-alt" />
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-surface-alt rounded-lg text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

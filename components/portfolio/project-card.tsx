"use client";

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
        <div className="aspect-[16/10] bg-surface-alt p-8 flex items-end">
          <div className="w-full">
            <span className="inline-block px-3 py-1 bg-foreground/10 rounded-full text-xs font-medium text-text-secondary mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-text-primary group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="p-6">
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

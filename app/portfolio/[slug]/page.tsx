"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getProject } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-tertiary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          返回产品设计集
        </Link>

        {/* Hero Cover */}
        <div className="aspect-[2/1] rounded-2xl bg-surface-alt p-8 md:p-12 flex items-end mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-foreground/10 rounded-full text-sm font-medium text-text-secondary mb-3">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-border-light">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Calendar size={16} />
            {project.year}
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Tag size={16} />
            {project.tags.join(" · ")}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              项目概述
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              设计挑战
            </h2>
            <div className="p-6 rounded-2xl bg-surface-alt border border-border-light">
              <p className="text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              解决方案
            </h2>
            <div className="p-6 rounded-2xl bg-surface-alt border border-border-light">
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              设计成果
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-surface-alt border border-border-light text-center"
                >
                  <p className="text-sm font-medium text-text-primary">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Download, FileText, Tag } from "lucide-react";
import { getProject } from "@/lib/data";
import { notFound } from "next/navigation";
import { PdfDocumentView } from "@/components/portfolio/pdf-document-view";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        {/* Hero Cover */}
        {project.gallery && project.gallery.length > 1 ? (
          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-border-light bg-white p-6">
              {project.gallery.map((src, i) => (
                <div key={src} className="relative aspect-[3/4]">
                  <Image
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-surface-alt text-text-secondary mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
                {project.title}
              </h1>
            </div>
          </div>
        ) : project.coverImage ? (
          <div className="mb-10">
            <div className="aspect-[2/1] rounded-2xl overflow-hidden border border-border-light">
              <Image
                src={project.coverImage}
                alt={`${project.title} 封面预览`}
                width={896}
                height={448}
                className="w-full h-full object-cover object-top"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-surface-alt text-text-secondary mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
                {project.title}
              </h1>
            </div>
          </div>
        ) : (
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
        )}

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

        {project.documentUrl ? (
          <section className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-text-primary inline-flex items-center gap-2">
                <FileText size={22} className="text-text-tertiary" />
                项目文档
              </h2>
              <a
                href={project.documentUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border-light bg-white px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-alt transition-colors"
              >
                <Download size={16} />
                下载 PDF
              </a>
            </div>
            <PdfDocumentView
              src={project.documentUrl}
              documentTitle={project.title}
            />
          </section>
        ) : null}

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

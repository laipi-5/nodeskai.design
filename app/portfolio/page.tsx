"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-text-primary">
          产品设计作品集
        </h1>
        <p className="mt-3 text-base text-text-secondary leading-relaxed max-w-2xl">
          探索 <span className="font-anton">NoDesk AI</span> 设计团队的代表性项目，从策略到执行，每一个作品都承载着我们对卓越体验的追求。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Signpost } from "@/components/ui/signpost";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Signpost */}
      <section className="relative py-32 md:py-40 overflow-hidden flex-1">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-accent-pink/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/3 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12 lg:gap-20">
            {/* Signpost Navigation */}
            <div className="md:flex-shrink-0 origin-center scale-150 mt-12 md:ml-16">
              <Signpost />
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-right mb-12 md:mb-0 md:flex-1"
            >
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                设计不是装饰，是秩序；设计的目的是解决问题。
                <br className="hidden sm:block" />
                这里是 <span className="font-anton text-text-primary">NoDesk AI</span> 设计团队的开放工作台——
                <br className="hidden sm:block" />
                我们将设计原则、组件规范与产品实践集成在一起，
                <br className="hidden sm:block" />
                让每一步探索都有迹可循。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

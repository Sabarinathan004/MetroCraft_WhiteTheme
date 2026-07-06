"use client";

import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { newsItems, resources } from "@/data/site-data";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/MotionWrappers";

export function NewsAndResources() {
  return (
    <section id="news" className="pb-section">
      <Container>
        <div className="overflow-hidden rounded-card bg-[#F5F7FA] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            {/* Left Column */}
            <FadeUp>
              <div className="lg:sticky lg:top-40">
                <h2 className="text-xl font-bold uppercase tracking-wide text-navy">
                  News & Insights
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  Stay updated with our latest announcements and achievements.
                </p>
                <a
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:text-gold"
                >
                  View All News
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeUp>

            {/* Right Column - News + Resources */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {newsItems.map((item, i) => (
                <FadeUp key={item.id} delay={i * 0.1}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full overflow-hidden rounded-card bg-white shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5">
                      <time className="text-xs text-muted">{item.date}</time>
                      <h3 className="mt-2 text-sm font-bold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <a
                        href={item.href}
                        className="group/link mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-gold"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </motion.article>
                </FadeUp>
              ))}

              {/* Download Resources Card */}
              <FadeUp delay={0.3}>
                <div className="flex h-full flex-col rounded-card bg-navy p-6 text-white shadow-hero">
                  <h3 className="text-base font-bold uppercase tracking-wide">
                    Download Resources
                  </h3>
                  <ul className="mt-6 flex-1 space-y-5">
                    {resources.map((resource) => (
                      <li key={resource.id}>
                        <a
                          href={resource.href}
                          className="group flex items-start gap-3 transition-opacity hover:opacity-80"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold">
                              {resource.title}
                            </p>
                            <p className="text-xs text-white/60">
                              {resource.size}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-80"
                  >
                    View All Resources
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

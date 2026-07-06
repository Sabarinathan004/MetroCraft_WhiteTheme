"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroFeatures, images } from "@/data/site-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/MotionWrappers";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // #region agent log
  const logHeroImage = (message: string, data: Record<string, unknown>) => {
    fetch("http://127.0.0.1:7847/ingest/5a5706bc-d816-4449-8f32-7a28df89f4eb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "7f87ef",
      },
      body: JSON.stringify({
        sessionId: "7f87ef",
        location: "Hero.tsx:image",
        message,
        data,
        timestamp: Date.now(),
        hypothesisId: "A",
        runId: "post-fix",
      }),
    }).catch(() => {});
  };
  // #endregion

  return (
    <section ref={ref} className="relative h-[720px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={images.heroBridge}
          alt="Cable-stayed bridge infrastructure project"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          onLoad={() =>
            logHeroImage("hero image loaded", { status: "success", unoptimized: true })
          }
          onError={() =>
            logHeroImage("hero image failed", { status: "error", unoptimized: true })
          }
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 from-0% via-white/40 via-[38%] to-transparent to-100%" />
      </motion.div>

      <Container className="relative z-10 flex h-full items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <FadeUp>
              <h1 className="text-[40px] font-extrabold leading-[1.05] text-navy sm:text-[52px] lg:text-hero">
                Building India&apos;s
                <br />
                Infrastructure{" "}
                <span className="text-gold">Future</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/80 sm:text-body">
                Delivering transformative infrastructure, engineering,
                surveying, consultancy and real estate solutions that drive
                economic growth and sustainable development.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary group">
                  Explore Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-outline group">
                  Partner With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-[300px] rounded-hero bg-white p-6 shadow-hero"
            >
              <ul>
                {heroFeatures.map((feature, i) => (
                  <motion.li
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`flex items-center gap-4 py-4 ${
                      i < heroFeatures.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <DynamicIcon
                      name={feature.icon}
                      className="h-5 w-5 shrink-0 text-gold"
                    />
                    <span className="text-base font-semibold text-navy">
                      {feature.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { stats } from "@/data/site-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/MotionWrappers";

export function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 pb-section">
      <Container>
        <FadeUp>
          <div className="rounded-card bg-white px-4 py-8 shadow-stats sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-border">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center lg:px-4"
                >
                  <DynamicIcon
                    name={stat.icon}
                    className="mb-2 h-6 w-6 text-gold"
                  />
                  <p className="text-xl font-bold text-navy sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary sm:text-small">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

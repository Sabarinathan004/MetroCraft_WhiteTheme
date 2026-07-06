"use client";

import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import { businessVerticals } from "@/data/site-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Container, SectionHeader } from "@/components/ui/Container";
import {
  HoverLift,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionWrappers";

export function BusinessVerticals() {
  return (
    <section id="verticals" className="bg-[#F5F7FA] pb-section pt-section">
      <Container>
        <SectionHeader
          label="Our Business Verticals"
          heading="Integrated Expertise. End-to-End Solutions."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {businessVerticals.map((vertical) => (
            <StaggerItem key={vertical.id}>
              <HoverLift>
                <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 16vw"
                    />
                    <div className="absolute -bottom-6 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-navy shadow-card">
                      <DynamicIcon
                        name={vertical.icon}
                        className="h-6 w-6 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-6 pt-10">
                    <h3 className="mb-4 text-base font-bold leading-snug text-navy">
                      {vertical.title}
                    </h3>
                    <ul className="mb-6 flex-1 space-y-2">
                      {vertical.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <User className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={vertical.href}
                      className="group/link inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-gold"
                    >
                      Explore More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

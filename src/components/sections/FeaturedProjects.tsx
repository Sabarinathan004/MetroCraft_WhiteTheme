"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, IndianRupee, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { projects } from "@/data/site-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Container, SectionHeader } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/MotionWrappers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function FeaturedProjects() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="projects" className="pb-section">
      <Container>
        <SectionHeader
          label="Featured Projects"
          heading="Building Landmarks Across India"
          action={
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:text-gold"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          }
        />

        <FadeUp>
          <div className="relative">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card transition-all hover:shadow-card-hover lg:-left-6 lg:flex"
            >
              <ChevronLeft className="h-5 w-5 text-navy" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card transition-all hover:shadow-card-hover lg:-right-6 lg:flex"
            >
              <ChevronRight className="h-5 w-5 text-navy" />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-gold/30 !opacity-100",
                bulletActiveClass: "!bg-gold !w-6 !rounded-full",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="projects-swiper !pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <article className="group h-full overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <span className="absolute left-4 top-4 rounded-md bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {project.status}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {project.client}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                        <div className="flex items-center gap-2">
                          <IndianRupee className="h-4 w-4 text-gold" />
                          <span className="text-sm font-semibold text-navy">
                            {project.budget}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DynamicIcon
                            name={project.sizeIcon}
                            className="h-4 w-4 text-gold"
                          />
                          <span className="text-sm font-semibold text-navy">
                            {project.size}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-gold" />
                        <span className="text-sm text-text-secondary">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

"use client";

import {
  Clock,
  HeartHandshake,
  Leaf,
  Scale,
  ShieldCheck,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { commitmentItems, images, mapStats, partnerItems } from "@/data/site-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Container } from "@/components/ui/Container";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionWrappers";
import { IndiaMap } from "@/components/ui/IndiaMap";

const partnerIconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  "trending-up": TrendingUp,
  clock: Clock,
  "shield-check": ShieldCheck,
  leaf: Leaf,
};

const commitmentIconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  "heart-handshake": HeartHandshake,
  scale: Scale,
};

export function WhyPartner() {
  return (
    <section className="pb-section">
      <Container>
        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {/* Left Card */}
          <StaggerItem>
            <div className="card-base h-full border border-border p-8">
              <h3 className="mb-8 text-lg font-bold uppercase tracking-wide text-navy">
                Why Partner With MetroCraft?
              </h3>
              <ul className="space-y-6">
                {partnerItems.map((item) => {
                  const Icon = partnerIconMap[item.icon] ?? Trophy;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/5">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">{item.title}</p>
                        <p className="mt-1 text-sm text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </StaggerItem>

          {/* Center Card - Map */}
          <StaggerItem>
            <div className="card-base flex h-full flex-col border border-border p-8">
              <h3 className="mb-6 text-center text-lg font-bold uppercase tracking-wide text-navy">
                Our Projects Across India
              </h3>
              <div className="flex flex-1 flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                  <IndiaMap />
                </div>
                <div className="flex flex-col justify-center gap-5 sm:w-40">
                  {mapStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <DynamicIcon
                        name={stat.icon}
                        className="h-5 w-5 shrink-0 text-gold"
                      />
                      <div>
                        <p className="text-2xl font-bold text-navy">
                          {stat.value}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gold transition-all hover:bg-gold hover:text-white"
                >
                  Explore On Map
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Right Card - Commitment */}
          <StaggerItem>
            <div className="card-base relative h-full overflow-hidden border border-border">
              <div
                className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images.windTurbines})`,
                }}
              />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent" />
              <div className="relative flex h-full flex-col p-8">
                <h3 className="mb-8 text-lg font-bold uppercase tracking-wide text-navy">
                  Our Commitment To A Better Tomorrow
                </h3>
                <ul className="max-w-[240px] space-y-6">
                  {commitmentItems.map((item) => {
                    const Icon = commitmentIconMap[item.icon] ?? Leaf;
                    return (
                      <li key={item.title} className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/5">
                          <Icon className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="font-bold text-navy">{item.title}</p>
                          <p className="mt-1 text-sm text-text-secondary">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}

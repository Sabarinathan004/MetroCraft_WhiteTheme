"use client";

import Image from "next/image";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { enquiryTypes, images, siteConfig, socialLinks } from "@/data/site-data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FadeUp } from "@/components/motion/MotionWrappers";

const socialIconMap = {
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-navy">
      <Container className="py-section">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.4fr_auto]">
          {/* Left - Text & Socials */}
          <FadeUp className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Let&apos;s build something great together.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Connect with us for expert insights or partnership opportunities.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIconMap[
                    social.icon as keyof typeof socialIconMap
                  ] ?? Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </FadeUp>

          {/* Center - Form */}
          <FadeUp delay={0.15}>
            <div className="rounded-card bg-white p-8 shadow-hero lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="relative">
                  <select
                    required
                    value={formState.enquiryType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        enquiryType: e.target.value,
                      })
                    }
                    className="w-full appearance-none rounded-lg border border-border px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="" disabled>
                      Enquiry Type
                    </option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 text-sm text-navy placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button type="submit" className="btn-gold">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </FadeUp>

          {/* Right - Image */}
          <FadeUp
            delay={0.3}
            className="relative hidden min-h-[420px] w-[280px] shrink-0 overflow-hidden rounded-card lg:block xl:w-[320px]"
          >
            <Image
              src={images.contactEngineers}
              alt="Construction engineers reviewing project plans"
              fill
              className="object-cover"
              sizes="320px"
            />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#082447] pt-section text-white">
      <Container>
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="light" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "Company",
              links: [
                "About Us",
                "Leadership",
                "CSR & Sustainability",
                "Policies",
                "Awards & Recognition",
              ],
            },
            {
              title: "Business Verticals",
              links: [
                "Infrastructure",
                "Government Projects",
                "Survey & Geospatial",
                "Engineering Consultancy",
                "Real Estate",
                "Workforce Management",
              ],
            },
            {
              title: "Projects",
              links: [
                "Ongoing Projects",
                "Completed Projects",
                "Government Projects",
                "Private Projects",
              ],
            },
            {
              title: "Resources",
              links: [
                "Tenders",
                "Investor Relations",
                "Downloads",
                "FAQs",
              ],
            },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/60">{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2024 MetroCraft Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((link, i) => (
              <span key={link} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">|</span>}
                <a href="#" className="transition-colors hover:text-gold">
                  {link}
                </a>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

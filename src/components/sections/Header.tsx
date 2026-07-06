"use client";

import { ChevronDown, Mail, Menu, Phone, Search, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navItems, siteConfig, topBarLinks } from "@/data/site-data";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-navy text-white">
        <div className="container-main flex h-top-bar items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {topBarLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="hidden transition-opacity hover:opacity-80 md:inline"
                >
                  {link.label}
                </a>
                {i < topBarLinks.length - 1 && (
                  <span className="hidden h-4 w-px bg-white/30 md:block" />
                )}
              </span>
            ))}
            <span className="hidden h-4 w-px bg-white/30 md:block" />
            <button
              type="button"
              className="hidden items-center gap-1 transition-opacity hover:opacity-80 md:flex"
            >
              EN
              <ChevronDown className="h-3 w-3" />
            </button>
            <button
              type="button"
              aria-label="Search"
              className="transition-opacity hover:opacity-80"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <div className="container-main flex h-nav-height items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`group relative flex items-center gap-1 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    item.active
                      ? "text-gold"
                      : "text-navy hover:text-gold"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  )}
                  {item.active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-gold hidden shrink-0 px-6 sm:inline-flex">
              Enquire Now
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy xl:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border xl:hidden"
            >
              <ul className="container-main space-y-1 py-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                        item.active ? "text-gold" : "text-navy"
                      }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="h-3 w-3 opacity-60" />
                      )}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-gold w-full"
                  >
                    Enquire Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

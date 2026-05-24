"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import EnquireModal from "./EnquireModal";

const navLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Stay", href: "/stays" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Activities", href: "/activities" },
  { label: "Wellness", href: "/wellness" },
  { label: "Wedding", href: "/wedding" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-cream text-2xl tracking-widest group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              KAILASHA
            </span>
            <span
              className="text-gold/70 text-[9px] tracking-[0.3em] uppercase mt-0.5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              The Himalayan Village
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/70 hover:text-gold transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEnquireOpen(true)}
              className="hidden lg:block btn-gold text-[10px] px-6 py-3"
            >
              Book Now
            </button>
            <button
              className="lg:hidden text-cream hover:text-gold transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex"
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1A1A1A 0%, #1B2E1E 60%, #1A1A1A 100%)",
              }}
            />
            {/* Content */}
            <div className="relative w-full flex flex-col px-8 py-10">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col leading-none"
                >
                  <span
                    className="text-cream text-2xl tracking-widest"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                  >
                    KAILASHA
                  </span>
                  <span className="text-gold/70 text-[9px] tracking-[0.3em] uppercase mt-0.5">
                    The Himalayan Village
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-cream/80 hover:text-gold transition-colors duration-300 text-3xl"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setEnquireOpen(true);
                  }}
                  className="btn-gold text-center"
                >
                  Book Now
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setEnquireOpen(true);
                  }}
                  className="btn-ghost text-center"
                >
                  Enquire
                </button>
              </div>

              {/* Bottom decorative line */}
              <div className="mt-8 flex items-center gap-4">
                <div className="gold-line flex-1" style={{ margin: 0 }} />
                <span className="text-gold/40 text-[10px] tracking-[0.3em]">
                  KASOL · PARVATI VALLEY
                </span>
                <div className="gold-line flex-1" style={{ margin: 0 }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  );
}

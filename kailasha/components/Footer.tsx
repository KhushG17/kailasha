import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Accommodations", href: "/stays" },
  { label: "Dining", href: "/dining" },
  { label: "Activities", href: "/activities" },
  { label: "Wellness", href: "/wellness" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

const experiences = [
  { label: "Destination Wedding", href: "/wedding" },
  { label: "Trekking Expeditions", href: "/trekking" },
  { label: "Corporate Retreats", href: "/experiences" },
  { label: "Workation Packages", href: "/experiences" },
  { label: "Wellness Initiations", href: "/wellness" },
  { label: "Jungle Barbeque", href: "/dining" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/thehimalayanvillageinkasol",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kailasha_thehimalayanvillage/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/kailashathehimalayanvillage/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-himalayan-village/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      {/* CTA Strip */}
      <div
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #1B2E1E 0%, #1A1A1A 100%)",
        }}
      >
        <p
          className="text-gold/60 text-[11px] tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Reserve Your Escape
        </p>
        <h2
          className="text-cream text-5xl md:text-6xl mb-8"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic" }}
        >
          Your escape is waiting
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.thehimalayanvillage.in/calender.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Now
          </a>
          <a href="/contact" className="btn-ghost">
            Enquire
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-6">
              <h3
                className="text-cream text-3xl tracking-widest mb-1"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                KAILASHA
              </h3>
              <p className="text-gold/60 text-[9px] tracking-[0.35em] uppercase">
                The Himalayan Village
              </p>
            </div>
            <div className="gold-line mb-6" />
            <p
              className="text-cream/50 text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Surrounded by ancient deodar forests, kissed by the Parvati river,
              and built without a drop of cement.
            </p>
            <div className="flex gap-4">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/60 transition-all duration-300"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              className="text-gold text-[10px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Experiences */}
          <div>
            <h4
              className="text-gold text-[10px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Experiences
            </h4>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp.label}>
                  <Link
                    href={exp.href}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {exp.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-gold text-[10px] tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Find Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <p
                  className="text-cream/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  Kailash Nagar, Doonkhara, P.O. Jari,
                  <br />
                  Kasol, Parvati Valley,
                  <br />
                  Dist. Kullu, Himachal Pradesh
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                <a
                  href="tel:+919805072712"
                  className="text-cream/50 hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  +91 9805072712
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-gold/60 flex-shrink-0" />
                <a
                  href="mailto:info@thehimalayanvillage.in"
                  className="text-cream/50 hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  info@thehimalayanvillage.in
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Globe size={14} className="text-gold/60 flex-shrink-0" />
                <a
                  href="https://www.thehimalayanvillage.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  thehimalayanvillage.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-cream/30 text-[11px] tracking-widest"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            © 2025 Kailasha – The Himalayan Village
          </p>
          <p
            className="text-cream/20 text-[11px] tracking-widest"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Designed with love for the Himalayas
          </p>
          <div className="flex gap-6">
            <Link
              href="/reservation"
              className="text-cream/30 hover:text-gold text-[11px] tracking-widest transition-colors"
            >
              Tariff
            </Link>
            <Link
              href="/location"
              className="text-cream/30 hover:text-gold text-[11px] tracking-widest transition-colors"
            >
              Location
            </Link>
            <Link
              href="/contact"
              className="text-cream/30 hover:text-gold text-[11px] tracking-widest transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

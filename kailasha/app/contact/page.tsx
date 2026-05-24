"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/thehimalayanvillageinkasol", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", href: "https://www.instagram.com/kailasha_thehimalayanvillage/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "Pinterest", href: "https://in.pinterest.com/kailashathehimalayanvillage/", path: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-himalayan-village/", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

const roomTypes = ["Ghor – Superior Cottage", "Dhara – Deluxe Cottage", "Kothi – Deluxe Cottage", "Shoron – Machan Suite", "Kothi Shoron – Royal Cottage"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "", room: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hello Kailasha!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nGuests: ${form.guests}\nRoom: ${form.room}\n\nMessage: ${form.message}`);
    window.open(`https://wa.me/919805072712?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputClass = "w-full bg-transparent border-b text-cream placeholder-cream/25 px-0 py-3 text-sm focus:outline-none transition-colors duration-300 appearance-none";
  const inputStyle = { borderColor: "rgba(201,168,76,0.2)", fontFamily: "var(--font-jost)", color: "#F4F0E6" };
  const labelStyle = { color: "rgba(201,168,76,0.55)", fontFamily: "var(--font-jost)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase" as const, display: "block", marginBottom: "6px" };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Get in Touch</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>Contact Us</h1>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: info */}
            <FadeIn direction="left">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-10" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Reach Us</p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <MapPin size={16} style={{ color: "rgba(201,168,76,0.5)", marginTop: "4px", flexShrink: 0 }} />
                  <div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>
                      Kailash Nagar, Doonkhara, P.O. Jari<br />
                      Kasol, Parvati Valley<br />
                      Dist. Kullu, Himachal Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone size={16} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                  <a href="tel:+919805072712" className="text-sm transition-colors duration-300" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                    +91 9805072712
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={16} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                  <a href="mailto:info@thehimalayanvillage.in" className="text-sm" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                    info@thehimalayanvillage.in
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <Globe size={16} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                  <a href="https://www.thehimalayanvillage.in" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                    www.thehimalayanvillage.in
                  </a>
                </div>
              </div>

              <div className="gold-line mb-8" style={{ margin: 0, marginBottom: "2rem" }} />

              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Social</p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center transition-all duration-300" style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(244,240,230,0.4)" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <p className="text-sm mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6", fontSize: "1.1rem" }}>Booking Hours</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                  Mon–Sun, 9:00 AM – 8:00 PM IST<br />
                  WhatsApp responses within 2 hours
                </p>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn direction="right">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-10" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Send Enquiry</p>

              {sent ? (
                <div className="text-center py-20">
                  <p className="text-4xl mb-4" style={{ color: "#C9A84C" }}>✓</p>
                  <p className="text-2xl mb-3" style={{ fontFamily: "var(--font-cormorant)", color: "#F4F0E6" }}>Enquiry sent via WhatsApp</p>
                  <p className="text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>We&apos;ll respond within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>No. of Guests</label>
                      <input name="guests" type="number" min="1" placeholder="2" value={form.guests} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Check-in</label>
                      <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} className={inputClass} style={{ ...inputStyle, colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Check-out</label>
                      <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} className={inputClass} style={{ ...inputStyle, colorScheme: "dark" }} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Room Preference</label>
                    <select name="room" value={form.room} onChange={handleChange} className={inputClass} style={{ ...inputStyle, background: "transparent" }}>
                      <option value="" style={{ background: "#111111" }}>Select a room</option>
                      {roomTypes.map((r) => <option key={r} value={r} style={{ background: "#111111" }}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your stay, any special requests..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} style={{ ...inputStyle, borderBottomWidth: "1px", borderBottomStyle: "solid" }} />
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-gold flex-1 py-4">Send via WhatsApp</button>
                    <a href="tel:+919805072712" className="btn-ghost flex-1 py-4 text-center">Call Us Directly</a>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

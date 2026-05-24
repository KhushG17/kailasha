"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const services = [
  { title: "Pre-Wedding Shoots", desc: "The Parvati Valley offers backdrops that no studio can replicate — ancient deodar forests, stone-and-wood architecture, the river at golden hour, mist-clad hills at dawn. Our team coordinates locations, lighting, and logistics so you can simply be present.", icon: "◎" },
  { title: "Haldi & Mehndi Ceremonies", desc: "Open-air setups under the deodar canopy. Marigold mandaps, traditional rangoli, and a warmth that comes from being surrounded by mountains and music. The most photographed ceremonies happen here.", icon: "✦" },
  { title: "The Wedding Ceremony", desc: "Whether under the stars by the river or in our indoor banquet hall draped in marigold and fairy lights — the ceremony setup is bespoke. Full floral design, mandap construction, sound, and officiating support provided.", icon: "❧" },
  { title: "The Reception", desc: "From intimate 20-person dinners to larger celebrations of 80+ guests — our team manages every detail. Lighting, catering, entertainment, and the kind of coordination that lets you forget logistics entirely.", icon: "◈" },
  { title: "Auxiliary Services", desc: "Full end-to-end wedding management. DJ & live music, mehendi artists, makeup & hair, photography, videography, local priest coordination, honeymoon suite arrangement, and guest transportation — all under one roof.", icon: "⌂" },
];

export default function WeddingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/wedding/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Destination Wedding</p>
          <h1 className="leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 7vw, 7rem)", color: "#C9A84C" }}>
            Marry where the
            <br />mountains witness
          </h1>
          <p style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
            A wedding at Kailasha is not just an event. It is a beginning — set against the most extraordinary backdrop in northern India.
          </p>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Why Kailasha</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#F4F0E6" }}>
                A setting that no decorator can create
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>
                Ancient deodar forests. The Parvati river. Hand-carved Kathkunia stone architecture. 1500 metres above sea level, with mountain air that makes every emotion more vivid.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>
                Kailasha has hosted some of the most intimate and extraordinary weddings in Himachal Pradesh. Small enough to be personal. Grand enough to be unforgettable.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>What We Offer</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Complete wedding management</h2>
          </FadeIn>
          <div className="space-y-0">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-6 py-10 items-start" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                  <div className="col-span-1 text-center">
                    <span className="text-2xl" style={{ color: "rgba(201,168,76,0.4)" }}>{s.icon}</span>
                  </div>
                  <div className="col-span-11 lg:col-span-3">
                    <h3 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{s.title}</h3>
                  </div>
                  <div className="col-span-11 lg:col-span-8">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }} />
          </div>
        </div>
      </section>

      {/* GALLERY ROW */}
      <section className="py-4 px-4" style={{ background: "#111111" }}>
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-square relative overflow-hidden"
                style={{ background: `linear-gradient(${n * 40}deg,#1B2E1E,#5C3D2E)` }}
              >
                <div className="absolute inset-0" style={{ backgroundImage: `url('/images/wedding/gallery-${n}.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* VIDEO EMBED */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>See It For Yourself</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>A wedding at Kailasha</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/PRAVx8ydpoU"
                title="Kailasha Wedding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "1px solid rgba(201,168,76,0.15)" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Your story begins here
          </h2>
          <p className="text-sm mb-10" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
            Every wedding at Kailasha is planned from scratch, personally. Let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-gold">Plan Your Wedding</Link>
        </FadeIn>
      </section>
    </>
  );
}

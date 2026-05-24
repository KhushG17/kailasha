"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const experiences = [
  {
    id: "conferencing",
    title: "Conferencing & Corporate Retreats",
    sub: "Where great decisions are made",
    desc: "Take your team out of the boardroom and into the mountains. Kailasha offers fully equipped conferencing facilities — projector, high-speed Wi-Fi, and an environment that unlocks creative thinking. The deodar forest has a way of clarifying strategy.",
    tag: "Corporate",
    gradient: "linear-gradient(160deg,#1B2E1E,#2A4530)",
    image: "/images/experiences/corporate.jpg",
  },
  {
    id: "folkdance",
    title: "Folk Dances of Himachal",
    sub: "Nightly cultural performances",
    desc: "Each evening, our staff perform the traditional folk dances of Himachal Pradesh — Nati, Kullu dance, and more. Not a rehearsed show, but a living celebration. Join in, or simply watch as the mountains become a stage.",
    tag: "Culture",
    gradient: "linear-gradient(160deg,#5C3D2E,#1B2E1E)",
    image: "/images/experiences/folkdance.jpg",
  },
  {
    id: "workation",
    title: "Workation — Mountain Office",
    sub: "Where focus comes naturally",
    desc: "High-speed Wi-Fi throughout the property. Quiet sit-outs. A rhythm that is naturally productive. Kailasha has become one of India's finest workation destinations — professionals who discovered that their best work happens with the Parvati river as background music.",
    tag: "Workation",
    gradient: "linear-gradient(160deg,#2A4530,#5C3D2E)",
    image: "/images/experiences/workation.jpg",
  },
  {
    id: "petfriendly",
    title: "Pet-Friendly Resort",
    sub: "Your companion is welcome",
    desc: "Kailasha is one of the few luxury retreats in Himachal Pradesh that genuinely welcomes pets. Open spaces, fresh mountain air, and the river — your four-legged family member will have as much of an escape as you do.",
    tag: "Pets",
    gradient: "linear-gradient(160deg,#1A1A1A,#1B2E1E)",
    image: "/images/experiences/pets.jpg",
  },
  {
    id: "wellness",
    title: "Wellness & Initiations",
    sub: "The Alchemist in You — 3 day programme",
    desc: "A guided 3-day healing experience led by Ochune, our resident alchemist. Available in whole-day and part-day formats. Breathwork, energy work, plant-based nutrition, and deep rest. Come broken. Leave recalibrated.",
    tag: "Wellness",
    gradient: "linear-gradient(160deg,#3B2518,#2A4530)",
    image: "/images/experiences/wellness.jpg",
  },
  {
    id: "photography",
    title: "Photo-perfect Architecture",
    sub: "Every angle, a frame",
    desc: "Kailasha was not designed to be photographed — and yet, every corner insists on it. The Kathkunia stone walls, the machan silhouette against the forest, the deodar canopy at golden hour. Pre-wedding shoots, editorial content, and travel photography all find something extraordinary here.",
    tag: "Photography",
    gradient: "linear-gradient(160deg,#1B2E1E,#3B2518)",
    image: "/images/experiences/photography.jpg",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="relative min-h-[50vh] lg:min-h-auto" style={{ backgroundImage: "url('/images/home/story.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }}>
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative flex items-end pb-20 px-12 lg:px-16" style={{ background: "#111111" }}>
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Experiences</p>
              <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "#F4F0E6" }}>
                Every moment,
                <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>a story</span>
              </h1>
              <p className="mt-6 text-sm leading-relaxed max-w-sm" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                Kailasha is not a place you pass through. It is a place that passes through you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE CARDS — editorial magazine layout */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8 space-y-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.05}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[420px] ${i % 2 === 0 ? "" : ""}`} style={{ border: "1px solid rgba(201,168,76,0.08)" }}>
                {/* Image */}
                <div
                  className={`lg:col-span-5 relative min-h-[280px] ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  style={{ background: exp.gradient }}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${exp.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] tracking-[0.3em] uppercase px-3 py-1" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontFamily: "var(--font-jost)" }}>
                      {exp.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 flex items-center px-10 lg:px-14 py-12 ${i % 2 !== 0 ? "lg:order-1" : ""}`} style={{ background: i % 2 === 0 ? "#0D0D0D" : "#111111" }}>
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>{exp.sub}</p>
                    <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#F4F0E6" }}>{exp.title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>{exp.desc}</p>
                    <div className="mt-8">
                      <Link href="/contact" className="btn-ghost text-xs py-2 px-6">Enquire</Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            The mountains have more to offer than you think
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/activities" className="btn-ghost">Explore Activities</Link>
            <Link href="/wellness" className="btn-ghost">Wellness Programmes</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

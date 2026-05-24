"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const spaServices = [
  { name: "Dry Sauna", desc: "Deep heat therapy in a Kathkunia-built sauna chamber. Cedar wood, dry heat, and the sound of nothing at all." },
  { name: "Steam Sauna", desc: "Eucalyptus-infused steam in a private chamber. Open the pores. Release the city." },
  { name: "Jacuzzi", desc: "Open-air jets with valley views. Day or night, the mountains make it something else." },
  { name: "Aroma Bath Therapy", desc: "Curated essential oil baths — lavender, pine, rose. The body absorbs what the mind needs." },
  { name: "Himalayan Massage", desc: "Deep tissue and Swedish technique, with warm himalayan stone variants. Trained therapists, full privacy." },
];

export default function WellnessPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/wellness/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center top", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Wellness at Kailasha</p>
          <h1 className="leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            Heal. Breathe.
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>Return to yourself.</span>
          </h1>
          <p style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8 }}>
            High in the Parvati Valley, where the air is thin and the silence is loud, the body does something it rarely gets to do. It stops.
          </p>
        </div>
      </section>

      {/* SPA SECTION */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>The Spa</p>
            <h2 className="mb-6" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Rituals of restoration</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>
              Our spa is not a room. It is a permission — to stop. To be still. To let the mountains do what medicine sometimes cannot.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {spaServices.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8 items-start" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{service.name}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>{service.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }} />
          </div>
        </div>
      </section>

      {/* INITIATIONS PROGRAMME */}
      <section className="relative overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          <div
            className="relative min-h-[50vh] lg:min-h-auto"
            style={{ backgroundImage: "url('/images/wellness/outdoor.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#2A4530" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
          </div>
          <div className="flex items-center px-10 lg:px-16 py-20">
            <FadeIn direction="right" className="max-w-lg">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>3-Day Programme</p>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>
                The Alchemist in You —
                <span style={{ fontStyle: "italic", color: "#C9A84C" }}> Initiations</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>
                Guided by Ochune — our resident alchemist and healer — this is a three-day immersive programme designed to recalibrate body, mind, and spirit. Ochune draws from plant-based traditions, breathwork, energy medicine, and Himalayan spiritual practices.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>
                Available in both whole-day and part-day formats. Maximum 4 participants per cohort. This is not a retreat. This is a transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Breathwork", "Energy Medicine", "Plant-based Nutrition", "Deep Rest Protocols", "Sound Healing", "Nature Immersion"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{ color: "#C9A84C", fontSize: "10px" }}>—</span>
                    <span className="text-xs" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-ghost">Enquire About Initiations</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NATURE WELLNESS */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Natural Healing</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>The valley itself is the therapist</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Morning Garden Strolls", desc: "Start each day with a barefoot walk through our deodar garden. The morning mist, the birdsong, and the cold air reset the nervous system in a way no spa can replicate.", icon: "☽" },
              { title: "River Sound Meditation", desc: "The Parvati never stops. Its constant sound — at once powerful and soothing — is one of the oldest forms of sound therapy available. Find a stone. Sit. Listen.", icon: "≈" },
              { title: "Star-lit Nights", desc: "At 1500 metres, with no light pollution for miles, the night sky at Kailasha is a spectacle. Lie back. The cosmos provides the perspective.", icon: "✦" },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="p-8 h-full" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                  <span className="text-3xl block mb-6" style={{ color: "#C9A84C" }}>{item.icon}</span>
                  <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-28" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <p className="text-center max-w-2xl mx-auto px-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#F4F0E6", lineHeight: 1.6 }}>
            &ldquo;The air here is not just clean. It is <span style={{ color: "#C9A84C" }}>clarifying</span>.&rdquo;
          </p>
          <p className="text-center mt-6 text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>— A guest, after the Initiations programme</p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "#111111" }}>
        <FadeIn>
          <Link href="/contact" className="btn-ghost">Book a Wellness Stay</Link>
        </FadeIn>
      </section>
    </>
  );
}

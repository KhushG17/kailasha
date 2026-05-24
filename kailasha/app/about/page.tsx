"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const values = [
  { num: "01", title: "Care", desc: "Every guest is family. Every detail, intentional. We care for the mountains as much as we care for you." },
  { num: "02", title: "Accountability", desc: "We own every promise made — from the warmth of your welcome to the silence of your sleep." },
  { num: "03", title: "Teamwork", desc: "Kailasha is a collective. Every hand that built it, every voice that serves — one vision, many hearts." },
  { num: "04", title: "Experience", desc: "Not a stay. An immersion. We architect moments that linger long after checkout." },
  { num: "05", title: "Integrity", desc: "Honest pricing. Authentic architecture. No artifice — just the mountains, as they are." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-end pb-24 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/home/story.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Our Story</p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            A place born from love
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>for the mountains</span>
          </h1>
        </div>
      </section>

      {/* FOUNDER NARRATIVE */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <p className="text-4xl md:text-5xl leading-tight mb-12 text-center" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "#F4F0E6" }}>
              &ldquo;I didn&apos;t build Kailasha.
              <br /><span style={{ color: "#C9A84C" }}>The mountains built it through me.&rdquo;</span>
            </p>
          </FadeIn>
          <div className="flex items-center gap-4 justify-center mb-16">
            <div className="gold-line" />
            <span style={{ color: "rgba(201,168,76,0.6)", fontSize: "10px", fontFamily: "var(--font-jost)", letterSpacing: "0.3em" }}>AMAN SOOD — FOUNDER</span>
            <div className="gold-line" />
          </div>
          <FadeIn delay={0.1}>
            <div className="space-y-6" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9, fontSize: "1rem" }}>
              <p>It began with a walk. Aman Sood, a man who had spent years in the noise of cities, found himself standing in the Parvati Valley one autumn evening — the kind that turns everything gold. The deodar trees were ancient. The river was singing. And something shifted.</p>
              <p>He didn&apos;t want to build a resort. He wanted to build a feeling. A place where the city fell away entirely, where time moved at the pace of the mountains, where every stone and every beam had a story older than any of us.</p>
              <p>So he learned. He sought out the last remaining Kathkunia craftsmen — artisans who build entirely with stone and deodar wood, without concrete, without steel. People for whom a building is not just shelter but a living relationship between human hands and mountain earth.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARCHITECTURE SPLIT */}
      <section className="relative overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="flex items-center px-10 lg:px-16 py-20 order-2 lg:order-1">
            <FadeIn direction="left" className="max-w-lg">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>The Architecture</p>
              <h2 className="mb-8 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>
                Kathkunia — the art of building without cement
              </h2>
              <div className="space-y-4" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8, fontSize: "0.9rem" }}>
                <p>Kathkunia is a traditional Pahari construction technique native to the hills of Himachal Pradesh. It uses alternating layers of hand-cut stone and deodar logs, fitted together without mortar. The result is a structure that breathes — cool in summer, warm in winter, earthquake-resistant by nature.</p>
                <p>Each cottage at Kailasha took months to build. Craftsmen worked by hand, sourcing local stone and sustainably harvested deodar. No machinery. No cement. Just an ancient knowledge passed from generation to generation.</p>
                <p>This is why Kailasha is not just a stay — it is a piece of living heritage. Every wall you touch has a story. Every beam overhead carries the hands of the hill people.</p>
              </div>
            </FadeIn>
          </div>
          <div className="relative min-h-[50vh] lg:min-h-auto order-1 lg:order-2" style={{ backgroundImage: "url('/images/home/architecture.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }}>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>What We Stand For</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Five principles, one home</h2>
          </FadeIn>
          <div className="space-y-0">
            {values.map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-6 items-start py-10" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                  <div className="col-span-2 lg:col-span-1">
                    <span className="text-5xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, color: "rgba(201,168,76,0.25)", lineHeight: 1 }}>{v.num}</span>
                  </div>
                  <div className="col-span-10 lg:col-span-3">
                    <h3 className="text-3xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "#F4F0E6" }}>{v.title}</h3>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRIPADVISOR */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Our Popularity</p>
          <h2 className="mb-10" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Recognised by travellers who know the difference
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["Travellers' Choice 2023", "Best Boutique Resort HP", "Top Eco-Stay India"].map((award) => (
              <div key={award} className="px-8 py-5" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="text-xl mb-2" style={{ color: "#C9A84C" }}>★★★★★</div>
                <p className="text-sm" style={{ color: "rgba(244,240,230,0.7)", fontFamily: "var(--font-jost)" }}>{award}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {["Lucky Ali", "Arijit Singh", "Vijay Raaz", "Radhika Apte"].map((name) => (
              <span key={name} className="text-sm tracking-widest" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{name}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "#111111" }}>
        <FadeIn>
          <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Come. The mountains are waiting.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stays" className="btn-ghost">Explore Stays</Link>
            <Link href="/contact" className="btn-ghost">Enquire Now</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

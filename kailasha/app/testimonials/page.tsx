"use client";

import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "Abeera",
    sub: "3-night stay · Shoron Suite",
    rating: 5,
    text: "Amazing 3-night stay at Kailasha. The most courteous staff I have ever encountered at any resort — and I have stayed at some of the finest. The architecture is extraordinary — I had no idea Kathkunia construction could be this beautiful. And the coffee. The food. All of it. I will be back.",
    large: true,
  },
  {
    name: "Ishani",
    sub: "Solo workation · 1 week",
    rating: 5,
    text: "The sound of the Parvati river flowing below the machan. That is what I remember most. The food was incredibly fresh — they grow vegetables in-house and you can taste the difference. I came to work; I ended up healing. I hope to return very soon.",
    large: false,
  },
  {
    name: "Rajesh K.",
    sub: "Family stay · Kothi Shoron",
    rating: 5,
    text: "Par excellence when it comes to ambiance, food & beverage, creature comforts, theme and location. Kailasha is in a category entirely its own. We spent five nights and could easily have stayed five more. The staff anticipated every need before we voiced it.",
    large: true,
  },
  {
    name: "Priya & Arjun",
    sub: "Honeymoon · Machan Suite",
    rating: 5,
    text: "We chose Kailasha for our honeymoon on a friend's recommendation. We had no idea what to expect. What we got was beyond anything we imagined — privacy, beauty, extraordinary food, and a staff that made us feel like the only guests in the world. Thank you, Kailasha.",
    large: false,
  },
  {
    name: "Vikram S.",
    sub: "Corporate retreat · 12 guests",
    rating: 5,
    text: "We hosted our leadership offsite at Kailasha. The team responded in a way they never would in a Delhi conference room — something about the mountains changes how people think. The logistics were flawless, the food impeccable, and the evenings by the fire were the real breakthroughs.",
    large: false,
  },
  {
    name: "Deepa N.",
    sub: "Initiations programme",
    rating: 5,
    text: "I came broken. I left recalibrated. That is the only way I can describe what Ochune's three-day programme did for me. The Kailasha environment held it all together — the silence, the river, the air. There is no five-star hotel that can offer what this mountain gave me.",
    large: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-28 text-center overflow-hidden" style={{ background: "linear-gradient(160deg,#1B2E1E,#0D0D0D)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 px-8">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>What Guests Say</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>Stories from the mountain</h1>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto px-8 space-y-0">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.06}>
              <div className="py-16" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(201,168,76,0.08)" }}>
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, s) => <span key={s} style={{ color: "#C9A84C", fontSize: "14px" }}>★</span>)}
                </div>
                <blockquote
                  className="mb-8 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: t.large ? "clamp(1.5rem, 3vw, 2.2rem)" : "clamp(1.2rem, 2.5vw, 1.7rem)",
                    color: "#F4F0E6",
                    lineHeight: 1.65,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="gold-line" style={{ width: "40px", margin: 0 }} />
                  <div>
                    <p className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)", fontWeight: 500 }}>{t.name}</p>
                    <p className="text-[10px] mt-0.5 tracking-wide" style={{ color: "rgba(244,240,230,0.35)", fontFamily: "var(--font-jost)" }}>{t.sub}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }} />
        </div>
      </section>

      {/* VIDEO */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Guest Stories</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>Watch: A stay at Kailasha</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/usomWbekkzc"
                title="Kailasha Guest Experience"
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
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Add your story to ours
          </h2>
          <p className="mb-10 text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>Every guest who stays becomes part of Kailasha&apos;s living story</p>
          <a href="https://www.thehimalayanvillage.in/calender.html" target="_blank" rel="noopener noreferrer" className="btn-gold">Book Your Stay</a>
        </FadeIn>
      </section>
    </>
  );
}

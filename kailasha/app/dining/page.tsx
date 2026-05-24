"use client";

import FadeIn from "@/components/FadeIn";

const dishes = [
  { name: "Himachali Thali", origin: "Traditional", desc: "The complete traditional spread — spice-forward, a cultural journey on a plate. Lentils, seasonal vegetables, rice, and accompaniments as the hills have served for centuries.", time: null },
  { name: "Siddu", origin: "Pahari Specialty", desc: "Fermented dough stuffed with poppy seeds, slow-cooked over 2–3 hours. Served warm with ghee and dal. The most meditative dish on our menu — patience made edible.", time: "3 hour slow cook" },
  { name: "Patroras", origin: "Himachali", desc: "Arbi leaf fritters in spiced besan, steamed then plated with a piquant green chutney. A dish that rewards patience and rewards with complexity.", time: null },
  { name: "Special Coffee", origin: "House Recipe", desc: "Thick beaten brew, prepared to order. Poured over ice or served hot with the mountain air as the final ingredient. Our most requested item.", time: null },
  { name: "Jungle Barbeque", origin: "Outdoor Experience", desc: "Open-air smoked meats and vegetables by the river, under the stars. Fire, smoke, and the sound of the Parvati — an evening that becomes a memory.", time: "By reservation" },
];

const environments = [
  { name: "The Main Restaurant", desc: "Indian, Continental & Himachali cuisine served in our signature dining hall — deodar ceiling, colourful chairs, and panoramic mountain views. Breakfast, lunch, and dinner.", image: "/images/dining/hall.jpg", gradient: "linear-gradient(135deg,#1B2E1E,#1A1A1A)" },
  { name: "The Bar", desc: "Curated wines, craft spirits, and house cocktails. Moody lighting, warm wood, and a wine rack that tells its own story. The perfect hour before dinner.", image: "/images/dining/bar.jpg", gradient: "linear-gradient(135deg,#3B2518,#1A1A1A)" },
  { name: "Private Sit-out", desc: "Dine on your cottage terrace or at one of our private outdoor tables. Stone walls, open sky, and a meal that feels entirely your own.", image: "/images/dining/outdoor.jpg", gradient: "linear-gradient(135deg,#2A4530,#1B2E1E)" },
  { name: "Jungle Barbeque", desc: "A seasonal outdoor setup by the river — fire pits, long tables, and food that tastes better with the stars overhead. Available on request.", image: "/images/dining/bonfire.jpg", gradient: "linear-gradient(135deg,#5C3D2E,#1A1A1A)" },
];

export default function DiningPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/dining/hall.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Dining at Kailasha</p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F4F0E6" }}>
            Food cooked with fire,
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>fed with love</span>
          </h1>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Our Philosophy</p>
            <p className="leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#F4F0E6" }}>
              Multi-cuisine dining surrounded by pine forest. Vegetables grown in our own garden. Everything cooked fresh — veg and non-veg — by hands that know these hills and love this food.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-12 flex flex-wrap justify-center gap-8">
            {["Farm-to-Table", "In-house Garden Produce", "Himachali Specialties", "Continental & Indian"].map((tag) => (
              <span key={tag} className="text-[11px] tracking-[0.2em] uppercase px-5 py-2" style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.7)", fontFamily: "var(--font-jost)" }}>{tag}</span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* CHEF'S SPECIALS */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>The Kitchen</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Chef&apos;s Specials</h2>
          </FadeIn>
          <div className="space-y-0">
            {dishes.map((dish, i) => (
              <FadeIn key={dish.name} delay={i * 0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10 items-start" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                  <div className="lg:col-span-4">
                    <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>{dish.origin}</p>
                    <h3 className="text-3xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{dish.name}</h3>
                    {dish.time && (
                      <p className="text-[10px] tracking-widest uppercase mt-2" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>{dish.time}</p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.9 }}>{dish.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }} />
          </div>
        </div>
      </section>

      {/* DINING ENVIRONMENTS */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Where You Dine</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Four settings, one soul</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {environments.map((env, i) => (
              <FadeIn key={env.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <div className="absolute inset-0" style={{ background: env.gradient }} />
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${env.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{env.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{env.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>Reserve your table in the mountains</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>Dining is included in meal packages or available à la carte for day visitors</p>
          <a href="/reservation" className="btn-ghost">View Meal Plans</a>
        </FadeIn>
      </section>
    </>
  );
}

"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const activities = [
  { name: "Trekking", icon: "▲", desc: "Sar Pass, Yanker Pass, Pin Parbati, Khiriganga — trails that begin steps from our gate. From gentle forest walks to high-altitude expeditions.", tag: "Multi-day", image: "/images/activities/trekking.jpg", gradient: "linear-gradient(160deg,#1B2E1E,#2A4530)" },
  { name: "Angling", icon: "〜", desc: "Cast a line in the Parvati river for brown and rainbow trout. One of the finest angling stretches in the Himalayas — patience rewarded with the purest mountain silence.", tag: "River", image: "/images/activities/angling.jpg", gradient: "linear-gradient(160deg,#2A4530,#1B2E1E)" },
  { name: "Nature Walk", icon: "✦", desc: "240 bird species documented in the valley. Himalayan Flying Fox colonies. A naturalist guide, binoculars, and an ecosystem that rewards slow observation.", tag: "Daily", image: "/images/activities/naturewalk.jpg", gradient: "linear-gradient(160deg,#1B2E1E,#5C3D2E)" },
  { name: "Mountain Biking", icon: "◎", desc: "Trail rides through deodar corridors and riverside paths. Both easy-grade and technical routes available. Bicycles and helmets provided.", tag: "Adventure", image: "/images/activities/biking.jpg", gradient: "linear-gradient(160deg,#5C3D2E,#1B2E1E)" },
  { name: "Rock Climbing", icon: "⬡", desc: "Guided rock climbing on the natural cliff faces above the valley. Instructors trained in technical safety. Suitable for first-timers and experienced climbers.", tag: "Guided", image: "/images/activities/climbing.jpg", gradient: "linear-gradient(160deg,#3B2518,#2A4530)" },
  { name: "Jungle Barbeque", icon: "♨", desc: "Fire, river, stars. A curated outdoor barbeque experience along the Parvati — smoked meats, seasonal vegetables, and conversation that lasts till midnight.", tag: "Evening", image: "/images/activities/bbq.jpg", gradient: "linear-gradient(160deg,#1A1A1A,#1B2E1E)" },
  { name: "Open Jeep Safari", icon: "◈", desc: "A guided jeep drive through the Parvati Valley — stopping at sacred temples, local villages, and viewpoints that no road sign points to.", tag: "Half Day", image: "/images/activities/jeep.jpg", gradient: "linear-gradient(160deg,#2A4530,#5C3D2E)" },
  { name: "Agri-Tourism", icon: "❧", desc: "Walk through working orchards. Meet the farmers of the valley. Pick fruit in season, understand the agricultural cycles that have sustained these hills for generations.", tag: "Cultural", image: "/images/activities/agri.jpg", gradient: "linear-gradient(160deg,#5C3D2E,#3B2518)" },
  { name: "Paragliding", icon: "◬", desc: "Tandem paragliding over the Parvati Valley from the ridge above Jari — one of the most spectacular launch points in the western Himalayas.", tag: "Seasonal", image: "/images/activities/paragliding.jpg", gradient: "linear-gradient(160deg,#1B2E1E,#1A1A1A)" },
  { name: "Billiards", icon: "○", desc: "A full-size billiards table in our recreation room. For evenings when the mountains are best appreciated from the warmth inside.", tag: "Indoor", image: "/images/activities/billiards.jpg", gradient: "linear-gradient(160deg,#1A1A1A,#3B2518)" },
  { name: "River Crossing", icon: "≋", desc: "Wade across the Parvati on a guided river crossing — ropes, trained instructors, and the extraordinary sensation of cold Himalayan water mid-stream.", tag: "Guided", image: "/images/activities/rivercrossing.jpg", gradient: "linear-gradient(160deg,#2A4530,#1A1A1A)" },
  { name: "Rappelling", icon: "↓", desc: "Controlled descent down rock faces with our certified instructors. A full briefing and safety orientation included. The valley view on the way down is unforgettable.", tag: "Guided", image: "/images/activities/rappelling.jpg", gradient: "linear-gradient(160deg,#3B2518,#1B2E1E)" },
  { name: "Rafting", icon: "≈", desc: "White water rafting on the Parvati — sections range from gentle floats to class III rapids depending on season. All safety equipment provided.", tag: "Seasonal", image: "/images/activities/rafting.jpg", gradient: "linear-gradient(160deg,#1B2E1E,#2A4530)" },
  { name: "Hot Air Ballooning", icon: "◉", desc: "Rise above the valley at dawn in a hot air balloon — deodar tops below, snow peaks above, and absolute silence 200 feet up. A rare experience in this part of the Himalayas.", tag: "Premium", image: "/images/activities/balloon.jpg", gradient: "linear-gradient(160deg,#5C3D2E,#1B2E1E)" },
];

export default function ActivitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-end pb-20 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/activities/climbing.jpg')", backgroundSize: "cover", backgroundPosition: "center 30%", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Adventures</p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            Adventure is the
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>beginning of everything</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20" style={{ background: "#111111" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "rgba(244,240,230,0.7)", lineHeight: 1.7 }}>
              14 ways to know the Parvati Valley. From the most intimate — a morning bird walk — to the most exhilarating — a hot air balloon at dawn. Every experience guided, every moment safe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ACTIVITY GRID — masonry editorial */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((act, i) => (
              <FadeIn key={act.name} delay={(i % 3) * 0.08}>
                <div
                  className="group relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: i === 0 || i === 5 || i === 10 ? "3/4" : "4/3" }}
                >
                  {/* Background */}
                  <div className="absolute inset-0" style={{ background: act.gradient }} />
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${act.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Tag */}
                  <div className="absolute top-5 right-5">
                    <span className="text-[9px] tracking-[0.25em] uppercase px-2 py-1" style={{ background: "rgba(201,168,76,0.15)", color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)", border: "1px solid rgba(201,168,76,0.25)" }}>
                      {act.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span style={{ color: "#C9A84C", fontSize: "18px" }}>{act.icon}</span>
                      <h3 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "1.5rem", color: "#F4F0E6" }}>{act.name}</h3>
                    </div>
                    <p className="text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-32 overflow-hidden" style={{ color: "rgba(244,240,230,0.7)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                      {act.desc}
                    </p>
                    <Link href="/contact" className="text-[10px] tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>
                      Enquire →
                    </Link>
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
          <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Every adventure begins with an enquiry
          </h2>
          <Link href="/contact" className="btn-ghost">Plan Your Activities</Link>
        </FadeIn>
      </section>
    </>
  );
}

"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const treks = [
  {
    name: "Khirganga",
    distance: "12 km",
    duration: "1–2 days",
    altitude: "2,960 m",
    difficulty: "Easy–Moderate",
    season: "May – Nov",
    desc: "The most popular trail from Kasol — and for good reason. A steady climb through pine and birch forest leads to natural hot springs at the top. The contrast of cold air and hot water is one of the great simple pleasures of Himalayan life.",
    gradient: "linear-gradient(160deg,#1B2E1E,#2A4530)",
    image: "/images/trekking/khirganga.jpg",
  },
  {
    name: "Malana Village",
    distance: "10 km",
    duration: "Day hike",
    altitude: "2,652 m",
    difficulty: "Moderate",
    season: "Apr – Nov",
    desc: "One of the oldest surviving democracies in the world, Malana is an ancient village that operates by its own laws and customs. The hike there is a study in contrast — lush valley to sparse highland. The village is extraordinary.",
    gradient: "linear-gradient(160deg,#2A4530,#1B2E1E)",
    image: "/images/trekking/malana.jpg",
  },
  {
    name: "Sar Pass",
    distance: "48 km",
    duration: "4–5 days",
    altitude: "4,270 m",
    difficulty: "Moderate–Challenging",
    season: "May – Jun",
    desc: "The definitive Parvati Valley high-altitude trek. Through meadows blanketed in wildflowers, past glacial lakes, to a pass where the world opens completely. The final ascent across a snowfield is a moment you will carry for years.",
    gradient: "linear-gradient(160deg,#5C3D2E,#1B2E1E)",
    image: "/images/trekking/sarpass.jpg",
  },
  {
    name: "Yanker Pass",
    distance: "55 km",
    duration: "5–6 days",
    altitude: "4,800 m",
    difficulty: "Challenging",
    season: "Jun – Sep",
    desc: "A less-trodden alternative to Sar Pass, offering greater solitude and more technical terrain. The high camp sits at 4,200m with a 360° panorama of the Kullu-Manali range. Recommended for experienced trekkers.",
    gradient: "linear-gradient(160deg,#1A1A1A,#1B2E1E)",
    image: "/images/trekking/yanker.jpg",
  },
  {
    name: "Pin Parbati Pass",
    distance: "90 km",
    duration: "7–9 days",
    altitude: "5,319 m",
    difficulty: "Very Challenging",
    season: "Aug – Sep",
    desc: "The great crossing — from the lush green Parvati Valley to the barren moonscape of Spiti. A high-altitude traverse that takes you over a glaciated pass above 5,300m. One of the most dramatic landscapes in India.",
    gradient: "linear-gradient(160deg,#1B2E1E,#5C3D2E)",
    image: "/images/trekking/pinparbati.jpg",
  },
  {
    name: "Shilla Snowline",
    distance: "18 km",
    duration: "Day hike",
    altitude: "3,500 m",
    difficulty: "Moderate",
    season: "May – Oct",
    desc: "A high-altitude day hike to the snowline above Shilla village. Dense forest gives way to alpine meadow gives way to permanent snow. The views of the Parvati Valley from the ridge are among the finest accessible in a single day.",
    gradient: "linear-gradient(160deg,#3B2518,#2A4530)",
    image: "/images/trekking/shilla.jpg",
  },
];

export default function TrekkingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-end pb-20 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/trekking/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Trekking from Kailasha</p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            The valley is the
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>trailhead</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20" style={{ background: "#111111" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "rgba(244,240,230,0.7)", lineHeight: 1.7 }}>
              Kailasha sits at the gateway of six of the finest treks in Himachal Pradesh. Day hikes and multi-day expeditions depart from steps away. Our in-house guides know every path, every season, every shortcut worth taking.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TREK CARDS — itinerary style */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto px-8 space-y-4">
          {treks.map((trek, i) => (
            <FadeIn key={trek.name} delay={i * 0.06}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden transition-all duration-500" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                {/* Image side */}
                <div
                  className={`lg:col-span-4 relative min-h-[240px] ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  style={{ background: trek.gradient }}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${trek.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  {/* Difficulty badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.25em] uppercase px-2 py-1" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>
                      {trek.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#F4F0E6" }}>{trek.name}</h2>
                    <span className="text-3xl mt-1" style={{ fontFamily: "var(--font-cormorant)", color: "rgba(201,168,76,0.2)", lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5">
                    {[
                      { label: "Distance", val: trek.distance },
                      { label: "Duration", val: trek.duration },
                      { label: "Max Altitude", val: trek.altitude },
                      { label: "Season", val: trek.season },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <p className="text-[9px] tracking-[0.3em] uppercase mb-0.5" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>{label}</p>
                        <p className="text-sm" style={{ color: "rgba(244,240,230,0.8)", fontFamily: "var(--font-jost)", fontWeight: 400 }}>{val}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.85 }}>{trek.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GUIDE NOTE */}
      <section className="py-20" style={{ background: "#111111" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Our Guides</p>
            <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "#F4F0E6", lineHeight: 1.7 }}>
              Every trek departs with a certified local guide who has walked these routes across every season. Safety briefings, permits, equipment, and lunch packs included.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-ghost">Plan Your Trek</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

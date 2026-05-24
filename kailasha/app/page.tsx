"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import EnquireModal from "@/components/EnquireModal";
import TonightAtKailasha from "@/components/TonightAtKailasha";
import PlanMyStay from "@/components/PlanMyStay";
import CountUp from "@/components/CountUp";

// Seasonal copy — computed once at module level (server + client same)
function getSeason() {
  const m = new Date().getMonth();
  if (m >= 11 || m <= 1) return { label: "Winter", badge: "Snow on the peaks", tagline: "Where the Himalayas become home" };
  if (m >= 2 && m <= 4) return { label: "Spring", badge: "The valley is blooming", tagline: "Where the Himalayas come alive" };
  if (m >= 5 && m <= 8) return { label: "Monsoon", badge: "Mist rolls through the deodar", tagline: "Where the Himalayas breathe" };
  return { label: "Autumn", badge: "Apple season · Golden light", tagline: "Where the Himalayas glow" };
}

const SEASON = getSeason();

// Scroll storytelling chapters
const STORY_CHAPTERS = [
  { text: "1,500 metres above the world.", sub: "" },
  { text: "Built without cement. Built by hand.", sub: "The Kathkunia tradition" },
  { text: "Where the Parvati never stops singing.", sub: "" },
  { text: "Kailasha.", sub: "The Himalayan Village" },
];

// Fade-in on scroll — only runs after mount so SSR shows content visible
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={mounted ? { opacity: 0, y: 30 } : false}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const rooms = [
  {
    name: "Ghor",
    sub: "Superior Cottage",
    price: "₹22,000",
    size: "650 sq ft",
    gradient: "linear-gradient(160deg,#1B2E1E,#2A4530,#1A1A1A)",
    image: "/images/rooms/ghor.jpg",
  },
  {
    name: "Dhara",
    sub: "Deluxe Cottage",
    price: "₹28,000",
    size: "650 sq ft",
    gradient: "linear-gradient(160deg,#2A4530,#1B2E1E,#5C3D2E)",
    image: "/images/rooms/dhara.jpg",
  },
  {
    name: "Kothi",
    sub: "Deluxe Cottage",
    price: "₹31,000",
    size: "650 sq ft",
    gradient: "linear-gradient(160deg,#5C3D2E,#3B2518,#1A1A1A)",
    image: "/images/rooms/kothi.jpg",
  },
  {
    name: "Shoron",
    sub: "Machan Suite",
    price: "₹63,000",
    size: "750 sq ft",
    badge: "Signature",
    gradient: "linear-gradient(160deg,#1A1A1A,#1B2E1E,#3B2518)",
    image: "/images/rooms/shoron.jpg",
  },
  {
    name: "Kothi Shoron",
    sub: "Royal Cottage",
    price: "₹1,37,000",
    size: "1400 sq ft",
    badge: "Ultra Premium",
    gradient: "linear-gradient(160deg,#3B2518,#5C3D2E,#1B2E1E)",
    image: "/images/rooms/kothi-shoron.jpg",
  },
];

const experienceTeasers = [
  {
    icon: "⌂",
    title: "Kathkunia Architecture",
    short: "A vanishing art, preserved in stone and wood.",
    long: "Traditional Pahari craftsmanship — built without a nail of cement. Hand-carved deodar wood, interlocking stone walls, and centuries-old techniques breathe life into every stay.",
  },
  {
    icon: "♨",
    title: "Himalayan Cuisine",
    short: "Fire-cooked. Farm-to-table. Soul-deep.",
    long: "Vegetables from our own garden. Siddu slow-cooked for 3 hours. Patroras that melt on the tongue. Every dish a story, every meal a ceremony.",
  },
  {
    icon: "◈",
    title: "Adventures & Wellness",
    short: "Trekking to snowlines. Healing by the river.",
    long: "From Sar Pass treks and trout angling to spa rituals and the Alchemist Initiation. Adventure at dawn, stillness by dusk.",
  },
];

const galleryGradients = [
  "linear-gradient(135deg,#1B2E1E,#2A4530)",
  "linear-gradient(135deg,#5C3D2E,#3B2518)",
  "linear-gradient(135deg,#1A1A1A,#1B2E1E)",
  "linear-gradient(135deg,#2A4530,#5C3D2E)",
  "linear-gradient(135deg,#1B2E1E,#1A1A1A)",
  "linear-gradient(135deg,#3B2518,#1B2E1E)",
];

// Single chapter with its own useTransform — hooks-rules safe
function StoryChapter({ progress, index, total, chapter }: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number; total: number;
  chapter: { text: string; sub: string };
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid - 0.04, mid + 0.04, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [30, 0, -30]);
  return (
    <motion.div style={{ opacity, y }} className="absolute text-center px-8 max-w-3xl pointer-events-none">
      <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "#F4F0E6", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
        {chapter.text}
      </p>
      {chapter.sub && (
        <p className="mt-5 text-[10px] tracking-[0.5em] uppercase" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>
          {chapter.sub}
        </p>
      )}
    </motion.div>
  );
}

// Inner component — only rendered client-side so sectionRef is always hydrated
function ScrollStoryInner() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  return (
    <section ref={sectionRef} style={{ height: "400vh", background: "#080808" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(27,46,30,0.25) 0%, transparent 70%)" }} />
        {STORY_CHAPTERS.map((chapter, i) => (
          <StoryChapter key={i} progress={scrollYProgress} index={i} total={STORY_CHAPTERS.length} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}

// Outer wrapper — shows placeholder on SSR, real component after hydration
function ScrollStory() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <section style={{ height: "400vh", background: "#080808" }} />;
  return <ScrollStoryInner />;
}

export default function HomePage() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#1B2E1E" }}
      >
        {/* Cinematic Ken Burns hero — CSS handles the motion */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="hero-kenburns absolute inset-0"
            style={{ backgroundImage: "url('/images/home/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

        {/* Seasonal badge */}
        <div className="absolute top-24 right-6 hidden lg:flex items-center gap-2 px-4 py-2" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}>
          <span style={{ color: "#C9A84C", fontSize: "8px" }}>●</span>
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)" }}>{SEASON.badge}</span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 w-full">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-8" style={{ color: "rgba(201,168,76,0.85)", fontFamily: "var(--font-jost)", fontWeight: 400 }}>
            Kasol · Parvati Valley · Himachal Pradesh
          </p>
          <h1
            className="leading-none mb-5"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(5rem, 16vw, 14rem)", letterSpacing: "-0.02em", color: "#F4F0E6" }}
          >
            Kailasha
          </h1>
          <p className="text-[12px] tracking-[0.45em] uppercase mb-10" style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
            The Himalayan Village
          </p>
          <p className="text-xl md:text-2xl mb-12" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "rgba(244,240,230,0.6)" }}>
            {SEASON.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setEnquireOpen(true)} className="btn-ghost">Enquire Now</button>
            <a href="https://www.thehimalayanvillage.in/calender.html" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book Your Stay
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "rgba(244,240,230,0.3)", fontFamily: "var(--font-jost)" }}>Scroll</span>
          {mounted ? (
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
          ) : (
            <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
          )}
        </div>
      </section>

      {/* ── SCROLL STORYTELLING ───────────────────────────────────────── */}
      <ScrollStory />

      {/* ── BRAND STORY STRIP ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left: Image */}
          <div
            className="relative min-h-[50vh] lg:min-h-auto"
            style={{
              backgroundImage: "url('/images/home/story.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#1B2E1E",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
          </div>

          {/* Right: Copy */}
          <div className="flex items-center px-10 lg:px-16 py-20" style={{ background: "#111111" }}>
            <FadeIn className="max-w-lg">
              <p
                className="text-[10px] tracking-[0.4em] uppercase mb-6"
                style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
              >
                Our Story
              </p>
              <h2
                className="leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontStyle: "italic",
                  color: "#F4F0E6",
                }}
              >
                &ldquo;Surrounded by ancient deodar forests, kissed by the Parvati river, and built without a drop of cement —
              </h2>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontStyle: "italic",
                  color: "#C9A84C",
                }}
              >
                this is Kailasha.&rdquo;
              </h2>
              <p
                className="text-sm leading-relaxed mb-10"
                style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                Founded with a vision to preserve the Kathkunia tradition of the Pahari people, Kailasha is not just a resort — it is a living inheritance. A place where architecture becomes meditation, and every stay is a return to something essential.
              </p>
              <Link href="/about" className="btn-ghost">
                Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#080808", borderTop: "1px solid rgba(201,168,76,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: 1500, suffix: "m", label: "Above Sea Level", sep: false },
              { value: 240, suffix: "+", label: "Bird Species", sep: false },
              { value: 0, suffix: " drops", label: "of Cement Used", sep: false },
              { value: 5, suffix: "", label: "Unique Stays", sep: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 px-8 text-center"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(201,168,76,0.1)" : undefined,
                }}
              >
                <p
                  className="mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#C9A84C" }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} duration={2.2} />
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(244,240,230,0.35)", fontFamily: "var(--font-jost)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION PREVIEW ─────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
            >
              Where You Stay
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#F4F0E6",
              }}
            >
              Five Distinct Escapes
            </h2>
          </FadeIn>

          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 lg:grid lg:grid-cols-5 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0 snap-x snap-mandatory">
            {rooms.map((room) => (
              <motion.div
                key={room.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative flex-shrink-0 w-72 lg:w-auto snap-start cursor-pointer"
                style={{ opacity: 1 }}
              >
                <div
                  className="relative h-96 overflow-hidden"
                  style={{ background: room.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${room.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  {room.badge && (
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[9px] tracking-[0.3em] uppercase border px-3 py-1"
                        style={{
                          color: "#C9A84C",
                          borderColor: "rgba(201,168,76,0.4)",
                          fontFamily: "var(--font-jost)",
                        }}
                      >
                        {room.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href="/stays" className="btn-ghost text-xs py-2 px-6">
                      Explore
                    </Link>
                  </div>
                </div>
                <div className="pt-5 pb-2">
                  <h3
                    className="text-2xl mb-1"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}
                  >
                    {room.name}
                  </h3>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}
                  >
                    {room.sub} · {room.size}
                  </p>
                  <p className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>
                    from {room.price}
                    <span style={{ color: "rgba(244,240,230,0.3)", fontSize: "10px" }}> / night</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.2} className="text-center mt-14">
            <Link href="/stays" className="btn-ghost">
              View All Accommodations
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── TONIGHT AT KAILASHA ───────────────────────────────────────── */}
      <TonightAtKailasha />

      {/* ── EXPERIENCES TEASER ────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
            >
              The Kailasha Way
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#F4F0E6",
              }}
            >
              Every moment, curated
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.1)" }}>
            {experienceTeasers.map((exp, i) => (
              <div
                key={exp.title}
                onMouseEnter={() => setHoveredExp(i)}
                onMouseLeave={() => setHoveredExp(null)}
                className="relative p-12 cursor-default overflow-hidden transition-colors duration-500"
                style={{ background: hoveredExp === i ? "linear-gradient(135deg,#1B2E1E,#1A1A1A)" : "#0D0D0D" }}
              >
                <span className="text-4xl block mb-6" style={{ color: "#C9A84C" }}>{exp.icon}</span>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {hoveredExp === i ? exp.long : exp.short}
                </p>
              </div>
            ))}
          </div>

          <FadeIn delay={0.2} className="text-center mt-16">
            <Link href="/experiences" className="btn-ghost">
              Discover Experiences
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── POPULARITY STRIP ──────────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-6"
              style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
            >
              Recognition
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontStyle: "italic",
                color: "#F4F0E6",
              }}
            >
              Loved by those who seek the extraordinary
            </h2>
            <div className="flex items-center gap-4 justify-center my-10">
              <div className="gold-line" />
              <span style={{ color: "#C9A84C", fontSize: "12px" }}>✦</span>
              <div className="gold-line" />
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
              {["Lucky Ali", "Arijit Singh", "Vijay Raaz", "Radhika Apte"].map((name) => (
                <span
                  key={name}
                  className="text-sm tracking-widest"
                  style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {name}
                </span>
              ))}
            </div>
            <div
              className="inline-flex items-center gap-3 px-8 py-4"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="text-2xl" style={{ color: "#C9A84C" }}>★★★★★</div>
              <div className="text-left">
                <p className="text-sm" style={{ color: "#F4F0E6", fontFamily: "var(--font-jost)", fontWeight: 500 }}>
                  TripAdvisor Certified
                </p>
                <p
                  className="text-[10px] tracking-widest"
                  style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}
                >
                  Travellers&apos; Choice
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── GALLERY STRIP ─────────────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: "#111111" }}>
        <div className="text-center py-16">
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-3"
            style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
          >
            Follow the Journey
          </p>
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "rgba(244,240,230,0.8)" }}
          >
            @thehimalayanvillage
          </h2>
        </div>

        <div className="relative flex overflow-hidden pb-16">
          {mounted ? (
            <motion.div
              className="flex gap-4 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-80 relative overflow-hidden"
                  style={{ background: galleryGradients[i % galleryGradients.length] }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('/images/home/gallery-${(i % 6) + 1}.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="flex gap-4 min-w-max">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-80"
                  style={{ background: galleryGradients[i % galleryGradients.length] }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PLAN MY STAY ─────────────────────────────────────────────── */}
      <PlanMyStay />

      {/* ── TESTIMONIAL TEASER ────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span
              className="text-6xl leading-none block mb-8"
              style={{ fontFamily: "var(--font-cormorant)", color: "#C9A84C" }}
            >
              &ldquo;
            </span>
            <blockquote
              className="text-2xl md:text-3xl leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "#F4F0E6" }}
            >
              Par excellence when it comes to ambiance, food &amp; beverage, creature comforts, theme and location.
            </blockquote>
            <div className="flex items-center gap-4 justify-center mb-2">
              <div className="gold-line" />
              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}
              >
                Rajesh K.
              </p>
              <div className="gold-line" />
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-sm" style={{ color: "#C9A84C" }}>★</span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-12">
            <Link href="/testimonials" className="btn-ghost">
              Read All Stories
            </Link>
          </FadeIn>
        </div>
      </section>

      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  );
}

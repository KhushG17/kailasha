"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import EnquireModal from "@/components/EnquireModal";

const rooms = [
  {
    name: "Ghor",
    sub: "Superior Cottage",
    price: "₹22,000",
    size: "650 sq ft",
    units: "3 Units",
    image: "/images/rooms/ghor.jpg",
    gradient: "linear-gradient(160deg,#1B2E1E,#2A4530)",
    amenities: ["King double bed", "Fireside seating", "Mini bar & fridge", "Study & dressing room", "Personal lawn", "Antique furniture", "Mountain views"],
    desc: "A celebration of traditional Kathkunia craftsmanship. Stone walls, deodar beams, and a personal lawn that opens to the valley. Perfect for a first taste of Himalayan luxury.",
    imageRight: false,
    badge: null,
  },
  {
    name: "Dhara",
    sub: "Deluxe Cottage",
    price: "₹28,000",
    size: "650 sq ft",
    units: "3 Units",
    image: "/images/rooms/dhara.jpg",
    gradient: "linear-gradient(160deg,#2A4530,#5C3D2E)",
    amenities: ["King double bed", "Fireside seating", "Mini bar & fridge", "Study & dressing room", "Personal lawn", "Antique furniture", "Elevated finishes"],
    desc: "All the poetry of Ghor, elevated. Dhara carries a finer finish — richer textures, more curated detail — for those who want the full Kathkunia experience with a touch more luxury.",
    imageRight: true,
    badge: null,
  },
  {
    name: "Kothi",
    sub: "Deluxe Cottage",
    price: "₹31,000",
    size: "650 sq ft",
    units: null,
    image: "/images/rooms/kothi.jpg",
    gradient: "linear-gradient(160deg,#5C3D2E,#3B2518)",
    amenities: ["King double bed", "Fireside seating", "Mini bar & fridge", "Study & dressing room", "Private garden", "Antique teak furniture", "Enhanced privacy"],
    desc: "Kothi offers the most private orientation among the ground cottages — secluded, intimate, with a garden that feels entirely your own. A retreat within a retreat.",
    imageRight: false,
    badge: null,
  },
  {
    name: "Shoron",
    sub: "Machan Suite",
    price: "₹63,000",
    size: "750 sq ft",
    units: "2 Units",
    image: "/images/rooms/shoron.jpg",
    gradient: "linear-gradient(160deg,#1A1A1A,#1B2E1E)",
    amenities: ["Treehouse-style elevation", "Canopy views of deodar forest", "River glimpses", "Private machan deck", "King bed with heritage frame", "Rainfall shower", "Floor-to-ceiling forest views"],
    desc: "Elevated above the forest floor, Shoron is our signature stay. A treehouse for adults — perched among the deodar canopy, with the Parvati river glimpsing through the trees below. Utterly unlike anything else.",
    imageRight: true,
    badge: "Signature Stay",
  },
  {
    name: "Kothi Shoron",
    sub: "Royal Cottage",
    price: "₹1,37,000",
    size: "1400 sq ft",
    units: null,
    image: "/images/rooms/kothi-shoron.jpg",
    gradient: "linear-gradient(160deg,#3B2518,#5C3D2E)",
    amenities: ["1400 sq ft of pure luxury", "Double living areas", "Private plunge terrace", "Full dining setup", "Master suite with antique canopy bed", "Walk-in dressing room", "Panoramic forest & river views", "Dedicated butler service"],
    desc: "The ultimate Himalayan indulgence. Kothi Shoron is more than a room — it is an estate. Expansive, exquisitely furnished, and so private it feels like the entire valley belongs to you alone.",
    imageRight: false,
    badge: "Ultra Premium",
  },
];

const tariff = [
  { room: "Ghor", base: "22,000", bd: "26,500", all: "31,000" },
  { room: "Dhara", base: "28,000", bd: "32,500", all: "37,000" },
  { room: "Kothi", base: "31,000", bd: "35,500", all: "40,000" },
  { room: "Shoron", base: "63,000", bd: "67,500", all: "72,000" },
  { room: "Kothi Shoron", base: "1,37,000", bd: "1,41,500", all: "1,46,000" },
];

export default function StaysPage() {
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/rooms/aerial.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Accommodations</p>
          <h1 className="leading-none" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            Stay in a living heritage
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20" style={{ background: "#111111" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-xl leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", color: "rgba(244,240,230,0.7)", fontSize: "1.4rem" }}>
              Five categories of accommodation, each a distinct interpretation of Himalayan living. From forest-floor cottages to treetop machan suites — every space built by hand, designed to make you forget the world outside.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ROOM SECTIONS */}
      {rooms.map((room, i) => (
        <section key={room.name} className="relative overflow-hidden" style={{ background: i % 2 === 0 ? "#0D0D0D" : "#111111" }}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]`}>
            {/* Image */}
            <div
              className={`relative min-h-[60vh] lg:min-h-auto ${room.imageRight ? "lg:order-2" : ""}`}
              style={{ background: room.gradient }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: `url('${room.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              {room.badge && (
                <div className="absolute top-8 left-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase px-4 py-2" style={{ color: "#C9A84C", border: "1px solid rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)", background: "rgba(0,0,0,0.4)" }}>
                    {room.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className={`flex items-center px-10 lg:px-16 py-20 ${room.imageRight ? "lg:order-1" : ""}`}>
              <FadeIn direction={room.imageRight ? "right" : "left"} className="max-w-lg w-full">
                <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>{room.sub}</p>
                <h2 className="mb-2 leading-none" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 6vw, 5rem)", color: "#F4F0E6" }}>{room.name}</h2>
                <div className="flex gap-6 mb-8">
                  <span className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>from {room.price}<span style={{ color: "rgba(244,240,230,0.3)", fontSize: "11px" }}>/night</span></span>
                  <span className="text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}>{room.size}</span>
                  {room.units && <span className="text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}>{room.units}</span>}
                </div>
                <div className="gold-line mb-8" style={{ margin: 0, marginBottom: "2rem" }} />
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>{room.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-10">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <span style={{ color: "#C9A84C", fontSize: "10px" }}>—</span>
                      <span className="text-xs" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{a}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setEnquireOpen(true)} className="btn-ghost">Enquire About {room.name}</button>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* TARIFF TABLE */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Rates</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Tariff & Meal Plans</h2>
            <p className="text-sm mt-4" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>All rates in INR per night for two guests · Taxes extra</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* Desktop table */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-0 mb-0">
                <div className="py-4 px-6" style={{ background: "rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
                  <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Room</p>
                </div>
                {["Breakfast Only", "Breakfast + Dinner", "All Meals"].map((plan) => (
                  <div key={plan} className="py-4 px-6 text-center" style={{ background: "rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.2)", borderLeft: "1px solid rgba(201,168,76,0.1)" }}>
                    <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>{plan}</p>
                  </div>
                ))}
              </div>
              {tariff.map((row, i) => (
                <div key={row.room} className="grid grid-cols-4 gap-0" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                  <div className="py-5 px-6">
                    <p className="text-base" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{row.room}</p>
                  </div>
                  {[row.base, row.bd, row.all].map((price, j) => (
                    <div key={j} className="py-5 px-6 text-center" style={{ borderLeft: "1px solid rgba(201,168,76,0.08)" }}>
                      <p className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>₹{price}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {tariff.map((row) => (
                <div key={row.room} className="p-5" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                  <p className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "1.3rem", color: "#F4F0E6" }}>{row.room}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[{ label: "Breakfast", price: row.base }, { label: "B + Dinner", price: row.bd }, { label: "All Meals", price: row.all }].map(({ label, price }) => (
                      <div key={label} className="text-center py-3" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
                        <p className="text-[9px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>{label}</p>
                        <p className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)", fontWeight: 500 }}>₹{price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Discounts */}
          <FadeIn delay={0.15} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "4+ Night Stay", val: "10% off" },
              { label: "6+ Night Stay", val: "20% off" },
              { label: "Repeat Guests", val: "Special rates" },
            ].map(({ label, val }) => (
              <div key={label} className="text-center py-6 px-4" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                <p className="text-2xl mb-1" style={{ fontFamily: "var(--font-cormorant)", color: "#C9A84C" }}>{val}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* POLICIES */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4F0E6" }}>Policies & Guidelines</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Check-in / Check-out", body: "Check-in from 1:00 PM · Check-out by 12:00 PM noon. Early check-in and late check-out subject to availability." },
                { title: "Cancellation Policy", body: "More than 30 days: 90% refund · 8–30 days: 70% refund · Less than 7 days: No refund. Blackout period 24 Dec – 2 Jan: Non-refundable." },
                { title: "Children Policy", body: "Children above 5 years welcome. Extra bed charges applicable for children above 10 years. Infants stay complimentary." },
                { title: "Blackout Dates", body: "24 December – 2 January: Peak season rates apply. No discounts or cancellations during blackout period." },
                { title: "Pet Policy", body: "We are a pet-friendly resort. Please inform us in advance. Pets must be kept on leash in common areas." },
                { title: "Meals", body: "All meal packages are per room, for two adults. Additional guests charged per head. Special dietary requirements accommodated with prior notice." },
              ].map(({ title, body }) => (
                <div key={title} className="p-6" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                  <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BOOK CTA */}
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "#F4F0E6" }}>
            Your room in the mountains awaits
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.thehimalayanvillage.in/calender.html" target="_blank" rel="noopener noreferrer" className="btn-gold">Book Now</a>
            <button onClick={() => setEnquireOpen(true)} className="btn-ghost">Enquire</button>
          </div>
        </FadeIn>
      </section>

      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  );
}

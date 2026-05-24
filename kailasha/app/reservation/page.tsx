"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const rates = [
  { room: "Ghor", sub: "Superior Cottage", size: "650 sq ft", base: "22,000", bd: "26,500", all: "31,000" },
  { room: "Dhara", sub: "Deluxe Cottage", size: "650 sq ft", base: "28,000", bd: "32,500", all: "37,000" },
  { room: "Kothi", sub: "Deluxe Cottage", size: "650 sq ft", base: "31,000", bd: "35,500", all: "40,000" },
  { room: "Shoron", sub: "Machan Suite", size: "750 sq ft", base: "63,000", bd: "67,500", all: "72,000" },
  { room: "Kothi Shoron", sub: "Royal Cottage", size: "1400 sq ft", base: "1,37,000", bd: "1,41,500", all: "1,46,000" },
];

const inclusions = [
  "Accommodation in chosen room category",
  "Complimentary welcome drink on arrival",
  "All meals as per chosen plan",
  "Evening bonfire (seasonal)",
  "Complimentary tea & coffee throughout the day",
  "In-house Wi-Fi access",
  "Access to all common areas",
  "Luggage assistance",
];

const faqs = [
  { q: "What is the cancellation policy?", a: "More than 30 days before arrival: 90% refund. 8–30 days: 70% refund. Less than 7 days: No refund. Blackout period (24 Dec – 2 Jan): Non-refundable." },
  { q: "Are taxes included in the rates?", a: "All rates are exclusive of applicable taxes (currently 12% GST). The final amount will be calculated at checkout." },
  { q: "What is the blackout period?", a: "24 December through 2 January is our peak blackout period. No discounts apply, and all bookings are non-refundable." },
  { q: "Do you offer long-stay discounts?", a: "Yes. 10% off on stays of 4 or more nights. 20% off on stays of 6 or more nights. Discount applied automatically at booking." },
  { q: "Can I modify my booking?", a: "Date modifications are accepted subject to availability. Please contact us at least 15 days in advance for modifications." },
  { q: "What is the check-in/check-out time?", a: "Check-in is from 1:00 PM. Check-out is by 12:00 PM (noon). Early check-in and late check-out can be arranged subject to availability." },
];

export default function ReservationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 px-8">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Rates & Reservation</p>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>Tariff</h1>
          <p style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300, fontSize: "0.9rem" }}>All rates in INR per room per night · Taxes extra</p>
        </div>
      </section>

      {/* RATE CARD */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn>
            {/* Column headers */}
            <div className="grid grid-cols-5 gap-0 mb-0 hidden md:grid">
              <div className="col-span-2 py-5 px-6" style={{ background: "rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Room Type</p>
              </div>
              {["Breakfast Only", "Breakfast + Dinner", "All Meals"].map((plan, i) => (
                <div key={plan} className="py-5 px-4 text-center" style={{ background: i === 2 ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.2)", borderLeft: "1px solid rgba(201,168,76,0.1)" }}>
                  <p className="text-[9px] tracking-[0.25em] uppercase" style={{ color: i === 2 ? "#C9A84C" : "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>{plan}</p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {rates.map((row, i) => (
              <div key={row.room}>
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-5 gap-0" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)", background: i % 2 !== 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                  <div className="col-span-2 py-6 px-6">
                    <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "1.3rem", color: "#F4F0E6" }}>{row.room}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(244,240,230,0.35)", fontFamily: "var(--font-jost)" }}>{row.sub} · {row.size}</p>
                  </div>
                  {[row.base, row.bd, row.all].map((price, j) => (
                    <div key={j} className="py-6 px-4 flex items-center justify-center" style={{ borderLeft: "1px solid rgba(201,168,76,0.08)" }}>
                      <p className="text-base" style={{ color: j === 2 ? "#C9A84C" : "rgba(201,168,76,0.7)", fontFamily: "var(--font-jost)", fontWeight: j === 2 ? 500 : 300 }}>₹{price}</p>
                    </div>
                  ))}
                </div>

                {/* Mobile */}
                <div className="md:hidden py-6 px-0" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  <p className="mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "1.3rem", color: "#F4F0E6" }}>{row.room}</p>
                  <p className="text-xs mb-4" style={{ color: "rgba(244,240,230,0.35)", fontFamily: "var(--font-jost)" }}>{row.sub} · {row.size}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: "Breakfast", price: row.base }, { label: "B+D", price: row.bd }, { label: "All Meals", price: row.all }].map(({ label, price }) => (
                      <div key={label} className="text-center p-3" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                        <p className="text-[9px] tracking-widest uppercase mb-1" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>{label}</p>
                        <p className="text-sm" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>₹{price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Discount note */}
            <div className="mt-8 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="flex flex-wrap gap-x-12 gap-y-2">
                {[{ label: "4+ nights", val: "10% off" }, { label: "6+ nights", val: "20% off" }, { label: "Blackout: 24 Dec – 2 Jan", val: "Peak rates" }].map(({ label, val }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span style={{ color: "#C9A84C", fontFamily: "var(--font-jost)", fontWeight: 500, fontSize: "0.9rem" }}>{val}</span>
                    <span className="text-xs" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>What&apos;s Included</p>
              <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4F0E6" }}>Every stay includes</h2>
              <div className="space-y-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span style={{ color: "#C9A84C", fontSize: "12px", marginTop: "3px" }}>—</span>
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Book Now</p>
              <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4F0E6" }}>Reserve your stay</h2>
              <div className="space-y-4">
                <a href="https://www.thehimalayanvillage.in/calender.html" target="_blank" rel="noopener noreferrer" className="btn-gold block text-center">Check Availability</a>
                <a href="https://crs.resavenue.com/res_mars_new/proceedtoPayment?pid=PROP5222" target="_blank" rel="noopener noreferrer" className="btn-ghost block text-center">Quick Pay</a>
                <a href="tel:+919805072712" className="btn-ghost block text-center">Call to Book</a>
              </div>
              <p className="mt-6 text-xs text-center" style={{ color: "rgba(244,240,230,0.3)", fontFamily: "var(--font-jost)" }}>Secure payment · Instant confirmation · 24hr support</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Policies</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>Frequently asked</h2>
          </FadeIn>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                  <button
                    className="w-full text-left py-6 flex items-start justify-between gap-6"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-base" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6", fontSize: "1.1rem" }}>{faq.q}</span>
                    <span style={{ color: "#C9A84C", fontSize: "20px", flexShrink: 0, lineHeight: 1 }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-6">
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.8 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }} />
          </div>
        </div>
      </section>
    </>
  );
}

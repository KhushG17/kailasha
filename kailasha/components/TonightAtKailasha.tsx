"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IST_OFFSET = 5.5 * 60; // minutes

function getISTHour(): number {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + IST_OFFSET * 60000).getHours();
}

function getMonth(): number {
  return new Date().getMonth(); // 0-indexed
}

function getSchedule(hour: number, month: number) {
  // Seasonal modifiers
  const season =
    month >= 11 || month <= 1 ? "winter" :
    month >= 2 && month <= 4 ? "spring" :
    month >= 5 && month <= 8 ? "monsoon" : "autumn";

  const seasonNote: Record<string, string> = {
    winter: "Snow on the peaks tonight.",
    spring: "The valley is blooming.",
    monsoon: "Mist rolls through the deodar. The Parvati roars.",
    autumn: "Golden light. Apple season. The air is crisp.",
  };

  const slots = [
    { start: 5, end: 7, title: "Dawn Walks Begin", desc: "The valley wakes. Dew on the deodar, mist on the river. Our guides depart at 5:30 AM.", icon: "☽" },
    { start: 7, end: 10, title: "Breakfast is Served", desc: "Farm-fresh spread in the dining hall. Siddu, eggs, and our house coffee — made the old way.", icon: "◌" },
    { start: 10, end: 13, title: "The Valley is Open", desc: "Treks depart. The jeep safari loads. The river calls. The morning is entirely yours.", icon: "◈" },
    { start: 13, end: 15, title: "Lunch on the Terrace", desc: "Himachali thali served with a side of Parvati Valley views. The kitchen stays open.", icon: "◉" },
    { start: 15, end: 17, title: "The Quiet Hours", desc: "The spa is warm. The hammocks are free. The deodar garden is for those who know how to do nothing.", icon: "≈" },
    { start: 17, end: 19, title: "The Bar Opens", desc: "Sundowners on the terrace. The light on the peaks turns gold. House cocktails, curated wines.", icon: "♨" },
    { start: 19, end: 22, title: "Dinner Under the Stars", desc: "The dining hall glows tonight. Jungle Barbeque is lit by the river — reservation only.", icon: "✦" },
    { start: 22, end: 24, title: "The Night is Yours", desc: "No light pollution for miles. At 1,500 metres, the sky becomes the ceiling. Lie back.", icon: "◎" },
    { start: 0, end: 5, title: "The Mountain Sleeps", desc: "The Parvati never stops. Its sound is constant, ancient, and entirely free. Sleep well.", icon: "—" },
  ];

  const current = slots.find(s => hour >= s.start && hour < s.end) || slots[slots.length - 1];

  // Next slot
  const idx = slots.indexOf(current);
  const next = slots[(idx + 1) % slots.length];

  return { current, next, seasonNote: seasonNote[season], season };
}

export default function TonightAtKailasha() {
  const [hour, setHour] = useState<number | null>(null);
  const [month, setMonth] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setHour(getISTHour());
    setMonth(getMonth());
    const id = setInterval(() => {
      setHour(getISTHour());
      setTick(t => t + 1);
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (hour === null) return null;

  const { current, next, seasonNote } = getSchedule(hour, month);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utcNow + IST_OFFSET * 60000);
  const timeStr = `${pad(ist.getHours())}:${pad(ist.getMinutes())} IST`;

  return (
    <section className="section-padding" style={{ background: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>
            Live · Kailasha Time
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>
            Right now at Kailasha
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
          {/* Current slot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="p-10 lg:p-14"
              style={{ borderRight: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}
            >
              <div className="flex items-start justify-between mb-8">
                <span style={{ fontSize: "2.5rem", color: "#C9A84C" }}>{current.icon}</span>
                <div className="text-right">
                  <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.4)", fontFamily: "var(--font-jost)" }}>Now</span>
                  <p className="text-xs mt-1" style={{ color: "rgba(244,240,230,0.2)", fontFamily: "var(--font-jost)" }}>{timeStr}</p>
                </div>
              </div>
              <h3 className="mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.9rem", color: "#F4F0E6" }}>{current.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300, lineHeight: 1.85 }}>{current.desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* Season + Next */}
          <div className="flex flex-col">
            <div className="p-10 lg:p-14 flex-1" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
              <p className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.4)", fontFamily: "var(--font-jost)" }}>The Valley Tonight</p>
              <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "1.25rem", color: "rgba(244,240,230,0.8)", lineHeight: 1.6 }}>
                &ldquo;{seasonNote}&rdquo;
              </p>
            </div>
            <div className="p-10 lg:p-14">
              <p className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.4)", fontFamily: "var(--font-jost)" }}>Coming Up</p>
              <div className="flex items-center gap-3">
                <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "1.2rem" }}>{next.icon}</span>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", color: "rgba(244,240,230,0.5)" }}>{next.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHEN_OPTIONS = [
  { id: "soon", label: "Next 4 weeks", icon: "◈" },
  { id: "month", label: "1–3 months away", icon: "◉" },
  { id: "season", label: "Planning ahead", icon: "◎" },
  { id: "flex", label: "Flexible dates", icon: "≈" },
];
const WHO_OPTIONS = [
  { id: "solo", label: "Solo Escape", icon: "—" },
  { id: "couple", label: "Romantic Retreat", icon: "✦" },
  { id: "family", label: "Family Adventure", icon: "⌂" },
  { id: "group", label: "Group Getaway", icon: "◈" },
];
const VIBE_OPTIONS = [
  { id: "trek", label: "Trekking & Adventure", icon: "▲" },
  { id: "wellness", label: "Spa & Wellness", icon: "◌" },
  { id: "dining", label: "Gourmet & Culture", icon: "♨" },
  { id: "work", label: "Workation", icon: "◉" },
  { id: "wedding", label: "Destination Wedding", icon: "✦" },
  { id: "all", label: "A Bit of Everything", icon: "≈" },
];
const NIGHTS_OPTIONS = [
  { id: "2", label: "2 nights" },
  { id: "3-4", label: "3–4 nights" },
  { id: "5-7", label: "5–7 nights" },
  { id: "week+", label: "A week or more" },
];

type Step = "when" | "who" | "vibe" | "nights" | "result";

interface Selection { when?: string; who?: string; vibe?: string; nights?: string; }

function recommend(s: Selection) {
  if (s.who === "solo" && (s.vibe === "wellness" || s.vibe === "trek")) return { room: "Ghor – Superior Cottage", reason: "Intimate, forested, and entirely your own." };
  if (s.who === "couple" || s.vibe === "wellness") return { room: "Shoron – Machan Suite", reason: "Elevated, private, and designed for romance." };
  if (s.who === "family" || s.nights === "week+") return { room: "Kothi Shoron – Royal Cottage", reason: "1,400 sq ft of space with a private garden — the most expansive stay on the property." };
  if (s.vibe === "work") return { room: "Kothi – Deluxe Cottage", reason: "Quiet location, strong light, and the kind of mountain air that clears a mind in minutes." };
  if (s.vibe === "wedding") return { room: "Kothi Shoron – Royal Cottage", reason: "The grandest cottage for the most significant stay." };
  return { room: "Dhara – Deluxe Cottage", reason: "A perfectly balanced stay — views, comfort, and space." };
}

function experiences(s: Selection): string[] {
  const base: string[] = [];
  if (s.vibe === "trek" || s.vibe === "all") base.push("Guided Sar Pass Trek", "Nature Walk at Dawn");
  if (s.vibe === "wellness" || s.vibe === "all") base.push("Himalayan Spa Session", "Parvati River Meditation");
  if (s.vibe === "dining" || s.vibe === "all") base.push("Jungle Barbeque by the River", "Siddu Cooking Experience");
  if (s.vibe === "work") base.push("Private Terrace Work Setup", "Evening Jeep Safari");
  if (s.vibe === "wedding") base.push("Site Visit & Planning Session", "Private Dining Setup");
  if (base.length === 0) base.push("Open Jeep Valley Safari", "Trout Angling in the Parvati", "Stargazing Evening");
  return base.slice(0, 4);
}

const STEP_ORDER: Step[] = ["when", "who", "vibe", "nights", "result"];

export default function PlanMyStay() {
  const [step, setStep] = useState<Step>("when");
  const [sel, setSel] = useState<Selection>({});

  const pick = (field: keyof Selection, val: string, next: Step) => {
    const updated = { ...sel, [field]: val };
    setSel(updated);
    setTimeout(() => setStep(next), 200);
  };

  const reset = () => { setSel({}); setStep("when"); };

  const stepIdx = STEP_ORDER.indexOf(step);

  const rec = sel.vibe ? recommend(sel) : null;
  const exps = sel.vibe ? experiences(sel) : [];

  const waMsg = encodeURIComponent(
    `Hello Kailasha!\n\nI'd like to plan a stay:\n• Timing: ${sel.when || "Flexible"}\n• Group: ${sel.who || "TBD"}\n• Focus: ${sel.vibe || "TBD"}\n• Duration: ${sel.nights || "TBD"}\n• Interested in: ${rec?.room}\n\nPlease help me with availability and details.`
  );

  return (
    <section className="section-padding" style={{ background: "#111111" }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>Tailored for You</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#F4F0E6" }}>
            Plan Your Escape
          </h2>
        </div>

        {/* Progress */}
        {step !== "result" && (
          <div className="flex gap-2 mb-10 justify-center">
            {STEP_ORDER.filter(s => s !== "result").map((s, i) => (
              <div key={s} className="h-px w-12 transition-all duration-500"
                style={{ background: i <= stepIdx ? "#C9A84C" : "rgba(201,168,76,0.15)" }} />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === "when" && (
            <motion.div key="when" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <p className="text-center mb-8 text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>When are you thinking?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {WHEN_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => pick("when", o.id, "who")}
                    className="p-5 text-center transition-all duration-300 group"
                    style={{ border: "1px solid rgba(201,168,76,0.15)", background: "transparent" }}>
                    <span className="text-2xl block mb-3" style={{ color: "#C9A84C" }}>{o.icon}</span>
                    <span className="text-xs" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "who" && (
            <motion.div key="who" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <p className="text-center mb-8 text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>Who&apos;s joining you?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {WHO_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => pick("who", o.id, "vibe")}
                    className="p-5 text-center transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <span className="text-2xl block mb-3" style={{ color: "#C9A84C" }}>{o.icon}</span>
                    <span className="text-xs" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "vibe" && (
            <motion.div key="vibe" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <p className="text-center mb-8 text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>What calls to you?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {VIBE_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => pick("vibe", o.id, "nights")}
                    className="p-5 text-center transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <span className="text-2xl block mb-3" style={{ color: "#C9A84C" }}>{o.icon}</span>
                    <span className="text-xs" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "nights" && (
            <motion.div key="nights" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <p className="text-center mb-8 text-sm" style={{ color: "rgba(244,240,230,0.4)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>How long would you like to stay?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {NIGHTS_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => pick("nights", o.id, "result")}
                    className="p-5 text-center transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <span className="text-sm" style={{ color: "rgba(244,240,230,0.7)", fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "result" && rec && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="p-8 lg:p-12" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
                <p className="text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>Your Bespoke Escape</p>

                <h3 className="mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.8rem", color: "#F4F0E6" }}>
                  {rec.room}
                </h3>
                <p className="text-sm mb-8" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300, fontStyle: "italic" }}>
                  {rec.reason}
                </p>

                <div className="gold-line mb-8" />

                <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>We Suggest</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {exps.map(e => (
                    <div key={e} className="flex items-center gap-2">
                      <span style={{ color: "#C9A84C", fontSize: "10px" }}>—</span>
                      <span className="text-sm" style={{ color: "rgba(244,240,230,0.6)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{e}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/919805072712?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 text-center py-4"
                  >
                    Send Enquiry via WhatsApp
                  </a>
                  <button onClick={reset} className="btn-ghost flex-1 py-4">
                    Start Over
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

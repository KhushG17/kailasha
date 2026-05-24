"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SoundId = "river" | "forest" | "fire";

const SOUNDS: { id: SoundId; label: string; icon: string }[] = [
  { id: "river",  label: "Parvati River", icon: "≈" },
  { id: "forest", label: "Deodar Forest", icon: "♪" },
  { id: "fire",   label: "Campfire",      icon: "♨" },
];

/* ── Web Audio synthesis ─────────────────────────────────────────────── */

function createRiver(ctx: AudioContext): AudioNode {
  // White noise → low-pass → gentle wavering gain (sounds like flowing water)
  const bufLen = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;

  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 800;
  lp.Q.value = 0.5;

  const lp2 = ctx.createBiquadFilter();
  lp2.type = "lowpass";
  lp2.frequency.value = 400;

  // Slow LFO on gain to give it a "rushing" rhythm
  const gain = ctx.createGain();
  gain.gain.value = 0.35;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.06;
  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  lfo.start();

  src.connect(lp);
  lp.connect(lp2);
  lp2.connect(gain);
  src.start();
  return gain;
}

function createForest(ctx: AudioContext): AudioNode {
  const master = ctx.createGain();
  master.gain.value = 0;

  // Gentle wind: pink-ish noise through band-pass
  const bufLen = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < bufLen; i++) {
    const wh = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + wh * 0.0555179;
    b1 = 0.99332 * b1 + wh * 0.0750759;
    b2 = 0.96900 * b2 + wh * 0.1538520;
    data[i] = (b0 + b1 + b2 + wh * 0.0538) / 4;
  }
  const wind = ctx.createBufferSource();
  wind.buffer = buf;
  wind.loop = true;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 600;
  bp.Q.value = 0.4;
  const windGain = ctx.createGain();
  windGain.gain.value = 0.18;
  wind.connect(bp);
  bp.connect(windGain);
  windGain.connect(master);
  wind.start();

  // Occasional bird chirp
  function chirp() {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    const baseFreq = 1800 + Math.random() * 1200;
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, ctx.currentTime + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, ctx.currentTime + 0.16);
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.02);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.18);
    osc.connect(g);
    g.connect(master);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
    const next = 1.5 + Math.random() * 4;
    setTimeout(chirp, next * 1000);
  }
  setTimeout(chirp, 800);

  // Fade master in
  master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.5);
  return master;
}

function createFire(ctx: AudioContext): AudioNode {
  // Brown noise: each sample is prev + random*0.02, clamped
  const bufLen = ctx.sampleRate * 3;
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < bufLen; i++) {
    const wh = Math.random() * 2 - 1;
    last = (last + 0.02 * wh) / 1.02;
    data[i] = last * 3.5;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;

  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 500;

  // Crackle: amplitude modulation with fast noise
  const crackBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const crackData = crackBuf.getChannelData(0);
  for (let i = 0; i < ctx.sampleRate; i++) {
    crackData[i] = Math.random() < 0.003 ? (Math.random() * 2 - 1) * 0.6 : 0;
  }
  const crackSrc = ctx.createBufferSource();
  crackSrc.buffer = crackBuf;
  crackSrc.loop = true;

  const gain = ctx.createGain();
  gain.gain.value = 0.3;

  src.connect(lp);
  lp.connect(gain);
  crackSrc.connect(gain);
  src.start();
  crackSrc.start();
  return gain;
}

const GENERATORS: Record<SoundId, (ctx: AudioContext) => AudioNode> = {
  river: createRiver,
  forest: createForest,
  fire: createFire,
};

/* ── Component ───────────────────────────────────────────────────────── */

export default function AmbientSound() {
  const [active, setActive] = useState<SoundId | null>(null);
  const [open, setOpen] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodeRef = useRef<AudioNode | null>(null);
  const masterRef = useRef<GainNode | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => { ctxRef.current?.close(); };
  }, []);

  const stop = () => {
    if (masterRef.current && ctxRef.current) {
      masterRef.current.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 0.4);
      setTimeout(() => {
        nodeRef.current = null;
      }, 500);
    }
  };

  const play = (id: SoundId) => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    stop();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    masterRef.current = master;

    const node = GENERATORS[id](ctx);
    node.connect(master);
    nodeRef.current = node;

    master.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.8);
  };

  const toggle = (id: SoundId) => {
    if (active === id) {
      stop();
      setActive(null);
    } else {
      play(id);
      setActive(id);
    }
  };

  return (
    <div className="fixed bottom-24 left-5 z-50 flex flex-col-reverse items-start gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="mb-2 p-4 flex flex-col gap-2"
            style={{ background: "rgba(13,13,13,0.97)", border: "1px solid rgba(201,168,76,0.2)", minWidth: "168px" }}
          >
            <p className="text-[9px] tracking-[0.35em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.4)", fontFamily: "var(--font-jost)" }}>
              Soundscape
            </p>
            {SOUNDS.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => toggle(id)}
                className="flex items-center gap-3 w-full text-left py-1.5 transition-colors duration-200"
              >
                <span style={{ color: active === id ? "#C9A84C" : "rgba(244,240,230,0.25)", fontSize: "15px", minWidth: "16px" }}>{icon}</span>
                <span style={{ fontFamily: "var(--font-jost)", fontSize: "11px", color: active === id ? "#C9A84C" : "rgba(244,240,230,0.5)", fontWeight: active === id ? 500 : 300 }}>
                  {label}
                </span>
                {active === id && (
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ color: "#C9A84C", marginLeft: "auto", fontSize: "8px" }}
                  >●</motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-10 h-10 flex items-center justify-center"
        style={{
          background: active ? "rgba(201,168,76,0.12)" : "rgba(13,13,13,0.92)",
          border: `1px solid ${active ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
          backdropFilter: "blur(8px)",
        }}
        title="Ambient soundscape"
      >
        <motion.span
          animate={active ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: active ? "#C9A84C" : "rgba(244,240,230,0.4)", fontSize: "15px", lineHeight: 1 }}
        >
          {active ? SOUNDS.find(s => s.id === active)?.icon : "♩"}
        </motion.span>
      </motion.button>
    </div>
  );
}

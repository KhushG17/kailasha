"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message { role: "user" | "assistant"; content: string; }

const STARTERS = [
  "Plan a 3-night couples getaway",
  "Best trek for beginners?",
  "What's the Initiations programme?",
  "Plan a workation for 2 weeks",
];

export default function TripPlanner() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [configured, setConfigured] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: "Welcome to Kailasha. I'm here to help you plan the perfect Himalayan escape — whether that's a quiet weekend, a week-long trek, or something entirely your own. What brings you to the Parvati Valley?",
      }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...updated, assistantMsg]);

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      if (res.status === 503) { setConfigured(false); setLoading(false); return; }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let full = "";
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages(prev => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: full };
          return copy;
        });
      }
    } catch {
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content: "I'm having trouble connecting right now. Please call us directly at +91 9805072712." };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
  };

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-20 z-50 flex items-center gap-2 px-4 py-3 transition-all duration-300"
        style={{
          background: "rgba(17,17,17,0.95)",
          border: "1px solid rgba(201,168,76,0.35)",
          backdropFilter: "blur(8px)",
        }}
        title="Plan your stay with AI"
      >
        <span style={{ color: "#C9A84C", fontSize: "14px" }}>✦</span>
        <span className="text-[10px] tracking-[0.2em] uppercase hidden sm:block" style={{ color: "rgba(244,240,230,0.7)", fontFamily: "var(--font-jost)", fontWeight: 400 }}>
          Plan My Stay
        </span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[70] flex flex-col"
              style={{
                width: "min(480px, 100vw)",
                background: "#0D0D0D",
                borderLeft: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-jost)" }}>AI Concierge</p>
                  <h3 className="mt-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.4rem", color: "#F4F0E6" }}>Plan Your Escape</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(244,240,230,0.4)" }}
                >
                  ×
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
                {!configured && (
                  <div className="p-4 text-center" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <p className="text-sm" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                      AI planner not configured yet. Call us directly at{" "}
                      <a href="tel:+919805072712" style={{ color: "#C9A84C" }}>+91 9805072712</a>.
                    </p>
                  </div>
                )}
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[85%] px-4 py-3 text-sm leading-relaxed"
                      style={{
                        background: m.role === "user" ? "rgba(201,168,76,0.12)" : "rgba(244,240,230,0.04)",
                        border: `1px solid ${m.role === "user" ? "rgba(201,168,76,0.2)" : "rgba(244,240,230,0.06)"}`,
                        color: m.role === "user" ? "#F4F0E6" : "rgba(244,240,230,0.75)",
                        fontFamily: "var(--font-jost)",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {m.content}
                      {m.role === "assistant" && i === messages.length - 1 && loading && (
                        <span style={{ color: "#C9A84C" }}>▋</span>
                      )}
                    </div>
                  </div>
                ))}
                {loading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex justify-start">
                    <div className="px-4 py-3" style={{ border: "1px solid rgba(244,240,230,0.06)" }}>
                      <span style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>···</span>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Starters */}
              {messages.length <= 1 && (
                <div className="px-6 pb-3 flex flex-wrap gap-2">
                  {STARTERS.map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-[10px] px-3 py-1.5 transition-all duration-200 tracking-wide"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)", background: "transparent" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div className="flex gap-3 items-end">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Tell me about your ideal stay…"
                    rows={2}
                    className="flex-1 bg-transparent resize-none focus:outline-none text-sm"
                    style={{
                      color: "#F4F0E6",
                      fontFamily: "var(--font-jost)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      borderBottom: "1px solid rgba(201,168,76,0.2)",
                      paddingBottom: "6px",
                    }}
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={!input.trim() || loading}
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-200"
                    style={{
                      background: input.trim() && !loading ? "rgba(201,168,76,0.9)" : "transparent",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: input.trim() && !loading ? "#1A1A1A" : "rgba(201,168,76,0.3)",
                    }}
                  >
                    ↑
                  </button>
                </div>
                <p className="text-[9px] mt-2 tracking-wide" style={{ color: "rgba(244,240,230,0.2)", fontFamily: "var(--font-jost)" }}>
                  Press Enter to send · Shift+Enter for new line
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

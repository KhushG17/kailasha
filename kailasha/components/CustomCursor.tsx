"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const springCfg = { stiffness: 400, damping: 30 };
  const x = useSpring(0, springCfg);
  const y = useSpring(0, springCfg);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only activate on pointer-fine (non-touch) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setVisible(true); };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      setHovered(!!t.closest("a, button, [role=button], input, select, textarea, label"));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.body.classList.remove("custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          background: "#C9A84C",
        }}
        animate={{ width: clicking ? 5 : 7, height: clicking ? 5 : 7 }}
        transition={{ duration: 0.1 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%", border: "1px solid rgba(201,168,76,0.5)" }}
        animate={{
          width: hovered ? 44 : clicking ? 22 : 32,
          height: hovered ? 44 : clicking ? 22 : 32,
          opacity: hovered ? 0.7 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}

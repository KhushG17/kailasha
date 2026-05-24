"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { X } from "lucide-react";

const categories = ["All", "Architecture", "Rooms", "Dining", "Nature", "Activities", "Weddings"];

const images = [
  { src: "/images/gallery/arch-1.jpg", cat: "Architecture", gradient: "linear-gradient(135deg,#1B2E1E,#2A4530)", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/room-1.jpg", cat: "Rooms", gradient: "linear-gradient(135deg,#5C3D2E,#3B2518)", span: "" },
  { src: "/images/gallery/room-2.jpg", cat: "Rooms", gradient: "linear-gradient(135deg,#2A4530,#1B2E1E)", span: "" },
  { src: "/images/gallery/dining-1.jpg", cat: "Dining", gradient: "linear-gradient(135deg,#1A1A1A,#5C3D2E)", span: "col-span-2" },
  { src: "/images/gallery/nature-1.jpg", cat: "Nature", gradient: "linear-gradient(135deg,#1B2E1E,#1A1A1A)", span: "" },
  { src: "/images/gallery/arch-2.jpg", cat: "Architecture", gradient: "linear-gradient(135deg,#3B2518,#1B2E1E)", span: "" },
  { src: "/images/gallery/act-1.jpg", cat: "Activities", gradient: "linear-gradient(135deg,#2A4530,#5C3D2E)", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/wedding-1.jpg", cat: "Weddings", gradient: "linear-gradient(135deg,#5C3D2E,#1B2E1E)", span: "" },
  { src: "/images/gallery/nature-2.jpg", cat: "Nature", gradient: "linear-gradient(135deg,#1B2E1E,#3B2518)", span: "" },
  { src: "/images/gallery/room-3.jpg", cat: "Rooms", gradient: "linear-gradient(135deg,#1A1A1A,#1B2E1E)", span: "col-span-2" },
  { src: "/images/gallery/dining-2.jpg", cat: "Dining", gradient: "linear-gradient(135deg,#3B2518,#2A4530)", span: "" },
  { src: "/images/gallery/arch-3.jpg", cat: "Architecture", gradient: "linear-gradient(135deg,#2A4530,#1A1A1A)", span: "" },
  { src: "/images/gallery/act-2.jpg", cat: "Activities", gradient: "linear-gradient(135deg,#1B2E1E,#5C3D2E)", span: "" },
  { src: "/images/gallery/wedding-2.jpg", cat: "Weddings", gradient: "linear-gradient(135deg,#5C3D2E,#3B2518)", span: "" },
  { src: "/images/gallery/nature-3.jpg", cat: "Nature", gradient: "linear-gradient(135deg,#1A1A1A,#2A4530)", span: "col-span-2" },
  { src: "/images/gallery/room-4.jpg", cat: "Rooms", gradient: "linear-gradient(135deg,#1B2E1E,#1A1A1A)", span: "" },
  { src: "/images/gallery/arch-4.jpg", cat: "Architecture", gradient: "linear-gradient(135deg,#3B2518,#1B2E1E)", span: "" },
  { src: "/images/gallery/act-3.jpg", cat: "Activities", gradient: "linear-gradient(135deg,#2A4530,#3B2518)", span: "" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; gradient: string } | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 px-8">
          <p className="text-[11px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Gallery</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F4F0E6" }}>
            Kailasha in frames
          </h1>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-8 sticky top-20 z-30" style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 flex gap-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="flex-shrink-0 text-[10px] tracking-[0.25em] uppercase px-5 py-2 transition-all duration-300"
              style={{
                fontFamily: "var(--font-jost)",
                color: active === cat ? "#1A1A1A" : "rgba(244,240,230,0.45)",
                background: active === cat ? "#C9A84C" : "transparent",
                border: `1px solid ${active === cat ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-8 px-4 md:px-8" style={{ background: "#0D0D0D", minHeight: "80vh" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {filtered.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={(i % 4) * 0.05} className={img.span || ""}>
                <div
                  className="relative w-full h-full overflow-hidden cursor-pointer group"
                  style={{ background: img.gradient, minHeight: "200px" }}
                  onClick={() => setLightbox(img)}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${img.src}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] tracking-[0.25em] uppercase px-2 py-1" style={{ background: "rgba(201,168,76,0.2)", color: "#C9A84C", fontFamily: "var(--font-jost)" }}>{img.cat}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.1)" }}>
                      <span style={{ color: "#C9A84C", fontSize: "18px" }}>+</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,10,0.97)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/50 hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            style={{ background: lightbox.gradient }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full"
              style={{
                backgroundImage: `url('${lightbox.src}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                aspectRatio: "4/3",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

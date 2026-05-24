"use client";

import FadeIn from "@/components/FadeIn";

const distances = [
  { from: "Bhuntar Airport", dist: "25 km", time: "~45 min" },
  { from: "Manikaran", dist: "10 km", time: "~20 min" },
  { from: "Kasol", dist: "5 km", time: "~10 min" },
  { from: "Kullu", dist: "25 km", time: "~50 min" },
  { from: "Manali", dist: "75 km", time: "~2.5 hrs" },
  { from: "Chandigarh", dist: "270 km", time: "~7 hrs" },
  { from: "Delhi", dist: "520 km", time: "~11 hrs" },
];

export default function LocationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden" style={{ background: "#1B2E1E" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/location/valley.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1B2E1E" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "var(--font-jost)" }}>Find Us</p>
          <h1 className="leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F4F0E6" }}>
            Between Jari and Kasol,
            <br /><span style={{ fontStyle: "italic", color: "#C9A84C" }}>on National Highway 21</span>
          </h1>
        </div>
      </section>

      {/* ADDRESS + MAP */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Address + Distances */}
            <FadeIn direction="left">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Address</p>
              <div className="mb-8">
                <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.4rem", color: "#F4F0E6", lineHeight: 1.7 }}>
                  Kailash Nagar, Doonkhara<br />
                  P.O. Jari, Kasol<br />
                  Parvati Valley<br />
                  Dist. Kullu, Himachal Pradesh
                </p>
              </div>

              <div className="gold-line mb-8" style={{ margin: 0, marginBottom: "2rem" }} />

              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Distances</p>
              <div className="space-y-0">
                {distances.map((d, i) => (
                  <div key={d.from} className="flex items-center justify-between py-4" style={{ borderTop: i === 0 ? "1px solid rgba(201,168,76,0.1)" : undefined, borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                    <span className="text-sm" style={{ color: "rgba(244,240,230,0.7)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{d.from}</span>
                    <div className="text-right">
                      <span className="text-sm mr-4" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>{d.dist}</span>
                      <span className="text-xs" style={{ color: "rgba(244,240,230,0.35)", fontFamily: "var(--font-jost)" }}>{d.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn direction="right">
              <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Map</p>
              <div className="w-full relative overflow-hidden flex items-center justify-center" style={{ aspectRatio: "4/3", border: "1px solid rgba(201,168,76,0.15)", background: "linear-gradient(135deg,#1B2E1E,#0D0D0D)" }}>
                <div className="text-center px-8">
                  <span className="text-5xl block mb-4" style={{ color: "#C9A84C" }}>⌖</span>
                  <p className="text-sm mb-6" style={{ color: "rgba(244,240,230,0.5)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                    Kailash Nagar, Doonkhara<br />Between Jari &amp; Kasol, NH21
                  </p>
                  <a
                    href="https://share.google/sQlPPqhUs6DqqfLBI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs py-3 px-8"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://share.google/sQlPPqhUs6DqqfLBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-2 px-5"
                >
                  Open in Google Maps
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HOW TO REACH */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-jost)" }}>Getting Here</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F4F0E6" }}>How to reach Kailasha</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "✈",
                title: "By Air",
                steps: ["Fly into Bhuntar Airport (Kullu-Manali Airport)", "Closest airport — 25 km from the property", "Cab or taxi from airport → NH21 toward Manikaran", "The Himalayan Village is between Jari and Kasol on NH21", "Approx. 45 minutes by road"],
              },
              {
                icon: "🚌",
                title: "By Bus / Road",
                steps: ["HRTC buses from Delhi, Chandigarh, Manali to Bhuntar or Kasol", "Take NH21 from Kullu/Bhuntar toward Manikaran", "Property is signposted between Jari and Kasol", "Private taxis available from Bhuntar, Kasol, Manali", "Coordinates: 32.0087°N, 77.3166°E"],
              },
              {
                icon: "🚂",
                title: "By Train",
                steps: ["Nearest railway station: Joginder Nagar (narrow gauge) or Chakki Bank (broad gauge)", "From Pathankot: Taxi to Bhuntar (~5 hrs)", "From Chandigarh: Bus or cab to Bhuntar, then NH21", "We can arrange private transfer from any station", "Contact us to arrange pickup"],
              },
            ].map((mode) => (
              <FadeIn key={mode.title}>
                <div className="p-8 h-full" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                  <span className="text-3xl block mb-4">{mode.icon}</span>
                  <h3 className="text-xl mb-6" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "#F4F0E6" }}>{mode.title}</h3>
                  <ol className="space-y-3">
                    {mode.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-[10px] mt-0.5 flex-shrink-0" style={{ color: "#C9A84C", fontFamily: "var(--font-jost)" }}>{i + 1}.</span>
                        <span className="text-sm leading-relaxed" style={{ color: "rgba(244,240,230,0.55)", fontFamily: "var(--font-jost)", fontWeight: 300 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER NOTE */}
      <section className="py-20" style={{ background: "linear-gradient(135deg,#1B2E1E,#111111)" }}>
        <FadeIn>
          <div className="max-w-3xl mx-auto px-8 text-center">
            <p style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: "#F4F0E6", lineHeight: 1.7 }}>
              We offer complimentary property orientation and can arrange private airport/station transfers. Contact us when booking and we&apos;ll ensure your arrival is as seamless as the stay itself.
            </p>
            <div className="mt-8">
              <a href="tel:+919805072712" className="btn-ghost">Call +91 9805072712</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

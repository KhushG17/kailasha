"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface EnquireModalProps {
  open: boolean;
  onClose: () => void;
}

const roomTypes = [
  "Ghor – Superior Cottage",
  "Dhara – Deluxe Cottage",
  "Kothi – Deluxe Cottage",
  "Shoron – Machan Suite",
  "Kothi Shoron – Royal Cottage",
];

export default function EnquireModal({ open, onClose }: EnquireModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hello Kailasha! I'd like to enquire about a stay.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nRoom: ${form.roomType}\nGuests: ${form.guests}\nRequests: ${form.requests}`
    );
    window.open(`https://wa.me/919805072712?text=${whatsappMsg}`, "_blank");
    onClose();
  };

  const inputClass =
    "w-full bg-transparent border border-gold/20 text-cream placeholder-cream/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300";
  const labelClass = "text-gold/60 text-[10px] tracking-[0.3em] uppercase block mb-2";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{
              background: "linear-gradient(135deg, #1A1A1A 0%, #1B2E1E 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Header */}
            <div className="px-8 pt-10 pb-6 border-b border-gold/10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-2">
                    Reserve Your Stay
                  </p>
                  <h2
                    className="text-cream text-4xl"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    Enquire Now
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-cream/40 hover:text-gold transition-colors mt-1"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)" }}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)" }}
                  />
                </div>
                <div>
                  <label className={labelClass}>Number of Guests</label>
                  <input
                    name="guests"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Check-in Date</label>
                  <input
                    name="checkIn"
                    type="date"
                    value={form.checkIn}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)", colorScheme: "dark" }}
                  />
                </div>
                <div>
                  <label className={labelClass}>Check-out Date</label>
                  <input
                    name="checkOut"
                    type="date"
                    value={form.checkOut}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-jost)", colorScheme: "dark" }}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Room Type</label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  <option value="" className="bg-charcoal">
                    Select a room
                  </option>
                  {roomTypes.map((r) => (
                    <option key={r} value={r} className="bg-charcoal">
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Special Requests</label>
                <textarea
                  name="requests"
                  rows={3}
                  placeholder="Any special requests, dietary needs, or questions..."
                  value={form.requests}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-jost)" }}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-gold flex-1 py-4 text-center">
                  Send Enquiry via WhatsApp
                </button>
                <a
                  href="https://www.thehimalayanvillage.in/calender.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 py-4 text-center"
                >
                  Book Directly
                </a>
              </div>

              <p
                className="text-cream/30 text-[10px] text-center tracking-wide"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Our team will respond within 24 hours. For immediate assistance,
                call +91 9805072712.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

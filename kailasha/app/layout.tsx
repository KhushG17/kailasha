import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import AmbientSound from "@/components/AmbientSound";
import PageTransition from "@/components/PageTransition";
import TripPlanner from "@/components/TripPlanner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kailasha — The Himalayan Village, Kasol",
  description:
    "A boutique Kathkunia-style luxury resort in Kasol, Parvati Valley, Himachal Pradesh. Surrounded by ancient deodar forests, kissed by the Parvati river, and built without a drop of cement.",
  keywords: ["Kasol", "luxury resort", "Himachal Pradesh", "Parvati Valley", "boutique resort", "Kathkunia", "Kailasha"],
  openGraph: {
    title: "Kailasha — The Himalayan Village",
    description: "Where the Himalayas become home.",
    siteName: "Kailasha - The Himalayan Village",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased bg-charcoal text-cream">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <AmbientSound />
        <TripPlanner />
      </body>
    </html>
  );
}

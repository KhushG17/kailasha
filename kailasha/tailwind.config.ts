import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1B2E1E",
        deodar: "#5C3D2E",
        cream: "#F4F0E6",
        gold: "#C9A84C",
        charcoal: "#1A1A1A",
        "gold-light": "#E8C96A",
        "forest-light": "#2A4530",
        "cream-dark": "#E8E2D4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-left": "scrollLeft 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "forest-gradient": "linear-gradient(135deg, #1B2E1E 0%, #2A4530 50%, #1A1A1A 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C96A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

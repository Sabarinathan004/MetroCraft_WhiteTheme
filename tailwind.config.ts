import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2D5C",
          dark: "#082447",
        },
        gold: {
          DEFAULT: "#D69A2D",
          light: "#E8B04A",
        },
        border: "#E5E7EB",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["72px", { lineHeight: "1.05", fontWeight: "800" }],
        "section": ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "card-heading": ["28px", { lineHeight: "1.25", fontWeight: "700" }],
        "body": ["18px", { lineHeight: "1.6" }],
        "label": ["13px", { lineHeight: "1.4", letterSpacing: "3px" }],
        "small": ["14px", { lineHeight: "1.5" }],
      },
      maxWidth: {
        container: "1400px",
      },
      spacing: {
        section: "80px",
        "nav-height": "96px",
        "top-bar": "56px",
      },
      borderRadius: {
        card: "16px",
        hero: "24px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 16px 40px rgba(15, 23, 42, 0.14)",
        hero: "0 20px 60px rgba(15, 23, 42, 0.18)",
        stats: "0 12px 40px rgba(15, 23, 42, 0.12)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

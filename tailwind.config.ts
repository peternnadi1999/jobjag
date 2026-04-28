import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
      colors: {
        blue: {
          50:  "#e8eef7",
          100: "#c5d3ea",
          200: "#9eb5d9",
          300: "#7797c8",
          400: "#5a80ba",
          500: "#2457a0",
          600: "#1a3d6e",
          700: "#142f56",
          800: "#0f2548",
          900: "#091830",
          950: "#050e1c",
        },
        green: {
          50:  "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#43a047",
          600: "#2e7d32",
          700: "#256427",
          800: "#1b5e20",
          900: "#124016",
          950: "#0a2a0d",
        },
        orange: {
          50:  "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#f59340",
          600: "#e87722",
          700: "#c45f0a",
          800: "#a04d07",
          900: "#7c3b05",
          950: "#4d2403",
        },
        gold: {
          400: "#f8d84a",
          500: "#f5c518",
          600: "#d4a90e",
        },
        slate: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};

export default config;

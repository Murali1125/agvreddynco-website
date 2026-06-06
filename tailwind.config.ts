import type { Config } from "tailwindcss";
import { COLORS } from "./src/config/theme/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        neutral: COLORS.neutral,
        success: COLORS.success,
        warning: COLORS.warning,
        error: COLORS.error,
        midnight: COLORS.semantic.midnight,
        royal: COLORS.semantic.royal,
        teal: COLORS.semantic.teal,
        plum: COLORS.semantic.plum,
        emerald: COLORS.semantic.emerald,
        cloud: COLORS.semantic.cloud,
        ink: COLORS.semantic.ink,
        slate: COLORS.semantic.slate,
        mist: COLORS.semantic.mist,
        cream: COLORS.semantic.cream,
        bronze: COLORS.semantic.bronze,
        gold: COLORS.semantic.gold
      },
      boxShadow: {
        panel: "0 14px 35px -20px rgba(2, 132, 199, 0.25)",
        glow: "0 20px 55px -32px rgba(34, 197, 94, 0.38)",
        premium: "0 22px 55px -25px rgba(3, 105, 161, 0.25)",
        soft: "0 12px 30px -20px rgba(14, 165, 233, 0.24)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "float-y": "floatY 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

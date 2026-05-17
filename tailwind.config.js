export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* =========================
           BASE NEUTRALS (UI SYSTEM)
        ========================= */
        sand: {
          50: "#FDFCFA",   // background main
          100: "#F7F4EF",  // surface
          200: "#EDE9E2",  // border soft
          300: "#E0DBD2",  // border
          400: "#C8C2B8",  // disabled
        },

        /* Ink = semantic text system (NO -900 SCALE) */
        ink: {
          DEFAULT: "#0D0D0C",   // primary text
          secondary: "#2F2F2C",  // secondary text
          muted: "#7A7A74",     // helper text
        },

        /* =========================
           PRIMARY (Stripe-like accent)
        ========================= */
        teal: {
          50: "#E9FBF5",
          100: "#CFF5E8",
          500: "#1D9E75",
          600: "#148563",
          700: "#0F6E56",
        },

        /* =========================
           SYSTEM STATES (Linear-like)
        ========================= */
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
      },

      fontFamily: {
        sans: ["Syne", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },

      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
      },

      borderWidth: {
        "0.5": "0.5px",
      },

      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05)",
        card: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },

  plugins: [],
};
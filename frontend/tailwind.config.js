/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#4F46E5",
        dark: "#111827",
        light: "#F8FAFC",
        text: "#374151",
        border: "#E5E7EB",
        success: "#10B981",
        danger: "#EF4444",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
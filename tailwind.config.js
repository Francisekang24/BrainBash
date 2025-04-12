/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#E4572E',         // BrainBash Orange
        secondary: '#0E7C7B',       // Teal Blue
        accent: '#F4A261',          // Golden Accent
        textMain: '#333333',        // Dark Gray
        textSecondary: '#888888',   // Medium Gray
        border: '#E0E0E0',          // Light Gray
        background: '#F9F9F6',      // Off-White
      }
    },
  },
  plugins: [],
}
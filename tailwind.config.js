/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(0, 1fr))",
        autofit: "repeat(auto-fit, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        autofill: "repeat(1fr, minmax(1fr, 1fr))",
        autofit: "repeat(auto-fit, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

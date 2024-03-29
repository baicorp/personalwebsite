/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "text-h3": "var(--text-h3)",
      },
      colors: {
        "main-background": "var(--background-main)",
        "accent-color": "var(--accent-color)",
        "card-background": "var(--background-card)",
        "code-background": "var(--background-code)",
        "card-border": "var(--border-card)",
        "headings-color": "var(--color-heading)",
        "text-color": "var(--color-text)",
        "selection-background": "var(--selection-background)",
        "selection-text": "var(--selection-text)",
        "link-color": "#0072f5",
      },
    },
  },
  plugins: [],
};

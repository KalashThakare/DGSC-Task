/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(#EA4435 0% 25%, #547DBF 25% 50%, #F9BC15 50% 75%, #33A852 75% 100%)',
      },
    },
  },
  plugins: [],
};

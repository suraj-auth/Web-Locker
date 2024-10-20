/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "250px",
        xs: "400px",
        s: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "max-sm": { max: "400px" },
        "max-md": { max: "500px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "max-2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],
};

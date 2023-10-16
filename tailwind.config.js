/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-rebel-green": "#14aa37",
        "base-rebel-white": "#fff",
        "base-rebel-black": "#000",
        "base-rebel-moss": "#bed276",
        "base-rebel-lemon": "#f7ee6a",
        "support-rebel-light-grey": "#f2f2f2",
        "base-rebel-red": "#dc4f00",
        fossilsubs: "#cf1982",
        fossilstoppt: "#febe1f",
      },
      spacing: {},
      fontFamily: {
        "desktop-wide-h3": "'FUCXED CAPS Latin'",
        "desktop-wide-paragraph": "'Crimson Pro'",
      },
    },
    fontSize: {
      "11xl": "30px",
      "5xl": "24px",
      "17xl": "36px",
      "21xl": "40px",
      "9xl": "28px",
      "45xl": "64px",
      "56xl": "75px",
      "53xl": "72px",
      "3xl": "22px",
      "48xl": "67px",
      "57xl": "76px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

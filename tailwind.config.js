/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "black-color": "#27272A",
      "gray-color": "#696969",
      "light-gray-color": "#E5E7EB",
      "white-color": "#FCFBFA",
      "purple-color": "#7E3AF2",
      "purple-color-hover": "#6C2BD9",
      "btn-pressed": "#CABFFD",
      "red-color": "#E02424",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    backgroundImage: {
      hero: "url('/public/assets/background.png')",
      main: "url('/public/assets/top-bg.png')",
    },
  },
  container: {
    screens: {
      mobile: "600px",
      tablet: "900px",
      desktop: "1280px",
    },
  },
};
export const plugins = [];

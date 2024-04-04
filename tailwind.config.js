/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanPrimary: "hsl(180, 29%, 50%)",
        cyanBg: "hsl(180, 52%, 96%)",
        cyanTablets: "hsl(180, 31%, 95%)",
        cyanDark: "hsl(180, 8%, 52%)",
        cyanDarker: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        SpartanMed: "SpartanMed",
        SpartanBold: "SpartanBold",
      },
      dark: "class",
    },
  },
  plugins: [],
};

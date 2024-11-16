/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/Header.jsx",
    "./src/Hero.jsx",
    "./src/MainSection.jsx",
    "./src/OpenNewTabs.jsx",
    "./src/GetDeal.jsx",
    "./src/Footer.jsx",
    "./src/components/HamburgerBtn.jsx",
    "./src/components/LogoName.jsx",
    "./src/components/DealSwitcher.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primColor: "#A8FF35",
        myGreen: "#87D322",
        btnHover: "#8CC83A",
        myBlack: "#2B2B2B",
        greyBg: "#FAFAFA",
        grey100: "#F1F1F1",
        grey200: "#F5F5F5",
        grey300: "#ADADAD",
        grey400: "#8B8B8B",
      },
      fontFamily: {
        sans: ["Effra", "sans-serif"],
        serif: "GoodDog New",
      },
    },
  },
  plugins: [],
};

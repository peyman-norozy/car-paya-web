/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./routes/**/*.{js,ts,jsx,tsx,mdx",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      animation: {
        rotate: "rotate 2s linear infinite",
      },
      boxShadow: {
        custom1: "0px 0px 16px rgba(17, 17, 26, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text_gray: "#303030",
        RED_100: "#fad3d1",
        RED_200: "#f4a8a4",
        RED_300: "#ef7c76",
        RED_400: "#e95149",
        RED_500: "#e73c33",
        RED_600: "#b61e16",
        RED_700: "#891610",
        RED_800: "#5b0f0b",
        RED_900: "#5b0f0b",
        BLUE_50: "#eceef8",
        BLUE_100: "#d9ddf2",
        BLUE_200: "#b4bce4",
        BLUE_300: "#8e9ad7",
        BLUE_400: "#6878ca",
        BLUE_500: "#212b5e",
        BLUE_600: "#354597",
        BLUE_700: "#283471",
        BLUE_800: "#1b234b",
        BLUE_900: "#0d1126",
        red_shop: "#d52726",
        red_user: "#989898",
        gray_nav: "#454952",
        purple_primary: "#453984",
        gray_light: "#ECEEF8",
        gray_light_border: "#eaeaea",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
      },
      screens: {
        size360: "360px",
        // => @media (min-width: 360px) { ... }

        size366: "366px",
        // => @media (min-width: 366px) { ... }

        size378: "378px",
        // => @media (min-width: 378px) { ... }

        size411: "411px",
        // => @media (min-width: 411px) { ... }

        size460: "460px",
        // => @media (min-width: 460px) { ... }

        size490: "490px",
        // => @media (min-width: 490px) { ... }

        size516: "516px",
        // => @media (min-width: 516px) { ... }

        size525: "525px",
        // => @media (min-width: 525px) { ... }

        size540: "540px",
        // => @media (min-width: 540px) { ... }

        size560: "560px",
        // => @media (min-width: 560px) { ... }

        size582: "582px",
        // => @media (min-width: 582px) { ... }

        size617: "617px",
        // => @media (min-width: 617px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        size666: "666px",
        // => @media (min-width: 666px) { ... }

        size671: "671px",
        // => @media (min-width: 671px) { ... }

        size690: "690px",
        // => @media (min-width: 690px) { ... }

        size720: "720px",
        // => @media (min-width: 720px) { ... }

        size746: "746px",
        // => @media (min-width: 746px) { ... }

        size752: "752px",
        // => @media (min-width: 752px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        size800: "800px",
        // => @media (min-width: 800px) { ... }

        size830: "830px",
        // => @media (min-width: 830px) { ... }

        size868: "868px",
        // => @media (min-width: 868px) { ... }

        size870: "870px",
        // => @media (min-width: 870px) { ... }

        size882: "882px",
        // => @media (min-width: 882px) { ... }

        size900: "900px",
        // => @media (min-width: 900px) { ... }

        size966: "966px",
        // => @media (min-width: 966px) { ... }

        size974: "974px",
        // => @media (min-width: 974px) { ... }

        size1000: "1000px",
        // => @media (min-width: 1000px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        size1050: "1050px",
        // => @media (min-width: 1050px) { ... }

        size1106: "1106px",
        // => @media (min-width: 1106px) { ... }

        size1056: "1056px",
        // => @media (min-width: 1056px) { ... }

        size1136: "1136px",
        // => @media (min-width: 1136px) { ... }

        size1142: "1142px",
        // => @media (min-width: 1142px) { ... }

        size1160: "1160px",
        // => @media (min-width: 1160px) { ... }

        size1180: "1180px",
        // => @media (min-width: 1180px) { ... }

        size1190: "1190px",
        // => @media (min-width: 1190px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        size1228: "1228px",
        // => @media (min-width: 1228px) { ... }

        size1275: "1275px",
        // => @media (min-width: 1275px) { ... }

        size1314: "1314px",
        // => @media (min-width: 1314px) { ... }

        size1330: "1330px",
        // => @media (min-width: 1330px) { ... }

        size1362: "1362px",
        // => @media (min-width: 1362px) { ... }

        size1400: "1400px",
        // => @media (min-width: 1400px) { ... }

        size1415: "1415px",
        // => @media (min-width: 1415px) { ... }

        size1470: "1470px",
        // => @media (min-width: 1470px) { ... }

        size1510: "1510px",
        // => @media (min-width: 1510px) { ... }
        size1570: "1570px",
        // => @media (min-width: 1570px) { ... }

        size1680: "1680px",
        // => @media (min-width: 1680px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        size1770: "1770px",
        // => @media (min-width: 1770px) { ... }

        size1090: "1090px",
        // => @media (min-width: 1090px) { ... }
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F3EFEB",
        "gray-50": "#DBDBDF",
        "gray-100": "#C2C2C4",
        "gray-500": "#292B34",
        "primary-100": "#e0b0a2",
        "primary-300": "#d1785e",
        "primary-500": "#D33C0F",
        "secondary-400": "#85301e",
        "secondary-500": "#4E180D",
      },
      backgroundImage: (theme) => ({
        // gray gradient: background: linear-gradient(90deg, rgba(194,194,196,1) 0%, rgba(243,239,235,1) 100%);
        "gradient-siennacream": "linear-gradient(90deg, rgba(211,60,15,1) 0%, rgba(243,239,235,1) 100%)",
        "mobile-home": "url('./assets/marianne-bos-4eBOAeFfY0w-unsplash-up.png')"
      }),
      fontFamily: {
        bevan: ["Domine"]
      },
      content: {
        activatetextlight: "url('./assets/ActivateTextLight.png')",
        activatetextdark: "url('./assets/ActivateTextDark.png')",
        logomono: "url('./assets/activate-gym-high-resolution-logo-black-on-transparent-background.png')",
        logocolor: "url('./assets/activate-gym-high-resolution-logo-color-on-transparent-background.png')",
        arrowright: "url('./assets/marianne-bos-4eBOAeFfY0w-unsplash-right.png')",
        arrowup: "url('./assets/marianne-bos-4eBOAeFfY0w-unsplash-up.png')",
        arrowdown: "url('./assets/marianne-bos-4eBOAeFfY0w-unsplash-down.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
};

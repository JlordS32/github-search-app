/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            accent: "#0079FF",
            primary: {
               light: "#FEFEFE",
               dark: "#1E2A47",
            },
            background: {
               light: "#F6F8FF",
               dark: "#141D2F",
            },
            card: {
               light: "#FEFEFE",
               dark: "#141D2F",
            },
            text: {
               light: "#4B6A9B",
               dark: "#FFFFFF",
            },
            diplayText: {
               light: "#2B3442",
               dark: "#FFFFFF",
            },
            header: {
               light: "#222731",
               dark: "#FFFFFF",
            },
            toggle: {
               light: "#697C9A",
               dark: "#FFFFFF",
            },
         },
         fontFamily: {
            sans: ["Space Mono", "serif"],
         },
      },
   },
   plugins: [],
};

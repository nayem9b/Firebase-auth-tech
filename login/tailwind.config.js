/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c87db",

          secondary: "#daa5f7",

          accent: "#fff4a8",

          neutral: "#1C1E26",

          "base-100": "#F8F6F9",

          info: "#60CBE6",

          success: "#18D87E",

          warning: "#F1D755",

          error: "#E84C3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

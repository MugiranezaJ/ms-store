/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: {
        'backface-hidden': 'translateY(0) backface-hidden',
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
  variants: {
    scrollbar: ["rounded"],
  },
};

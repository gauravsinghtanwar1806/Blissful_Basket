/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#F8C8DC",
        softWhite: "#FFF5F5",
        lightBeige: "#F5E6D3",
        softLavender: "#E8D5F5",
        roseGold: "#B76E79",
        deepRose: "#8B4557",
        warmGray: "#6B5B6B",
        blissfullBrown: "#5c4033",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        serif: ["var(--font-playfair)"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern':
          "linear-gradient(to bottom left, hsla(217deg,100%,67%,0.75) 0%, hsla(280deg,83%,55%,0.75) 100% ), url('/bg-hero-2.jpg')",
      },
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { display: 'none', opacity: '0' },
          '1%': { display: 'block', opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out ',
      },
    },
  },
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  plugins: [],
}

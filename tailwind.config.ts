import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

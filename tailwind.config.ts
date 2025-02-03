import type { Config } from 'tailwindcss'
const twColors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: twColors.black,
      white: '#d2d4d2',
      gray: twColors.slate,
      //Brand colors:
      background: '#d2d4d2',
      foreground: '#1f231f',
      primary: {
        DEFAULT: '#4A2E38',
        foreground: '#d2d4d2',
        hover: '#62444F',
      },
      secondary: {
        DEFAULT: '#333a34',
        foreground: '#d2d4d2',
        hover: '#546056',
      },
      muted: '#546056',
      faded: '#96ac9a',
    },
    fontFamily: {
      body: ['Lato'],
      display: ['Roboto Condensed'],
      mono: ['Roboto Mono'],
    },
    extend: {
      maxWidth: {
        layout: '64rem',
        content: '48rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

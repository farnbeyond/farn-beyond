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
      white: twColors.white,
      gray: twColors.slate,
      //Brand colors:
      background: '#FFFFFF',
      foreground: '#0E1636',
      primary: {
        DEFAULT: '#132C94',
        foreground: '#FFFFFF',
        hover: '#213CA9',
      },
      secondary: {
        DEFAULT: '#07603B',
        foreground: '#FFFFFF',
        hover: '#18754F',
      },
      muted: '#444859',
      faded: '#C6C8D3',
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

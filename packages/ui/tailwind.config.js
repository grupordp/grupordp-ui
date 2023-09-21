/** @type {import('tailwindcss').Config} */

import { colors } from './src/tokens/colors'
import { fontSize } from './src/tokens/fontSizes'
import { fontWeight } from './src/tokens/fontWeights'
import { fontFamily } from './src/tokens/fonts'
import { lineHeight } from './src/tokens/lineHeights'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withTV } = require('tailwind-variants/transformer')

module.exports = withTV({
  content: ['./src/ui/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      colors,
      keyframes: {
        verticalSlideIn: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        verticalSlideOut: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },

        horizontalSlideIn: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        horizontalSlideOut: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        progressAnimation: {
          from: {
            'stroke-dashoffset': '125',
          },
        },
      },
      animation: {
        'vertical-slide-in': 'verticalSlideIn 0.4s ease-out',
        'vertical-slide-out': 'verticalSlideOut 0.2s ease-out',
        'horizontal-slide-in': 'horizontalSlideIn 0.4s ease-out',
        'horizontal-slide-out': 'horizontalSlideOut 0.4s ease-out',
        progressAnimation: 'progressAnimation 1s forwards',
      },
    },
    plugins: [],
  },
})

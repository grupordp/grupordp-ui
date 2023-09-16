/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/ui/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '2.5rem',
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
      },
      lineHeight: {
        1: '18px',
        2: '21px',
        3: '24px',
        4: '27px',
        5: '30px',
        6: '36px',
        7: '42px',
        8: '48px',
        9: '54px',
        10: '60px',
      },
      colors: {
        transparent: 'transparent',
        primary: '#1CBFAE',
        'primary-w50': '#8DDFD7',
        'primary-w25': '#55CFC2',
        'primary-b10': '#19AC9D',
        'primary-b25': '#158F82',
        'primary-b50': '#0E6057',

        warning: '#E5B817',
        'warning-w50': '#F2DB8B',
        'warning-b10': '#CEA615',
        'warning-b50': '#735C0C',

        error: '#E51749',
        'error-w50': '#F28BA4',
        'error-b10': '#CE1542',
        'error-b50': '#730C25',

        info: '#1776E5',
        'info-w50': '#8BBAF2',
        'info-b10': '#156ACE',
        'info-b50': '#0C3B73',

        gray: {
          0: '#FFFFFF',
          1: '#FAFBFC',
          2: '#E6ECF2',
          3: '#A3B8CC',
          4: '#7D98B2',
          5: '#406080',
          6: '#294766',
          7: '#17324D',
          8: '#0A1F33',
          9: '#041321',
          '7-b10': '#152D45',
          '8-b10': '#091C2E',
        },
      },
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
}

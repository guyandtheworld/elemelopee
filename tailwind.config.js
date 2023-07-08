module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#F1F1F1',
          200: '#E3E3E3',
          300: '#D4D4D4',
          400: '#C6C6C6',
          500: '#B8B8B8',
          600: '#A0A0A0',
          700: '#898989',
          800: '#717171',
          900: '#595959',
        },
      },
      fontFamily: {
        specialElite: ['Special Elite', 'serif'],
        franklinGothic: ['Franklin Gothic', 'serif'],
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};

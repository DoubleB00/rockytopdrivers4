/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1A',
          900: '#0A1628',
          800: '#0F1F3D',
          700: '#152849',
          600: '#1C3358',
        },
        charcoal: {
          900: '#161D2C',
          800: '#1C2333',
          700: '#232B3E',
          600: '#2A3245',
          500: '#364059',
        },
        gold: {
          300: '#FB923C',
          400: '#F97316',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        cream: {
          50: '#FDFCFA',
          100: '#F8F6F1',
          200: '#F0EDE5',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
};

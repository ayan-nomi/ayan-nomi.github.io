/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004ac6',
          container: '#2563eb',
          light: '#60a5fa',
        },
        secondary: '#515f74',
        surface: {
          DEFAULT: '#f9f9f9',
          dark: '#0f172a',
          container: '#eeeeee',
          lowest: '#ffffff',
          low: '#f3f3f4',
          high: '#e8e8e8',
          highest: '#e2e2e2',
        },
        dark: {
          bg: '#0b0f19',
          card: '#151c2c',
          border: '#222f47',
          text: '#f8fafc',
          subtext: '#94a3b8',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lexend', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradientX 15s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

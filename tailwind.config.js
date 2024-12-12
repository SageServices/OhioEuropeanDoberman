/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513', // Rich brown
        secondary: '#D2691E', // Rust brown
        accent: '#FFE4C4', // Tan/cream
        dark: {
          900: '#1A0F0F', // Deep brown-black
          800: '#2A1810', // Dark brown
          700: '#3D261D', // Medium brown
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
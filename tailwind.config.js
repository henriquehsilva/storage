/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'coral': '#F28585',
        'peach': '#F2C6C2', 
        'peach-light': '#F2C6C2',
        'cream': '#F2E8DF',
        'orange': '#F2B263',
        'sage': '#86A69D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
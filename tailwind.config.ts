/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-dark': '#0f172a',
        'industrial-blue': '#1e3a5f',
        'steel-gray': '#2d3748',
        'metallic-silver': '#e2e8f0',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        'gradient-steel': 'linear-gradient(135deg, #1e3a5f 0%, #2d3748 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aether: {
          bg: '#F5F0E8', // Warm Off-White (70%)
          surface: '#EDE6DB', // Soft Beige surface
          card: '#FAF6F0', // Clean warm card surface
          'card-hover': '#F2ECE1',
          'card-active': '#EBE3D6',
          border: '#E6DED2', // Soft Beige (Secondary surface/border)
          'border-subtle': '#EFE8DE',
          'border-bright': '#D8CEC0',
          primary: '#9A6048', // Clay (8%)
          'primary-hover': '#844F3A',
          'primary-muted': 'rgba(154, 96, 72, 0.10)',
          cocoa: '#332A27', // Cocoa (20%)
          'cocoa-hover': '#241D1B',
          'cocoa-muted': 'rgba(51, 42, 39, 0.08)',
          clay: '#9A6048', // Clay
          'clay-hover': '#844F3A',
          'clay-muted': 'rgba(154, 96, 72, 0.10)',
          yellow: '#D9C36A', // Pale Yellow (2%)
          'yellow-muted': 'rgba(217, 195, 106, 0.18)',
          beige: '#E6DED2', // Soft Beige
          'beige-hover': '#DDD3C4',
          accent: '#D9C36A', // Pale Yellow accent
          'accent-muted': 'rgba(217, 195, 106, 0.18)',
          success: '#4A6B53', // Warm sophisticated sage
          'success-muted': 'rgba(74, 107, 83, 0.12)',
          warning: '#D9C36A', // Pale Yellow for warnings/accents
          'warning-muted': 'rgba(217, 195, 106, 0.18)',
        },
        text: {
          primary: '#332A27', // Cocoa (Primary dark colour for headings, nav, strong text)
          secondary: '#5C4E49', // Warm dark charcoal-cocoa
          muted: '#85756E', // Readable muted cocoa
          faint: '#B0A29B', // Faint cocoa
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(51, 42, 39, 0.04), 0 1px 2px -1px rgba(51, 42, 39, 0.04)',
        'card-hover':
          '0 10px 25px -5px rgba(51, 42, 39, 0.07), 0 8px 10px -6px rgba(51, 42, 39, 0.03)',
        'glow-subtle': '0 0 16px -3px rgba(154, 96, 72, 0.08)',
        'glow-sm': '0 0 10px -2px rgba(154, 96, 72, 0.12)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        snug: '-0.01em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aether: {
          bg: '#080a0f',
          surface: '#0e121a',
          card: '#131824',
          'card-hover': '#182030',
          'card-active': '#1c2538',
          border: '#1e2638',
          'border-subtle': '#151b28',
          'border-bright': '#2d3b55',
          primary: '#0ea5e9',
          'primary-hover': '#38bdf8',
          'primary-muted': 'rgba(14, 165, 233, 0.12)',
          success: '#10b981',
          'success-muted': 'rgba(16, 185, 129, 0.12)',
          warning: '#f59e0b',
          'warning-muted': 'rgba(245, 158, 11, 0.12)',
          accent: '#6366f1',
          'accent-muted': 'rgba(99, 102, 241, 0.12)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
          faint: '#475569',
        }
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
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
        'card-hover': '0 12px 28px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glow-subtle': '0 0 25px -5px rgba(14, 165, 233, 0.12)',
        'glow-sm': '0 0 12px -2px rgba(14, 165, 233, 0.2)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
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

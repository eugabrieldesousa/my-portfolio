import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fundo: '#0B0606',
        'fundo-2': '#150B08',
        marrom: '#2A1610',
        laranja: '#FF7A1A',
        ambar: '#F5A24B',
        coral: '#FF6B5B',
        rosa: '#F4A8B0',
        creme: '#F8E6D0',
        'texto-suave': '#C9B5A0'
      },
      fontFamily: {
        serif: ['var(--fonte-serif)', 'serif'],
        sans: ['var(--fonte-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--fonte-mono)', 'monospace']
      },
      backgroundImage: {
        'glow-quente':
          'radial-gradient(circle at 50% 30%, rgba(255,122,26,0.35), rgba(255,107,91,0.15) 35%, transparent 65%)',
        'gradiente-quente':
          'linear-gradient(135deg, #FF7A1A 0%, #FF6B5B 45%, #F4A8B0 100%)'
      },
      animation: {
        'pulso-suave': 'pulsoSuave 4s ease-in-out infinite',
        'flutuar': 'flutuar 9s ease-in-out infinite',
        'brilho': 'brilho 8s ease-in-out infinite'
      },
      keyframes: {
        pulsoSuave: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        flutuar: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-20px,0) scale(1.05)' }
        },
        brilho: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' }
        }
      }
    }
  },
  plugins: []
};

export default config;

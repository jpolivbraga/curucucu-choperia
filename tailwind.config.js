/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#3D533D',
          escuro: '#2B3B2B',
          oliva: '#5E775E'
        },
        vermelho: {
          DEFAULT: '#8B3236',
          escuro: '#6E2629'
        },
        amarelo: {
          DEFAULT: '#ECA320',
          dourado: '#C88A12'
        },
        fundo: {
          DEFAULT: '#FFECD3',
          bege: '#F4DFC1',
          branco: '#FFF8EF'
        },
        terracota: '#C9794A',
        madeira: '#5A4334'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px -8px rgba(43, 59, 43, 0.35)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.25)'
      },
      backgroundImage: {
        'stone-texture': "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.08) 0, transparent 45%)"
      }
    }
  },
  plugins: []
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      workbox: {
        navigateFallbackDenylist: [/^\/docs\//]
      },
      manifest: {
        name: 'Curucucu — Pirenópolis',
        short_name: 'Curucucu',
        description: 'Arte, Chopp & Encontro no coração histórico de Pirenópolis-GO.',
        theme_color: '#3D533D',
        background_color: '#FFECD3',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  build: {
    target: 'es2018',
    minify: 'esbuild',
    cssMinify: true
  }
})
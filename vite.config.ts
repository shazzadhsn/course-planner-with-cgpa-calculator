import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  safelist: [
    'hidden'
  ],
  plugins: [
    tailwindcss(),
  ],
})
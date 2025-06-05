import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'// importo o plugin, para usar imagens format svg.


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            svgr()
  ],
})

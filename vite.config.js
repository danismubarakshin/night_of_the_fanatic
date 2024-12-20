import { defineConfig } from 'vite'
import AutoRefresh from 'vite-plugin-auto-refresh'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), AutoRefresh()],
})

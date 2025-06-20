// ForWize/Front-end/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta para o seu frontend (a mesma que você usa agora)
    proxy: {
      '/api': { // Quando o frontend chamar /api/...
        target: 'http://localhost:3300', // Redireciona para o seu backend
        changeOrigin: true, // Necessário para virtual hosted sites
       
      },
      // Se sua rota /api/test no backend é app.get('/api/test', ...) então use o acima.
      // Se seu backend não tiver o prefixo /api em suas rotas, e você quiser que /api/test no frontend vá para /test no backend
      // você pode ajustar assim:
      // '/api': {
      //   target: 'http://localhost:3300',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''), // Remove o /api do caminho antes de enviar ao backend
      // },
    },
  },
  // Para builds de produção (npm run build), se você for deployar em um subdiretório
  // base: '/seu-subdiretorio/',
});
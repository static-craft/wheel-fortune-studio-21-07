import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Автоматически берём имя репозитория из переменных GitHub Actions.
  // Если запускаем локально, используем имя репо как fallback.
  const repoName = process.env.GITHUB_REPOSITORY 
    ? process.env.GITHUB_REPOSITORY.split('/')[1] 
    : 'wheel-fortune';

  return {
    // ВАЖНО: добавляет префикс ко всем путям ассетов (JS, CSS, картинки) при сборке
    base: mode === 'production' ? `/${repoName}/` : '/',
    
    plugins: [
      react(),
      {
        name: 'inject-site-url',
        transformIndexHtml(html) {
          const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/$/, '');
          return html.replaceAll('__SITE_URL__', siteUrl);
        },
      },
    ],
  };
});
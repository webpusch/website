import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// WICHTIG: 'site' und 'base' auf den eigenen GitHub-Pages-Pfad anpassen, z.B.:
//   site: 'https://<dein-username>.github.io',
//   base: '/<repo-name>',
// Für ein User-/Org-Repo (<username>.github.io) bleibt base leer ('/').
export default defineConfig({
  site: 'https://example.github.io',
  base: '/teilwerk-demo',
  vite: {
    plugins: [tailwindcss()],
  },
});

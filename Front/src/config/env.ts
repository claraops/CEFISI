/**
 * Point d'entrée unique des variables d'environnement.
 * Les variables VITE_* sont publiques : ne jamais y placer de secret.
 */
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  candidatureUrl: import.meta.env.VITE_CANDIDATURE_URL ?? 'https://candidatures.cefisi.fr',
  siteName: import.meta.env.VITE_SITE_NAME ?? 'CEFISI',
} as const

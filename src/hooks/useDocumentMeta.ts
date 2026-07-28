import { useEffect } from 'react';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

interface DocumentMeta {
  title: string;
  description: string;
}

/**
 * SPA sin SSR: esto actualiza el <title>/meta por JS en cada ruta.
 * Cubre lo básico para compartidos (OG) y buscadores que ejecutan JS,
 * pero no reemplaza a un prerender/SSG real para SEO completo.
 */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
  }, [title, description]);
}

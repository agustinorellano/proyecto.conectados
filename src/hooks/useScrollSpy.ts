import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección actualmente "activa" en pantalla, observando
 * una franja delgada cerca del centro del viewport. Pensado para resaltar
 * el link correspondiente en el nav mientras el usuario scrollea.
 */
export function useScrollSpy(ids: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(','), enabled]);

  return activeId;
}

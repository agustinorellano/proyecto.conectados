import { useEffect, useRef } from 'react';

interface CursorGlowProps {
  color?: string;
}

/** Brillo radial sutil que sigue el cursor, pensado para fondos claros. Solo desktop (hover fino). */
export function CursorGlow({ color = '#3355FF' }: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mx = 50;
    let my = 40;
    let tx = 50;
    let ty = 40;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const el = ref.current?.parentElement;
      if (!el) return;
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
    };

    const tick = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      ref.current?.style.setProperty('--mx', `${mx}%`);
      ref.current?.style.setProperty('--my', `${my}%`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(620px circle at var(--mx, 50%) var(--my, 38%), ${color}14, transparent 60%)`,
      }}
    />
  );
}

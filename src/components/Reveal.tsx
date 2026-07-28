import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Anima al montar en vez de esperar a que entre en el viewport (para elementos above-the-fold) */
  eager?: boolean;
  /** Tag a renderizar — usar "span" dentro de elementos que no aceptan block-level children (ej. h1) */
  as?: 'div' | 'span';
}

export function Reveal({ children, className = '', delay = 0, eager = false, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eager) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  const Tag = as;

  return (
    <Tag
      // @ts-expect-error ref type varies with the polymorphic tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${as === 'span' ? 'inline-block' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

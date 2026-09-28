import { useEffect, useState } from 'react';
import { RollButton } from './RollButton';
import { Reveal } from './Reveal';

interface Node {
  label: string;
  x: number;
  y: number;
  /** Lado hacia el que se apoya la etiqueta respecto del punto */
  side: 'left' | 'right';
  /** Oculto en mobile para simplificar la línea */
  hideOnMobile?: boolean;
}

const NODES: Node[] = [
  { label: 'Estrategia', x: 8, y: 24, side: 'right' },
  { label: 'Diseño', x: 22, y: 42, side: 'right', hideOnMobile: true },
  { label: 'Desarrollo', x: 65, y: 74, side: 'left' },
  { label: 'Marketing', x: 81, y: 66, side: 'left', hideOnMobile: true },
  { label: 'Resultados', x: 95, y: 26, side: 'left' },
];

const LINE_PATH =
  'M -5 40 C 0 29, 4 25, 8 24 C 14 26, 18 35, 22 42 C 33 50, 44 62, 47 68 C 55 76, 60 76, 65 74 C 72 70, 76 68, 81 66 C 87 58, 91 34, 95 26 C 98 22, 101 20, 105 19';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <header className="relative min-h-screen flex flex-col bg-[#050A17] overflow-hidden">
      {/* Iluminación de fondo, sutil */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(49,91,255,0.16) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[35%] -right-[15%] w-[75vw] h-[75vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(49,91,255,0.14) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/4"
        style={{ background: 'radial-gradient(circle, rgba(10,18,40,0.9) 0%, rgba(5,10,23,0) 70%)', border: '1px solid rgba(49,91,255,0.12)' }}
      />

      {/* Línea de conexión + nodos */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d={LINE_PATH}
            fill="none"
            stroke="#315BFF"
            strokeWidth="1"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.4}
          />
        </svg>

        {NODES.map((node, i) => (
          <div
            key={node.label}
            className={`absolute ${node.hideOnMobile ? 'hidden sm:block' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <span
                className="absolute inset-0 -m-2 rounded-full bg-[#315BFF]/40 blur-[6px]"
                style={reducedMotion ? undefined : { animation: `nodePulse 3.6s ease-in-out ${i * 0.4}s infinite` }}
              />
              <span className="relative block w-[6px] h-[6px] rounded-full bg-[#8FA8FF]" />
              <span
                className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] sm:text-[12px] tracking-wide text-[#AEB9D4] ${
                  node.side === 'right' ? 'left-3' : 'right-3 text-right'
                }`}
                style={{
                  opacity: reducedMotion ? 0.85 : undefined,
                  animation: reducedMotion ? undefined : `labelIn 0.8s cubic-bezier(0.22,1,0.36,1) ${0.6 + i * 0.15}s both`,
                }}
              >
                {node.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-5 text-center">
        <Reveal eager>
          <h1
            className="font-medium text-[#F5F7FA] leading-[1.02] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 6.2vw, 5.6rem)' }}
          >
            Hacemos
            <br />
            que las ideas
            <br />
            <span className="text-[#315BFF]">pasen.</span>
          </h1>
        </Reveal>

        <Reveal eager delay={120}>
          <p className="mt-7 sm:mt-8 text-[#8B95B3] text-[15px] sm:text-lg leading-relaxed max-w-sm sm:max-w-md">
            Conectamos estrategia, creatividad y tecnología
            <br className="hidden sm:block" /> para convertir oportunidades en resultados.
          </p>
        </Reveal>

        <Reveal eager delay={220} className="mt-9 sm:mt-11">
          <RollButton
            text="Iniciar un proyecto"
            href="https://cal.com/contacto-conectados-hjslxl/30min"
            variant="accent"
            size="lg"
            calLink="contacto-conectados-hjslxl/30min"
          />
        </Reveal>
      </div>

      <div className="relative z-20 flex items-end justify-between px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <p className="text-[10px] sm:text-[11px] text-[#5D6785] tracking-[0.18em] uppercase leading-relaxed">
          Tu proyecto,
          <br />
          nuestra conexión.
        </p>
        <div className="hidden sm:flex flex-col items-center gap-2">
          <span className="text-[10px] text-[#5D6785] tracking-[0.25em] uppercase">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-[#5D6785] to-transparent" />
        </div>
      </div>
    </header>
  );
}

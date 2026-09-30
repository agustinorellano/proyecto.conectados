import { useEffect, useRef, useState } from 'react';

interface Stage {
  key: string;
  label: string;
}

const STAGES: Stage[] = [
  { key: 'diagnostico', label: 'Diagnóstico' },
  { key: 'estrategia', label: 'Estrategia' },
  { key: 'ejecucion', label: 'Ejecución' },
  { key: 'optimizacion', label: 'Optimización continua' },
];

export function useReducedMotion() {
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

export function BuildStack() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const canHover = useRef(false);

  useEffect(() => {
    canHover.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 2600);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !canHover.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 5, ry: px * 5 });
  };
  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
      <div
        className="relative w-full max-w-[340px] sm:max-w-[380px]"
        style={{ perspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute -inset-x-6 bottom-2 h-20 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(51,85,255,0.4) 0%, transparent 70%)',
            filter: 'blur(24px)',
          }}
        />
        <img
          src="/build-stack.webp"
          alt="Capas de un producto digital en construcción: diagnóstico, estrategia, ejecución y resultado"
          className="relative w-full h-auto"
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
      </div>

      <div className="flex flex-row lg:flex-col gap-5 lg:gap-7 flex-wrap justify-center">
        {STAGES.map((stage, i) => {
          const isActive = i === active;
          return (
            <div
              key={stage.key}
              className="flex items-center gap-3 transition-opacity duration-500"
              style={{ opacity: isActive ? 1 : 0.4 }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${
                  isActive ? 'bg-[#3355FF]' : 'bg-white/30'
                }`}
              />
              <span className="hidden sm:block w-5 h-px bg-white/20 flex-shrink-0" />
              <span className="text-[13px] text-white whitespace-nowrap">{stage.label}</span>
              <span className="text-[11px] text-white/40">0{i + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

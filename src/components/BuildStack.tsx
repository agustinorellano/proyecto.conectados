import { useEffect, useRef, useState, type RefObject, type ReactElement } from 'react';

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

interface LayerDef {
  key: string;
  label: string;
  content: ReactElement;
}

function IdeaLayer() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
      <span className="absolute left-[18%] top-[30%] w-10 h-10 rounded-full border border-white/25" />
      <span className="absolute left-[62%] top-[58%] w-1.5 h-1.5 rounded-full bg-white/40" />
      <span className="absolute left-[70%] top-[28%] w-1 h-1 rounded-full bg-white/30" />
      <svg className="absolute inset-0 w-full h-full">
        <line x1="30%" y1="45%" x2="58%" y2="60%" stroke="white" strokeOpacity="0.18" strokeDasharray="3 4" />
      </svg>
    </div>
  );
}

function EstrategiaLayer() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-white/[0.05] border border-white/10 overflow-hidden p-5 flex flex-col justify-center gap-2.5">
      {[62, 42, 52].map((w, i) => (
        <span key={i} className="h-1.5 rounded-full bg-[#5B7CFF]/35" style={{ width: `${w}%` }} />
      ))}
      <span className="absolute left-5 top-5 bottom-5 w-px bg-white/10" />
    </div>
  );
}

function DisenoLayer() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-[#0B142C] border border-[#315BFF]/25 overflow-hidden p-5">
      <span className="text-white font-semibold text-2xl leading-none select-none">Aa</span>
      <span className="absolute right-5 top-5 w-8 h-8 rounded-lg bg-[#315BFF]" />
      <span className="absolute right-5 bottom-5 w-10 h-6 rounded-md bg-white/90" />
    </div>
  );
}

function DesarrolloLayer() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-[#080D1E] border border-white/10 overflow-hidden p-5 flex flex-col justify-center gap-2">
      {[70, 45, 58, 30].map((w, i) => (
        <span
          key={i}
          className={`h-1 rounded-full ${i === 2 ? 'bg-[#5B7CFF]/60' : 'bg-white/12'}`}
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

function ResultadoLayer() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-[#F5F7FA] overflow-hidden shadow-[0_20px_60px_rgba(49,91,255,0.25)]">
      <div className="flex items-center gap-1.5 px-4 pt-4">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
      </div>
      <div className="px-4 pt-3 flex flex-col gap-2">
        <span className="block h-2 w-2/3 rounded-full bg-gray-200" />
        <span className="block h-2 w-1/2 rounded-full bg-gray-200" />
        <span className="mt-2 inline-flex w-fit px-3 py-1.5 rounded-full bg-[#315BFF] text-white text-[10px] font-medium">
          Listo
        </span>
      </div>
    </div>
  );
}

const LAYERS: LayerDef[] = [
  { key: 'idea', label: 'Idea', content: <IdeaLayer /> },
  { key: 'estrategia', label: 'Estrategia', content: <EstrategiaLayer /> },
  { key: 'diseno', label: 'Diseño', content: <DisenoLayer /> },
  { key: 'desarrollo', label: 'Desarrollo', content: <DesarrolloLayer /> },
  { key: 'resultado', label: 'Resultado', content: <ResultadoLayer /> },
];

const BASE_Y = 24;
const BASE_Z = 16;
const BASE_TILT_X = 10;
const BASE_TILT_Y = -6;

interface BuildStackProps {
  containerRef: RefObject<HTMLDivElement | null>;
  /** Sin scroll-jack: muestra el objeto ya ensamblado (mobile / reduced motion) */
  staticMode: boolean;
}

export function BuildStack({ containerRef, staticMode }: BuildStackProps) {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stackRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(staticMode ? LAYERS.length - 1 : 0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const canHover = useRef(false);

  useEffect(() => {
    canHover.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  useEffect(() => {
    if (staticMode) {
      LAYERS.forEach((_, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        el.style.transform = `translate3d(0px, ${i * BASE_Y}px, ${i * BASE_Z}px)`;
        el.style.opacity = '1';
        el.style.filter = 'none';
      });
      if (glowRef.current) glowRef.current.style.opacity = '0.5';
      setActiveStage(LAYERS.length - 1);
      return;
    }

    let ticking = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0));
      const progress = total > 0 ? scrolled / total : 0;

      const spacingScale = 3.2 - 2.2 * progress;

      LAYERS.forEach((_, i) => {
        const layerEl = layerRefs.current[i];
        if (!layerEl) return;
        const reveal = Math.min(Math.max((progress - i * 0.16) / 0.3, 0), 1);
        const y = i * BASE_Y * spacingScale;
        const z = i * BASE_Z * spacingScale;
        layerEl.style.transform = `translate3d(0px, ${y}px, ${z}px)`;
        layerEl.style.opacity = String(0.3 + 0.7 * reveal);
        layerEl.style.filter = `brightness(${0.7 + 0.3 * reveal})`;
      });

      if (glowRef.current) {
        glowRef.current.style.opacity = String(0.15 + 0.45 * progress);
      }

      setActiveStage((prev) => {
        const next = Math.min(LAYERS.length - 1, Math.floor(progress * LAYERS.length));
        return prev === next ? prev : next;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      timeoutId = setTimeout(update, 16);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [containerRef, staticMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (staticMode || !canHover.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 4, ry: px * 4 });
  };
  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-14">
      <div
        className={`relative ${staticMode ? 'overflow-hidden' : ''}`}
        style={{ perspective: 1400, width: 320, height: 420 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={glowRef}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[220px] h-[80px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(49,91,255,0.55) 0%, transparent 70%)', filter: 'blur(20px)', opacity: 0.15 }}
        />
        <div
          ref={stackRef}
          className="absolute inset-0 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${BASE_TILT_X + tilt.rx}deg) rotateY(${BASE_TILT_Y + tilt.ry}deg)`,
            transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {LAYERS.map((layer, i) => (
            <div
              key={layer.key}
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[130px] sm:w-[260px] sm:h-[168px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {layer.content}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-5 lg:gap-7 flex-wrap justify-center">
        {LAYERS.map((layer, i) => {
          const isActive = i === activeStage;
          return (
            <div
              key={layer.key}
              className="flex items-center gap-3 transition-opacity duration-500"
              style={{ opacity: isActive ? 1 : 0.4 }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${
                  isActive ? 'bg-[#5B7CFF]' : 'bg-white/30'
                }`}
              />
              <span className="hidden sm:block w-5 h-px bg-white/20 flex-shrink-0" />
              <span className="text-[13px] text-white whitespace-nowrap">{layer.label}</span>
              <span className="text-[11px] text-white/40">0{i + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

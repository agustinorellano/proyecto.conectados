import { useEffect, useRef, useState } from 'react';
import { Search, Compass, ArrowUpRight, RefreshCw, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { LogoBadge } from './Logo';

interface PostState {
  title: string;
  description: string;
  bg: string;
}

const STATES: PostState[] = [
  {
    title: 'Investigación',
    description: 'Entendemos tu negocio, tu mercado y tu audiencia antes de proponer nada.',
    bg: '#F7F6F3',
  },
  {
    title: 'Estrategia',
    description: 'Definimos un plan claro, no una lista de tareas sueltas.',
    bg: '#F3F5FF',
  },
  {
    title: 'Diseño',
    description: 'Cada pieza piensa en cómo se usa, no solo en cómo se ve.',
    bg: '#0B1230',
  },
  {
    title: 'Iteración',
    description: 'Medimos y ajustamos después del lanzamiento, no solo antes.',
    bg: '#F7F6F3',
  },
];

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

function InvestigacionArt() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#0F172A26 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />

      <div className="absolute top-[12%] right-[10%] w-[38%] aspect-square rounded-full border-[1.5px] border-[#0B1230]/70 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
        <Search size={26} className="text-[#3355FF]" strokeWidth={1.6} />
      </div>
      <div className="absolute top-[40%] right-[8%] w-[16%] h-[2px] bg-[#0B1230]/70 rotate-45 origin-left rounded-full" />

      <div className="absolute left-[9%] top-[16%] w-[42%] bg-white rounded-xl shadow-[0_10px_24px_rgba(15,23,42,0.12)] px-3.5 py-3 -rotate-2">
        <span className="block w-8 h-1 rounded-full bg-[#3355FF] mb-2" />
        <span className="block w-full h-1 rounded-full bg-gray-200 mb-1.5" />
        <span className="block w-2/3 h-1 rounded-full bg-gray-200" />
      </div>

      <div className="absolute left-[10%] bottom-[16%] flex items-end gap-1.5 bg-white/70 rounded-lg p-2.5">
        {[9, 16, 12, 21, 15].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-[#0B1230]"
            style={{ height: h, opacity: 0.35 + i * 0.13 }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="58%" y1="70%" x2="72%" y2="58%" stroke="#3355FF" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6" />
      </svg>
      <span className="absolute left-[56%] top-[68%] w-2 h-2 rounded-full bg-[#3355FF]" />
      <span className="absolute left-[71%] top-[56%] w-1.5 h-1.5 rounded-full bg-[#0B1230]/60" />
    </div>
  );
}

function EstrategiaArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-[8%] left-[8%] right-[8%] h-px bg-[#0B1230]/10" />

      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
        <path
          d="M28 158 L78 112 L118 132 L172 52"
          fill="none"
          stroke="#0B1230"
          strokeWidth="1.5"
          strokeDasharray="1 6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="28" cy="158" r="4.5" fill="#0B1230" opacity="0.75" />
        <circle cx="78" cy="112" r="9" fill="none" stroke="#3355FF" strokeWidth="1.5" />
        <circle cx="78" cy="112" r="4" fill="#3355FF" />
        <circle cx="118" cy="132" r="4.5" fill="#0B1230" opacity="0.75" />
        <circle cx="172" cy="52" r="10" fill="none" stroke="#3355FF" strokeWidth="1.5" />
        <circle cx="172" cy="52" r="5" fill="#3355FF" />
      </svg>

      <div className="absolute top-[20%] right-[12%] w-10 h-10 rounded-full bg-[#3355FF] flex items-center justify-center rotate-12 shadow-[0_10px_20px_rgba(51,85,255,0.35)]">
        <ArrowUpRight size={19} className="text-white" strokeWidth={2.2} />
      </div>

      <span className="absolute left-[9%] bottom-[20%] w-11 h-11 rounded-2xl bg-white shadow-[0_10px_24px_rgba(15,23,42,0.1)] flex items-center justify-center -rotate-6">
        <Compass size={20} className="text-[#0B1230]/80" strokeWidth={1.5} />
      </span>

      <div className="absolute right-[13%] bottom-[13%] flex">
        <span className="w-11 h-11 rounded-xl bg-white shadow-[0_10px_24px_rgba(15,23,42,0.1)] rotate-6 -mr-4 border border-gray-100" />
        <span className="w-11 h-11 rounded-xl bg-[#3355FF]/12 shadow-[0_10px_24px_rgba(15,23,42,0.06)] -rotate-6 border border-[#3355FF]/20" />
      </div>
    </div>
  );
}

function DisenoArt() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '14% 14%',
        }}
      />
      <div className="absolute inset-0 p-[11%]">
        <div className="relative w-full h-full">
          <span
            className="absolute -left-[2%] -top-[4%] font-semibold text-white leading-none select-none"
            style={{ fontSize: '3.6rem' }}
          >
            Aa
          </span>
          <span className="absolute right-0 top-0 w-[30%] aspect-square rounded-2xl bg-[#3355FF] rotate-6 shadow-[0_16px_32px_rgba(51,85,255,0.35)]" />
          <span className="absolute right-[20%] top-[40%] w-[20%] aspect-square rounded-full border-2 border-white/70" />
          <span className="absolute left-0 bottom-0 w-[46%] aspect-[3/2] rounded-xl bg-white" />
          <span className="absolute left-[40%] bottom-[8%] w-[26%] aspect-[3/2] rounded-xl bg-[#3355FF] -rotate-3 shadow-[0_16px_32px_rgba(51,85,255,0.3)]" />
        </div>
      </div>
    </div>
  );
}

function IteracionArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[8%] right-[8%] bottom-[15%] h-px bg-[#0B1230]/10" />

      <svg viewBox="0 0 200 140" className="absolute left-[8%] right-[8%] bottom-[17%] h-[50%] w-[84%]">
        <polyline
          points="10,120 55,92 95,102 140,52 190,20"
          fill="none"
          stroke="#3355FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [10, 120],
          [55, 92],
          [95, 102],
          [140, 52],
          [190, 20],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 4 ? 5.5 : 3.5}
            fill={i === 4 ? '#3355FF' : '#0B1230'}
            opacity={i === 4 ? 1 : 0.55}
          />
        ))}
      </svg>

      <span className="absolute right-[10%] top-[13%] w-9 h-9 rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.1)] flex items-center justify-center">
        <RefreshCw size={16} className="text-[#0B1230]/70" strokeWidth={1.8} />
      </span>

      <div className="absolute left-[9%] top-[14%] flex items-center">
        <span className="px-2.5 py-1 rounded-full bg-white shadow-[0_6px_16px_rgba(15,23,42,0.1)] text-[10px] font-medium text-gray-400 -mr-2 rotate-2">
          antes
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#3355FF] text-white text-[10px] font-medium -rotate-2 shadow-[0_6px_16px_rgba(51,85,255,0.3)]">
          después
        </span>
      </div>
    </div>
  );
}

const ART = [InvestigacionArt, EstrategiaArt, DisenoArt, IteracionArt];

export function AgencyPost() {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollDebounce = useRef<ReturnType<typeof setTimeout>>();

  const goTo = (index: number, behavior: ScrollBehavior = 'smooth') => {
    setActive(index);
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: reducedMotion ? 'auto' : behavior });
  };

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % STATES.length;
        const el = trackRef.current;
        if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [active, reducedMotion]);

  useEffect(() => {
    setLiked(false);
    setShowBurst(false);
    if (reducedMotion) return;

    const likeTimer = setTimeout(() => {
      setLiked(true);
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 650);
    }, 1500);

    return () => clearTimeout(likeTimer);
  }, [active, reducedMotion]);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive((prev) => (prev === idx ? prev : idx));
    }, 90);
  };

  useEffect(() => {
    const onResize = () => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollTo({ left: active * el.clientWidth, behavior: 'auto' });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = STATES[active];

  return (
    <div className="w-full max-w-[380px]">
      <div className="relative bg-white rounded-[28px] border border-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] overflow-hidden aspect-[4/5] flex flex-col">
        <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 flex-shrink-0">
          <LogoBadge className="w-7 h-7" />
          <span className="text-[13px] font-semibold text-gray-900">conectado.</span>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="w-1 h-1 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="relative mx-5 rounded-2xl overflow-hidden flex-1">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="hide-scrollbar flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {STATES.map((s, i) => {
              const Art = ART[i];
              return (
                <div
                  key={s.title}
                  className="relative h-full w-full flex-shrink-0 snap-center"
                  style={{ backgroundColor: s.bg }}
                >
                  <Art />
                </div>
              );
            })}
          </div>

          {showBurst && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Heart
                size={72}
                className="text-[#3355FF] fill-[#3355FF] drop-shadow-[0_8px_20px_rgba(51,85,255,0.45)]"
                style={{ animation: 'heartBurst 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-5 pt-3">
          <div className="flex items-center gap-3.5">
            <Heart
              size={19}
              strokeWidth={1.7}
              className={liked ? 'text-[#3355FF] fill-[#3355FF]' : 'text-gray-400'}
              style={liked ? { animation: 'heroClickPop 0.45s cubic-bezier(0.34,1.56,0.64,1)' } : undefined}
            />
            <MessageCircle size={19} strokeWidth={1.7} className="text-gray-400" />
            <Send size={18} strokeWidth={1.7} className="text-gray-400" />
          </div>
          <Bookmark size={18} strokeWidth={1.7} className="text-gray-400" />
        </div>

        <div key={`caption-${active}`} className="px-5 pt-2.5 pb-2">
          <h3 className="text-[15px] font-semibold text-gray-900 mb-1">{state.title}</h3>
          <p className="text-[12.5px] text-gray-500 leading-relaxed">{state.description}</p>
        </div>

        <div className="flex items-center gap-2 px-5 pb-5 pt-1 flex-shrink-0">
          {STATES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver ${s.title}`}
              aria-current={i === active}
              className="p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3355FF] rounded-full"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active ? 'w-5 h-1.5 bg-[#3355FF]' : 'w-1.5 h-1.5 bg-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

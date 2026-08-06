import { Search, Compass, PenTool, RefreshCw, ArrowRight } from 'lucide-react';
import { RollButton } from './RollButton';
import { Reveal } from './Reveal';

const HIGHLIGHTS = [
  {
    icon: Search,
    title: 'Investigación',
    description: 'Entendemos tu negocio, tu mercado y tu audiencia antes de proponer nada.',
    color: '#3355FF',
    bg: '#EEF2FF',
  },
  {
    icon: Compass,
    title: 'Estrategia',
    description: 'Definimos un plan claro, no una lista de tareas sueltas.',
    color: '#7C3AED',
    bg: '#F3EEFF',
  },
  {
    icon: PenTool,
    title: 'Diseño',
    description: 'Cada pieza piensa en cómo se usa, no solo en cómo se ve.',
    color: '#10B981',
    bg: '#EAFBF3',
  },
  {
    icon: RefreshCw,
    title: 'Iteración',
    description: 'Medimos y ajustamos después del lanzamiento, no solo antes.',
    color: '#F97316',
    bg: '#FFF1E6',
  },
];

export function About() {
  return (
    <section id="estudio" className="relative bg-[#F7F6F3] overflow-hidden">
      <div className="relative bg-gradient-to-br from-[#0B1230] to-[#050814] pt-16 sm:pt-20 lg:pt-28 pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 text-[11px] sm:text-xs font-semibold flex items-center justify-center">
              1
            </span>
            <span className="text-xs sm:text-[13px] font-medium border border-white/15 text-white/80 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              Presentamos Proyecto Conectados
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="font-medium text-white leading-[1.12] tracking-[-0.02em] mb-6 max-w-xl"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.9rem)' }}
            >
              Estrategia y ejecución en <span className="text-[#7C93FF]">un solo equipo</span>
            </h2>
            <p className="text-[15px] sm:text-lg leading-relaxed text-white/60 max-w-md mb-8">
              A través de investigación, diseño estratégico e iteración constante ayudamos a
              empresas en crecimiento a alcanzar su potencial digital completo — con resultados en
              cada uno de tus 4 pilares.
            </p>
            <RollButton
              text="Conocé nuestro estudio"
              href="/#contacto"
              variant="ghost-light"
              size="lg"
            />
          </Reveal>
        </div>

        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[90px] translate-y-px"
        >
          <path d="M0,100 C480,10 960,100 1440,30 L1440,100 L0,100 Z" fill="#F7F6F3" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-start">
          <div className="flex flex-col-reverse sm:flex-row sm:items-end gap-6 sm:gap-2">
            <Reveal delay={180} className="sm:w-[160px] flex-shrink-0">
              <span className="text-4xl font-medium text-[#3355FF] leading-none">&ldquo;</span>
              <p className="text-gray-900 text-base leading-snug -mt-2">
                Trabajamos como un equipo interno, enfocados en lo que realmente hace crecer tu{' '}
                <span className="text-[#3355FF] font-medium">negocio</span>.
              </p>
              <span className="block w-6 h-0.5 bg-[#3355FF] mt-3" />
            </Reveal>
            <Reveal delay={100} className="relative z-10 flex-1 min-w-0 -mt-12 sm:-mt-20">
              <img
                src="/personaje-conectados.png"
                alt="Ilustración del equipo de Proyecto Conectados"
                className="w-full max-w-[190px] sm:max-w-[360px] mx-auto sm:mx-0"
              />
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-gray-200" />
            {HIGHLIGHTS.map((h, i) => {
              const HIcon = h.icon;
              return (
                <Reveal key={h.title} delay={140 + i * 90}>
                  <div
                    className={`relative flex items-center gap-5 sm:gap-6 py-6 ${
                      i !== 0 ? 'border-t border-gray-200' : ''
                    }`}
                  >
                    <span
                      className="absolute left-[27px] sm:left-[31px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#3355FF] z-10"
                    />
                    <span
                      className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: h.bg }}
                    >
                      <HIcon size={24} style={{ color: h.color }} strokeWidth={1.8} />
                    </span>
                    <span
                      className="hidden sm:block font-medium leading-none flex-shrink-0"
                      style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: h.bg, WebkitTextStroke: `1.5px ${h.color}30` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] sm:text-base font-semibold text-gray-900 mb-1">
                        {h.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="hidden sm:block flex-shrink-0"
                      style={{ color: h.color }}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

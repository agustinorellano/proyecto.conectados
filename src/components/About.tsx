import { Search, Compass, PenTool, RefreshCw } from 'lucide-react';
import { RollButton } from './RollButton';
import { Reveal } from './Reveal';

const HIGHLIGHTS = [
  {
    icon: Search,
    title: 'Investigación',
    description: 'Entendemos tu negocio antes de proponer nada.',
  },
  {
    icon: Compass,
    title: 'Estrategia',
    description: 'Definimos un plan claro, no una lista de tareas sueltas.',
  },
  {
    icon: PenTool,
    title: 'Diseño',
    description: 'Cada pieza piensa en cómo se usa, no solo en cómo se ve.',
  },
  {
    icon: RefreshCw,
    title: 'Iteración',
    description: 'Medimos y ajustamos después del lanzamiento, no solo antes.',
  },
];

export function About() {
  return (
    <section
      id="estudio"
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center">
            1
          </span>
          <span className="text-xs sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Presentamos Proyecto Conectados
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Reveal delay={80}>
              <h2
                className="font-medium text-gray-900 leading-[1.12] tracking-[-0.02em] mb-6"
                style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)' }}
              >
                Estrategia y ejecución en un solo equipo
              </h2>
              <p className="text-[15px] sm:text-lg leading-relaxed text-gray-600 max-w-md mb-8">
                A través de investigación, diseño estratégico e iteración constante ayudamos a
                empresas en crecimiento a alcanzar su potencial digital completo — con resultados
                en cada uno de tus 4 pilares.
              </p>
              <RollButton text="Conocé nuestro estudio" href="#contacto" variant="ghost" size="lg" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {HIGHLIGHTS.map((h, i) => {
              const HIcon = h.icon;
              return (
                <Reveal key={h.title} delay={140 + i * 70}>
                  <div className="border border-gray-200 rounded-2xl p-6 h-full">
                    <span className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                      <HIcon size={20} className="text-[#3355FF]" strokeWidth={1.6} />
                    </span>
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{h.title}</h3>
                    <p className="text-[13.5px] text-gray-600 leading-relaxed">{h.description}</p>
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

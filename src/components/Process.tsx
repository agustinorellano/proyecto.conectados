import { Search, Compass, Rocket, RefreshCw } from 'lucide-react';
import { Reveal } from './Reveal';

const STEPS = [
  {
    icon: Search,
    title: 'Diagnóstico',
    description: 'Analizamos tu negocio y detectamos qué pilares necesita para crecer.',
  },
  {
    icon: Compass,
    title: 'Estrategia',
    description: 'Armamos un plan con el alcance, los tiempos y los pilares indicados.',
  },
  {
    icon: Rocket,
    title: 'Ejecución',
    description: 'Trabajamos en sprints con avances visibles desde la primera semana.',
  },
  {
    icon: RefreshCw,
    title: 'Optimización continua',
    description: 'Medimos resultados y seguimos ajustando después del lanzamiento.',
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-gradient-to-br from-[#0B1230] to-[#050814] py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="absolute top-[-25%] right-[-15%] w-[60vw] h-[60vw] max-w-[720px] max-h-[720px] rounded-full bg-[#3355FF]/20 blur-[2px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-15%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-[#3355FF]/10 blur-[2px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center text-center mb-20 sm:mb-28">
          <span className="text-xs sm:text-sm font-medium border border-white/15 text-white/80 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-8">
            Nuestro proceso
          </span>
          <h2
            className="font-medium text-white leading-[1.15] tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)' }}
          >
            De diagnóstico a resultados, en 4 pasos
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-x-8 sm:gap-y-16">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 100} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] rounded-full bg-white/[0.06] border border-white/10 mb-7">
                  <Icon size={32} className="text-white" strokeWidth={1.4} />
                  <span
                    className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-[#3355FF] text-white flex items-center justify-center font-medium"
                    style={{ fontSize: 13 }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-medium mb-2.5">{step.title}</h3>
                <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

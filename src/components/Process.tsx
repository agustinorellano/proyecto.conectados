import { Search, Compass, Rocket, RefreshCw } from 'lucide-react';
import { Reveal } from './Reveal';

const STEPS = [
  {
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Te devolvemos un diagnóstico con las oportunidades concretas para tu negocio — sin costo, sin compromiso.',
    cta: 'Agendar esta llamada',
  },
  {
    icon: Compass,
    title: 'Estrategia',
    description:
      'Te armamos un plan con el alcance y los pilares indicados, para que sepas exactamente qué vas a recibir.',
  },
  {
    icon: Rocket,
    title: 'Ejecución',
    description: 'Vas viendo avances reales desde la primera semana, no recién al final.',
  },
  {
    icon: RefreshCw,
    title: 'Optimización continua',
    description: 'Te compartimos los resultados medidos y seguimos ajustando junto con vos.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative bg-white py-24 sm:py-32 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium border border-gray-300 text-gray-600 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-8">
            Nuestro proceso
          </span>
          <h2
            className="font-medium text-gray-900 leading-[1.15] tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)' }}
          >
            De diagnóstico a resultados, en 4 pasos
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-x-8 sm:gap-y-14">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 100} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#EEF2FF] mb-6">
                  <Icon size={24} className="text-[#3355FF]" strokeWidth={1.6} />
                  <span
                    className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#3355FF] text-white flex items-center justify-center font-medium"
                    style={{ fontSize: 11 }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-gray-900 text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-[13.5px] sm:text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
                {step.cta && (
                  <a
                    href="https://cal.com/contacto-conectados-hjslxl/30min"
                    data-cal-link="contacto-conectados-hjslxl/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="inline-block mt-3 text-[13px] font-medium text-[#3355FF] hover:text-[#2646E0] transition-colors duration-300"
                  >
                    {step.cta} →
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={420} className="text-center mt-14 sm:mt-16">
          <p className="text-gray-500 text-sm sm:text-[15px]">
            De la llamada al lanzamiento, sin sorpresas en el medio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

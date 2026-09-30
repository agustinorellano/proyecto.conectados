import { Search, Target, PenTool, Code2, TrendingUp, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { RollButton } from './RollButton';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  x: number;
  y: number;
}

const STEPS: Step[] = [
  {
    icon: Search,
    title: 'Descubrimiento',
    description: 'Analizamos, exploramos y entendemos tu negocio, tu mercado y a tus usuarios.',
    x: 10,
    y: 58,
  },
  {
    icon: Target,
    title: 'Estrategia',
    description: 'Definimos objetivos, trazamos el plan y establecemos las bases para lograrlo.',
    x: 29,
    y: 78,
  },
  {
    icon: PenTool,
    title: 'Diseño',
    description: 'Creamos experiencias que comunican, conectan y generan valor real.',
    x: 50,
    y: 24,
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description:
      'Convertimos las ideas en productos digitales sólidos, escalables y de alto rendimiento.',
    x: 70,
    y: 62,
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento',
    description:
      'Medimos, optimizamos y hacemos evolucionar el proyecto para generar resultados sostenidos.',
    x: 89,
    y: 28,
  },
];

const LINE_PATH =
  'M -3 50 C 3 42, 6 40, 10 58 C 15 70, 22 78, 29 78 C 38 78, 42 40, 50 24 C 58 8, 63 55, 70 62 C 77 68, 82 30, 89 28 C 94 26, 98 24, 103 22';

export function Process() {
  return (
    <section id="proceso" className="relative bg-gradient-to-b from-white to-[#F7F8FF] py-24 sm:py-32 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-xl mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#3355FF] tracking-wide mb-5">
            <span className="w-4 h-px bg-[#3355FF]" />
            NUESTRO ECOSISTEMA
          </span>
          <h2
            className="font-medium text-gray-900 leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)' }}
          >
            Del descubrimiento
            <br />
            al <span className="text-[#3355FF]">crecimiento.</span>
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-lg leading-relaxed max-w-sm">
            Un ecosistema digital que acompaña al consumidor en cada etapa del recorrido.
          </p>
        </Reveal>

        <div className="relative hidden lg:block" style={{ height: 460 }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path
              d={LINE_PATH}
              fill="none"
              stroke="#3355FF"
              strokeWidth="1"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity={0.3}
            />
          </svg>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="absolute w-[240px] -translate-x-1/2"
                style={{ left: `${step.x}%`, top: `${step.y}%` }}
              >
                <Reveal delay={i * 100} className="relative">
                  <span
                    className="absolute w-2 h-2 rounded-full bg-[#3355FF]"
                    style={{ left: '50%', top: -18, transform: 'translateX(-50%)' }}
                  />
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-5">
                    <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#EEF2FF] mb-4">
                      <Icon size={19} className="text-[#3355FF]" strokeWidth={1.7} />
                    </span>
                    <span className="block text-[#3355FF] text-[11px] font-semibold tracking-wide mb-1">
                      0{i + 1}
                    </span>
                    <h3 className="text-gray-900 text-[15px] font-semibold mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_16px_40px_rgba(15,23,42,0.06)] p-5 h-full">
                  <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#EEF2FF] mb-4">
                    <Icon size={19} className="text-[#3355FF]" strokeWidth={1.7} />
                  </span>
                  <span className="block text-[#3355FF] text-[11px] font-semibold tracking-wide mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="text-gray-900 text-[15px] font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={420} className="flex flex-col items-center text-center mt-16 sm:mt-20">
          <RollButton
            text="Agendar esta llamada"
            href="https://cal.com/contacto-conectados-hjslxl/30min"
            variant="accent"
            size="lg"
            calLink="contacto-conectados-hjslxl/30min"
          />
          <p className="text-gray-500 text-sm sm:text-[15px] mt-6">
            De la llamada al lanzamiento, sin sorpresas en el medio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

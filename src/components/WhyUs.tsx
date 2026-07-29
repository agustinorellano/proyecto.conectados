import { Rocket } from 'lucide-react';
import { RollButton } from './RollButton';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';

export function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <Reveal>
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            ¿Por qué elegir
            <br />
            Proyecto Conectados?
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-lg leading-relaxed max-w-md mb-9">
            Tomamos la necesidad de tu negocio como propia. Cada proyecto es un desafío distinto,
            y lo resolvemos con soluciones pensadas para vos — no con plantillas genéricas.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <RollButton
              text="Agendar una llamada"
              href="https://cal.com/contacto-conectados-hjslxl/30min"
              variant="dark"
              size="lg"
              calLink="contacto-conectados-hjslxl/30min"
            />
            <div className="inline-flex items-center gap-3 bg-white rounded-[4px] px-3 py-2 border border-gray-200">
              <LogoMark className="w-5 h-5 text-[#3355FF]" />
              <span className="text-[13px] sm:text-sm font-medium text-gray-900">
                Un solo equipo, 4 pilares
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] flex items-center justify-center">
            <div
              className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full"
              style={{
                right: '8%',
                top: '4%',
                background: 'linear-gradient(155deg, #5C7CFF, #1E2FB0)',
              }}
            />
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full"
              style={{
                right: '20%',
                bottom: '6%',
                background: 'radial-gradient(circle at 35% 30%, #141B45, #050814)',
              }}
            />

            <div className="absolute left-[6%] top-[14%] w-[92px] h-[92px] sm:w-[104px] sm:h-[104px] rounded-full bg-white border border-gray-200 shadow-[0_8px_24px_rgba(15,23,42,0.1)] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_16s_linear_infinite]">
                <defs>
                  <path
                    id="whyus-circle-path"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="7.2" fill="#6b7280" letterSpacing="1.5">
                  <textPath href="#whyus-circle-path">
                    PROYECTO CONECTADOS • AGENCIA INTEGRAL •
                  </textPath>
                </text>
              </svg>
              <LogoMark className="w-6 h-6 text-[#3355FF]" />
            </div>

            <div className="absolute right-[6%] bottom-[10%] w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white border border-gray-200 shadow-[0_8px_24px_rgba(15,23,42,0.1)] flex items-center justify-center">
              <Rocket size={24} className="text-[#3355FF]" strokeWidth={1.6} />
            </div>

            <span className="absolute left-[2%] bottom-[18%] w-2.5 h-2.5 rounded-full bg-[#3355FF]/40" />
            <span className="absolute right-[2%] top-[6%] w-2 h-2 rounded-full bg-[#3355FF]/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

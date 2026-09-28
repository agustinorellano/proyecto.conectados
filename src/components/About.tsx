import { useEffect, useRef, useState } from 'react';
import { RollButton } from './RollButton';
import { Reveal } from './Reveal';
import { BuildStack, useReducedMotion } from './BuildStack';

function useIsNarrow() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setNarrow(mq.matches);
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return narrow;
}

export function About() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isNarrow = useIsNarrow();
  const staticMode = reducedMotion || isNarrow;

  return (
    <section
      id="estudio"
      className="relative bg-gradient-to-br from-[#0B1230] to-[#050814]"
    >
      <div ref={scrollWrapperRef} className={`relative ${staticMode ? '' : 'h-[220vh]'}`}>
        <div
          className={`${
            staticMode ? '' : 'sticky top-0 h-screen'
          } flex items-center py-16 sm:py-24 lg:py-28`}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 text-[11px] sm:text-xs font-semibold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium border border-white/15 text-white/80 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                    Presentamos Conectado.
                  </span>
                </div>

                <h2
                  className="font-medium text-white leading-[1.12] tracking-[-0.02em] mb-6 max-w-lg"
                  style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)' }}
                >
                  Estrategia y ejecución en <span className="text-[#7C93FF]">un solo equipo</span>
                </h2>
                <p className="text-[15px] sm:text-lg leading-relaxed text-white/60 max-w-md mb-9">
                  A través de investigación, diseño estratégico e iteración constante ayudamos a
                  empresas en crecimiento a alcanzar su potencial digital completo — con
                  resultados concretos en cada proyecto.
                </p>
                <RollButton
                  text="Conocé nuestro estudio"
                  href="/#contacto"
                  variant="ghost-light"
                  size="lg"
                />
              </Reveal>

              <Reveal delay={140} className="flex justify-center lg:justify-end">
                <BuildStack containerRef={scrollWrapperRef} staticMode={staticMode} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[90px] translate-y-px pointer-events-none"
      >
        <path d="M0,100 C480,10 960,100 1440,30 L1440,100 L0,100 Z" fill="#F5F5F5" />
      </svg>
    </section>
  );
}

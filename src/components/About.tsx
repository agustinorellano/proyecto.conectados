import { RollButton } from './RollButton';
import { Reveal } from './Reveal';
import { AgencyPost } from './AgencyPost';

export function About() {
  return (
    <section
      id="estudio"
      className="relative bg-gradient-to-br from-[#0B1230] to-[#050814] pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:pb-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
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
              empresas en crecimiento a alcanzar su potencial digital completo — con resultados
              concretos en cada proyecto.
            </p>
            <RollButton text="Conocé nuestro estudio" href="/#contacto" variant="ghost-light" size="lg" />
          </Reveal>

          <Reveal delay={140} className="flex justify-center lg:justify-end">
            <AgencyPost />
          </Reveal>
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

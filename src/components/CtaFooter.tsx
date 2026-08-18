import { Link } from 'react-router-dom';
import { RollButton } from './RollButton';
import { LogoBadge } from './Logo';
import { Reveal } from './Reveal';
import { PILLARS } from '../data/pillars';

export function CtaFooter() {
  return (
    <>
      <section id="contacto" className="bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center px-5">
        <Reveal>
          <h2
            className="font-medium text-white tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            Hablemos de tu próximo proyecto
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/60 text-[15px] sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
            Contanos qué necesita tu empresa y te armamos una propuesta con los pilares que mejor
            encajen.
          </p>
        </Reveal>
        <Reveal delay={200} className="flex flex-col items-center gap-5">
          <RollButton
            text="Agendar una llamada"
            href="https://cal.com/contacto-conectados-hjslxl/30min"
            variant="accent"
            size="lg"
            calLink="contacto-conectados-hjslxl/30min"
          />
          <a
            href="mailto:contacto@proyectoconectados.com"
            className="text-white/50 hover:text-white text-[13px] transition-colors duration-300"
          >
            contacto@proyectoconectados.com
          </a>
        </Reveal>
      </section>

      <footer className="bg-black pt-14 sm:pt-16 pb-8 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr_1fr] gap-10 sm:gap-8 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoBadge className="w-9 h-9" />
                <span className="text-white text-[15px] font-medium">Conectado.</span>
              </div>
              <p className="text-white/40 text-[13px] leading-relaxed max-w-[260px]">
                Agencia de desarrollo web y comunicación digital para empresas que quieren crecer
                online, con un solo equipo detrás de cada proyecto.
              </p>
            </div>

            <div>
              <span className="block text-white/40 text-[11px] font-semibold uppercase tracking-wide mb-4">
                Servicios
              </span>
              <ul className="flex flex-col gap-2.5">
                {PILLARS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/pilares/${p.slug}`}
                      className="text-white/60 hover:text-white text-[13.5px] transition-colors duration-300"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="block text-white/40 text-[11px] font-semibold uppercase tracking-wide mb-4">
                Agencia
              </span>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="/#estudio"
                    className="text-white/60 hover:text-white text-[13.5px] transition-colors duration-300"
                  >
                    Cómo trabajamos
                  </a>
                </li>
                <li>
                  <a
                    href="/#proceso"
                    className="text-white/60 hover:text-white text-[13.5px] transition-colors duration-300"
                  >
                    Nuestro proceso
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@proyectoconectados.com"
                    className="text-white/60 hover:text-white text-[13.5px] transition-colors duration-300"
                  >
                    contacto@proyectoconectados.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <p className="text-white/40 text-xs">
              © 2026 Conectado. Todos los derechos reservados.
            </p>
            <p className="text-white/30 text-xs">Buenos Aires, Argentina</p>
          </div>
        </div>
      </footer>
    </>
  );
}

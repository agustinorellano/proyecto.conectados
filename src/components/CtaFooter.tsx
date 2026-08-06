import { RollButton } from './RollButton';
import { LogoBadge } from './Logo';
import { Reveal } from './Reveal';

export function CtaFooter() {
  return (
    <>
      <section id="contacto" className="bg-gray-900 py-20 sm:py-28 text-center px-5">
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

      <footer className="bg-black py-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoBadge className="w-8 h-8" />
            <span className="text-white text-sm font-medium">Proyecto Conectados</span>
          </div>
          <a
            href="mailto:contacto@proyectoconectados.com"
            className="text-white/40 hover:text-white/70 text-xs transition-colors duration-300"
          >
            contacto@proyectoconectados.com
          </a>
          <p className="text-white/40 text-xs">© 2026 Proyecto Conectados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

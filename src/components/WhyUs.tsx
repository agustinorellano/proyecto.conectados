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
            Conectado.?
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
                Un solo equipo, sin intermediarios
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative h-[340px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden bg-cover"
            style={{ backgroundImage: "url('/fondo-animado-azul.png')", backgroundPosition: 'center' }}
          />
        </Reveal>
      </div>
    </section>
  );
}

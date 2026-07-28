import { RollButton } from './RollButton';
import { Reveal } from './Reveal';

function PlaceholderBlock({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3355FF] to-[#0E1A6B] ${className}`}
    />
  );
}

export function About() {
  return (
    <section
      id="estudio"
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center">
            1
          </span>
          <span className="text-xs sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Presentamos Proyecto Conectados
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="font-medium text-gray-900 leading-[1.12] tracking-[-0.02em] px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            Estrategia y ejecución en un solo equipo,
            <br />
            con resultados en cada uno de tus 4 pilares.
          </h2>
        </Reveal>

        <div className="lg:hidden px-5 sm:px-8">
          <Reveal delay={120}>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
              A través de investigación, diseño estratégico e iteración constante ayudamos a
              empresas en crecimiento a alcanzar su potencial digital completo.
            </p>
            <RollButton text="Conocé nuestro estudio" href="#contacto" variant="ghost" size="lg" />
          </Reveal>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10">
            <Reveal delay={160} className="sm:w-[45%]">
              <PlaceholderBlock className="aspect-[438/346]" />
            </Reveal>
            <Reveal delay={220} className="sm:w-[55%]">
              <PlaceholderBlock className="aspect-[900/600]" />
            </Reveal>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
          <Reveal delay={120}>
            <PlaceholderBlock className="aspect-[438/346]" />
          </Reveal>
          <div className="self-start flex justify-end">
            <Reveal delay={180} className="text-right">
              <p className="text-base xl:text-lg leading-[1.65] whitespace-nowrap text-gray-900 mb-6">
                A través de investigación, diseño estratégico
                <br />
                e iteración constante ayudamos a empresas
                <br />
                en crecimiento a alcanzar su potencial digital
                <br />
                completo.
              </p>
              <div className="flex justify-end">
                <RollButton
                  text="Conocé nuestro estudio"
                  href="#contacto"
                  variant="ghost"
                  size="lg"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <PlaceholderBlock className="aspect-[3/2]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

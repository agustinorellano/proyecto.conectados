import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { RollButton } from './RollButton';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';

// Shader animado (Swirl/ChromaFlow) queda desactivado para que se vea limpia
// la foto de fondo. Se deja el código listo por si se vuelve a necesitar.
const SHOW_HERO_SHADER = false;

export function Hero() {
  return (
    <header
      className="relative h-[75vh] min-h-[520px] sm:min-h-[600px] flex flex-col bg-[#050814] overflow-hidden bg-cover"
      style={{ backgroundImage: "url('/hero-team.png')", backgroundPosition: '78% center' }}
    >
      {SHOW_HERO_SHADER && (
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
          <Shader className="w-full h-full">
            <Swirl colorA="#0B1230" colorB="#141B45" detail={1.9} opacity={0.7} />
            <ChromaFlow
              baseColor="#0B1230"
              upColor="#3355FF"
              downColor="#6E8CFF"
              leftColor="#3355FF"
              rightColor="#8FA8FF"
              intensity={1.3}
              momentum={20}
              radius={4.2}
            />
            <FlutedGlass
              aberration={0.8}
              angle={31}
              frequency={8}
              highlight={0.28}
              highlightSoftness={0.15}
              lightAngle={-90}
              refraction={5.5}
              shape="rounded"
              softness={1}
              speed={0.2}
            />
            <FilmGrain strength={0.06} />
          </Shader>
        </div>
      )}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050814] via-[#050814]/75 to-[#050814]/10" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050814] via-transparent to-[#050814]/30" />

      <div className="relative z-20 flex-1 flex flex-col justify-center pt-24 sm:pt-28">
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal eager>
            <span
              className="block font-medium text-white leading-none tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.8rem)' }}
            >
              Conectado.
            </span>
          </Reveal>

          <Reveal eager delay={140} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <RollButton
              text="Empezar un proyecto"
              href="https://cal.com/contacto-conectados-hjslxl/30min"
              variant="accent"
              size="lg"
              calLink="contacto-conectados-hjslxl/30min"
            />

            <div className="inline-flex items-center gap-3 bg-white rounded-[4px] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <LogoMark className="w-5 h-5 sm:w-6 sm:h-6 text-[#3355FF]" />
              <span className="text-[13px] sm:text-sm font-medium text-gray-900">
                Un solo equipo, sin intermediarios
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

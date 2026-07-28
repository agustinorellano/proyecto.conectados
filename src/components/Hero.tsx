import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { RollButton } from './RollButton';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <header
      className="relative min-h-screen flex flex-col bg-[#050814] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
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
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050814] via-[#050814]/10 to-transparent" />

      <div className="relative z-20 flex-1 flex flex-col justify-end">
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <Reveal eager>
            <span className="block text-[13px] sm:text-sm text-white/70 tracking-wide mb-5 sm:mb-8">
              Proyecto Conectados
            </span>
          </Reveal>
          <h1
            className="font-medium text-white leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
          >
            <Reveal eager delay={80} as="span">
              <span className="sm:hidden">
                Las empresas que más crecen tienen algo en común: todo está conectado.
              </span>
              <span className="hidden sm:inline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
                Las empresas que más crecen
                <br />
                tienen algo en común:
                <br />
                todo está conectado.
              </span>
            </Reveal>
          </h1>

          <Reveal eager delay={140}>
            <p className="text-white/70 text-[15px] sm:text-lg leading-relaxed max-w-xl mt-5 sm:mt-7">
              Nosotros hacemos que tu marca, tu web, tus campañas y tus datos trabajen juntos.
            </p>
          </Reveal>

          <Reveal eager delay={200} className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <RollButton
              text="Empezar un proyecto"
              href="#contacto"
              variant="accent"
              size="lg"
            />

            <div className="inline-flex items-center gap-3 bg-white rounded-[4px] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <LogoMark className="w-5 h-5 sm:w-6 sm:h-6 text-[#3355FF]" />
              <span className="text-[13px] sm:text-sm font-medium text-gray-900">
                4 pilares, un solo equipo
              </span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
                +40 proyectos
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

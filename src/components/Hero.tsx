import { useState } from 'react';
import { RollButton } from './RollButton';
import { NotificationFeed } from './NotificationFeed';
import { Reveal } from './Reveal';

export function Hero() {
  const [clicks, setClicks] = useState(0);

  return (
    <header className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      <NotificationFeed />

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-24 sm:pt-28 px-5">
        <Reveal eager className="text-center">
          <button
            type="button"
            onClick={() => setClicks((c) => c + 1)}
            className="text-center select-none focus:outline-none"
            aria-label="Somos Conectado."
          >
            <span
              key={clicks}
              className="block"
              style={clicks > 0 ? { animation: 'heroClickPop 0.55s cubic-bezier(0.34,1.56,0.64,1)' } : undefined}
            >
              <span
                className="block font-medium text-gray-400 leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.6rem, 4.4vw, 3.2rem)' }}
              >
                Somos
              </span>
              <span
                className="block font-semibold text-gray-900 leading-[0.95] tracking-[-0.04em] -mt-1 sm:-mt-2"
                style={{ fontSize: 'clamp(3.2rem, 11vw, 8rem)' }}
              >
                Conectado<span className="text-[#3355FF]">.</span>
              </span>
            </span>
          </button>
        </Reveal>

        <Reveal eager delay={160} className="mt-9 sm:mt-12">
          <RollButton
            text="Empezar un proyecto"
            href="https://cal.com/contacto-conectados-hjslxl/30min"
            variant="dark"
            size="lg"
            calLink="contacto-conectados-hjslxl/30min"
          />
        </Reveal>
      </div>
    </header>
  );
}

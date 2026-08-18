import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { PILLARS } from '../data/pillars';

const FEATURED_SLUGS = ['comunicacion-digital', 'desarrollo-web'];

export function Pillars() {
  const featured = PILLARS.filter((p) => FEATURED_SLUGS.includes(p.slug));

  return (
    <section id="pilares" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center">
            2
          </span>
          <span className="text-xs sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Servicios
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
          >
            Lo que hacemos crecer, hoy
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 px-5 sm:px-8 lg:px-12">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={120 + i * 90}>
              <Link to={`/pilares/${p.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1230] to-[#050814]">
                  {p.cardImage && (
                    <img
                      src={p.cardImage}
                      alt={`Portada de ${p.title}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-white/60 text-[13px] sm:text-sm leading-relaxed mb-3 max-w-[38ch]">
                      {p.cardDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-[-0.01em]">
                        {p.title}
                      </h3>
                      <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} className="text-gray-900" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          {featured.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={120 + i * 90}>
                <Link to={`/pilares/${p.slug}`} className="group cursor-pointer block">
                  <div
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} p-6 sm:p-8 flex flex-col`}
                    style={{ height: 'clamp(280px, 34vw, 420px)' }}
                  >
                    <Icon
                      size={160}
                      strokeWidth={1}
                      className="absolute -right-8 -bottom-8 text-white/10 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                    />

                    <span className="relative w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-auto">
                      <Icon size={20} className="text-white" strokeWidth={1.6} />
                    </span>

                    <div className="relative">
                      <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-3 leading-[1.1]">
                        {p.title}
                      </h3>
                      <p className="text-white/70 text-[13px] sm:text-sm leading-relaxed max-w-[34ch] mb-5">
                        {p.cardDescription}
                      </p>
                      <span className="inline-flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} className="text-gray-900" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
                    className={`relative rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col ${
                      p.cardImage ? 'bg-gray-900' : `bg-gradient-to-br ${p.gradient}`
                    }`}
                    style={{ minHeight: 'clamp(360px, 42vw, 500px)' }}
                  >
                    {p.cardImage ? (
                      <>
                        <img
                          src={p.cardImage}
                          alt={`Portada de ${p.title}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
                      </>
                    ) : (
                      <Icon
                        size={200}
                        strokeWidth={1}
                        className="absolute -right-10 -bottom-10 text-white/10 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                      />
                    )}

                    <span className="relative w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-auto">
                      <Icon size={22} className="text-white" strokeWidth={1.6} />
                    </span>

                    <div className="relative">
                      <h3 className="text-white text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-3 leading-[1.08]">
                        {p.title}
                      </h3>
                      <p className="text-white/70 text-[13px] sm:text-[15px] leading-relaxed max-w-[36ch] mb-5">
                        {p.cardDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.services.map((service, si) => (
                          <span
                            key={service}
                            className="text-[11px] sm:text-[12px] text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 transition-all duration-300 group-hover:bg-white/15 group-hover:-translate-y-0.5"
                            style={{ transitionDelay: `${si * 40}ms` }}
                          >
                            {service}
                          </span>
                        ))}
                      </div>

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

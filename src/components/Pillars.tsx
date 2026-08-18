import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExpandButton } from './ExpandButton';
import { Reveal } from './Reveal';
import { PILLARS } from '../data/pillars';

export function Pillars() {
  return (
    <section id="pilares" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center">
            2
          </span>
          <span className="text-xs sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Los 4 pilares de Proyecto Conectados
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
          >
            Todo lo que tu empresa necesita
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={120 + i * 90}>
                <Link to={`/pilares/${p.slug}`} className="group cursor-pointer block">
                  <div className="relative aspect-[329/246] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0B1230] to-[#050814]">

                    {p.cardImage ? (
                      <>
                        <img
                          src={p.cardImage}
                          alt={`Portada de ${p.title}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                      </>
                    ) : (
                      <Icon size={48} className="text-white/25" strokeWidth={1.4} />
                    )}
                    <ExpandButton
                      label={p.cta}
                      dark={p.dark}
                      widthClass="group-hover:w-[148px]"
                      icon={
                        <ArrowRight
                          size={14}
                          className={p.dark ? 'text-white' : 'text-gray-900'}
                        />
                      }
                    />
                  </div>
                  <p className="text-[13px] sm:text-sm text-gray-600 mt-4 leading-relaxed">
                    {p.cardDescription}
                  </p>
                  <p className="text-sm sm:text-[15px] font-semibold text-gray-900 mt-1">
                    {p.title}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

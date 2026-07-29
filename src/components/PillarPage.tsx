import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Navbar } from './Navbar';
import { RollButton } from './RollButton';
import { Reveal } from './Reveal';
import { CtaFooter } from './CtaFooter';
import { PILLARS, getPillar } from '../data/pillars';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function PillarPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = slug ? getPillar(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useDocumentMeta({
    title: pillar
      ? `${pillar.seoTitle} | Proyecto Conectados`
      : 'Proyecto Conectados',
    description: pillar ? pillar.seoDescription : 'Agencia con 4 pilares para hacer crecer tu empresa.',
  });

  if (!pillar) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white px-5 text-center">
        <p className="text-gray-600">No encontramos ese pilar.</p>
        <RollButton text="Volver al inicio" href="/" variant="dark" size="lg" />
      </div>
    );
  }

  const Icon = pillar.icon;
  const others = PILLARS.filter((p) => p.slug !== pillar.slug);
  const hasCases = !!pillar.cases?.length;

  return (
    <div>
      <Navbar />
      <header className={`relative bg-gradient-to-br ${pillar.gradient} overflow-hidden`}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-16 sm:pb-24">
          <Reveal eager>
            <Link
              to="/#pilares"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[13px] mb-10 sm:mb-14 transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              Volver a los pilares
            </Link>
          </Reveal>

          <div className={pillar.serviceDetails ? 'grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center' : ''}>
            <div>
              <Reveal eager delay={80}>
                <span className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-white" strokeWidth={1.6} />
                </span>
              </Reveal>

              <Reveal eager delay={140}>
                <span className="block text-[13px] text-white/60 tracking-wide mb-3">
                  Pilares / {pillar.title}
                </span>
                <h1
                  className="font-medium text-white leading-[1.1] tracking-[-0.03em] max-w-2xl"
                  style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3.1rem)' }}
                >
                  {pillar.tagline}
                </h1>
                <p className="text-white/70 text-[15px] sm:text-base leading-relaxed max-w-xl mt-6">
                  {pillar.longDescription}
                </p>
              </Reveal>

              <Reveal eager delay={220} className="mt-9 flex flex-wrap items-center gap-5">
                <RollButton
                  text="Empezar un proyecto"
                  href="https://cal.com/contacto-conectados-hjslxl/30min"
                  variant="accent"
                  size="lg"
                  calLink="contacto-conectados-hjslxl/30min"
                />
                {hasCases && (
                  <RollButton text="Ver proyectos" href="#casos-pilar" variant="ghost-light" size="lg" />
                )}
              </Reveal>
            </div>

            {pillar.serviceDetails && (
              <Reveal eager delay={260}>
                <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <Icon size={72} className="text-white/10" strokeWidth={1} />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </header>

      <section className="bg-white pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-xs sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              Qué incluye
            </span>
          </Reveal>

          {pillar.serviceDetails ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8">
              {pillar.serviceDetails.map((service, i) => {
                const ServiceIcon = service.icon;
                return (
                  <Reveal key={service.title} delay={80 + i * 60}>
                    <div className="border border-gray-200 rounded-2xl p-6 h-full">
                      <span className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                        <ServiceIcon size={20} className="text-[#3355FF]" strokeWidth={1.6} />
                      </span>
                      <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8">
              {pillar.services.map((service, i) => (
                <Reveal key={service} delay={80 + i * 60}>
                  <div className="flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-4">
                    <span className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} className="text-white" />
                    </span>
                    <p className="text-[15px] text-gray-900 font-medium">{service}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {pillar.process && (
        <section className="bg-[#F5F5F5] py-16 sm:py-20">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <span className="text-xs sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Nuestro proceso
              </span>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 mt-10">
              {pillar.process.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <Reveal key={step.title} delay={80 + i * 50}>
                    <div className="text-center">
                      <div className="relative w-14 h-14 mx-auto mb-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <StepIcon size={20} className="text-gray-700" strokeWidth={1.6} />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-semibold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-[13.5px] font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[12px] text-gray-500 leading-snug">{step.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {hasCases && (
        <section id="casos-pilar" className="bg-white py-16 sm:py-20">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <span className="text-xs sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                Proyectos destacados
              </span>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-8">
              {pillar.cases!.map((c, i) => (
                <Reveal key={c.name} delay={80 + i * 80}>
                  <div className="rounded-2xl overflow-hidden border border-gray-200">
                    <div
                      className={`aspect-[16/10] overflow-hidden flex items-center justify-center ${
                        c.image ? '' : `bg-gradient-to-br ${pillar.gradient}`
                      }`}
                    >
                      {c.image ? (
                        <img
                          src={c.image}
                          alt={c.name}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Icon size={40} className="text-white/25" strokeWidth={1.4} />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                        {c.category}
                      </span>
                      <h3 className="font-medium text-gray-900 text-xl tracking-[-0.01em] mt-1 mb-3">
                        {c.name}
                      </h3>
                      <p className="text-gray-600 text-[14px] leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-xs sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              Los otros pilares
            </span>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-8">
            {others.map((p, i) => {
              const OtherIcon = p.icon;
              return (
                <Reveal key={p.slug} delay={80 + i * 60}>
                  <Link
                    to={`/pilares/${p.slug}`}
                    className="group flex items-center justify-between gap-3 border border-gray-200 rounded-xl px-5 py-4 hover:border-gray-900 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-3">
                      <OtherIcon size={18} className="text-gray-400" strokeWidth={1.6} />
                      <span className="text-[14px] font-medium text-gray-900">{p.title}</span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}

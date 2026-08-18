import { useState, type ReactElement } from 'react';
import type { ServiceDetail } from '../data/pillars';

interface ServicesTabsProps {
  services: ServiceDetail[];
}

const VISUALS: Record<string, () => ReactElement> = {
  'Identidad de marca y contenido': () => (
    <div className="flex flex-col mt-1 max-w-sm">
      {[
        'Paleta de color y tipografía definidas',
        'Tono de comunicación consistente en todos los canales',
        'Piezas base: logo, templates y guía de uso',
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2.5 text-[13px] text-gray-600 py-2 border-b border-gray-100 last:border-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3355FF] flex-shrink-0" />
          {item}
        </div>
      ))}
    </div>
  ),
  'Redes sociales y pauta digital': () => (
    <div className="flex flex-wrap gap-2 mt-1 max-w-sm">
      {['Reels y contenido corto', 'Segmentación por audiencia', 'Pauta en Meta Ads', 'Optimización semanal'].map(
        (tag) => (
          <span
            key={tag}
            className="text-[12px] bg-[#EEF2FF] border border-[#3355FF]/20 text-[#3355FF] px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ),
      )}
    </div>
  ),
  'Email marketing y comunicación': () => (
    <div className="flex flex-col mt-1 max-w-sm">
      {[
        ['Formato', 'Newsletter mensual'],
        ['Automatización', 'Bienvenida y seguimiento'],
        ['Segmentación', 'Por interés y etapa del cliente'],
      ].map(([k, v]) => (
        <div key={k} className="flex items-center justify-between text-[13px] py-2 border-b border-gray-100 last:border-0">
          <span className="text-gray-500">{k}</span>
          <span className="text-gray-900 font-medium">{v}</span>
        </div>
      ))}
    </div>
  ),
  'Calendario editorial': () => {
    const cells = [
      'S1 Post',
      'S1 Story',
      'S1 Reel',
      'S1 —',
      'S2 Reel',
      'S2 Story',
      'S2 Post',
      'S2 —',
      'S3 Post',
      'S3 Reel',
      'S3 Story',
      'S3 —',
    ];
    return (
      <div className="grid grid-cols-4 gap-1.5 mt-1 max-w-sm">
        {cells.map((cell, i) => {
          const filled = !cell.endsWith('—');
          return (
            <div
              key={i}
              className={`text-[10px] text-center rounded-md py-2 ${
                filled
                  ? 'bg-[#EEF2FF] text-[#3355FF] border border-[#3355FF]/20'
                  : 'bg-gray-50 text-gray-300 border border-gray-100'
              }`}
            >
              {cell}
            </div>
          );
        })}
      </div>
    );
  },
};

export function ServicesTabs({ services }: ServicesTabsProps) {
  const [active, setActive] = useState(0);
  const current = services[active];
  const CurrentIcon = current.icon;
  const Visual = VISUALS[current.title];

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-3 lg:gap-0 border border-gray-200 rounded-2xl overflow-hidden">
      <div className="lg:w-[280px] flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible p-3 lg:p-4 lg:border-r border-gray-200">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isActive = i === active;
          return (
            <button
              key={service.title}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 flex items-center gap-2.5 text-left px-3.5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap lg:whitespace-normal ${
                isActive ? 'bg-[#EEF2FF] text-[#3355FF]' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <Icon size={16} strokeWidth={1.8} className="flex-shrink-0" />
              <span className="text-[13px] font-medium">{service.title}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[260px] overflow-hidden"
      >
        <span
          className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5"
          style={{ animation: 'servicePanelIn 0.5s cubic-bezier(0.4,0,0.2,1) both' }}
        >
          <CurrentIcon size={20} className="text-[#3355FF]" strokeWidth={1.6} />
        </span>
        <h3
          className="text-lg sm:text-xl font-semibold text-gray-900 mb-2.5"
          style={{ animation: 'servicePanelIn 0.5s cubic-bezier(0.4,0,0.2,1) 0.06s both' }}
        >
          {current.title}
        </h3>
        <p
          className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-lg mb-5"
          style={{ animation: 'servicePanelIn 0.5s cubic-bezier(0.4,0,0.2,1) 0.12s both' }}
        >
          {current.description}
        </p>
        {Visual && (
          <div style={{ animation: 'servicePanelIn 0.5s cubic-bezier(0.4,0,0.2,1) 0.18s both' }}>
            <Visual />
          </div>
        )}
      </div>
    </div>
  );
}

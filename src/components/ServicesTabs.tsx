import { useState } from 'react';
import type { ServiceDetail } from '../data/pillars';

interface ServicesTabsProps {
  services: ServiceDetail[];
}

export function ServicesTabs({ services }: ServicesTabsProps) {
  const [active, setActive] = useState(0);
  const current = services[active];
  const CurrentIcon = current.icon;

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
        className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[220px]"
        style={{ animation: 'servicePanelIn 0.45s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <span className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5">
          <CurrentIcon size={20} className="text-[#3355FF]" strokeWidth={1.6} />
        </span>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2.5">{current.title}</h3>
        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-lg">
          {current.description}
        </p>
      </div>
    </div>
  );
}

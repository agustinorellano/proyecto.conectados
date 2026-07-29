import { ArrowRight } from 'lucide-react';

type Variant = 'dark' | 'accent' | 'outline' | 'ghost' | 'ghost-light' | 'whatsapp';

interface RollButtonProps {
  text: string;
  href: string;
  variant?: Variant;
  size?: 'sm' | 'lg';
  target?: string;
  /** Cal.com event slug (ej. "contacto-conectados-hjslxl/30min") — abre el modal de reserva en vez de navegar */
  calLink?: string;
}

const FILLED_STYLES: Record<string, string> = {
  dark: 'bg-gray-900 hover:bg-gray-800 text-white',
  accent: 'bg-[#3355FF] hover:bg-[#2646E0] text-white',
  whatsapp: 'bg-[#25D366] hover:bg-[#1FB855] text-white',
};

const CIRCLE_ARROW_COLOR: Record<string, string> = {
  dark: 'text-gray-900',
  accent: 'text-[#3355FF]',
  whatsapp: 'text-[#25D366]',
};

export function RollButton({
  text,
  href,
  variant = 'dark',
  size = 'sm',
  target,
  calLink,
}: RollButtonProps) {
  const circleSize = size === 'lg' ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-6 h-6';
  const textSize = size === 'lg' ? 'text-[13px] sm:text-sm' : 'text-[13px]';
  const padding = size === 'lg' ? 'pl-5 sm:pl-6 pr-2 py-2' : 'pl-5 pr-2 py-2';

  const calProps = calLink
    ? {
        'data-cal-link': calLink,
        'data-cal-namespace': '30min',
        'data-cal-config': '{"layout":"month_view"}',
      }
    : {};

  const textEl = (
    <span className={`overflow-hidden h-[20px] ${textSize}`}>
      <span
        className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
        style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
      >
        <span className="h-[20px] leading-[20px] whitespace-nowrap">{text}</span>
        <span className="h-[20px] leading-[20px] whitespace-nowrap">{text}</span>
      </span>
    </span>
  );

  // Ghost: link de texto plano con flecha, sin píldora — para acciones secundarias/informativas
  if (variant === 'ghost') {
    return (
      <a
        href={href}
        target={target}
        rel={target ? 'noopener noreferrer' : undefined}
        className="group inline-flex items-center gap-3 font-medium text-gray-900"
        {...calProps}
      >
        {textEl}
        <span
          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:-rotate-45 group-hover:border-gray-900"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <ArrowRight size={12} className="text-gray-900" />
        </span>
      </a>
    );
  }

  // Ghost light: como ghost, pero para usar sobre fondos oscuros
  if (variant === 'ghost-light') {
    return (
      <a
        href={href}
        target={target}
        rel={target ? 'noopener noreferrer' : undefined}
        className="group inline-flex items-center gap-3 font-medium text-white"
        {...calProps}
      >
        {textEl}
        <span
          className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:-rotate-45 group-hover:border-white"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <ArrowRight size={12} className="text-white" />
        </span>
      </a>
    );
  }

  // Outline: píldora liviana con borde, sin relleno — para el nav (presente en todo momento)
  if (variant === 'outline') {
    return (
      <a
        href={href}
        target={target}
        rel={target ? 'noopener noreferrer' : undefined}
        className={`group inline-flex items-center gap-3 rounded-full font-medium border border-gray-300 text-gray-900 hover:border-gray-900 transition-colors duration-300 ${padding} ${textSize}`}
        {...calProps}
      >
        {textEl}
        <span
          className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:-rotate-45"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <ArrowRight size={13} className="text-white" />
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center gap-3 rounded-full font-medium transition-colors duration-300 ${padding} ${textSize} ${FILLED_STYLES[variant]}`}
      {...calProps}
    >
      {textEl}
      <span
        className={`${circleSize} rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:-rotate-45`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
      >
        <ArrowRight size={size === 'lg' ? 15 : 13} className={CIRCLE_ARROW_COLOR[variant]} />
      </span>
    </a>
  );
}

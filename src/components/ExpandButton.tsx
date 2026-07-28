import type { ReactNode } from 'react';

interface ExpandButtonProps {
  label: string;
  icon: ReactNode;
  dark?: boolean;
  widthClass: string;
}

export function ExpandButton({ label, icon, dark = false, widthClass }: ExpandButtonProps) {
  return (
    <div
      className={`absolute bottom-4 left-4 h-9 w-9 ${widthClass} rounded-full flex items-center gap-2 px-2.5 overflow-hidden transition-all duration-300 ease-in-out ${
        dark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <span
        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 -rotate-45 group-hover:rotate-0 ${
          dark ? '' : ''
        }`}
      >
        {icon}
      </span>
      <span
        className={`text-[13px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

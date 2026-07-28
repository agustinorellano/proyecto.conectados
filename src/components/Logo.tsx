interface LogoProps {
  className?: string;
}

// Marca propia: dos formas que se superponen y forman un nodo central,
// sin iniciales (evita la confusión "PC") y sin reusar el logo hub+satélites de Conectados.
export function LogoMark({ className = 'w-4 h-4' }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function LogoBadge({ className = 'w-9 h-9 sm:w-10 sm:h-10' }: LogoProps) {
  return (
    <span
      className={`${className} bg-gradient-to-br from-[#5C7CFF] to-[#1E2FB0] rounded-full flex items-center justify-center flex-shrink-0`}
    >
      <LogoMark className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" />
    </span>
  );
}

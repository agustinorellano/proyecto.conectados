import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoBadge } from './Logo';
import { RollButton } from './RollButton';
import { LiveClock } from './LiveClock';

const NAV_LINKS = [
  { label: 'Servicios', href: '/#pilares' },
  { label: 'Estudio', href: '/#estudio' },
  { label: 'Casos', href: '/#casos' },
  { label: 'Contacto', href: '/#contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto p-2 sm:p-3">
      <nav className="bg-white rounded-full flex items-center justify-between p-[5px] pl-4 pr-2">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-3">
            <LogoBadge />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-900 hover:text-gray-500 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LiveClock />
          <RollButton text="Agendar una llamada" href="/#contacto" variant="outline" size="sm" />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center text-white"
          aria-label="Menú"
        >
          <Menu size={18} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />
        <div
          className="absolute left-3 right-3 bottom-3 bg-white rounded-2xl p-6 transition-transform duration-500"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
            transform: open ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-[13px] text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
              <LiveClock />
            </span>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center text-white"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[28px] sm:text-[32px] font-medium text-gray-900 py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
          <RollButton text="Empezar un proyecto" href="/#contacto" variant="accent" size="lg" />
        </div>
      </div>
    </div>
  );
}

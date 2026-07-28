import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LogoBadge } from './Logo';
import { RollButton } from './RollButton';
import { LiveClock } from './LiveClock';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { label: 'Servicios', href: '/#pilares', id: 'pilares' },
  { label: 'Cómo trabajamos', href: '/#estudio', id: 'estudio' },
  { label: 'Contacto', href: '/#contacto', id: 'contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const activeId = useScrollSpy(
    NAV_LINKS.map((l) => l.id),
    pathname === '/',
  );

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    const nav = navRef.current;
    const link = activeId ? linkRefs.current[activeId] : null;
    if (!nav || !link) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setPill({ left: linkRect.left - navRect.left, width: linkRect.width, visible: true });
  }, [activeId]);

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto p-2 sm:p-3">
      <nav className="bg-white rounded-full flex items-center justify-between p-[5px] pl-4 pr-2">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-3">
            <LogoBadge />
          </a>
          <div ref={navRef} className="relative hidden md:flex items-center gap-1">
            <span
              className="absolute top-0 bottom-0 rounded-full bg-[#3355FF] transition-all duration-[450ms] pointer-events-none"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: pill.visible ? 1 : 0,
                transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
              }}
            />
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[l.id] = el;
                }}
                className={`relative z-10 text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeId === l.id ? 'text-white font-medium' : 'text-gray-500 hover:text-gray-900'
                }`}
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

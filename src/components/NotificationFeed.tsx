import { useEffect, useRef, useState } from 'react';
import { Palette, Megaphone, LineChart, Code2, Share2, Gauge, type LucideIcon } from 'lucide-react';

interface ServiceNotif {
  icon: LucideIcon;
  label: string;
}

const SERVICES: ServiceNotif[] = [
  { icon: Palette, label: 'Diseño Gráfico' },
  { icon: Megaphone, label: 'Publicidad' },
  { icon: LineChart, label: 'Marketing Digital' },
  { icon: Code2, label: 'Desarrollo Web' },
  { icon: Share2, label: 'Contenido Digital' },
  { icon: Gauge, label: 'Optimización' },
];

interface Spot {
  top: string;
  left?: string;
  right?: string;
  rotate: number;
}

// Zona segura: dejan libre la franja de la navbar (arriba) y el bloque central
// de texto donde vive "Somos Conectado."
const DESKTOP_SPOTS: Spot[] = [
  { top: '16%', left: '4%', rotate: -3 },
  { top: '13%', left: '36%', rotate: 2 },
  { top: '19%', right: '5%', rotate: 3 },
  { top: '78%', left: '9%', rotate: 2 },
  { top: '72%', left: '38%', rotate: -2 },
  { top: '80%', right: '7%', rotate: -3 },
  { top: '22%', left: '16%', rotate: -2 },
  { top: '75%', right: '22%', rotate: 3 },
];

const MOBILE_SPOTS: Spot[] = [
  { top: '13%', left: '3%', rotate: -4 },
  { top: '12%', right: '4%', rotate: 3 },
  { top: '84%', left: '2%', rotate: 3 },
  { top: '85%', right: '3%', rotate: -3 },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMobile;
}

interface Toast {
  id: number;
  service: ServiceNotif;
  spot: Spot;
  visible: boolean;
}

let toastId = 0;

export function NotificationFeed() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const lastPosIndex = useRef(-1);
  const lastServiceIndex = useRef(-1);
  const isMobile = useIsMobile();
  const isMobileRef = useRef(isMobile);
  isMobileRef.current = isMobile;

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const spawn = () => {
      if (cancelled) return;

      const spots = isMobileRef.current ? MOBILE_SPOTS : DESKTOP_SPOTS;

      let posIndex = Math.floor(Math.random() * spots.length);
      if (posIndex === lastPosIndex.current) posIndex = (posIndex + 1) % spots.length;
      lastPosIndex.current = posIndex;

      let svcIndex = Math.floor(Math.random() * SERVICES.length);
      if (svcIndex === lastServiceIndex.current) svcIndex = (svcIndex + 1) % SERVICES.length;
      lastServiceIndex.current = svcIndex;

      const id = toastId++;
      setToasts((prev) => [
        ...prev,
        { id, service: SERVICES[svcIndex], spot: spots[posIndex], visible: false },
      ]);

      timeouts.push(
        setTimeout(() => {
          if (cancelled) return;
          setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: true } : t)));
        }, 20),
      );

      timeouts.push(
        setTimeout(() => {
          setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: false } : t)));
          timeouts.push(
            setTimeout(() => {
              setToasts((prev) => prev.filter((t) => t.id !== id));
            }, 500),
          );
        }, 3200),
      );

      timeouts.push(setTimeout(spawn, 1400 + Math.random() * 1400));
    };

    timeouts.push(setTimeout(spawn, 900));

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {toasts.map((toast) => {
        const Icon = toast.service.icon;
        const { top, left, right, rotate } = toast.spot;
        const hiddenRotate = rotate + (rotate >= 0 ? 4 : -4);
        return (
          <div
            key={toast.id}
            className="absolute flex items-center gap-2.5 sm:gap-3 bg-white rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.16)] px-3.5 py-2.5 sm:px-4 sm:py-3 transition-all duration-500 ease-out"
            style={{
              top,
              left,
              right,
              width: isMobile ? 172 : 216,
              opacity: toast.visible ? 1 : 0,
              transform: toast.visible
                ? `rotate(${rotate}deg) translateY(0)`
                : `rotate(${hiddenRotate}deg) translateY(10px)`,
            }}
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#3355FF] flex items-center justify-center flex-shrink-0">
              <Icon size={14} className="text-white sm:hidden" strokeWidth={1.8} />
              <Icon size={16} className="hidden sm:block text-white" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-gray-900 truncate">
                  {toast.service.label}
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-gray-400 flex-shrink-0">ahora</span>
              </div>
              <p className="text-[10.5px] sm:text-[11.5px] text-gray-500 truncate">Nuevo proyecto en marcha</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

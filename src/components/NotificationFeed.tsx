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

const POSITIONS: React.CSSProperties[] = [
  { top: '10%', left: '5%' },
  { top: '14%', right: '6%' },
  { top: '36%', left: '3%' },
  { top: '40%', right: '4%' },
  { top: '64%', left: '8%' },
  { top: '68%', right: '9%' },
  { top: '82%', left: '32%' },
  { top: '8%', left: '56%' },
];

interface Toast {
  id: number;
  service: ServiceNotif;
  position: React.CSSProperties;
  visible: boolean;
}

let toastId = 0;

export function NotificationFeed() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const lastPosIndex = useRef(-1);
  const lastServiceIndex = useRef(-1);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const spawn = () => {
      if (cancelled) return;

      let posIndex = Math.floor(Math.random() * POSITIONS.length);
      if (posIndex === lastPosIndex.current) posIndex = (posIndex + 1) % POSITIONS.length;
      lastPosIndex.current = posIndex;

      let svcIndex = Math.floor(Math.random() * SERVICES.length);
      if (svcIndex === lastServiceIndex.current) svcIndex = (svcIndex + 1) % SERVICES.length;
      lastServiceIndex.current = svcIndex;

      const id = toastId++;
      setToasts((prev) => [
        ...prev,
        { id, service: SERVICES[svcIndex], position: POSITIONS[posIndex], visible: false },
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
        return (
          <div
            key={toast.id}
            className={`absolute flex items-center gap-3 bg-white rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.16)] px-4 py-3 transition-all duration-500 ease-out ${
              toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ ...toast.position, width: 216 }}
          >
            <span className="w-9 h-9 rounded-xl bg-[#3355FF] flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-white" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12.5px] font-semibold text-gray-900 truncate">
                  {toast.service.label}
                </span>
                <span className="text-[9px] text-gray-400 flex-shrink-0">ahora</span>
              </div>
              <p className="text-[11.5px] text-gray-500">Nuevo proyecto en marcha</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

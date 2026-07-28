import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

function getBuenosAiresTime() {
  return new Date().toLocaleTimeString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function LiveClock() {
  const [time, setTime] = useState(getBuenosAiresTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getBuenosAiresTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
      <Clock size={14} />
      {time} en Buenos Aires
    </span>
  );
}

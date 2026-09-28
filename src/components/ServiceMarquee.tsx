const ITEMS = [
  'Desarrollo Web',
  'Comunicación Digital',
  'Estrategia',
  'Diseño',
  'Optimización',
  'Contenido',
];

function Track() {
  return (
    <div className="flex items-center gap-8 pr-8 flex-shrink-0">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="text-sm sm:text-base font-medium text-gray-400 whitespace-nowrap">
            {item}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3355FF] flex-shrink-0" />
        </span>
      ))}
    </div>
  );
}

export function ServiceMarquee() {
  return (
    <div className="relative bg-white border-y border-gray-100 py-5 sm:py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] motion-reduce:animate-none">
        <Track />
        <Track />
      </div>
    </div>
  );
}

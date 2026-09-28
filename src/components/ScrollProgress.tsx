import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    let raf: number | null = null;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScale(max > 0 ? window.scrollY / max : 0);
      raf = null;
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none">
      <div
        className="h-full bg-[#3355FF] origin-left"
        style={{ transform: `scaleX(${scale})`, transition: 'transform 0.08s linear' }}
      />
    </div>
  );
}

import { Navbar } from './Navbar';
import { RollButton } from './RollButton';
import { CtaFooter } from './CtaFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFound() {
  useDocumentMeta({
    title: 'Página no encontrada | Proyecto Conectados',
    description: 'La página que buscás no existe o se movió de lugar.',
  });

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24">
        <span className="text-[13px] font-medium text-[#3355FF] tracking-wide mb-4">
          Error 404
        </span>
        <h1
          className="font-medium text-gray-900 tracking-[-0.02em] mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Esta página no existe
        </h1>
        <p className="text-gray-600 text-[15px] sm:text-base max-w-md mb-9 leading-relaxed">
          Puede que el link esté roto o que la página se haya movido. Volvé al inicio o
          escribinos si creés que esto es un error.
        </p>
        <RollButton text="Volver al inicio" href="/" variant="dark" size="lg" />
      </section>
      <CtaFooter />
    </div>
  );
}

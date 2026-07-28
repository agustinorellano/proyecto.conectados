import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { CtaFooter } from './components/CtaFooter';
import { useDocumentMeta } from './hooks/useDocumentMeta';

function App() {
  useDocumentMeta({
    title: 'Proyecto Conectados | Agencia de Desarrollo Web y Marketing Digital para Empresas',
    description:
      'Agencia con 4 pilares: desarrollo web, soluciones comerciales, comunicación digital y optimización. Todo lo que tu empresa necesita para crecer, en un solo equipo.',
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Process />
      <WhyUs />
      <CtaFooter />
    </div>
  );
}

export default App;

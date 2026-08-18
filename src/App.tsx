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
    title: 'Conectado. | Agencia de Desarrollo Web y Comunicación Digital para Empresas',
    description:
      'Agencia de desarrollo web y comunicación digital para empresas que quieren crecer online, con un solo equipo detrás de cada proyecto.',
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

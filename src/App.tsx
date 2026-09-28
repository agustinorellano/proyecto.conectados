import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { ServiceMarquee } from './components/ServiceMarquee';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { CtaFooter } from './components/CtaFooter';
import { ScrollProgress } from './components/ScrollProgress';
import { useDocumentMeta } from './hooks/useDocumentMeta';

function App() {
  useDocumentMeta({
    title: 'Conectado. | Agencia de Desarrollo Web y Comunicación Digital para Empresas',
    description:
      'Agencia de desarrollo web y comunicación digital para empresas que quieren crecer online, con un solo equipo detrás de cada proyecto.',
  });

  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <ServiceMarquee />
      <Process />
      <WhyUs />
      <CtaFooter />
    </div>
  );
}

export default App;

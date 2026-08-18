import {
  Code2,
  LineChart,
  Megaphone,
  Gauge,
  Globe,
  ShoppingCart,
  Rocket,
  Search,
  Pencil,
  Cloud,
  Headphones,
  Workflow,
  Bot,
  Handshake,
  LayoutDashboard,
  Settings2,
  GraduationCap,
  Palette,
  Share2,
  Mail,
  Calendar,
  Compass,
  Send,
  BarChart3,
  RefreshCw,
  FlaskConical,
  FileBarChart,
  type LucideIcon,
} from 'lucide-react';

export interface PillarCase {
  name: string;
  category: string;
  description: string;
  image?: string;
}

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Pillar {
  slug: string;
  title: string;
  tagline: string;
  cardDescription: string;
  longDescription: string;
  services: string[];
  serviceDetails?: ServiceDetail[];
  process?: ProcessStep[];
  gradient: string;
  icon: LucideIcon;
  dark: boolean;
  cta: string;
  cases?: PillarCase[];
  seoTitle: string;
  seoDescription: string;
  /** Variante clara del hero (por ahora solo Comunicación Digital) */
  heroTheme?: 'light';
  /** Substring del tagline a resaltar en azul en la variante clara */
  heroHighlight?: string;
  heroImage?: string;
  heroChecklist?: string[];
  /** Imagen de portada para la card del pilar en la grilla de la home */
  cardImage?: string;
}

export const PILLARS: Pillar[] = [
  {
    slug: 'comunicacion-digital',
    title: 'Comunicación Digital',
    tagline: 'Una marca que se reconoce en cualquier canal',
    cardDescription:
      'Marca, contenido y redes con una voz consistente que hace crecer tu presencia digital.',
    longDescription:
      'Construimos una identidad y una forma de comunicar que se sostiene en el tiempo, no solo una tanda de posteos. Marca, contenido y pauta trabajando en la misma dirección.',
    services: [
      'Identidad de marca y contenido',
      'Redes sociales y pauta digital',
      'Email marketing y comunicación',
      'Calendario editorial',
    ],
    serviceDetails: [
      {
        icon: Palette,
        title: 'Identidad de marca y contenido',
        description:
          'Definimos una identidad visual y un tono de comunicación que se sostienen en todos tus canales.',
      },
      {
        icon: Share2,
        title: 'Redes sociales y pauta digital',
        description: 'Gestionamos tus redes y campañas pagas con foco en resultados, no solo en likes.',
      },
      {
        icon: Mail,
        title: 'Email marketing y comunicación',
        description:
          'Diseñamos secuencias de email que acompañan al cliente desde que te conoce hasta que compra.',
      },
      {
        icon: Calendar,
        title: 'Calendario editorial',
        description:
          'Planificamos el contenido con anticipación, para que la comunicación nunca dependa de la improvisación.',
      },
    ],
    process: [
      {
        icon: Search,
        title: 'Descubrimos tu marca',
        description: 'Entendemos quién sos, a quién le hablás y qué te diferencia.',
      },
      {
        icon: Compass,
        title: 'Definimos la estrategia',
        description: 'Armamos el mensaje, el tono y los canales prioritarios.',
      },
      {
        icon: Pencil,
        title: 'Creamos',
        description: 'Producimos el contenido y las piezas de comunicación.',
      },
      {
        icon: Send,
        title: 'Publicamos',
        description: 'Activamos el calendario editorial y la pauta digital.',
      },
      {
        icon: BarChart3,
        title: 'Medimos',
        description: 'Revisamos qué funciona y qué no, con datos reales.',
      },
      {
        icon: Headphones,
        title: 'Acompañamos',
        description: 'Ajustamos la estrategia mes a mes según los resultados.',
      },
    ],
    gradient: 'from-[#5C7CFF] to-[#3355FF]',
    icon: Megaphone,
    dark: false,
    cta: 'Ver más',
    seoTitle: 'Comunicación Digital: Redes Sociales y Contenido para Empresas',
    seoDescription:
      'Agencia de comunicación digital: identidad de marca, gestión de redes sociales, pauta y email marketing con una voz consistente.',
    heroTheme: 'light',
    heroHighlight: 'cualquier canal',
    heroImage: '/comunicacion-digital-hero.png',
    heroChecklist: [
      'Identidad que refleja tu negocio',
      'Contenido estratégico que conecta',
      'Campañas que impulsan resultados',
    ],
    cardImage: '/comunicacion-digital-card.png',
  },
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    tagline: 'Desarrollo web pensado para vender, escalar y automatizar',
    cardDescription:
      'Sitios, e-commerce y apps a medida, rápidos y pensados para convertir visitas en clientes.',
    longDescription:
      'Diseñamos sitios, tiendas online y sistemas a medida que convierten visitas en clientes y optimizan procesos de tu negocio. No entregamos solo una plantilla bonita: entendemos tu negocio primero y construimos alrededor de cómo vendés.',
    services: [
      'Sitios institucionales',
      'E-commerce y tiendas online',
      'Sistemas y apps a medida',
      'Optimización y SEO técnico',
    ],
    serviceDetails: [
      {
        icon: Globe,
        title: 'Sitios institucionales',
        description:
          'Sitios profesionales, modernos y optimizados para transmitir confianza y generar más consultas.',
      },
      {
        icon: ShoppingCart,
        title: 'E-commerce y tiendas online',
        description: 'Tiendas online seguras, integradas con pasarelas de pago y listas para vender más.',
      },
      {
        icon: Code2,
        title: 'Sistemas y apps a medida',
        description: 'Desarrollamos sistemas que automatizan procesos y mejoran la gestión de tu negocio.',
      },
      {
        icon: Rocket,
        title: 'Optimización y SEO técnico',
        description:
          'Mejoramos la velocidad, el posicionamiento en Google y la experiencia de usuario para más resultados.',
      },
    ],
    process: [
      {
        icon: Search,
        title: 'Descubrimos tu negocio',
        description: 'Entendemos tus objetivos, tu audiencia y tu mercado.',
      },
      {
        icon: Pencil,
        title: 'Diseñamos la experiencia',
        description: 'Planificamos la estructura, diseñamos y validamos.',
      },
      {
        icon: Code2,
        title: 'Desarrollamos',
        description: 'Construimos tu sitio o sistema con código limpio y escalable.',
      },
      {
        icon: Rocket,
        title: 'Optimizamos',
        description: 'Optimizamos velocidad, SEO y experiencia de usuario.',
      },
      {
        icon: Cloud,
        title: 'Lanzamos',
        description: 'Publicamos tu proyecto con todo listo para crecer.',
      },
      {
        icon: Headphones,
        title: 'Acompañamos',
        description: 'Te acompañamos y damos soporte continuo.',
      },
    ],
    gradient: 'from-[#3355FF] to-[#0E1A6B]',
    icon: Code2,
    dark: false,
    cta: 'Ver más',
    seoTitle: 'Desarrollo Web para Empresas | Sitios, E-commerce y Sistemas a Medida',
    seoDescription:
      'Diseño y desarrollo de sitios institucionales, e-commerce y sistemas a medida para empresas, pensados para convertir visitas en clientes.',
    heroTheme: 'light',
    heroHighlight: 'Desarrollo web',
    heroImage: '/desarrollo-web-hero.png',
  },
  {
    slug: 'soluciones-comerciales',
    title: 'Soluciones Comerciales',
    tagline: 'Procesos de venta que no dependen de la memoria de nadie',
    cardDescription:
      'Ordenamos y potenciamos tu proceso de ventas para que cada lead tenga un camino claro.',
    longDescription:
      'Ponemos orden en cómo tu equipo vende: desde que entra un lead hasta que se cierra el negocio. Menos oportunidades perdidas, más visibilidad de en qué etapa está cada cliente.',
    services: [
      'Estrategia y funnels de ventas',
      'CRM y automatización comercial',
      'Alianzas y desarrollo de negocio',
      'Tableros de seguimiento comercial',
    ],
    serviceDetails: [
      {
        icon: Workflow,
        title: 'Estrategia y funnels de ventas',
        description:
          'Mapeamos cada etapa del proceso comercial para que sepas exactamente qué hacer con cada lead que entra.',
      },
      {
        icon: Bot,
        title: 'CRM y automatización comercial',
        description:
          'Implementamos y configuramos el CRM adecuado para tu equipo, con automatizaciones que ahorran tiempo en tareas repetitivas.',
      },
      {
        icon: Handshake,
        title: 'Alianzas y desarrollo de negocio',
        description:
          'Identificamos y estructuramos alianzas estratégicas que abren nuevos canales de venta.',
      },
      {
        icon: LayoutDashboard,
        title: 'Tableros de seguimiento comercial',
        description:
          'Armamos tableros claros para que el equipo y la dirección vean en tiempo real cómo va cada oportunidad.',
      },
    ],
    process: [
      {
        icon: Search,
        title: 'Descubrimos tu negocio',
        description: 'Entendemos cómo vendés hoy, qué funciona y dónde se pierden oportunidades.',
      },
      {
        icon: Workflow,
        title: 'Mapeamos el proceso',
        description: 'Diseñamos el funnel y las etapas comerciales que tienen sentido para tu negocio.',
      },
      {
        icon: Settings2,
        title: 'Implementamos',
        description: 'Configuramos CRM, automatizaciones y herramientas de seguimiento.',
      },
      {
        icon: GraduationCap,
        title: 'Capacitamos al equipo',
        description: 'Nos aseguramos de que el equipo comercial sepa usar las nuevas herramientas.',
      },
      {
        icon: Rocket,
        title: 'Lanzamos',
        description: 'Ponemos en marcha el proceso con seguimiento cercano las primeras semanas.',
      },
      {
        icon: Headphones,
        title: 'Acompañamos',
        description: 'Revisamos resultados con vos y ajustamos el proceso de forma continua.',
      },
    ],
    gradient: 'from-gray-900 to-gray-700',
    icon: LineChart,
    dark: true,
    cta: 'Ver más',
    seoTitle: 'Soluciones Comerciales: CRM y Automatización de Ventas para Empresas',
    seoDescription:
      'Consultoría de procesos comerciales, CRM, automatización y funnels de venta para que tu equipo no pierda oportunidades.',
    cardImage: '/soluciones-comerciales-card.png',
  },
  {
    slug: 'optimizacion',
    title: 'Optimización',
    tagline: 'Decisiones basadas en datos, no en intuición',
    cardDescription:
      'Medimos y mejoramos todo lo anterior de forma continua, con datos reales de tu negocio.',
    longDescription:
      'Instalamos la medición correcta desde el principio y la revisamos con vos de forma continua, para que cada decisión — de diseño, de venta o de comunicación — se apoye en datos reales.',
    services: [
      'Analítica y reportes de performance',
      'Optimización de conversión (CRO)',
      'Mejora continua de procesos',
      'Dashboards a medida',
    ],
    serviceDetails: [
      {
        icon: BarChart3,
        title: 'Analítica y reportes de performance',
        description:
          'Instalamos la medición correcta y armamos reportes claros de cómo va tu negocio digital.',
      },
      {
        icon: FlaskConical,
        title: 'Optimización de conversión (CRO)',
        description:
          'Analizamos dónde se pierden usuarios y probamos cambios concretos para mejorar la conversión.',
      },
      {
        icon: RefreshCw,
        title: 'Mejora continua de procesos',
        description: 'Revisamos periódicamente cada pilar para encontrar oportunidades de mejora.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboards a medida',
        description:
          'Armamos tableros con las métricas que realmente importan para tu negocio, sin ruido.',
      },
    ],
    process: [
      {
        icon: Search,
        title: 'Medimos',
        description: 'Instalamos o auditamos la medición actual de tu negocio digital.',
      },
      {
        icon: FileBarChart,
        title: 'Analizamos',
        description: 'Identificamos cuellos de botella y oportunidades de mejora.',
      },
      {
        icon: FlaskConical,
        title: 'Probamos',
        description: 'Implementamos cambios puntuales y medimos su impacto.',
      },
      {
        icon: RefreshCw,
        title: 'Iteramos',
        description: 'Ajustamos en base a lo que muestran los datos, no a suposiciones.',
      },
      {
        icon: BarChart3,
        title: 'Reportamos',
        description: 'Compartimos resultados claros, sin jerga innecesaria.',
      },
      {
        icon: Headphones,
        title: 'Acompañamos',
        description: 'Revisamos con vos de forma continua para sostener la mejora en el tiempo.',
      },
    ],
    gradient: 'from-gray-800 to-gray-950',
    icon: Gauge,
    dark: true,
    cta: 'Ver más',
    seoTitle: 'Optimización de Conversión (CRO) y Analítica Web para Empresas',
    seoDescription:
      'Analítica, optimización de conversión (CRO) y dashboards a medida para tomar decisiones basadas en datos reales, no en intuición.',
  },
];

export function getPillar(slug: string) {
  return PILLARS.find((p) => p.slug === slug);
}

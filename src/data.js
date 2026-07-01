/* ============================================================
   Contenido editable del sitio.
   Cambia textos, servicios y proyectos aquí sin tocar el diseño.
   Las imágenes son placeholders: reemplaza `image: null` por
   la ruta a tu imagen, ej: image: '/portfolio/mi-proyecto.jpg'
   (coloca los archivos dentro de la carpeta /public)
   ============================================================ */

export const brand = {
  name: 'Sitalo',
  tagline: 'Software, webs y plataformas a medida',
  email: 'hola@sitalo.pe',
  phone: '+51 999 999 999',
  location: 'Lima, Perú',
  social: {
    instagram: '#',
    linkedin: '#',
    behance: '#',
  },
}

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    icon: 'landing',
    title: 'Landing Pages',
    text: 'Páginas de aterrizaje enfocadas en conversión: mensajes claros, carga rápida y llamados a la acción que generan clientes.',
    tags: ['Diseño UX', 'Copy', 'SEO técnico'],
  },
  {
    icon: 'corp',
    title: 'Webs Corporativas',
    text: 'Sitios institucionales que transmiten confianza y posicionan tu marca, con administrador de contenido fácil de usar.',
    tags: ['CMS', 'Branding', 'Responsive'],
  },
  {
    icon: 'app',
    title: 'Apps Web',
    text: 'Aplicaciones web a medida conectadas a bases de datos, paneles y APIs para digitalizar y automatizar tu operación.',
    tags: ['React', 'APIs', 'Dashboards'],
  },
  {
    icon: 'erp',
    title: 'Sistemas ERP',
    text: 'Plataformas de gestión para centralizar compras, inventarios, ventas y reportes en tiempo real con total trazabilidad.',
    tags: ['Inventario', 'Reportes', 'Roles'],
  },
  {
    icon: 'saas',
    title: 'Plataformas SaaS',
    text: 'Productos digitales escalables con suscripciones, gestión de usuarios y automatización para generar ingresos recurrentes.',
    tags: ['Multi-tenant', 'Pagos', 'Escalable'],
  },
  {
    icon: 'support',
    title: 'Soporte y Evolución',
    text: 'Mantenimiento, mejoras y soporte continuo para mantener tus sistemas estables, seguros y alineados a tu negocio.',
    tags: ['QA', 'Seguridad', 'Mejoras'],
  },
]

export const steps = [
  {
    n: '01',
    title: 'Descubrimiento',
    text: 'Analizamos tus objetivos, procesos y usuarios para definir el alcance real del proyecto.',
  },
  {
    n: '02',
    title: 'Diseño funcional',
    text: 'Prototipamos la interfaz y la arquitectura antes de escribir una sola línea de código.',
  },
  {
    n: '03',
    title: 'Desarrollo',
    text: 'Construimos con tecnología actual, modular y probada, con entregas y seguimiento constante.',
  },
  {
    n: '04',
    title: 'Lanzamiento y soporte',
    text: 'Publicamos, capacitamos a tu equipo y acompañamos la evolución del producto.',
  },
]

export const categories = ['Todos', 'Web', 'App / SaaS', 'ERP', 'Branding']

/* Imágenes de ejemplo (Unsplash). Reemplázalas por las tuyas:
   coloca tus archivos en /public y usa image: '/portfolio/mi-foto.jpg' */
export const projects = [
  {
    title: 'Villa Estancia',
    category: 'ERP',
    type: 'Sistema de gestión de compras e inventario',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Money Club',
    category: 'App / SaaS',
    type: 'Portal de inversiones y afiliados',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Clínica Santa Isabel',
    category: 'Web',
    type: 'Web corporativa + reserva de citas',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Smart M2M',
    category: 'App / SaaS',
    type: 'Panel de monitoreo IoT en tiempo real',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Importadora Jordan',
    category: 'Web',
    type: 'E-commerce a medida',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Risabor',
    category: 'Branding',
    type: 'Identidad y diseño de marca',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'LogiTrack Perú',
    category: 'ERP',
    type: 'Control de flota y rutas de reparto',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'EduNova',
    category: 'App / SaaS',
    type: 'Plataforma de cursos online',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Café del Valle',
    category: 'Branding',
    type: 'Branding + landing de producto',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format&fit=crop',
  },
]

export const stats = [
  { value: '+10', label: 'años de experiencia' },
  { value: '+80', label: 'proyectos entregados' },
  { value: '98%', label: 'clientes que repiten' },
  { value: '24/7', label: 'soporte disponible' },
]

export const tech = [
  'React', 'Angular', 'Node.js', 'TypeScript', 'Python',
  'PostgreSQL', 'AWS', 'Docker', 'Figma', 'Next.js',
]

export const faqs = [
  {
    q: '¿Cuánto cuesta desarrollar mi proyecto?',
    a: 'Depende del alcance, funcionalidades y nivel de personalización. Tras una reunión inicial te enviamos una propuesta clara con precio y tiempos.',
  },
  {
    q: '¿Cuánto tiempo toma el desarrollo?',
    a: 'Una landing puede estar lista en 1–2 semanas; una web corporativa entre 3–5 semanas; y un sistema o SaaS depende del alcance, normalmente desde 6 semanas.',
  },
  {
    q: '¿Trabajan a medida o con plantillas?',
    a: 'Trabajamos 100% a medida según los objetivos de tu negocio. Para presupuestos ajustados también ofrecemos soluciones base optimizadas.',
  },
  {
    q: '¿Ofrecen soporte después de lanzar?',
    a: 'Sí. Brindamos garantía, mantenimiento y soporte evolutivo para mantener tu plataforma estable y creciendo con tu negocio.',
  },
]

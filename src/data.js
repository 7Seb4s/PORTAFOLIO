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
  phones: ['+51 952 982 715', '+51 914 029 218'],
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

export const team = [
  {
    name: 'Kevin',
    role: 'Frontend Developer',
    github: 'KevinChavez025',
    avatar: 'https://github.com/KevinChavez025.png',
  },
  {
    name: 'Seba',
    role: 'Backend Developer',
    github: '7Seb4s',
    avatar: 'https://github.com/7Seb4s.png',
  },
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

export const categories = ['Todos', 'Web']

/* Proyectos reales del equipo. Agrega más objetos aquí cuando tengan
   nuevos trabajos — solo respeta esta misma estructura. */
export const projects = [
  {
    title: 'Piolito',
    category: 'Web',
    type: 'Landing page — fábrica de calzado infantil',
    image: 'piolitovista.webp',
    url: 'http://www.piolito.com/',
  },
  {
    title: 'VetSnow',
    category: 'Web',
    type: 'Web para clínica veterinaria — citas y servicios',
    image: 'veterinaria.webp',
    url: 'https://clever-cupcake-59f1c6.netlify.app/',
  },
  {
    title: 'El Barberiolog',
    category: 'Web',
    type: 'Web de barbería de autor',
    image: 'barberia.webp',
    url: 'https://loquacious-pudding-f7dbbd.netlify.app/',
  },
]

export const stats = [
  { value: '2', label: 'desarrolladores full-stack' },
  { value: '100%', label: 'código a medida, sin plantillas' },
  { value: '24/7', label: 'comunicación directa con el cliente' },
  { value: '48h', label: 'tiempo de respuesta' },
]

export const tech = [
  { name: 'React', color: '#61DAFB', image: 'https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB' },
  { name: 'Angular', color: '#DD0031', image: 'https://api.iconify.design/simple-icons:angular.svg?color=%23DD0031' },
  { name: 'Node.js', color: '#3C873A', image: 'https://api.iconify.design/simple-icons:nodedotjs.svg?color=%233C873A' },
  { name: 'TypeScript', color: '#3178C6', image: 'https://api.iconify.design/simple-icons:typescript.svg?color=%233178C6' },
  { name: 'PostgreSQL', color: '#336791', image: 'https://api.iconify.design/simple-icons:postgresql.svg?color=%23336791' },
  { name: 'Docker', color: '#2496ED', image: 'https://api.iconify.design/simple-icons:docker.svg?color=%232496ED' },
  { name: 'Figma', color: '#A259FF', image: 'https://api.iconify.design/simple-icons:figma.svg?color=%23A259FF' },
];

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

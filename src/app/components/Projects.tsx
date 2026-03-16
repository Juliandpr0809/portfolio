import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Aplicación de Gestión Financiera con IA',
    description: 'Plataforma web fullstack para gestión financiera personal y empresarial. Integra IA mediante la API de Groq para análisis automático, categorización inteligente de gastos y asesoramiento financiero personalizado en tiempo real.',
    category: 'Full Stack Development',
    year: '2025',
    tags: ['BACKEND / FLASK', 'IA / GROQ', 'DOCKER', '2025'],
    role: [
      'Backend: Flask + Python',
      'Frontend: HTML, CSS, JavaScript',
      'IA: Integración API Groq (LLM)',
      'Base de datos: MySQL',
      'DevOps: Docker + GitHub',
      'Diseño: Responsive, mobile first'
    ],
    stats: [
      ' IA powered by Groq API',
      ' Flask + MySQL + Docker',
      ' Responsive Web App',
      ' GitHub Repository available'
    ],
    highlight: 'Proyecto Personal — De Uso Personal',
    github: 'https://github.com/Juliandpr0809/Gestor_finanza.git',
    images: [
      '/img/finance-1.jpg',
      '/img/finance-2.png',
      '/img/finance-3.png',
      '/img/finance-4.jpeg'
    ],
    color: 'emerald'
  },
  {
    id: 2,
    name: 'EEMEC S.A.S',
    description: 'Diseño y desarrollo completo de landing page para EEMEC S.A.S, empresa cartagenera de ingeniería eléctrica, mecánica y mantenimiento industrial naval. Incluye diseño en Figma, maquetación responsive, sección de servicios, proyectos y formulario de contacto.',
    category: 'Web Design & Development',
    year: '2025',
    link: 'https://eemec.co',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    role: [
      'UI/UX Design in Figma',
      'Frontend development (HTML, CSS, JS)',
      'Responsive design',
      'Technical documentation'
    ],
    stats: [
      '+300 proyectos del cliente',
      '6 servicios principales',
      'Clientes: COTECMAR, BUZCA, SERPORT'
    ],
    highlight: 'Proyecto de Cliente Real — Terminado',
    images: [
      '/img/eemec-1.png',
      '/img/eemec-2.png',
      '/img/eemec-3.png',
      '/img/eemec-4.png'
    ],
    color: 'blue'
  },
  {
    id: 3,
    name: 'Etiquetar Colombia',
    description: 'Plataforma web fullstack para empresa colombiana de piscinas, spa y tratamiento de agua. Desarrollo completo desde diseño en Figma hasta producción, incluyendo pasarela de pagos Wompi, panel administrativo, seguridad con tokens JWT y 6 meses de mantenimiento activo.',
    category: 'Full Stack Development',
    year: '2025',
    tags: ['FLASK', 'WOMPI', 'JWT', 'FIGMA', '2026'],
    role: [
      'UI/UX Design completo en Figma',
      'Backend: Flask + Python con rutas RESTful',
      'Frontend: HTML, CSS, JavaScript',
      'Base de datos: Diseño y modelado completo',
      'Seguridad: Autenticación con tokens JWT',
      'Pasarela de pagos: Integración Wompi',
      'Panel administrativo custom',
      'Animaciones: Scroll reveal + slide transitions',
      'Sistema de cotización con formulario dinámico',
      'Catálogo de productos con carrito',
      'Blog integrado',
      'Responsive design, mobile first',
      'Mantenimiento activo: 6 meses'
    ],
    stats: [
      ' Pasarela de pagos Wompi integrada',
      ' Seguridad con tokens JWT',
      ' Panel administrativo custom',
      ' Diseño completo en Figma',
      ' 2 líneas: Piscinas & Tratamiento de Agua',
      ' 6 meses de mantenimiento activo'
    ],
    highlight: 'Proyecto de Cliente Real — En Producción',
    liveLink: '#', // Add the actual live link here
    github: 'https://github.com/Juliandpr0809/Etiquetar_Colombia.git',
    images: [
      '/img/etiquetar-1.png',
      '/img/etiquetar-2.png',
      '/img/etiquetar-3.png',
      '/img/etiquetar-4.png'
    ],
    color: 'teal'
  }
];

export function Projects() {
  return (
    <section id="projects" className="bg-black text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-12 uppercase tracking-tight text-center md:text-left">Proyectos Destacados</h2>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16 md:mb-24"></div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div key={project.id}>
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start py-8 md:py-16 lg:py-24"
              >
                {/* Project Info - Tight margins and precise text sizes */}
                <div className="max-w-xl order-1 lg:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-[1.1] uppercase tracking-tight">
                    {project.name}
                  </h3>

                  {project.highlight && (
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-green-400 italic">
                        {project.highlight}
                      </span>
                    </div>
                  )}

                  <p className="text-zinc-500 text-base md:text-lg lg:text-xl font-medium mb-8 md:mb-10 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags if available */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1 rounded-full border transition-colors cursor-default ${
                          project.color === 'teal' 
                            ? 'text-teal-300 bg-teal-900/20 border-teal-500/20 hover:border-teal-500/50' 
                            : 'text-zinc-400 bg-zinc-900 border-white/5 hover:border-white/20'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Divider */}
                  {(project.role || project.stats) && (
                    <div className="w-full h-px bg-white/5 mb-6 md:mb-8"></div>
                  )}

                  {/* Role if available */}
                  {project.role && (
                    <div className="mb-8 md:mb-10">
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4 italic">Rol</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {project.role.map((r) => (
                          <li key={r} className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stats if available */}
                  {project.stats && (
                    <div className="mb-10 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <p className="text-xs font-bold text-zinc-300 leading-tight">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 mb-10 md:mb-12">
                    <span className="px-4 py-1.5 rounded-full border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      {project.category}
                    </span>
                    <span className="px-4 py-1.5 rounded-full border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-between sm:justify-start gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-zinc-400 transition-colors min-h-[44px]"
                      >
                        Ver Proyecto →
                        <div className="hidden sm:block w-10 h-[2px] bg-white group-hover:w-16 transition-all duration-500"></div>
                      </a>
                    ) : (
                      <button className="group flex items-center justify-between sm:justify-start gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-zinc-400 transition-colors min-h-[44px]">
                        Ver Proyecto
                        <div className="hidden sm:block w-10 h-[2px] bg-white group-hover:w-16 transition-all duration-500"></div>
                      </button>
                    )}

                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-center sm:justify-start gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-teal-400 hover:text-white transition-colors min-h-[44px]"
                      >
                        Ver Sitio →
                      </a>
                    )}

                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-center sm:justify-start gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors min-h-[44px]"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image Grid - 4:3 Aspect Ratio, Soft Corners */}
                <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-6 order-2 lg:order-2">
                  {project.images && project.images.map((src, i) => (
                      <div 
                        key={i} 
                        className="aspect-[4/3] rounded-[1rem] md:rounded-[1.5rem] bg-zinc-900 border border-black/[0.50] overflow-hidden relative group"
                      >
                        <img 
                          src={src} 
                          alt={`${project.name} ${i + 1}`} 
                          width={400}
                          height={300}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1rem] md:rounded-[1.5rem]"></div>
                      </div>
                    ))
                  }
                </div>
              </motion.div>
            
            {index < projects.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
            )}
          </div>
        ))}
      </div>

        {/* Other Work Section - Refined Grid Spacing */}
        {/*
        <div className="mt-64">
          <h2 className="text-4xl md:text-5xl font-black mb-24 uppercase tracking-tight">Otros Trabajos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {[2, 4, 5].map((id) => {
              const otherProject = [
                {
                  id: 2,
                  name: 'Hashaul',
                  desc: 'Un sistema integral de gestión logística y transporte centrado en la optimización de rutas y el seguimiento en tiempo real para servicios de transporte pesado.'
                },
                {
                  id: 4,
                  name: 'Sistemas de Diseño',
                  desc: 'Construcción de lenguajes visuales escalables para productos digitales.'
                },
                {
                  id: 5,
                  name: 'Mi Blog de Café',
                  desc: 'Un espacio personal para explorar técnicas de preparación.'
                }
              ].find(p => p.id === id);
              
              if (!otherProject) return null;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/40 rounded-[2rem] p-10 border border-white/5 hover:border-white/10 transition-all group cursor-pointer"
                >
                  <div className="aspect-[16/10] bg-zinc-800 rounded-2xl mb-10 flex items-center justify-center overflow-hidden border border-white/5">
                    <span className="text-zinc-700 font-black italic tracking-widest text-sm opacity-50 group-hover:scale-110 transition-transform duration-700">VISTA PREVIA</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{otherProject.name}</h4>
                  <p className="text-zinc-500 text-base font-medium mb-10 leading-relaxed">
                    {otherProject.desc}
                  </p>
                  <button className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">
                    Leer Más →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
        */}
      </motion.div>
    </section>
  );
}

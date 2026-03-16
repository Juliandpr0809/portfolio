import { motion } from 'motion/react';
import React from 'react';

export function About() {
  const skills = [
    'Python', 'Flask', 'MySQL', 'Docker',
    'JavaScript', 'AWS', 'Git', 'Figma',
    'pandas', 'NumPy', 'REST APIs'
  ];

  const timeline = [
    { year: '2022', event: 'Universidad Libre, Ing. Sistemas' },
    { year: '2024', event: 'Primer proyecto real' },
    { year: '2025', event: 'Primer cliente (EEMEC S.A.S)' },
    { year: '2025', event: 'Backend + Data Science' }
  ];

  return (
    <section id="about" className="bg-black text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 lg:gap-24"
        >
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-4 block">
                SOBRE MÍ
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                Construyo soluciones <span className="text-amber-500">backend</span> que resuelven problemas reales.
              </h2>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            <div className="space-y-6 text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed text-center md:text-left">
              <p>
                Soy <span className="text-white font-bold">Julian David Perez Rivera</span>, un apasionado <span className="text-amber-500 font-bold">desarrollador backend</span> y <span className="text-amber-500 font-bold">científico de datos</span> cursando actualmente mi 8vo semestre de Ingeniería de Sistemas en la Universidad Libre.
              </p>
              <p>
                Mi enfoque se centra en la creación de arquitecturas robustas y escalables, utilizando datos para impulsar decisiones inteligentes. Me especializo en transformar requisitos complejos en sistemas eficientes y elegantes.
              </p>
              <p>
                Con base en Barranquilla, Colombia, busco constantemente desafíos que me permitan aplicar mis habilidades técnicas en proyectos con impacto real, fusionando la precisión de la ingeniería con el análisis profundo de datos.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-12 md:space-y-16">
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 p-6 md:p-8 bg-zinc-900/30 rounded-[1.5rem] md:rounded-[2rem] border border-white/5">
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-black text-white mb-1">3</span>
                <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-tight">Proyectos<br/>reales</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-black text-white mb-1">2</span>
                <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-tight">Clientes<br/>reales</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-black text-white mb-1 text-amber-500">8vo</span>
                <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-tight">Sem.<br/>Univ.</span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 italic text-center md:text-left">Habilidades Core</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-zinc-900 border border-white/10 text-[10px] md:text-xs font-bold text-zinc-300 hover:border-amber-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-start justify-center md:justify-start">
                <span className="text-amber-500 font-black text-sm tabular-nums tracking-tighter shrink-0">
                  {item.year} —
                </span>
                <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-wide leading-tight">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Lenguajes',
    skills: ['Python', 'Java', 'C#', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Flask', '.NET', 'Bootstrap', 'REST APIs'],
  },
  {
    title: 'Ciencia de Datos',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Bases de Datos',
    skills: ['MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Git', 'GitHub'],
  },
  {
    title: 'Nube',
    skills: ['AWS (EC2, S3)'],
  },
  {
    title: 'Web',
    skills: ['HTML5', 'CSS3'],
  },
];

export function Skills() {
  return (
    <section id="experience" className="bg-black text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 border-t border-white/5">
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-black mb-12 md:mb-20 uppercase italic text-center md:text-left">Experiencia</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 md:mb-8 italic">
                {category.title}
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-base md:text-lg font-bold uppercase italic tracking-wider hover:text-zinc-400 transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

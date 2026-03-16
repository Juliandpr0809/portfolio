import { motion } from 'motion/react';
import { Marquee } from './Marquee';
import { Heart } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const sectionMap: { [key: string]: string } = {
      'proyectos': 'projects',
      'fragmentos': 'fragments',
      'sobre mí': 'about',
      'experiencia': 'experience',
      'contacto': 'contact'
    };
    
    const targetId = sectionMap[id] || id;
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden pt-12">
      
      {/* New Navigation Bar - Reference Style */}
      <motion.nav
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-0 w-full px-6 md:px-12 lg:px-24 flex items-center justify-between md:justify-start gap-8 z-30"
      >
        <button className="text-white hover:text-white/80 transition-colors">
          <Heart size={18} />
        </button>
        <div className="hidden md:flex items-center gap-6 md:gap-10">
          {['Proyectos', 'Fragmentos', 'Sobre Mí', 'Experiencia', 'Contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-[11px] md:text-xs font-bold text-white hover:text-white/80 transition-colors tracking-wide"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">Julian David</span>
        </div>
      </motion.nav>

      {/* Floating Tag - Style Diego */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-32 right-1/4 md:right-1/3 z-20 hidden md:block"
      >
        <div className="relative group cursor-pointer">
          <div className="bg-[#e91e63] text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-lg">
            Juliandpr
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative flex flex-col items-center justify-end w-full h-screen px-6">
        
        {/* Profile Image */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[50vh] md:h-[75vh] z-0 pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-full h-full relative"
          >
            <img 
              src="/img/user-profile.jpeg" 
              alt="Julian David" 
              width={400}
              height={600}
              loading="eager"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent"></div>
          </motion.div>
        </div>

        {/* Large Typography */}
        <div className="relative z-10 text-center pointer-events-none mt-auto pb-24 md:pb-24">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-8xl lg:text-[140px] font-bold leading-none tracking-tight uppercase text-white"
          >
            Hola<br />
            Soy Julian<span className="text-[#e91e63]">.</span>
          </motion.h1>
        </div>
      </div>

      {/* Footer Text - Diego Style */}
      <div className="absolute bottom-32 md:bottom-24 left-6 md:left-24 text-left z-10 max-w-sm space-y-2 opacity-80 px-6 md:px-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[11px] md:text-xs font-medium tracking-wide uppercase text-white"
        >
          Creando soluciones backend desde <span className="font-bold">2024</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-[11px] md:text-xs font-medium tracking-wide uppercase flex items-center gap-1 text-white"
        >
          Actualmente, <span className="font-bold">Desarrollador Web</span> en Barranquilla 
          <span className="text-[10px]">↗</span>
        </motion.p>
      </div>

      {/* Marquee remains at bottom but less prominent */}
      <div className="absolute bottom-0 w-full pb-8 opacity-20 hover:opacity-100 transition-opacity duration-500">
        <Marquee />
      </div>
    </section>
  );
}

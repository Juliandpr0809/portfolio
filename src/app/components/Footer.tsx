import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-white/5">
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mb-16 md:mb-24"
      >
        <div className="relative w-full py-12 md:py-20 animated-gradient overflow-hidden rounded-[2rem]">
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              filter: 'url(#noise)',
              opacity: 0.15,
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          />
          <svg style={{ position:'absolute', width:0, height:0 }}>
            <filter id="noise">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.65" 
                numOctaves="3" 
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0"/>
            </filter>
          </svg>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center md:text-left">
              Trabajemos<br/>Juntos<span className="text-white">.</span>
            </h2>
            <a 
              href="https://wa.me/573003790123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center bg-black/80 text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-black transition-colors shadow-lg min-h-[44px] flex items-center justify-center"
            >
              Escríbeme →
            </a>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Bio */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
                <span className="text-zinc-500 font-black italic">JD</span>
              </div>
              <div>
                <h3 className="font-black uppercase italic tracking-tight">Julian David</h3>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Perez Rivera</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed mb-8">
              Desarrollador backend y científico de datos enfocado en construir sistemas escalables y extraer información significativa de datos complejos.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/Juliandpr0809" target="_blank" rel="noopener noreferrer" className="p-3 md:p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/julianperez" target="_blank" rel="noopener noreferrer" className="p-3 md:p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/573003790123" target="_blank" rel="noopener noreferrer" className="p-3 md:p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:juliandpr20040809@gmail.com" className="p-3 md:p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Mail size={20} />
              </a>
            </div>

          </div>

          {/* Links 1 */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 md:mb-8 italic">Navegación</h4>
            <ul className="space-y-4">
              {[
                { name: 'Proyectos', href: '#projects' },
                { name: 'Sobre Mí', href: '#about' },
                { name: 'Blog', href: null },
                { name: 'Hobbies', href: null },
                { name: 'CV', href: '/docs/CV_Julian_David_Perez.pdf', download: true }
              ].map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a 
                      href={link.href} 
                      download={link.download}
                      className="block md:inline-block py-2 md:py-0 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase italic tracking-wider min-h-[44px] md:min-h-0"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span className="py-2 md:py-0 text-sm font-bold text-zinc-600 uppercase italic tracking-wider flex items-center justify-center md:justify-start gap-2 min-h-[44px] md:min-h-0">
                      {link.name} <span className="text-[8px] bg-zinc-800 px-1.5 py-0.5 rounded-full text-zinc-500 font-black">PRÓXIMAMENTE</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>


          {/* Links 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 md:mb-8 italic">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:juliandpr20040809@gmail.com" className="block md:inline-block py-2 md:py-0 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase italic tracking-wider break-all min-h-[44px] md:min-h-0">
                  juliandpr20040809@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/573003790123" target="_blank" rel="noopener noreferrer" className="block md:inline-block py-2 md:py-0 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase italic tracking-wider min-h-[44px] md:min-h-0">
                  300 3790123
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/julian-david-perez-rivera-562b22230/" target="_blank" rel="noopener noreferrer" className="block md:inline-block py-2 md:py-0 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase italic tracking-wider min-h-[44px] md:min-h-0">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Juliandpr0809" target="_blank" rel="noopener noreferrer" className="block md:inline-block py-2 md:py-0 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase italic tracking-wider min-h-[44px] md:min-h-0">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 italic text-center">
          <p>© {currentYear} Julian David Perez Rivera</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors py-2 sm:py-0">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors py-2 sm:py-0">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

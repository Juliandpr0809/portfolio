import { motion } from 'motion/react';
import { Play as PlayIcon, Pause } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon bug in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customMarker = L.divIcon({
  html: `<div style="
    width: 12px; 
    height: 12px; 
    background: #f59e0b; 
    border-radius: 50%;
    box-shadow: 0 0 10px #f59e0b, 0 0 20px #f59e0b;
    border: 2px solid white;
  "></div>`,
  className: '',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

export function Fragments() {
  const { isPlaying, togglePlayPause, currentTime, duration } = useMusic();
  const [showMap, setShowMap] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Format time (MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="fragments" className="bg-black text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-12 uppercase tracking-tight text-center md:text-left">
          Fragmentos de mí<span className="text-red-500">.</span>
        </h2>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16 md:mb-24"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Timeline */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-6 mb-8 relative before:content-[''] before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {[
                { text: 'Empecé a programar a los 18', color: 'bg-blue-500' },
                { text: 'Universidad Libre — Ing. Sistemas', color: 'bg-purple-500' },
                { text: 'Primer proyecto: Petcmatch', color: 'bg-green-500' },
                { text: 'Primer cliente real: EEMEC S.A.S', color: 'bg-amber-500' },
                { text: 'Actualmente: 8vo semestre', color: 'bg-red-500' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 relative z-10">
                  <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor] opacity-80`}></div>
                  <span className="text-sm font-medium text-zinc-400">{item.text}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold">Construyendo desde cero</h3>
            <p className="text-sm text-zinc-500">Trabajo arduo y constante.</p>
          </motion.div>

          {/* Card 2: Availability */}
          <motion.div 
            className="md:col-span-1 lg:col-span-1 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors flex flex-col items-center justify-center text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-green-400">¡Disponible!</h3>
            <p className="text-sm text-zinc-400">Para empleo o freelance</p>
          </motion.div>

          {/* Card 3: Terminal */}
          <motion.div 
            className="md:col-span-1 lg:col-span-1 bg-black rounded-[1.5rem] md:rounded-[2rem] p-6 border border-white/10 hover:border-white/20 transition-colors font-mono text-xs"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <p className="text-green-400">&gt; julian@dev init</p>
            <p><span className="text-green-400">✓</span> Cargado backend.exe</p>
            <p><span className="text-green-400">✓</span> Caché 3 proyectos reales.</p>
            <p><span className="text-green-400">✓</span> Flask + Python instalado.</p>
            <p><span className="text-green-400">✓</span> Superandome cada dia.</p>
          </motion.div>

          {/* Card 4: Roles */}
          <motion.div 
            className="md:col-span-1 lg:col-span-1 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-zinc-500">thinker.</p>
            <p className="text-lg md:text-xl text-zinc-500">builder.</p>
            <div className="flex items-center">
              <p className="text-xl md:text-2xl font-bold text-white">backend dev.</p>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-6 bg-amber-500 ml-1"
              />
            </div>
          </motion.div>

          {/* Card 5: Map */}
          <motion.div 
            className="md:col-span-1 lg:col-span-1 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-0 border border-white/10 hover:border-white/20 transition-colors overflow-hidden relative h-[200px] md:h-[300px]"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {showMap ? (
              <MapContainer 
                center={[10.9685, -74.7813]} 
                zoom={12} 
                scrollWheelZoom={false}
                zoomControl={false}
                attributionControl={false}
                style={{ height: '100%', width: '100%', background: '#0a0a0a' }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  subdomains={["a", "b", "c", "d"]}
                  attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                />
                <Marker position={[10.9685, -74.7813]} icon={customMarker}>
                  <Popup>
                    <span className="font-bold text-xs">📍 Barranquilla, Colombia</span>
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 right-4 z-[1000] pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Barranquilla, CO</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Music Player */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6">
              <div className="w-full h-32 md:h-40 rounded-2xl overflow-hidden relative">
                <img 
                  src="/img/music-bg.jpg" 
                  alt="Background Music" 
                  className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105' : 'grayscale opacity-50'}`}
                />
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex gap-1 items-end h-8">
                      {[0.7, 0.9, 0.6, 0.8, 0.7].map((dur, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [4, 24, 4] }} 
                          transition={{ repeat: Infinity, duration: dur }} 
                          className="w-1.5 bg-amber-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="pr-4">
                  <h4 className="font-bold text-base md:text-lg truncate">The Avatar's Love</h4>
                  <p className="text-xs md:text-sm text-zinc-400 truncate">Avatar: The Last Airbender OST</p>
                </div>
                <button 
                  onClick={togglePlayPause}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl flex-shrink-0"
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <PlayIcon size={18} fill="currentColor" />}
                </button>
              </div>
              <div className="space-y-2">
                <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-amber-500" 
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-[8px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <span>{formatTime(currentTime)}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-500 rounded-full animate-pulse" />
                    <span className="hidden sm:inline">Música que suena mientras codifico</span>
                    <span className="sm:hidden text-right">Coding music</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Quote / Typewriter */}
          <motion.div 
            className="md:col-span-1 lg:col-span-2 bg-zinc-900/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-center relative overflow-hidden"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-mono space-y-2">
              <TypewriterText text="Antes solo hacía CSS." delay={0.8} />
              <TypewriterText text="Ahora levanto servidores Flask" delay={2.5} />
              <div className="flex flex-wrap items-center gap-2">
                <TypewriterText text="a las 2am con café." delay={4.5} />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 6 }}
                  className="w-2 h-2 bg-amber-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <p className="text-lg text-zinc-400">
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="animate-pulse">_</span>
      )}
    </p>
  );
}

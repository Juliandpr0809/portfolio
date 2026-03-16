import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

export const BackgroundMusic = memo(function BackgroundMusic() {
  const { isPlaying, isMuted, togglePlayPause, toggleMute } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsExpanded(true); // Default expanded on mobile
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-[10px] font-bold text-amber-500 uppercase tracking-widest text-center animate-pulse w-full"
          >
            Click anywhere to play music
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onHoverStart={() => !isMobile && setIsExpanded(true)}
        onHoverEnd={() => !isMobile && setIsExpanded(false)}
        onClick={handleToggle}
        animate={{
          width: isExpanded ? (isMobile ? '260px' : '300px') : '48px',
          height: isExpanded ? '72px' : '48px',
          borderRadius: isExpanded ? '16px' : '24px',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`bg-zinc-900/80 backdrop-blur-md border ${
          isPlaying ? 'border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10'
        } shadow-2xl overflow-hidden cursor-pointer relative group flex items-center`}
      >
        {/* Collapsed View: Music Note Icon */}
        <div className="absolute left-0 w-12 h-12 flex items-center justify-center shrink-0 z-10">
          <motion.div
            animate={isPlaying ? { 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Music 
              size={20} 
              className={`transition-colors duration-300 ${
                isPlaying ? 'text-amber-500' : 'text-zinc-400'
              }`} 
            />
          </motion.div>
        </div>

        {/* Expanded View Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex items-center gap-4 pl-12 pr-3 w-full h-full"
            >
              {/* Album Art */}
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/img/music-bg.jpg" 
                  alt="The Avatar's Love" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                {isPlaying && !isMuted && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-0.5 items-end h-3">
                      <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-amber-500 rounded-full" />
                      <motion.div animate={{ height: [10, 4, 10] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-0.5 bg-amber-500 rounded-full" />
                      <motion.div animate={{ height: [6, 11, 6] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-amber-500 rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-black uppercase tracking-tight text-white leading-tight truncate">
                  The Avatar's Love
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 truncate">
                  Avatar OST
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

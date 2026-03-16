import React, { memo } from 'react';
import { motion } from 'motion/react';

export const Marquee = memo(function Marquee() {
  const text = "JULIANDPR.US / BACKEND / DATA SCIENCE / AI / JULIANDPR.US / BACKEND / DATA SCIENCE / AI / ";
  
  return (
    <div className="w-full bg-black border-y border-white/5 py-6 overflow-hidden select-none">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-3xl md:text-5xl font-black italic uppercase tracking-[0.1em] text-white/10 mx-4">
          {text}
        </span>
        <span className="text-3xl md:text-5xl font-black italic uppercase tracking-[0.1em] text-white/10 mx-4">
          {text}
        </span>
        <span className="text-3xl md:text-5xl font-black italic uppercase tracking-[0.1em] text-white/10 mx-4">
          {text}
        </span>
      </motion.div>
    </div>
  );
});

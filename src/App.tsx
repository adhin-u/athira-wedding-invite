import { motion } from 'motion/react';
import { CalendarPlus, MapPin, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const LotusDecoration = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-90 text-gold-main mx-auto drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M30 60 C 25 40, 10 35, 5 25 C 10 15, 20 15, 30 30 C 40 15, 50 15, 55 25 C 50 35, 35 40, 30 60 Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M30 50 C 20 30, 5 25, 0 15 C 15 15, 25 20, 30 35 C 35 20, 45 15, 60 15 C 55 25, 40 30, 30 50 Z" />
    <path d="M30 60 C 25 45, 15 40, 10 30 C 15 25, 25 25, 30 40 C 35 25, 45 25, 50 30 C 45 40, 35 45, 30 60 Z" fill="currentColor" />
    <circle cx="30" cy="5" r="2" fill="currentColor"/>
    <circle cx="20" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="40" cy="10" r="1.5" fill="currentColor"/>
  </svg>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center w-full my-6 opacity-80">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-main to-gold-main"></div>
    <div className="mx-3 rotate-45 w-2 h-2 bg-gold-main border border-gold-light"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-main to-gold-main"></div>
  </div>
);

const AmbientFirefly = ({ x, delay, duration, size, moveX }: { x: string, delay: number, duration: number, size: number, moveX: number }) => {
  return (
    <motion.div
      className="absolute bottom-[-10%] z-10 pointer-events-none rounded-full bg-gold-light"
      style={{ left: x, width: size, height: size, boxShadow: '0 0 12px 3px rgba(253,224,139,0.8)' }}
      animate={{ 
        y: ['0vh', '-120vh'],
        x: [0, moveX, -moveX, 0],
        opacity: [0, 0.9, 0.9, 0],
        scale: [0.8, 1.5, 1, 0.8]
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  );
};

export default function App() {
  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=20260913T043000Z/20260913T051500Z&details=Join+us+as+we+celebrate+the+wedding+ceremony.&location=Talap,+Kannur,+Kerala,+India";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Talap,+Kannur";
  
  const [fireflies, setFireflies] = useState<Array<{id: number, x: string, delay: number, duration: number, size: number, moveX: number}>>([]);

  useEffect(() => {
    // Generate fireflies only on client to avoid hydration mismatch
    const newFireflies = Array.from({length: 30}).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 12 + 10,
      size: Math.random() * 3 + 1,
      moveX: Math.random() * 80 - 40
    }));
    setFireflies(newFireflies);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <div className="min-h-screen bg-emerald-deep relative overflow-hidden flex flex-col items-center justify-center selection:bg-gold-main selection:text-emerald-deep py-12 px-4 md:py-20 md:px-8">
      
      {/* Deep Rich Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--color-emerald-mid)_0%,_transparent_60%)] opacity-70 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_var(--color-gold-dark)_0%,_transparent_50%)] opacity-20 z-0 pointer-events-none"></div>

      {/* Floating Fireflies */}
      {fireflies.map(firefly => (
        <AmbientFirefly key={firefly.id} x={firefly.x} delay={firefly.delay} duration={firefly.duration} size={firefly.size} moveX={firefly.moveX} />
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-[480px] z-20 relative"
      >
        <div className="bg-emerald-deep/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold-dark/40 overflow-hidden relative">
          
          {/* Ornate Arch Frame inside the card */}
          <div className="absolute inset-2 md:inset-3 border-[1px] border-gold-main/50 rounded-t-[140px] pointer-events-none"></div>
          <div className="absolute inset-4 md:inset-5 border-[1px] border-gold-light/30 rounded-t-[130px] pointer-events-none"></div>

          <div className="px-6 py-16 md:px-10 md:py-20 text-center relative z-10 flex flex-col items-center min-h-[600px] justify-center">
            
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center w-full">
              
              <motion.div variants={item} className="mb-6">
                <LotusDecoration />
              </motion.div>
              
              <motion.h4 variants={item} className="text-[0.65rem] md:text-xs tracking-[0.25em] font-sans text-gold-light/90 mb-8 font-medium uppercase font-semibold">
                With the blessings of our families
              </motion.h4>
              
              <motion.div variants={item} className="flex flex-col items-center space-y-2 w-full">
                 <h1 className="font-script text-7xl md:text-8xl text-ivory drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                  Athira
                </h1>
                <span className="text-3xl md:text-4xl text-gold-main font-script px-4 relative top-[-10px]">
                  &
                </span>
                <h1 className="font-script text-7xl md:text-8xl text-ivory drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)] relative top-[-20px]">
                  Adhin
                </h1>
              </motion.div>

              <motion.div variants={item} className="w-full flex flex-col items-center mt-2 mb-8">
                <GoldDivider />
                <p className="font-serif italic text-[1.1rem] md:text-[1.2rem] text-ivory/90 mb-5 px-6 leading-relaxed">
                  I joyfully invite you to celebrate my wedding ceremony.
                </p>
                <p className="font-sans text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] uppercase text-gold-main font-bold leading-relaxed px-4">
                  Your presence would mean the world to us
                </p>
              </motion.div>

              <motion.div variants={item} className="flex flex-col items-center w-full mb-10 text-ivory">
                <div className="flex flex-col space-y-1 w-full text-center group transition-all duration-300">
                  <div className="font-sans uppercase tracking-[0.15em] text-[0.65rem] text-gold-main font-bold mb-1">Muhurtham</div>
                  <div className="font-serif text-[1.25rem] md:text-[1.4rem] font-medium tracking-wide">Sunday, 13th Sep 2026</div>
                  <div className="font-sans text-xs tracking-widest text-gold-light pt-1 opacity-90">10:00 AM — 10:45 AM</div>
                </div>
                
                <div className="w-8 h-[1px] bg-gold-main/40 my-6"></div>
                
                <div className="flex flex-col space-y-1 w-full text-center">
                  <div className="font-sans uppercase tracking-[0.15em] text-[0.65rem] text-gold-main font-bold mb-1">Venue</div>
                  <div className="font-serif text-xl md:text-[1.3rem] font-medium tracking-wide">Bride's House</div>
                  <div className="font-sans text-xs uppercase tracking-wider text-gold-light opacity-90 pb-1">Talap, Kannur</div>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full justify-center px-2">
                <a 
                  href={calendarLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-3 bg-transparent text-gold-main border border-gold-main/40 py-3.5 px-4 rounded hover:bg-gold-main/10 hover:border-gold-main transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gold-main/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <CalendarPlus size={18} className="group-hover:scale-110 transition-transform text-gold-main relative z-10" />
                  <div className="flex flex-col text-left relative z-10">
                    <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-ivory">Save Date</span>
                    <span className="font-sans text-[0.55rem] text-gold-light opacity-80 uppercase tracking-widest mt-0.5">Add to Calendar</span>
                  </div>
                </a>
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-3 bg-gold-main text-emerald-deep py-3.5 px-4 rounded shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:bg-gold-light hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)] transition-all duration-300 group"
                >
                  <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-emerald-deep">Directions</span>
                    <span className="font-sans text-[0.55rem] text-emerald-deep/80 uppercase tracking-widest mt-0.5">View on Maps</span>
                  </div>
                </a>
              </motion.div>

              <motion.div variants={item} className="mt-12 flex flex-col items-center w-full">
                <p className="font-script text-4xl text-gold-main mb-3 drop-shadow-sm flex items-center gap-2">
                  With Gratitude
                </p>
                <p className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-ivory/80 font-medium">Athira & Adhin</p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

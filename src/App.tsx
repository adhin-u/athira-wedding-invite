import { motion } from 'motion/react';
import { CalendarPlus, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const MandalaDecoration = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-80 text-vedic-red mb-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M30 5 C35 15, 45 25, 55 30 C45 35, 35 45, 30 55 C25 45, 15 35, 5 30 C15 25, 25 15, 30 5 Z" />
    <path d="M30 15 C33 22, 38 27, 45 30 C38 33, 33 38, 30 45 C27 38, 22 33, 15 30 C22 27, 27 22, 30 15 Z" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="30" cy="30" r="4" fill="currentColor"/>
    <circle cx="30" cy="8" r="2" fill="currentColor"/>
    <circle cx="52" cy="30" r="2" fill="currentColor"/>
    <circle cx="30" cy="52" r="2" fill="currentColor"/>
    <circle cx="8" cy="30" r="2" fill="currentColor"/>
    <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
  </svg>
);

const BottomDecoration = () => (
  <svg width="140" height="20" viewBox="0 0 140 20" className="opacity-70 text-vedic-red mt-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M10 10 L60 10 M80 10 L130 10"/>
    <rect x="65" y="5" width="10" height="10" transform="rotate(45 70 10)" fill="currentColor" />
    <circle cx="55" cy="10" r="1.5" />
    <circle cx="85" cy="10" r="1.5" />
    <circle cx="10" cy="10" r="2" fill="currentColor" />
    <circle cx="130" cy="10" r="2" fill="currentColor" />
  </svg>
);

const AmbientSparkle = ({ x, delay, duration, size, xOffset }: { x: string, delay: number, duration: number, size: number, xOffset: number }) => {
  return (
    <motion.div
      className="absolute bottom-[-10%] z-10 pointer-events-none rounded-full bg-vedic-gold"
      style={{ left: x, width: size, height: size, boxShadow: '0 0 10px 2px rgba(212,175,55,0.7)' }}
      animate={{ 
        y: ['0vh', '-120vh'],
        x: [0, xOffset, -xOffset, 0],
        opacity: [0, 0.8, 0.8, 0],
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

const SwingingBell = ({ delay = 0, x = '0%', y = '0%', scale = 1 }) => {
  return (
    <motion.div
      className="absolute flex flex-col items-center z-20 origin-top pointer-events-none"
      style={{ left: x, top: y, scale }}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="w-[2px] h-12 md:h-20 bg-gradient-to-b from-vedic-gold to-yellow-600"></div>
      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" className="text-vedic-gold drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
        <path d="M12 0L2 15C1 17 2 20 5 20H19C22 20 23 17 22 15L12 0Z" fill="currentColor"/>
        <circle cx="12" cy="22" r="3" fill="currentColor"/>
        <circle cx="12" cy="26" r="1.5" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

const TopDrapes = () => (
  <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none overflow-hidden h-[200px] md:h-[300px]">
    {/* Background Orange Drape */}
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 320" className="absolute top-0 opacity-80">
      <motion.path 
        fill="#d35400" 
        d="M0,0 L1440,0 L1440,120 C1100,200 800,40 720,180 C640,40 340,200 0,120 Z" 
        animate={{ d: ["M0,0 L1440,0 L1440,120 C1100,200 800,40 720,180 C640,40 340,200 0,120 Z", "M0,0 L1440,0 L1440,140 C1100,180 800,60 720,200 C640,60 340,180 0,140 Z", "M0,0 L1440,0 L1440,120 C1100,200 800,40 720,180 C640,40 340,200 0,120 Z"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    {/* Foreground Red Drape */}
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 320" className="absolute top-0 drop-shadow-xl opacity-95">
      <motion.path 
        fill="#8B0000" 
        d="M0,0 L1440,0 L1440,80 C1100,160 800,20 720,140 C640,20 340,160 0,80 Z" 
        animate={{ d: ["M0,0 L1440,0 L1440,80 C1100,160 800,20 720,140 C640,20 340,160 0,80 Z", "M0,0 L1440,0 L1440,100 C1100,140 800,40 720,160 C640,40 340,140 0,100 Z", "M0,0 L1440,0 L1440,80 C1100,160 800,20 720,140 C640,20 340,160 0,80 Z"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    {/* Hanging floral toran dots */}
    <div className="absolute top-0 w-full flex justify-around px-2 md:px-12 mt-1 md:mt-2">
      {Array.from({length: 15}).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-1 md:w-2 h-10 md:h-16 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full shadow-sm mb-1"></div>
          <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-400 rounded-full shadow-md"></div>
        </div>
      ))}
    </div>
  </div>
);

const Pillars = () => (
  <>
    {/* Left Pillar */}
    <div className="absolute top-0 bottom-0 left-0 md:left-6 w-8 md:w-16 z-0 flex flex-col shadow-2xl opacity-90">
      <div className="h-24 md:h-32 w-full bg-gradient-to-b from-vedic-maroon via-vedic-red to-vedic-maroon rounded-b-md border-b-4 border-vedic-gold shadow-lg z-10"></div>
      <div className="flex-grow w-full bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600 border-x-4 border-vedic-maroon/60 flex flex-col justify-evenly items-center shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="w-4 md:w-8 h-4 md:h-8 rounded-full border-2 border-vedic-maroon/40 bg-vedic-gold shadow-inner"></div>
        ))}
      </div>
      <div className="h-40 md:h-48 w-full bg-gradient-to-t from-vedic-maroon via-vedic-red to-vedic-maroon rounded-t-md border-t-4 border-vedic-gold shadow-lg z-10"></div>
    </div>

    {/* Right Pillar */}
    <div className="absolute top-0 bottom-0 right-0 md:right-6 w-8 md:w-16 z-0 flex flex-col shadow-2xl opacity-90">
      <div className="h-24 md:h-32 w-full bg-gradient-to-b from-vedic-maroon via-vedic-red to-vedic-maroon rounded-b-md border-b-4 border-vedic-gold shadow-lg z-10"></div>
      <div className="flex-grow w-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 border-x-4 border-vedic-maroon/60 flex flex-col justify-evenly items-center shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="w-4 md:w-8 h-4 md:h-8 rounded-full border-2 border-vedic-maroon/40 bg-vedic-gold shadow-inner"></div>
        ))}
      </div>
      <div className="h-40 md:h-48 w-full bg-gradient-to-t from-vedic-maroon via-vedic-red to-vedic-maroon rounded-t-md border-t-4 border-vedic-gold shadow-lg z-10"></div>
    </div>
  </>
);

export default function App() {
  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=20260913T043000Z/20260913T051500Z&details=Join+us+as+we+celebrate+the+wedding+ceremony.&location=Talap,+Kannur,+Kerala,+India";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Talap,+Kannur";
  
  const [particles, setParticles] = useState<Array<{id: number, x: string, delay: number, duration: number, size: number, xOffset: number}>>([]);

  useEffect(() => {
    // Generate random ambient sparkles only on client to avoid hydration mismatch
    const newParticles = Array.from({length: 25}).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      size: Math.random() * 4 + 2,
      xOffset: Math.random() * 60 - 30
    }));
    setParticles(newParticles);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-vedic-cream relative overflow-hidden flex flex-col items-center justify-center selection:bg-vedic-gold selection:text-vedic-maroon">
      
      {/* Background Ambient Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-vedic-light-gold)_0%,_transparent_70%)] opacity-30 z-0"></div>

      {/* Structural Elements */}
      <TopDrapes />
      <Pillars />
      
      {/* Hanging Bells */}
      <SwingingBell delay={0} x="15%" y="0%" scale={0.8} />
      <SwingingBell delay={1.5} x="85%" y="0%" scale={0.8} />
      <SwingingBell delay={0.7} x="28%" y="0%" scale={0.6} />
      <SwingingBell delay={2.1} x="72%" y="0%" scale={0.6} />

      {/* Ambient Sparkles Animation */}
      {particles.map(particle => (
        <AmbientSparkle key={particle.id} x={particle.x} delay={particle.delay} duration={particle.duration} size={particle.size} xOffset={particle.xOffset} />
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="w-[90%] md:w-[480px] z-20 mt-16 md:mt-10 mb-8"
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl relative p-1 md:p-2 border border-vedic-gold/50 rounded-sm">
          {/* Inner Ornate Border */}
          <div className="border-2 border-vedic-red/80 px-6 py-12 md:px-10 md:py-16 text-center relative rounded-sm">
            
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-vedic-gold"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-vedic-gold"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-vedic-gold"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-vedic-gold"></div>

            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
              
              <motion.div variants={item}>
                <MandalaDecoration />
              </motion.div>
              
              <motion.h4 variants={item} className="text-xs md:text-sm tracking-[0.2em] font-sans text-vedic-maroon mb-6 font-semibold uppercase">
                With the blessings of our families
              </motion.h4>
              
              <motion.h1 variants={item} className="font-script text-6xl md:text-7xl text-vedic-red my-3 leading-tight drop-shadow-sm">
                Athira
                <span className="block text-2xl md:text-3xl my-3 text-vedic-gold font-serif italic">&</span>
                Adhin
              </motion.h1>

              <motion.div variants={item} className="my-10 w-full flex flex-col items-center">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-vedic-gold to-transparent mx-auto mb-6"></div>
                <p className="font-serif italic text-lg md:text-xl text-vedic-maroon/90 mb-4 px-2">
                  I joyfully invite you to celebrate my wedding ceremony.
                </p>
                <p className="font-sans text-[0.65rem] md:text-xs tracking-[0.15em] uppercase text-vedic-red font-bold leading-relaxed px-4">
                  Your presence would mean the world to us
                </p>
              </motion.div>

              <motion.div variants={item} className="flex flex-col items-center py-6 px-4 w-full mb-10 bg-vedic-light-gold/20 border border-vedic-gold/30 rounded-sm">
                <div className="flex flex-col space-y-1 w-full text-center">
                  <div className="font-sans uppercase tracking-[0.15em] text-xs text-vedic-maroon/70 font-bold mb-1">Muhurtham</div>
                  <div className="font-serif text-[1.4rem] font-bold text-vedic-maroon tracking-wide">Sunday, 13th Sep 2026</div>
                  <div className="font-sans text-sm tracking-widest text-vedic-red font-semibold pt-1">10:00 AM — 10:45 AM</div>
                </div>
                
                <div className="w-12 h-[1px] bg-vedic-gold my-4"></div>
                
                <div className="flex flex-col space-y-1 w-full text-center">
                  <div className="font-sans uppercase tracking-[0.15em] text-xs text-vedic-maroon/70 font-bold mb-1">Venue</div>
                  <div className="font-serif text-xl font-bold text-vedic-maroon tracking-wide">Bride's House</div>
                  <div className="font-sans text-sm uppercase tracking-wider text-vedic-red font-semibold">Talap, Kannur</div>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href={calendarLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-3 bg-white text-vedic-red border border-vedic-red/30 py-3.5 px-4 rounded-md hover:bg-vedic-red hover:text-white transition-all duration-300 shadow-sm group"
                >
                  <CalendarPlus size={20} className="group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">Save Date</span>
                    <span className="font-sans text-[0.65rem] opacity-80 uppercase tracking-widest mt-0.5">Add to Calendar</span>
                  </div>
                </a>
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-3 bg-vedic-gold text-white py-3.5 px-4 rounded-md shadow-[0_4px_10px_rgba(212,175,55,0.4)] hover:bg-yellow-600 hover:shadow-[0_6px_15px_rgba(212,175,55,0.6)] transition-all duration-300 group"
                >
                  <MapPin size={20} className="group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">Directions</span>
                    <span className="font-sans text-[0.65rem] opacity-90 uppercase tracking-widest mt-0.5">View on Maps</span>
                  </div>
                </a>
              </motion.div>

              <motion.div variants={item} className="mt-8 mb-2 w-full flex flex-col items-center">
                <p className="font-script text-3xl md:text-4xl text-vedic-red mb-3">With Gratitude,</p>
                <p className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-vedic-maroon/80 font-bold">Athira & Adhin</p>
              </motion.div>

              <motion.div variants={item}>
                <BottomDecoration />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


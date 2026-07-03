import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
    title: "Effortless Global Visa",
    titleBreak: "Services",
    description: "We provide a complete immigration & visa services for America, Canada & Australia for travel & education"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    title: "Your Journey to a",
    titleBreak: "New Life Starts Here",
    description: "Expert guidance for your permanent residency, study visa, and work permits globally."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    title: "Study Abroad with",
    titleBreak: "Top Universities",
    description: "Unlock your potential with our expert student visa consulting for top destinations worldwide."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[75vh] min-h-[480px] lg:h-[100dvh] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
        />
      </AnimatePresence>
      
      {/* Dark Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#0f172a]/30 sm:to-transparent z-[1]" />
      <div className="absolute inset-0 bg-black/20 z-[1] md:hidden" /> {/* Extra darkening for mobile legibility */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl lg:max-w-4xl mt-10 md:mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 mb-4 md:mb-6 border border-white/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
              Welcome to Visora Visa Agency
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </motion.div>

          <div className="h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} className="w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight"
                >
                  {slides[currentSlide].title} <br className="hidden sm:block" />
                  {slides[currentSlide].titleBreak}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="text-[15px] sm:text-lg md:text-[19px] text-gray-200 max-w-lg leading-relaxed font-medium"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 md:mt-4"
          >
            <button className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 font-bold text-white bg-red-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <span className="mr-2 uppercase tracking-wider text-[12px] md:text-[13px]">Learn More</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-[18px] md:h-[18px]" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-8 lg:right-12 xl:right-16 flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-4 z-10 items-center">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`cursor-pointer transition-all duration-300 flex items-center justify-center rounded-full ${
              currentSlide === index ? 'w-6 h-6 border border-white/50' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <motion.div 
                layoutId="activeDot"
                className="w-2 h-2 rounded-full bg-white" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

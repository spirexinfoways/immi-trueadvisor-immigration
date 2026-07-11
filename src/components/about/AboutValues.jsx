import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const valuesData = [
  {
    title: "Global Expertise",
    description: "Expert guidance to navigate complex international immigration systems.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
  },
  {
    title: "Transparent Process",
    description: "Complete transparency and honesty in all our visa applications and dealings.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Personalized Strategy",
    description: "Strategic planning tailored to your specific immigration goals.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Dedicated Support",
    description: "Comprehensive support at every step to ensure resilient decisions.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  }
];

const AboutValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full">
      <div className="flex flex-col border-b border-gray-200">
        {valuesData.map((item, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <div 
              key={index}
              className="relative border-t border-gray-200 cursor-pointer overflow-hidden sm:overflow-visible group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Color Animation (Fade instead of scaleX, Red color) */}
              <motion.div 
                className="absolute inset-0 bg-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <div className="relative z-10 flex items-center justify-between p-6 md:p-10 min-h-[140px]">
                
                {/* Content */}
                <div className={`transition-colors duration-300 w-full md:w-3/5 pr-4 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 text-[#0a1e5e] tracking-tight">{item.title}</h4>
                  <p className={`text-sm md:text-base font-light leading-relaxed transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                  <ArrowUpRight size={36} strokeWidth={1.5} />
                </div>
              </div>

              {/* Hover Image Reveal */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute top-1/2 left-1/2 md:left-auto md:right-32 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-[260px] h-[160px] md:w-[320px] md:h-[200px] rounded-xl overflow-hidden shadow-2xl z-20 pointer-events-none hidden md:block"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-105" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutValues;

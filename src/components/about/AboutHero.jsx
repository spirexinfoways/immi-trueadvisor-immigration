import React from 'react';
import { motion } from 'framer-motion';
import heroimg from '../../assets/about.jpg'

const AboutHero = () => {
  return (
    <section className="sticky top-0 h-[70vh] w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-2]"
        style={{ backgroundImage: `url('${heroimg}')` }}
      ></div>
      <div className="absolute inset-0 bg-[#5A8796]/100 mix-blend-multiply z-[-1]"></div>

      <div className="max-w-4xl z-10 -mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold mb-6 leading-[0.5] tracking-tight pt-50"
        >
          About us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-md font-light max-w-xl text-gray-100 opacity-90"
        >
          Immi Trueadvisor Immigration Canadian Immigration Services.  
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;

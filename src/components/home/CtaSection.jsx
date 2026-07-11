import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import bgImage from '../../assets/img1.jpg';

const CtaSection = ({ isGlobal }) => {
  return (
    <section className={`relative w-full overflow-hidden flex items-center ${isGlobal ? 'py-10 min-h-[400px]' : 'py-12 lg:py-28 min-h-[600px]'}`}>
      {/* Background Image with Fixed/Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat sm:bg-fixed max-sm:bg-[85%_top] sm:bg-[center_20%]"
        style={{ 
          backgroundImage: `url(${bgImage})`
        }}
      />
      
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-lg lg:max-w-[430px]">
          {/* White Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] mb-6 text-[#0a1e5e] tracking-tight">
              Ready to Start <br />
              Your <span className="text-red-600">Immigration</span> <br />
              Journey?
            </h2>
            
            <p className="text-gray-500 mb-8 max-w-xs text-sm sm:text-base leading-relaxed">
              Book a free consultation with one of our experts today
            </p>
            
            <button className="bg-[#0a1e5e] hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-lg text-xs sm:text-sm transition-all duration-300 flex items-center group shadow-md hover:shadow-lg">
              <span className="mr-2 uppercase tracking-wide">Schedule Consultation</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

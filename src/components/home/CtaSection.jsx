import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-20 lg:py-28 w-full overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Fixed/Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/736x/13/f2/f5/13f2f5caf80b8863fdc7eb7953190146.jpg')`,
          backgroundPosition: 'center 20%'
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
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.2] mb-6 text-[#0a1e5e] tracking-tight">
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

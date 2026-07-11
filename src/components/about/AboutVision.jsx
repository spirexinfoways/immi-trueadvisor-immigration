import React from 'react';
import { motion } from 'framer-motion';

const AboutVision = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8 order-2 lg:order-1"
        >
          <div className="text-gray-600 font-light text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Our vision is to become the world's most trusted immigration advisory, breaking down borders and making global mobility accessible to everyone. We envision a future where borders are bridges, not barriers, and where every individual has the opportunity to pursue their dreams, regardless of geographical limitations.
            </p>
            <p>
              By continuously innovating our processes and maintaining unwavering ethical standards, we aim to set new benchmarks in the immigration industry, ensuring that every journey we guide is characterized by success, empowerment, and profound positive impact.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Title with vertical bar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex items-start order-1 lg:order-2 mb-8 lg:mb-0 lg:pl-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1e5e] tracking-tight">
            Our Vision
          </h2>
          <div className="w-1.5 h-10 md:h-12 bg-red-500 ml-6 mt-1.5"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutVision;

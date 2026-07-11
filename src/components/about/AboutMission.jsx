import React from 'react';
import { motion } from 'framer-motion';

const AboutMission = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Side: Title with vertical bar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex items-start"
        >
          <div className="w-1.5 h-10 md:h-12 bg-red-500 mr-6 mt-1.5 "></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1e5e] tracking-tight">
            Our Mission
          </h2>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <div className="text-gray-600 font-light text-base md:text-lg leading-relaxed space-y-6">
            <p>
              We were founded on the idea that people want to work with and rely on partners that demonstrate a positive impact on their lives and global aspirations. These shifts, spurred by new generations and amplified by modern technologies, redefine what a seamless immigration process looks like. We believe everyone can thrive in this new era.
            </p>
            <p>
              Today, alongside our ecosystem of clients, partners, and communities, we deliver market-defining immigration solutions that connect legal expertise, ethics, and personalized strategies. Together we've built a leading organization dedicated to operationalizing trust and transparency in every visa application and consultation.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMission;

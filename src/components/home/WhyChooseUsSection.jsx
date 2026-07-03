import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaGlobe, FaCheckCircle, FaPuzzlePiece, FaHeadset, FaFileContract, FaMapSigns } from 'react-icons/fa';
import DepartingAnimation from './DepartingAnimation';

const features = [
  {
    title: "Global Visa Expertise",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaGlobe
  },
  {
    title: "High Success Rate",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaCheckCircle
  },
  {
    title: "Personalized Solutions",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaPuzzlePiece
  },
  {
    title: "End-to-End Support",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaHeadset
  },
  {
    title: "Hassle-Free Processing",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaFileContract
  },
  {
    title: "Expert Legal Guidance",
    desc: "We pride ourselves on delivering personalized guidance, accurate documentation support",
    icon: FaMapSigns
  }
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle background for the left side (like the mountains in screenshot) */}
      <div 
        className="absolute bottom-0 left-0 w-full lg:w-1/2 h-[60%] opacity-[0.05] pointer-events-none bg-no-repeat bg-bottom bg-contain" 
        // style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')` }} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-start">
          
          {/* Left Column (5 columns out of 12) */}
          <div className="lg:col-span-5 relative pt-4 flex flex-col h-full justify-between">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#0a1e5e] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                 <FaPlane className="text-red-500 transform -rotate-45" size={11} />
                 <span className="text-white text-[11px] font-bold tracking-[0.1em] uppercase">Why Choose Us</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-[38px] sm:text-5xl lg:text-[46px] xl:text-[52px] font-bold text-[#0a1e5e] leading-[1.15] mb-10 xl:mb-16 tracking-tight">
                Gateway to Global Opportunities and a Dream Career
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-auto relative w-full lg:max-w-[500px]"
            >
               <DepartingAnimation />
            </motion.div>
          </div>

          {/* Right Column (7 columns out of 12) */}
          <div className="lg:col-span-7 pt-6 lg:pt-20">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 lg:pl-10 xl:pl-16 pt-2"
            >
              {features.map((item, idx) => (
                 <motion.div key={idx} variants={fadeUpVariants} className="flex flex-col items-start group">
                    <div className="w-[60px] h-[60px] bg-[#e63946] rounded-[18px] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                       <item.icon size={26} />
                    </div>
                    <h3 className="text-[20px] xl:text-[22px] font-bold text-[#0a1e5e] mb-3 leading-snug pr-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] xl:text-[15px] leading-relaxed">
                       {item.desc}
                    </p>
                 </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

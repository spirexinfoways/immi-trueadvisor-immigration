import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaFileSignature, FaPassport, FaUserGraduate, FaFileAlt, FaAward, FaPlane } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ServiceCard = ({ icon: Icon, title, index }) => (
  <motion.div 
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={cardVariants}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start h-full group"
  >
    <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-[20px] font-bold text-slate-800 mb-3 leading-tight">{title}</h3>
    <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
      Expert help with permanent residence ship processes for various countries. Prepare all the required document
    </p>
    <a href="#" className="mt-auto text-[11px] font-bold text-slate-800 hover:text-red-600 transition-colors flex items-center uppercase tracking-widest">
      Learn More <ArrowUpRight size={14} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 hover:text-red-600 transition-transform" />
    </a>
  </motion.div>
);

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const headingWordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const headingLine1 = "Reliable Visa & Immigration".split(" ");
const headingLine2 = "Services Backed by Expertise".split(" ");

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f7fc] relative overflow-hidden">
      {/* Decorative Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.30] pointer-events-none bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/af/f6/7d/aff67d8973563412fca9e0ddcd98323d.jpg')`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#0a1e5e] rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <FaPlane className="text-red-500 transform -rotate-45" size={12} />
            <span className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">
              Our Services
            </span>
          </motion.div>
          <motion.h2 
            variants={headingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight flex flex-col items-center justify-center"
          >
            <div className="flex flex-wrap justify-center overflow-hidden">
              {headingLine1.map((word, i) => (
                <motion.span key={`l1-${i}`} variants={headingWordVariants} className="inline-block mr-[0.25em] pb-1">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center overflow-hidden mt-1 md:mt-2">
              {headingLine2.map((word, i) => (
                <motion.span key={`l2-${i}`} variants={headingWordVariants} className="inline-block mr-[0.25em] pb-1">
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
          
          {/* Left Side: 4 Cards (Takes up 2 columns on xl screens) */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            <ServiceCard index={0} title="PR Applications" icon={FaFileSignature} />
            <ServiceCard index={1} title="Post-landing Services" icon={FaPassport} />
            <ServiceCard index={2} title="Student Visa Assistance" icon={FaUserGraduate} />
            <ServiceCard index={3} title="Immigration Application" icon={FaFileAlt} />
          </div>

          {/* Right Side: Image and Badges (Takes up 1 column on xl screens) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="xl:col-span-1 relative h-full min-h-[400px] xl:min-h-0 rounded-2xl overflow-hidden group shadow-md"
          >
            {/* Image */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Happy travelers" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* USA No 1 Agency Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-0 left-0 bg-red-600 text-white p-4 sm:p-6 rounded-br-3xl flex flex-col items-center justify-center w-28 sm:w-36 shadow-lg z-10"
            >
              <FaAward size={28} className="mb-2 sm:mb-3 sm:text-[36px]" />
              <div className="text-center font-bold leading-tight">
                <span className="block text-base sm:text-lg">USA No 1</span>
                <span className="block text-[11px] sm:text-sm font-medium opacity-90">Visa Agency</span>
              </div>
            </motion.div>

            {/* Floating Countries Served Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-white p-3 sm:p-4 rounded-xl flex items-center justify-between gap-2 shadow-xl z-10"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                <img src="https://flagcdn.com/w80/us.png" alt="USA" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://flagcdn.com/w80/ca.png" alt="Canada" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://flagcdn.com/w80/au.png" alt="Australia" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                  +
                </div>
              </div>
              <div className="text-[11px] sm:text-sm font-bold text-slate-800 leading-tight w-20 sm:w-24 text-right sm:text-left">
                30 Countries we serves
              </div>
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

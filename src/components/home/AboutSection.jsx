import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaPaperPlane, FaAngleDoubleRight, FaPhoneAlt, FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Animations
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" }
  }
};

const AboutSection = () => {
  return (
    <section className="pt-4 pb-12 sm:py-12 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-10 items-center">
          
          {/* Left Side: Images */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative pr-0 lg:pr-12 pl-4 sm:pl-16 lg:pl-20 mt-4 sm:mt-10 lg:mt-0 mb-32 sm:mb-20 lg:mb-0"
          >
            {/* Main Image */}
            <motion.div variants={imageVariants} className="relative rounded-2xl overflow-hidden shadow-2xl h-[650px] xl:h-[650px]">
              <img 
                src="https://i.pinimg.com/736x/e9/7c/ea/e97cea90ce77d9490c50747d6e6afa49.jpg" 
                alt="Happy couple traveling" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Left Card: Served Client */}
            <motion.div 
              variants={scaleUpVariants}
              className="absolute top-[490px] sm:top-[60%] lg:top-1/2 left-0 lg:-left-4 xl:-left-8 transform sm:-translate-y-1/2 lg:-translate-y-1/4 max-sm:scale-[0.85] max-sm:origin-left bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-5 sm:p-6 w-[230px] sm:w-[260px] z-10"
            >
              {/* Blue Plane Icon */}
              <div className="absolute -top-4 -right-4 bg-[#0a1e5e] rounded-full p-3 sm:p-4 shadow-lg border-4 border-white">
                <FaPlane className="text-white transform -rotate-45" size={16} />
              </div>
              
              <div className="text-center pb-4 border-b border-gray-100">
                <span className="font-bold text-[#0a1e5e] text-sm">Served Client</span>
              </div>
              
              {/* Circular Progress */}
              <div className="my-6 relative flex justify-center items-center">
                <svg viewBox="0 0 36 36" className="w-28 h-28 transform -rotate-90">
                  <path
                    className="text-blue-50"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-[#0a1e5e]"
                    strokeDasharray="60, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-[10px] text-gray-500 font-medium">Successful</span>
                   <span className="text-[22px] font-bold text-gray-800 leading-none mt-1">12.786</span>
                </div>
              </div>
              
              {/* Avatars */}
              <div className="flex justify-center -space-x-3 mb-4">
                <img className="w-9 h-9 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1" />
                <img className="w-9 h-9 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User 2" />
                <img className="w-9 h-9 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 3" />
                <div className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold shadow-md z-10 border-[3px] border-white text-sm">
                  +
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-medium text-center uppercase tracking-wider">
                We are serving for 20 Years
              </p>
            </motion.div>

            {/* Floating Right Card: Call for consultation */}
            <motion.div 
              variants={scaleUpVariants}
              className="absolute -top-6 sm:top-auto sm:-bottom-8 lg:-bottom-10 left-30 sm:left-auto right-2 sm:right-0 lg:-right-4 bg-[#e63946] text-white rounded-2xl p-3 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-xl z-10"
            >
              <div className="bg-white rounded-full w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-[#e63946] flex-shrink-0">
                <FaPhoneAlt className="text-[14px] sm:text-[20px]" />
              </div>
              <div>
                <p className="text-[11px] sm:text-[13px] opacity-90 mb-0 sm:mb-0.5 font-medium leading-tight">Call For Consultation</p>
                <p className="text-[15px] sm:text-[20px] font-bold leading-tight whitespace-nowrap">+01 567 114 3312</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="pl-0 lg:pl-4 xl:pl-10"
          >
            {/* Top Badge */}
            <motion.div variants={fadeUpVariants} className="inline-flex items-center space-x-2 bg-[#0a1e5e] rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <FaPaperPlane className="text-red-500" size={11} />
              <span className="text-white text-[11px] font-bold tracking-[0.1em] uppercase">
                About Company
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl sm:text-[42px] lg:text-[46px] xl:text-[54px] font-bold text-[#0a1e5e] mb-4 sm:mb-6 leading-[1.15]"
            >
              We help Making Your <br className="hidden sm:block" /> Dream Into Reality
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeUpVariants} className="text-gray-500 leading-relaxed mb-10 text-[15px] xl:text-[16px] max-w-[600px]">
              Immi Trueadvisor Immigration Consultancy was created to provide uniquely designed premium services in the world of education and migration. As people are dreaming more hands-on experience.
            </motion.p>

            {/* Grid List */}
            <motion.div variants={fadeUpVariants} className="bg-[#f4f7fc] border-l-4 border-[#e63946] rounded-r-3xl p-6 sm:p-8 mb-10 max-w-[600px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                {[
                  "Expert Knowledge", "Transparent Advice",
                  "Higher Success Rate", "End-to-End Support",
                  "Personalized Guidance", "Global Expertise"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold text-[#0a1e5e]">
                    <FaAngleDoubleRight className="text-blue-300 min-w-[14px]" /> 
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Actions */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-6 sm:gap-10">
              <Link to="/about" className="bg-[#0a1e5e] text-white px-8 py-4 rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-blue-900 transition flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-300 w-max">
                Learn More <ArrowUpRight size={16} className="ml-2" />
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e63946] text-white flex items-center justify-center shadow-md">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0a1e5e] mb-0.5">Have Questions?</p>
                  <p className="text-[14px] font-medium text-gray-500">+01 546 378 333</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

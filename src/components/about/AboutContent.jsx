import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Play, Star } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="w-full">
      {/* Top Section: Image Left, Text Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        
        {/* Left: Image with floating elements */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-4 md:px-8 lg:px-0"
        >
          {/* Main Image */}
          <div className="relative rounded-[1rem] overflow-hidden shadow-xl aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Immigration Consultation" 
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play size={24} className="text-[#0a1e5e] ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-8 left-0 md:-left-4 bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-[240px]"
          >
            <p className="text-gray-900 font-bold text-sm mb-1">"Making an impact, together"</p>
            <p className="text-gray-500 text-xs">TrueAdvisor Founder</p>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#0a1e5e] text-white px-4 py-1.5 rounded-full mb-6 shadow-md"
          >
            <Plane size={14} className="text-red-500 transform -rotate-45" fill="currentColor" />
            <span className="text-xs font-bold tracking-[0.10em] uppercase mt-0.5">About Us</span>
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-bold text-[#0a1e5e] leading-[1.15] mb-6 tracking-tight">
            We empower <br className="hidden md:block" /> global dreams
          </h3>
          
          <div className="text-gray-600 font-light text-base leading-relaxed space-y-4 mb-8">
            <p>
              TrueAdvisor Immigration is dedicated to helping individuals and families navigate the complex world of immigration with ease and confidence. We believe in designing a better future for our clients by providing expert, transparent, and personalized guidance.
            </p>
            <p>
              Our team of experienced professionals ensures that every step of your journey is handled with the utmost care and precision.
            </p>
          </div>

          {/* Quote Block */}
          <div className="border-l-4 border-red-500 pl-6 py-2">
            <p className="text-gray-800 italic font-medium leading-relaxed text-sm md:text-base">
              "Every successful visa application is a life changed. We are committed to making your global aspirations a reality, with integrity and excellence."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Centered Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative pt-16 mt-16"
      >
        {/* Decorative Icons (Using SVG paths similar to the image's star sparkles) */}
        <div className="absolute top-10 left-10 text-gray-800 hidden md:block">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/></svg>
        </div>
        <div className="absolute top-4 right-20 text-gray-800 hidden md:block">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/></svg>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold text-[#0a1e5e] leading-[1.2] mb-6 tracking-tight">
          We help individuals to grow <br className="hidden md:block" /> faster and bigger
        </h3>
        <p className="text-gray-600 font-light text-base max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutContent;

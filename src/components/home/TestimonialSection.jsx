import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsRow1 = [
  {
    name: "Olivia Richardson",
    location: "",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "Immi Trueadvisor Immigration made my immigration process incredibly smooth. Their team guided me through every step of the visa application. I felt supported and informed the entire time."
  },
  {
    name: "Sophia Mitchell",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    text: "As someone who was overwhelmed by the paperwork, I appreciate the clarity and dedication of the consultants. They handled my complex case with ease."
  },
  {
    name: "Aisha Khan",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "I never knew applying for a visa could be this stress-free! The experts at Immi Trueadvisor Immigration are so honest in their approach. Plus, the preparation was top-notch."
  },
  {
    name: "David Smith",
    location: "Melbourne, Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    text: "The variety of visa solutions they offer is amazing! Excellent and prompt communication throughout the entire permanent residency process."
  }
];

const testimonialsRow2 = [
  {
    name: "Priya Deshmukh",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=150&auto=format&fit=crop",
    text: "This consultancy has changed my future for the better! Their guidance helped me secure a student visa to my dream university without any hurdles."
  },
  {
    name: "Michael Chen",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    text: "I'm obsessed with the level of detail they provide. They gave me the perfect checklist and made sure I didn't miss a single document."
  },
  {
    name: "Sarah Jenkins",
    location: "Auckland, NZ",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    text: "From the initial consultation to the final visa stamp, the experience was flawless. I highly recommend Immi Trueadvisor Immigration to anyone looking to relocate."
  },
  {
    name: "Omar Al-Fayed",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    text: "Professional, transparent, and extremely helpful. They helped me secure my investor visa in record time. A must-try service!"
  }
];

const TestimonialCard = ({ t }) => (
  <div className="w-[85vw] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-[#f4f7fc] hover:bg-white transition-all duration-300 p-6 sm:p-8 rounded-3xl border border-transparent hover:border-gray-100 shadow-sm hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] group relative overflow-hidden mx-2">
    <FaQuoteLeft className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-200/40 group-hover:text-red-100 transition-colors duration-300" size={45} />
    <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[1.8] mb-8 relative z-10 italic">
      "{t.text}"
    </p>
    <div className="flex items-center gap-2 relative z-10 mt-auto">
      <img 
        src={t.image} 
        alt={t.name} 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-[3px] border-white shadow-md group-hover:border-red-50 transition-colors"
      />
      <div>
        <h4 className="font-bold text-[#0a1e5e] text-sm sm:text-base">{t.name}</h4>
        <p className="text-[11px] sm:text-xs text-red-500 font-bold uppercase tracking-wider mt-0.5">{t.location}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = ({ isGlobal }) => {
  return (
    <section className={`${isGlobal ? 'py-8' : 'py-12 lg:py-28'} bg-white relative overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1e5e] leading-[1.15] mb-4 tracking-tight"
          >
            What people are saying?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm sm:text-base"
          >
            Don't just take our word for it—see what our customers have to say about their experience!
          </motion.p>
        </div>
      </div>

      {/* Marquee Containers */}
      <div className="relative w-full flex flex-col gap-6 pb-10 overflow-hidden">
        
        {/* Row 1 - Left to Right */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          <div className="flex gap-4 px-2">
            {testimonialsRow1.map((t, index) => <TestimonialCard key={`orig-${index}`} t={t} />)}
          </div>
          <div className="flex gap-4 px-2">
            {testimonialsRow1.map((t, index) => <TestimonialCard key={`dup-${index}`} t={t} />)}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          <div className="flex gap-4 px-2">
            {testimonialsRow2.map((t, index) => <TestimonialCard key={`orig-${index}`} t={t} />)}
          </div>
          <div className="flex gap-4 px-2">
            {testimonialsRow2.map((t, index) => <TestimonialCard key={`dup-${index}`} t={t} />)}
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default TestimonialSection;

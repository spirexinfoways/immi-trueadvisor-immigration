import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { FaPlane } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of immigration visas do you handle?",
    answer: "We handle a wide range of visas including skilled worker visas, student visas, family sponsorship, business/investor visas, and permanent residency applications across multiple countries like Canada, Australia, UK, and USA."
  },
  {
    question: "How long does the immigration process take?",
    answer: "The processing time varies significantly depending on the country, the type of visa, and the complexity of your individual case. It can range from a few weeks for temporary visas to over a year for permanent residency."
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "No legitimate immigration consultant can guarantee visa approval, as the final decision rests solely with the respective government's immigration authorities. However, we guarantee that your application will be prepared with the highest level of accuracy and professionalism to maximize your chances of success."
  },
  {
    question: "What are your consultation fees?",
    answer: "We offer an initial free consultation to evaluate your profile and discuss your options. After that, our fees depend on the specific services required for your immigration journey. We provide a transparent fee structure before you sign any agreement."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 lg:py-10 bg-[#fafcff]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#0a1e5e] rounded-full px-4 py-1.5 mb-6"
          >
             <FaPlane className="text-red-500 transform -rotate-45" size={11} />
             <span className="text-white text-[11px] font-bold tracking-[0.1em] uppercase">Trusted By Thousands</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0a1e5e] mb-4 tracking-tight"
          >
            Frequently <br className="hidden sm:block" /> Asked Questions
          </motion.h2>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ' 
                    : 'bg-[#f4f7fc] rounded-[24px] hover:bg-[#eef2f9] cursor-pointer'
                }`}
              >
                <div 
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center p-5 sm:p-6 cursor-pointer select-none"
                >
                  <h3 className={`font-semibold text-base sm:text-lg pr-4 ${isOpen ? 'text-[#0a1e5e]' : 'text-gray-700'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                    isOpen ? 'bg-red-600 text-white' : 'bg-red-600 text-white shadow-sm'
                  }`}>
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-gray-500 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FaqSection;

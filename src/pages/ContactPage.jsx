import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import heroimg from '../assets/about.jpg';

const ContactPage = () => {
  return (
    <div className="relative bg-[#0a1e5e]">
      {/* Hero Section */}
      <section className="sticky top-0 h-[70vh] w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 text-white overflow-hidden bg-[#0a1e5e]">
        <img 
          src={heroimg} 
          alt="Contact Us"
          loading="eager"
          onLoad={(e) => e.target.classList.remove('opacity-0')}
          className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-0 transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-[#0a1e5e]/50 mix-blend-multiply z-[-1]"></div>

        <div className="w-full max-w-6xl z-10 -mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold mb-6 leading-[1.15] tracking-tight pt-48"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-lg md:text-[19px] font-medium max-w-2xl text-gray-200 mb-8 leading-relaxed"
          >
            Get in touch with our team of immigration experts.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 -mt-16 md:-mt-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem] min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 shadow-[0_-15px_40px_rgba(0,0,0,0.15)]">
        <div className="w-full mx-auto px-6 md:px-20 lg:px-32 ">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e5e] mb-6">
                Get In Touch
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-12 max-w-md">
                We are here to help you with your immigration journey. Reach out to our team of experts and let us guide you step by step.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mr-6 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-[#0a1e5e] mb-2">Office Address</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">123 Immigration Blvd, Suite 400<br/>Toronto, ON M5V 2T6, Canada</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mr-6 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-[#0a1e5e] mb-2">Phone Number</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mr-6 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-[#0a1e5e] mb-2">Email Address</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">info@immitrueadvisor.com<br/>support@immitrueadvisor.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mr-6 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Clock size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-[#0a1e5e] mb-2">Working Hours</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a1e5e] mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0a1e5e] mb-2">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-gray-50/50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0a1e5e] mb-2">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-gray-50/50" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1e5e] mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-gray-50/50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1e5e] mb-2">Subject</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-gray-50/50" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1e5e] mb-2">Message</label>
                  <textarea rows="4" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-gray-50/50 resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition shadow-md hover:shadow-lg mt-4">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-24 w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.166418464673!2d-79.38927958450284!3d43.64468647912163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;

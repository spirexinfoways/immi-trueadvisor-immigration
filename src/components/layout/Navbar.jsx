import React, { useState, useEffect } from 'react';
import { Search, MessageSquare, ChevronDown, Plane, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle Scroll for Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pages', path: '/pages' },
    { name: 'Services', path: '/services' },
    { name: 'Visa', path: '/visa' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isSticky && <div className="h-[76px] w-full hidden lg:block" />}
      
      <div className={`transition-all duration-300 w-full z-50 ${isSticky ? 'fixed top-0 left-0 py-3 shadow-md bg-white lg:bg-transparent' : 'mt-4 lg:mt-5 relative'}`}>
        
        {/* Full width background for sticky state (Desktop only for animation) */}
        {isSticky && (
          <motion.div 
            layoutId="navBackground"
            className="absolute inset-0 bg-white hidden lg:block"
            animate={{ borderRadius: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        <div className={`flex items-center justify-between relative z-10 ${isSticky ? 'container mx-auto px-4' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 group transition-colors duration-300 relative z-10 ${isSticky ? 'text-[#0a1e5e]' : 'text-white'}`}>
            <div className="relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-red-600 rounded-full rounded-tr-none transform rotate-45 group-hover:scale-105 transition-transform shadow-lg">
              <Plane size={18} className="text-white transform -rotate-45" fill="currentColor" />
            </div>
            <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 ${isSticky ? '' : 'drop-shadow-md'}`}>Immi Trueadvisor Immigration</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden relative z-10">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none rounded-lg backdrop-blur-sm border transition-colors ${
                isSticky 
                  ? 'text-gray-800 border-gray-200 hover:bg-gray-100' 
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav Content */}
          <div className="hidden lg:flex items-center relative p-1.5 pl-8">
            
            {/* Pill background for normal state */}
            {!isSticky && (
              <motion.div 
                layoutId="navBackground"
                className="absolute inset-0 bg-white shadow-2xl"
                animate={{ borderRadius: 9999 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            )}

            <div className="flex items-center space-x-8 font-semibold text-[15px] text-gray-800 mr-8 relative z-10">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  className={`flex items-center transition-colors ${location.pathname === link.path ? 'text-red-600' : 'hover:text-red-600'}`}
                >
                  {link.name} 
                  {link.name !== 'Contact Us' && <ChevronDown size={14} className="ml-1 text-gray-400" />}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-5 text-gray-500 mr-6 border-l border-gray-200 pl-6 relative z-10">
              <button className="hover:text-red-600 transition-colors"><Search size={20} strokeWidth={2.5} /></button>
            </div>

            <a href="tel:+176845399" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-bold flex items-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative z-10">
              <MessageSquare size={18} className="mr-2" />
              +1 768 453 99
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Menu Drawer */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col lg:hidden overflow-y-auto"
              >
                <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50/80 backdrop-blur-md sticky top-0 z-10">
                  <div className="flex items-center space-x-2 text-slate-900">
                    <div className="relative flex items-center justify-center w-8 h-8 bg-red-600 rounded-full rounded-tr-none transform rotate-45 shadow-sm">
                      <Plane size={16} className="text-white transform -rotate-45" fill="currentColor" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">Immi Trueadvisor Immigration</span>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col py-6 px-6 space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                    >
                      <Link 
                        to={link.path} 
                        className={`text-lg font-semibold flex items-center justify-between border-b border-gray-50 pb-4 ${
                          location.pathname === link.path ? 'text-red-600' : 'text-slate-800'
                        }`}
                      >
                        {link.name}
                        {link.name !== 'Contact Us' && <ChevronDown size={18} className="text-gray-400" />}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto p-6 space-y-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Need help?</p>
                      <a href="tel:+176845399" className="text-lg font-bold text-slate-900">+1 768 453 99</a>
                    </div>
                  </div>
                  
                  <a href="/contact" className="block w-full bg-red-600 text-center hover:bg-red-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md active:scale-95">
                    Get a Free Consultation
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;

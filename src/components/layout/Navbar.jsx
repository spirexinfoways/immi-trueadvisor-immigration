import React, { useState, useEffect } from 'react';
import { Search, MessageSquare, ChevronDown, ChevronRight, Plane, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { nav as siteNav } from '../../data/site';
import logoImg from '../../assets/03.png';

const DesktopL3 = ({ item }) => {
  if (!item.children) return null;
  return (
    <div className="absolute top-[100%] left-3 opacity-0 invisible group-hover/l3:opacity-100 group-hover/l3:visible translate-y-2 group-hover/l3:translate-y-0 w-[260px] bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl border border-gray-100 p-2 transition-all duration-150 z-50 mt-1">
      <div className="absolute -top-4 left-0 w-full h-4"></div>
      {item.children.map((child, idx) => (
        <Link key={idx} to={child.slug} className="block px-4 py-2.5 rounded-xl text-[14px] font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors">
          {child.label}
        </Link>
      ))}
    </div>
  )
}

const DesktopL2 = ({ item }) => {
  if (!item.children) return null;
  return (
    <div className="absolute top-0 left-[100%] opacity-0 invisible group-hover/l2:opacity-100 group-hover/l2:visible -translate-x-2 group-hover/l2:translate-x-0 w-[300px] bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl border border-gray-100 p-2 transition-all duration-150 z-50 ml-1">
      <div className="absolute top-0 -left-6 w-6 h-full"></div>
      {item.children.map((child, idx) => (
        <div key={idx} className="relative group/l3">
          <Link to={child.slug} className="flex justify-between items-center px-4 py-2.5 rounded-xl text-[14px] font-medium text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors">
            <span>{child.label}</span>
            {child.children && <ChevronRight size={16} className="text-gray-400 group-hover/l3:text-red-500 group-hover/l3:rotate-90 transition-transform duration-200" />}
          </Link>
          <DesktopL3 item={child} />
        </div>
      ))}
    </div>
  )
}

const DesktopL1 = ({ item }) => {
  if (!item.children) return null;
  return (
    <div className="absolute top-[100%] left-0 opacity-0 invisible group-hover/l1:opacity-100 group-hover/l1:visible translate-y-2 group-hover/l1:translate-y-0 w-[320px] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 p-2 transition-all duration-150 z-50 mt-1">
      <div className="absolute -top-6 left-0 w-full h-6"></div>
      {item.children.map((child, idx) => (
        <div key={idx} className="relative group/l2">
          <Link to={child.slug} className="flex justify-between items-center px-4 py-3 rounded-xl text-[15px] font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors">
            <span>{child.label}</span>
            {child.children && <ChevronRight size={16} className="text-gray-400 group-hover/l2:text-red-500" />}
          </Link>
          <DesktopL2 item={child} />
        </div>
      ))}
    </div>
  )
}

const MobileNavList = ({ items, depth = 1 }) => {
  if (!items) return null;
  return (
    <div className={`flex flex-col ${depth > 1 ? 'pl-4 border-l-2 border-gray-100/60 ml-2 mt-2 space-y-2.5' : 'pl-4 space-y-3 pt-2'}`}>
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <Link 
            to={item.slug} 
            className={`block ${depth === 1 ? 'text-[15px] font-medium text-slate-700' : depth === 2 ? 'text-[14.5px] text-gray-600' : 'text-[14px] text-gray-500'} hover:text-red-600 transition-colors`}
          >
            {item.label}
          </Link>
          {item.children && (
            <MobileNavList items={item.children} depth={depth + 1} />
          )}
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Close mobile menu and disable transitions temporarily when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsNavigating(true);
    
    // The page auto-scrolls to top, wait a moment for the scroll event to settle, then re-enable transitions
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 400);
    
    return () => clearTimeout(timeout);
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
    
    // Trigger once on mount just in case we start scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const customNav = [
    { label: 'Home', slug: '/' },
    ...siteNav.map(n => {
      if (n.label === 'About Us') return { label: 'About', slug: '/about' };
      return n;
    }),
    { label: 'Contact Us', slug: '/contact' }
  ];

  return (
    <>
      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isSticky && <div className="h-[76px] w-full hidden lg:block" />}

      <div className={`${isNavigating ? '!transition-none' : 'transition-all duration-300'} w-full z-50 ${isSticky ? 'fixed top-0 left-0 py-3 shadow-md bg-white lg:bg-transparent' : 'mt-4 lg:mt-5 relative'}`}>

        {/* Full width background for sticky state (Desktop only for animation) */}
        {isSticky && !isNavigating && (
          <motion.div
            layoutId="navBackground"
            className="absolute inset-0 bg-white hidden lg:block"
            animate={{ borderRadius: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        <div className={`flex items-center justify-between relative z-10 ${isSticky ? 'container mx-auto px-4' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center group transition-transform duration-500 hover:scale-105 relative z-10`}>
            <img src={logoImg} alt="Immi Trueadvisor Immigration" className="h-16 lg:h-20 w-auto object-contain drop-shadow-sm" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden relative z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none rounded-lg backdrop-blur-sm border transition-colors ${isSticky
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

            <div className="flex items-center space-x-6 font-semibold text-[15px] text-gray-800 mr-8 relative z-10">
              {customNav.map((item, index) => (
                <div key={index} className="relative group/l1 py-4">
                  <Link
                    to={item.slug}
                    className={`flex items-center transition-colors ${location.pathname.startsWith(item.slug) && item.slug !== '/' ? 'text-red-600' : location.pathname === '/' && item.slug === '/' ? 'text-red-600' : 'hover:text-red-600'}`}
                  >
                    {item.label}
                    {item.children && item.children.length > 0 && (
                      <ChevronDown size={14} className="ml-1 text-gray-400 group-hover/l1:text-red-600 transition-colors" />
                    )}
                  </Link>

                  <DesktopL1 item={item} />
                </div>
              ))}
            </div>

            <a href="tel:+12899026698" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-bold flex items-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative z-10">
              <MessageSquare size={18} className="mr-2" />
              +1 289 902 6698
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
                    <img src={logoImg} alt="Immi Trueadvisor Immigration" className="h-12 w-auto object-contain" />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col py-6 px-6 space-y-6">
                  {customNav.map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                    >
                      {item.children && item.children.length > 0 ? (
                        <div className="flex flex-col space-y-2">
                          <Link to={item.slug} className={`text-lg font-semibold pb-2 border-b border-gray-50 ${location.pathname.startsWith(item.slug) ? 'text-red-600' : 'text-slate-800'}`}>
                            {item.label}
                          </Link>
                          <MobileNavList items={item.children} depth={1} />
                        </div>
                      ) : (
                        <Link
                          to={item.slug}
                          className={`text-lg font-semibold flex items-center justify-between border-b border-gray-50 pb-4 ${location.pathname === item.slug ? 'text-red-600' : 'text-slate-800'
                            }`}
                        >
                          {item.label}
                        </Link>
                      )}
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
                      <a href="tel:+12899026698" className="text-lg font-bold text-slate-900">+1 289 902 6698</a>
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

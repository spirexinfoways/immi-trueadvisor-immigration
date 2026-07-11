import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 md:w-14 md:h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(220,38,38,0.4)] hover:bg-red-700 hover:scale-110 hover:shadow-[0_10px_40px_rgba(220,38,38,0.6)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-200 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;

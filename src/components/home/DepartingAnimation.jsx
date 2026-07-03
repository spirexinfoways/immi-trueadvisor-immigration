import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import departingSvgContent from '../../assets/departing-animated.svg?raw';

const DepartingAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Remove the 'animated' class initially so it doesn't run immediately on load
  const [svgHtml] = useState(() => 
    departingSvgContent.replace('class="animated"', 'class=""')
  );

  useEffect(() => {
    if (isInView && containerRef.current) {
      // Find the SVG element inside the container
      const svg = containerRef.current.querySelector('svg');
      if (svg) {
        // Add the 'animated' class when it scrolls into view
        setTimeout(() => {
          svg.classList.add('animated');
        }, 300); // 300ms delay to make it feel natural
      }
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-auto drop-shadow-xl z-10 relative departing-svg-container flex justify-center"
      dangerouslySetInnerHTML={{ __html: svgHtml }} 
    />
  );
};

export default DepartingAnimation;

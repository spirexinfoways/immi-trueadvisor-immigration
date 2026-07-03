import React from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a1e5e] text-white pt-20 pb-8 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-16 items-center">
          {/* Left: Newsletter */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 sm:mb-8 leading-[1.15] tracking-tight">
              Start your Immigration <br className="hidden md:block" /> Journey today
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-300 mb-3">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <span>Email address</span>
            </div>
            <div className="relative max-w-md mb-6">
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-white text-gray-900 rounded-full py-3 sm:py-4 pl-4 sm:pl-6 pr-24 sm:pr-32 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg text-sm sm:text-base"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0a1e5e] hover:bg-black text-white rounded-full px-5 sm:px-8 text-sm sm:text-base font-semibold transition-colors">
                Send
              </button>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <input type="checkbox" id="privacy" className="rounded bg-white/10 border-white/20 text-red-500 focus:ring-red-500 w-4 h-4 cursor-pointer" />
              <label htmlFor="privacy" className="cursor-pointer select-none">
                I agree to the <a href="#" className="underline hover:text-white transition-colors">privacy statement</a>
              </label>
            </div>
          </div>
          
          {/* Right: Big Logo */}
          <div className="flex flex-col lg:items-end justify-center lg:text-right mt-10 lg:mt-0">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter italic mb-1 opacity-90">VISORA</h1>
            <p className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-red-500 mr-2">
              Trusted Immigration <br className="hidden lg:block"/> Agency
            </p>
          </div>
        </div>
        
        <hr className="border-white/10 mb-16" />

        {/* Middle Section: Links & Offices */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">Directly to</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[15px] text-gray-200">
              <a href="#" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#" className="hover:text-red-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-red-400 transition-colors">Services</a>
              <a href="#" className="hover:text-red-400 transition-colors">Updates</a>
              <a href="#" className="hover:text-red-400 transition-colors flex items-center justify-between pr-4 group">
                Solutions <span className="text-gray-500 group-hover:text-red-400">⌄</span>
              </a>
              <a href="#" className="hover:text-red-400 transition-colors flex items-center justify-between pr-4 group">
                Visas <span className="text-gray-500 group-hover:text-red-400">⌄</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Offices */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Office 1 */}
            <div>
              <h4 className="font-bold mb-3 text-lg">Visora New York</h4>
              <div className="text-[15px] text-gray-300 space-y-1 mb-8">
                <p>Madison Avenue 351</p>
                <p>10017 NY New York</p>
                <p>USA</p>
                <p className="pt-2 font-medium text-white">+1 (0)20 - 354 0259</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-2 px-6 text-sm font-bold flex items-center space-x-2 transition-transform hover:-translate-y-0.5 shadow-md">
                <span>Route</span>
                <span>→</span>
              </button>
            </div>
            
            {/* Office 2 */}
            <div>
              <h4 className="font-bold mb-3 text-lg">Visora London</h4>
              <div className="text-[15px] text-gray-300 space-y-1 mb-8">
                <p>Oxford Street 313</p>
                <p>W1D 2LU London</p>
                <p>UK</p>
                <p className="pt-2 font-medium text-white">+44 (0)20 - 794 0259</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-2 px-6 text-sm font-bold flex items-center space-x-2 transition-transform hover:-translate-y-0.5 shadow-md">
                <span>Route</span>
                <span>→</span>
              </button>
            </div>
            
            {/* Office 3 */}
            <div>
              <h4 className="font-bold mb-3 text-lg">Visora Dubai</h4>
              <div className="text-[15px] text-gray-300 space-y-1 mb-8">
                <p>Sheikh Zayed Road</p>
                <p>P.O. Box 12345 Dubai</p>
                <p>UAE</p>
                <p className="pt-2 font-medium text-white">+971 (0)4 - 354 0259</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full py-2 px-6 text-sm font-bold flex items-center space-x-2 transition-transform hover:-translate-y-0.5 shadow-md">
                <span>Route</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Bottom / Copyright Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 space-y-6 lg:space-y-0 pb-4">
          
          {/* Left: Copyright */}
          <div className="text-gray-500 text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} Visora Immigration Agency. All rights reserved.</p>
          </div>
          
          {/* Middle: Socials */}
          <div className="flex items-center space-x-3">
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a1e5e] transition-colors"><FaLinkedinIn size={14} /></a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a1e5e] transition-colors"><FaInstagram size={14} /></a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a1e5e] transition-colors"><FaTwitter size={14} /></a>
          </div>
          
          {/* Right: Email & Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <a href="mailto:info@visoracare.com" className="hover:text-white transition-colors font-medium">info@visoracare.com</a>
            </div>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

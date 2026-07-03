import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="py-2 md:py-3 text-[11px] sm:text-xs md:text-sm text-white/90 border-b border-white/20">
      
      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
            <Mail size={16} className="text-red-500" />
            <span>visoracare@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
            <MapPin size={16} className="text-red-500" />
            <span>231 madison Street, NewYork, USA</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-red-500">
          <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><FaFacebook size={18} /></a>
          <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={18} /></a>
          <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300"><FaYoutube size={18} /></a>
        </div>
      </div>

      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="flex flex-col md:hidden gap-2">
{/* Row 2: Premium Social Box */}
        {/* <div className="flex items-center justify-center space-x-7 text-red-400">
          <a href="#" className="hover:text-white active:scale-90 transition-all duration-300"><FaFacebook size={15} /></a>
          <a href="#" className="hover:text-white active:scale-90 transition-all duration-300"><FaInstagram size={15} /></a>
          <a href="#" className="hover:text-white active:scale-90 transition-all duration-300"><FaTwitter size={15} /></a>
          <a href="#" className="hover:text-white active:scale-90 transition-all duration-300"><FaLinkedin size={15} /></a>
          <a href="#" className="hover:text-white active:scale-90 transition-all duration-300"><FaYoutube size={15} /></a>
        </div> */}



        {/* Row 1: Contact details spaced perfectly */}
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <Mail size={13} className="text-red-400" />
            <span className="font-medium tracking-wide">visoracare@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
            <MapPin size={13} className="text-red-400" />
            <span className="truncate max-w-[130px] font-medium tracking-wide">NewYork, USA</span>
          </div>
        </div>

        
      </div>
      
    </div>
  );
};

export default TopBar;

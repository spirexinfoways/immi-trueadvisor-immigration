import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import CounterSection from '../components/home/CounterSection';
import AboutMission from '../components/about/AboutMission';
import AboutVision from '../components/about/AboutVision';
import AboutValues from '../components/about/AboutValues';
import TestimonialSection from '../components/home/TestimonialSection';


const AboutPage = () => {
  return (
    <div className="relative bg-[#5a8796]">
      {/* Hero Section (Sticky to stay behind content while scrolling) */}
      <AboutHero />

      {/* Content Section (Overlaps Hero with rounded corners) */}
      <section className="relative z-10 -mt-16 md:-mt-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem] min-h-screen pt-16 md:pt-24 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-16 md:gap-20 lg:gap-24">
          <AboutContent />
          <div className="border-b border-gray-100 -my-8 md:-my-12 lg:-my-16">
            <CounterSection />
          </div>
          <AboutMission />
          <AboutVision />
          <AboutValues />
        </div>
        
        {/* Full width Testimonial Section */}
        <div className="w-full mt-16 md:mt-20 lg:mt-24">
          <TestimonialSection />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

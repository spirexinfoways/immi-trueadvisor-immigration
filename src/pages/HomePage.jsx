import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import CounterSection from '../components/home/CounterSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';
import FaqSection from '../components/home/FaqSection';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CounterSection />
      <WhyChooseUsSection />
      <CtaSection />
      <FaqSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;

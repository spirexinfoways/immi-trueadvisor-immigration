import React from 'react';

const AboutStats = () => {
  return (
    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-md transition-shadow">
        <h4 className="text-4xl font-bold text-[#5A8796] mb-4">10+</h4>
        <h5 className="text-xl font-bold text-gray-900 mb-2">Years of Excellence</h5>
        <p className="text-gray-600 text-sm">Providing top-tier immigration services globally.</p>
      </div>
      <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-md transition-shadow">
        <h4 className="text-4xl font-bold text-[#5A8796] mb-4">5K+</h4>
        <h5 className="text-xl font-bold text-gray-900 mb-2">Successful Visas</h5>
        <p className="text-gray-600 text-sm">Trusted by thousands to achieve their dreams.</p>
      </div>
      <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-md transition-shadow">
        <h4 className="text-4xl font-bold text-[#5A8796] mb-4">24/7</h4>
        <h5 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h5>
        <p className="text-gray-600 text-sm">We are here to guide you at every step.</p>
      </div>
    </div>
  );
};

export default AboutStats;

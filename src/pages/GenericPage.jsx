import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { pages, getBreadcrumbs } from '../data/site';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import heroimg from '../assets/about.jpg';
import FaqSection from '../components/home/FaqSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CtaSection from '../components/home/CtaSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const getContextImages = (pathname) => {
  const path = pathname.toLowerCase();
  
  if (path.includes('study')) {
    return {
      hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format,compress&w=1600&q=70',
      sections: [
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1546410531-bea5aad1028f?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format,compress&w=800&q=70'
      ]
    };
  }
  if (path.includes('family') || path.includes('spouse') || path.includes('parents') || path.includes('children')) {
    return {
      hero: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format,compress&w=1600&q=70',
      sections: [
        'https://images.unsplash.com/photo-1542037104857-ffbb0b915528?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format,compress&w=800&q=70'
      ]
    };
  }
  if (path.includes('work') || path.includes('lmia') || path.includes('talent')) {
    return {
      hero: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format,compress&w=1600&q=70',
      sections: [
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format,compress&w=800&q=70',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format,compress&w=800&q=70'
      ]
    };
  }
  
  // Default Generic Canada / Immigration
  return {
    hero: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format,compress&w=1600&q=70',
    sections: [
      'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format,compress&w=800&q=70',
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format,compress&w=800&q=70',
      'https://images.unsplash.com/photo-1517943542261-04958f000da7?auto=format,compress&w=800&q=70'
    ]
  };
};

const GenericPage = () => {
  const location = useLocation();
  const pageData = pages[location.pathname] || pages[location.pathname.replace(/\/$/, '')];
  const breadcrumbs = getBreadcrumbs(location.pathname);
  const contextImages = getContextImages(location.pathname);

  if (!pageData) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0a1e5e] mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you are looking for does not exist or is still under construction.</p>
          <Link to="/" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg hover:shadow-xl">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const currentHeroImage = pageData.heroImage || contextImages.hero;

  return (
    <div className="relative bg-[#0a1e5e]">
      {/* Hero Section */}
      <section className="sticky top-0 h-[70vh] w-full flex flex-col justify-center px-6 md:px-20 lg:px-32 text-white overflow-hidden bg-[#0a1e5e]">
        <img 
          src={currentHeroImage} 
          alt={pageData.title || "Immigration Canada"}
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
            {pageData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-lg md:text-[19px] font-medium max-w-2xl text-gray-200 mb-8 leading-relaxed"
          >
            {pageData.tag || 'Immi Trueadvisor Immigration Canadian Immigration Services.'}
          </motion.p>
          
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center flex-wrap gap-2 text-sm md:text-base font-medium text-gray-300"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight size={14} className="text-gray-400" />
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-red-400 font-bold">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.slug} className="hover:text-white transition-colors">{crumb.label}</Link>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 -mt-16 md:-mt-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem] min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 shadow-[0_-15px_40px_rgba(0,0,0,0.15)]">
        <div className="w-full mx-auto px-6 md:px-20 lg:px-32 flex flex-col gap-20 md:gap-32">
          
          {/* Header Description Section */}
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="w-full text-center"
          >
            {pageData.body && pageData.body.map((para, idx) => (
              <motion.p variants={fadeInUp} key={idx} className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Key Points Section */}
          {pageData.points && (
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              className="bg-gradient-to-br from-[#0a1e5e] to-[#1e3a8a] rounded-[2rem] shadow-2xl overflow-hidden relative p-8 md:p-12 text-white w-full"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10">
                {pageData.pointsTitle && (
                  <h3 className="text-3xl font-bold mb-8 text-white">{pageData.pointsTitle}</h3>
                )}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {pageData.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 bg-red-500/20 p-1.5 rounded-full text-red-400 mr-4">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-gray-100 text-[15px] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Sections */}
          {pageData.sections && pageData.sections.map((section, idx) => {
            let sectionImage = section.image;
            
            // Smart Image Injection: 
            // Only auto-add images to the first section, or sections with substantial content (lists, steps, or long text)
            // This prevents short 1-sentence sections from having massive images next to them.
            if (sectionImage === undefined) {
              const hasListOrSteps = section.list || section.steps;
              const hasLongText = section.paras && section.paras.join(' ').length > 250;
              
              if (idx === 0 || hasListOrSteps || hasLongText) {
                sectionImage = contextImages.sections[idx % contextImages.sections.length];
              }
            }

            return (
              <motion.div 
                key={idx} 
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                className="w-full"
              >
                <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  <div className={`w-full ${sectionImage ? 'lg:w-1/2' : 'w-full'}`}>
                    <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-[#0a1e5e]">
                      {section.heading}
                    </motion.h3>
                    
                    {section.paras && section.paras.map((p, pIdx) => (
                      <motion.p variants={fadeInUp} key={pIdx} className="text-[15px] md:text-[16px] text-gray-600 mb-6 leading-relaxed">
                        {p}
                      </motion.p>
                    ))}
                    
                    {section.list && (
                      <motion.ul variants={fadeInUp} className="space-y-4 mb-8">
                        {section.list.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 p-1 rounded-full mr-4 bg-red-50 text-red-600">
                              <ChevronRight size={14} strokeWidth={3} />
                            </div>
                            <span className="text-[15px] md:text-[16px] text-gray-700">{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    
                    {section.steps && (
                      <motion.div variants={staggerContainer} className="space-y-4 mt-10">
                        {section.steps.map((step, sIdx) => (
                          <motion.div variants={fadeInUp} key={sIdx} className="flex items-start p-5 rounded-xl border transition-all duration-300 group bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-red-100">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-5 flex-shrink-0 transition-colors duration-300 bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white">
                              {sIdx + 1}
                            </div>
                            <span className="font-medium text-[15px] md:text-[16px] leading-relaxed pt-2 text-gray-700">{step}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    {section.table && (
                      <motion.div variants={fadeInUp} className="mt-10 overflow-x-auto rounded-2xl border shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-gray-100">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                          <thead className="bg-[#0a1e5e] text-white">
                            <tr>
                              {section.table.columns.map((col, cIdx) => (
                                <th key={cIdx} className="px-6 py-4 font-bold text-[15px] whitespace-nowrap">{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 bg-white">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="transition-colors duration-200 hover:bg-red-50/50">
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx} className={`px-6 py-4 text-[15px] text-gray-700 ${cellIdx === 0 ? 'font-semibold text-[#0a1e5e]' : ''}`}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                  </div>

                  {sectionImage && (
                    <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl group bg-gray-100 animate-pulse">
                      <div className="absolute inset-0 bg-[#0a1e5e]/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img 
                        src={sectionImage} 
                        alt={section.heading} 
                        loading="lazy"
                        onLoad={(e) => {
                          e.target.classList.remove('opacity-0');
                          e.target.parentElement.classList.remove('animate-pulse', 'bg-gray-100');
                        }}
                        className="w-full h-auto aspect-[4/3] lg:aspect-[4/5] xl:h-[700px] object-cover hover:scale-105 transition-all duration-700 ease-out opacity-0" 
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* FAQ Section */}
          {pageData.faq && (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full">
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#0a1e5e] mb-10 text-center">Frequently Asked Questions</motion.h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pageData.faq.map((item, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-red-100 transition-colors duration-300">
                    <h4 className="text-xl md:text-2xl font-bold text-[#0a1e5e] mb-4 flex items-start">
                      <span className="text-red-600 mr-4">Q.</span>
                      {item.q}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed pl-10 border-l-2 border-gray-100">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Team Section */}
          {pageData.team && (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full">
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#0a1e5e] mb-10 text-center">Our Team</motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pageData.team.map((member, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                    <h4 className="text-2xl font-bold text-[#0a1e5e] mb-2">{member.name}</h4>
                    <p className="text-red-600 font-bold mb-4">{member.role}</p>
                    {member.blurb && <p className="text-gray-600 leading-relaxed">{member.blurb}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

        {/* Global Components */}
        <div className="w-full flex flex-col mt-16 md:mt-24 -mb-16 md:-mb-24">
          <CtaSection isGlobal={true} />
          <FaqSection isGlobal={true} />
          <TestimonialSection isGlobal={true} />
        </div>
      </section>
    </div>
  );
};

export default GenericPage;

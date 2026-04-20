import React from 'react';
import { useNavigate } from 'react-router-dom';

import clynixLogo from '../assets/Clynix-Logo.png'; 
import appStoreBtn from '../assets/App_Store_btn.png'; 
import googlePlayBtn from '../assets/PlayStore_btn.png'; 
import headerLogo from '../assets/headerlogo.png';
import simkuraLogo from '../assets/simkuralogo.png';

// Import your card icons from assets
import websiteIcon from '../assets/Website.png';
import mobileIcon from '../assets/Digital.png';
import digitalIcon from '../assets/Digital.png';
import ecommerceIcon from '../assets/E-Commerce.png';
import arrowIcon from '../assets/arrow.png';

// Modern Card Component with cut-out curve and overlapping icon
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative group w-full">
      <div className="relative bg-white rounded-3xl p-6 pt-14 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
        <div className="absolute top-0 left-0 w-16 h-16 bg-transparent">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M64 0H0V64C0 64 0 0 64 0Z" fill="white" />
          </svg>
        </div>
        <div className="absolute -top-4 -left-4 z-20">
          <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <img src={icon} alt={title} className="w-7 h-7 object-contain brightness-0 invert" />
          </div>
        </div>
        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {description}
          </p>
          <button className="text-purple-600 font-semibold transition-all duration-200 inline-flex items-center gap-1 text-sm group/btn">
            Read More 
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ClynixAppPage = () => {
  const navigate = useNavigate();

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.clynix.clynix';

  const handleAppStoreClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  const handleGooglePlayClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  const servicesData = [
    {
      icon: mobileIcon,
      title: "Mobile Development",
      description: "Design and develop powerful Android and iOS applications built for performance, usability, and scalability."
    },
    {
      icon: websiteIcon,
      title: "Website Development",
      description: "Build responsive, fast, and SEO-friendly websites using modern frameworks like React, Next.js, and Tailwind CSS."
    },
    {
      icon: digitalIcon,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility, generate leads, and accelerate business growth."
    },
    {
      icon: ecommerceIcon,
      title: "E-commerce Solutions",
      description: "End-to-end online store development with secure payments and optimized user experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      
      {/* Background Blur Circles */}
      <div 
        className="absolute rounded-full pointer-events-none left-[-598px] opacity-20"
        style={{
          backgroundColor: '#8270ac',
          backdropFilter: 'blur(200px)',
          WebkitBackdropFilter: 'blur(200px)',
          width: '776px',
          height: '561px',
          top: '1480px'
        }}
      />
      
      <div 
        className="absolute rounded-full pointer-events-none opacity-20"
        style={{
          backgroundColor: '#9C71FF',
          backdropFilter: 'blur(200px)',
          WebkitBackdropFilter: 'blur(200px)',
          width: '776px',
          height: '561px',
          top: '1633px',
          left: '1225px'
        }}
      />

      {/* SimcuraRx Hero Section */}
      <section id="home">
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(189.07deg, rgb(202, 181, 248) 6.88%, rgba(228, 216, 255, 0) 48.19%, rgba(125, 75, 238, 0.85) 103.26%)' }}>
          <div className="w-full max-w-[1400px] rounded-[32px] bg-white/10 backdrop-blur-md shadow-2xl px-10 pt-8 pb-16 relative overflow-hidden">


            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-24 gap-12">
              <div>
                <h1 className="text-[48px] font-bold text-[#24005A] leading-tight">
                  SimcuraRx <br />Where care <br />meets code
                </h1>
                <p className="mt-6 text-[#4A2C7A] max-w-md">
                  Integrated healthcare and IT solutions: doctor consultations, medicine delivery, diagnostics, and custom healthcare software all in one trusted platform.
                </p>
                <div className="flex gap-4 mt-8">
                  <button className="bg-gradient-to-r from-[#7C4DFF] to-[#5B2EFF] text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                    </svg>
                    Download app
                  </button>
                  <button className="border border-[#7C4DFF] text-[#5B2EFF] px-8 py-3 rounded-full">
                    Fast. Secure. Verified.
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#4A166C] to-[#1B0030] flex items-center justify-center shadow-[0_0_140px_rgba(124,77,255,0.55)]">
                  <img alt="Simkura Logo" className="w-[320px] h-[320px] object-contain mt-10" src={headerLogo} />
                </div>
                <div className="absolute top-20 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#8B5CF6] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
                <div className="absolute top-8 right-20 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#7C4DFF] text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
                  </svg>
                </div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#5B2EFF] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - NEW */}
      <section id="about">
        <div className="w-full bg-white py-28">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-[#7B61FF] mb-6">About Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                SimcuraRX delivers trusted medical expertise and modern tech to create integrated, reliable healthcare. 
                We bridge patient care and enterprise IT—<span className="font-semibold">Simple Care. Right Solutions.</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-16">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="absolute -left-6 top-6 w-72 h-72 bg-[#7B61FF] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute left-24 -bottom-4 w-56 h-56 bg-[#7B61FF] opacity-15 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#7B61FF]/40 via-[#7B61FF]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#7B61FF]/30 to-transparent rounded-2xl blur-md"></div>
                    <img 
                      alt="Healthcare Team" 
                      className="relative rounded-2xl w-full border-4 border-white shadow-[0_0_40px_rgba(123,97,255,0.4),0_0_80px_rgba(123,97,255,0.2)] hover:shadow-[0_0_60px_rgba(123,97,255,0.6),0_0_100px_rgba(123,97,255,0.3)] transition-all duration-500 transform hover:scale-[1.02]" 
                      src={simkuraLogo}
                    />
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#7B61FF]/40 to-transparent rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#7B61FF]/40 to-transparent rounded-br-2xl"></div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-gradient-to-r from-transparent via-[#7B61FF]/30 to-transparent blur-sm"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 space-y-12 pt-4">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="font-light">Who</span> <span className="text-[#7B61FF]">We Are</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    SimcuraRX Pvt. Ltd. is a professionally registered healthcare and IT company that combines medical expertise with modern technology to deliver accessible, reliable, and scalable solutions. We operate an integrated ecosystem...
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="font-light">Why</span> <span className="text-[#7B61FF]">SimcuraRX</span>
                  </h3>
                  <ul className="text-gray-600 text-lg space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
                      <span>Simple care delivery powered by precise tech solutions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
                      <span>Trusted partnerships with verified healthcare providers and software firms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
                      <span>End-to-end services: patient-facing apps, backend systems, and corporate healthcare programs.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="font-light">Meaning of</span> <span className="text-[#7B61FF]">Our Name</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <span className="font-medium">Simple + Care.</span> <span className="font-medium">RX = Right Solution.</span> Together: <span className="font-bold text-gray-800">Simple Care. Right Solutions.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CLYNIX APPLICATION Section */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[500px] mx-auto overflow-hidden bg-white z-10">
        <div className="relative z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-default border border-purple-200 hover:bg-gray-100 hover:border-gray-300">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <h6 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 tracking-wide">
                OUR CLYNIX APPLICATION
              </h6>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
            
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[526px] h-auto lg:h-[188px] flex-shrink-0 mx-auto lg:mx-0">
              <img 
                src={clynixLogo} 
                alt="Clynix Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 w-full max-w-full lg:max-w-[603px] text-center lg:text-left">
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-3">
                <b>Clynix:</b> <span className="whitespace-normal">Your Health, On Schedule.</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Clynix is a smart healthcare companion designed to bridge the gap between patients and their medication needs. 
                By combining intuitive UI/UX design with essential medical services, Clynix ensures you never miss a dose or a refill.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <p className="text-sm sm:text-base text-gray-700 font-medium">Download from</p>
                
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <button 
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleAppStoreClick}
                  >
                    <img 
                      src={appStoreBtn} 
                      alt="App Store" 
                      className="h-[38px] w-[130px] sm:h-[43px] sm:w-[146px] object-contain"
                    />
                  </button>
                  
                  <button 
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleGooglePlayClick}
                  >
                    <img 
                      src={googlePlayBtn} 
                      alt="Google Play" 
                      className="h-[38px] w-[130px] sm:h-[43px] sm:w-[146px] object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We deliver comprehensive IT solutions and digital services designed to streamline operations, 
            enhance performance, and support scalable business growth.
          </p>
        </div>
      </div>

      {/* IT Solutions + Modern Cards Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 z-10">
        
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            IT Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      
        {/* Who We Partner With Section */}
        <div className="relative py-12 sm:py-16 z-10 bg-gradient-to-br from-white via-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header with Arrow Icon - as in image */}
            <div className="text-center mb-8 sm:mb-12">
            <div 
                className="inline-flex items-center justify-center gap-3 cursor-pointer group" 
                onClick={() => navigate('/partnerships')}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-0">
                Who We Partner With
                </h2>
                {/* Arrow Image - replace with your actual image path */}
                <img 
                src={arrowIcon}
                alt="arrow" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform duration-300"
                />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 mt-4">
                We are building a collaborative network that spans the entire healthcare value chain.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1 - Established Companies */}
            <div 
                className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto"
                onClick={() => navigate('/partnerships')}
            >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Established Companies</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Scale your operations with our enterprise-grade integrated API solutions. Seamlessly connect legacy systems with modern pharmaceutical workflows.
                </p>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    navigate('/partnerships');
                }}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                >
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>

            {/* Card 2 - Agile Startups */}
            <div 
                className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto"
                onClick={() => navigate('/partnerships')}
            >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Agile Startups</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Accelerate your growth using our robust infrastructure. Focus on your unique value proposition while we handle the heavy lifting of compliance and logistics.
                </p>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    navigate('/partnerships');
                }}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                >
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>

            {/* Card 3 - Healthcare Providers */}
            <div 
                className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto md:col-span-2 lg:col-span-1"
                onClick={() => navigate('/partnerships')}
            >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Healthcare Providers</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Empower patient outcomes through seamless data integration and streamlined process flow. Empower your staff with smarter tools.
                </p>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    navigate('/partnerships');
                }}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                >
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>
            </div>
            
            {/* Explore Now Button - Below the cards */}
            <div className="text-center mt-12 sm:mt-16">
            <button
                onClick={() => navigate('/partnerships')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
                Explore Now
                <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ClynixAppPage;
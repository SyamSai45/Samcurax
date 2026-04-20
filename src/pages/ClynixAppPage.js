import React from 'react';
import { useNavigate } from 'react-router-dom';

import clynixLogo from '../assets/Clynix-Logo.png'; 
import appStoreBtn from '../assets/App_Store_btn.png'; 
import googlePlayBtn from '../assets/PlayStore_btn.png'; 

const ClynixAppPage = () => {
  const navigate = useNavigate();

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.clynix.clynix';

  const handleAppStoreClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  const handleGooglePlayClick = () => {
    window.open(playStoreUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      
      {/* Background Blur Circles */}
      <div 
        className="absolute rounded-full pointer-events-none left-[-598px] opacity-20"
        style={{
          backgroundColor: '#7743ED',
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

      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[500px] mx-auto overflow-hidden bg-white z-10">
        <div className="relative z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          
          {/* OUR CLYNIX APPLICATION */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-default border border-purple-200 hover:bg-gray-100 hover:border-gray-300">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <h6 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 tracking-wide">
                OUR CLYNIX APPLICATION
              </h6>
            </div>
          </div>

          {/* Flex Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Logo */}
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[526px] h-auto lg:h-[188px] flex-shrink-0 mx-auto lg:mx-0">
              <img 
                src={clynixLogo} 
                alt="Clynix Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 w-full max-w-full lg:max-w-[603px] text-center lg:text-left">
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-3">
                <b>Clynix:</b> <span className="whitespace-normal">Your Health, On Schedule.</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Clynix is a smart healthcare companion designed to bridge the gap between patients and their medication needs. 
                By combining intuitive UI/UX design with essential medical services, Clynix ensures you never miss a dose or a refill.
              </p>
              
              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <p className="text-sm sm:text-base text-gray-700 font-medium">Download from</p>
                
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  {/* App Store Button - Navigates to Play Store */}
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
                  
                  {/* Google Play Button - Navigates to Play Store */}
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

      {/* Rest of your component remains the same */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            IT Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Website Development */}
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-left text-lg font-bold text-gray-900 mb-2">Website Development</h3>
            <p className="text-gray-500 text-sm text-left mb-4 leading-relaxed">
              Flutter, FastAPI, GraphQL-driven apps and APIs.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors inline-flex items-center gap-1 text-sm group">
              Read More 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Card 2 - Mobile App Development */}
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-left text-lg font-bold text-gray-900 mb-2">Mobile App Development</h3>
            <p className="text-gray-500 text-sm text-left mb-4 leading-relaxed">
              Flutter, FastAPI, GraphQL-driven apps and APIs.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors inline-flex items-center gap-1 text-sm group">
              Read More 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Card 3 - Digital Marketing */}
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-left text-lg font-bold text-gray-900 mb-2">Digital Marketing</h3>
            <p className="text-gray-500 text-sm text-left mb-4 leading-relaxed">
              Data-driven marketing strategies that increase visibility, generate leads, and accelerate business growth.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors inline-flex items-center gap-1 text-sm group">
              Read More 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Card 4 - E-commerce Solutions */}
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-left text-lg font-bold text-gray-900 mb-2">E-commerce Solutions</h3>
            <p className="text-gray-500 text-sm text-left mb-4 leading-relaxed">
              End-to-end online store development with secure payments and optimized user experiences.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors inline-flex items-center gap-1 text-sm group">
              Read More 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Who We Partner With Section */}
      <div className="relative bg-gray-50 py-12 sm:py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Who We Partner With
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We are building a collaborative network that spans the entire healthcare value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Established Companies */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Established Companies</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Scale your operations with our enterprise-grade integrated API solutions. Seamlessly connect legacy systems with modern pharmaceutical workflows.
              </p>
              <button 
                onClick={() => navigate('/partnerships')}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Agile Startups */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Agile Startups</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Accelerate your growth using our robust infrastructure. Focus on your unique value proposition while we handle the heavy lifting of compliance and logistics.
              </p>
              <button 
                onClick={() => navigate('/partnerships')}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Healthcare Providers */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Healthcare Providers</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Empower patient outcomes through seamless data integration and streamlined process flow. Empower your staff with smarter tools.
              </p>
              <button 
                onClick={() => navigate('/partnerships')}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClynixAppPage;
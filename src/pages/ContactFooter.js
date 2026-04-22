import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import footerLogo from '../assets/headerlogo.png';
import appStoreBtn from '../assets/App_Store_btn.png';
import googlePlayBtn from '../assets/PlayStore_btn.png';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Contact Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[1001px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[93px]">
          
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-[426px] space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are committed to processing the information in order to contact you and talk about your project.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-gray-800 font-medium">simcurarx@gmail.com</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-gray-800 font-medium">Indrapalem, Kakinada, Andhra Pradesh 533006</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-gray-800 font-medium">+91 6300 778 241</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-[481px]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number *</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="+91 12345 67890"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website *</label>
                <input
                  type="text"
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="www.yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white mt-16">
        {/* First Footer Bar */}
        <div className="max-w-[1272px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Ashok Varma */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ashok Varma</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  simcurarx@gmail.com
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 6300 778 241
                </p>
              </div>
            </div>
            
            {/* Column 2 - About Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact us</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">FAQ's</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of services</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Website & Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">E-commerce solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Custom software development</a></li>
              </ul>
            </div>
            
            {/* Column 4 - Download App & QR Scanner */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
              <div className="flex flex-col gap-3 mb-4">
                <button className="cursor-pointer hover:opacity-80 transition-opacity w-[140px]">
                  <img src={appStoreBtn} alt="App Store" className="h-[46px] w-full object-contain" />
                </button>
                <button className="cursor-pointer hover:opacity-80 transition-opacity w-[140px]">
                  <img src={googlePlayBtn} alt="Google Play" className="h-[46px] w-full object-contain" />
                </button>
              </div>
              
              {/* QR Scanner */}
              <div className="mt-4">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs text-center mt-2">Scan to download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Horizontal Bar - Certifications & Copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-[1272px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Certifications Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-400 text-sm">ISO Certified</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-400 text-sm">Legally Registered</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-400 text-sm">Accepted: NABH</span>
              </div>
            </div>
            
            {/* Copyright Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
              <p className="text-gray-500 text-sm">Copyright © July 2025</p>
              <p className="text-gray-500 text-sm">All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
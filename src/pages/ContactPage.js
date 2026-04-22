// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import footerLogo from '../assets/headerlogo.png';

// // Import your images from assets
// import contactImage from '../assets/Contact1.png';
// import mapImage from '../assets/Contact2.png';

// const ContactPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section - First Container */}
//       <div className="w-full max-w-[1440px] mx-auto pt-[90px] pb-[90px] px-[180px]">
//         <div className="flex justify-between items-center w-full max-w-[1116px] mx-auto gap-[54px]">
          
//           {/* Left Side Content */}
//           <div className="w-[531px] flex flex-col justify-center gap-[18px]">
//             <h1 className="text-5xl font-bold text-gray-900">CONTACT US</h1>
//             <h2 className="text-3xl font-bold text-gray-800">Get in Touch.</h2>
//             <p className="text-gray-500 text-base leading-relaxed">
//               Have questions about our enterprise solutions or need
//               technical assistance? Our dedicated team is here to help you
//               scale your business operations.
//             </p>
//           </div>
          
//           {/* Right Side Image */}
//           <div className="w-[531px] h-[360px]">
//             <img 
//               src={contactImage} 
//               alt="Contact Us" 
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Second Container - Contact Info & Form */}
//       <div className="w-full max-w-[1440px] h-[669px] mx-auto bg-gray-100/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
//           {/* Left Side - Contact Info */}
//           <div className="w-[461.57px] h-[572.97px] relative">
            
//             {/* Email Address Box */}
//             <div className="w-[461.38px] h-[80.59px] mb-6">
//               <p className="text-gray-500 text-sm mb-1">Email Address</p>
//               <p className="text-gray-800 text-base font-medium">you@company.com</p>
//             </div>
            
//             {/* Global Headquarters Text */}
//             <div className="mb-6">
//               <p className="text-gray-800 font-semibold mb-2">Global Headquarters</p>
//               <p className="text-gray-500 text-sm">Innovating the future from our state-of-the-art facility</p>
//             </div>
            
//             {/* Map Image */}
//             <div className="w-[458.58px] h-[426.38px] rounded-[16.4px] overflow-hidden shadow-[0_4.1px_6.15px_-4.1px_rgba(0,0,0,0.1),0_10.25px_15.37px_-3.07px_rgba(0,0,0,0.1)]">
//               <img 
//                 src={mapImage} 
//                 alt="Map" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
          
//           {/* Right Side - Send Us a Message Form */}
//           <div className="w-[597.95px] h-[582.52px] bg-white rounded-[21.1px] border border-gray-300 p-[42.2px] flex flex-col gap-[35.17px] shadow-md">
//             <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
//             <p className="text-gray-500 text-sm">
//               Please fill out the form below and our team will get back to you within 24 hours.
//             </p>
            
//             <form className="flex flex-col gap-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                 <input 
//                   type="text" 
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                 <input 
//                   type="email" 
//                   placeholder="you@company.com"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea 
//                   rows={4}
//                   placeholder="Tell us about your project..."
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit"
//                 className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="w-full max-w-[1440px] mx-auto py-16 px-4">
//         <div className="flex flex-wrap justify-center gap-6">
          
//           {/* Card 1 */}
//           <div className="w-[351.49px] h-[304.36px] bg-gradient-to-r from-purple-400 to-purple-700 rounded-[14.38px] border border-gray-200 p-[28.76px] flex flex-col gap-[19.17px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Email Support</h3>
//             <p className="text-purple-100 text-sm">Drop us a line anytime. We usually
// respond within one day.</p>
//             <p className="text-white text-sm">support@simcurarx.com</p>
//           </div>
          
//           {/* Card 2 */}
//           <div className="w-[351.49px] h-[304.36px] bg-gradient-to-r from-purple-400 to-purple-700 rounded-[14.38px] border border-gray-200 p-[28.76px] flex flex-col gap-[19.17px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Phone Support</h3>
//             <p className="text-purple-100 text-sm">Speak directly with our support team or sales department.</p>
//             <p className="text-white text-sm">+91 6300 778 241</p>
//           </div>
          
//           {/* Card 3 */}
//           <div className="w-[351.49px] h-[304.36px] bg-gradient-to-r from-purple-400 to-purple-700 rounded-[14.38px] border border-gray-200 p-[28.76px] flex flex-col gap-[19.17px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Office Location</h3>
//             <p className="text-purple-100 text-sm">Come say hello at our corporate headquarters.</p>
//             <p className="text-white text-sm">Indrapalem, Kakinada, AP 533006</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// // Footer Component
// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <footer className="bg-white border-t border-gray-200 mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
//           {/* Logo */}
//           <button 
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
//           >
//             <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
//             <span className="text-xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
//           </button>
          
//           {/* Copyright */}
//           <p className="text-gray-400 text-[13px] text-center">
//             © 2025 SimcuraRX. Leading the future of healthcare integration.
//           </p>
          
//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
//               <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
//               </svg>
//             </a>
//             <a href="mailto:simcurarx@gmail.com" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </a>
//             <button onClick={() => { if (navigator.share) navigator.share({ title: 'SimcuraRX', url: window.location.href }); }} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ContactPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import footerLogo from '../assets/headerlogo.png';
import contactImage from '../assets/Contact1.png';
import mapImage from '../assets/Contact2.png';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    inquiryType: '',
    message: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ═══════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════ */}
      <div className="w-full max-w-[1440px] mx-auto relative overflow-visible">

        {/* Top-left large circle arc decoration */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '130px',
            height: '130px',
            top: '20px',
            left: '-10px',
            borderRadius: '50%',
            border: '18px solid #e5e7f0',
            opacity: 0.8,
            zIndex: 0,
          }}
        />
        {/* Small circle */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '22px',
            height: '22px',
            top: '28px',
            left: '120px',
            borderRadius: '50%',
            border: '3px solid #d1d5e8',
            opacity: 0.7,
            zIndex: 0,
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 pt-16 pb-16 px-8 sm:px-16 lg:px-24 xl:px-32">

          {/* Left — text */}
          <div className="flex flex-col gap-5 max-w-[480px]">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Contact Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Get in <span style={{ color: '#7c3aed' }}>Touch.</span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed">
              Have questions about our enterprise solutions or need
              technical assistance? Our dedicated team is here to help you
              scale your business operations.
            </p>
          </div>

          {/* Right — hero image */}
          <div
            className="w-full max-w-[460px] lg:max-w-[500px] xl:max-w-[560px] overflow-hidden shadow-xl"
            style={{ borderRadius: '18px', aspectRatio: '16/10' }}
          >
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          CONTACT INFO + FORM SECTION
      ═══════════════════════════════════ */}
      <div
        className="w-full"
        style={{ background: '#f8f8fb' }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 py-14 flex flex-col lg:flex-row items-start gap-10 lg:gap-8">

          {/* ── LEFT COLUMN: Email + Map ── */}
          <div className="flex flex-col gap-5 w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">

            {/* Email Address block */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-500 text-xs font-medium tracking-wide">Email Address</label>
              <div
                className="w-full px-4 py-3 bg-white border text-gray-700 text-sm"
                style={{ borderColor: '#e5e7eb', borderRadius: '8px', borderWidth: '1px' }}
              >
                you@company.com
              </div>
            </div>

            {/* Map image card with overlay text */}
            <div
              className="relative w-full overflow-hidden shadow-lg"
              style={{ borderRadius: '16px', aspectRatio: '4/3.2' }}
            >
              <img
                src={mapImage}
                alt="Global Headquarters"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
                }}
              />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 px-6 py-5">
                <h3 className="text-white font-bold text-lg leading-tight">Global Headquarters</h3>
                <p className="text-gray-300 text-xs mt-1">Innovating the future from our state-of-the-art facility.</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Form card ── */}
          <div
            className="w-full bg-white flex flex-col gap-5 shadow-md flex-1"
            style={{
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              padding: '36px 40px',
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
              <p className="text-gray-500 text-sm mt-1.5">
                Please fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Row: Full Name + Company Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition"
                style={{ '--tw-ring-color': '#7c3aed' }}
              />
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                placeholder="Company Email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition"
              />
            </div>

            {/* Inquiry Type dropdown */}
            <div className="relative">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 outline-none focus:ring-2 focus:border-transparent transition appearance-none bg-white cursor-pointer"
              >
                <option value="" disabled>Inquiry Type</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition resize-none"
            />

            {/* Privacy checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-3.5 h-3.5 accent-purple-600"
              />
              <span className="text-xs text-gray-400">
                I agree to the{' '}
                <span className="text-purple-600 underline cursor-pointer">Privacy Policy</span>
                {' '}and consent to being contacted.
              </span>
            </label>

            {/* Submit button */}
            <button
              type="button"
              className="w-full py-3.5 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(90deg, #9D77F2 0%, #7743ED 100%)' }}
            >
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          CARDS SECTION
      ═══════════════════════════════════ */}
      <div className="w-full max-w-[1440px] mx-auto py-16 px-8 sm:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-wrap justify-center gap-6">

          {[
            {
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Email Support',
              desc: 'Drop us a line anytime. We usually respond within one day.',
              detail: 'support@simcurarx.com',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: 'Phone Support',
              desc: 'Speak directly with our support team or sales department.',
              detail: '+91 6300 778 241',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Office Location',
              desc: 'Come say hello at our corporate headquarters.',
              detail: 'Indrapalem, Kakinada, AP 533006',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                width: '340px',
                minHeight: '290px',
                borderRadius: '14px',
                padding: '28px',
                background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-purple-100 text-sm leading-relaxed flex-1">{card.desc}</p>
              <p className="text-white text-sm font-medium">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          FOOTER
      ═══════════════════════════════════ */}
      <footer className="bg-white border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
          </button>

          <p className="text-gray-400 text-xs text-center">
            © 2025 SimcuraRX. Leading the future of healthcare integration.
          </p>

          <div className="flex items-center gap-3">
            {[
              {
                href: 'https://instagram.com',
                icon: (
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                ),
              },
              {
                href: 'mailto:simcurarx@gmail.com',
                icon: (
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
            <button
              onClick={() => navigator.share?.({ title: 'SimcuraRX', url: window.location.href })}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ContactPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import footerLogo from '../assets/headerlogo.png';
// import contactImage from '../assets/Contact1.png';
// import mapImage from '../assets/Contact2.png';

// const ContactPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     companyEmail: '',
//     inquiryType: '',
//     message: '',
//     agreed: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
//   };

//   return (
//     // Added top padding to push content below navbar
//     <div className="min-h-screen bg-white relative overflow-hidden pt-[80px] md:pt-[90px] lg:pt-[100px]">
      
//       {/* Left Side Large Circle */}
//       <div 
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           width: '193px',
//           height: '193px',
//           top: '160px',
//           left: '-92px',
//           border: '31px solid rgba(135, 90, 239, 1)',
//           opacity: 0.11,
//           borderRadius: '50%'
//         }}
//       />
      
//       {/* Left Side Small Circle */}
//       <div 
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           width: '50px',
//           height: '50px',
//           top: '130px',
//           left: '96px',
//           border: '8.03px solid rgba(135, 90, 239, 1)',
//           opacity: 0.11,
//           borderRadius: '50%'
//         }}
//       />

//       {/* Hero Section - Main Container */}
//       <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <div className="max-w-[1116px] mx-auto flex flex-col lg:flex-row items-center gap-[54px]">
          
//           {/* Left Side Content */}
//           <div className="w-full lg:w-[531px] flex flex-col gap-[18px]">
            
//             {/* CONTACT US Badge */}
//             <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1 w-fit">
//               <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
//               <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">CONTACT US</span>
//             </div>
            
//             {/* Get in Touch Title */}
//             <h1 className="text-[60px] font-black leading-[60px] text-gray-800">
//               Get in <span className="text-purple-600">Touch.</span>
//             </h1>
            
//             {/* Description */}
//             <p className="text-[18px] leading-[29.25px] text-gray-500 max-w-[576px] pt-[9px]">
//               Have questions about our enterprise solutions or need technical assistance? 
//               Our dedicated team is here to help you scale your business operations.
//             </p>
//           </div>
          
//           {/* Right Side Image */}
//           <div className="w-full lg:w-[531px] h-[360px]">
//             <img 
//               src={contactImage} 
//               alt="Contact Us" 
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Contact Info & Form Section */}
//       <div className="w-full bg-gray-50/50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
            
//             {/* Left Side - Contact Info */}
//             <div className="w-full lg:w-[420px] flex-shrink-0 space-y-5">
              
//               {/* Email Address */}
//               <div>
//                 <label className="text-gray-500 text-xs font-medium tracking-wide">Email Address</label>
//                 <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm mt-1">
//                   simcurarx@gmail.com
//                 </div>
//               </div>
              
//               {/* Map Image with Overlay */}
//               <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '4/3.2' }}>
//                 <img src={mapImage} alt="Global Headquarters" className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                 <div className="absolute bottom-0 left-0 px-6 py-5">
//                   <h3 className="text-white font-bold text-lg leading-tight">Global Headquarters</h3>
//                   <p className="text-gray-300 text-xs mt-1">Innovating the future from our state-of-the-art facility.</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Side - Form Card */}
//             <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-md p-8 md:p-10">
//               <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
//               <p className="text-gray-500 text-sm mt-1.5 mb-6">
//                 Please fill out the form below and our team will get back to you within 24 hours.
//               </p>
              
//               <form className="space-y-4">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Full Name"
//                     className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//                   />
//                   <input
//                     type="email"
//                     name="companyEmail"
//                     value={formData.companyEmail}
//                     onChange={handleChange}
//                     placeholder="Company Email"
//                     className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//                   />
//                 </div>
                
//                 <div className="relative">
//                   <select
//                     name="inquiryType"
//                     value={formData.inquiryType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none bg-white cursor-pointer"
//                   >
//                     <option value="" disabled>Inquiry Type</option>
//                     <option value="general">General Inquiry</option>
//                     <option value="support">Technical Support</option>
//                     <option value="sales">Sales</option>
//                     <option value="partnership">Partnership</option>
//                   </select>
//                   <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>
                
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
//                 />
                
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     name="agreed"
//                     checked={formData.agreed}
//                     onChange={handleChange}
//                     className="w-3.5 h-3.5 accent-purple-600"
//                   />
//                   <span className="text-xs text-gray-400">
//                     I agree to the{' '}
//                     <span className="text-purple-600 underline cursor-pointer">Privacy Policy</span>
//                     {' '}and consent to being contacted.
//                   </span>
//                 </label>
                
//                 <button
//                   type="button"
//                   className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
//                 >
//                   Send Message
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap justify-center gap-6">
          
//           {/* Card 1 - Email Support */}
//           <div className="w-[340px] min-h-[290px] rounded-[14px] p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
//             <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Email Support</h3>
//             <p className="text-purple-100 text-sm leading-relaxed flex-1">Drop us a line anytime. We usually respond within one day.</p>
//             <p className="text-white text-sm font-medium">support@simcurarx.com</p>
//           </div>
          
//           {/* Card 2 - Phone Support */}
//           <div className="w-[340px] min-h-[290px] rounded-[14px] p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
//             <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Phone Support</h3>
//             <p className="text-purple-100 text-sm leading-relaxed flex-1">Speak directly with our support team or sales department.</p>
//             <p className="text-white text-sm font-medium">+91 6300 778 241</p>
//           </div>
          
//           {/* Card 3 - Office Location */}
//           <div className="w-[340px] min-h-[290px] rounded-[14px] p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
//             <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white">Office Location</h3>
//             <p className="text-purple-100 text-sm leading-relaxed flex-1">Come say hello at our corporate headquarters.</p>
//             <p className="text-white text-sm font-medium">Indrapalem, Kakinada, AP 533006</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 mt-4">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
//           <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//             <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
//             <span className="text-xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
//           </button>
          
//           <p className="text-gray-400 text-xs text-center">© 2025 SimcuraRX. Leading the future of healthcare integration.</p>
          
//           <div className="flex items-center gap-3">
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
//       </footer>
//     </div>
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
    <div className="min-h-screen bg-white relative overflow-hidden pt-[70px] sm:pt-[80px] md:pt-[90px] lg:pt-[100px]">
      
      {/* Left Side Large Circle - Responsive positioning */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 'min(193px, 25vw)',
          height: 'min(193px, 25vw)',
          top: 'min(160px, 20vh)',
          left: '-92px',
          border: '31px solid rgba(135, 90, 239, 1)',
          opacity: 0.11,
          borderRadius: '50%'
        }}
      />
      
      {/* Left Side Small Circle */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 'min(50px, 8vw)',
          height: 'min(50px, 8vw)',
          top: 'min(130px, 18vh)',
          left: 'min(96px, 15vw)',
          border: '8.03px solid rgba(135, 90, 239, 1)',
          opacity: 0.11,
          borderRadius: '50%'
        }}
      />

      {/* Hero Section - Responsive */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <div className="max-w-[1116px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[54px]">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[531px] flex flex-col gap-4 sm:gap-5 md:gap-[18px] text-center lg:text-left">
            
            {/* CONTACT US Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1 w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-gray-600 uppercase">CONTACT US</span>
            </div>
            
            {/* Get in Touch Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black leading-tight lg:leading-[60px] text-gray-800">
              Get in <span className="text-purple-600">Touch.</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed lg:leading-[29.25px] text-gray-500 max-w-[576px] mx-auto lg:mx-0 pt-1 sm:pt-2 lg:pt-[9px]">
              Have questions about our enterprise solutions or need technical assistance? 
              Our dedicated team is here to help you scale your business operations.
            </p>
          </div>
          
          {/* Right Side Image */}
          <div className="w-full sm:max-w-[400px] md:max-w-[450px] lg:w-[531px] h-auto sm:h-[300px] md:h-[330px] lg:h-[360px]">
            <img 
              src={contactImage} 
              alt="Contact Us" 
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Contact Info & Form Section - Responsive */}
      <div className="w-full bg-gray-50/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="w-full lg:w-[420px] flex-shrink-0 space-y-4 sm:space-y-5">
              
              {/* Email Address */}
              <div>
                <label className="text-gray-500 text-[10px] sm:text-xs font-medium tracking-wide">Email Address</label>
                <div className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg text-gray-700 text-xs sm:text-sm mt-1">
                  simcurarx@gmail.com
                </div>
              </div>
              
              {/* Map Image with Overlay */}
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg" style={{ aspectRatio: '4/3.2' }}>
                <img src={mapImage} alt="Global Headquarters" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 px-4 sm:px-6 py-3 sm:py-5">
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight">Global Headquarters</h3>
                  <p className="text-gray-300 text-[10px] sm:text-xs mt-1">Innovating the future from our state-of-the-art facility.</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form Card */}
            <div className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-md p-5 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Send us a Message</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1.5 mb-4 sm:mb-6">
                Please fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Company Email"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>
                
                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>Inquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                />
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 accent-purple-600"
                  />
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    I agree to the{' '}
                    <span className="text-purple-600 underline cursor-pointer">Privacy Policy</span>
                    {' '}and consent to being contacted.
                  </span>
                </label>
                
                <button
                  type="button"
                  className="w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                >
                  Send Message
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section - Responsive */}
      <div className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
          
          {/* Card 1 - Email Support */}
          <div className="w-full max-w-[340px] mx-auto min-h-[280px] sm:min-h-[290px] rounded-[14px] p-5 sm:p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-white/20">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Email Support</h3>
            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed flex-1">Drop us a line anytime. We usually respond within one day.</p>
            <p className="text-white text-xs sm:text-sm font-medium">support@simcurarx.com</p>
          </div>
          
          {/* Card 2 - Phone Support */}
          <div className="w-full max-w-[340px] mx-auto min-h-[280px] sm:min-h-[290px] rounded-[14px] p-5 sm:p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-white/20">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Phone Support</h3>
            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed flex-1">Speak directly with our support team or sales department.</p>
            <p className="text-white text-xs sm:text-sm font-medium">+91 6300 778 241</p>
          </div>
          
          {/* Card 3 - Office Location */}
          <div className="w-full max-w-[340px] mx-auto min-h-[280px] sm:min-h-[290px] rounded-[14px] p-5 sm:p-7 bg-gradient-to-br from-purple-400 to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3 sm:gap-4 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-white/20">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Office Location</h3>
            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed flex-1">Come say hello at our corporate headquarters.</p>
            <p className="text-white text-xs sm:text-sm font-medium">Indrapalem, Kakinada, AP 533006</p>
          </div>
        </div>
      </div>

      {/* Footer - Responsive */}
      <footer className="bg-white border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={footerLogo} alt="Simcura Logo" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
          </button>
          
          <p className="text-gray-400 text-[10px] sm:text-xs text-center">© 2025 SimcuraRX. Leading the future of healthcare integration.</p>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
            <a href="mailto:simcurarx@gmail.com" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <button onClick={() => { if (navigator.share) navigator.share({ title: 'SimcuraRX', url: window.location.href }); }} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
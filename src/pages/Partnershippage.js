// import React, { useState } from 'react';

// // Import your images from assets
// import partnerIcon1 from '../assets/partnership-icon-1.png';
// import partnerIcon2 from '../assets/partnership-icon-2.png';
// import partnerIcon3 from '../assets/partnership-icon-3.png';

// const PartnershipPage = () => {
//   const [currentView, setCurrentView] = useState('main'); // 'main', 'form', 'confirmation'
//   const [formData, setFormData] = useState({
//     companyName: '',
//     companyType: '',
//     fullAddress: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     partnershipTypes: [],
//     agreeToTerms: false
//   });

//   const partnershipOptions = [
//     'Technology Partner',
//     'Marketing Partner',
//     'Referral Partner',
//     'Strategic Alliance'
//   ];

//   const handleCheckboxChange = (value) => {
//     setFormData(prev => ({
//       ...prev,
//       partnershipTypes: prev.partnershipTypes.includes(value)
//         ? prev.partnershipTypes.filter(item => item !== value)
//         : [...prev.partnershipTypes, value]
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setCurrentView('confirmation');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleOpenForm = () => {
//     setCurrentView('form');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleBackToMain = () => {
//     setCurrentView('main');
//     // Reset form data
//     setFormData({
//       companyName: '',
//       companyType: '',
//       fullAddress: '',
//       city: '',
//       state: '',
//       postalCode: '',
//       partnershipTypes: [],
//       agreeToTerms: false
//     });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // ==================== CONFIRMATION PAGE ====================
//   if (currentView === 'confirmation') {
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Header */}
//         <div className="border-b border-gray-100 py-4">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between">
//               <span className="text-2xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
//             </div>
//           </div>
//         </div>

//         {/* Success Content */}
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//           {/* Success Icon */}
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
          
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Partnership Request Submitted!
//           </h1>
          
//           <p className="text-gray-600 text-lg mb-8">
//             Thank you for your interest in partnering with SimcuraRX. Our team will review your request and get back to you within 1-2 business days.
//           </p>
          
//           <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
//             <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-start gap-2">
//                 <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>Our partnership team will review your application</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>You'll receive a confirmation email shortly</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>A partnership specialist will contact you within 48 hours</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={handleBackToMain}
//               className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
//             >
//               Back to Home
//             </button>
//             <button
//               onClick={() => window.location.href = '/partnerships'}
//               className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200"
//             >
//               View Partnership Opportunities
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="border-t border-gray-200 py-6 mt-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <p className="text-gray-500 text-sm">© 2025 SimcuraRX. Leading the future of healthcare integration.</p>
//             <div className="flex justify-center gap-6 mt-3">
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Cookie Settings</a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }

//   // ==================== FORM PAGE ====================
//   if (currentView === 'form') {
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Header with Logo */}
//         <div className="border-b border-gray-100 py-4">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center">
//               <button onClick={handleBackToMain} className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
//                 <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <span className="text-2xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
//             </div>
//           </div>
//         </div>

//         {/* Partnership Program Badge */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
//           <div className="flex justify-center">
//             <div 
//               className="inline-flex items-center gap-2 bg-blue-50 rounded-full text-sm font-bold uppercase tracking-wide"
//               style={{
//                 paddingTop: '4.84px',
//                 paddingRight: '14.52px',
//                 paddingBottom: '4.84px',
//                 paddingLeft: '14.52px',
//                 gap: '9.68px',
//                 borderRadius: '12102.61px'
//               }}
//             >
//               <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               <span className="text-[14.52px] leading-[19.37px] tracking-[0.73px] text-blue-700 font-bold">
//                 PARTNERSHIP PROGRAM
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content - Left and Right */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col lg:flex-row gap-12">
            
//             {/* Left Side Content */}
//             <div className="w-full lg:w-[561px] space-y-6">
//               <h1 className="text-4xl font-bold text-gray-900">Partner with Simcura RX</h1>
//               <p className="text-gray-600">
//                 Join our ecosystem to build strategic alliances and reshape the future of innovation, technology, and shared vision.
//               </p>
//               <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span className="text-sm font-medium">Trusted by 5+ global partners</span>
//               </div>
//             </div>
            
//             {/* Right Side Image */}
//             <div className="w-full lg:w-[561px]">
//               <div className="relative rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Partnership"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="max-w-[1043px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="bg-white rounded-[29.05px] shadow-xl border border-gray-100 p-8 md:p-10">
//             <form onSubmit={handleFormSubmit} className="space-y-8">
              
//               {/* Company Information */}
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="Enter legal business name"
//                       value={formData.companyName}
//                       onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Company Type</label>
//                     <select
//                       required
//                       value={formData.companyType}
//                       onChange={(e) => setFormData({...formData, companyType: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     >
//                       <option value="">Select company type</option>
//                       <option>Healthcare Provider</option>
//                       <option>Technology Company</option>
//                       <option>Startup</option>
//                       <option>Agency</option>
//                       <option>Enterprise</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Business Address */}
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Address</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Business Address</label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="Street address, Suite, etc."
//                       value={formData.fullAddress}
//                       onChange={(e) => setFormData({...formData, fullAddress: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.city}
//                         onChange={(e) => setFormData({...formData, city: e.target.value})}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">State / Province</label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.state}
//                         onChange={(e) => setFormData({...formData, state: e.target.value})}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.postalCode}
//                       onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Partnership Interest */}
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Partnership Interest</h2>
//                 <p className="text-sm text-gray-600 mb-4">Type of Partnership (Select all that apply)</p>
//                 <div className="grid grid-cols-2 gap-3">
//                   {partnershipOptions.map((option) => (
//                     <label key={option} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
//                       <input
//                         type="checkbox"
//                         checked={formData.partnershipTypes.includes(option)}
//                         onChange={() => handleCheckboxChange(option)}
//                         className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
//                       />
//                       <span className="text-sm text-gray-700">{option}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Terms Agreement */}
//               <div className="border-t border-gray-200 pt-6">
//                 <label className="flex items-start gap-3">
//                   <input
//                     type="checkbox"
//                     required
//                     checked={formData.agreeToTerms}
//                     onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
//                     className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 mt-1"
//                   />
//                   <span className="text-sm text-gray-600">
//                     By submitting this form, you agree to our Terms of Service and Privacy Policy.
//                   </span>
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md"
//               >
//                 Submit Partnership Request
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="border-t border-gray-200 py-6 mt-12">
//           <div className="max-w-[1280px] mx-auto px-6 text-center">
//             <p className="text-gray-500 text-sm">© 2025 SimcuraRX. Leading the future of healthcare integration.</p>
//             <div className="flex justify-center gap-6 mt-3">
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 text-sm hover:text-purple-600 transition-colors">Cookie Settings</a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }

//   // ==================== MAIN PARTNERSHIP PAGE ====================
//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col lg:flex-row gap-16 items-start">
          
//           {/* Left Side - Content */}
//           <div className="w-full lg:w-[584px] space-y-8">
//             <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
//               <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
//               PARTNERSHIP WITH PIXELMIND SOLUTIONS
//             </div>
            
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Partner With <span className="text-purple-600">SimcuraRx</span> for Strategic Digital Growth
//             </h1>
            
//             <p className="text-gray-600 leading-relaxed">
//               At Simcura RX, we believe in building strong partnerships that create mutual growth and long-term success. 
//               We collaborate with companies, startups, agencies, healthcare providers, & technology partners who share 
//               our vision of delivering innovative digital and healthcare solutions.
//             </p>
            
//             <p className="text-gray-600 leading-relaxed">
//               If you are interested in collaborating with Simcura RX, please fill out the partnership form below. 
//               Our team will review your details and connect with you.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button 
//                 onClick={handleOpenForm}
//                 className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
//               >
//                 Fill Partnership form
//               </button>
//               <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200">
//                 Our Services
//               </button>
//             </div>
//           </div>
          
//           {/* Right Side - Image */}
//           <div className="w-full lg:w-[584px] relative">
//             <div className="relative w-full h-[584px] rounded-2xl overflow-hidden shadow-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 alt="Partnership"
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Bar inside image */}
//               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[534px] max-w-[calc(100%-32px)] bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center justify-between gap-4">
//                   <div className="flex-1">
//                     <h4 className="text-lg font-semibold text-gray-900">Real-time Integration</h4>
//                     <p className="text-sm text-gray-500">Live data sync across 100+ clients</p>
//                   </div>
//                   <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
//                     <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Strategic Partnership Section */}
//       <section className="relative py-16 bg-white overflow-hidden">
        
//         {/* Background decorative elements */}
//         <div 
//           className="absolute rounded-full"
//           style={{
//             width: '330px',
//             height: '323px',
//             top: '1078px',
//             right: '0',
//             border: '60px solid rgba(119, 67, 237, 0.06)',
//             borderRadius: '50%',
//             opacity: 1
//           }}
//         />
        
//         <div 
//           className="absolute rounded-full"
//           style={{
//             width: '36px',
//             height: '35px',
//             top: '1115px',
//             right: '100px',
//             backgroundColor: 'rgba(119, 67, 237, 1)',
//             opacity: 0.11,
//             borderRadius: '50%'
//           }}
//         />
        
//         <div 
//           className="absolute rounded-full"
//           style={{
//             width: '222px',
//             height: '222px',
//             top: '1175px',
//             left: '-102px',
//             border: '22px solid rgba(135, 90, 239, 1)',
//             borderRadius: '50%',
//             opacity: 0.11
//           }}
//         />
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
//           <div className="flex justify-center mb-6">
//             <div 
//               className="inline-flex items-center justify-center gap-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
//               style={{
//                 width: '313px',
//                 height: '24px',
//                 gap: '8px',
//                 borderRadius: '9999px',
//                 paddingTop: '4px',
//                 paddingRight: '12px',
//                 paddingBottom: '4px',
//                 paddingLeft: '12px'
//               }}
//             >
//               <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
//               PARTNERSHIP WITH PIXELMIND SOLUTIONS
//             </div>
//           </div>
          
//           <h2 
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mx-auto"
//             style={{
//               width: '850px',
//               maxWidth: '100%',
//               height: 'auto'
//             }}
//           >
//             Strategic Partnership for Smarter Digital Innovation
//           </h2>
          
//           <p 
//             className="text-gray-600 text-lg mx-auto"
//             style={{
//               width: '812px',
//               maxWidth: '100%',
//               height: 'auto'
//             }}
//           >
//             SimcuraRx and Pixelmind Solutions join forces to deliver stronger, faster, and more scalable digital experiences.
//           </p>
          
//           <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
//             <div className="flex flex-col items-center" style={{ width: '113px', height: '123px' }}>
//               <img src={partnerIcon1} alt="Integration Icon" className="w-full h-full object-contain" />
//             </div>
//             <div className="flex flex-col items-center" style={{ width: '104px', height: '104px' }}>
//               <img src={partnerIcon2} alt="Partnership Icon" className="w-full h-full object-contain" />
//             </div>
//             <div className="flex flex-col items-center" style={{ width: '113px', height: '126px' }}>
//               <img src={partnerIcon3} alt="Growth Icon" className="w-full h-full object-contain" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who We Partner With Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Partner With</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               We are building a collaborative network that spans the entire healthcare value chain.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Established Companies Card */}
//             <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
//               <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
//                 <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Established Companies</h3>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Optimizing growth with scalable IT systems and secure digital infrastructure. 
//                 Designing high-performance technology ecosystems for long-term sustainability.
//               </p>
//               <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1 group">
//                 Know more 
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Agile Startups Card */}
//             <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
//               <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
//                 <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Startups</h3>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Accelerate your growth using our robust infrastructure. Focus on your unique value proposition 
//                 while we handle the heavy lifting of compliance and logistics.
//               </p>
//               <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1 group">
//                 Know more 
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Technology Partners Card */}
//             <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
//               <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
//                 <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Partners</h3>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Strengthen your digital capabilities with secure systems, scalable infrastructure, 
//                 and smart integration solutions.
//               </p>
//               <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1 group">
//                 Know more 
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Gradient Background */}
//       <section className="py-16 md:py-20" style={{ background: 'linear-gradient(196.46deg, #A177FF 0.86%, #6C36E7 96.24%)' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to collaborate?</h2>
//           <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Let's discuss how we can revolutionize healthcare together. Our team is ready to explore 
//             customized partnership models tailored to your needs.
//           </p>
//           <button 
//             onClick={handleOpenForm}
//             className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
//           >
//             Fill Partnership Form
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-500 text-sm">© 2025 SimcuraRX Pvt Ltd. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PartnershipPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import partnerIcon1 from '../assets/partnership-icon-1.png';
import partnerIcon2 from '../assets/partnership-icon-2.png';
import partnerIcon3 from '../assets/partnership-icon-3.png';

// ─── VIEW CONSTANTS ────────────────────────────────────────────────────────────
// 'main'    → Partnership landing page
// 'form'    → Partnership form
// 'note'    → Note Before Submitting
// 'success' → Confirmation / success screen

const PartnershipPage = () => {
  const [view, setView] = useState('main');
  const navigate = useNavigate();

  // Scroll to top whenever view changes
  const goTo = (v) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {view === 'main'    && <MainView    onOpenForm={() => goTo('form')} />}
      {view === 'form'    && <FormView    onBack={() => goTo('main')}   onSubmit={() => goTo('note')} />}
      {view === 'note'    && <NoteView    onBack={() => goTo('form')}   onConfirm={() => goTo('success')} />}
      {view === 'success' && <SuccessView onHome={() => { goTo('main'); navigate('/partnerships'); }} />}
    </div>
  );
};

export default PartnershipPage;


// ═══════════════════════════════════════════════════════════════════════════════
// MAIN LANDING VIEW
// ═══════════════════════════════════════════════════════════════════════════════
const MainView = ({ onOpenForm }) => (
  <div className="min-h-screen bg-white">

    {/* ── Hero Section ── */}
    <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left Content */}
        <div className="w-full lg:w-[584px] space-y-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-[9.68px] bg-[rgba(43,59,238,0.1)] text-[#2b3bee]"
            style={{
              borderRadius: '12102.61px',
              paddingTop: '4.84px',
              paddingBottom: '4.84px',
              paddingLeft: '14.52px',
              paddingRight: '14.52px',
              fontWeight: 700,
              fontSize: '14.52px',
              lineHeight: '19.37px',
              letterSpacing: '0.73px',
              textTransform: 'uppercase',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#2b3bee] flex-shrink-0" />
            PARTNERSHIP PROGRAM
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Partner With{' '}
            <span className="text-purple-600">Simcura RX</span>{' '}
            for Strategic Digital Growth
          </h1>

          <p className="text-gray-500 leading-relaxed text-[15px]">
            At Simcura RX, we believe in building strong partnerships that create mutual growth and
            long-term success. We collaborate with companies, startups, agencies, healthcare providers,
            &amp; technology partners who share our vision of delivering innovative digital and
            healthcare solutions.
          </p>

          <p className="text-gray-500 leading-relaxed text-[15px]">
            If you are interested in collaborating with Simcura RX, please fill out the partnership
            form below. Our team will review your details and connect with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenForm}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Fill Partnership form
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-200 cursor-pointer">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Image - 584px height as requested */}
        <div className="w-full lg:w-[584px] relative">
          <div className="relative w-full h-[584px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Partnership"
              className="w-full h-full object-cover"
            />
            {/* Floating card inside image */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[534px] max-w-[calc(100%-32px)] bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Real-time Integration</h4>
                  <p className="text-sm text-gray-500 mt-0.5">Live data sync across 100+ clients</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── Strategic Partnership Section ── */}
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width: 330, height: 330, right: -60, top: 60, border: '60px solid rgba(119,67,237,0.06)', borderRadius: '50%' }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width: 36, height: 36, right: 100, top: 95, background: 'rgba(119,67,237,0.11)', borderRadius: '50%' }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width: 222, height: 222, left: -102, top: 120, border: '22px solid rgba(135,90,239,0.11)', borderRadius: '50%' }} />

      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <div
            className="inline-flex items-center gap-[9.68px] bg-[rgba(43,59,238,0.1)] text-[#2b3bee]"
            style={{
              borderRadius: '9999px',
              paddingTop: '4.84px',
              paddingBottom: '4.84px',
              paddingLeft: '14.52px',
              paddingRight: '14.52px',
              fontWeight: 700,
              fontSize: '14.52px',
              lineHeight: '19.37px',
              letterSpacing: '0.73px',
              textTransform: 'uppercase',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#2b3bee] flex-shrink-0" />
            PARTNERSHIP WITH PIXELMIND SOLUTIONS
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mx-auto" style={{ maxWidth: 850 }}>
          Strategic Partnership for Smarter Digital Innovation
        </h2>
        <p className="text-gray-500 text-lg mx-auto" style={{ maxWidth: 812 }}>
          SimcuraRx and Pixelmind Solutions join forces to deliver stronger, faster, and more scalable
          digital experiences.
        </p>

        {/* Icons */}
        <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
          <div className="flex flex-col items-center" style={{ width: '113px', height: '123px' }}>
            <img src={partnerIcon1} alt="Integration Icon" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-center" style={{ width: '104px', height: '104px' }}>
            <img src={partnerIcon2} alt="Partnership Icon" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-center" style={{ width: '113px', height: '126px' }}>
            <img src={partnerIcon3} alt="Growth Icon" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── Who We Partner With ── */}
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Partner With</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We are building a collaborative network that spans the entire healthcare value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              iconBg: 'bg-blue-100',
              title: 'Established Companies',
              desc: 'Optimizing growth with scalable IT systems and secure digital infrastructure. Designing high-performance technology ecosystems for long-term sustainability.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              iconBg: 'bg-green-100',
              title: 'Agile Startups',
              desc: 'Accelerate your growth using our robust infrastructure. Focus on your unique value proposition while we handle the heavy lifting of compliance and logistics.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 4H3m18-4h-2m2 4h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              ),
              iconBg: 'bg-purple-100',
              title: 'Technology Partners',
              desc: 'Strengthen your digital capabilities with secure systems, scalable infrastructure, and smart integration solutions.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 mb-5 leading-relaxed text-sm">{card.desc}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1 group text-sm cursor-pointer">
                Know more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA Section ── */}
    <section
      className="py-16 md:py-20 text-center"
      style={{ background: 'linear-gradient(196.46deg, #A177FF 0.86%, #6C36E7 96.24%)' }}
    >
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to collaborate?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how we can revolutionize healthcare together. Our team is ready to explore
          customized partnership models tailored to your needs.
        </p>
        <button
          onClick={onOpenForm}
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg cursor-pointer"
        >
          Fill Partnership Form
        </button>
      </div>
    </section>

    {/* ── Footer ── */}
    <PageFooter />
  </div>
);


// ═══════════════════════════════════════════════════════════════════════════════
// FORM VIEW
// ═══════════════════════════════════════════════════════════════════════════════
const FormView = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    companyType: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    partnerships: [],
  });

  const partnershipTypes = [
    'Technology Partner',
    'Marketing Partner',
    'Referral Partner',
    'Strategic Alliance',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (type) => {
    setFormData((prev) => ({
      ...prev,
      partnerships: prev.partnerships.includes(type)
        ? prev.partnerships.filter((t) => t !== type)
        : [...prev.partnerships, type],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="min-h-screen bg-[#f8f7ff]">

      {/* Hero strip */}
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm font-medium mb-6 transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-[9.68px] bg-[rgba(43,59,238,0.1)] text-[#2b3bee] mb-4"
              style={{
                borderRadius: '9999px',
                paddingTop: '4.84px',
                paddingBottom: '4.84px',
                paddingLeft: '14.52px',
                paddingRight: '14.52px',
                fontWeight: 700,
                fontSize: '14.52px',
                lineHeight: '19.37px',
                letterSpacing: '0.73px',
                textTransform: 'uppercase',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2b3bee] flex-shrink-0" />
              PARTNERSHIP PROGRAM
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Partner with <span className="text-purple-600">Simcura RX</span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Join our ecosystem to build strategic alliances and reshape the future of innovation,
              technology, and shared vision.
            </p>

            {/* Trusted avatars */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex">
                {['JD', 'MK', 'SR'].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-600"
                    style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">Trusted by 5+ global partners</span>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
              alt="Team"
              className="w-full h-[180px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Form card */}
      <div
        className="mx-auto bg-white shadow-[0_8px_48px_rgba(108,54,231,0.08)] mb-12"
        style={{
          maxWidth: '1043px',
          borderRadius: '29.05px',
          padding: '48px',
        }}
      >
        <form onSubmit={handleSubmit}>

          {/* Company Information */}
          <FormSection
            icon={
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Company Information"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <FormField label="Company Name">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter legal business name"
                  className={inputCls}
                />
              </FormField>
              <FormField label="Company Website / App Link">
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className={inputCls}
                />
              </FormField>
            </div>
            <FormField label="Company Type">
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="" disabled>Select company type</option>
                <option>Private Limited</option>
                <option>Public Limited</option>
                <option>Startup</option>
                <option>NGO / Non-profit</option>
                <option>Government</option>
                <option>Other</option>
              </select>
            </FormField>
          </FormSection>

          {/* Business Address */}
          <FormSection
            icon={
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Business Address"
          >
            <div className="mb-5">
              <FormField label="Full Business Address">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address, Suite, etc."
                  className={inputCls}
                />
              </FormField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <FormField label="City">
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className={inputCls} />
              </FormField>
              <FormField label="State / Province">
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className={inputCls} />
              </FormField>
              <FormField label="Postal Code">
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Zip code" className={inputCls} />
              </FormField>
            </div>
          </FormSection>

          {/* Partnership Interest */}
          <FormSection
            icon={
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            title="Partnership Interest"
          >
            <p className="text-xs text-gray-500 mb-4">Type of Partnership (Select all that apply)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {partnershipTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm font-medium
                    ${formData.partnerships.includes(type)
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-[#f8f7ff] text-gray-700 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.partnerships.includes(type)}
                    onChange={() => handleCheckbox(type)}
                    className="w-4 h-4 accent-purple-600 cursor-pointer"
                  />
                  {type}
                </label>
              ))}
            </div>
          </FormSection>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 bg-purple-600 text-white font-bold rounded-xl px-12 py-4 text-base w-full max-w-[540px] hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Submit Partnership Request
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
            <p className="text-xs text-gray-400 mt-3">
              By submitting this form, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
};


// ═══════════════════════════════════════════════════════════════════════════════
// NOTE BEFORE SUBMITTING VIEW
// ═══════════════════════════════════════════════════════════════════════════════
const NoteView = ({ onBack, onConfirm }) => (
  <div
    className="min-h-screen relative"
    style={{ background: 'linear-gradient(150deg, #f0ebff 0%, #f8f7ff 60%, #fff 100%)' }}
  >
    {/* Decorative circle */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 300, height: 300,
        left: -60, top: 60,
        border: '60px solid rgba(108,54,231,0.07)',
        borderRadius: '50%',
      }}
    />

    <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-12 pb-16 relative z-10">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm font-medium mb-8 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to form
      </button>

      <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-[0_4px_40px_rgba(108,54,231,0.08)]">

        {/* Title */}
        <div className="flex items-center gap-3 mb-7">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Note Before Submitting</h2>
        </div>

        {/* Two info boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Secure Data Handling',
              desc: 'Your information is encrypted end-to-end and managed under strict healthcare-grade security protocols (HIPAA compliant).',
            },
            {
              icon: (
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              ),
              title: '100% Confidential',
              desc: 'We respect your professional privacy and will never share your details with third parties or marketing brokers.',
            },
          ].map((box) => (
            <div key={box.title} className="bg-[#f8f7ff] border border-[#e8e3ff] rounded-2xl p-5">
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                {box.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-[15px] mb-2">{box.title}</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">{box.desc}</p>
            </div>
          ))}
        </div>

        {/* Legal notice */}
        <div className="border-l-[3px] border-purple-600 pl-4 py-3 bg-[#f8f7ff] rounded-r-xl mb-5 text-[13px] text-gray-700 leading-relaxed">
          By submitting this partnership inquiry, you acknowledge that you have read and agree to our{' '}
          <a href="/" className="text-purple-600 font-semibold hover:underline">Terms of Service</a>.
          You consent to be contacted by Simcura RX via the provided email or phone number for the
          purpose of evaluating this partnership.
        </div>

        <p className="text-[12px] text-gray-400 leading-relaxed mb-6">
          We ensure that all information provided remains strictly confidential and is used solely to
          facilitate professional collaboration between our technology team and your organization.
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 text-[13px]">
          <div className="flex gap-5">
            <a href="/" className="text-purple-600 font-medium hover:underline inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Full Privacy Policy
            </a>
            <a href="/" className="text-purple-600 font-medium hover:underline">Compliance Standards</a>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure 256-bit Connection
          </div>
        </div>

        {/* Confirm button */}
        <button
          onClick={onConfirm}
          className="w-full bg-purple-600 text-white font-bold rounded-xl py-4 text-base hover:bg-purple-700 transition-all duration-200 cursor-pointer"
        >
          Confirm and Submit Partnership Request
        </button>
        <p className="text-center text-[12px] text-gray-400 mt-3">
          Standard response time is 1–2 business days
        </p>
      </div>
    </div>

    <PageFooter />
  </div>
);


// ═══════════════════════════════════════════════════════════════════════════════
// SUCCESS VIEW
// ═══════════════════════════════════════════════════════════════════════════════
const SuccessView = ({ onHome }) => (
  <div className="min-h-screen bg-white relative overflow-hidden">
    
    {/* Background Blur Circle - Left Side */}
    <div 
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '750px',
        height: '401px',
        top: '600px',
        left: '-594px',
        opacity: 11,
        backdropFilter: 'blur(200px)',
        WebkitBackdropFilter: 'blur(100px)',
        background: 'rgb(213, 197, 249)'
      }}
    />

    {/* Main Container */}
    <div className="max-w-[1280px] mx-auto px-10 py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-[678px] relative">
          {/* Radial Gradient Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(132.58% 132.58% at -4325% -4325%, rgba(19, 91, 236, 0.08) 1.18%, rgba(19, 91, 236, 0) 100%)'
            }}
          />
          
          <div className="relative z-10 w-full max-w-[550px] space-y-10">
            
            {/* Icon */}
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center p-2.5">
              <svg className="w-full h-full text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-[60px] font-extrabold leading-[60px] tracking-[-1.5px] text-gray-900">
              Thank You For Your<br />
              Interest In<br />
              Partnering With<br />
              SimcuraRx
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-[20px] leading-[32.5px] font-normal max-w-[672px]">
              Our team has received your enquiry and we are excited
              about the possibility of working together to transform
              healthcare technology.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 shadow-md">
                Explore Our Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                onClick={onHome}
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-200"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side Card */}
        <div className="w-full lg:w-[472px] bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(229,231,235,0.5),0_8px_10px_-6px_rgba(229,231,235,0.5)] border-t border-gray-200 p-10">
          
          {/* Need immediate assistance? */}
          {/* <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need immediate assistance?</h3>
            <p className="text-gray-500 text-sm">
              Contact our partnership desk at{' '}
              <a href="mailto:simcurarx@gmail.com" className="text-purple-600 font-medium hover:underline">
                simcurarx@gmail.com
              </a>{' '}
              for urgent queries.
            </p>
          </div> */}
          
          {/* What happens next? */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Team reviews submission</h4>
                  <p className="text-gray-500 text-sm">
                    Our partnership specialists are evaluating your details and aligning them with our current healthcare initiatives.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Shortlisting</h4>
                  <p className="text-gray-500 text-sm">
                    We identify the best alignment for our mutual goals to ensure a sustainable and productive long-term partnership.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Follow-up discussion</h4>
                  <p className="text-gray-500 text-sm">
                    A dedicated representative will reach out via email within 2-3 business days to schedule a preliminary discovery call.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Need immediate assistance? - Contact Support Button */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need immediate assistance?</h3>
            <p className="text-gray-500 text-sm">
              Contact our partnership desk at{' '}
              <a href="mailto:simcurarx@gmail.com" className="text-purple-600 font-medium hover:underline">
                simcurarx@gmail.com
              </a>{' '}
              for urgent queries.
            </p>
          </div>
          
        </div>
        
      </div>
    </div>


    {/* Dashed Bar Container */}
    <div className="w-full flex justify-center py-8">
      <div 
        className="w-[903px] max-w-[90%] rounded-[13.55px] p-[27.09px]"
        style={{
          background: 'rgba(249, 250, 251, 0.5)',
          border: '1.13px dashed rgba(219, 223, 230, 1)',
          borderTop: '1.13px solid rgba(219, 223, 230, 1)',
          strokeDasharray: '3.386px, 2.257px'
        }}
      >
        <div className="flex items-center justify-between w-full max-w-[846px] mx-auto">
          {/* Left Content */}
          <div>
            <h4 className="text-base font-semibold text-gray-800">Need immediate assistance?</h4>
            <p className="text-sm text-gray-500">Our team is here to help you</p>
          </div>
          
          {/* Right Button */}
          <button className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-200 text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);
// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

/** Shared footer used across all views */
const PageFooter = () => (
  <footer className="bg-white border-t border-gray-100">
    <div
      className="mx-auto flex flex-col items-center gap-1"
      style={{
        maxWidth: 799,
        paddingTop: '18px',
        paddingBottom: '18px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <p className="text-gray-400 text-[13px] text-center" style={{ maxWidth: 751 }}>
        © 2025 SimcuraRX. Leading the future of healthcare integration.
      </p>
      <div className="flex items-center justify-center" style={{ gap: 24 }}>
        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
          <a key={link} href="/" className="text-[13px] text-gray-400 hover:text-purple-600 transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

/** Wrapper for a form section with an icon + title divider */
const FormSection = ({ icon, title, children }) => (
  <div className="mb-9">
    <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-100">
      {icon}
      <h3 className="font-bold text-gray-900 text-[17px]">{title}</h3>
    </div>
    {children}
  </div>
);

/** Label + input wrapper */
const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] font-medium text-gray-700">{label}</label>
    {children}
  </div>
);

/** Shared input/select/textarea className */
const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 bg-white outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 placeholder:text-gray-300';  
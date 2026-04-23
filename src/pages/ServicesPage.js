// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import footerLogo from '../assets/headerlogo.png';

// // ─── SERVICE DATA ──────────────────────────────────────────────────────────────
// const services = [
//   {
//     id: 1,
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <rect x="2" y="5" width="24" height="16" rx="2.5" stroke="#7743ED" strokeWidth="1.6"/>
//         <path d="M9 21v2m10-2v2M6 23h16" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round"/>
//         <rect x="5" y="8" width="7" height="5" rx="1" fill="#7743ED" opacity=".25"/>
//         <rect x="14" y="8" width="7" height="5" rx="1" fill="#7743ED" opacity=".25"/>
//       </svg>
//     ),
//     cornerIcon: (
//       <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
//         <rect x="1" y="3" width="16" height="11" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
//         <path d="M5 14v1.5M13 14v1.5M3 15.5h12" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: 'Website Development',
//     desc: 'Build high-performance, secure websites designed to strengthen your digital presence and drive business growth.',
//     features: [
//       'Responsive & Mobile-Optimized Design',
//       'SEO-Ready Architecture',
//       'Secure & Scalable Development',
//     ],
//   },
//   {
//     id: 2,
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <rect x="8" y="2" width="12" height="24" rx="3" stroke="#7743ED" strokeWidth="1.6"/>
//         <rect x="11" y="5" width="6" height="3" rx="1" fill="#7743ED" opacity=".25"/>
//         <circle cx="14" cy="22" r="1.5" fill="#7743ED" opacity=".5"/>
//       </svg>
//     ),
//     cornerIcon: (
//       <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
//         <rect x="5" y="1" width="8" height="16" rx="2" stroke="#c4b5fd" strokeWidth="1.2"/>
//         <rect x="7" y="3" width="4" height="2" rx=".5" fill="#c4b5fd" opacity=".5"/>
//       </svg>
//     ),
//     title: 'Mobile App Development',
//     desc: 'Design and develop powerful Android and iOS applications built for performance, usability, and scalability.',
//     features: [
//       'Android & iOS Development',
//       'Intuitive UI/UX Design',
//       'API & Third-Party Integrations',
//     ],
//   },
//   {
//     id: 3,
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <path d="M4 20l5-8 4 5 3-4 5 7H4z" stroke="#7743ED" strokeWidth="1.6" strokeLinejoin="round"/>
//         <path d="M22 8l-3 1 1-3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="22" cy="8" r="2" fill="#7743ED" opacity=".3"/>
//       </svg>
//     ),
//     cornerIcon: (
//       <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
//         <path d="M3 13l3-5 3 3 2-3 4 5H3z" stroke="#c4b5fd" strokeWidth="1.2" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: 'Digital Marketing',
//     desc: 'Data-driven marketing strategies that increase visibility, generate leads, and accelerate business growth.',
//     features: [
//       'SEO & Content Strategy',
//       'Social Media Marketing',
//       'Paid Ads & Performance Tracking',
//     ],
//   },
//   {
//     id: 4,
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <path d="M5 8h18M5 8v14h18V8M9 8V5h10v3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//         <rect x="10" y="13" width="3" height="4" rx=".5" fill="#7743ED" opacity=".35"/>
//         <rect x="15" y="13" width="3" height="4" rx=".5" fill="#7743ED" opacity=".35"/>
//       </svg>
//     ),
//     cornerIcon: (
//       <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
//         <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
//         <path d="M6 5V3h6v2" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: 'E-commerce Solutions',
//     desc: 'End-to-end online store development with secure payments and optimized user experiences.',
//     features: [
//       'Payment Gateway Integration',
//       'Product & Inventory Management',
//       'Conversion-Focused Design',
//     ],
//   },
//   {
//     id: 5,
//     icon: (
//       <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
//         <rect x="3" y="6" width="22" height="16" rx="2.5" stroke="#7743ED" strokeWidth="1.6"/>
//         <path d="M8 14h5M8 17h3M16 11l3 3-3 3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     cornerIcon: (
//       <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
//         <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
//         <path d="M5 9h4M5 11.5h2.5M10 7.5l2 2-2 2" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: 'Custom Software Development',
//     desc: 'Tailored software solutions designed to automate workflows and improve operational efficiency.',
//     features: [
//       'Business Process Automation',
//       'Scalable Cloud Infrastructure',
//       'Secure System Architecture',
//     ],
//   },
// ];

// // ─── FEATURE BULLET ───────────────────────────────────────────────────────────
// const FeatureBullet = ({ text }) => (
//   <li className="flex items-center gap-2 text-[12.5px] text-gray-500 leading-snug">
//     <span className="flex-shrink-0 w-[17px] h-[17px] rounded-full flex items-center justify-center bg-purple-100/30">
//       <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
//         <path d="M1.5 4.5l2 2 4-4" stroke="#7743ED" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </span>
//     {text}
//   </li>
// );

// // ─── SERVICE CARD ─────────────────────────────────────────────────────────────
// const ServiceCard = ({ service }) => (
//   <div 
//     className="flex flex-col justify-between relative group bg-white rounded-[27.12px] border border-purple-100/55 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//     style={{ width: '267.65px', minHeight: '318.66px', padding: '22px 22px 20px' }}
//   >
//     {/* Top row: main icon + corner icon */}
//     <div className="flex items-start justify-between mb-4">
//       <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-purple-100/20">
//         {service.icon}
//       </div>
//       <div className="opacity-40">
//         {service.cornerIcon}
//       </div>
//     </div>

//     {/* Title */}
//     <h3 className="text-gray-900 font-bold mb-2 leading-snug text-[15.5px]">
//       {service.title}
//     </h3>

//     {/* Description */}
//     <p className="text-gray-400 leading-relaxed mb-4 text-[12.5px]">
//       {service.desc}
//     </p>

//     {/* Divider */}
//     <div className="border-t border-gray-100 mb-4" />

//     {/* Feature list */}
//     <ul className="flex flex-col gap-2 mb-5">
//       {service.features.map(f => <FeatureBullet key={f} text={f} />)}
//     </ul>

//     {/* Book now button */}
//     <button className="inline-flex items-center gap-1.5 font-semibold text-[13px] text-purple-600 hover:text-purple-800 transition-colors group/btn">
//       Book now
//       <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="group-hover/btn:translate-x-1 transition-transform">
//         <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </button>
//   </div>
// );

// const PageFooter = () => {
//   const navigate = useNavigate();

//   return (
//     <footer className="border-t border-purple-800/30 mt-16" style={{ background: '#0e0b16' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
//           {/* Left side - Logo with click navigation to home */}
//           <button 
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
//           >
//             <img 
//               src={footerLogo} 
//               alt="Simcura Logo" 
//               className="w-8 h-8 object-contain"
//             />
//             <span className="text-xl font-bold text-white">Simcura<span className="text-purple-400">®</span></span>
//           </button>
          
//           {/* Center - Copyright */}
//           <p className="text-gray-400 text-[13px] text-center">
//             © 2025 SimcuraRX. Leading the future of healthcare integration.
//           </p>
          
//           {/* Right side - Social Media Icons */}
//           <div className="flex items-center gap-4">
//             {/* Instagram */}
//             <a 
//               href="https://instagram.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110"
//             >
//               <svg className="w-4 h-4 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//               </svg>
//             </a>
            
//             {/* Mail */}
//             <a 
//               href="mailto:simcurarx@gmail.com" 
//               className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110"
//             >
//               <svg className="w-4 h-4 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </a>
            
//             {/* Share */}
//             <button 
//               onClick={() => {
//                 if (navigator.share) {
//                   navigator.share({
//                     title: 'SimcuraRX',
//                     text: 'Leading the future of healthcare integration',
//                     url: window.location.href,
//                   });
//                 } else {
//                   alert('Share feature is not supported in this browser');
//                 }
//               }}
//               className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110"
//             >
//               <svg className="w-4 h-4 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// const ServicesPage = () => {
//   return (
//     <div className="relative overflow-hidden min-h-screen bg-[#0e0b16]">
      
//       {/* White/purple radial glow (top center) */}
//       <div className="absolute pointer-events-none rounded-full w-[776px] h-[561px] -top-[240px] left-[362px] bg-purple-700/20 blur-[200px]" />
      
//       {/* Left large circle */}
//       <div className="absolute pointer-events-none rounded-full w-[456px] h-[456px] top-[788px] -left-[238px] border-[22px] border-purple-500/10" />
      
//       {/* Right large thick circle - Half cut / C shape as in image */}
//       <div 
//         className="absolute pointer-events-none rounded-full w-[456px] h-[456px] border-[79.66px] border-purple-600/55"
//         style={{ 
//           top: '100px',
//           right: '-280px',
//         }} 
//       />
      
//       {/* Two-layer dot near right circle */}
//       <div 
//         className="absolute pointer-events-none rounded-full w-[50px] h-[50px] bg-purple-600/55" 
//         style={{ 
//           top: '160px',
//           right: '-240px',
//         }}
//       />
//       <div 
//         className="absolute pointer-events-none rounded-full w-[28px] h-[28px] bg-purple-200/55" 
//         style={{ 
//           top: '171px',
//           right: '-229px',
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-[146px]">

//         {/* Hero Section */}
//         <div className="pt-16 pb-0 flex items-start justify-between">
          
//           {/* Left block */}
//           <div className="w-[597px] min-h-[271px] flex flex-col gap-3 justify-center">
//             <h1 className="font-extrabold text-[50px] leading-[60px] text-white">
//               Specialized IT Services
//               <br />
//               for Scalable <span className="text-purple-400">Growth</span>
//             </h1>
            
//             <p className="font-normal text-[16.36px] leading-[25.45px] text-gray-300 max-w-[420px] my-1">
//               We design and implement reliable technology
//               infrastructure that drives efficiency and long-term
//               success.
//             </p>
            
//             {/* Contact now button */}
//             {/* Contact now button */}
//             <button className="inline-flex items-center gap-2 w-[187px] h-[50px] rounded-[30px] py-2 px-5 bg-gradient-to-r from-purple-400 to-purple-700 text-white font-bold text-[15px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 flex-shrink-0">
//             Contact now
//             <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
//                 <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
//                 {/* Arrow pointing to top-right corner */}
//                 <path d="M3 11L11 3M11 3H6M11 3V8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//             </span>
//             </button>
//           </div>


//           {/* Right: "What We Offer" label */}
//           <div className="flex items-center gap-3 self-start mt-10">
//             <div className="w-10 h-[1.5px] bg-white/50" />
//             <span className="text-white/65 text-[13px] font-semibold tracking-[0.12em] uppercase">
//               WHAT WE OFFER
//             </span>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="mt-[180px] pb-10">
//           {/* Row 1 — 3 cards */}
//           <div className="flex gap-7 justify-center flex-wrap mb-7">
//             {services.slice(0, 3).map(s => <ServiceCard key={s.id} service={s} />)}
//           </div>
          
//           {/* Row 2 — 2 cards centered */}
//           <div className="flex gap-7 justify-center flex-wrap">
//             {services.slice(3).map(s => <ServiceCard key={s.id} service={s} />)}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <PageFooter />
//     </div>
//   );
// };

// export default ServicesPage;


// ServicesPage.js - Fixed Navbar with No White Gap
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerLogo from '../assets/headerlogo.png';

const services = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="2" y="5" width="24" height="16" rx="2.5" stroke="#7743ED" strokeWidth="1.6"/>
        <path d="M9 21v2m10-2v2M6 23h16" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round"/>
        <rect x="5" y="8" width="7" height="5" rx="1" fill="#7743ED" opacity=".25"/>
        <rect x="14" y="8" width="7" height="5" rx="1" fill="#7743ED" opacity=".25"/>
      </svg>
    ),
    cornerIcon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="1" y="3" width="16" height="11" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
        <path d="M5 14v1.5M13 14v1.5M3 15.5h12" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Website Development',
    desc: 'Build high-performance, secure websites designed to strengthen your digital presence and drive business growth.',
    features: [
      'Responsive & Mobile-Optimized Design',
      'SEO-Ready Architecture',
      'Secure & Scalable Development',
    ],
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="8" y="2" width="12" height="24" rx="3" stroke="#7743ED" strokeWidth="1.6"/>
        <rect x="11" y="5" width="6" height="3" rx="1" fill="#7743ED" opacity=".25"/>
        <circle cx="14" cy="22" r="1.5" fill="#7743ED" opacity=".5"/>
      </svg>
    ),
    cornerIcon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="5" y="1" width="8" height="16" rx="2" stroke="#c4b5fd" strokeWidth="1.2"/>
        <rect x="7" y="3" width="4" height="2" rx=".5" fill="#c4b5fd" opacity=".5"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Design and develop powerful Android and iOS applications built for performance, usability, and scalability.',
    features: [
      'Android & iOS Development',
      'Intuitive UI/UX Design',
      'API & Third-Party Integrations',
    ],
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <path d="M4 20l5-8 4 5 3-4 5 7H4z" stroke="#7743ED" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M22 8l-3 1 1-3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="8" r="2" fill="#7743ED" opacity=".3"/>
      </svg>
    ),
    cornerIcon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path d="M3 13l3-5 3 3 2-3 4 5H3z" stroke="#c4b5fd" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies that increase visibility, generate leads, and accelerate business growth.',
    features: [
      'SEO & Content Strategy',
      'Social Media Marketing',
      'Paid Ads & Performance Tracking',
    ],
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <path d="M5 8h18M5 8v14h18V8M9 8V5h10v3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="13" width="3" height="4" rx=".5" fill="#7743ED" opacity=".35"/>
        <rect x="15" y="13" width="3" height="4" rx=".5" fill="#7743ED" opacity=".35"/>
      </svg>
    ),
    cornerIcon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
        <path d="M6 5V3h6v2" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'E-commerce Solutions',
    desc: 'End-to-end online store development with secure payments and optimized user experiences.',
    features: [
      'Payment Gateway Integration',
      'Product & Inventory Management',
      'Conversion-Focused Design',
    ],
  },
  {
    id: 5,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="3" y="6" width="22" height="16" rx="2.5" stroke="#7743ED" strokeWidth="1.6"/>
        <path d="M8 14h5M8 17h3M16 11l3 3-3 3" stroke="#7743ED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    cornerIcon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#c4b5fd" strokeWidth="1.2"/>
        <path d="M5 9h4M5 11.5h2.5M10 7.5l2 2-2 2" stroke="#c4b5fd" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Tailored software solutions designed to automate workflows and improve operational efficiency.',
    features: [
      'Business Process Automation',
      'Scalable Cloud Infrastructure',
      'Secure System Architecture',
    ],
  },
];

// ─── FEATURE BULLET ───────────────────────────────────────────────────────────
const FeatureBullet = ({ text }) => (
  <li className="flex items-center gap-2 text-[12.5px] text-gray-500 leading-snug">
    <span className="flex-shrink-0 w-[17px] h-[17px] rounded-full flex items-center justify-center bg-purple-100/30">
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M1.5 4.5l2 2 4-4" stroke="#7743ED" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    {text}
  </li>
);

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service }) => (
  <div 
    className="flex flex-col justify-between relative group bg-white rounded-[27.12px] border border-purple-100/55 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    style={{ width: '267.65px', minHeight: '318.66px', padding: '22px 22px 20px' }}
  >
    {/* Top row: main icon + corner icon */}
    <div className="flex items-start justify-between mb-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-purple-100/20">
        {service.icon}
      </div>
      <div className="opacity-40">
        {service.cornerIcon}
      </div>
    </div>

    {/* Title */}
    <h3 className="text-gray-900 font-bold mb-2 leading-snug text-[15.5px]">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-400 leading-relaxed mb-4 text-[12.5px]">
      {service.desc}
    </p>

    {/* Divider */}
    <div className="border-t border-gray-100 mb-4" />

    {/* Feature list */}
    <ul className="flex flex-col gap-2 mb-5">
      {service.features.map(f => <FeatureBullet key={f} text={f} />)}
    </ul>

    {/* Book now button */}
    <button className="inline-flex items-center gap-1.5 font-semibold text-[13px] text-purple-600 hover:text-purple-800 transition-colors group/btn">
      Book now
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="group-hover/btn:translate-x-1 transition-transform">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);
// ─── NAVBAR COMPONENT (Fixed - No white gap) ──────────────────────────────────
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Services');
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (linkName, href, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      {/* Fixed Navbar - Full width, no top padding */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-[#0e0b16]">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
            <nav 
              className="w-full transition-all duration-500 ease-in-out"
              style={{
                background: scrolled ? 'rgba(14, 11, 22, 0.75)' : 'rgba(14, 11, 22, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: scrolled ? '50px' : '80px',
                height: scrolled ? '60px' : '70px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: scrolled ? '0px 8px 32px rgba(0, 0, 0, 0.2)' : '0px 4px 23.3px 0px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="w-full px-3 sm:px-5 md:px-6">
                <div className="flex justify-between items-center">
                  
                  {/* Logo */}
                  <a href="/" className="flex items-center group" onClick={(e) => handleNavClick('Home', '/', e)}>
                    <img 
                      src={logo} 
                      alt="Simcura" 
                      className={`${scrolled ? 'h-10 sm:h-11 md:h-12' : 'h-12 sm:h-14 md:h-16'} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </a>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(link.name, link.href, e)}
                        className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
                          activeLink === link.name
                            ? 'text-purple-400 bg-purple-900/40'
                            : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {/* Desktop Buttons */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-3">
                    <button
                      onClick={() => navigate('/clynix')} 
                      className="px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                    >
                      Clynix App
                    </button>
                    
                    <button
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank')}
                      className="px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer bg-purple-600 text-white hover:bg-purple-700 shadow-md"
                    >
                      Download
                    </button>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="lg:hidden flex items-center">
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="p-2 rounded-full transition-all duration-300 cursor-pointer text-gray-300 hover:text-purple-400"
                    >
                      {!isMobileMenuOpen ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>



      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-[#0e0b16]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <img src={logo} alt="Simcura" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-300 hover:text-purple-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.name, link.href, e)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    activeLink === link.name
                      ? 'text-purple-400 bg-purple-900/40'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button onClick={() => { setIsMobileMenuOpen(false); navigate('/clynix'); }} className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white/5 text-gray-300 border border-white/10">
                  Clynix App
                </button>
                <button onClick={() => { setIsMobileMenuOpen(false); window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank'); }} className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-purple-600 text-white">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer - pushes content below navbar */}
      <div className={`bg-black transition-all duration-500 ${
        scrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-28'
      }`}></div>
    </>
  );
};

// ─── FOOTER COMPONENT (keep same) ─────────────────────────────────────────────
const PageFooter = () => {
  const navigate = useNavigate();
  // ... (keep your existing footer code exactly the same) ...
  return (
    <footer className="border-t border-purple-800/30 mt-16" style={{ background: '#0e0b16' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-white">Simcura<span className="text-purple-400">®</span></span>
          </button>
          
          <p className="text-gray-400 text-[13px] text-center">
            © 2025 SimcuraRX. Leading the future of healthcare integration.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            
            <a href="mailto:simcurarx@gmail.com" className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            
            <button onClick={() => { if (navigator.share) navigator.share({ title: 'SimcuraRX', text: 'Leading the future', url: window.location.href }); }} className="w-9 h-9 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── MAIN SERVICES PAGE ───────────────────────────────────────────────────────
const ServicesPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#0e0b16]">
      
      {/* Navbar - Built directly into the page */}
      <Navbar />
      
      {/* Background decorative elements */}
      <div className="absolute pointer-events-none rounded-full w-[776px] h-[561px] -top-[240px] left-[362px] bg-purple-700/20 blur-[200px]" />
      <div className="absolute pointer-events-none rounded-full w-[456px] h-[456px] top-[788px] -left-[238px] border-[22px] border-purple-500/10" />
      <div className="absolute pointer-events-none rounded-full w-[456px] h-[456px] border-[79.66px] border-purple-600/55" style={{ top: '100px', right: '-280px' }} />
      <div className="absolute pointer-events-none rounded-full w-[50px] h-[50px] bg-purple-600/55" style={{ top: '160px', right: '-240px' }} />
      <div className="absolute pointer-events-none rounded-full w-[28px] h-[28px] bg-purple-200/55" style={{ top: '171px', right: '-229px' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-[146px]">

        {/* Hero Section */}
        <div className="pt-16 pb-0 flex items-start justify-between">
          
          <div className="w-[597px] min-h-[271px] flex flex-col gap-3 justify-center">
            <h1 className="font-extrabold text-[50px] leading-[60px] text-white">
              Specialized IT Services
              <br />
              for Scalable <span className="text-purple-400">Growth</span>
            </h1>
            
            <p className="font-normal text-[16.36px] leading-[25.45px] text-gray-300 max-w-[420px] my-1">
              We design and implement reliable technology
              infrastructure that drives efficiency and long-term
              success.
            </p>
            
            <button className="inline-flex items-center gap-2 w-[187px] h-[50px] rounded-[30px] py-2 px-5 bg-gradient-to-r from-purple-400 to-purple-700 text-white font-bold text-[15px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5">
              Contact now
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M3 11L11 3M11 3H6M11 3V8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 self-start mt-10">
            <div className="w-10 h-[1.5px] bg-white/50" />
            <span className="text-white/65 text-[13px] font-semibold tracking-[0.12em] uppercase">
              WHAT WE OFFER
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-[180px] pb-10">
          <div className="flex gap-7 justify-center flex-wrap mb-7">
            {services.slice(0, 3).map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
          <div className="flex gap-7 justify-center flex-wrap">
            {services.slice(3).map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default ServicesPage;

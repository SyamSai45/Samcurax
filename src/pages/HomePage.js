// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// // import SimcuraBar from '../components/Simcurabar';

// import clynixLogo from '../assets/Clynix-Logo.png'; 
// import appStoreBtn from '../assets/App_Store_btn.png'; 
// import googlePlayBtn from '../assets/PlayStore_btn.png'; 
// import scannerImage from '../assets/scannerImage.png';
// import headerLogo from '../assets/headerlogo.png';
// import simkuraLogo from '../assets/simkuralogo.png';

// // Import your card icons from assets
// import websiteIcon from '../assets/Website.png';
// import mobileIcon from '../assets/Digital.png';
// import digitalIcon from '../assets/Digital.png';
// import ecommerceIcon from '../assets/E-Commerce.png';
// import arrowIcon from '../assets/arrow.png';



// // Team Images 
// import teamImage1 from '../assets/team/teamImage1.png';
// import teamImage2 from '../assets/team/teamImage2.png';
// import teamImage3 from '../assets/team/teamImage3.png';
// import teamImage4 from '../assets/team/teamImage3.png';
// import teamImage5 from '../assets/team/teamImage3.png';
// import teamImage6 from '../assets/team/teamImage3.png';

// //Certificagtions Icons
// import legallyRegisteredIcon from '../assets/FooterIcons/legallyRegistered.png';
// import nabhAcceptedIcon from '../assets/FooterIcons/nabhAccepted.png';
// import CertfiedIcon from '../assets/FooterIcons/CertfiedIcon.png';

// // Modern Card Component with cut-out curve and overlapping icon
// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <div className="relative group w-full">
//       <div className="relative bg-white rounded-3xl p-6 pt-14 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
//         <div className="absolute top-0 left-0 w-16 h-16 bg-transparent">
//           <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 64 64" fill="none">
//             <path d="M64 0H0V64C0 64 0 0 64 0Z" fill="white" />
//           </svg>
//         </div>
//         <div className="absolute -top-4 -left-4 z-20">
//           <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//             <img src={icon} alt={title} className="w-7 h-7 object-contain brightness-0 invert" />
//           </div>
//         </div>
//         <div className="relative z-10 flex-grow">
//           <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
//             {title}
//           </h3>
//           <p className="text-gray-500 text-sm leading-relaxed mb-5">
//             {description}
//           </p>
//           <button className="text-purple-600 font-semibold transition-all duration-200 inline-flex items-center gap-1 text-sm group/btn">
//             Read More 
//             <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [currentIndex , setCurrentIndex] = useState(0);


//   const teamMembers = [
//   {
//     id: 1,
//     name: 'Ashok Varma',
//     position: 'Founder & Chairman',
//     image: teamImage1
//   },
//   {
//     id: 2,
//     name: 'Priyanka Varma',
//     position: 'Managing Director',
//     image: teamImage2
//   },
//   {
//     id: 3,
//     name: 'Vijay Kumar',
//     position: 'Admin & Graphic Designer',
//     image: teamImage3
//   },
//   {
//     id: 4,
//     name: 'Rohit Kumar',
//     position: 'Senior Developer',
//     image: teamImage4
//   },
//   {
//     id: 5,
//     name: 'Sneha Reddy',
//     position: 'Marketing Head',
//     image: teamImage5
//   },
//   {
//     id: 6,
//     name: 'Anil Kumar',
//     position: 'Project Manager',
//     image: teamImage6
//   }
// ];

// const nextSlide = () => {
//   setCurrentIndex ((prevIndex ) => (prevIndex + 1) % teamMembers.length);
// }

// const prevSlide = () => {
//   setCurrentIndex ((prevIndex ) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
// }

// const visibleCards = teamMembers.slice(currentIndex, currentIndex + 3);


//   const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.clynix.clynix';

//   const handleAppStoreClick = () => {
//     window.open(playStoreUrl, '_blank');
//   };

//   const handleGooglePlayClick = () => {
//     window.open(playStoreUrl, '_blank');
//   };

//   const servicesData = [
//     {
//       icon: mobileIcon,
//       title: "Mobile Development",
//       description: "Design and develop powerful Android and iOS applications built for performance, usability, and scalability."
//     },
//     {
//       icon: websiteIcon,
//       title: "Website Development",
//       description: "Build responsive, fast, and SEO-friendly websites using modern frameworks like React, Next.js, and Tailwind CSS."
//     },
//     {
//       icon: digitalIcon,
//       title: "Digital Marketing",
//       description: "Data-driven marketing strategies that increase visibility, generate leads, and accelerate business growth."
//     },
//     {
//       icon: ecommerceIcon,
//       title: "E-commerce Solutions",
//       description: "End-to-end online store development with secure payments and optimized user experiences."
//     }
//   ];

//   return (
//     <div 
//       className="min-h-screen relative overflow-x-hidden pt-[80px] md:pt-[90px]"
//       style={{ 
//         background: 'linear-gradient(189.07deg, rgb(202, 181, 248) 6.88%, rgba(228, 216, 255, 0) 48.19%, rgba(125, 75, 238, 0.85) 103.26%)'
//       }}
//     >
      
//       {/* Background Blur Circles */}
//       <div 
//         className="absolute rounded-full pointer-events-none left-[-598px] opacity-20"
//         style={{
//           backgroundColor: '#8270ac',
//           backdropFilter: 'blur(200px)',
//           WebkitBackdropFilter: 'blur(200px)',
//           width: '776px',
//           height: '561px',
//           top: '1480px'
//         }}
//       />
      
//       <div 
//         className="absolute rounded-full pointer-events-none opacity-20"
//         style={{
//           backgroundColor: '#9C71FF',
//           backdropFilter: 'blur(200px)',
//           WebkitBackdropFilter: 'blur(200px)',
//           width: '776px',
//           height: '561px',
//           top: '1633px',
//           left: '1225px'
//         }}
//       />

//       {/* ==================== SECTION 1: HERO SECTION ==================== */}
//       <section id="home">
//         <div className="min-h-screen flex items-center justify-center p-6" >
//           <div className="w-full max-w-[1400px] rounded-[32px] bg-white/10 backdrop-blur-md shadow-2xl px-10 pt-8 pb-16 relative overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-24 gap-12">
//               <div>
//                 <h1 className="text-[48px] font-bold text-[#24005A] leading-tight">
//                   SimcuraRx <br />Where care <br />meets code
//                 </h1>
//                 <p className="mt-6 text-[#4A2C7A] max-w-md">
//                   Integrated healthcare and IT solutions: doctor consultations, medicine delivery, diagnostics, and custom healthcare software all in one trusted platform.
//                 </p>
//                 <div className="flex gap-4 mt-8">
//                   <button className="bg-gradient-to-r from-[#7C4DFF] to-[#5B2EFF] text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg">
//                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
//                     </svg>
//                     Download app
//                   </button>
//                   <button className="border border-[#7C4DFF] text-[#5B2EFF] px-8 py-3 rounded-full">
//                     Fast. Secure. Verified.
//                   </button>
//                 </div>
//               </div>
//               <div className="relative flex justify-center items-center">
//                 <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#4A166C] to-[#1B0030] flex items-center justify-center shadow-[0_0_140px_rgba(124,77,255,0.55)]">
//                   <img alt="Simkura Logo" className="w-[320px] h-[320px] object-contain mt-10" src={headerLogo} />
//                 </div>
//                 <div className="absolute top-20 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
//                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#8B5CF6] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
//                   </svg>
//                 </div>
//                 <div className="absolute top-8 right-20 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
//                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#7C4DFF] text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
//                   </svg>
//                 </div>
//                 <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
//                   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#5B2EFF] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== SECTION 2: ABOUT US SECTION ==================== */}
//       <section id="about">
//         <div className="w-full bg-white py-28">
//           <div className="max-w-6xl mx-auto px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-bold text-[#7B61FF] mb-6">About Us</h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 SimcuraRX delivers trusted medical expertise and modern tech to create integrated, reliable healthcare. 
//                 We bridge patient care and enterprise IT—<span className="font-semibold">Simple Care. Right Solutions.</span>
//               </p>
//             </div>

//             <div className="flex flex-col lg:flex-row items-start gap-16">
//               {/* Left Side - Image */}
//               <div className="lg:w-1/2 relative">
//                 <div className="absolute -left-6 top-6 w-72 h-72 bg-[#7B61FF] opacity-20 rounded-full blur-3xl"></div>
//                 <div className="absolute left-24 -bottom-4 w-56 h-56 bg-[#7B61FF] opacity-15 rounded-full blur-3xl"></div>
//                 <div className="relative z-10">
//                   <div className="absolute -inset-4 bg-gradient-to-r from-[#7B61FF]/40 via-[#7B61FF]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
//                   <div className="relative">
//                     <div className="absolute -inset-1 bg-gradient-to-br from-[#7B61FF]/30 to-transparent rounded-2xl blur-md"></div>
//                     <img 
//                       alt="Healthcare Team" 
//                       className="relative rounded-2xl w-full border-4 border-white shadow-[0_0_40px_rgba(123,97,255,0.4),0_0_80px_rgba(123,97,255,0.2)] hover:shadow-[0_0_60px_rgba(123,97,255,0.6),0_0_100px_rgba(123,97,255,0.3)] transition-all duration-500 transform hover:scale-[1.02]" 
//                       src={simkuraLogo}
//                     />
//                     <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#7B61FF]/40 to-transparent rounded-tl-2xl"></div>
//                     <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#7B61FF]/40 to-transparent rounded-br-2xl"></div>
//                   </div>
//                   <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-gradient-to-r from-transparent via-[#7B61FF]/30 to-transparent blur-sm"></div>
//                 </div>
//               </div>

//               {/* Right Side - Content */}
//               <div className="lg:w-1/2 space-y-12 pt-4">
//                 <div>
//                   <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                     <span className="font-light">Who</span> <span className="text-[#7B61FF]">We Are</span>
//                   </h3>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     SimcuraRX Pvt. Ltd. is a professionally registered healthcare and IT company that combines medical expertise with modern technology to deliver accessible, reliable, and scalable solutions. We operate an integrated ecosystem...
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                     <span className="font-light">Why</span> <span className="text-[#7B61FF]">SimcuraRX</span>
//                   </h3>
//                   <ul className="text-gray-600 text-lg space-y-4">
//                     <li className="flex items-start">
//                       <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
//                       <span>Simple care delivery powered by precise tech solutions.</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
//                       <span>Trusted partnerships with verified healthcare providers and software firms.</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-[#7B61FF] text-2xl mr-4 mt-1">•</span>
//                       <span>End-to-end services: patient-facing apps, backend systems, and corporate healthcare programs.</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                     <span className="font-light">Meaning of</span> <span className="text-[#7B61FF]">Our Name</span>
//                   </h3>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     <span className="font-medium">Simple + Care.</span> <span className="font-medium">RX = Right Solution.</span> Together: <span className="font-bold text-gray-800">Simple Care. Right Solutions.</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== SECTION 3: CLYNIX APPLICATION SECTION ==================== */}
//       <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[500px] mx-auto overflow-hidden bg-white z-10">
//         <div className="relative z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          
//           <div className="text-center mb-8 sm:mb-12 md:mb-16">
//             <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-default border border-purple-200 hover:bg-gray-100 hover:border-gray-300">
//               <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
//               <h6 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 tracking-wide">
//                 OUR CLYNIX APPLICATION
//               </h6>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
//             <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[526px] h-auto lg:h-[188px] flex-shrink-0 mx-auto lg:mx-0">
//               <img 
//                 src={clynixLogo} 
//                 alt="Clynix Logo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             <div className="flex-1 w-full max-w-full lg:max-w-[603px] text-center lg:text-left">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-3">
//                 <b>Clynix:</b> <span className="whitespace-normal">Your Health, On Schedule.</span>
//               </h1>
//               <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
//                 Clynix is a smart healthcare companion designed to bridge the gap between patients and their medication needs. 
//                 By combining intuitive UI/UX design with essential medical services, Clynix ensures you never miss a dose or a refill.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
//                 <p className="text-sm sm:text-base text-gray-700 font-medium">Download from</p>
//                 <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
//                   <button className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleAppStoreClick}>
//                     <img src={appStoreBtn} alt="App Store" className="h-[38px] w-[130px] sm:h-[43px] sm:w-[146px] object-contain" />
//                   </button>
//                   <button className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleGooglePlayClick}>
//                     <img src={googlePlayBtn} alt="Google Play" className="h-[38px] w-[130px] sm:h-[43px] sm:w-[146px] object-contain" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== SECTION 4: OUR SERVICES SECTION ==================== */}
//       <div className="relative w-full bg-white py-1 sm:py-2 md:py-2 z-10 " >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div 
//             className="mx-auto text-center"
//             style={{
//               width: '655px',
//               maxWidth: '100%',
//               margin: '0 auto'
//             }}
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4 sm:mb-5">
//               Our Services
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
//               We deliver comprehensive IT solutions and digital services designed to streamline operations, 
//               enhance performance, and support scalable business growth.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ==================== SECTION 5: IT SOLUTIONS & CARDS SECTION ==================== */}
//       <div className="relative w-full bg-white py-12 sm:py-16 z-10">
//         <div 
//           className="max-w-[1330px] mx-auto px-4 sm:px-8"
//           style={{
//             background: 'linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%)',
//             borderRadius: '20px'
//           }}
//         >
//           <div className="text-center pt-10 pb-8">
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
//               IT Solutions
//             </h3>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
//             {servicesData.map((service, index) => (
//               <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ==================== SECTION 6: WHO WE PARTNER WITH SECTION ==================== */}
//       <div className="relative py-12 sm:py-16 z-10 bg-gradient-to-br from-white via-purple-50 to-purple-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <div className="inline-flex items-center justify-center gap-3 cursor-pointer group" onClick={() => navigate('/partnerships')}>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-0">Who We Partner With</h2>
//               <img src={arrowIcon} alt="arrow" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform duration-300" />
//             </div>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 mt-4">
//               We are building a collaborative network that spans the entire healthcare value chain.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {/* Card 1 - Established Companies */}
//             <div className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto" onClick={() => navigate('/partnerships')}>
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
//                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Established Companies</h3>
//               <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 Scale your operations with our enterprise-grade integrated API solutions. Seamlessly connect legacy systems with modern pharmaceutical workflows.
//               </p>
//               <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
//                 Learn More <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>

//             {/* Card 2 - Agile Startups */}
//             <div className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto" onClick={() => navigate('/partnerships')}>
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
//                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Agile Startups</h3>
//               <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 Accelerate your growth using our robust infrastructure. Focus on your unique value proposition while we handle the heavy lifting of compliance and logistics.
//               </p>
//               <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
//                 Learn More <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>

//             {/* Card 3 - Healthcare Providers */}
//             <div className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto md:col-span-2 lg:col-span-1" onClick={() => navigate('/partnerships')}>
//               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-5 shadow-md">
//                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Healthcare Providers</h3>
//               <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 Empower patient outcomes through seamless data integration and streamlined process flow. Empower your staff with smarter tools.
//               </p>
//               <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
//                 Learn More <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>
//           </div>

//           {/* Explore Now Button */}
//           <div className="text-center mt-12 sm:mt-16">
//             <button onClick={() => navigate('/partnerships')} className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
//               Explore Now
//               <img src={arrowIcon} alt="arrow" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ==================== SECTION 7: OUR TEAM MEMBERS SECTION ==================== */}
//       <div className="relative py-16 sm:py-20 bg-white z-10 overflow-hidden">
        
//         {/* Background decorative elements */}
//         <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           {/* Section Header with White Background and Gradient Text */}
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-block rounded-2xl px-8 py-4">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//                 <span className="bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-transparent">
//                   Our Team 
//                 </span>
//                 <span className="text-gray-900 ml-2">
//                   Members
//                 </span>
//               </h2>
//             </div>
//             <div className="w-20 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
//               A team of skilled professionals delivering innovative and scalable digital solutions.
//             </p>
//           </div>

//           {/* Team Members Carousel */}
//           <div className="relative">
//             {/* Cards Grid - Shows 3 cards at a time */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center transition-all duration-500">
//               {visibleCards.map((member) => (
//                 <div key={member.id} 
//                   className="group relative bg-gray-200 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//                   style={{
//                     width: '272.18px',
//                     height: '409.89px',
//                     background: 'rgb(224, 224, 224)'
//                   }}>
//                   {/* Full Card Image */}
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
                  
//                   {/* Content Overlay at Bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 text-center">
//                     <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
//                     <p className="text-purple-300 font-medium text-sm">{member.position}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Navigation Arrows - Centered vertically on right and left side */}
            
//             {/* Left Arrow - Previous */}
//             {currentIndex > 0 && (
//               <button 
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 w-[40px] h-[40px] bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 cursor-pointer group z-20"
//               >
//                 <svg className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//             )}
            
//             {/* Right Arrow - Next */}
//             {currentIndex + 3 < teamMembers.length && (
//               <button 
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 w-[40px] h-[40px] bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 cursor-pointer group z-20"
//               >
//                 <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             )}
            
//             {/* Dots Indicator */}
//             {teamMembers.length > 3 && (
//               <div className="flex justify-center gap-2 mt-8">
//                 {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentIndex(idx * 3)}
//                     className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                       Math.floor(currentIndex / 3) === idx
//                         ? 'bg-purple-600 w-6'
//                         : 'bg-gray-300 hover:bg-purple-400'
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>


//       {/* ==================== SECTION 8: FAQ SECTION ==================== */}
//       <div className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100 z-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently asked Questions</h2>
//             <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full"></div>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
//               Find quick answers to your questions about our integrated healthcare services, IT solutions, and how SimcuraRX supports your enterprise needs.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {/* FAQ 1 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//               <button onClick={() => { const answer = document.getElementById('faq-answer-1'); const icon = document.getElementById('faq-icon-1'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
//                 <span className="text-lg font-semibold text-gray-900">What does SimcuraRX do?</span>
//                 <svg id="faq-icon-1" className="w-5 h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//               </button>
//               <div id="faq-answer-1" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
//                 <p className="text-gray-600 leading-relaxed px-6">SimcuraRX provides integrated healthcare and IT solutions, including doctor consultations, medicine delivery, diagnostics, and custom healthcare software development.</p>
//               </div>
//             </div>

//             {/* FAQ 2 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//               <button onClick={() => { const answer = document.getElementById('faq-answer-2'); const icon = document.getElementById('faq-icon-2'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
//                 <span className="text-lg font-semibold text-gray-900">Are you legally registered?</span>
//                 <svg id="faq-icon-2" className="w-5 h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//               </button>
//               <div id="faq-answer-2" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
//                 <p className="text-gray-600 leading-relaxed px-6">Yes, SimcuraRX Pvt. Ltd. is a professionally registered company complying with all legal and healthcare regulations.</p>
//               </div>
//             </div>

//             {/* FAQ 3 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//               <button onClick={() => { const answer = document.getElementById('faq-answer-3'); const icon = document.getElementById('faq-icon-3'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
//                 <span className="text-lg font-semibold text-gray-900">How do I verify your registrations?</span>
//                 <svg id="faq-icon-3" className="w-5 h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//               </button>
//               <div id="faq-answer-3" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
//                 <p className="text-gray-600 leading-relaxed px-6">You can request our registration certificates and licenses through our contact form. We are transparent about our credentials.</p>
//               </div>
//             </div>

//             {/* FAQ 4 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//               <button onClick={() => { const answer = document.getElementById('faq-answer-4'); const icon = document.getElementById('faq-icon-4'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
//                 <span className="text-lg font-semibold text-gray-900">Do you provide B2B services?</span>
//                 <svg id="faq-icon-4" className="w-5 h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//               </button>
//               <div id="faq-answer-4" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
//                 <p className="text-gray-600 leading-relaxed px-6">Yes, we offer comprehensive B2B services including enterprise healthcare solutions, custom software development, and IT consulting.</p>
//               </div>
//             </div>

//             {/* FAQ 5 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
//               <button onClick={() => { const answer = document.getElementById('faq-answer-5'); const icon = document.getElementById('faq-icon-5'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
//                 <span className="text-lg font-semibold text-gray-900">Is my health data secure?</span>
//                 <svg id="faq-icon-5" className="w-5 h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//               </button>
//               <div id="faq-answer-5" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
//                 <p className="text-gray-600 leading-relaxed px-6">Absolutely. We use enterprise-grade encryption and follow strict data protection protocols to ensure your health information remains confidential and secure.</p>
//               </div>
//             </div>
//           </div>

//           {/* Still have questions? Section */}
//           <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-md">
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Book a call with our team to learn how SimcuraRx can help you change the way you manage your healthcare business forever.</p>
//             <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
//               Contact Us
//               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//         {/* ==================== SECTION 9: CONTACT US SECTION ==================== */}
//         <div className="relative py-16 sm:py-20 bg-white z-10 overflow-hidden">
        
//         {/* Colored Circles on Both Sides */}
//         {/* Left Side Circle */}
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>
//         <div className="absolute left-20 top-20 w-40 h-40 rounded-full bg-purple-400/15 blur-2xl pointer-events-none"></div>
        
//         {/* Right Side Circle */}
//         <div className="absolute right-0 bottom-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none"></div>
//         <div className="absolute right-600 top-40 w-48 h-48 rounded-full bg-purple-300/15 blur-2xl pointer-events-none"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
//             {/* Long Bar - Now at Top (Full Width Left to Right) */}
//             {/* <SimcuraBar /> */}

//             {/* Contact Us Header - Now in the position where long bar was */}
//             <div className="text-center mb-12">
            
//             </div>

//             <div className="flex flex-col lg:flex-row gap-12">
            
//             {/* Left Side - Contact Info */}
//             <div className="lg:w-1/2 space-y-6">
//                 {/* Contact Details */}
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">Contact Us</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                     We are committed to processing the information in order to contact you and talk about your project.
//                 </p>
//                 <div className="space-y-4">
//                 {/* Email */}
//                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
//                     <div className="w-12  rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     </div>
//                     <div>
//                     <p className="text-sm text-gray-500">Email</p>
//                     <p className="text-gray-800 font-medium">simcurarx@gmail.com</p>
//                     </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
//                     <div className="w-12 h-12  rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     </div>
//                     <div>
//                     <p className="text-sm text-gray-500">Address</p>
//                     <p className="text-gray-800 font-medium">Indrapalem, Kakinada, Andhra Pradesh 533006</p>
//                     </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
//                     <div className="w-12 h-12  rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     </div>
//                     <div>
//                     <p className="text-sm text-gray-500">Phone</p>
//                     <p className="text-gray-800 font-medium">+91 6300 778 241</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <div className="lg:w-1/2  bg-transparent rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
//                 <form className="space-y-5">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
//                     <input 
//                     type="text" 
//                     placeholder="Your full name" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                 </div>
                
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number *</label>
//                     <input 
//                     type="tel" 
//                     placeholder="+91 12345 67890" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                 </div>
                
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                     <input 
//                     type="email" 
//                     placeholder="your@email.com" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                 </div>
                
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Website *</label>
//                     <input 
//                     type="text" 
//                     placeholder="www.yourwebsite.com" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
//                     />
//                 </div>
                
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                     <textarea 
//                     rows={4} 
//                     placeholder="Tell us about your project..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
//                     ></textarea>
//                 </div>
                
//                 <button 
//                     type="submit"
//                     className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
//                 >
//                     Submit
//                 </button>
//                 </form>
//             </div>
//             </div>

          
//         </div>
//         </div>

//         {/* ==================== SECTION 10: FOOTER SECTION ==================== */}
//         <footer className="relative bg-white text-gray-700 pt-16 pb-8 z-10 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          
//           {/* Background decorative elements - subtle */}
//           <div className="absolute top-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl pointer-events-none"></div>
//           <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none"></div>
          
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
//             {/* Main Footer Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              
//               {/* Column 1 - Company Info */}
//               <div>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">Ashok Varma</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 text-gray-500 hover:text-purple-600 transition-colors">
//                     <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     <span className="text-sm">simcurarx@gmail.com</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-500 hover:text-purple-600 transition-colors">
//                     <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     <span className="text-sm">+91 6300 778 241</span>
//                   </div>
                  
//                   {/* Social Media Icons */}
//                   <div>
//                     <h3 className="text-lg font-semibold mb-3 text-gray-800">Follow Us</h3>
//                     <div className="flex gap-4">
//                       {/* Instagram */}
//                       <a 
//                         href="https://instagram.com" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
//                       >
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
//                         </svg>
//                       </a>
                      
//                       {/* Facebook */}
//                       <a 
//                         href="https://facebook.com" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
//                       >
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                         </svg>
//                       </a>
                      
//                       {/* LinkedIn */}
//                       <a 
//                         href="https://linkedin.com" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
//                       >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                       </svg>
//                       </a>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
              
//               {/* Column 2 - Quick Links */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">About</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <button 
//                       onClick={() => {
//                         const element = document.getElementById('contact');
//                         if (element) element.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       Contact us
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => {
//                         const element = document.getElementById('about');
//                         if (element) element.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       About us
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => {
//                         const element = document.getElementById('faq');
//                         if (element) element.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       FAQ's
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => alert('Terms of services page coming soon!')}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       Terms of services
//                     </button>
//                   </li>
//                 </ul>
//               </div>

//               {/* Column 3 - Services */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <button 
//                       onClick={() => alert('Website & Mobile App Development details coming soon!')}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       Website & Mobile App Development
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => alert('Digital Marketing details coming soon!')}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       Digital Marketing
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => alert('E-commerce solutions details coming soon!')}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       E-commerce solutions
//                     </button>
//                   </li>
//                   <li>
//                     <button 
//                       onClick={() => alert('Custom software development details coming soon!')}
//                       className="text-gray-500 hover:text-purple-600 transition-colors text-sm cursor-pointer"
//                     >
//                       Custom software development
//                     </button>
//                   </li>
//                 </ul>
//               </div>
              
//              {/* Column 4 - Download App & Social Media */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">Download App</h3>
                
//                 {/* App Store & Google Play Buttons - Side by Side */}
//                 <div className="flex flex-row gap-3 mb-6">
//                   {/* App Store Button */}
//                   <button 
//                     onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
//                     className="cursor-pointer hover:opacity-80 transition-opacity flex-1"
//                   >
//                     <img 
//                       src={appStoreBtn} 
//                       alt="Download on the App Store" 
//                       className="h-[46px] w-full max-w-[140px] object-contain"
//                     />
//                   </button>
                  
//                   {/* Google Play Button */}
//                   <button 
//                     onClick={() => window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank')}
//                     className="cursor-pointer hover:opacity-80 transition-opacity flex-1"
//                   >
//                     <img 
//                       src={googlePlayBtn} 
//                       alt="Get it on Google Play" 
//                       className="h-[46px] w-full max-w-[140px] object-contain"
//                     />
//                   </button>
//                 </div>
                
//                 {/* Scanner Image */}
//                 <div className="flex justify-center mt-4">
//                   <img 
//                     src={scannerImage} 
//                     alt="Scan QR Code" 
//                     className="w-[69px] h-[69px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <p className="text-center text-gray-400 text-xs mt-2">Scan to download</p>
//               </div>
//             </div>
            
//             {/* Certifications - Horizontal Row */}
//             <div className="relative mb-4" >
//               <div className="flex flex-nowrap items-center justify-center gap-6 w-full h-full">
//                 <span className="text-gray-500 text-sm">Certifications & Verifications</span>
//                 <div className="w-px h-5 "></div>
//                 <div className="flex items-center gap-2">
//                   <img 
//                     src={legallyRegisteredIcon} 
//                     alt="checkmark"
//                     className="w-5 h-5"
//                   />
//                   <span className="text-gray-600 text-sm">Legally Registered</span>
//                 </div>
//                 <div className="w-px h-5 "></div>
//                 <div className="flex items-center gap-2">
//                   <img 
//                     src={nabhAcceptedIcon} 
//                     alt="checkmark"
//                     className="w-5 h-5"
//                   />
//                   <span className="text-gray-600 text-sm">Accepted: NABH</span>
//                 </div>

//                 <div className="w-px h-5 "></div>
//                 <div className="flex items-center gap-2">
//                   <img 
//                     src={CertfiedIcon} 
//                     alt="checkmark"
//                     className="w-5 h-5"
//                   />
//                   <span className="text-gray-600 text-sm">Accepted: NABH</span>
//                 </div>
//               </div>
//             </div>

          
            
//             {/* Bottom Bar - Copyright with Left and Right alignment */}
//             <div className="border-t border-gray-200 pt-4">
//               <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
//                 <p className="text-gray-400 text-sm">
//                   Copyright © July 2025
//                 </p>
//                 <p className="text-gray-400 text-sm">
//                   All rights reserved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//     </div>
//   );
// };

// export default HomePage;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

import clynixLogo from '../assets/Clynix-Logo.png'; 
import appStoreBtn from '../assets/App_Store_btn.png'; 
import googlePlayBtn from '../assets/PlayStore_btn.png'; 
import scannerImage from '../assets/scannerImage.png';
import headerLogo from '../assets/headerlogo.png';
import simkuraLogo from '../assets/simkuralogo.png';

// Import your card icons from assets
import websiteIcon from '../assets/Website.png';
import mobileIcon from '../assets/Digital.png';
import digitalIcon from '../assets/Digital.png';
import ecommerceIcon from '../assets/E-Commerce.png';
import arrowIcon from '../assets/arrow.png';

// Team Images 
import teamImage1 from '../assets/team/teamImage1.png';
import teamImage2 from '../assets/team/teamImage2.png';
import teamImage3 from '../assets/team/teamImage3.png';
import teamImage4 from '../assets/team/teamImage3.png';
import teamImage5 from '../assets/team/teamImage3.png';
import teamImage6 from '../assets/team/teamImage3.png';

//Certificagtions Icons
import legallyRegisteredIcon from '../assets/FooterIcons/legallyRegistered.png';
import nabhAcceptedIcon from '../assets/FooterIcons/nabhAccepted.png';
import CertfiedIcon from '../assets/FooterIcons/CertfiedIcon.png';

// Modern Card Component with cut-out curve and overlapping icon
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative group w-full">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 pt-10 sm:pt-14 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-transparent">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            <path d="M64 0H0V64C0 64 0 0 64 0Z" fill="white" />
          </svg>
        </div>
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20">
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <img src={icon} alt={title} className="w-5 h-5 sm:w-7 sm:h-7 object-contain brightness-0 invert" />
          </div>
        </div>
        <div className="relative z-10 flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
            {description}
          </p>
          <button className="text-purple-600 font-semibold transition-all duration-200 inline-flex items-center gap-1 text-xs sm:text-sm group/btn">
            Read More 
            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex , setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Ashok Varma',
      position: 'Founder & Chairman',
      image: teamImage1
    },
    {
      id: 2,
      name: 'Priyanka Varma',
      position: 'Managing Director',
      image: teamImage2
    },
    {
      id: 3,
      name: 'Vijay Kumar',
      position: 'Admin & Graphic Designer',
      image: teamImage3
    },
    {
      id: 4,
      name: 'Rohit Kumar',
      position: 'Senior Developer',
      image: teamImage4
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      position: 'Marketing Head',
      image: teamImage5
    },
    {
      id: 6,
      name: 'Anil Kumar',
      position: 'Project Manager',
      image: teamImage6
    }
  ];

  const [cardsPerView, setCardsPerView] = useState(3);
const autoScrollIntervalRef = useRef(null);

// Add this useEffect for responsive cards per view
useEffect(() => {
  const updateCardsPerView = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerView(3);
    } else if (window.innerWidth >= 768) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };
  
  updateCardsPerView();
  window.addEventListener('resize', updateCardsPerView);
  
  return () => window.removeEventListener('resize', updateCardsPerView);
}, []);

// Add this useEffect for auto-scroll
useEffect(() => {
  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + cardsPerView < teamMembers.length) {
          return prevIndex + cardsPerView;
        } else {
          return 0;
        }
      });
    }, 5000); // Auto-scroll every 5 seconds
  };
  
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };
  
  startAutoScroll();
  
  // Stop auto-scroll when user interacts
  const handleUserInteraction = () => {
    stopAutoScroll();
    startAutoScroll();
  };
  
  // Cleanup on unmount
  return () => {
    stopAutoScroll();
  };
}, [cardsPerView, teamMembers.length]);

// Update the nextSlide and prevSlide functions
const nextSlide = () => {
  setCurrentIndex((prevIndex) => {
    if (prevIndex + cardsPerView < teamMembers.length) {
      return prevIndex + cardsPerView;
    }
    return prevIndex;
  });
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => {
    if (prevIndex - cardsPerView >= 0) {
      return prevIndex - cardsPerView;
    }
    return prevIndex;
  });
};

// Update visible cards calculation
const visibleCards = teamMembers.slice(currentIndex, currentIndex + cardsPerView);

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
    <div 
      className="min-h-screen relative overflow-x-hidden pt-[70px] sm:pt-[75px] md:pt-[85px] lg:pt-[100px]"
      style={{ 
        background: 'linear-gradient(189.07deg, rgb(202, 181, 248) 6.88%, rgba(228, 216, 255, 0) 48.19%, rgba(125, 75, 238, 0.85) 103.26%)'
      }}
    >
      
      {/* Background Blur Circles - Made responsive */}
      <div 
        className="absolute rounded-full pointer-events-none left-[-598px] opacity-20 hidden lg:block"
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
        className="absolute rounded-full pointer-events-none opacity-20 hidden lg:block"
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

      {/* ==================== SECTION 1: HERO SECTION ==================== */}
      <section id="home">
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-[1400px] rounded-[24px] sm:rounded-[32px] bg-white/10 backdrop-blur-md shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 pb-10 sm:pb-16 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-16 sm:mt-20 md:mt-24 gap-8 sm:gap-12">
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#24005A] leading-tight">
                  SimcuraRx <br />Where care <br />meets code
                </h1>
                <p className="mt-4 sm:mt-6 text-[#4A2C7A] text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Integrated healthcare and IT solutions: doctor consultations, medicine delivery, diagnostics, and custom healthcare software all in one trusted platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
                  <button className="bg-gradient-to-r from-[#7C4DFF] to-[#5B2EFF] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-lg text-sm sm:text-base justify-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                    </svg>
                    Download app
                  </button>
                  <button className="border border-[#7C4DFF] text-[#5B2EFF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
                    Fast. Secure. Verified.
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center items-center mt-8 md:mt-0">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-[#4A166C] to-[#1B0030] flex items-center justify-center shadow-[0_0_140px_rgba(124,77,255,0.55)]">
                  <img alt="Simkura Logo" className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] object-contain mt-6 sm:mt-8 md:mt-10" src={headerLogo} />
                </div>
                <div className="absolute top-10 left-0 sm:top-20 sm:left-6 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#8B5CF6] text-base sm:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
                <div className="absolute top-2 right-4 sm:top-8 sm:right-20 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#7C4DFF] text-sm sm:text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#5B2EFF] text-base sm:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: ABOUT US SECTION ==================== */}
      <section id="about">
        <div className="w-full bg-white py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7B61FF] mb-4 sm:mb-6">About Us</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                SimcuraRX delivers trusted medical expertise and modern tech to create integrated, reliable healthcare. 
                We bridge patient care and enterprise IT—<span className="font-semibold">Simple Care. Right Solutions.</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="absolute -left-6 top-6 w-48 h-48 sm:w-72 sm:h-72 bg-[#7B61FF] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute left-24 -bottom-4 w-40 h-40 sm:w-56 sm:h-56 bg-[#7B61FF] opacity-15 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#7B61FF]/40 via-[#7B61FF]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#7B61FF]/30 to-transparent rounded-2xl blur-md"></div>
                    <img 
                      alt="Healthcare Team" 
                      className="relative rounded-2xl w-full border-4 border-white shadow-[0_0_40px_rgba(123,97,255,0.4),0_0_80px_rgba(123,97,255,0.2)] hover:shadow-[0_0_60px_rgba(123,97,255,0.6),0_0_100px_rgba(123,97,255,0.3)] transition-all duration-500 transform hover:scale-[1.02]" 
                      src={simkuraLogo}
                    />
                    <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-[#7B61FF]/40 to-transparent rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-tl from-[#7B61FF]/40 to-transparent rounded-br-2xl"></div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-gradient-to-r from-transparent via-[#7B61FF]/30 to-transparent blur-sm"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 space-y-8 sm:space-y-10 md:space-y-12 pt-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    <span className="font-light">Who</span> <span className="text-[#7B61FF]">We Are</span>
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    SimcuraRX Pvt. Ltd. is a professionally registered healthcare and IT company that combines medical expertise with modern technology to deliver accessible, reliable, and scalable solutions. We operate an integrated ecosystem...
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    <span className="font-light">Why</span> <span className="text-[#7B61FF]">SimcuraRX</span>
                  </h3>
                  <ul className="text-gray-600 text-base sm:text-lg space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-xl sm:text-2xl mr-3 sm:mr-4 mt-1">•</span>
                      <span>Simple care delivery powered by precise tech solutions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-xl sm:text-2xl mr-3 sm:mr-4 mt-1">•</span>
                      <span>Trusted partnerships with verified healthcare providers and software firms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7B61FF] text-xl sm:text-2xl mr-3 sm:mr-4 mt-1">•</span>
                      <span>End-to-end services: patient-facing apps, backend systems, and corporate healthcare programs.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    <span className="font-light">Meaning of</span> <span className="text-[#7B61FF]">Our Name</span>
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    <span className="font-medium">Simple + Care.</span> <span className="font-medium">RX = Right Solution.</span> Together: <span className="font-bold text-gray-800">Simple Care. Right Solutions.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: CLYNIX APPLICATION SECTION ==================== */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] mx-auto overflow-hidden bg-white z-10">
        <div className="relative z-20 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-default border border-purple-200 hover:bg-gray-100 hover:border-gray-300">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></span>
              <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-purple-600 tracking-wide">
                OUR CLYNIX APPLICATION
              </h6>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[526px] h-auto lg:h-[188px] flex-shrink-0 mx-auto lg:mx-0">
              <img 
                src={clynixLogo} 
                alt="Clynix Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 w-full max-w-full lg:max-w-[603px] text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-3">
                <b>Clynix:</b> <span className="whitespace-normal">Your Health, On Schedule.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                Clynix is a smart healthcare companion designed to bridge the gap between patients and their medication needs. 
                By combining intuitive UI/UX design with essential medical services, Clynix ensures you never miss a dose or a refill.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <p className="text-sm sm:text-base text-gray-700 font-medium">Download from</p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <button className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleAppStoreClick}>
                    <img src={appStoreBtn} alt="App Store" className="h-[34px] w-[120px] sm:h-[38px] sm:w-[130px] md:h-[43px] md:w-[146px] object-contain" />
                  </button>
                  <button className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleGooglePlayClick}>
                    <img src={googlePlayBtn} alt="Google Play" className="h-[34px] w-[120px] sm:h-[38px] sm:w-[130px] md:h-[43px] md:w-[146px] object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 4: OUR SERVICES SECTION ==================== */}
      <div className="relative w-full bg-white py-2 sm:py-2 md:py-2 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center w-full sm:w-[500px] md:w-[655px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-3 sm:mb-4 md:mb-5">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              We deliver comprehensive IT solutions and digital services designed to streamline operations, 
              enhance performance, and support scalable business growth.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 5: IT SOLUTIONS & CARDS SECTION ==================== */}
      <div className="relative w-full bg-white py-8 sm:py-12 md:py-16 z-10">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              IT Solutions
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 pb-6 sm:pb-8 md:pb-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>

      {/* ==================== SECTION 6: WHO WE PARTNER WITH SECTION ==================== */}
      <div className="relative py-10 sm:py-12 md:py-16 z-10 bg-gradient-to-br from-white via-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 cursor-pointer group" onClick={() => navigate('/partnerships')}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-0">Who We Partner With</h2>
              <img src={arrowIcon} alt="arrow" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 mt-3 sm:mt-4">
              We are building a collaborative network that spans the entire healthcare value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {/* Card 1 - Established Companies */}
            <div className="rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto" onClick={() => navigate('/partnerships')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Established Companies</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                Scale your operations with our enterprise-grade integrated API solutions. Seamlessly connect legacy systems with modern pharmaceutical workflows.
              </p>
              <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
                Learn More <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Card 2 - Agile Startups */}
            <div className="rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto" onClick={() => navigate('/partnerships')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Agile Startups</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                Accelerate your growth using our robust infrastructure. Focus on your unique value proposition while we handle the heavy lifting of compliance and logistics.
              </p>
              <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
                Learn More <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Card 3 - Healthcare Providers */}
            <div className="rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/30 w-full mx-auto md:col-span-2 lg:col-span-1" onClick={() => navigate('/partnerships')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Healthcare Providers</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                Empower patient outcomes through seamless data integration and streamlined process flow. Empower your staff with smarter tools.
              </p>
              <button onClick={(e) => { e.stopPropagation(); navigate('/partnerships'); }} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
                Learn More <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Explore Now Button */}
          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <button onClick={() => navigate('/partnerships')} className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group text-sm sm:text-base">
              Explore Now
              <img src={arrowIcon} alt="arrow" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 7: OUR TEAM MEMBERS SECTION ==================== */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-white z-10 overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block rounded-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-transparent">
                  Our Team 
                </span>
                <span className="text-gray-900 ml-1 sm:ml-2">
                  Members
                </span>
              </h2>
            </div>
            <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              A team of skilled professionals delivering innovative and scalable digital solutions.
            </p>
          </div>

          {/* Team Members Auto-Scroll Carousel */}
          <div className="relative">
            {/* Cards Grid - Dynamic based on screen size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 justify-items-center transition-all duration-500">
              {visibleCards.map((member) => (
                <div key={member.id} 
                  className="group relative bg-gray-200 rounded-2xl sm:rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mx-auto w-full"
                  style={{
                    maxWidth: '100%',
                    width: '100%',
                    maxWidth: '320px',
                    height: 'auto',
                    aspectRatio: '272.18/409.89',
                    background: 'rgb(224, 224, 224)'
                  }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Content Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-4 text-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{member.name}</h3>
                    <p className="text-purple-300 font-medium text-xs sm:text-sm">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 sm:-ml-4 lg:-ml-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 cursor-pointer group z-20"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7 7-7 7" />
                </svg>
              </button>
            )}
            
            {currentIndex + cardsPerView < teamMembers.length && (
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 sm:-mr-4 lg:-mr-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 transition-all duration-300 cursor-pointer group z-20"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            
            {/* Dots Indicator */}
            {teamMembers.length > cardsPerView && (
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                {Array.from({ length: Math.ceil(teamMembers.length / cardsPerView) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * cardsPerView)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / cardsPerView) === idx
                        ? 'bg-purple-600 w-4 sm:w-6'
                        : 'bg-gray-300 hover:bg-purple-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ==================== SECTION 8: FAQ SECTION ==================== */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently asked Questions</h2>
            <div className="w-16 h-0.5 sm:w-20 sm:h-1 bg-purple-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Find quick answers to your questions about our integrated healthcare services, IT solutions, and how SimcuraRX supports your enterprise needs.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button onClick={() => { const answer = document.getElementById('faq-answer-1'); const icon = document.getElementById('faq-icon-1'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
                <span className="text-base sm:text-lg font-semibold text-gray-900">What does SimcuraRX do?</span>
                <svg id="faq-icon-1" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-answer-1" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed px-4 sm:px-6 text-sm sm:text-base">SimcuraRX provides integrated healthcare and IT solutions, including doctor consultations, medicine delivery, diagnostics, and custom healthcare software development.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button onClick={() => { const answer = document.getElementById('faq-answer-2'); const icon = document.getElementById('faq-icon-2'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
                <span className="text-base sm:text-lg font-semibold text-gray-900">Are you legally registered?</span>
                <svg id="faq-icon-2" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-answer-2" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed px-4 sm:px-6 text-sm sm:text-base">Yes, SimcuraRX Pvt. Ltd. is a professionally registered company complying with all legal and healthcare regulations.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button onClick={() => { const answer = document.getElementById('faq-answer-3'); const icon = document.getElementById('faq-icon-3'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
                <span className="text-base sm:text-lg font-semibold text-gray-900">How do I verify your registrations?</span>
                <svg id="faq-icon-3" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-answer-3" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed px-4 sm:px-6 text-sm sm:text-base">You can request our registration certificates and licenses through our contact form. We are transparent about our credentials.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button onClick={() => { const answer = document.getElementById('faq-answer-4'); const icon = document.getElementById('faq-icon-4'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
                <span className="text-base sm:text-lg font-semibold text-gray-900">Do you provide B2B services?</span>
                <svg id="faq-icon-4" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-answer-4" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed px-4 sm:px-6 text-sm sm:text-base">Yes, we offer comprehensive B2B services including enterprise healthcare solutions, custom software development, and IT consulting.</p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button onClick={() => { const answer = document.getElementById('faq-answer-5'); const icon = document.getElementById('faq-icon-5'); if (answer.classList.contains('max-h-0')) { answer.classList.remove('max-h-0', 'opacity-0'); answer.classList.add('max-h-96', 'opacity-100', 'pb-4'); icon.classList.add('rotate-180'); } else { answer.classList.add('max-h-0', 'opacity-0'); answer.classList.remove('max-h-96', 'opacity-100', 'pb-4'); icon.classList.remove('rotate-180'); } }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors">
                <span className="text-base sm:text-lg font-semibold text-gray-900">Is my health data secure?</span>
                <svg id="faq-icon-5" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-answer-5" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed px-4 sm:px-6 text-sm sm:text-base">Absolutely. We use enterprise-grade encryption and follow strict data protection protocols to ensure your health information remains confidential and secure.</p>
              </div>
            </div>
          </div>

          {/* Still have questions? Section */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">Book a call with our team to learn how SimcuraRx can help you change the way you manage your healthcare business forever.</p>
            <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group text-sm sm:text-base">
              Contact Us
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 9: CONTACT US SECTION ==================== */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-white z-10 overflow-hidden">
        
        {/* Colored Circles on Both Sides - hidden on mobile */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>
        <div className="absolute left-10 sm:left-20 top-10 sm:top-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-purple-400/15 blur-2xl pointer-events-none"></div>
        
        <div className="absolute right-0 bottom-10 sm:bottom-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none"></div>
        <div className="absolute right-20 sm:right-600 top-20 sm:top-40 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-purple-300/15 blur-2xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl text-sm sm:text-base">
                We are committed to processing the information in order to contact you and talk about your project.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">simcurarx@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Indrapalem, Kakinada, Andhra Pradesh 533006</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">+91 6300 778 241</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-1/2 bg-transparent rounded-2xl shadow-xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100">
              <form className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Mobile number *</label>
                  <input 
                    type="tel" 
                    placeholder="+91 12345 67890" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email *</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Website *</label>
                  <input 
                    type="text" 
                    placeholder="www.yourwebsite.com" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Message *</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 10: FOOTER SECTION ==================== */}
      <footer className="relative bg-white text-gray-700 pt-12 sm:pt-16 pb-6 sm:pb-8 z-10 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
  
  <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-purple-50 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Main Footer Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-8">
      
      {/* Column 1 - Company Info */}
      <div>
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Ashok Varma</h3>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-purple-600 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs sm:text-sm break-all">simcurarx@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-purple-600 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs sm:text-sm">+91 6300 778 241</span>
          </div>
          
          {/* Social Media Icons */}
          <div className="pt-2 sm:pt-3">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border border-white flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Column 2 - Quick Links */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">About</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Contact us
            </button>
          </li>
          <li>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              About us
            </button>
          </li>
          <li>
            <button 
              onClick={() => {
                const element = document.getElementById('faq');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              FAQ's
            </button>
          </li>
          <li>
            <button 
              onClick={() => alert('Terms of services page coming soon!')}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Terms of services
            </button>
          </li>
        </ul>
      </div>

      {/* Column 3 - Services */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">Services</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <button 
              onClick={() => alert('Website & Mobile App Development details coming soon!')}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Website & Mobile App Development
            </button>
          </li>
          <li>
            <button 
              onClick={() => alert('Digital Marketing details coming soon!')}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Digital Marketing
            </button>
          </li>
          <li>
            <button 
              onClick={() => alert('E-commerce solutions details coming soon!')}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              E-commerce solutions
            </button>
          </li>
          <li>
            <button 
              onClick={() => alert('Custom software development details coming soon!')}
              className="text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Custom software development
            </button>
          </li>
        </ul>
      </div>
      
      {/* Column 4 - Download App & Social Media */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">Download App</h3>
        
        <div className="flex flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button 
            onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
            className="cursor-pointer hover:opacity-80 transition-opacity flex-1"
          >
            <img 
              src={appStoreBtn} 
              alt="Download on the App Store" 
              className="h-10 sm:h-[46px] w-full max-w-[120px] sm:max-w-[140px] object-contain"
            />
          </button>
          
          <button 
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank')}
            className="cursor-pointer hover:opacity-80 transition-opacity flex-1"
          >
            <img 
              src={googlePlayBtn} 
              alt="Get it on Google Play" 
              className="h-10 sm:h-[46px] w-full max-w-[120px] sm:max-w-[140px] object-contain"
            />
          </button>
        </div>
        
        <div className="flex justify-center mt-3 sm:mt-4">
          <img 
            src={scannerImage} 
            alt="Scan QR Code" 
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[69px] md:h-[69px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-1 sm:mt-2">Scan to download</p>
      </div>
    </div>
    
    {/* Certifications - Premium Horizontal Row (No Scrollbar) */}
    <div className="relative mb-6 sm:mb-8 pt-6 sm:pt-8">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 rounded-full"></div>
      
      {/* Certifications Container - Responsive wrapping, no horizontal scroll */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
        
        {/* Label */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-500 text-xs sm:text-sm font-medium">Certifications & Verifications</span>
        </div>
        
        {/* Separator - hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
        
        {/* Certification 1 */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-default">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img 
              src={legallyRegisteredIcon} 
              alt="checkmark"
              className="w-3.5 h-3.5"
            />
          </div>
          <span className="text-gray-600 text-xs sm:text-sm">Legally Registered</span>
        </div>
        
        {/* Separator - hidden on mobile */}
        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
        
        {/* Certification 2 */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-default">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img 
              src={nabhAcceptedIcon} 
              alt="checkmark"
              className="w-3.5 h-3.5"
            />
          </div>
          <span className="text-gray-600 text-xs sm:text-sm">Accepted: NABH</span>
        </div>
        
        {/* Separator - hidden on mobile */}
        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
        
        {/* Certification 3 */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-default">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img 
              src={CertfiedIcon} 
              alt="checkmark"
              className="w-3.5 h-3.5"
            />
          </div>
          <span className="text-gray-600 text-xs sm:text-sm">Certified</span>
        </div>
        
        {/* Mobile separators - between items on same line */}
        <div className="sm:hidden w-px h-4 bg-gray-200"></div>
        <div className="sm:hidden w-px h-4 bg-gray-200"></div>
      </div>
      
      {/* Optional: Add a subtle shadow line at bottom */}
      <div className="mt-4 sm:mt-5 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  
    {/* Bottom Bar - Copyright */}
    <div className="border-t border-gray-200 pt-4 sm:pt-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-400 text-xs sm:text-sm">
          Copyright © July 2025
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          All rights reserved
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HomePage;
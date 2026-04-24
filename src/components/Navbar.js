
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Partnerships', href: '/partnerships' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Contact us', href: '/contact' },
//   ];

//   useEffect(() => {
//     const currentPath = location.pathname;
//     if (currentPath === '/partnerships') {
//       setActiveLink('Partnerships');
//     } else if (currentPath === '/') {
//       setActiveLink('Home');
//     } else if (currentPath === '/about') {
//       setActiveLink('About');
//     } else if (currentPath === '/services') {
//       setActiveLink('Services');
//     } else if (currentPath === '/careers') {
//       setActiveLink('Careers');
//     } else if (currentPath === '/contact') {
//       setActiveLink('Contact us');
//     } else {
//       setActiveLink('');
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileMenuOpen]);

//   const handleNavClick = (linkName, href, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     setIsMobileMenuOpen(false);
//     navigate(href);
//   };

//   const handleDownload = (e) => {
//     e.preventDefault();
//     window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank');
//   };

//   const handleClynixApp = (e) => {
//     e.preventDefault();
//     navigate('/clynix');
//   };

//   return (
//     <>
//       {/* Floating Navbar - No background, transparent, only the bar has background */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4">
//           <nav 
//             className={`w-full transition-all duration-500 ease-in-out mx-auto ${
//               scrolled ? 'shadow-2xl' : 'shadow-lg'
//             }`}
//             style={{
//               maxWidth: 'calc(100% - 2rem)',
//               background: scrolled 
//                 ? 'rgba(255, 255, 255, 0.95)' 
//                 : 'rgba(255, 255, 255, 0.88)',
//               backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
//               WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
//               borderRadius: scrolled ? '50px' : '80px',
//               boxShadow: scrolled 
//                 ? '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset' 
//                 : '0px 4px 23.3px 0px rgba(0, 0, 0, 0.08)',
//               height: scrolled ? '60px' : '70px',
//               display: 'flex',
//               alignItems: 'center',
//               border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : 'none'
//             }}
//           >
//             <div className="w-full px-3 sm:px-5 md:px-6">
//               <div className="flex justify-between items-center">
                
//                 <div className="flex-shrink-0 flex items-center">
//                   <a 
//                     href="/" 
//                     className="flex items-center group"
//                     onClick={(e) => handleNavClick('Home', '/', e)}
//                   >
//                     <img 
//                       src={logo} 
//                       alt="Simcura" 
//                       className={`transition-all duration-500 ${
//                         scrolled 
//                           ? 'h-10 sm:h-11 md:h-12' 
//                           : 'h-12 sm:h-14 md:h-16'
//                       } w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
//                     />
//                   </a>
//                 </div>

//                 <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
//                   {navLinks.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       onClick={(e) => handleNavClick(link.name, link.href, e)}
//                       className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
//                         activeLink === link.name
//                           ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
//                           : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
//                       }`}
//                     >
//                       {link.name}
//                     </a>
//                   ))}
//                 </div>

//                 <div className="hidden lg:flex lg:items-center lg:space-x-3">
//                   <button
//                     onClick={() => navigate('/clynix')} 
//                     className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 border border-white/50'
//                         : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
//                     }`}
//                   >
//                     Clynix App
//                   </button>
                  
//                   <button
//                     onClick={handleDownload}
//                     className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 shadow-md'
//                         : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
//                     }`}
//                   >
//                     Download
//                   </button>
//                 </div>

//                 <div className="lg:hidden flex items-center">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 backdrop-blur-sm'
//                         : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
//                     }`}
//                   >
//                     {!isMobileMenuOpen ? (
//                       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                       </svg>
//                     ) : (
//                       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Menu - Same as before */}
//       <div 
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'visible' : 'invisible'
//         }`}
//       >
//         <div 
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             background: 'rgba(0, 0, 0, 0.3)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)'
//           }}
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
        
//         <div 
//           className={`absolute top-0 left-0 bottom-0 w-4/5 max-w-sm transition-transform duration-300 ease-out ${
//             isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//           style={{
//             zIndex: 50,
//             background: 'rgba(255, 255, 255, 0.9)',
//             backdropFilter: 'blur(16px)',
//             WebkitBackdropFilter: 'blur(16px)',
//             boxShadow: '4px 0 32px rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <div className="flex justify-between items-center p-4 border-b border-white/30">
//             <img 
//               src={logo} 
//               alt="Simcura" 
//               className="h-10 w-auto object-contain"
//             />
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 transition-colors"
//             >
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="flex flex-col p-4 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(link.name, link.href, e)}
//                 className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
//                   activeLink === link.name
//                     ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
//                     : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="pt-4 space-y-3">
//               <button
//                 onClick={handleClynixApp}
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white/60 backdrop-blur-sm text-purple-600 border border-white/50 hover:bg-white/80 cursor-pointer"
//               >
//                 Clynix App
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 cursor-pointer"
//               >
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NO SPACER DIV - Navbar floats over content */}
//     </>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Partnerships', href: '/partnerships' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Contact us', href: '/contact' },
//   ];

//   useEffect(() => {
//     const currentPath = location.pathname;
//     if (currentPath === '/partnerships') {
//       setActiveLink('Partnerships');
//     } else if (currentPath === '/') {
//       setActiveLink('Home');
//     } else if (currentPath === '/about') {
//       setActiveLink('About');
//     } else if (currentPath === '/services') {
//       setActiveLink('Services');
//     } else if (currentPath === '/careers') {
//       setActiveLink('Careers');
//     } else if (currentPath === '/contact') {
//       setActiveLink('Contact us');
//     } else {
//       setActiveLink('');
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileMenuOpen]);

//   const handleNavClick = (linkName, href, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     setIsMobileMenuOpen(false);
//     navigate(href);
//   };

//   const handleDownload = (e) => {
//     e.preventDefault();
//     window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank');
//   };

//   const handleClynixApp = (e) => {
//     e.preventDefault();
//     navigate('/clynix');
//   };

//   return (
//     <>
//       {/* Floating Navbar - DISAPPEARS COMPLETELY when mobile menu is open */}
//       <div 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//           isMobileMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
//         }`}
//       >
//         <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4">
//           <nav 
//             className={`w-full transition-all duration-500 ease-in-out mx-auto ${
//               scrolled ? 'shadow-2xl' : 'shadow-lg'
//             }`}
//             style={{
//               maxWidth: 'calc(100% - 2rem)',
//               background: scrolled 
//                 ? 'rgba(255, 255, 255, 0.95)' 
//                 : 'rgba(255, 255, 255, 0.88)',
//               backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
//               WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
//               borderRadius: scrolled ? '50px' : '80px',
//               boxShadow: scrolled 
//                 ? '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset' 
//                 : '0px 4px 23.3px 0px rgba(0, 0, 0, 0.08)',
//               height: scrolled ? '60px' : '70px',
//               display: 'flex',
//               alignItems: 'center',
//               border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : 'none'
//             }}
//           >
//             <div className="w-full px-3 sm:px-5 md:px-6">
//               <div className="flex justify-between items-center">
                
//                 <div className="flex-shrink-0 flex items-center">
//                   <a 
//                     href="/" 
//                     className="flex items-center group"
//                     onClick={(e) => handleNavClick('Home', '/', e)}
//                   >
//                     <img 
//                       src={logo} 
//                       alt="Simcura" 
//                       className={`transition-all duration-500 ${
//                         scrolled 
//                           ? 'h-10 sm:h-11 md:h-12' 
//                           : 'h-12 sm:h-14 md:h-16'
//                       } w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
//                     />
//                   </a>
//                 </div>

//                 <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
//                   {navLinks.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       onClick={(e) => handleNavClick(link.name, link.href, e)}
//                       className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
//                         activeLink === link.name
//                           ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
//                           : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
//                       }`}
//                     >
//                       {link.name}
//                     </a>
//                   ))}
//                 </div>

//                 <div className="hidden lg:flex lg:items-center lg:space-x-3">
//                   <button
//                     onClick={() => navigate('/clynix')} 
//                     className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 border border-white/50'
//                         : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
//                     }`}
//                   >
//                     Clynix App
//                   </button>
                  
//                   <button
//                     onClick={handleDownload}
//                     className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 shadow-md'
//                         : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
//                     }`}
//                   >
//                     Download
//                   </button>
//                 </div>

//                 {/* Mobile Menu Button - Only visible when menu is closed */}
//                 <div className="lg:hidden flex items-center">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(true)}
//                     className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
//                       scrolled
//                         ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 backdrop-blur-sm'
//                         : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
//                     }`}
//                   >
//                     <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Sidebar Menu - Opens from RIGHT and Navbar disappears */}
//       <div 
//         className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'visible' : 'invisible'
//         }`}
//       >
//         {/* Backdrop */}
//         <div 
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             background: 'rgba(0, 0, 0, 0.5)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)'
//           }}
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
        
//         {/* Sidebar Panel - Slides from RIGHT */}
//         <div 
//           className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm transition-transform duration-300 ease-out ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//           style={{
//             zIndex: 101,
//             background: 'rgba(255, 255, 255, 0.98)',
//             backdropFilter: 'blur(20px)',
//             WebkitBackdropFilter: 'blur(20px)',
//             boxShadow: '-4px 0 32px rgba(0, 0, 0, 0.2)'
//           }}
//         >
//           <div className="flex flex-col h-full">
//             {/* Sidebar Header */}
//             <div className="flex justify-between items-center p-5 border-b border-purple-100">
//               <img 
//                 src={logo} 
//                 alt="Simcura" 
//                 className="h-10 w-auto object-contain"
//               />
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 transition-colors"
//               >
//                 <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             {/* Sidebar Navigation Links */}
//             <div className="flex-1 overflow-y-auto py-6 px-5">
//               <div className="flex flex-col space-y-2">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     onClick={(e) => handleNavClick(link.name, link.href, e)}
//                     className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
//                       activeLink === link.name
//                         ? 'text-purple-600 bg-purple-100/80'
//                         : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//               </div>
              
//               {/* Sidebar Buttons */}
//               <div className="mt-8 space-y-3">
//                 <button
//                   onClick={handleClynixApp}
//                   className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 cursor-pointer"
//                 >
//                   Clynix App
//                 </button>
//                 <button
//                   onClick={handleDownload}
//                   className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-md transition-all duration-200 cursor-pointer"
//                 >
//                   Download App
//                 </button>
//               </div>
//             </div>
            
//             {/* Sidebar Footer */}
//             <div className="p-5 border-t border-purple-100">
//               <p className="text-gray-500 text-[11px] text-center">
//                 © 2025 SimcuraRX
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NO SPACER DIV - Navbar floats over content */}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerLogo from '../assets/FooterIcons/footerLogo.png';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact us', href: '/contact' },
  ];

  // Check if current route is Services page
  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/partnerships') {
      setActiveLink('Partnerships');
    } else if (currentPath === '/') {
      setActiveLink('Home');
    } else if (currentPath === '/about') {
      setActiveLink('About');
    } else if (currentPath === '/services') {
      setActiveLink('Services');
    } else if (currentPath === '/careers') {
      setActiveLink('Careers');
    } else if (currentPath === '/contact') {
      setActiveLink('Contact us');
    } else {
      setActiveLink('');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (linkName, href, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank');
  };

  const handleClynixApp = (e) => {
    e.preventDefault();
    navigate('/clynix');
  };

  // Determine navbar styles based on route - Using Services Page BG Color (#0e0b16)
  const getNavbarStyles = () => {
    if (isServicesPage) {
      // Using the exact Services Page background color (#0e0b16) with glassmorphism
      return {
        outerBg: '#0e0b16', // Exact Services page background color
        background: scrolled 
          ? 'rgba(14, 11, 22, 0.85)' 
          : 'rgba(14, 11, 22, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: scrolled ? '50px' : '70px',
        boxShadow: scrolled 
          ? '0px 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0px 4px 20px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textColor: 'text-white',
        linkColor: 'text-gray-300',
        linkHoverColor: 'hover:text-white hover:bg-white/10',
        activeLinkColor: 'text-purple-400 bg-purple-900/30',
        buttonBg: 'bg-white/10',
        buttonText: 'text-gray-200',
        buttonHover: 'hover:bg-white/20',
        downloadBg: 'bg-purple-600',
        downloadHover: 'hover:bg-purple-700',
        mobileMenuBg: '#0e0b16' // Sidebar matches Services page
      };
    } else {
      // Light/White theme for other pages
      return {
        outerBg: 'transparent',
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        borderRadius: scrolled ? '50px' : '80px',
        boxShadow: scrolled 
          ? '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset' 
          : '0px 4px 23.3px 0px rgba(0, 0, 0, 0.08)',
        border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
        textColor: 'text-gray-800',
        linkColor: 'text-gray-700',
        linkHoverColor: 'hover:text-purple-600 hover:bg-purple-50/50',
        activeLinkColor: 'text-purple-600 bg-purple-100/60',
        buttonBg: scrolled ? 'bg-white/60' : 'bg-white',
        buttonText: 'text-purple-600',
        buttonHover: scrolled ? 'hover:bg-white/80' : 'hover:bg-purple-50',
        downloadBg: 'bg-purple-600',
        downloadHover: 'hover:bg-purple-700',
        mobileMenuBg: 'rgba(255, 255, 255, 0.98)'
      };
    }
  };

  const styles = getNavbarStyles();

  return (
    <>
      {/* Floating Navbar - DISAPPEARS COMPLETELY when mobile menu is open */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
      >
        {/* Outer container with Services Page BG color for Services route */}
        <div className="w-full" style={{ background: styles.outerBg }}>
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4">
            <nav 
              className={`w-full transition-all duration-500 ease-in-out mx-auto ${
                scrolled ? 'shadow-2xl' : 'shadow-lg'
              }`}
              style={{
                maxWidth: 'calc(100% - 2rem)',
                background: styles.background,
                backdropFilter: styles.backdropFilter,
                WebkitBackdropFilter: styles.WebkitBackdropFilter,
                borderRadius: styles.borderRadius,
                boxShadow: styles.boxShadow,
                height: scrolled ? '60px' : '70px',
                display: 'flex',
                alignItems: 'center',
                border: styles.border
              }}
            >
              <div className="w-full px-3 sm:px-5 md:px-6">
              <div className="flex justify-between items-center">
                
                <div className="flex-shrink-0 flex items-center">
                  <a 
                    href="/" 
                    className="flex items-center group"
                    onClick={(e) => handleNavClick('Home', '/', e)}
                  >
                    {/* Always show logo image on all pages */}
                    <img 
                      src={logo} 
                      alt="Simcura" 
                      className={`transition-all duration-500 ${
                        scrolled 
                          ? 'h-10 sm:h-11 md:h-12' 
                          : 'h-12 sm:h-14 md:h-16'
                      } w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
                      style={{ filter: isServicesPage ? 'brightness(0) invert(1)' : 'none' }}
                    />
                  </a>
                </div>

                  <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(link.name, link.href, e)}
                        className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
                          activeLink === link.name
                            ? styles.activeLinkColor
                            : `${styles.linkColor} ${styles.linkHoverColor}`
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:space-x-3">
                    <button
                      onClick={() => navigate('/clynix')} 
                      className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${styles.buttonBg} ${styles.buttonText} ${styles.buttonHover} ${!isServicesPage && 'border border-gray-200'}`}
                    >
                      Clynix App
                    </button>
                    
                    <button
                      onClick={handleDownload}
                      className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${styles.downloadBg} text-white ${styles.downloadHover} shadow-md`}
                    >
                      Download{isServicesPage ? ' now' : ''}
                    </button>
                  </div>

                  {/* Mobile Menu Button - Only visible when menu is closed */}
                  <div className="lg:hidden flex items-center">
                    <button
                      onClick={() => setIsMobileMenuOpen(true)}
                      className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isServicesPage
                          ? 'text-gray-300 hover:text-purple-400 hover:bg-white/10'
                          : scrolled
                            ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 backdrop-blur-sm'
                            : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu - Opens from RIGHT and Navbar disappears */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: isServicesPage ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar Panel - Slides from RIGHT */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            zIndex: 101,
            background: isServicesPage 
              ? styles.mobileMenuBg 
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '-4px 0 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className={`flex justify-between items-center p-5 border-b ${isServicesPage ? 'border-purple-800/30' : 'border-purple-100'}`}>
              {isServicesPage ? (
                <span className="text-white font-bold text-xl tracking-tight">
                  Simcura<span className="text-sm align-top">®</span>
                </span>
              ) : (
                <img 
                  src={logo} 
                  alt="Simcura" 
                  className="h-10 w-auto object-contain"
                />
              )}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  isServicesPage 
                    ? 'text-gray-300 hover:text-purple-400 hover:bg-white/10'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100/50'
                }`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Sidebar Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6 px-5">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.name, link.href, e)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                      activeLink === link.name
                        ? isServicesPage
                          ? 'text-purple-400 bg-purple-900/30 border border-purple-500/20'
                          : 'text-purple-600 bg-purple-100/80'
                        : isServicesPage
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Sidebar Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleClynixApp}
                  className={`w-full px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                    isServicesPage
                      ? 'bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20'
                      : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300'
                  }`}
                >
                  Clynix App
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-md transition-all duration-200 cursor-pointer"
                >
                  Download{isServicesPage ? ' now' : ' App'}
                </button>
              </div>
            </div>
            
            {/* Sidebar Footer */}
            <div className={`p-5 border-t ${isServicesPage ? 'border-purple-800/30' : 'border-purple-100'}`}>
              <p className={`text-[11px] text-center ${isServicesPage ? 'text-gray-500' : 'text-gray-500'}`}>
                © 2025 SimcuraRX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NO SPACER DIV - Navbar floats over content */}
    </>
  );
};

export default Navbar;
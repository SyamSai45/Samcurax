// import React, { useState, useEffect } from 'react';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('Partnerships');

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Partnerships', href: '/partnerships' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Contact us', href: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
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

//   // Prevent body scroll when mobile menu is open
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

//   const handleNavClick = (linkName, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     setIsMobileMenuOpen(false);
//   };

//   const handleDownload = (e) => {
//     e.preventDefault();
//     alert('Download Clynix App');
//   };

//   const handleClynixApp = (e) => {
//     e.preventDefault();
//     alert('Clynix App');
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <nav 
//             className={`w-full transition-all duration-300 ${
//               scrolled ? 'shadow-navbar' : ''
//             }`}
//             style={{
//               background: 'rgba(255, 255, 255, 0.88)',
//               borderRadius: '80px',
//               boxShadow: '0px 4px 23.3px 0px rgba(0, 0, 0, 0.08)',
//               height: '70px',
//               display: 'flex',
//               alignItems: 'center'
//             }}
//           >
//             <div className="w-full px-3 sm:px-5 md:px-6">
//               <div className="flex justify-between items-center">
                
//                 {/* Logo Section - Larger size */}
//                 <div className="flex-shrink-0 flex items-center">
//                   <a 
//                     href="/" 
//                     className="flex items-center group"
//                     onClick={(e) => handleNavClick('Home', e)}
//                   >
//                     <img 
//                       src={logo} 
//                       alt="Simcura" 
//                       className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
//                     />
//                   </a>
//                 </div>

//                 {/* Desktop Navigation Links - Purple colors */}
//                 <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
//                   {navLinks.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       onClick={(e) => handleNavClick(link.name, e)}
//                       className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-200 ${
//                         activeLink === link.name
//                           ? 'text-purple-600 bg-purple-50'
//                           : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
//                       }`}
//                     >
//                       {link.name}
//                     </a>
//                   ))}
//                 </div>

//                 {/* Right side buttons - Purple colors */}
//                 <div className="hidden lg:flex lg:items-center lg:space-x-2">
//                   <button
//                     onClick={handleClynixApp}
//                     className="px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-200 bg-white text-purple-600 hover:bg-purple-50 border border-gray-200"
//                   >
//                     Clynix App
//                   </button>
//                   <button
//                     onClick={handleDownload}
//                     className="px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-200 bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
//                   >
//                     Download
//                   </button>
//                 </div>

//                 {/* Mobile menu button - Purple colors */}
//                 <div className="lg:hidden flex items-center">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
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

//       {/* Mobile Sidebar - Fixed to not go inside screen */}
//       <div 
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'visible' : 'invisible'
//         }`}
//       >
//         {/* Backdrop overlay */}
//         <div 
//           className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
        
//         {/* Sidebar panel - slides from left, stays within screen */}
//         <div 
//           className={`absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
//             isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//           style={{ zIndex: 50 }}
//         >
//           {/* Sidebar Header */}
//           <div className="flex justify-between items-center p-4 border-b border-gray-100">
//             <img 
//               src={logo} 
//               alt="Simcura" 
//               className="h-10 w-auto object-contain"
//             />
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//             >
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
          
//           {/* Sidebar Navigation Links - Purple colors */}
//           <div className="flex flex-col p-4 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(link.name, e)}
//                 className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
//                   activeLink === link.name
//                     ? 'text-purple-600 bg-purple-50'
//                     : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="pt-4 space-y-3">
//               <button
//                 onClick={handleClynixApp}
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white text-purple-600 border border-gray-200 hover:bg-purple-50"
//               >
//                 Clynix App
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-purple-600 text-white hover:bg-purple-700"
//               >
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Spacer */}
//       <div className="h-24 sm:h-28"></div>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Partnerships', href: '/partnerships' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Contact us', href: '/contact' },
//   ];


//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     if (currentPath === '/partnerships') {
//         setActiveLink('Partnerships');
//     } else if (currentPath === '/') {
//         setActiveLink('');
//     }
//     }, []);

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

//   // Prevent body scroll when mobile menu is open
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

//   const handleNavClick = (linkName, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     setIsMobileMenuOpen(false);
//   };

//   const handleDownload = (e) => {
//     e.preventDefault();
//     alert('Download Clynix App');
//   };

//   const handleClynixApp = (e) => {
//     e.preventDefault();
//     alert('Clynix App');
//   };

//   return (
//     <>
//       {/* Glassmorphic Navbar */}
//       <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//         scrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-4'
//       }`}>
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <nav 
//             className={`w-full transition-all duration-500 ease-in-out ${
//               scrolled ? 'shadow-2xl' : 'shadow-lg'
//             }`}
//             style={{
//               background: scrolled 
//                 ? 'rgba(255, 255, 255, 0.75)' 
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
                
//                 {/* Logo Section */}
//                 <div className="flex-shrink-0 flex items-center">
//                   <a 
//                     href="/" 
//                     className="flex items-center group"
//                     onClick={(e) => handleNavClick('Home', e)}
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

//                 {/* Desktop Navigation Links */}
//                 <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
//                   {navLinks.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       onClick={(e) => handleNavClick(link.name, e)}
//                       className={`px-3 py-1.5 text-[14px] font-medium rounded-full transition-all duration-300 ${
//                         activeLink === link.name
//                           ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
//                           : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
//                       }`}
//                     >
//                       {link.name}
//                     </a>
//                   ))}
//                 </div>

//                 {/* Right side buttons */}
//                 <div className="hidden lg:flex lg:items-center lg:space-x-3">
//                   <button
//                     onClick={handleClynixApp}
//                     className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
//                       scrolled
//                         ? 'bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 border border-white/50'
//                         : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
//                     }`}
//                   >
//                     Clynix App
//                   </button>
                  
//                   {/* Download Button */}
//                   <button
//                     onClick={handleDownload}
//                     className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
//                       scrolled
//                         ? 'bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 shadow-md'
//                         : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
//                     }`}
//                   >
//                     Download
//                   </button>
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="lg:hidden flex items-center">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     className={`p-2 rounded-full transition-all duration-300 ${
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

//       {/* Mobile Sidebar - Glassy effect */}
//       <div 
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'visible' : 'invisible'
//         }`}
//       >
//         {/* Backdrop overlay - glassy */}
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
        
//         {/* Sidebar panel - glassy */}
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
//           {/* Sidebar Header */}
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
          
//           {/* Sidebar Navigation Links */}
//           <div className="flex flex-col p-4 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(link.name, e)}
//                 className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
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
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white/60 backdrop-blur-sm text-purple-600 border border-white/50 hover:bg-white/80"
//               >
//                 Clynix App
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90"
//               >
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Spacer */}
//       <div className={`transition-all duration-500 ${
//         scrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-28'
//       }`}></div>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

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
    window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank');
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <nav 
            className={`w-full transition-all duration-500 ease-in-out ${
              scrolled ? 'shadow-2xl' : 'shadow-lg'
            }`}
            style={{
              background: scrolled 
                ? 'rgba(255, 255, 255, 0.75)' 
                : 'rgba(255, 255, 255, 0.88)',
              backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
              WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
              borderRadius: scrolled ? '50px' : '80px',
              boxShadow: scrolled 
                ? '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset' 
                : '0px 4px 23.3px 0px rgba(0, 0, 0, 0.08)',
              height: scrolled ? '60px' : '70px',
              display: 'flex',
              alignItems: 'center',
              border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : 'none'
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
                    <img 
                      src={logo} 
                      alt="Simcura" 
                      className={`transition-all duration-500 ${
                        scrolled 
                          ? 'h-10 sm:h-11 md:h-12' 
                          : 'h-12 sm:h-14 md:h-16'
                      } w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
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
                          ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="hidden lg:flex lg:items-center lg:space-x-3">
                  <button
                    onClick={( )=> navigate('/clynix')} 
                    className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                      scrolled
                        ? 'bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 border border-white/50'
                        : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
                    }`}
                  >
                    Clynix App
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                      scrolled
                        ? 'bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 shadow-md'
                        : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
                    }`}
                  >
                    Download
                  </button>
                </div>

                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                      scrolled
                        ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 backdrop-blur-sm'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
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

      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <div 
          className={`absolute top-0 left-0 bottom-0 w-4/5 max-w-sm transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            zIndex: 50,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '4px 0 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/30">
            <img 
              src={logo} 
              alt="Simcura" 
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-100/50 transition-colors"
            >
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
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                  activeLink === link.name
                    ? 'text-purple-600 bg-purple-100/60 backdrop-blur-sm'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleClynixApp}
                className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-white/60 backdrop-blur-sm text-purple-600 border border-white/50 hover:bg-white/80 cursor-pointer"
              >
                Clynix App
              </button>
              <button
                onClick={handleDownload}
                className="w-full px-4 py-3 rounded-xl font-medium text-sm bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-700/90 cursor-pointer"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ${
        scrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-28'
      }`}></div>
    </>
  );
};

export default Navbar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import footerLogo from '../assets/headerlogo.png';

// // Office/workspace image (replace with your actual careerImage asset)
// const OFFICE_IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80';

// const CAREERS = [
//   {
//     id: 1,
//     title: 'Junior Graphic Designer',
//     company: 'SimcuraRx Pvt Ltd',
//     location: 'Kakinada',
//     type: 'Full-time',
//     subText: 'JOIN THE CREATIVE TEAM',
//     description: 'Innovation through Design',
//     image: OFFICE_IMG,
//     faded: false,
//   },
//   {
//     id: 2,
//     title: 'Website Developer',
//     company: 'SimcuraRx Pvt Ltd',
//     location: 'Kakinada',
//     type: 'Full-time',
//     subText: 'JOIN THE CREATIVE TEAM',
//     description: 'Innovation through Design',
//     image: OFFICE_IMG,
//     faded: false,
//   },
//   {
//     id: 3,
//     title: 'Website Developer',
//     company: 'SimcuraRx Pvt Ltd',
//     location: 'Kakinada',
//     type: 'Full-time',
//     subText: 'JOIN THE CREATIVE TEAM',
//     description: 'Innovation through Design',
//     image: OFFICE_IMG,
//     faded: true,
//   },
//   {
//     id: 3,
//     title: 'Website Developer',
//     company: 'SimcuraRx Pvt Ltd',
//     location: 'Kakinada',
//     type: 'Full-time',
//     subText: 'JOIN THE CREATIVE TEAM',
//     description: 'Innovation through Design',
//     image: OFFICE_IMG,
//     faded: true,
//   },
// ];

// /* ── Icons (inline SVG so no extra deps needed) ─────────── */
// const BuildingIcon = () => (
//   <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7h18M3 13h18M9 3v4m6-4v4M9 13v4m6-4v4M9 7v2m6-2v2" />
//   </svg>
// );
// const PinIcon = () => (
//   <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4.5-7-8-7-11a7 7 0 0114 0c0 3-3 6.5-7 11z" />
//     <circle cx="12" cy="10" r="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const ClockIcon = () => (
//   <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="9" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
//   </svg>
// );

// /* ── Career Card ─────────────────────────────────────────── */
// const CareerCard = ({ career }) => (
//   <div
//     className={`flex flex-col w-full max-w-[352px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${career.faded ? 'opacity-55' : 'opacity-100'}`}
//   >
//     {/* ── TOP: Title + Meta (above image, plain background) ── */}
//     <div className="pb-3">
//       {/* Job Title */}
//       <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">
//         {career.title}
//       </h3>

//       {/* Company · Location · Type */}
//       <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
//         <span className="flex items-center gap-1 text-[13px] text-slate-500">
//           <BuildingIcon />
//           {career.company}
//         </span>
//         <span className="flex items-center gap-1 text-[13px] text-slate-500">
//           <PinIcon />
//           {career.location}
//         </span>
//         <span className="flex items-center gap-1 text-[13px] text-slate-500">
//           <ClockIcon />
//           {career.type}
//         </span>
//       </div>
//     </div>

//     {/* ── BOTTOM: Image with overlay text ── */}
//     <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '180px' }}>
//       {/* Background image */}
//       <img
//         src={career.image}
//         alt={career.title}
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark gradient at bottom for text legibility */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//       {/* Overlay text — bottom-left, exactly like screenshots */}
//       <div className="absolute bottom-0 left-0 px-4 pb-3">
//         {/* "JOIN THE CREATIVE TEAM" — small blue uppercase */}
//         <p className="text-[11px] font-semibold tracking-widest uppercase text-blue-400 mb-1">
//           {career.subText}
//         </p>
//         {/* "Innovation through Design" — large white bold */}
//         <p className="text-[18px] font-bold text-white leading-snug">
//           {career.description}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// /* ── Footer ──────────────────────────────────────────────── */
// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <footer className="bg-white border-t border-gray-200 mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* Logo */}
//           <button
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
//           >
//             <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
//             <span className="text-xl font-bold text-gray-800">
//               Simcura<span className="text-purple-600">®</span>
//             </span>
//           </button>

//           {/* Copyright */}
//           <p className="text-gray-400 text-[13px] text-center">
//             © 2025 SimcuraRX. Leading the future of healthcare integration.
//           </p>

//           {/* Social icons */}
//           <div className="flex items-center gap-4">
//             {/* Instagram */}
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
//             >
//               <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//               </svg>
//             </a>

//             {/* Mail */}
//             <a
//               href="mailto:simcurarx@gmail.com"
//               className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
//             >
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </a>

//             {/* Share */}
//             <button
//               onClick={() => {
//                 if (navigator.share) {
//                   navigator.share({ title: 'SimcuraRX', url: window.location.href });
//                 }
//               }}
//               className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110 border-none cursor-pointer bg-gray-100"
//             >
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// /* ── Page ────────────────────────────────────────────────── */
// const CareerPage = () => (
//   <div className="min-h-screen bg-white">
//     {/* Cards section */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="flex flex-wrap justify-center gap-8">
//         {CAREERS.map(career => (
//           <CareerCard key={career.id} career={career} />
//         ))}
//       </div>
//     </div>

//     <Footer />
//   </div>
// );

// export default CareerPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import footerLogo from '../assets/headerlogo.png';
import jobDetailImage from '../assets/careerImage.png'; 

// Office/workspace image
const OFFICE_IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80';

const CAREERS = [
  {
    id: 1,
    title: 'Junior Graphic Designer',
    company: 'SimcuraRx Pvt Ltd',
    location: 'Kakinada',
    type: 'Full-time',
    subText: 'JOIN THE CREATIVE TEAM',
    description: 'Innovation through Design',
    image: OFFICE_IMG,
    faded: false,
    jobDetails: {
      companyName: 'Creative Agency Corp',
      locationDetail: 'New York / Remote',
      jobType: 'Full-time',
      salary: 'Entry-Level / Competitive',
      experience: 'Fresh Graduates / 0-2 years',
      roleType: 'Junior Associate',
      department: 'Brand & Social Media Designs',
      description: 'We are looking for a passionate Junior Graphic Designer to join our creative team. You will work closely with senior designers to create visually stunning assets for our digital platforms, print media, and social campaigns. This is an incredible opportunity for a fresh graduate to kickstart their career in a high-growth environment with mentorship from industry experts.',
      responsibilities: [
        'Assist in the design and production of digital marketing materials including social media graphics and email banners.',
        'Develop creative concepts and layouts for brand presentations and pitch decks.',
        'Support the team in photo editing and basic video motion graphics tasks.',
        'Maintain consistency across all brand touchpoints according to established guidelines.',
        'Collaborate with cross-functional teams to understand project requirements and delivery timelines.'
      ],
      requirements: ['Adobe Creative Suite', 'Figma', 'Typography', 'Layout Design']
    }
  },
  {
    id: 2,
    title: 'Website Developer',
    company: 'SimcuraRx Pvt Ltd',
    location: 'Kakinada',
    type: 'Full-time',
    subText: 'JOIN THE CREATIVE TEAM',
    description: 'Innovation through Design',
    image: OFFICE_IMG,
    faded: false,
    jobDetails: {
      companyName: 'Tech Solutions Corp',
      locationDetail: 'Kakinada / On-site',
      jobType: 'Full-time',
      salary: 'Competitive / Market Rate',
      experience: '1-3 years',
      roleType: 'Junior Associate',
      department: 'Web Development',
      description: 'We are looking for a passionate Website Developer to join our tech team...',
      responsibilities: [
        'Develop responsive websites using modern frameworks',
        'Collaborate with design team for implementation',
        'Optimize websites for performance and SEO'
      ],
      requirements: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript']
    }
  },
  {
    id: 3,
    title: 'Website Developer',
    company: 'SimcuraRx Pvt Ltd',
    location: 'Kakinada',
    type: 'Full-time',
    subText: 'JOIN THE CREATIVE TEAM',
    description: 'Innovation through Design',
    image: OFFICE_IMG,
    faded: true,
    jobDetails: {
      companyName: 'Tech Solutions Corp',
      locationDetail: 'Kakinada / On-site',
      jobType: 'Full-time',
      salary: 'Competitive / Market Rate',
      experience: '1-3 years',
      roleType: 'Junior Associate',
      department: 'Web Development',
      description: 'We are looking for a passionate Website Developer to join our tech team...',
      responsibilities: [
        'Develop responsive websites using modern frameworks',
        'Collaborate with design team for implementation',
        'Optimize websites for performance and SEO'
      ],
      requirements: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript']
    }
  },
  {
    id: 4,
    title: 'Website Developer',
    company: 'SimcuraRx Pvt Ltd',
    location: 'Kakinada',
    type: 'Full-time',
    subText: 'JOIN THE CREATIVE TEAM',
    description: 'Innovation through Design',
    image: OFFICE_IMG,
    faded: true,
    jobDetails: {
      companyName: 'Tech Solutions Corp',
      locationDetail: 'Kakinada / On-site',
      jobType: 'Full-time',
      salary: 'Competitive / Market Rate',
      experience: '1-3 years',
      roleType: 'Junior Associate',
      department: 'Web Development',
      description: 'We are looking for a passionate Website Developer to join our tech team...',
      responsibilities: [
        'Develop responsive websites using modern frameworks',
        'Collaborate with design team for implementation',
        'Optimize websites for performance and SEO'
      ],
      requirements: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript']
    }
  }
];

// Icons
const BuildingIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7h18M3 13h18M9 3v4m6-4v4M9 13v4m6-4v4M9 7v2m6-2v2" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4.5-7-8-7-11a7 7 0 0114 0c0 3-3 6.5-7 11z" />
    <circle cx="12" cy="10" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

// Share Icon
const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" />
  </svg>
);

// Career Card Component
const CareerCard = ({ career, onCardClick }) => (
  <div
    onClick={() => onCardClick(career)}
    className={`flex flex-col w-full max-w-[352px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${career.faded ? 'opacity-55' : 'opacity-100'}`}
  >
    <div className="pb-3">
      <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">
        {career.title}
      </h3>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
        <span className="flex items-center gap-1 text-[13px] text-slate-500">
          <BuildingIcon />
          {career.company}
        </span>
        <span className="flex items-center gap-1 text-[13px] text-slate-500">
          <PinIcon />
          {career.location}
        </span>
        <span className="flex items-center gap-1 text-[13px] text-slate-500">
          <ClockIcon />
          {career.type}
        </span>
      </div>
    </div>
    <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '180px' }}>
      <img src={career.image} alt={career.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 px-4 pb-3">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-blue-400 mb-1">
          {career.subText}
        </p>
        <p className="text-[18px] font-bold text-white leading-snug">
          {career.description}
        </p>
      </div>
    </div>
  </div>
);

// Job Detail Modal/Page Component
// Job Detail Modal/Page Component
const JobDetailPage = ({ job, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    portfolioLink: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </button>
        </div>
      </div>

      {/* Job Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column - Job Info */}
          <div className="flex-1">
            {/* Title and Company */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex items-center gap-4 text-gray-500">
                <span>{job.jobDetails.companyName}</span>
                <span>•</span>
                <span>{job.jobDetails.locationDetail}</span>
                <span>•</span>
                <span>{job.jobDetails.jobType}</span>
              </div>
            </div>

            {/* Share Job Button */}
            <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8">
              <ShareIcon />
              <span>Share Job</span>
            </button>

            {/* Image Section */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img src={jobDetailImage} alt="Job Detail" className="w-full h-auto object-cover" />
            </div>

            {/* Info Bar - Salary, Experience, Role Type, Department */}
            <div className="mb-8 border-y border-[#F1F5F9] py-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Salary */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SALARY</h4>
                    <p className="text-gray-800 font-medium">{job.jobDetails.salary}</p>
                  </div>
                  
                  {/* Role Type */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">ROLE TYPE</h4>
                    <p className="text-gray-800 font-medium">{job.jobDetails.roleType}</p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  {/* Experience */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">EXPERIENCE</h4>
                    <p className="text-gray-800 font-medium">{job.jobDetails.experience}</p>
                  </div>
                  
                  {/* Department */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">DEPARTMENT</h4>
                    <p className="text-gray-800 font-medium">{job.jobDetails.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {job.jobDetails.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-2">
                {job.jobDetails.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <div className="flex flex-wrap gap-2">
                {job.jobDetails.requirements.map((req, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="w-full lg:w-[400px]">
            {/* Application Form */}
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Link</label>
                  <input type="url" required value={formData.portfolioLink} onChange={(e) => setFormData({...formData, portfolioLink: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="https://dribbble.com/jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                    <input type="file" accept=".pdf" className="hidden" id="resume-upload" onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-500 text-sm">Upload a file</p>
                      <p className="text-gray-400 text-xs">PDF up to 10MB</p>
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                  Submit Application
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  By applying, you agree to our Terms of Service and Privacy Policy. Your data will be processed securely.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Career Page Component
const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (career) => {
    setSelectedJob(career);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  if (selectedJob) {
    return <JobDetailPage job={selectedJob} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {CAREERS.map(career => (
            <CareerCard key={career.id} career={career} onCardClick={handleCardClick} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Footer Component
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0">
            <img src={footerLogo} alt="Simcura Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-gray-800">Simcura<span className="text-purple-600">®</span></span>
          </button>
          <p className="text-gray-400 text-[13px] text-center">© 2025 SimcuraRX. Leading the future of healthcare integration.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
            <a href="mailto:simcurarx@gmail.com" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <button onClick={() => { if (navigator.share) navigator.share({ title: 'SimcuraRX', url: window.location.href }); }} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CareerPage;
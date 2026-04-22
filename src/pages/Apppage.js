import React from 'react';
import { useNavigate } from 'react-router-dom';
import footerLogo from '../assets/headerlogo.png';
import appHeroImage from '../assets/App-hero1.png';
import appStoreBtn from '../assets/App_Store_btn.png';
import googlePlayBtn from '../assets/PlayStore_btn.png';

// Import images for the overlapping section
import bottomImage from '../assets/bottomAppImage.png';
import topImage from '../assets/topAppimage.png';

// Feature card icons
const FastDeliveryIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 2.05V2c0-.55-.45-1-1-1s-1 .45-1 1v.05C6.18 2.56 2.56 6.18 2.05 11H2c-.55 0-1 .45-1 1s.45 1 1 1h.05C2.56 17.82 6.18 21.44 11 21.95V22c0 .55.45 1 1 1s1-.45 1-1v-.05c4.82-.51 8.44-4.13 8.95-8.95H22c.55 0 1-.45 1-1s-.45-1-1-1h-.05C21.44 6.18 17.82 2.56 13 2.05zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
    </svg>
  </div>
);

const SecureIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
    </svg>
  </div>
);

const SupportIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  </div>
);

const PriceIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  </div>
);

// Lab step icons
const BookTestIcon = () => (
  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zM9 6h6v2H9zm0 4h6v2H9zm0 4h4v2H9z"/>
    </svg>
  </div>
);

const PickupIcon = () => (
  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  </div>
);

const LabIcon = () => (
  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2v2h1v14c0 2.21 1.79 4 4 4s4-1.79 4-4V4h1V2H7zm4 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-5H10V4h4v3z"/>
    </svg>
  </div>
);

const ReportIcon = () => (
  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
    </svg>
  </div>
);

const AppPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    mobile: '',
    email: '',
    website: '',
    message: ''
  });

  const handleDownload = (e) => {
    e.preventDefault();
    window.open('https://play.google.com/store/apps/details?id=com.clynix.clynix', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const whyChooseFeatures = [
    { title: "Fast Delivery", desc: "Get your orders within 10-20 minutes in major city areas.", Icon: FastDeliveryIcon },
    { title: "Secure Handling", desc: "Discreet and tamper-proof packaging for your privacy.", Icon: SecureIcon },
    { title: "24/7 Support", desc: "Our expert pharmacists are available for consultations anytime.", Icon: SupportIcon },
    { title: "Best Prices", desc: "Flat discounts and subscription plans for regular medications.", Icon: PriceIcon }
  ];

  const labProcessSteps = [
    { num: 1, title: "Book Test", desc: "Book via our Clynix app", Icon: BookTestIcon },
    { num: 2, title: "Sample Pick-up", desc: "From your doorstep", Icon: PickupIcon },
    { num: 3, title: "Lab Processing", desc: "NABL certified labs", Icon: LabIcon },
    { num: 4, title: "Digital Report", desc: "On your mobile device", Icon: ReportIcon }
  ];

  const features = [
    { title: "Best Prices Guaranteed", desc: "Get genuine medicines and health essentials at the best market rates with exclusive savings.", icon: "💰" },
    { title: "Reliable Service", desc: "Experience seamless ordering and real-time tracking powered by precision technology.", icon: "🛡️" },
    { title: "Expert Support", desc: "Our dedicated support team is always available to ensure your health needs are met instantly.", icon: "👨‍⚕️" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[102px] pt-20 sm:pt-24 md:pt-28 lg:pt-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-[625px] flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
            <h1 className="font-bold text-[#21006C] text-3xl sm:text-4xl md:text-5xl lg:text-[52.66px] leading-tight lg:leading-[60px]">
              Where Care Meets <br />Convenience.
            </h1>
            <p className="text-[#21006C] text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed lg:leading-[30px]">
              Your one-stop destination for all pharmaceutical needs. 
              We combine speed and safety to deliver medicines, supplements, & health essentials directly to you, making healthcare simple and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[504px]">
              <button onClick={handleDownload} className="text-white font-semibold rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 w-full sm:w-[240px] h-[51px] py-3 px-6 bg-gradient-to-r from-[#9D77F2] to-[#7743ED]">
                Download app
              </button>
              <button className="border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-200 w-full sm:w-[240px] h-[51px] py-3 px-6">
                Fast. Secure. Verified.
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[544px] h-auto lg:h-[401px] rounded-[40px] overflow-hidden">
            <img src={appHeroImage} alt="App Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[102px] mt-8 sm:mt-10 lg:mt-12">
        <div className="inline-flex items-center justify-center mb-4 sm:mb-6 py-1.5 px-4 sm:px-[22px] gap-[14px] rounded-[62px] bg-white shadow-[0px_0px_20px_rgba(119,67,237,0.2)]">
          <span className="text-purple-600 font-medium text-sm">About us</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#21006C] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[50px]">
              Your Trusted Pharmacy, <br />Now at Your Doorstep!
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 text-xs sm:text-sm bg-black/80 p-3 sm:p-4 rounded-xl">
              Clynix simplifies your healthcare journey by connecting you directly with trusted, licensed medical stores. 
              We eliminate the hassle of waiting in queues by bringing the pharmacy straight to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[102px] mt-12 lg:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overlapping Images Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[102px] mt-12 lg:mt-20">
        <div className="relative max-w-[800px] lg:max-w-none mx-auto lg:mx-0">
          <div className="w-full max-w-[742px] h-auto rounded-[29.13px] overflow-hidden bg-gray-200 shadow-lg mx-auto lg:mx-0">
            <img src={bottomImage} alt="Bottom" className="w-full h-full object-cover" />
          </div>
          <div className="absolute rounded-[29.13px] overflow-hidden bg-gray-300 shadow-xl"
            style={{
              width: 'min(70%, 532px)',
              height: 'auto',
              bottom: '-30px',
              right: '-20px',
              borderRadius: '29.13px',
              border: '14px solid white'
            }}>
            <img src={topImage} alt="Top" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Clynix */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[102px] mt-16 lg:mt-24">
        <div className="w-full rounded-2xl p-6 sm:p-8" style={{ border: '1px solid rgba(0,0,0,0.08)', background: 'linear-gradient(180deg, #f5f0ff 0%, #ffffff 100%)' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">Why Choose Clynix?</h2>
          <p className="text-gray-500 text-sm mb-6 sm:mb-8 text-center">
            We provide a seamless experience combining technology with expert healthcare knowledge.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <feature.Icon />
                <h3 className="font-bold text-gray-800 mt-3 mb-1 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Process Section */}
      <section className="w-full mt-12 lg:mt-16" style={{ background: 'linear-gradient(246.65deg, #A177FF 15.99%, #6C36E7 52.88%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-6 lg:gap-4 rounded-full py-4 px-4 sm:px-6 lg:px-10" style={{ background: 'rgba(255,255,255,0.12)' }}>
            {labProcessSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3 w-full sm:w-auto justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm sm:text-base">{step.title}</div>
                  <div className="text-purple-200 text-xs sm:text-sm">{step.desc}</div>
                </div>
                {index < labProcessSteps.length - 1 && (
                  <div className="hidden lg:flex items-center ml-2 mr-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map(d => <div key={d} className="w-1.5 h-1.5 rounded-full bg-white/30" />)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[1330px] mx-auto rounded-[20px] border border-black/20 p-8 lg:p-10"
          style={{ background: 'linear-gradient(180deg, #F5F0FF 0%, #FFFFFF 100%)' }}>
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How to Order</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step cards */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">1</div>
              <h3 className="font-bold text-gray-800 mb-2">Upload</h3>
              <p className="text-gray-500 text-xs">Snap a photo or upload a PDF of your doctor's prescription securely.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">2</div>
              <h3 className="font-bold text-gray-800 mb-2">Verify</h3>
              <p className="text-gray-500 text-xs">Our licensed pharmacists check the availability and dosage requirements.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
              <h3 className="font-bold text-gray-800 mb-2">Pay</h3>
              <p className="text-gray-500 text-xs">Securely pay via multiple payment gateways including Credit Cards & Cash on Delivery.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
              <h3 className="font-bold text-gray-800 mb-2">Track</h3>
              <p className="text-gray-500 text-xs">Watch your delivery reach you in real-time with our live tracker.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Pharmacy Network Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[48px]">
          <div className="w-full lg:w-[584px] relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img src={bottomImage} alt="Pharmacy Network" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[536px] max-w-[calc(100%-32px)] bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Partner</h4>
                    <p className="text-gray-500 text-sm">1000+ trusted pharmacies</p>
                  </div>
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[584px] flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-900">Certified Pharmacy Network</h3>
            <p className="text-gray-600 text-lg leading-[29.25px]">
              Clynix connects you with a vast network of accredited and trusted local pharmacies. 
              Every partner is strictly vetted to ensure they maintain the highest standards of storage and pharmacological ethics.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50/50 rounded-xl p-4 flex items-start gap-4 border-t border-blue-200/10">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">100% Authentic Medicines</h4>
                  <p className="text-gray-500 text-sm">Direct sourcing from authorized distributors ensures zero counterfeit risk.</p>
                </div>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-4 flex items-start gap-4 border-t border-blue-200/10">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cold-Chain Management</h4>
                  <p className="text-gray-500 text-sm">Insulin and other temperature-sensitive medicines are delivered in cooling kits.</p>
                </div>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-4 flex items-start gap-4 border-t border-blue-200/10">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Digital Prescription Records</h4>
                  <p className="text-gray-500 text-sm">We store your prescriptions digitally for easy re-ordering and tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[768px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <div className="bg-[#F5F6FA] rounded-xl border border-gray-200 overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const icon = e.currentTarget.querySelector('svg');
                  answer.classList.toggle('hidden');
                  icon.classList.toggle('rotate-180');
                }}>
                <span className="font-medium text-gray-800">Is a prescription mandatory for all medicines?</span>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden px-6 pb-4">
                <p className="text-gray-600 text-sm">Yes, prescription is mandatory for all prescription medicines. Over-the-counter medicines can be purchased without prescription.</p>
              </div>
            </div>
            <div className="bg-[#F5F6FA] rounded-xl border border-gray-200 overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const icon = e.currentTarget.querySelector('svg');
                  answer.classList.toggle('hidden');
                  icon.classList.toggle('rotate-180');
                }}>
                <span className="font-medium text-gray-800">How long does the delivery usually take?</span>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden px-6 pb-4">
                <p className="text-gray-600 text-sm">Delivery usually takes 10-20 minutes in major city areas, and 1-2 days for other locations.</p>
              </div>
            </div>
            <div className="bg-[#F5F6FA] rounded-xl border border-gray-200 overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  const answer = e.currentTarget.nextElementSibling;
                  const icon = e.currentTarget.querySelector('svg');
                  answer.classList.toggle('hidden');
                  icon.classList.toggle('rotate-180');
                }}>
                <span className="font-medium text-gray-800">Do you accept medical insurance?</span>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden px-6 pb-4">
                <p className="text-gray-600 text-sm">Yes, we accept major medical insurance providers. Please contact our support for more details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[1001px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[93px]">
          
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-[426px] space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are committed to processing the information in order to contact you and talk about your project.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
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
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number *</label>
                <input type="tel" required value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="+91 12345 67890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website *</label>
                <input type="text" required value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="www.yourwebsite.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-[1272px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact us</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">FAQ's</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of services</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Website & Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">E-commerce solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Custom software development</a></li>
              </ul>
            </div>
            
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

        <div className="border-t border-gray-800">
          <div className="max-w-[1272px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
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

export default AppPage;
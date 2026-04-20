import React from 'react';

const PartnershipPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will review your details and connect with you soon.');
  };

  const handleReinforce = (partnerType) => {
    alert(`Thank you for your interest in our ${partnerType} partnership! Our team will contact you soon.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matches screenshot colors */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partnership badge - from screenshot */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              PARTNERSHIP WITH US
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Partner With <span className="text-blue-600">SimcuraRx</span> for Strategic Digital Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              At SimcuraRx, we believe in building strong partnerships that create mutual growth and long-term success. 
              We collaborate with companies, start-ups, agencies, healthcare providers, & technology partners who share 
              our vision of delivering innovative digital and healthcare solutions.
            </p>
            <p className="text-md text-gray-600 mb-10">
              If you are interested in collaborating with SimcuraRx, please fill out this partnership form below. 
              Our team will review your details and connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Fill Partnership Form
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Banner - Blue background */}
      <section className="bg-violet-600 py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Strategic Partnership for Smarter Digital Innovation
          </h2>
          <p className="text-blue-100 text-lg">
            SimcuraRx and Reitman Solutions join forces to deliver stronger, faster, and more scalable, high-quality services.
          </p>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Partner With
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are looking for collaborative networks that align the entire health system value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Established Companies Card */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Established Companies</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Get ready to grow with a world-class IT systems and experience at your fingertips. 
                Designing high-performance technology ecosystems for long-term sustainability.
              </p>
              <button 
                onClick={() => handleReinforce('Established Companies')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1 group"
              >
                Reinforce 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Agile Startups Card */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Startups</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Accelerate your growth cycle with rapid iteration, focus on core product-market opportunities, 
                and build the future with agility and purpose.
              </p>
              <button 
                onClick={() => handleReinforce('Agile Startups')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1 group"
              >
                Reinforce 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Technology Partners Card */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Partners</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bring software development capabilities with technology expertise, scalable infrastructure, 
                and smart, integrated solutions.
              </p>
              <button 
                onClick={() => handleReinforce('Technology Partners')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1 group"
              >
                Reinforce 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark background from screenshot */}
      <section className="py-16 md:py-20 bg-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can revolutionize healthcare together. Our team is ready to explore 
            customized partnership models tailored to your needs.
          </p>
          <button 
            onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Fill Partnership Form
          </button>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section id="partnership-form" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Partnership Interest Form
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Please fill out the form below and our team will get back to you within 2-3 business days.
            </p>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type *</label>
                <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                  <option value="">Select partnership type</option>
                  <option>Established Company</option>
                  <option>Agile Startup</option>
                  <option>Technology Partner</option>
                  <option>Healthcare Provider</option>
                  <option>Agency Partner</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your organization and partnership goals *</label>
                <textarea rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg">
                Submit Partnership Interest
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipPage;
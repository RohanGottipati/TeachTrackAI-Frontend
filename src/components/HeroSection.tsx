
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Insights for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Every Classroom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Detect learning gaps. Personalize education. Empower every student.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl">
              Join educators who are using TeachTrack AI to identify struggling students, 
              customize instruction, and improve learning outcomes with data-driven insights. Start free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Start for Free
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Prototype Dashboard View</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Math Comprehension</span>
                    <div className="bg-white/20 rounded-full h-2 w-24">
                      <div className="bg-white rounded-full h-2 w-20"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Reading Level</span>
                    <div className="bg-white/20 rounded-full h-2 w-24">
                      <div className="bg-white rounded-full h-2 w-16"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Science Skills</span>
                    <div className="bg-white/20 rounded-full h-2 w-24">
                      <div className="bg-white rounded-full h-2 w-18"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 rounded-lg p-3">
                  <p className="text-sm">🎯 AI Recommendation: Focus on fractions and decimal concepts</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium animate-bounce">
              Early Access
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              AI-Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transforming Education Through AI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At TeachTrack AI, we believe every student deserves personalized attention and the opportunity to succeed. 
              Our platform is designed with educators in mind, making quality education more accessible and effective 
              through AI-driven insights that were previously impossible to obtain.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're bridging the gap between traditional teaching methods and modern technology, helping teachers 
              identify learning gaps before they become learning barriers. Our platform is built for accessibility 
              and ease of use, requiring no technical expertise to deliver actionable recommendations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Early Access</h4>
                <p className="text-blue-700">Available Now for Educators</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Canada-First</h4>
                <p className="text-green-700">Built for Canadian Schools</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Teacher using TeachTrack AI" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Precision Learning</h4>
            <p className="text-gray-600">
              Identify exactly where each student needs support with AI-powered gap analysis
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Easy Implementation</h4>
            <p className="text-gray-600">
              No technical expertise required. Designed for educators, by educators
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h4>
            <p className="text-gray-600">
              Get clear, practical recommendations that make a real difference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start for free and upgrade when you're ready. No hidden fees, no surprises.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Freemium Tier */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Freemium</h3>
              <p className="text-gray-700 mb-6">Perfect for exploring TeachTrack AI</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-700 text-xl">/month</span>
              </div>
              <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors w-full">
                Start for Free
              </button>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Limited AI insights per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Basic dashboard access</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Up to 30 students</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Email support</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Core learning gap detection</span>
              </li>
            </ul>
          </div>

          {/* Teacher License */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Teacher License</h3>
              <p className="text-blue-700 mb-6">For individual educators</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-900">$8</span>
                <span className="text-blue-700 text-xl">/month</span>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Join Early Access
              </button>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Full AI insights & recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Up to 150 students per account</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Real-time progress tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Customizable dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Priority email support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Advanced reporting tools</span>
              </li>
            </ul>
          </div>

          {/* School License */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-2">School License</h3>
              <p className="text-green-700 mb-6">For entire schools and districts</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-900">Custom Pricing</span>
                <p className="text-green-700 text-sm mt-2">Based on staff size</p>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
              >
                Request Demo
              </button>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Everything in Teacher License</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Unlimited students across all staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">School-wide analytics & reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-green-700">Dedicated support team</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Professional development training</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose TeachTrack AI?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Start Free</h4>
              <p className="text-gray-600">Try our platform risk-free with our freemium tier.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale with You</h4>
              <p className="text-gray-600">Upgrade as your needs grow, with volume discounts available.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Plans</h4>
              <p className="text-gray-600">No long-term contracts. Change or cancel plans anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

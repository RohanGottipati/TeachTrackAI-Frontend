
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TeachTrack AI</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering educators with AI-powered insights to detect learning gaps, 
              personalize instruction, and improve student outcomes.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-white text-xl">📧</span>
              </div>
              <div className="bg-green-600 p-2 rounded-lg">
                <span className="text-white text-xl">🐦</span>
              </div>
              <div className="bg-purple-600 p-2 rounded-lg">
                <span className="text-white text-xl">💼</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TeachTrack AI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for educators everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

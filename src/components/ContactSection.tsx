
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to schedule a demo or learn more about how TeachTrack AI can help your students succeed
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start the Conversation</h3>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a teacher interested in trying our individual license or a school administrator 
              exploring our institutional solution, we're here to help you get started with TeachTrack AI.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@teachtrack.ai</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <span className="text-purple-600 text-xl">📅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Schedule a Demo</h4>
                  <p className="text-gray-600">See TeachTrack AI in action</p>
                  <p className="text-sm text-gray-500">30-minute personalized walkthrough</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">1.</span>
                  <span className="text-gray-700">We'll reach out within 24 hours to understand your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">2.</span>
                  <span className="text-gray-700">Schedule a personalized demo of TeachTrack AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">3.</span>
                  <span className="text-gray-700">Start using the platform with full support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Privacy & Compliance</h4>
              <p className="text-sm text-gray-600">
                Your data is protected and handled in compliance with Canadian education privacy standards. 
                We prioritize security and transparency in all our data practices.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@school.edu"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  School/Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your school or organization name (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your needs, class size, or any specific questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

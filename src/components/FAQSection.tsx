
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can we get started with TeachTrack AI?",
      answer: "Getting started is incredibly fast! Most teachers are up and running within 15 minutes. Our onboarding process includes: (1) Quick account setup, (2) Simple data import from your existing gradebook, (3) Brief platform walkthrough, and (4) Your first AI insights. We provide step-by-step guides and video tutorials to make the process as smooth as possible."
    },
    {
      question: "How do you protect student data and ensure privacy?",
      answer: "Student privacy is our top priority. We are FERPA compliant and use enterprise-grade security measures including: encrypted data transmission and storage, regular security audits, strict access controls, and transparent privacy policies. We never sell student data, and you maintain full control over your information. All data is stored securely in the United States with redundant backups."
    },
    {
      question: "Does TeachTrack AI integrate with our existing classroom tools?",
      answer: "Yes! TeachTrack AI seamlessly integrates with popular classroom tools including Google Classroom, Canvas, Schoology, PowerSchool, and most major Student Information Systems (SIS). We also support data import from Excel spreadsheets and CSV files. Our team can help set up custom integrations for schools with specific requirements."
    },
    {
      question: "What kind of support do you provide to teachers?",
      answer: "We offer comprehensive support including: email support for all users, priority phone support for school licenses, extensive help documentation and video tutorials, live onboarding sessions, and optional professional development training. Our support team includes former teachers who understand your challenges and can provide practical guidance."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI recommendations are highly accurate, with a 95% teacher satisfaction rate. The system is trained on educational research and real classroom data, continuously learning and improving. However, we always emphasize that teachers are the experts - our AI provides insights and suggestions, but you make the final instructional decisions based on your professional judgment and knowledge of your students."
    },
    {
      question: "Can I try TeachTrack AI before committing to a subscription?",
      answer: "Absolutely! We offer a 30-day free trial with full access to all features. No credit card required to start. During your trial, you'll have access to our support team and can schedule a personal demo. We want you to be completely confident that TeachTrack AI will benefit your students before you subscribe."
    },
    {
      question: "What devices and browsers does TeachTrack AI work on?",
      answer: "TeachTrack AI is a web-based platform that works on any device with an internet connection. It's optimized for: desktop computers (Windows, Mac, Chromebook), tablets (iPad, Android), and smartphones. We support all modern browsers including Chrome, Firefox, Safari, and Edge. The interface is fully responsive and adapts to your screen size."
    },
    {
      question: "How does billing work for school licenses?",
      answer: "School licenses are billed annually based on the number of teaching staff. Pricing tiers start at 10 teachers and scale up with volume discounts. We offer flexible payment terms including purchase orders, and can work with your district's procurement process. Contact our sales team for a custom quote based on your school's specific needs and budget."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TeachTrack AI
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

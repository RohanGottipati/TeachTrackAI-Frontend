
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🔍',
      title: 'AI-Driven Learning Gap Detection',
      description: 'Our advanced AI algorithms analyze student performance patterns to identify learning gaps before they impact progress, giving teachers early intervention opportunities.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: '👩‍🏫',
      title: 'Personalized Teacher Recommendations',
      description: 'Receive customized instructional strategies and resources tailored to each student\'s learning style, strengths, and areas for improvement.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: '⚡',
      title: 'Easy Onboarding & Setup',
      description: 'Get started in minutes, not hours. Our intuitive platform requires no technical expertise - designed by educators, for educators.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: '📊',
      title: 'Interactive Dashboard Visualizations',
      description: 'Transform complex data into clear, actionable insights with beautiful charts, progress tracking, and real-time analytics.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: '🔒',
      title: 'Data Privacy & Security',
      description: 'Your student data is protected with enterprise-grade security, FERPA compliance, and transparent privacy practices.',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: '🔗',
      title: 'Seamless Integration',
      description: 'Works with your existing classroom tools and learning management systems. No disruption to your current workflow.',
      color: 'bg-teal-50 border-teal-200'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to understand your students better and help them succeed
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} p-8 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                See the Difference in Real-Time
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Watch as our AI identifies patterns in student work, highlights areas of concern, 
                and provides specific recommendations for improvement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Instant feedback on student assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Automated progress tracking and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Personalized intervention suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Parent communication tools</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Dashboard visualization" 
                className="rounded-xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

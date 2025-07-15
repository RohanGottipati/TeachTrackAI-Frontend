
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "3rd Grade Teacher",
      school: "Lincoln Elementary",
      quote: "TeachTrack AI has completely transformed how I understand my students' needs. I can now identify learning gaps weeks before they become real problems. My students are more engaged and confident than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Math Teacher",
      school: "Roosevelt Middle School",
      quote: "The personalized recommendations are incredibly accurate. The AI suggested focusing on specific fraction concepts for several students, and their test scores improved by 40% within a month. It's like having a teaching assistant that never sleeps.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal",
      school: "Washington High School",
      quote: "We implemented TeachTrack AI school-wide last year. Our standardized test scores improved by 23%, and teacher satisfaction is at an all-time high. The data insights help us make better decisions for our students and staff.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Special Education Teacher",
      school: "Oak Valley Elementary",
      quote: "Working with students with diverse learning needs, I need tools that understand individual differences. TeachTrack AI provides insights that help me tailor instruction for each student's unique learning style.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Educators Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what teachers and administrators are saying about TeachTrack AI
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The Results Speak for Themselves</h3>
            <p className="text-xl text-blue-100">Real improvements in real classrooms</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Teacher Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Average Score Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Students Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Schools Using Our Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

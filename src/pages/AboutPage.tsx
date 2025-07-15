
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, Target, Users, Lightbulb, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-blue-600">TeachTrack AI</span>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">TeachTrack AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to empower every teacher with AI-powered insights that help students succeed.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every student deserves personalized education that meets them where they are. TeachTrack AI bridges the gap between classroom reality and individual student needs by giving teachers the insights they need to identify learning gaps and provide targeted support. We believe that when teachers have the right tools, every student can thrive.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-4 text-blue-50">
              <p>
                TeachTrack AI was born from a simple observation: teachers spend countless hours trying to understand where each student struggles, often without the tools to identify patterns or personalize instruction effectively.
              </p>
              <p>
                Founded by educators and technologists who witnessed firsthand the challenges of modern classrooms, we set out to create an AI-powered solution that respects both student privacy and teacher expertise.
              </p>
              <p>
                Today, we're building the future of educational technology—one that puts teachers first and students at the center of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Heart className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Centered</h3>
              <p className="text-gray-600">
                Every decision we make prioritizes student success and well-being. We protect student privacy while providing insights that help them learn better.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Users className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teacher Empowerment</h3>
              <p className="text-gray-600">
                We build tools that enhance teacher expertise, not replace it. Our AI provides insights that support professional judgment and classroom experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Target className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                We follow the highest standards for data protection and never compromise on student privacy. Our AI analyzes learning patterns, not personal information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Lightbulb className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                We constantly improve our AI models and platform based on educator feedback and the latest research in learning science and educational technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              TeachTrack AI is built by a passionate team of educators, technologists, and researchers who understand the real challenges facing today's classrooms.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Founded by Rohan Gottipati</h3>
              <p className="text-blue-700">
                Combining years of experience in education technology with a deep understanding of classroom needs, our team is committed to creating tools that make a real difference in student outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join the growing community of educators using AI to identify learning gaps and improve student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Today
                </Button>
              </Link>
              <Link to="/#contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

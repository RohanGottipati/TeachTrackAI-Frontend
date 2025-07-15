
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
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
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy and your students' privacy are our top priorities
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 28, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Lock className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-800">Canadian Privacy Compliance</h3>
                <p className="mt-2 text-blue-700">
                  TeachTrack AI is designed to comply with Canadian privacy legislation including PIPEDA and provincial education privacy laws. We prioritize data protection and responsible AI use in educational settings.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-blue-600 mr-2" />
              What Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Teacher Account Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Name and email address for account creation</li>
                  <li>School or organization name (optional)</li>
                  <li>Usage analytics to improve our service</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Student Work Analysis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Uploaded student work files (temporarily processed only)</li>
                  <li>AI-generated learning gap analysis results</li>
                  <li>Teaching recommendations based on analysis</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              How We Protect Student Privacy
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Student Data Protection Commitments:</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>No Personal Identifiers:</strong> We never collect or store student names, photos, or identifying information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Temporary Processing:</strong> Student work files are processed and immediately deleted after analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Anonymized Results:</strong> Only learning gap patterns and recommendations are stored, not original work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Teacher Control:</strong> Teachers can delete analysis results at any time</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              How We Use AI Technology
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                TeachTrack AI uses artificial intelligence to analyze student work and identify learning patterns. Here's how we ensure responsible AI use:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Transparent Analysis:</strong> Our AI focuses on academic content patterns, not personal characteristics</li>
                <li><strong>Human Oversight:</strong> AI recommendations are tools to support teacher judgment, not replace it</li>
                <li><strong>Bias Monitoring:</strong> We actively work to identify and minimize algorithmic bias in our analysis</li>
                <li><strong>Continuous Improvement:</strong> We regularly update our AI models based on educator feedback</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention and Deletion</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Our Data Retention Policy:</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Student Work Files:</strong> Deleted immediately after AI analysis (within 24 hours)</li>
                <li><strong>Analysis Results:</strong> Stored for teacher reference until account deletion</li>
                <li><strong>Account Data:</strong> Retained while account is active, deleted within 30 days of account closure</li>
                <li><strong>Usage Analytics:</strong> Anonymized data may be retained for service improvement</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">As a TeachTrack AI user, you have the following rights:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your data at any time</li>
              <li><strong>Correction:</strong> Update or correct your account information</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data</li>
              <li><strong>Portability:</strong> Export your analysis results and recommendations</li>
              <li><strong>Opt-out:</strong> Discontinue use of our service at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@teachtrack.ai<br />
                <strong>Subject Line:</strong> Privacy Policy Inquiry<br />
                <strong>Response Time:</strong> We aim to respond within 48 hours
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify users of any material changes via email and by posting the updated policy on our website. Continued use of TeachTrack AI after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

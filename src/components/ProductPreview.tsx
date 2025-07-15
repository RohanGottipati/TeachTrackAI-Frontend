
import React from 'react';
import { AlertTriangle, Target, TrendingUp, BookOpen, Calculator, Microscope } from 'lucide-react';

const ProductPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Platform Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a glimpse of our concept dashboard and how it helps teachers identify class-wide learning gaps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        {/* Main Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Concept Mockup - Teacher Dashboard</h3>
                <p className="text-blue-100">Preview of class-level insights and AI recommendations</p>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Product Preview
              </div>
            </div>
          </div>
          
          <div className="p-8">
            {/* AI-Detected Learning Gaps */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="mr-3 text-red-500" size={24} />
                AI-Detected Learning Gaps - Class Summary
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Calculator className="text-red-500 mr-2" size={20} />
                      <h5 className="font-semibold text-red-800">Fractions</h5>
                    </div>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Critical</span>
                  </div>
                  <p className="text-red-700 text-sm">68% of class struggling with fraction operations</p>
                  <div className="mt-2 bg-red-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[68%]"></div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <BookOpen className="text-yellow-500 mr-2" size={20} />
                      <h5 className="font-semibold text-yellow-800">Reading Inferences</h5>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Moderate</span>
                  </div>
                  <p className="text-yellow-700 text-sm">45% need support with inference skills</p>
                  <div className="mt-2 bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Microscope className="text-orange-500 mr-2" size={20} />
                      <h5 className="font-semibold text-orange-800">Linear Equations</h5>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Moderate</span>
                  </div>
                  <p className="text-orange-700 text-sm">52% require additional practice</p>
                  <div className="mt-2 bg-orange-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full w-[52%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Whole-Class Actions */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="mr-3 text-blue-500" size={24} />
                Recommended Whole-Class Actions
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h5 className="font-semibold text-blue-900 mb-4">Priority Interventions</h5>
                  <div className="space-y-4">
                    <div className="flex items-start bg-white rounded-lg p-4 border border-blue-200">
                      <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                        <Calculator className="text-red-500" size={16} />
                      </div>
                      <div>
                        <h6 className="font-medium text-gray-900">Review Fractions using Visual Models</h6>
                        <p className="text-sm text-gray-600 mt-1">Implement concrete manipulatives and visual fraction bars for next 3 lessons</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-white rounded-lg p-4 border border-blue-200">
                      <div className="bg-yellow-100 rounded-full p-2 mr-4 flex-shrink-0">
                        <BookOpen className="text-yellow-500" size={16} />
                      </div>
                      <div>
                        <h6 className="font-medium text-gray-900">Schedule Practice Activity for Reading Inferences</h6>
                        <p className="text-sm text-gray-600 mt-1">Use guided practice with think-aloud strategies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h5 className="font-semibold text-green-900 mb-4">Suggested Resources</h5>
                  <div className="space-y-4">
                    <div className="flex items-start bg-white rounded-lg p-4 border border-green-200">
                      <div className="bg-orange-100 rounded-full p-2 mr-4 flex-shrink-0">
                        <Microscope className="text-orange-500" size={16} />
                      </div>
                      <div>
                        <h6 className="font-medium text-gray-900">Revisit Linear Equations with Real-World Examples</h6>
                        <p className="text-sm text-gray-600 mt-1">Connect algebra to practical scenarios students can relate to</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h6 className="font-medium text-gray-900 mb-2">Recommended Timeline</h6>
                      <div className="text-sm text-gray-600">
                        <p>• Week 1-2: Focus on Fractions (Critical)</p>
                        <p>• Week 3: Reading Inferences practice</p>
                        <p>• Week 4: Linear Equations review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Trend Overview */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-3 text-green-500" size={20} />
                Class Mastery Progress Trend
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                  <p className="text-sm text-gray-600">Overall Class Average</p>
                  <div className="mt-2 text-xs text-green-600">↑ 5% from last week</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">Concepts Mastered</p>
                  <div className="mt-2 text-xs text-green-600">↑ 12% this month</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                  <p className="text-sm text-gray-600">Active Learning Gaps</p>
                  <div className="mt-2 text-xs text-blue-600">Down from 7 last month</div>
                </div>
              </div>
              
              {/* Simple Progress Chart Visualization */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Class Progress Over Time</p>
                <div className="flex items-end space-x-2 h-20">
                  <div className="bg-blue-200 rounded-t flex-1 h-12"></div>
                  <div className="bg-blue-300 rounded-t flex-1 h-16"></div>
                  <div className="bg-blue-400 rounded-t flex-1 h-14"></div>
                  <div className="bg-blue-500 rounded-t flex-1 h-18"></div>
                  <div className="bg-blue-600 rounded-t flex-1 h-20"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                  <span>Current</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Showcase */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-blue-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Learning Gap Detection</h4>
            <p className="text-gray-600">Automatically identify class-wide learning gaps and prioritize interventions based on AI analysis.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Actionable Recommendations</h4>
            <p className="text-gray-600">Get specific, practical suggestions for whole-class interventions and reteaching strategies.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Progress Monitoring</h4>
            <p className="text-gray-600">Track class-wide progress and measure the effectiveness of your teaching interventions.</p>
          </div>
        </div>

        {/* Privacy Compliance Notice */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Privacy-First Design:</strong> All data visualizations focus on class-level insights only. 
              Individual student data is protected and compliant with Canadian education privacy standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;

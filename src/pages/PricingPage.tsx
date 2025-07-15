
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, BookOpen, ArrowLeft } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Freemium',
      price: '$0',
      period: '/month',
      description: 'Perfect for individual teachers exploring AI-powered insights',
      features: [
        '3 AI analyses per month',
        'Basic learning gap detection',
        'Teaching recommendations',
        'Standard dashboard access',
        'Email support'
      ],
      limitations: [
        'Limited monthly uploads',
        'Basic reporting features'
      ],
      popular: false,
      cta: 'Start Free',
      ctaLink: '/signup'
    },
    {
      name: 'Teacher License',
      price: '$8',
      period: '/month',
      description: 'Full access for dedicated educators',
      features: [
        'Unlimited AI analyses',
        'Advanced learning gap detection',
        'Personalized teaching strategies',
        'Detailed progress tracking',
        'Downloadable reports',
        'Priority email support',
        'Class insights dashboard'
      ],
      limitations: [],
      popular: true,
      cta: 'Start Free Trial',
      ctaLink: '/signup'
    },
    {
      name: 'School License',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for entire schools',
      features: [
        'Everything in Teacher License',
        'Multi-teacher dashboard',
        'School-wide analytics',
        'Admin controls and oversight',
        'Bulk upload capabilities',
        'Integration support',
        'Dedicated account manager',
        'Custom training sessions'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      ctaLink: '/#contact'
    }
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">TeachTrack AI</span> Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free tier and upgrade as your needs grow. All plans include AI-powered learning gap detection and personalized teaching recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start text-sm text-gray-600">
                          <span className="mr-2">•</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link to={plan.ctaLink} className="block">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Our Freemium plan is always free. Teacher License includes a 14-day free trial with full access.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How does the AI analysis work?</h3>
              <p className="text-gray-600">Upload student work and our AI identifies learning gaps, then provides personalized teaching recommendations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is student data secure?</h3>
              <p className="text-gray-600">Absolutely. We follow Canadian privacy standards and never store personal student information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

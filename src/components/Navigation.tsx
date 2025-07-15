
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">TeachTrack AI</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </button>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="outline" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {user?.name || 'Dashboard'}
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800">
                    Start Free
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                Features
              </button>
              <Link to="/pricing" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                Pricing
              </Link>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left">
                Contact
              </button>
              
              <div className="pt-4 pb-2 space-y-2">
                {isAuthenticated ? (
                  <Link to="/dashboard" className="block">
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="block">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        Start Free
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
